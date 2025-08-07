import Link from "next/link";
import React from "react";
import logo from '../assets/logo.png';
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdBookmarkAdded } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm p-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 14 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-72 p-2 shadow"
            >
              <li>
                <Link href={'/'}><IoHomeOutline />Home</Link>
              </li>
             <li>
                <Link href={'/alltasks'}><FaTasks />Browse Tasks</Link>
              </li>
              <li>
                <Link href={'/addtask'}><IoMdAddCircleOutline />Add Task</Link>
              </li>
              <li>
                <Link href={'/'}><MdBookmarkAdded />My Posted Tasks</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
           <Link href={'/'} className="flex items-center gap-2">
            <Image src={logo} alt="logo" className="w-6 h-6 md:w-12 md:h-12"></Image>
            <h1 className="text-lg md:text-3xl font-semibold text-blue-500">Talent<span className="font-light text-black">Bay</span></h1>
           </Link>
        </div>
        <div className="navbar-end">
          <Link href={'/login'}> <button className="btn btn-soft border border-blue-300 rounded-lg btn-info md:px-5 text-lg "><IoIosLogIn />Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
