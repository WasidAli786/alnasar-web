import React from "react";
import NextImage from "../next-image";
import { BaselineArrowRightAlt } from "../icons";
import MembershipBenefits from "./membership-benefits";

const items = [
  {
    image: "/images/membership-step1.svg",
    title: "Choose Your Tier",
  },
  {
    image: "/images/membership-step2.svg",
    title: "Create Your Account",
  },
  {
    image: "/images/membership-step3.svg",
    title: "Enjoy Your Benefits",
  },
];

const MembershipProgram = () => {
  return (
    <div className="relative bg-blue-gradient">
      <div className="relative">
        <img
          src="/images/right-top-sphere.png"
          alt=""
          className="absolute top-0 right-0 h-full opacity-30"
        />
        <div className="custom-container py-10 flex flex-col items-start sm:items-center sm:text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-custom-primary">
            What’s the Membership program?
          </h2>
          <p className="text-xs text-white mt-2">
            Al Nassr’s membership programme is your opportunity to place
            yourself at the heart of the club you love.
          </p>
          <div className="flex mt-6">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center gap-2 text-center mb-6">
                  <div className="relative h-14 md:h-20 w-14 md:w-20 border border-custom-primary rounded-full">
                    <NextImage
                      src={item.image}
                      alt={`membership-program${index + 1}`}
                      className="object-contain"
                    />
                  </div>
                  <h6 className="text-white font-medium text-xs">
                    {item.title}
                  </h6>
                </div>
                {index < items.length - 1 && (
                  <BaselineArrowRightAlt className="text-custom-primary" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <MembershipBenefits />
      <div className="hidden sm:block">
      <img
        src="/images/left-bottom-sphere.png"
        alt=""
        className="absolute bottom-0 left-0 h-[70%] opacity-30"
      />
      </div>
    </div>
  );
};

export default MembershipProgram;
