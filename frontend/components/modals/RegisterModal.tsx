"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { RegisterFormData } from "@/constants";
import { useSelector, useDispatch } from "react-redux";
import { onLoginModal, offRegisterModal } from "@/redux/slices/modalSlice";
import { slide } from "@/constants/framer";
import { useRegisterMutation } from "@/redux/services/userApi";
import Loader from "../common/loader";
import toast from "react-hot-toast";
const RegisterModal = () => {
  const { registermodal } = useSelector((store?: any) => store.modal);
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    email: "",
    fullname: "",
    password: "",
  });
  // )kD+ib7B5(c/Kh@

  const [register, { isLoading, isSuccess }] = useRegisterMutation();
  const noEntry = formValue.email === "";
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleOnLoginModal = () => {
    dispatch(offRegisterModal(""));
    dispatch(onLoginModal(""));
  };
  const handleFormSubmision = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const data = await register(formValue).unwrap();
      // dispatch(setUserCredentials({ data }));
      toast.success(data?.message);
    } catch (err: any) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(offRegisterModal(""));
      dispatch(onLoginModal(""));
    }
  }, [isSuccess]);
  return (
    <div className="h-[100vh] bg-[#16161639] inset-0 backdrop-blur-sm w-full fixed top-0 left-0 z-[5000] flex items-center justify-center">
      <motion.div
        variants={slide}
        initial="initial"
        animate={registermodal ? "enter" : "exit"}
        exit={"exit"}
        className="modal-content w-full min-h-full md:w-[400px] md:max-w-[800px] lg:w-[800px] md:min-h-[550px] lg:h-[550px] justify-center relative items-start bg-white"
      >
        <div
          onClick={() => dispatch(offRegisterModal(""))}
          className="absolute top-4 right-4 text-[#000] cursor-pointer w-10 h-10 z-20 flex items-center hover:bg-[#aeaeae58]  rounded-full justify-center text-xl"
        >
          <RxCross2 />
        </div>
        <div className="w-full h-full grid lg:grid-cols-2">
          <div className="w-full flex flex-col justify-center gap-4 py-16 md:py-8 px-10">
            <div className="w-full flex flex-col">
              <h3 className="text-3xl capitalize ">
                Sign in & take <br /> control of your tasks!
              </h3>
              <span className="block text-base md:text-base font-work_font max-w-[250px] pt-1">
                Your business, your tasks, just one Sign Up away!
              </span>
            </div>
            <form
              onSubmit={handleFormSubmision}
              className="w-full mt-3 flex flex-col gap-2"
            >
              <div className="w-full flex flex-col gap-2">
                {RegisterFormData?.map((formdata, index) => {
                  return (
                    <label
                      key={index}
                      htmlFor=""
                      className="text-sm flex flex-col gap-1"
                    >
                      <span className="">
                        {formdata?.text}
                      </span>
                      <input
                        type={formdata?.type}
                        value={formValue[formdata.name]}
                        name={formdata.name}
                        onChange={(e) => onChange(e)}
                        placeholder={formdata?.label}
                        className="text-sm font-normal input bg-white rounded-full w-full "
                      />
                    </label>
                  );
                })}
              </div>
              <div className="w-full mt-2 flex items-center justify-center flex-col gap-3">
                <button
                  data-test="loginmodal_button"
                  type="submit"
                  disabled={noEntry}
                  className="p-3 px-8 hover:opacity-[.5] text-[#fff] flex btn items-center justify-center w-full cursor-pointer  bg-[#000] rounded-md"
                >
                  {isLoading ? (
                    <div className="w-full flex justify-center items-center gap-4">
                      <Loader type="dots" /> Registration in progress
                      {/* Login in progress */}
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>
                <div className="w-full flex items-center justify-start gap-2">
                  <span className="text-sm font-normal text-dark">
                    <span className="">Already a Member?</span>{" "}
                    <span
                      onClick={handleOnLoginModal}
                      style={{ textDecoration: "underline" }}
                      className="font-work_font cursor-pointer"
                    >
                      Sign In
                    </span>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full h-full relative">
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

export default RegisterModal;
