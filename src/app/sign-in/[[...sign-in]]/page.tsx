import { SignIn } from "@clerk/nextjs"
import { resolve } from "path"

export default function SignInPage() {
    setTimeout(resolve, 5000)
    return(
        <div className="flex justify-center items-center py-8">
            <SignIn/>
        </div>
    )
}