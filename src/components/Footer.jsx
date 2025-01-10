import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary text-2xl font-bold">C</span>
              </div>
              <span className="text-2xl font-bold">C Store</span>
            </div>
            <p className="text-sm">
              Revolutionizing the way you shop, one click at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>info@cstore.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>123 Tech Street, Digital City</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-accent transition-colors"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p>&copy; 2023 C Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
