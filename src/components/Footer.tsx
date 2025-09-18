import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Globe,
} from "lucide-react";
import { useRouter } from "./Router";
import hrqLogo from "figma:asset/e48705bed5d6c442b7c0cb01554f3fc6e0b94257.png";

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer style={{ backgroundColor: '#15014c' }} className="text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div
              className="flex items-center mb-6 cursor-pointer"
              onClick={() => navigate("home")}
            >
              <img
                src={hrqLogo}
                alt="HRQ - Human Resource Quantum"
                className="w-16 h-16 object-contain"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming HR from an administrative function
              into a strategic driver of business success.
            </p>
            <div className="flex space-x-4">
              <div 
                style={{backgroundColor: '#00ABF5'}}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div 
                style={{backgroundColor: '#00ABF5'}}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
              >
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div 
                style={{backgroundColor: '#00ABF5'}}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
              >
                <Facebook className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigate("home")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("about")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("services")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("industries")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("case-studies")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("insights")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("careers")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigate("services")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  HR Outsourcing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("services")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Recruitment
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("services")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("services")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  HR Transformation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("services")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Learning & Development
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">
                    +92 331 133 4595
                  </p>
                  <p className="text-white/80">
                    +92 323 242 1030
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <p className="text-white/80">info@hr-q.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-white flex-shrink-0" />
                <p className="text-white/80">www.hr-q.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © 2025 Human Resource Quantum (HRQ). All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button
              onClick={() => navigate("privacy")}
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate("terms")}
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => navigate("cookies")}
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}