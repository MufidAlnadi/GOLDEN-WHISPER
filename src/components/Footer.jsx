import React from "react";
import { FaGoogle, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center h-full">
        <div className="flex mb-4">
          <a
            href="#!"
            className="mr-4 text-gray-300 hover:text-white"
            style={{ fontSize: "1.3rem" }}
          >
            <FaGoogle />
          </a>
          <a
            href="#!"
            className="mr-4 text-gray-300 hover:text-white"
            style={{ fontSize: "1.3rem" }}
          >
            <FaFacebook />
          </a>
          <a
            href="#!"
            className="mr-4 text-gray-300 hover:text-white"
            style={{ fontSize: "1.3rem" }}
          >
            <FaLinkedin />
          </a>
          <a
            href="#!"
            className="mr-4 text-gray-300 hover:text-white"
            style={{ fontSize: "1.3rem" }}
          >
            <FaInstagram />
          </a>
        </div>
        <div className="text-gray-400 text-sm">
          © 2023 Golden Whissper. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
