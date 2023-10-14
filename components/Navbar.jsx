// components/Navbar.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" fixed top-0 right-0 w-full z-40 bg-white text-sm h-[60px] px-5 flex items-center justify-between ">
      <Link onClick={() => setToggle(false)} href="/">
        <Image src="/images/logo.svg" alt="Logo" width={100} height={50} />
      </Link>
      <ul
        className={` ${toggle ? "top-[60px]" : " -top-[200%]"
          } w-full bg-white right-0 duration-200  h-[400px] md:h-auto md:w-auto fixed flex-col md:flex-row md:static flex items-center`}
      >
        <li>
          <Link
            onClick={() => setToggle(false)}
            className={` ${pathname == "/"
              ? "  border-b-2 duration-200 border-customGreen text-customGreen  "
              : ""
              } py-2 px-5 flex`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setToggle(false)}
            className={` ${pathname == "/about"
              ? "  border-b-2 duration-200 border-customGreen text-customGreen  "
              : ""
              } py-2 px-5 flex`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setToggle(false)}
            className={` ${pathname == "/classes"
              ? "  border-b-2 duration-200 border-customGreen text-customGreen  "
              : ""
              } py-2 px-5 flex`}
            href="/classes"
          >
            Classes
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setToggle(false)}
            className={` ${pathname == "/trainers"
              ? "  border-b-2 duration-200 border-customGreen text-customGreen  "
              : ""
              } py-2 px-5 flex`}
            href="/trainers"
          >
            Trainers
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setToggle(false)}
            className={` ${pathname == "/blog"
              ? "  border-b-2 duration-200 border-customGreen text-customGreen  "
              : ""
              } py-2 px-5 flex`}
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setToggle(false)}
            className={` ${pathname == "/contactus"
              ? "  border-b-2 duration-200 border-customGreen text-customGreen  "
              : ""
              } py-2 px-5 flex`}
            href="/contactus"
          >
            Contact
          </Link>
        </li>
        <li>
          <button onClick={() => setToggle(false)} className="  bg-customWhite py-2 px-5">Book Class</button>
        </li>
      </ul>
      <button className=" md:hidden" onClick={() => setToggle(!toggle)}>
        <Icon name={toggle ? "close" : "menu"} size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
