"use client";

import { Button } from "@/components/ui/button";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import { useAppSelector } from "../../store/hooks";
import SlugComponent from "@/components/slugComponent";
import { useState } from "react";
import AddToCartToast from "@/components/addToCartToast";

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.products);
  const slug = product.filter((val) => val.slug === params.slug);

  // const dispatch = useAppDispatch();

  const [cartItem, setCartItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    image: slug[0].image[0],
    slug: slug[0].slug,
    price: slug[0].price,
    discount: slug[0].discount,
    category: slug[0].category,
    size: slug[0].size[0],
    qty: slug[0].qty,
    color: slug[0].color[0],
  });

  // Check if the product exists
  if (slug.length === 0) {
    return (
      <div className="container px-5 py-24 mx-auto text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        {/* Image  */}
        <SlugComponent image={slug[0].image} />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          {/* category  */}
          <h2 className="scroll-m-20 text-s font-semibold tracking-tight text-gray-500 uppercase">
            {slug[0].category}
          </h2>

          {/* title  */}
          <h1 className="mt-3 scroll-m-20 text-2xl font-semibold tracking-tight mb-1 text-myBlackHead">
            {slug[0].title}
          </h1>

          {/* rating */}
          <div className="rating rating-sm mt-2">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-myOrange"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-myOrange"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-myOrange"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-myOrange"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-myOrange"
            />
          </div>

          {/* description  */}
          <p className="mt-2 leading-relaxed scroll-m-20 font-normal text-myBlackPara text-base tracking-tight">
            {slug[0].description}
          </p>
          <div className="flex mt-6 items-center pb-5 border-gray-100 mb-5">
            {/* color  */}
            <div className="flex">
              <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
                Color
              </span>
              {slug[0].color.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setCartItem({ ...cartItem, color: item })}
                  className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                  style={{ backgroundColor: item }}
                />
              ))}
            </div>
            {/* size  */}
            <div className="flex ml-6 items-center">
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
                {slug[0].size.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Quantity  */}
          <div className="flex items-center">
            <div className="mr-2 ml-2 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
              Quantity
            </div>
            <Button
              onClick={() =>
                setCartItem({
                  ...cartItem,
                  qty: cartItem.qty <= 1 ? 1 : --cartItem.qty,
                })
              }
              className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl bottom-2 right-2 h-fit w-fit"
            >
              <FaMinus className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
            </Button>
            <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight">
              {cartItem.qty}
            </div>
            <Button
              onClick={() => setCartItem({ ...cartItem, qty: ++cartItem.qty })}
              className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl bottom-2 right-2 h-fit w-fit"
            >
              <FaPlus className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
            </Button>
          </div>
          <div className="divider"></div>
          <div className="flex items-center justify-between">
            {/* price  */}
            <div>
              <span
                className={`scroll-m-20 font-semibold text-2xl tracking-tight text-myBlackHead ${
                  cartItem.discount &&
                  "line-through decoration-2 decoration-myOrange/70"
                }`}
              >
                ${cartItem.price * cartItem.qty}
              </span>
              {/* discounted value  */}
              {cartItem.discount && (
                <span className="ml-3 scroll-m-20 font-semibold text-2xl tracking-tight text-myBlackHead">
                  $
                  {(cartItem.price -
                    (cartItem.price * cartItem.discount) / 100) *
                    cartItem.qty}
                </span>
              )}
            </div>
            <AddToCartToast cartItem={cartItem} />
          </div>
          {/* Buy Now button */}
          <Button className="mt-3 w-full group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl bottom-2 right-2">
            <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
