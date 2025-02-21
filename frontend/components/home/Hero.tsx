"use client";
import { onLoginModal, onRegisterModal } from "@/redux/slices/modalSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
const Hero = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store: { auth?: any }) => store.auth);

  return (
    <div className="min-h-[550px]  py-12 lg:py-24 flex items-center gap-8 justify-center">
      <div className="max-w-custom mx-auto overflow-hidden w-[90%] grid grid-cols-1 gap-8 lg:gap-16">
        <div className="w-full flex lg:items-center lg:justify-center flex-col gap-10">
          <h2
            className="text-4xl md:text-6xl lg:text-center max-w-[500px] lg:max-w-[1000px]
           leading-[1] lg:text-7xl text-[var--dark-1)]"
          >
            Simplify Your Task, <br /> Maximize Your Success
          </h2>
          <span className="text-base lg:text-2xl text-[#777] font-normal lg:text-center max-w-[560px] md:max-w-[700px]">
            Effortlessly manage your tasks, track performance, and scale your
            business—all in one place. RayTaskify gives you the tools to thrive
            in the competitive world of productivity.
          </span>
          <div className="flex items-center">
            {currentUser ? (
              <div className="flex items-center justify-end gap-2 md:gap-4">
                <span className="">
                  <Link href={"/dashboard"} className="btn">
                    View your Tasks
                  </Link>
                </span>
              </div>
            ) : (
              <div className="flex items-center lg:justify-center gap-2 md:gap-4">
                <span className="">
                  <button
                    onClick={() => dispatch(onLoginModal(""))}
                    className="btn"
                  >
                    <span className="p-1">Create a Task</span>
                  </button>
                </span>
                <button
                  onClick={() => dispatch(onRegisterModal(""))}
                  className="btn btn_2"
                >
                  <span className="p-1"> Get Started</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
