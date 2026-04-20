import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

const isPublicRoute = createRouteMatcher([
  "/",                 
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, getToken } = await auth();
  const token = await getToken({ template: "jwt-role-template" });

  if(!token) {
    return NextResponse.next();
  }

  const decoded = jwt.decode(token);

  const url = new URL(req.url);

  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  if(url.pathname.startsWith("/dashboard")) {
    if(!userId) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }


    if (url.pathname === "/dashboard") {
      if (!userId) {
        return NextResponse.next();
      }

      if (typeof decoded === "object" && decoded !== null) {
        const payload = decoded as JwtPayload & { role?: string };
        const role = payload?.role;

        if (!role) {
          return NextResponse.redirect(new URL("/onboarding", req.url));
        }

        if (role === "admin") {
          return NextResponse.redirect(new URL("/dashboard/admin", req.url));
        }

        if (role === "user") {
          return NextResponse.redirect(new URL("/dashboard/user", req.url));
        }
      }
      
    }
  }
});


export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};