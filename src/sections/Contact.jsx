import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import Badge from "../components/Badge";
import { publickey, serviceID as sId, templateID as tID } from "../data/data";
import MotionElement from "../components/MotionElement";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const serviceID = sId;
  const templateID = tID;
  const publicKey = publickey;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);

      // Show success toast
      toast.success("Message sent successfully! We'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-(--color-three)" size={24} />,
      icon_bg: "bg-(--color-three)/10",
      title: "Email Us",
      details: ["thekitchenclasshq@gmail.com"],
    },
    {
      icon: <FaPhone className="text-(--color-six)" size={24} />,
      icon_bg: "bg-(--color-six)/10",
      title: "Call Us",
      details: ["+234 915 180 8951"],
    },
  ];

  return (
    <section className="py-16 px-4 bg-extra overflow-hidden" id="contact">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 5000,
            iconTheme: {
              primary: "#10B981",
              secondary: "#fff",
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: "#EF4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className={`text-white`} Icon={FaEnvelope}>
            Reach Out
          </Badge>

          <MotionElement delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6">
              Get In Touch
            </h2>
          </MotionElement>

          <MotionElement delay={0.4}>
            <p className="max-w-2xl mx-auto">
              Have a question or want to work together? Fill out the form below
              and we'll get back to you as soon as possible.
            </p>
          </MotionElement>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <MotionElement axis="x" position={-30}>
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 ${item.icon_bg} rounded-lg`}>
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">
                        {item.title}
                      </h3>

                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </MotionElement>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <MotionElement axis="x">
              <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-gray-700 font-medium mb-2">
                        Full Name *
                      </label>

                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:outline-1 focus:outline-(--color-seven) transition-colors"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>

                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:outline-1 focus:outline-(--color-seven) transition-colors"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone and Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>

                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:outline-1 focus:outline-(--color-seven) transition-colors"
                          placeholder="080 1234 5678"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-gray-700 font-medium mb-2">
                        Subject
                      </label>

                      <div className="relative">
                        <MdOutlineSubject
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={20}
                        />

                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:outline-1 focus:outline-(--color-seven) transition-colors"
                          placeholder="How can we help you?"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:outline-1 focus:outline-(--color-seven) transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-(--color-seven) text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-gray-500 text-sm text-center mt-4">
                    * Required fields
                  </p>
                </form>
              </div>
            </MotionElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
