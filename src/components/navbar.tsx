"use client";

import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from "./navlinks";
import { useAppSelector } from "@/app/store/hooks";
const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div>
      <div className="navbar bg-myWhite">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="p-0 text-2xl lg:hidden">
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"}> Home</Link>
              </li>
              <li>
                <details>
                  <summary>Women</summary>
                  <ul className="p-2">
                    <li>
                      <Link href={"/tops"}> Tops</Link>
                    </li>
                    <li>
                      <Link href={"/pants"}> Pants</Link>
                    </li>
                    <li>
                      <Link href={"/accessories"}> Acessories</Link>
                    </li>
                    <li>
                      <Link href={"/shoes"}>Shoes</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href={"/contact"}> Contact</Link>
              </li>
              <li>
                <Link href={"/aboutUs"}> About</Link>
              </li>
            </ul>
          </div>
          <Link
            href="#"
            className=" ml-4 hidden lg:block text-2xl font-bold text-myOrange"
          >
            CARTIFY
          </Link>
        </div>
        <div className="navbar-center">
          <Link href="#" className=" block lg:hidden text-xl">
            CARTIFY
          </Link>
          <div className=" hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>
        <div className="navbar-end">
          <Link href={"/cart"}>
            <div
              tabIndex={0}
              role="button"
              className=" pr-4 cursor-pointer group "
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 group-hover:text-myOrange duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cart.length > 0 && (
                  <span className="badge badge-sm indicator-item text-myBlackHead font-semibold group-hover:text-myWhite group-hover:bg-myBlackPara">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
