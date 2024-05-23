import { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { CgMenuRight } from "react-icons/cg";
import { UserData } from "../data/UserData";
import logo from "../Assets/images/brain_logo.png";
import sutLogo from "../Assets/svg/icons/sut.svg";
const Header = () => {
  const [isScrolling, setisScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { resumeUrl } = UserData;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isCurrentScrolled = scrollTop > 0;
      setisScrolling(isCurrentScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("begin", function (to) {
      setActiveSection(to);
    });

    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`header fixed top-0 z-50 flex w-full items-center justify-between text-base transition-all sm:px-4 lg:px-28 lg:pt-2
      ${isScrolling ? "sticky" : ""}`}
    >
      <div className="header-inside-div cursor-pointer flex">
        
      <img
          className="h-[42px] w-[42px] bg-cover bg-no-repeat"
          src={sutLogo}
          alt="sutLogo"
        />
        <div style={{width:'16px'}}></div>
        <img
          className="h-[42px] w-[42px] bg-cover bg-no-repeat"
          src={logo}
          alt="logo"
        />
        
      </div>
      
    </header>
  );
};

export default Header;
