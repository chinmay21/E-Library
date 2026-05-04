import { setRole } from "./action";

export default function OnboardingPage() {
    return (
        <div className="min-h-screen bg-indigo-200 flex items-start justify-center pt-10 px-4">
            
            <form action={setRole} className="w-full max-w-2xl">
                
                <p className="text-3xl font-semibold text-blue-900 text-center">
                    Select your Role
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mt-12 justify-center">
                    
                    {/* User Button */}
                    <button 
                        name="role"
                        value="user"
                        className="text-lg text-blue-900 group rounded-lg relative z-10 hover:text-white
                        hover:shadow-blue-900 hover:shadow-lg bg-[#FFC107] py-2 px-3 w-full sm:w-1/2
                        cursor-pointer transition-all ease-in overflow-hidden"
                    >
                        User
                        <div className="absolute bg-black right-0 scale-x-0 group-hover:scale-x-100 origin-left 
                        transition-transform duration-150 ease-in top-0 h-full w-full rounded-lg -z-10">
                        </div>
                    </button>

                    {/* Admin Button */}
                    <button 
                        name="role"
                        value="admin"
                        className="text-lg text-blue-900 group rounded-lg relative z-10 hover:text-white
                        hover:shadow-blue-900 hover:shadow-lg bg-[#FFC107] py-2 px-3 w-full sm:w-1/2
                        cursor-pointer transition-all ease-in overflow-hidden"
                    >
                        Admin
                        <div className="absolute bg-black right-0 scale-x-0 group-hover:scale-x-100 origin-left 
                        transition-transform duration-150 ease-in top-0 h-full w-full rounded-lg -z-10">
                        </div>
                    </button>

                </div>

            </form>
        </div>
    );
}