import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import ContactUsPopup from "./Popup/ContactUs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile sidebar
  const [isOpen2, setIsOpen2] = useState(false); // Contact popup
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false); // Mobile dropdown
  const [isServicesHovered, setIsServicesHovered] = useState(false); // Desktop popover

  const location = useLocation();
  const hideTraining = ["/Ip", "/monitization", "/insights", "/infringement"].includes(location.pathname);

  function scrollToElementByIdWithOffset(id: any, offset = 100) {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  let hoverTimeout: NodeJS.Timeout | null = null;

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsServicesHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsServicesHovered(false);
    }, 500); // Half-second delay to prevent flicker
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-[100] bg-[#0E0A0F]"
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center border-b border-[#2E2132] justify-between px-20 py-5 relative">
        <div>
          <img src="/logo.png" alt="logo" />
          <p className="text-[8px] font-semibold">A Patent Intelligence & Innovation company</p>
        </div>
        <ul className="flex items-center gap-8 text-white alex relative">
          <Link to="/" className="cursor-pointer hover:text-[#DC7FF3] transition-colors duration-200">
            <li className="cursor-pointer hover:text-[#DC7FF3] transition-colors duration-200">Home</li>
          </Link>

          {!hideTraining && (
            <li onClick={() => scrollToElementByIdWithOffset("inovators")} className="cursor-pointer hover:text-[#DC7FF3] transition-colors duration-200">Training</li>
          )}

          {/* Desktop Services Popover */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <li className="cursor-pointer hover:text-[#DC7FF3] transition-colors duration-200">
              Services
            </li>
            {isServicesHovered && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#211824] border border-[#3a2d3c] rounded-lg shadow-lg py-4 z-50">
                <ul className="flex flex-col px-4 gap-3 text-sm text-white text-start">
                  <Link to="/Ip" className="hover:text-[#DC7FF3] transition cursor-pointer">Patent Tech and Consulting</Link>
                  <Link to="/infringement" className="hover:text-[#DC7FF3] transition cursor-pointer">Infringement Analysis and Enforcement</Link>
                  <Link to="/insights" className="hover:text-[#DC7FF3] transition cursor-pointer">Patent Insights and Analytics</Link>
                  <Link to="/monitization" className="hover:text-[#DC7FF3] transition cursor-pointer">Patent Monetization and Licensing</Link>


                </ul>
              </div>
            )}
          </div>
        </ul>
        <button
          onClick={() => setIsOpen2(true)}
          className="rounded-[6px] alex px-5 flex py-3 items-center gap-2 bg-[#AF2ECB] shadow-[inset_0_0_9px_1px_#DC7FF3] hover:brightness-110 transition"
        >
          <p>Contact Us</p>
          <img src="/contact-icon.svg" alt="contact" />
        </button>
      </div>

      {/* Mobile Top Bar */}
      <div className="flex md:hidden items-center border-b border-[#2E2132] justify-between px-6 py-3 md:py-4">
                         <div>
          <img src="/logo.png" alt="logo" height={9} />
          <p className="text-[7.8px] text-white font-semibold">A Patent Intelligence & Innovation company</p>
        </div>
        <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
          <img src="/menu-icon.png" alt="menu" className="h-6" />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bg-gradient-to-b from-[#0E0A0F] to-[#443149] h-full w-[70%] text-white alex p-6 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <img src="/logo.png" alt="logo" className="h-8" />
            <p className="text-[4.8px] font-semibold">A Patent Intelligence & Innovation company</p>
          </div>
          <button
            className="bg-[#B53ECF] rounded-[9px] p-1 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="space-y-6 text-[16px]">
<li>
  <a
    href="/"
    className="flex items-center gap-3 bg-[#483A4B] rounded-[5px] p-3 cursor-pointer hover:bg-[#5b4960] transition"
  >
    <img src="/mission-icon.svg" className="w-6 h-6" alt="Home" />
    Home
  </a>
</li>


          {!hideTraining && (
            <li onClick={() => scrollToElementByIdWithOffset("inovators")} className="flex items-center gap-3 bg-[#483A4B] rounded-[5px] p-3 cursor-pointer hover:bg-[#5b4960] transition">
              <img src="/ecosystem-icon.svg" className="w-6 h-6" alt="Training" />
              Training
            </li>
          )}

          {/* Mobile Services Dropdown */}
          <li className="flex flex-col bg-[#483A4B] rounded-[5px]">
            <div
              className="flex items-center gap-3 p-3 cursor-pointer hover:bg-[#5b4960] transition"
              onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
            >
              <img src="/impact-icon.svg" className="w-6 h-6" alt="Services" />
              <span>Services</span>
              <span className="ml-auto text-xs">{isServicesOpenMobile ? "▲" : "▼"}</span>
            </div>
            {isServicesOpenMobile && (
              <ul className="px-5 pb-3 text-sm flex flex-col gap-3">
                <Link to="/Ip" onClick={() => setIsOpen(false)} className="hover:text-[#DC7FF3] cursor-pointer transition">Patent Tech and Consulting</Link>
                <Link to="/infringement" onClick={() => setIsOpen(false)} className="hover:text-[#DC7FF3] cursor-pointer transition">Infringement Analysis and Enforcement</Link>
                <Link to="/insights" onClick={() => setIsOpen(false)} className="hover:text-[#DC7FF3] cursor-pointer transition">Patent Insights and Analytics</Link>
                <Link to="/monitization" onClick={() => setIsOpen(false)} className="hover:text-[#DC7FF3] cursor-pointer transition">Patent Monetization and Licensing</Link>


              </ul>
            )}
          </li>

          <li onClick={() => setIsOpen2(true)} className="flex items-center gap-3 bg-[#483A4B] rounded-[5px] p-3 cursor-pointer hover:bg-[#5b4960] transition">
            <img src="/contact-icon.svg" className="w-6 h-6" alt="Contact" />
            Contact
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)}></div>
      )}
      {isOpen2 && <ContactUsPopup onClose={() => setIsOpen2(false)} />}
    </motion.div>
  );
};

export default Navbar;
