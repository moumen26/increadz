import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import AnimatedButton from "./AnimatedButton"; // Reuse your existing button
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// EmailJS configuration - Replace these with your actual EmailJS credentials
// See email-template-setup.md for complete setup instructions
const EMAILJS_SERVICE_ID = "service_yxxr74l"; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_q2ejbs1"; // Replace with your EmailJS template ID
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = "template_socw5om"; // Auto-reply template ID
const EMAILJS_PUBLIC_KEY = "JZmqenmj38konVZGy"; // Replace with your EmailJS public key

// --- Icons ---
const ArrowDown = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const getOptions = (t) => [
  { value: "photography", label: t("photography") },
  { value: "web-design", label: t("webDesign") },
  { value: "app-development", label: t("appDevelopment") },
  { value: "social-media", label: t("socialMedia") },
  { value: "branding", label: t("branding") },
  { value: "other", label: t("other") },
];

const CustomSelect = ({ theme, t, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || null);
  const options = getOptions(t);

  useEffect(() => {
    if (value) {
      const option = options.find((opt) => opt.value === value);
      setSelectedOption(option);
    }
  }, [value, options]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option.value);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      {/* Select Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-transparent py-4 text-left text-lg focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer flex items-center justify-between border-b ${
          theme === "dark" ? "border-white/20" : "border-gray-300"
        }`}
      >
        <span
          className={
            selectedOption
              ? theme === "dark"
                ? "text-white"
                : "text-gray-900"
              : "text-gray-500"
          }
        >
          {selectedOption ? selectedOption.label : t("selectOption")}
        </span>
        <motion.div
          className="text-cyan-400"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowDown />
        </motion.div>
      </button>

      {/* Label */}
      <label className="absolute left-0 -top-4 text-gray-500 text-xs">
        {t("interestedIn")}
      </label>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 w-full mt-2 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl ${
              theme === "dark"
                ? "bg-[#0a0a0a] border border-white/10"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className="max-h-64 overflow-y-auto custom-scrollbar">
              {options.map((option, index) => (
                <motion.button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={`w-full text-left px-6 py-3 hover:bg-cyan-400/10 transition-colors last:border-b-0 flex items-center justify-between group border-b ${
                    theme === "dark"
                      ? "text-white border-white/5"
                      : "text-gray-900 border-gray-100"
                  }`}
                >
                  <span className="group-hover:text-cyan-400 transition-colors">
                    {option.label}
                  </span>
                  {selectedOption?.value === option.value && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-4 h-4 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Contact() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle select change
  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      interest: value,
    }));
    if (errors.interest) {
      setErrors((prev) => ({
        ...prev,
        interest: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("emailInvalid");
    }

    if (!formData.interest) {
      newErrors.interest = t("interestRequired");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("messageRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS template parameters for main contact email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: "contact@increadz.com",
        interest: formData.interest,
        message: formData.message,
        // Additional template variables for professional styling
        company_name: "Increadz",
        website_url: "https://increadz.com",
        current_date: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        current_time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Auto-reply template parameters for customer confirmation
      const autoReplyParams = {
        to_name: formData.name,
        to_email: formData.email,
        customer_name: formData.name,
        interest: formData.interest,
        message: formData.message,
        company_name: "Increadz",
        website_url: "https://increadz.com",
        support_email: "contact@increadz.com",
        current_date: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };

      // Send main contact email to your business
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Main email sent successfully:", result.text);

      // Send auto-reply confirmation to the customer
      const autoReplyResult = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        autoReplyParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Auto-reply sent successfully:", autoReplyResult.text);

      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        interest: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");

      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`relative py-24 md:py-32 overflow-hidden transition-colors duration-500 ${
        theme === "dark" ? "bg-black" : "bg-gray-50"
      }`}
      id="contact"
    >
      {/* Optional Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
          {/* --- LEFT SIDE: Content --- */}
          <motion.div
            className="lg:w-5/12 lg:sticky lg:top-24 lg:self-start shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* The Vertical Cyan Line Decoration */}
            <div
              className={`absolute -left-6 top-2 bottom-2 w-[2px] hidden lg:block ${
                theme === "dark" ? "bg-white/5" : "bg-gray-200"
              }`}
            >
              <motion.div
                className="w-full h-32 bg-cyan-400"
                initial={{ height: 0 }}
                whileInView={{ height: 128 }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
            </div>

            <motion.h2
              className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span
                className={`block font-light transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {t("contactTitle1")}
              </span>
              <span className="block font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                {t("contactTitle2")}
              </span>
            </motion.h2>

            <motion.p
              className={`mt-8 text-lg max-w-sm font-light mb-10 transition-colors duration-500 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t("contactDescription")}
            </motion.p>
          </motion.div>

          {/* --- RIGHT SIDE: Form --- */}
          <div className="lg:w-7/12">
            <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative"
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder=" "
                  className={`peer w-full bg-transparent py-4 text-lg focus:outline-none focus:border-cyan-400 transition-colors border-b ${
                    errors.name
                      ? "border-red-400"
                      : theme === "dark"
                      ? "border-white/20 text-white"
                      : "border-gray-300 text-gray-900"
                  }`}
                />
                <label
                  htmlFor="name"
                  className={`absolute left-0 top-4 text-base transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 pointer-events-none ${
                    errors.name ? "text-red-400" : "text-gray-500"
                  }`}
                >
                  {t("yourName")}
                </label>
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=" "
                  className={`peer w-full bg-transparent py-4 text-lg focus:outline-none focus:border-cyan-400 transition-colors border-b ${
                    errors.email
                      ? "border-red-400"
                      : theme === "dark"
                      ? "border-white/20 text-white"
                      : "border-gray-300 text-gray-900"
                  }`}
                />
                <label
                  htmlFor="email"
                  className={`absolute left-0 top-4 text-base transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 pointer-events-none ${
                    errors.email ? "text-red-400" : "text-gray-500"
                  }`}
                >
                  {t("emailAddress")}
                </label>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </motion.div>

              {/* Interest Select (Custom Look) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <CustomSelect
                  theme={theme}
                  t={t}
                  value={formData.interest}
                  onChange={handleSelectChange}
                />
                {errors.interest && (
                  <p className="text-red-400 text-xs mt-1">{errors.interest}</p>
                )}
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="group relative"
              >
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder=" "
                  style={{ minHeight: "120px" }}
                  className={`peer w-full bg-transparent py-4 text-lg focus:outline-none focus:border-cyan-400 transition-colors resize-none border-b ${
                    errors.message
                      ? "border-red-400"
                      : theme === "dark"
                      ? "border-white/20 text-white"
                      : "border-gray-300 text-gray-900"
                  }`}
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height =
                      Math.max(e.target.scrollHeight, 120) + "px";
                  }}
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-0 top-4 text-base transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 pointer-events-none ${
                    errors.message ? "text-red-400" : "text-gray-500"
                  }`}
                >
                  {t("message")}
                </label>
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="pt-4"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    relative group overflow-hidden rounded-full
                    px-8 py-3 font-medium text-lg w-full md:w-auto
                    transition-all duration-500
                    hover:scale-105 active:scale-95
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${
                      theme === "dark"
                        ? "bg-white text-black"
                        : "bg-gray-900 text-white"
                    }
                  `}
                >
                  <span
                    className="
                      absolute left-1/2 top-1/2
                      -translate-x-1/2 -translate-y-1/2
                      bg-cyan-400 rounded-full
                      w-0 h-0
                      transition-all duration-500 ease-in-out
                      group-hover:w-96 group-hover:h-96
                    "
                  ></span>

                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        <span>{t("sending") || "Sending..."}</span>
                      </>
                    ) : (
                      <span>{t("sendNow")}</span>
                    )}
                  </div>
                </button>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
                    >
                      <p className="text-green-400 text-sm text-center">
                        {t("messageSent")}
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                    >
                      <p className="text-red-400 text-sm text-center">
                        {t("messageFailed")}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
