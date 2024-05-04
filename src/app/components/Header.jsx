"use client";

import { signIn, useSession,signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="shadow-sm border-b sticky top-0 bg-black z-index-30 p-2">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* logo */}

        <Link href="/" className="hidden lg:inline-flex">
          <Image
            src="/pic2.webp"
            width={96}
            height={96}
            alt="instagramLogo"
            className="bg-red-500 rounded px-4 py-2"
          />
        </Link>

        <Link href="/" className="lg:hidden">
          <Image src="/pic1.webp" width={40} height={40} alt="instagramLogo" />
        </Link>

        {/* searchInput */}

        <input
          type="text"
          placeholder="search"
          className="bg-gray-50 border
             border-gray-300 rounded text-sm w-full py-2 px-4 max-w-[210px]"
        />

        {/* menuItem */}

        {session ? (
          <img src={session.user.image} alt={session.user.name} className="
          h-10 w-10 rounded-full cursor-pointer" onClick={signOut}/>
        ) : (
          <button
            onClick={signIn}
            className="text-blue-500 text-sm font-bold"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
}
