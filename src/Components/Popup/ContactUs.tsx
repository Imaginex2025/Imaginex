import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactUsPopup = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      ...formData,
      access_key: "dac2c29c-df63-4f86-9efb-925740290f61",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    setIsLoading(false);

    if (res.success) {
      
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal Content */}
        <motion.div
          className="bg-[#211824] text-white rounded-lg p-6 w-[90%] max-w-xl shadow-lg relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 bg-[#000000d9] flex flex-col items-center justify-center rounded-lg z-50"
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-400 mb-2">
                  🎉 Message Sent!
                </h2>
                <p className="text-sm text-white/80">We'll get back to you soon.</p>
              </div>
            </motion.div>
          )}

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <button
              onClick={onClose}
              className="text-white bg-[#B53ECF] rounded-[9px] p-1 cursor-pointer text-4xl"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded bg-[#2E2132] placeholder:text-gray-400 outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded bg-[#2E2132] placeholder:text-gray-400 outline-none"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 rounded bg-[#2E2132] placeholder:text-gray-400 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 h-32 resize-none rounded bg-[#2E2132] placeholder:text-gray-400 outline-none"
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`py-3 rounded-lg text-white font-semibold transition-all ${
                isLoading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#9b2f9f] to-[#6a1b9a]"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactUsPopup;
