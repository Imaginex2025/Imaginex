import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactUsPopup from "./Popup/ContactUs.tsx";

const Footer = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleFooterNavClick = (sectionId: string) => {
    navigate("/", { state: { scrollTo: sectionId.toLowerCase() } });
  };

  return (
    <footer className="bg-[#0E0A0F] text-white border-t border-[#2E2132] text-xs sm:text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-10 pb-0 px-5 sm:px-20 py-10">
        {/* Logo & Description */}
        <div className="flex-1 h-full flex flex-col justify-end">
          <img src="/img.png" alt="logo" className="w-35 mb-4" />
          <p className="text-xs sm:text-sm text-gray-300">
            ImagineX is a True Human Enterprise — where ideas become patents, patents into products, and innovation serves humanity.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex-1">
          <ul className="flex cursor-pointer flex-col gap-2 md:items-center text-xs sm:text-sm">
            {["Home", "About", "Pillars"].map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleFooterNavClick(link)}
                  className="hover:text-purple-400 transition-colors duration-200 bg-transparent border-none p-0 m-0 text-left"
                >
                  {link}
                </button>
              </li>
            ))}
            <li
              className="cursor-pointer hover:text-purple-400 transition-colors duration-200"
              onClick={() => setIsOpen(true)}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1">
          <ul className="flex flex-col gap-2 text-xs sm:text-sm">
            <Link to="/Ip" className="hover:text-purple-400 transition-colors duration-200">Patent Tech and Consulting</Link>
            <Link to="/infringement" className="hover:text-purple-400 transition-colors duration-200">Infringement Analysis and Enforcement</Link>
            <Link to="/insights" className="hover:text-purple-400 transition-colors duration-200">Patent Insights and Analytics</Link>
            <Link to="/monitization" className="hover:text-purple-400 transition-colors duration-200">Patent Monetization and Licensing</Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <ul className="flex flex-col justify-end gap-2 md:items-end text-xs sm:text-sm">
            <li>
              <a href="mailto:info@theimaginex.com" className="hover:text-purple-400 transition-colors duration-200">
                info@theimaginex.com
              </a>
              <div className="mt-2">
                <div className="bg-[#AF2ECB] cursor-pointer justify-end w-6 flex p-1 rounded-[3px] hover:brightness-110 transition duration-200">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/theimaginex">
                    <img src="/linkedin.png" alt="linkedin" className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full px-5 sm:px-20 py-6 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-gray-400 z-10">
        <p>© 2025 ImagineX Innovations. All rights reserved.</p>
        <p>Bangalore</p>
      </div>

      {/* Contact Popup */}
      {isOpen && <ContactUsPopup onClose={() => setIsOpen(false)} />}
    </footer>
  );
};

export default Footer;
