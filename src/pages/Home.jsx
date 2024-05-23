import React, { useRef } from "react";
import { useEffect, useState } from "react";
import TypewriterText from "../components/TypewriterText";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube
} from "react-icons/ai";
import TelegramIcon from "../Assets/svg/icons/telegram.svg";
import VirgoolIcon from "../Assets/svg/icons/virgool.svg";
import { FaLinkedinIn } from "react-icons/fa";
import imagedeveloper from "../Assets/images/doctor.png";
import { color } from "framer-motion";
import logo from "../Assets/images/brain_logo.png";
// import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";
function Home() {
  const socialMedia = UserData.socialMedia;

  const socialMediaIcons = {
    AiFillGithub: AiFillGithub,
    FaLinkedinIn: FaLinkedinIn,
    AiOutlineTwitter: AiOutlineTwitter,
    AiFillInstagram: AiFillInstagram,
    AiFillYoutube: AiFillYoutube,
  };

  const [vantaEffect, setVantaEffect] = useState(0); // Added this + import useState for built app
  const homeRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      
      NET({
        // THREE:THREE,
        el: homeRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xBAA025,
        backgroundColor: 0x140c2e,
        points: 8.00,
        maxDistance: window.innerWidth > 600 ? 42.00 : 29.00,
        spacing: 35.00,
        vertextColors: 0x222
      })
    }

    return () => {
      if (vantaEffect) { // <-- Used vantaEffect here
        vantaEffect.destroy();
      }
    };

  }, [])

  return (
    <div className="text-and-image-container w-full sm:mb-0 " id="home" ref={homeRef}>

      <div className="iran-yekan-bold mx-auto  flex w-[90%] flex-col items-center sm:flex-row lg:w-[80%] lg:justify-between  ">

        <div className="text-container mt-40 w-1/2 " style={{ direction: 'rtl' }}>
          <h2 className="text-3xl font-semibold leading-tight text-white lg:text-5xl" >
            با سلام <span className="wave">👋</span>
          </h2>
          <h2 style={{ lineHeight: '1.5' }} className="pt-2 text-2xl  font-semibold leading-tight text-white" >
            به سایت انجمن علمی دانشجویی مغز و فلسفه ذهن
            دانشکدهٔ پزشکی
            دانشگاه علوم پزشکی شهید بهشتی خوش آمدید
          </h2>
          <TypewriterText />

          <div className="link-buttons mt-4 flex gap-8  lg:gap-0">

          <button
              className="flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg lg:h-12 lg:w-24"


            >

              <img
                className="h-[30px] w-[30px] bg-contain bg-no-repeat"
                src={TelegramIcon}
                alt="telegramIcon"
                onClick={()=>window.open("https://t.me/mindphilosa")}
              />
            </button>

            <button
              className="flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg lg:h-12 lg:w-24"


            >

              <img
                className="h-[30px] w-[30px] bg-contain bg-no-repeat"
                src={VirgoolIcon}
                alt="virgoolIcon"
                onClick={()=>window.open("https://virgool.io/Mindphilosa")}
              />
            </button>

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

        <div className=" right-panel text-center">
          {/* <img
            className="max-w[550px] bg-cover bg-center bg-no-repeat lg:w-[2500px]"
            src={imagedeveloper}
            alt=""
          /> */}
          <div>
            <img style={{ display: 'block' }}
              className="h-50 w-50 bg-cover bg-no-repeat m-auto"
              src={logo}
              alt="logo"
            />
            <h1 className="caption-in-image">مغز و فلسفه‌ی ذهن</h1>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Home;
