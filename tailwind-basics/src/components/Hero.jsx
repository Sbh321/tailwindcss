import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
          <img
            src="https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/hero__1.webp"
            alt="img"
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
            <h2 className="text-2x1 sm: text-4x1 md:text-6x1 font-bold">
              Dried Fruits Best Healthy
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2x1 sm: text-4x1 pb-4 sm: pb-8">
              $18.36
            </div>
            <div
              className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center
gap-4 px-4 py-2 text-[14px] sm: px-6 sm:py-3 cursor-pointer"
            >
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/hero__2.webp"
            alt="img"
          />

          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
            <h2 className="text-2x1 sm: text-4x1 md:text-6x1 font-bold">
              Dried Fruits Best Healthy
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2x1 sm: text-4x1 pb-4 sm: pb-8">
              $18.36
            </div>
            <div
              className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center
gap-4 px-4 py-2 text-[14px] sm: px-6 sm:py-3 cursor-pointer"
            >
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/hero__3.webp"
            alt="img"
          />

          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
            <h2 className="text-2x1 sm: text-4x1 md:text-6x1 font-bold">
              Dried Fruits Best Healthy
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2x1 sm: text-4x1 pb-4 sm: pb-8">
              $18.36
            </div>
            <div
              className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center
gap-4 px-4 py-2 text-[14px] sm: px-6 sm:py-3 cursor-pointer"
            >
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
