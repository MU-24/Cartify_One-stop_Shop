import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className=" mb-[100px] mt-[100px]">
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-10">
            <h1 className=" text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
              Our Services
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* free delivery */}
            <div className=" group mx-auto p-4 lg:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image
                  alt="Delivery"
                  width={100}
                  height={100}
                  src={require("../../public/ven.png")}
                />
              </div>
              <div className="flex-grow">
                <h2 className=" text-myBlackHead group-hover:text-myOrange duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
                  Free Delivery
                </h2>
                <p className="group-hover:text-myBlackPara/80 duration-300  text-myBlackPara line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight  transition-colors">
                  Free Delivery on order above $1000
                </p>
              </div>
            </div>

            {/* 24/7 customer services */}
            <div className=" group mx-auto p-4 lg:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image
                  alt="Delivery"
                  width={100}
                  height={100}
                  src={require("../../public/customer_service.png")}
                />
              </div>
              <div className="flex-grow">
                <h2 className=" text-myBlackHead group-hover:text-myOrange duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
                  24/7 customer services
                </h2>
                <p className="group-hover:text-myBlackPara/80 duration-300  text-myBlackPara line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight  transition-colors">
                  For queries and Questions feel free to contact
                </p>
              </div>
            </div>

            {/* Money back */}
            <div className=" group mx-auto p-4 lg:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image
                  alt="Delivery"
                  width={100}
                  height={100}
                  src={require("../../public/money_back.png")}
                />
              </div>
              <div className="flex-grow">
                <h2 className=" text-myBlackHead group-hover:text-myOrange duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
                  Money Back Guarantee
                </h2>
                <p className="group-hover:text-myBlackPara/80 duration-300  text-myBlackPara line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight  transition-colors">
                  Money Back Guarantee on Damage Product
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
