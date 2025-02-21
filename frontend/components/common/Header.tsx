"use client";
import { onLoginModal, onRegisterModal } from "@/redux/slices/modalSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "./Avatar";
import Link from "next/link";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store: { auth?: any }) => store.auth);
  // console.log(currentUser);
  return (
    <div className="w-full py-4 bg-transparent">
      <div className="w-full px-6 md:w-[90%] max-w-custom mx-auto border bg-[#FFFFFF] rounded-full py-4 min-h-[55px] flex items-center justify-between">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link
            href={"/"}
            className="text-lg lg:text-2xl text-[var(--dark-1)]"
          >
            RayTaskify
          </Link>
        </div>
        <div className="hidden lg:flex flex-1 justify-center items-center gap-12">
          <Link
            href={"#"}
            className="text-lg text-[var(--dark-1)] font-normal"
          >
            Features
          </Link>
          <Link
            href={"#"}
            className="text-lg text-[var(--dark-1)] font-normal"
          >
            App
          </Link>
          <Link
            href={"#"}
            className="text-lg text-[var(--dark-1)] font-normal"
          >
            Pricing
          </Link>
          <Link
            href={"#"}
            className="text-lg text-[var(--dark-1)] font-normal"
          >
            Integration
          </Link>
        </div>
        <div className="flex items-center justify-end gap-8 md:gap-12">
          <div className="flex items-center justify-end">
            {currentUser ? (
              <div className="flex items-center justify-end gap-2 md:gap-4">
                <Link
                  href={"/dashboard"}
                  className="btn bg-[#3e3aff] shadows"
                >
                  Go to Dashboard
                </Link>

                <Avatar />
              </div>
            ) : (
              <div className="flex items-center justify-end gap-2 md:gap-4">
                <span className="">
                  <button
                    onClick={() => dispatch(onLoginModal(""))}
                    className="btn"
                  >
                    Get Started
                  </button>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
