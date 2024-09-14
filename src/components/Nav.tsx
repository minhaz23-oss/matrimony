"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

import Link from "next/link";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import { links } from "../constraints/script";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };
  return (
    <div>
      <div className=" z-10 shadow-xl px-[10px] sm:px-[100px] py-[10px]  flex justify-between items-center w-full h-[60px] rounded-b-md">
        <Image src="/logo.png" width={200} height={50} alt="logo" />
        <div className=" lg:flex hidden gap-[30px] items-center h-full ">
          <Link href='/' className=" font-semibold hover:border-b-2 cursor-pointer border-blue">Home</Link>
          <p className=" font-semibold hover:border-b-2 cursor-pointer border-blue">About Us</p>
          <p className=" font-semibold hover:border-b-2 cursor-pointer border-blue">FAQ</p>
          <p className=" font-semibold hover:border-b-2 cursor-pointer border-blue">Guide</p>
          <p className=" font-semibold hover:border-b-2 cursor-pointer border-blue">Contact</p>
        </div>
        <div>
          <SignedIn>
            <CgProfile
              onClick={handleMenu}
              className=" cursor-pointer text-[30px] text-blue"
            />
          </SignedIn>

          <SignedOut>
            <div className=" flex  gap-2">
              <Link
                href="/sign-in"
                className=" font-bold border-2 border-blue rounded-md text-blue px-[15px] py-[7px]"
              >
                SignIn
              </Link>
              <Link
                href="/sign-up"
                className=" bg-blue text-white font-bold rounded-md px-[15px] py-[7px]"
              >
                SignUp
              </Link>
            </div>
          </SignedOut>
        </div>

        {/* <div className=" lg:hidden flex gap-3">
          <FaBars
            className=" text-[30px]"
            onClick={() => {
              setMenu(!menu);
            }}
          />
        </div> */}
      </div>
      {menu && (
        <div className="mt-1 right-[10px] absolute  w-[200px] p-3 bg-white shadow-xl rounded-md">
          <div className=" flex flex-col gap-2 cursor-pointer font-bold ">
            
            {links.map((val, index) => (
              <div key={index} className="hover:bg-blue/[50%] p-2  w-full rounded-md">
                <Link href={val.link} className="flex gap-5 w-full items-center ">
                 <Image src={`/${val.icon}`} width={20} height={20} alt="icon" />
                 <p>{val.title}</p>
                </Link>
              </div>
            ))}
          </div>
          <SignedIn>
            <SignOutButton>
              <button
                onClick={() => setMenu(false)}
                className=" bg-blue font-bold rounded-md px-5 py-2 text-white mt-2"
              >
                Sign out
              </button>
            </SignOutButton>
          </SignedIn>
          <SignedOut>
            <div className=" flex  gap-2 mt-3">
              <button className=" font-bold border-2 border-blue rounded-md text-blue px-[15px] py-[7px]">
                Login
              </button>
              <button className=" bg-blue text-white font-bold rounded-md px-[15px] py-[7px]">
                Signup
              </button>
            </div>
          </SignedOut>
        </div>
      )}
    </div>
  );
};

export default Nav;
