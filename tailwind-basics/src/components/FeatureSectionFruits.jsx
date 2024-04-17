import ProductCard from "./ProductCard";

const FeatureSectionFruits = () => {
  const data = [
    {
      id: 0,
      img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/product__1.webp",
      name: "Seed Dried",
      price: "Rs. 500",
    },
    {
      id: 1,
      img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/product__3.webp",
      name: "Seed Dried",
      price: "Rs. 500",
    },
    {
      id: 2,
      img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/product__2.webp",
      name: "Seed Dried",
      price: "Rs. 500",
    },
    {
      id: 4,
      img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/product__3.webp",
      name: "Seed Dried",
      price: "Rs. 500",
    },
  ];

  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
          <p className="text-gray-600 mt-2">
            Buy farm fresh fruits and vegetables online at the best prices
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Fruits</button>
          <button className="text-gray-600 hover: text-accent">
            Vegetables
          </button>
          <button className="text-gray-600 hover: text-accent">
            Bread & Bakery
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            src="https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/feature__1.webp"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
        {data.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSectionFruits;
