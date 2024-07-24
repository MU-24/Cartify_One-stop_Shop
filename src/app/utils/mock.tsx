import client from "../../sanity/lib/client"
import { Product } from "./types";

export const products: Product[] = getData();
async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}







//   {
//     id: 1,
//     title: "Black man shirt",
//     image: ["/own2.jpg", "/own1.jpg", "/own2.jpg"],
//     slug: "black-man-shirt",
//     price: 150,
//     category: "tops",
//     description:
//       "The generated action creators will be correctly typed to accept a payload argument based on the PayloadAction<T> type you provided for the reducer. For example, incrementByAmount requires a number as its argument.",
//     size: ["S", "M", "L", "XL"],
//     color: ["#ffffff", "#000000", "#e60000"],
//     qty: 1,
//   },
//   {
//     id: 2,
//     title: "Black shoes",
//     image: ["/own.jpg", "/own.jpg"],
//     slug: "black-shoes",
//     price: 150,
//     discount: 20,
//     category: "shoes",
//     description:
//       "The generated action creators will be correctly typed to accept a payload argument based on the PayloadAction<T> type you provided for the reducer. For example, incrementByAmount requires a number as its argument.",
//     size: ["S", "M", "L", "XL"],
//     color: ["#ffffff", "#000000", "#e60000"],
//     qty: 1,
//   },
//   {
//     id: 3,
//     title: "Black man Tshirt",
//     image: ["/own.jpg", "/own.jpg"],
//     slug: "black-man-tshirt",
//     price: 250,
//     discount: 40,
//     category: "tops",
//     description:
//       "The generated action creators will be correctly typed to accept a payload argument based on the PayloadAction<T> type you provided for the reducer. For example, incrementByAmount requires a number as its argument.",
//     size: ["S", "M", "L", "XL"],
//     color: ["#ffffff", "#000000", "#e60000"],
//     qty: 1,
//   },
//   {
//     id: 4,
//     title: "white shirt",
//     image: ["/own.jpg", "/own.jpg"],
//     slug: "white-shirt",
//     price: 450,
//     discount: 10,
//     category: "tops",
//     description:
//       "The generated action creators will be correctly typed to accept a payload argument based on the PayloadAction<T> type you provided for the reducer. For example, incrementByAmount requires a number as its argument.",
//     size: ["S", "M", "L", "XL"],
//     color: ["#ffffff", "#000000", "#e60000"],
//     qty: 1,
//   },
//   {
//     id: 5,
//     title: "neckless",
//     image: ["/own.jpg", "/own.jpg"],
//     slug: "neckless",
//     price: 100,
//     discount: 5,
//     category: "accessories",
//     description:
//       "The generated action creators will be correctly typed to accept a payload argument based on the PayloadAction<T> type you provided for the reducer. For example, incrementByAmount requires a number as its argument.",
//     size: ["S", "M", "L", "XL"],
//     color: ["#ffffff", "#000000", "#e60000"],
//     qty: 1,
//   },
//   {
//     id: 6,
//     title: "Black man shirt",
//     image: ["/own.jpg", "/own.jpg"],
//     slug: "black-man-tshirt",
//     price: 150,
//     discount: 15,
//     category: "tops",
//     description:
//       "The generated action creators will be correctly typed to accept a payload argument based on the PayloadAction<T> type you provided for the reducer. For example, incrementByAmount requires a number as its argument.",
//     size: ["S", "M", "L", "XL"],
//     color: ["#ffffff", "#000000", "#e60000"],
//     qty: 1,
//   },
//   {
//     id: 7,
//     title: "sport shoes",
//     image: ["/own.jpg", "/own.jpg"],
//     slug: "sport-shoes",
//     price: 150,
//     discount: 25,
//     category: "shoes",
//     description:
//       "The generated action creators will be correctly typed to accept a payload argument based on the PayloadAction<T> type you provided for the reducer. For example, incrementByAmount requires a number as its argument.",
//     size: ["S", "M", "L", "XL"],
//     color: ["#ffffff", "#000000", "#e60000"],
//     qty: 1,
//   },
// ];
