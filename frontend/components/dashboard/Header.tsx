"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import UserProfile from "../common/Avatar";

const Header = () => {
  return (
    <div className="w-full  sticky top-0 z-[60] py-4 bg-transparent">
      <div
        style={{ backdropFilter: "blur(24px)" }}
        className="w-full mx-auto border px-5 bg-[#ffffffe3] rounded-full py-4 min-h-[75px] flex items-center justify-between"
      >
        <div className="flex items-center gap-8 lg:gap-12">
          <Link href={"/"} className="text-lg lg:text-2xl text-[var(--dark-1)]">
            Taskify
          </Link>
        </div>
        <div className="hidden lg:flex flex-1 justify-center items-center gap-12">
          <Link href={"#"} className="text-lg text-[var(--dark-1)] font-normal">
            My Tasks
          </Link>
          <Link href={"#"} className="text-lg text-[var(--dark-1)] font-normal">
            Setting
          </Link>
          <Link href={"#"} className="text-lg text-[var(--dark-1)] font-normal">
            Analytics
          </Link>
        </div>
        <div className="flex items-center justify-end gap-8 md:gap-12">
          <div className="flex items-center justify-end">
            <div className="flex items-center justify-end gap-2 md:gap-4">
              <UserProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
