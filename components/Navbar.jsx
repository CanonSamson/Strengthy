// components/Navbar.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className=" text-sm h-[60px] px-5 flex items-center justify-between ">
      <Link href="/">
        <Image src="/images/logo.svg" alt="Logo" width={100} height={50} />
      </Link>
      <ul className="  flex items-center">
        <li>
          <Link
            className={` ${
              pathname == "/"
                ? "  border-b-2 duration-200 border-customGreen text-customGreen  "
                : ""
            } py-2 px-5`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={` ${
              pathname == "/about"
                ? "  border-b-2 duration-200 border-customGreen text-customGreen  "
                : ""
            } py-2 px-5`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={` ${
              pathname == "/classes"
                ? "  border-b-2 duration-200 border-customGreen text-customGreen  "
                : ""
            } py-2 px-5`}
            href="/classes"
          >
            Classes
          </Link>
        </li>
        <li>
          <Link
            className={` ${
              pathname == "/trainers"
                ? "  border-b-2 duration-200 border-customGreen text-customGreen  "
                : ""
            } py-2 px-5`}
            href="/trainers"
          >
            Trainers
          </Link>
        </li>
        <li>
          <Link
            className={` ${
              pathname == "/news"
                ? "  border-b-2 duration-200 border-customGreen text-customGreen  "
                : ""
            } py-2 px-5`}
            href="/news"
          >
            News
          </Link>
        </li>
        <li>
          <Link
            className={` ${
              pathname == "/contact"
                ? "  border-b-2 duration-200 border-customGreen text-customGreen  "
                : ""
            } py-2 px-5`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <button className="  bg-customWhite py-2 px-5">Book Class</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
