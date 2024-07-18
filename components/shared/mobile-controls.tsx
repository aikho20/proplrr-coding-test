"use client";

import React from "react";

import Link from "next/link";

import { mobileControls } from "@/data";

import { usePathname } from "next/navigation";
const MobileControls = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-row w-full items-center md:hidden justify-around sticky bottom-0 left-0 bg-white z-10 shadow-md p-5">
      {mobileControls.map((items, index) => {
        const Icon = items.icon;
        return (
          <Link className="text-sm" key={index} href={items.path}>
            <Icon
              className={`h-6 w-6 ${
                pathname === items.path ? "text-primary" : "text-gray-400"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default MobileControls;
