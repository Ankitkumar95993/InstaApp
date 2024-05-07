"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between mt-14 scroll-ml-10 ">
      <img
        className="w-16 h-16 rounded-full 
        border p-[2px]"
        src={session?.user?.image || "/pic1.webp"}
        alt="user-profile photo aur instagram logo"
      />
      <div className="flex flex-col ml-4 justify-start">
      <h2 className="font-bold">{session?.user?.username}</h2>
      <h3 className="text-sm text-gray-400 text-center">
          Welcome To Instagram
        </h3>
      </div> 
    
      {
        session ? (
            <button onClick={signOut} className="text-blue-500 font-semibold
             text-sm" >Sign out</button>
        ):(
            <button onClick={signIn} className="text-blue-500 font-semibold
            text-sm" >Sign in</button>
        )
      }
      
    </div>
  );
}
