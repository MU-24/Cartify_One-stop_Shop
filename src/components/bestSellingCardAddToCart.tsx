"use client"

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Button } from "./ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addToCart } from "@/app/store/features/cart";

const BestSellAddToCart = ({ slug }: { slug: string }) => {
  // caling products
  const product = useAppSelector((state) => state.products).find(
    (val) => val.slug == slug
  );
  // add to cart
  const dispatch = useAppDispatch();

  // setting cart items
  const [cartItem, setCartItem] = useState({
    id: product?.id,
    title: product?.title,
    image: product?.image[0],
    slug: product?.slug,
    price: product?.price,
    discount: product?.discount,
    category: product?.category,
    size: product?.size[0],
    qty: product?.qty,
    color: product?.color[0],
  });

  //   toast

  const notify = () =>
    toast.success("Product Added Successfully!", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className=" group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
            <FaShoppingCart className=" mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[15rem]">
          <div className="flex items-center">
            <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
              Size
            </span>

            <select
              onChange={(e) =>
                setCartItem({ ...cartItem, size: e.target.value })
              }
              className="select select-bordered bg-[#FAFAFA]"
              defaultValue=""
            >
              <option disabled value="">
                Select Size
              </option>
              {product?.size.map((item, i) => (
                <option key={i}>{item}</option>
              ))}
            </select>
          </div>
          <div className="flex mt-5">
            <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
              Color
            </span>
            {product?.color.map((item, i) => (
              <button
                key={i}
                onClick={() => setCartItem({ ...cartItem, color: item })}
                className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                style={{ backgroundColor: item }}
              />
            ))}
          </div>
          {/* add to cart  */}
          <div className=" w-fit" onClick={notify}>
            <Button
              onClick={() => dispatch(addToCart(cartItem))}
              className=" mt-5 w-full group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl"
            >
              <FaShoppingCart className=" mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
              Add to Cart
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default BestSellAddToCart;
