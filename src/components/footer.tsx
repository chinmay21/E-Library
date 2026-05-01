import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function FooterPage() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-12">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Company</h2>
            <div className="bg-pink-800 w-16 h-0.5 mt-2 mb-4"></div>

            <div className="space-y-3">
              {["About Us", "Our Services", "Privacy Policy", "Affiliate Program"].map((item) => (
                <p
                  key={item}
                  className="text-neutral-400 text-sm md:text-lg hover:text-white hover:translate-x-2 transition-all cursor-pointer w-fit"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Help */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Get Help</h2>
            <div className="bg-pink-800 w-16 h-0.5 mt-2 mb-4"></div>

            <div className="space-y-3">
              {["FAQ", "Shipping", "Returns", "Book Status"].map((item) => (
                <p
                  key={item}
                  className="text-neutral-400 text-sm md:text-lg hover:text-white hover:translate-x-2 transition-all cursor-pointer w-fit"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Follow Us</h2>
            <div className="bg-pink-800 w-16 h-0.5 mt-2 mb-4"></div>

            <div className="flex gap-4 mt-4 text-2xl md:text-3xl">
              <FaFacebook className="text-neutral-400 hover:text-white cursor-pointer transition-all" />
              <FaInstagram className="text-neutral-400 hover:text-white cursor-pointer transition-all" />
              <FaSquareXTwitter className="text-neutral-400 hover:text-white cursor-pointer transition-all" />
              <FaLinkedin className="text-neutral-400 hover:text-white cursor-pointer transition-all" />
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-neutral-700 pt-5 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} E-Library. All rights reserved.
        </div>

      </div>
    </footer>
  );
}