import React from "react";
import { Link } from "react-router-dom";

import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <footer className=" relative left-0 bottom-0 py-5 sm:px-20 h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800">
      <section className="text-lg">
        Copyright {year} | All rights reserved
      </section>

      <section className="flex justify-around gap-5 text-2xl ">
        <Link className="hover:text-orange-500 transition-all ease-in-out duration-300 ">
          <BsFacebook />
        </Link>
        <Link className="hover:text-orange-500 transition-all ease-in-out duration-300 ">
          <BsInstagram />
        </Link>
        <Link className="hover:text-orange-500 transition-all ease-in-out duration-300 ">
          <BsLinkedin />
        </Link>
        <Link className="hover:text-orange-500 transition-all ease-in-out duration-300 ">
          <BsTwitter />
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
