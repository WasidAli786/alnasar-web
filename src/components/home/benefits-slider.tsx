import { useEffect, useState } from "react";
import NextImage from "../next-image";
import clsx from "clsx";

export const BenefitsSlider = ({ benefits }: { benefits: any[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === benefits.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [benefits.length]);

  return (
    <div className="mt-4 flex items-center gap-4 border border-custom-primary p-2 rounded-[10px]">
      <div className="relative flex-1 h-20 overflow-hidden">
        <div
          className="absolute w-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateY(-${activeIndex * 80}px)`,
          }}
        >
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2 h-20">
              <div className="relative h-16 w-16 flex-shrink-0">
                <NextImage
                  src={benefit.icon}
                  alt={benefit.title}
                  className="object-contain"
                />
              </div>
              <h2 className="text-white font-semibold text-xs sm:text-base">
                {benefit.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        {benefits.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={clsx(
              "w-3 h-3 rounded-full border border-white transition-all cursor-pointer",
              activeIndex === idx
                ? "bg-custom-primary scale-125"
                : "bg-transparent hover:bg-white/20"
            )}
          />
        ))}
      </div>
    </div>
  );
};
