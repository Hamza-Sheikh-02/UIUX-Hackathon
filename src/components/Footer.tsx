import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSkype,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[rgb(42,37,75)] text-white px-4 md:px-16 lg:px-32 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-bold mb-4 text-lg">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h3 className="font-bold mb-4 text-lg">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
            <li>Crockery</li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h3 className="font-bold mb-4 text-lg">Our Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h3 className="font-bold mb-4 text-lg">Join our mailing list</h3>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 bg-gray-600 text-white rounded-none focus:outline-none"
            />
            <button className="bg-white text-[rgb(42,37,75)] px-4 py-2 rounded-none border-l border-gray-300">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center border-t border-gray-600 pt-4">
        <div className="text-sm text-center md:text-left mt-4 md:mt-0">
          Copyright © 2022 Avion LTD
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/hamza-sheikh-351766298/"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-sheikh-351766298/"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-sheikh-351766298/"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-sheikh-351766298/"
            aria-label="Skype"
          >
            <FaSkype size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-sheikh-351766298/"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-sheikh-351766298/"
            aria-label="Pinterest"
          >
            <FaPinterest size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
