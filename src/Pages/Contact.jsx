import React from "react";
import { assets } from "../assets/assets_frontend/assets";
function Contact() {
  return (
    <div>
      <div className="text-center  text-2xl  pt-10 font-gray-400  ">
        <p>
          Contact <span className="font-medium font-gray-900">US</span>
        </p>
      </div>
      <div className="flex items-center  justify-center gap-16 my-10 md:flex-row ">
        <div className="my-10 flex flex-col md:flex-row gap-12">
          <img
            className="w-full md:max-w-[360px] "
            src={assets.contact_image}
          
          />
          <div className="flex flex-col justify-center gap-3 md:w-2/4 text-sm text-gray-600">
            <b className="text-xl">OUR OFFICE</b>
            <p>
              00000 Willms Station <br /> Suite 000, Washington, USA
            </p>

            <p>
              Tel: (000) 000-0000 <br />
              Email: chaturvediratnesh16@gmail.com
            </p>
            <b className="text-xl text-gray-600 mt-5">CAREERS AT PRESCRIPTO</b>
            <p>Learn more about our teams and job openings</p>
            <button className="text-start mt-5 bg-white border-2 text-black rounded border-black w-fit p-4 hover:bg-black hover:text-white">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
