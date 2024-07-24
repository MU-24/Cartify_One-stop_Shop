"use client";

import CartCard from "@/components/cartCard";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "../store/hooks";

const CartPag = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const total = cartArray.reduce((total, arr) => {
    return (
      (total + (arr.price - (arr.price * (arr.discount || 0)) / 100)) * arr.qty
    );
  }, 0);
  return (
    <div className=" grid lg:grid-cols-3 grid-cols-1">
      {/* items  */}

      <div className=" col-span-2">
        <CartCard />
      </div>
      {/* summary  */}
      <div className="bg-myBlackHead/5 rounded-xl p-5">
        {/* heading  */}
        <h2 className="scroll-m-20 text-lg font-medium uppercase tracking-tight text-myBlackHead">
          order summary
        </h2>
        {/* divider  */}
        <div className="divider mt-0 mb-1"></div>
        {/* pricing  */}
        <div className="text-sm font-medium tracking-tight text-myBlackPara">
          {/* product prices  */}
          <div className="flex items-center justify-between capitalize">
            <h2>sub total</h2>
            <h2>${total}</h2>
          </div>
          {/* delivery charges  */}
          <div className="flex items-center justify-between capitalize">
            <h2>Delivery Charges</h2>
            <h2>TBD</h2>
          </div>
          {/* service charges  */}
          <div className="flex items-center justify-between capitalize">
            <h2>Sales Tax</h2>
            <h2>TBD</h2>
          </div>
        </div>
        {/* divider  */}
        <div className="divider mt-0 mb-1"></div>
        {/* estimated total  */}
        <div className="flex items-center justify-between uppercase font-semibold text-sm tracking-tight text-myBlackHead">
          <h2>Estimated Total</h2>
          <h2>${total}</h2>
        </div>
        {/* divider  */}
        <div className="divider mt-0 mb-1"></div>
        {/* checkout button  */}
        <div className="flex items-center justify-center w-full">
          <Button className=" bg-myBlackHead rounded-xl hover:bg-transparent duration-300 text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md uppercase">
            Proceed to checkout
          </Button>
        </div>
        {/* divider  */}
        <div className="divider mt-0 mb-1"></div>
        {/* note  */}
        <p className="text-xs font-semibold tracking-tight text-myBlackHead w-[97%] text-center italic ">
          {" "}
          {`* Delivery charges and the sales tax will  be calculated in the checkout page`}
        </p>
      </div>
    </div>
  );
};

export default CartPag;
