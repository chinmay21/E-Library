import SignInPage from "@/app/sign-in/[[...sign-in]]/page";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function NavbarPage() {
    return(
        <div>
            <div className="bg-blue-500 h-15 flex justify-end pr-55 items-center">
                <div className="flex gap-5">
                    <SignInButton>
                        <button 
                            className="rounded-md p-1 px-3 text-blue-500 bg-indigo-200 hover:bg-indigo-300
                            transition-all ease-in duration-200 hover:scale-110"
                        >
                            SignIn
                        </button>
                    </SignInButton>

                    <SignUpButton>
                        <button 
                            className="rounded-md p-1 px-3 text-blue-500 bg-indigo-200 hover:bg-indigo-300
                            transition-all ease-in duration-200 hover:scale-110"
                        >
                            SignUp
                        </button>
                    </SignUpButton>
                </div>
            </div>
        </div>
    )
}