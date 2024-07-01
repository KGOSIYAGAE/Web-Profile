import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../../Components/About/About";

function Home() {
  return (
    <div className="grid gap-2 p-10 md:grid-cols-2">
      <div className="flex  justify-center flex-col gap-5">
        <h4>HI THERE 👋 I'M</h4>
        <h1 className="text-6xl font-bold">Kgosiyagae Motabogi</h1>
        <h4 className="text-blue-500">DEVELOPER + UI/UX DESIGNER</h4>
        <p>I'm a professional App developer with UI/UX Designer skills based in kimberley</p>
        <button className="w-[150px] bg-blue-500 p-3 rounded-3xl hover:bg-blue-600">Hire Me</button>
      </div>
      <div className="flex items-center justify-center">
        <img src="/sticker-laptop.webp" alt="kgosi's picture" />
      </div>
    </div>
  );
}

export default Home;
