"use client";
import React, { useEffect, useState } from "react";
import { HeartHandshake } from "lucide-react";
import Link from "next/link";

function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // Ensure this code runs only on the client-side
  }, []);

  const FooterLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Contact", path: "/contact" },
  ];

  if (!isClient) {
    // Returning a fallback on server side to prevent hydration mismatch
    return null;
  }

  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white p-6 md:px-32 lg:px-48 border-t-4 border-white/40">
      {/* Links Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex gap-5 mb-4 md:mb-0">
          {FooterLinks.length > 0 ? (
            FooterLinks.map((link, index) => (
              <Link key={index} href={link.path}>
                <p className="cursor-pointer hover:border-b-2 hover:border-white transition-all duration-300">
                  {link.name}
                </p>
              </Link>
            ))
          ) : (
            <p>No footer links available yet.</p> // Temporary message
          )}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex flex-col items-center mt-4">
        <HeartHandshake className="w-8 h-8 text-yellow-400 transition-all duration-300 hover:text-yellow-500 mb-2" />
        <p>&copy; 2025 FundSathi. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
