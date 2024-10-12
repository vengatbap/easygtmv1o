'use-client';
import React from "react";
import Image from "next/image";
import LogoLarge from "../../public/images/logo-icon-lg.svg";
import TagImg from "@/components/EasyGtmTagImg";
import Logo from "@/components/Logo";

const LeftSidebarPart = () => {
  return (
    <>
      <div className="flex justify-center h-screen items-center z-10 relative">
        <div className="xl:w-7/12 xl:px-0 px-5">
          <div className="mt-6 mb-6 flex justify-center ">
            <Logo size={'120px'} />

          </div>
          <h2 className="text-center mt-6 mb-6 font-medium">
            Welcome to EasyGTM
          </h2>
          <p className="opacity-75 flex justify-center my-4 text-lg font-normal">
            Campaigns Made <Image src={TagImg} alt="materilm" className="ml-2" />
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftSidebarPart;

