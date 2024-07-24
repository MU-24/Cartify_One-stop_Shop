"use client"

import React from "react";
import BestSellingCard from "./bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";

const BestSelling = () => {

  const product = useAppSelector((state)=> state.products)
   const bestSell = product.slice(0, 3)

  return (
    <div className="mt-[100px] mb-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className=" text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* best selling products */}
      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((items:any, i) => (
          <BestSellingCard
            key={i}
            src={items.image[0]}
            alt={items.title}
            price={items.price}
            description={items.description}
            title={items.title}
            category={items.category}
            slug={items.slug} 
            discount={items.discount}                   
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
