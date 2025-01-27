import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  GraduationCap,
  BookOpen,
  Clock,
  Shield,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { title: "Paramedical Sciences", href: "#" },
    { title: "Nursing", href: "#" },
    { title: "Pharmacy", href: "#" },
    { title: "Engineering", href: "#" },
    { title: "Management", href: "#" },
    { title: "Polytechnic", href: "#" },
    { title: "BCA", href: "#" },
    { title: "MCA", href: "#" },
  ];

  const usefulLinks = [
    { title: "Admission Process", href: "#" },
    { title: "Scholarship", href: "#" },
    { title: "Academic Calendar", href: "#" },
    { title: "Campus Life", href: "#" },
    { title: "Research", href: "#" },
    { title: "Placement", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Same */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Himdev Educational Foundation Trust
            </h3>
            <p className="text-white/80 mb-6">
              Dedicated to transforming education and empowering students
              through innovative learning approaches and comprehensive
              development programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/70 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <GraduationCap className="mr-2" /> Our Courses
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <BookOpen className="mr-2" /> Student Resources
            </h4>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="mr-3 w-8 h-8 text-white" /> Contact Us
            </h4>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-white" />
                <span className="text-white/90 text-base">
                  Near Pramod Tiwari Hospital, Main Road Kotwali Chowk,
                  Khiriyaghat, West Champaran Bettiah (Bihar) 845438
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-white" />
                <span className="text-white/90 text-base">
                  <a href="tel:9452215870" className="hover:underline">
                    9452215870
                  </a>
                  ,{" "}
                  <a href="tel:9113304680" className="hover:underline">
                    9113304680
                  </a>
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 mt-1 flex-shrink-0 text-white" />

                <a
                  href="mailto:himdeveducational6287@gmail.com"
                  className="text-white/90 text-base"
                >
                  himdeveducational6287@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-white" />
                <span className="text-white/90 text-base">
                  Mon-Sat: 9:00 AM - 5:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/70">
            © {new Date().getFullYear()} Himdev Educational Foundation Trust.
            All Rights Reserved. Designed with passion for educational
            excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
