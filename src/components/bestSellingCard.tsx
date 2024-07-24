import React from "react";
import { Button } from "./ui/button";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import BestSellAddToCart from "./bestSellingCardAddToCart";

const BestSellingCard = ({
  src,
  alt,
  title,
  description,
  price,
  category,
  slug,
  discount,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  slug: string;
  discount: number;
}) => {
  return (
    <div className=" max-w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
      <Link href={`/${category}/${slug}`}>
        <div className=" block h-[23rem] rounded overflow-hidden">
          <Image src={src} alt={alt} width={400} height={400} priority />
        </div>
        <div className=" mt-4">
          <h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0 text-myBlackHead line-clamp-1">
            {title}
          </h2>
          <p className=" mt-2scroll-m-20 text-sm font-semibold tracking-tight text-myBlackPara line-clamp-1">
            {description}
          </p>
          <div className=" flex gap-4">
            {/* pricing  */}
            <p
              className={` mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackHead line-clamp-1 ${
                discount > 0 &&
                "line-through decoration-2 decoration-myOrange/70"
              }`}
            >
              ${price}
            </p>
            {/* discounted value  */}
            {discount > 0 && (
              <p className=" mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackHead line-clamp-1">
                ${price - (price * discount) / 100}
              </p>
            )}
          </div>
        </div>
      </Link>
      <div>
        <div className=" absolute bottom-2 right-2">
          <BestSellAddToCart slug={slug}/>
        </div>
        <Button className=" group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2">
          <FaHeart className=" mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
          Buy Now
        </Button>
        {discount > 0 && (
          <div className="scroll-m-20 text-xs text-myWhite bg-myOrange font-semibold tracking-tight absolute top-0 left-2 w-[87px] p-2 text-center uppercase rounded-tl-xl rounded-bl-xl myDiscount">
            {`${discount}% off`}
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSellingCard;
