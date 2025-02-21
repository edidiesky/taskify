"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { LoginFormData } from "@/constants";
import { useSelector, useDispatch } from "react-redux";
import { offLoginModal, onRegisterModal } from "@/redux/slices/modalSlice";

import { slide } from "@/constants/framer";
import { useLoginMutation } from "@/redux/services/userApi";
import toast from "react-hot-toast";

import { setUserCredentials } from "@/redux/slices/authSlice";
import Loader from "../common/loader";
import { useRouter } from "next/navigation";
const LoginModal = () => {
  const { loginmodal } = useSelector(
    (store: { modal: { loginmodal: boolean } }) => store.modal
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    password: "",
    email: "",
  });
  const [login, { isLoading, data: currentUser, isSuccess: loginIsSuccess }] =
    useLoginMutation();

  const noEntry =
    formValue.email === "" || formValue.password === "" || isLoading;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleFormSubmision = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const data = await login(formValue).unwrap();
      // console.log(data)
      dispatch(setUserCredentials({ user: data }));
      toast.success("Login Process succesfully!!");
    } catch (err: any) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleOnRegisterModal = () => {
    dispatch(offLoginModal(""));
    dispatch(onRegisterModal(""));
  };

  useEffect(() => {
    if (currentUser) {
      const timer = setTimeout(() => router.push(`/dashboard`), 200);
      dispatch(offLoginModal(""));
      return () => clearTimeout(timer);
    }
  }, [currentUser, router, dispatch]);

  return (
    <div className="h-[100vh]  bg-[#16161639] inset-0 backdrop-blur-sm w-full fixed top-0 left-0 z-[5000] flex items-end lg:items-center lg:justify-center">
      <motion.div
        variants={slide}
        initial="initial"
        animate={loginmodal ? "enter" : "exit"}
        exit={"exit"}
        className="modal-content w-full min-h-[80%] h-[80%] md:w-[400px] md:max-w-[800px] lg:w-[800px] lg:min-h-[550px] lg:h-[550px]  justify-center
                 relative items-start bg-white"
      >
        <div
          onClick={() => dispatch(offLoginModal(""))}
          className="absolute top-2 md:top-4 right-4 text-[#000] cursor-pointer w-10 lg:w-12 h-10 lg:h-12 flex items-center hover:bg-[#7777772a] rounded-md justify-center z-[20] text-xl"
        >
          <RxCross2 />
        </div>
        <div className="w-full h-full grid lg:grid-cols-2">
          <div className="w-full flex flex-col justify-center gap-4 py-16 md:py-12 px-10">
            <div className="w-full flex flex-col gap-1">
              <h3 className="text-2xl capitalize md:text-3xl">
                Sign in & take <br /> control of your Tasks!
              </h3>
              <span className="block text-base md:text-base text-[#777] font-work_font max-w-[250px] pt-1">
                Your business, your task - one login away!
              </span>
            </div>
            <form
              onSubmit={handleFormSubmision}
              className="w-full mt-3 flex flex-col gap-2"
            >
              {LoginFormData?.map((formdata, index) => {
                return (
                  <label
                    key={index}
                    htmlFor=""
                    className="text-sm flex flex-col gap-2"
                  >
                    <span>{formdata?.text}</span>
                    <input
                      type={formdata?.type}
                      value={formValue[formdata.name]}
                      name={formdata.name}
                      onChange={(e) => onChange(e)}
                      placeholder={formdata?.label}
                      className="text-sm font-normal input bg-white rounded-md w-full "
                    />
                  </label>
                );
              })}
              <div className="w-full mt-4 flex items-center justify-center flex-col gap-3">
                <button
                  data-test="loginmodal_button"
                  type="submit"
                  disabled={noEntry}
                  className="flex btn items-center justify-center w-full cursor-pointer rounded-md"
                >
                  {isLoading ? (
                    <div className="w-full flex justify-center items-center gap-4">
                      <Loader type="dots" color={"#fff"} /> Login in progress
                      {/* Login in progress */}
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>
                <div className="w-full flex items-center justify-start gap-2">
                  <span className="text-sm font-normal text-dark">
                    <span className="">Not yet a Member?</span>{" "}
                    <span
                      onClick={handleOnRegisterModal}
                      style={{ textDecoration: "underline" }}
                      className="font-work_font family2 cursor-pointer"
                    >
                      Sign Up
                    </span>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full h-full lg:block hidden relative">
            <img
              src={
                "https://app.crisp.chat/images/components/initiate/InitiateLayout/illustration_background.svg"
              }
              className="w-full h-full object-cover z-4"
              alt="login background"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginModal;
