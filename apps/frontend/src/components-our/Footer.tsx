"use client";

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export const Footer = () => {
  const pathname = usePathname();

  // Footer navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/login", label: "Login" },
    { href: "#", label: "about" },
    { href: "#", label: "Carrers" },
    { href: "#", label: "Team" },
  ];

  // Social icons links
  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/my-design-minds/",
      icon: faLinkedinIn,
    },
    {
      href: "https://www.facebook.com/mydesignminds/",
      icon: faFacebookF,
    },
    {
      href: "https://www.instagram.com/mydesignminds/",
      icon: faInstagram,
    },
    // Add more if needed
  ];

  return (
    <div className="bg-[#f2f2f2] mt-2">
      <div className="max-w-7xl flex flex-col md:items-center pl-5 py-10 pt-15 md:mx-auto poppins">
        <Logo isFooter />

        <div className="flex flex-col justify-center items-center gap-6 mt-10">
          <div className="md:mx-auto flex flex-col items-start md:flex-row md:justify-center md:items-center gap-10 px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:border-b-[var(--primary-cards-color)] text-gray-800 border-3 border-transparent transition capitalize ${
                  pathname === link.href ? "font-bold" : "font-medium"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 mx-auto md:gap-6">
            {socialLinks.map((social) => (
              <Link
                target="_blank"
                key={social.href}
                href={social.href}
                className="flex group transition-transform duration-300 items-center justify-center text-sm rounded-full p-2 h-11 w-11 md:w-15 md:h-15"
                style={{ backgroundColor: "var(--primary-cards-color)" }}
              >
                <FontAwesomeIcon
                  style={{ height: "25px", width: "25px" }}
                  className="text-white w-7 h-7 group-hover:scale-120 transition-all duration-400"
                  icon={social.icon}
                />
              </Link>
            ))}
          </div>

          <p className="text-sm font-medium text-center">
            <Link className="text-blue-600 underline" href={"privacy-policy"}>
              Privacy Notice
            </Link>{" "}
            & Terms Of Services
          </p>
        </div>
      </div>
    </div>
  );
};
