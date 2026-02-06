import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init({
      publicKey: "G1VoN0TaLqSRG6nMO",
    });
  }, []);

  const onSubmitHandler = async (data) => {
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...");

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        location: data.location,
        message: data.message || "No message provided",
        date: new Date().toLocaleString(),
      };

      await emailjs.send("service_pfv045l", "template_ffw1zct", templateParams);

      // Dismiss loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("Message sent successfully! We'll get back to you soon.");

      reset();
    } catch (error) {
      console.error("Failed to send email:", error);

      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Container */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#fff",
            color: "#333",
          },
          success: {
            duration: 4000,
            iconTheme: {
              primary: "#10B981",
              secondary: "#fff",
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: "#EF4444",
              secondary: "#fff",
            },
          },
          loading: {
            duration: Infinity,
            iconTheme: {
              primary: "#F59E0B",
              secondary: "#fff",
            },
          },
        }}
      />

      <form className="space-y-4" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Your Name:
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Your Email:
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block font-medium mb-1">
              Your Phone:
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Your Message (Optional):
          </label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Type your message here"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            rows={4}
            disabled={isSubmitting}
          />
        </div>

        <div className="flex justify-between">
          <div></div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 transform hover:scale-105"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
