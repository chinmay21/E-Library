import { SignInButton, SignUpButton, Show } from "@clerk/nextjs";
import { SignOutButton } from "./signOutButton";
import { SignInBtn } from "./signInButton";
import { SignUpBtn } from "./signUpButton";
import DashboardButton from "./dashboardButton";

export default function NavbarPage() {
  return (
    <div className="bg-blue-500 px-4 md:px-10">
      <div className="flex h-16 items-center justify-between">

        {/* Logo / Title */}
        <div className="text-white font-semibold text-lg md:text-xl">
          E-Library
        </div>

        {/* Auth Section */}
        <div>
          <Show when="signed-in">
            <div className="flex gap-3 md:gap-5">
              <DashboardButton />
              <SignOutButton />
            </div>
          </Show>

          <Show when="signed-out">
            <div className="flex gap-3 md:gap-5">
              <SignInButton forceRedirectUrl={"/dashboard"}>
                <SignInBtn />
              </SignInButton>

              <SignUpButton>
                <SignUpBtn />
              </SignUpButton>
            </div>
          </Show>
        </div>

      </div>
    </div>
  );
}