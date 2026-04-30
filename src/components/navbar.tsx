import { SignInButton, SignUpButton, Show } from "@clerk/nextjs";
import { SignOutButton } from "./signOutButton"
import { SignInBtn } from "./signInButton";
import { SignUpBtn } from "./signUpButton";
import DashboardButton from "./dashboardButton";


export default async function NavbarPage() {

    return(
        <div>
            <div className="bg-blue-500 h-15 flex justify-end pr-55 items-center">
                <Show when="signed-in">
                    <SignOutButton/>
                    <DashboardButton/>
                </Show>

                <Show when="signed-out">
                    <div className="flex gap-5">
                        <SignInButton forceRedirectUrl={"/dashboard"}>
                            <SignInBtn/>
                        </SignInButton>

                        <SignUpButton>
                            <SignUpBtn/>
                        </SignUpButton>
                    </div>
                </Show>
            </div>
        </div>
    )
}