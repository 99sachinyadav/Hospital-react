import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router";

function Banner() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-auto
     rounded bg-primary flex items-center justify-center py-5 px-4  "
    >
      {/* left size */}
      <div className="flex-1 py-8 sm:py-10   md:py-16 lg:pl-5 ">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white md:p-5 sm:pl-6">
          <h2>BooK Appointment</h2>
          <h1 className="mt-4">With 100+ Trusted Doctors</h1>
          <button
            onClick={() => {navigate("/login"); scrollTo(0,0)}}
            className="bg-gray-200 p-3 mt-3 rounded-full text-sm 
             text-gray-900  hover:transition-all duration-300 hover:scale-105" 
          >
            Create Account
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative  ">
        <img
          className="w-full   absolute  right-0 bottom-[-190px]  max-w-md"
          src={assets.appointment_img}
          alt="#"
        />
      </div>
    </div>
  );
}

export default Banner;
