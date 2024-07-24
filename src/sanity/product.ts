export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    { name: "image", title: "Image", type: "array", of: [{ type: "image" }] },
    { name: "price", title: "Price", type: "number" },
    { name: "category", title: "Category", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "size", title: "Size", type: "array", of: [{ type: "string" }] },
    { name: "color", title: "Color", type: "array", of: [{ type: "string" }] },
    { name: "qty", title: "Quantity", type: "number" },
    { name: "discount", title: "Discount", type: "number", optional: true },
  ],
};
