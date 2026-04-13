import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function FooterPage() {
    return(
        <div>
            <div className="bg-blue-950 w-screen h-fit">
                <div className="flex flex-wrap w-[75%] justify-between mx-auto pt-15">
                    <div className="flex flex-col w-[45%]">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-white font-semibold text-3xl">Company</h2>
                            <div className="bg-pink-800 w-20 h-0.5"></div>
                        </div>
                        <div className="mt-5 space-y-3">
                            <p className="text-neutral-400 w-fit text-lg hover:text-white hover:cursor-pointer hover:translate-x-3 transition-transform">About Us</p>
                            <p className="text-neutral-400 w-fit text-lg hover:text-white hover:cursor-pointer hover:translate-x-3 transition-transform">Our Services</p>
                            <p className="text-neutral-400 w-fit text-lg hover:text-white hover:cursor-pointer hover:translate-x-3 transition-transform">Privacy Policy</p>
                            <p className="text-neutral-400 w-fit text-lg hover:text-white hover:cursor-pointer hover:translate-x-3 transition-transform">Affiliate Program</p>
                        </div>
                    </div>

                    <div className="bg-pink-800 h-52 w-1"></div>

                    <div className="flex flex-col w-[45%] pl-20">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-white font-semibold text-3xl">Get Help</h2>
                            <div className="bg-pink-800 w-20 h-0.5"></div>
                        </div>
                        <div className="mt-5 space-y-3">
                            <p className="text-neutral-400 w-fit text-lg hover:text-white hover:cursor-pointer hover:translate-x-3 transition-transform">FAQ</p>
                            <p className="text-neutral-400 w-fit text-lg hover:text-white hover:cursor-pointer hover:translate-x-3 transition-transform">Shipping</p>
                            <p className="text-neutral-400 w-fit text-lg hover:text-white hover:cursor-pointer hover:translate-x-3 transition-transform">Returns</p>
                            <p className="text-neutral-400 w-fit text-lg hover:text-white hover:cursor-pointer hover:translate-x-3 transition-transform">Book Status</p>
                        </div>
                    </div>

                    <div className="flex flex-col mt-15 w-[45%] pb-15">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-white font-semibold text-3xl">Follow Us</h2>
                            <div className="bg-pink-800 w-20 h-0.5"></div>
                        </div>
                        <div className="flex mt-5 space-x-3">
                            <p className="text-neutral-400 w-fit text-4xl hover:text-white hover:cursor-pointer transition-all"><FaFacebook/></p>
                            <p className="text-neutral-400 w-fit text-4xl hover:text-white hover:cursor-pointer transition-all"><FaInstagram/></p>
                            <p className="text-neutral-400 w-fit text-4xl hover:text-white hover:cursor-pointer transition-all"><FaSquareXTwitter/></p>
                            <p className="text-neutral-400 w-fit text-4xl hover:text-white hover:cursor-pointer transition-all"><FaLinkedin/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}