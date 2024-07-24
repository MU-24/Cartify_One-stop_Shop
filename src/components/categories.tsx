import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="mt-[100px] mb-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className=" text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      {/* Categories start from here */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* category 1 */}
        <div className=" mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/tops"}>
            <Image
              src={require("../../public/own.jpg")}
              alt="tops"
              width={350}
              height={350}
              className=" rounded-xl duration-500 hover:scale-125"
            />
            <div className=" block lg:hidden absolute bottom-28 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className=" uppercase">tops</h1>
            </div>
            <div className=" lg:block hidden absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className=" uppercase">tops</h1>
            </div>
          </Link>
        </div>

        <div className=" mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/pants"}>
            <Image
              src={require("../../public/own.jpg")}
              alt="pants"
              width={350}
              height={350}
              className=" rounded-xl duration-500 hover:scale-125"
            />
            <div className=" block lg:hidden absolute bottom-28 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className=" uppercase">pants</h1>
            </div>
            <div className=" lg:block hidden absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className=" uppercase">pants</h1>
            </div>
          </Link>
        </div>

        <div className=" mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/accessories"}>
            <Image
              src={require("../../public/own.jpg")}
              alt="accessories"
              width={350}
              height={350}
              className=" rounded-xl duration-500 hover:scale-125"
            />
            <div className=" block lg:hidden absolute bottom-28 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className=" uppercase">accessories</h1>
            </div>
            <div className=" lg:block hidden absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className=" uppercase">accessories</h1>
            </div>
          </Link>
        </div>

        <div className=" mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shoes"}>
            <Image
              src={require("../../public/own.jpg")}
              alt="shoes"
              width={350}
              height={350}
              className=" rounded-xl duration-500 hover:scale-125"
            />
            <div className=" block lg:hidden absolute bottom-28 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className=" uppercase">shoes</h1>
            </div>
            <div className=" lg:block hidden absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className=" uppercase">shoes</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
