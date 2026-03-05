import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">

        <p className="text-sm">
          © 2026 Your Company. All rights reserved.
        </p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;