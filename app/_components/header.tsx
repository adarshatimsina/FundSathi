"use client";
import React, { useEffect, useState } from "react";
import { HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // Ensure this code runs only on the client-side
  }, []);

  const MenuList = [
    { name: "Home", path: "/" },
    { name: "Discover", path: "/discover" },
    { name: "About", path: "/about" },
  ];

  if (!isClient) {
    // Returning a fallback on server side to prevent hydration mismatch
    return null;
  }

  return (
    <div className="flex p-4 px-10 md:px-32 lg:px-48 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 border-b-4 border-white/40 justify-between items-center rounded-lg shadow-lg">
      <h2 className="font-bold text-lg bg-black text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
        FUND SATHI
      </h2>

      <ul className="hidden md:flex gap-8 text-white font-semibold">
        {MenuList.map((menu, index) => (
          <li
            key={index}
            className="px-4 py-2 cursor-pointer hover:border-b-2 hover:border-white transition-all duration-300"
          >
            <Link href={menu.path}>{menu.name}</Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-6 items-center">
        <HeartHandshake className="w-8 h-8 text-yellow-400 transition-all duration-300 hover:text-yellow-500" />

        <Link href="/dashboard">
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300">
            Start a campaign
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
