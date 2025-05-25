import React from "react";
import NextImage from "../next-image";
import ButtonUI from "../ui/button-ui";
import Header from "../layout/header";

const HeroBanner = () => {
  return (
    <section className="bg-[url(/images/hero-frame.png)] bg-no-repeat bg-cover bg-center relative">
      <div className="relative w-full h-[420px] md:h-[600px] lg:h-[720px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="relative h-full container max-w-[1080px] py-5 md:py-10">
            <div className="float-end">
              <Header />
            </div>
            <div className="flex flex-col justify-between items-center md:items-start h-full">
              <div className="relative h-48 w-36">
                <NextImage src="/images/logo.svg" alt="logo" />
              </div>
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl shadow-black uppercase">
                Every Match
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-primary md:mt-2 drop-shadow-2xl shadow-black uppercase">
                Every Moment
              </h2>
              <ButtonUI
                color="primary"
                className="mt-4 md:mt-10 px-16 md:px-24 text-sm uppercase"
              >
                join now!
              </ButtonUI>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;