import { clerkMiddleware, createRouteMatcher, auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const isPublicRoute = createRouteMatcher([
  "/",                 
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

const postSignInRoute = createRouteMatcher([
  "/dashboard",
])

clerkMiddleware(async (auth, req) => {
  if(postSignInRoute(req)) {
    redirect("/dashboard");
  }
})

export const proxy = clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});


export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};