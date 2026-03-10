"use client";
import { sliderData } from "@/constans/datas";
import { Button } from "../ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "lucide-react";
const HeaderSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex transition-all duration-800 ease-in-out `}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderData.map((slider) => (
          <div
            key={slider.id}
            className="flex flex-col-reverse md:flex-row justify-between items-center  bg-[#E6E9F2] py-8 px-5 mt-6 rounded-xl min-w-full"
          >
            <div className="md:pl-8 mt-10 md:mt-0">
              <p className="md:text-base text-orange-600 pb-1">
                {slider.offer}
              </p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
                {slider.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 ">
                <Button
                  className="md:px-10 px-7 md:py-2.5 py-2 bg-orange-600 rounded-full text-white cursor-pointer font-medium"
                  variant="outline"
                >
                  {slider.buttonText1}
                </Button>
                <Button
                  className="group flex items-center gap-2 px-6 py-2.5 font-medium cursor-pointer"
                  variant="outline"
                >
                  {slider.buttonText2}
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
                </Button>
              </div>
            </div>
            <div className="md:w-72 w-48 h-48 flex items-center justify-center flex-1">
              <Image
                src={slider.imgSrc}
                alt={slider.title}
                width={168}
                height={168}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-orange-600" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
