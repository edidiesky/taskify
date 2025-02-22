"use client";
import Loader from "@/components/common/loader";
import { useRouter } from "next/navigation";
import { ComponentType, useEffect, useState } from "react";

export const protectRoute = <P extends object>(Component: ComponentType<P>) => {
  return function AuthenticatedComponent(props: P) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/");
      } else {
        setLoading(false);
      }
    }, [router]);
    if (loading) {
      return (
        <div className="w-full h-full bg-white z-[10000] flex items-center justify-center">
          <Loader type="" />
        </div>
      );
    }
    return <Component {...props} />;
  };
};
