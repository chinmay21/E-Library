import { SignInButton, SignUpButton, SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function NavbarPage() {

    const { userId } = await auth();
    return(
        <div>
            <div className="bg-blue-500 h-15 flex justify-end pr-55 items-center">
                {
                   userId ? (
                    <SignOutButton>
                        <button className="rounded-md cursor-pointer p-1 px-3 text-blue-500 bg-indigo-200 hover:bg-indigo-300 transition-all ease-in duration-200 hover:scale-110">SignOut</button>
                    </SignOutButton>
                   ) 
                   : (
                        <div className="flex gap-5">
                            <SignInButton>
                                <button 
                                    className="rounded-md cursor-pointer p-1 px-3 text-blue-500 bg-indigo-200 hover:bg-indigo-300
                                    transition-all ease-in duration-200 hover:scale-110"
                                >
                                    SignIn
                                </button>
                            </SignInButton>

                            <SignUpButton>
                                <button 
                                    className="rounded-md cursor-pointer p-1 px-3 text-blue-500 bg-indigo-200 hover:bg-indigo-300
                                    transition-all ease-in duration-200 hover:scale-110"
                                >
                                    SignUp
                                </button>
                            </SignUpButton>
                        </div>
                   )
                }
            </div>
        </div>
    )
}