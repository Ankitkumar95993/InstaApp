"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { IoIosAddCircleOutline } from "react-icons/io";
import {HiCamera} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const [selectedFile,setSelectedFile] = useState(null);
  const [imageFileUrl,setImageFileUrl] = useState(null);
  const filePickerRef = useRef(null);


   function addImageToPost(e){

    const file = e.target.files[0];
    if(file){
      setSelectedFile(file);
      console.log(file);
      setImageFileUrl(URL.createObjectURL(file));
      console.log(imageFileUrl);

    }
  

   }


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
          <div className="flex gap-2 items-center ">
            <IoIosAddCircleOutline
              onClick={() => setIsOpen(true)}
              className="text-2xl cursor-pointer text-red-500 transform
           hover:scale-125 transition duration-300 hover:text-white "
            />
            <img
              src={session.user.image}
              alt={session.user.name}
              className="
          h-10 w-10 rounded-full cursor-pointer"
              onClick={signOut}
            />
          </div>
        ) : (
          <button onClick={signIn} className="text-blue-500 text-sm font-bold">
            Log In
          </button>
        )}
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] 
        translate-x-[-50%]  border-2 rounded-md shadow-md" 
        onRequestClose={()=>setIsOpen(false)} ariaHideApp={false}>
          <div className="flex flex-col items-center justify-center">
            <HiCamera  className="text-4xl text-gray-400 cursor-pointer " onClick={()=>filePickerRef.current.click()}/>
            <input hidden ref={filePickerRef}  type="file" accept="image/*" onChange={addImageToPost}
            />
          </div>
          <input  type='text' maxLength='156' placeholder= "Please enter your caption..."
          className="m-4 border-none text-center w-full focus:ring-0 outline-none"/>
          <button disabled className="w-full bg-red-600 text-white p-2 shadow-md rounded-lg hover:brightness-105 
          disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100">Upload Post</button>
          <AiOutlineClose className=" cursor-pointer absolute top-2 right-2 hover:text-red-600 transition duration-300" onClick={()=>setIsOpen(false)}/>
        </Modal>
      )}
    </div>
  );
}
