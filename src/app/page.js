"use client";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  // console.log("Hello world");
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/dashboard");
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl text-center">Welcome to next js home page</h1>

      <button
        onClick={handleNavigate}
        className="my-5 py-2 px-1 bg-green-400 text-white rounded-xl"
      >
        Dashboard
      </button>
    </div>
  );
};

export default HomePage;
