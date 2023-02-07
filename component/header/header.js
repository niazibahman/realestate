import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import { FaBars, FaToggleOff } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = ({ toggle }) => {
  const [ScrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToBottom();
  };

  return (
    <header className="w-screen h-auto text-white text-sm">
      <section className="bg-topHeader w-full">
        <div className="px-4 py-3 lg:container mx-auto grid grid-cols-2 gap-2">
          <div className="flex justify-start">
            <div className="flex justify-start items-center	">
              <AiOutlinePhone className="font-icons px-2 items-center	" />
              <span>09123331115</span>
            </div>
            <div className="flex justify-start items-center	mx-3">
              <AiOutlineMail className="font-icons px-2 items-center	" />
              <span>support@Rikada.com</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end">
            <FiInstagram className="social-icons py-2" />
            <FiLinkedin className="social-icons py-2" />
            <FiTwitter className="social-icons py-2" />
            <FiFacebook className="social-icons py-2" />
          </div>
        </div>
      </section>

      <div
        ScrollNav={ScrollNav}
        className="relative bg-white w-full h-20 content-center z-10"
      >
        <div className="px-4 py-3 lg:container mx-auto grid grid-cols-4 gap-2 px-4 max-w-6xl content-center">
          <a
            href="/"
            onClick={toggleHome}
            className="justify-self-start	cursor-pointer flex items-center	ml-2"
          >
            <Image
              src="/logo-header.png"
              alt="site-logo"
              width={200}
              height={75}
            />
          </a>
          <div onClick={toggle} className="hidden mobileIcon">
            <FaBars />
          </div>
          <ul className="flex items-center list-none justify-center navmenu text-textColor text-base	col-span-2">
            <li className="ml-4">
              <a
                href="/"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                صفحه اصلی
              </a>
            </li>
            <li className="ml-8">
              <a href="about">مشاورین املاک</a>
            </li>
            <li className="ml-8">
              <a href="Services">خدمات</a>
            </li>
            <li className="ml-8">
              <a href="about2">وبلاگ</a>
            </li>
            <li className="ml-8">
              <a href="portfolio">درباره ما</a>
            </li>
            <li className="ml-8">
              <a href="portfolio">تماس با ما</a>
            </li>
          </ul>
          <div className=" flex items-center justify-end NavBtn">
            <a
              href="/signin"
              className="NavBtnLink bg-redTheme rounded whitespace-nowrap	text-sm	text-white	 outline-none	 border-none cursor-pointer"
            >
              ورود کاربری
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
