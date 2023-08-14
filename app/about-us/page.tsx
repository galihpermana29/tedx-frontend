"use client";

import { Metadata } from "next";
import AboutUsMobile from "./mobile";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUs() {
  return (
    <>
      <AboutUsMobile />
    </>
  );
}
