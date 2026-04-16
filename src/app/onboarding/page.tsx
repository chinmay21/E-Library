import { setRole } from "./action";

export default function OnboardingPage() {
    return(
        <div>
            <div className="bg-indigo-200 h-100 flex flex-col items-center pt-5">
                <form action={setRole}>
                    <p className="text-3xl font-semibold text-blue-900 mx-auto w-fit">Select your Role</p>
                    <div className="flex mt-25 justify-between w-150">
                        <button 
                            name="role"
                            value="user"
                            className="text-lg text-blue-900 group rounded-lg relative z-10 hover:text-white
                            hover:shadow-blue-900 hover:shadow-lg bg-[#FFC107] p-1 py-2 px-3 w-50 cursor-pointer
                            transition-all ease-in"
                        >
                            User
                            <div className="absolute bg-black right-0 scale-x-0 group-hover:scale-x-100 origin-left 
                            transition-transform duration-150 ease-in top-0 h-11 w-50 rounded-lg -z-5">
                            </div>
                        </button>
                        

                        <button 
                            name="role"
                            value="admin"
                            className="text-lg text-blue-900 group rounded-lg relative z-10 hover:text-white
                            hover:shadow-blue-900 hover:shadow-lg bg-[#FFC107] p-1 py-2 px-3 w-50 cursor-pointer
                            transition-all ease-in"
                        >
                            Admin
                            <div className="absolute bg-black right-0 scale-x-0 group-hover:scale-x-100 origin-left 
                            transition-transform duration-150 ease-in top-0 h-11 w-50 rounded-lg -z-5">
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}