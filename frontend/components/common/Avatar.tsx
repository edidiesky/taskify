"use client";
import { LogOut } from "@/redux/slices/authSlice";
import { useLogoutMutation } from "@/redux/services/userApi";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import Link from "next/link";
const UserProfile = () => {
  const [active, setActive] = useState(false);
  const { currentUser } = useSelector((store: { auth?: any }) => store.auth);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    try {
      dispatch(LogOut(""));
      await logout("");
      toast.success("You have been logged out successfully!");
    } catch (err: any) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <div className=" relative">
      {currentUser && (
        <div className="flex items-center justify-end gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-2">
                {currentUser?.image ? (
                  <img
                    onClick={() => setActive(!active)}
                    src={currentUser?.image}
                    alt=""
                    className="w-14 h-14 object-cover rounded-full"
                  />
                ) : (
                  <div
                    onClick={() => setActive(!active)}
                    className="w-12 h-12 flex items-center text-[#fff] justify-center text-xl rounded-full bg-[#A1718A]"
                  >
                    {currentUser?.fullname?.slice("")[0]}
                  </div>
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[270px] -translate-x-7 border bg-white">
              <div className="w-full flex flex-col gap-4">
                <div className="flex w-full relative py-3 border-b px-4 items-center gap-4 cursor-pointer">
                  <img
                    src={
                      currentUser?.image
                        ? currentUser?.image
                        : "https://fundednext.fra1.digitaloceanspaces.com/dashboard/demo-avatar.jpg"
                    }
                    className="w-12 h-12 object-cover rounded-full"
                    alt="Avatar for user"
                  />
                  <span className="text-base font-selleasy_regular">
                    {currentUser?.fullname}
                    <span className="block font-normal font-work_font text-xs text-dark">
                      My Account
                    </span>
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-full font-work_font flex flex-col pb-3 border-b">
                    <Link
                      href={`/dashboard`}
                      className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]"
                    >
                      My Tasks
                    </Link>
                    <Link
                      href={"/dashboard"}
                      className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]"
                    >
                      My Profile
                    </Link>
                  </div>
                 
                </div>

                <div
                  onClick={handleLogOut}
                  className="w-full hover:bg-[#fafafa] cursor-pointer font-work_font text-center py-2 font-semibold text-[#d02828ed]"
                >
                  Sign Out
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
