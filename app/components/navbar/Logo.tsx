"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className="hidden md:block cursor-pointer"
      src="/images/Logo.png"
      height={50}
      width={50}
      alt="Logo"
    />
  );
};

export default Logo;
