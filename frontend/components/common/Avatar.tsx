"use client";
import { LogOut } from "@/redux/slices/authSlice";
import { useLogoutMutation } from "@/redux/services/userApi";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import Link from "next/link";
import { useRouter } from "next/navigation";
const UserProfile = () => {
  const [active, setActive] = useState(false);
  const { currentUser } = useSelector(
    (store: { auth: { currentUser?: { name: string; image: string } | null } }) =>
      store.auth
  );
  const [logout] = useLogoutMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    try {
      await logout("");
      router.push("/");
      toast.success("You have been logged out successfully!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    } finally {
      dispatch(LogOut(""));
    }
  };
  const username = currentUser?.name
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
                    {username?.slice(0, 1)[0]}
                  </div>
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[230px] -translate-x-7 border bg-white">
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
                  <span className="text-base lg:text-lg">
                    {currentUser?.name}
                    <span className="block font-normal text-sm lg:text-sm text-[#777]">
                      My Account
                    </span>
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-full flex flex-col pb-3 border-b">
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
                  className="w-full hover:bg-[#fafafa] cursor-pointer text-center py-2 font-semibold text-[#d02828ed]"
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
