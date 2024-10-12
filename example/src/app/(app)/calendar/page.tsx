import CalendarApp from "@/app/(admin)/calendar/components";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Calendar",
};


const page = () => {
  return (
    <>
      <CalendarApp />
    </>
  );
};

export default page;
