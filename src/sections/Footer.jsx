import { Link } from "react-router";
import { LuChevronRight } from "react-icons/lu";
import Logo from "../components/Logo";
import { quicklinks, contactInfo } from "../data/data";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-600 text-white">
      {/* Main Footer Content */}
      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Logo className="w-32 h-16 mb-6" />

            <h3 className="text-sm font-light mb-4">DESIGN. BUILD. LAUNCH</h3>

            <p className="mb-6">
              Empowering the next generation of designers and developers through
              innovative education and hands-on experience
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer_header">Quick Links</h3>

            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {quicklinks.map((link, index) => (
                  <li key={index} className="group flex items-center gap-2">
                    <LuChevronRight className="w-4 h-4 -ml-5.5 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block" />
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer_header">contact</h3>

            <ul className="space-y-3 text-white">
              {contactInfo.map((contact, index) => (
                <li key={index} className="">
                  {contact.title == "instagram" ? (
                    <>
                      <p className="capitalize font font-semibold text-lg mb-1">
                        {contact.title}
                      </p>

                      {contact.items.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          target="_blank"
                          className="block hover:underline"
                        >
                          {item.label}
                        </a>
                      ))}
                    </>
                  ) : (
                    <>
                      <p className="capitalize font font-semibold text-lg mb-1">
                        {contact.title}
                      </p>

                      <a href={contact.href} className="hover:underline">
                        {contact.text}
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-200">
                © {currentYear} the kitchen. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
