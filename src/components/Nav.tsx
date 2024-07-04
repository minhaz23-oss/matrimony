"use client";
import Image from "next/image";
import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


const Nav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div className=" flex justify-between items-center w-full h-[60px]">
        <Image src='/logo.png' width={250} height={60} alt="logo" />
        <div className=" lg:flex hidden gap-[30px] items-center h-full ">
          <p>Home</p>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Guide</p>
          <p>Contact</p>
        </div>
        <div>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        
          <SignedOut>
            <div className=" lg:flex hidden  gap-2">
              <Link
                href="/sign-in"
                className=" font-bold border-2 border-pink rounded-md text-pink px-[15px] py-[7px]"
              >
                SignIn
              </Link>
              <Link
                href="/sign-up"
                className=" bg-pink text-white font-bold rounded-md px-[15px] py-[7px]"
              >
                SignUp
              </Link>
            </div>
            </SignedOut>
  
        </div>

        <div className=" lg:hidden flex gap-3">
          <FaBars
            className=" text-[30px]"
            onClick={() => {
              setMenu(!menu);
            }}
          />
        </div>
      </div>
      {menu && (
        <div className=" float-right w-[200px] p-3 bg-purple-200 rounded-md">
          <div className=" flex flex-col gap-7">
            <p>Home</p>
            <p>About Us</p>
            <p>FAQ</p>
            <p>Guide</p>
            <p>Contact</p>
          </div>
          <div className=" flex  gap-2 mt-3">
            <button className=" font-bold border-2 border-pink rounded-md text-pink px-[15px] py-[7px]">
              Login
            </button>
            <button className=" bg-pink text-white font-bold rounded-md px-[15px] py-[7px]">
              Signup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
