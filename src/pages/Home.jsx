import React from "react";
import { useEffect } from "react";
import TypewriterText from "../components/TypewriterText";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import imagedeveloper from "../Assets/images/doctor.png";
import { color } from "framer-motion";
import logo from "../Assets/images/brain_logo.png";
import * as THREE from "../utils/three-vanta.js";
import NET from "vanta/dist/vanta.net.min.js";
function Home() {
  const socialMedia = UserData.socialMedia;

  const socialMediaIcons = {
    AiFillGithub: AiFillGithub,
    FaLinkedinIn: FaLinkedinIn,
    AiOutlineTwitter: AiOutlineTwitter,
    AiFillInstagram: AiFillInstagram,
  };


  useEffect(()=>{
    NET({
      el: "#home",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xc5a346,
      backgroundColor: 0x140c2e,
      points: 16.00,
      maxDistance: 32.00,
      spacing: 20.00
    })
  },[])

  return (
    <div className="h-auto w-full sm:mb-0 h-screen" id="home">
      
      <div className="mx-auto  flex w-[90%] flex-col items-center sm:flex-row lg:w-[80%] lg:justify-between  ">
        <div className="mt-20 w-full ">
          <h2 className="text-4xl font-semibold leading-tight text-white lg:text-5xl" >
            Hello <span className="wave">👋</span>
          </h2>
          <h2 className="pt-2 text-4xl font-semibold leading-tight text-white" >
            We're {UserData.name}
          </h2>
          <TypewriterText />

          <div className="mt-4 flex gap-8 lg:gap-0">
            {socialMedia.map((data, index) => {
              const IconComponent = socialMediaIcons[data.icon];
              return (
                <button
                  className="flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg lg:h-12 lg:w-24"
                  key={index}
                  onClick={() => window.open(data.url)}
                >
                  <IconComponent className="icon" />
                </button>
              );
            })}
          </div>
        </div>

        <div className=" right-panel lg:mt-12 text-center">
          {/* <img
            className="max-w[550px] bg-cover bg-center bg-no-repeat lg:w-[2500px]"
            src={imagedeveloper}
            alt=""
          /> */}
          <img style={{display:'block'}}
          className="h-50 w-50 bg-cover bg-no-repeat m-auto"
          src={logo}
          alt="logo"
        />
        </div>
      </div>
      </div>
  );
}

export default Home;
