import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Experts = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <div className="w-full min-h-[2000px] relative bg-[#111111] overflow-hidden">
        <div className="w-[1066px] h-[1066px] absolute top-[-478px] left-[-539px] roundShadowBlue z-10"></div>

        <div className="relative mt-[65px] container flex justify-between  z-30 ">
          <p className="text-[48px] text-[#FFFFFF] font-semibold leading-[90px]">
            {children}
          </p>
          <div className="flex gap-[16px] items-center">
            <div className="w-[16px] h-[16px] rounded-full bg-[#00F0FF]"></div>
            <div className="w-[16px] h-[16px] rounded-full bg-[#7041EA]"></div>
            <div className="w-[16px] h-[16px] rounded-full bg-[#FF2DF7]"></div>
          </div>
        </div>

        <div className="w-[1066px] h-[1066px] absolute bottom-[-478px] right-[-739px] roundShadowPurple z-10"></div>
      </div>
      <Footer />
    </>
  );
};

export default Experts;
