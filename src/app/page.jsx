"use client";

import Navbar from "@/components/layouts/navbar";
import Home from "./home";


export default function () {
  // useEffect(() => {
  //   window.localStorage.setItem("mode", "dark");
  //   console.log(window.localStorage.getItem("mode"));
  // }, []);
  return (
    <>
      <Navbar />
      <Home />
     
    </>
  );
}
