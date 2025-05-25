"use client";

import { Tabs, Tab } from "@heroui/tabs";
import NextImage from "../next-image";
import ButtonUI from "../ui/button-ui";
import { tierTabs } from "@/src/config/site";
import { BenefitsSlider } from "./benefits-slider";
import Link from "next/link";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";

const TierPlans = () => {
  const isMobile = useMediaQuery("sm");
  return (
    <>
      <Tabs
        aria-label="Dynamic tabs"
        items={tierTabs}
        fullWidth
        disableAnimation
        classNames={{
          base: "w-fit sm:w-full",
          tabList: `gap-0 w-full relative rounded-none p-0 bg-custom-secondary-200 text-white divide-x divide-gray-600 ${!isMobile && "h-full w-fit divide-x-0 flex-col-reverse"}`,
          tab: "rounded-none data-[selected=true]:bg-custom-primary h-12 flex-1 min-w-10 w-10",
          tabContent: `text-base lg:text-lg text-white font-bold group-data-[selected=true]:text-black ${!isMobile && "text-center flex items-center justify-center [writing-mode:vertical-lr] rotate-180"}`,
          panel: "p-0 w-full",
        }}
        isVertical={!isMobile}
      >
        {(item) => (
          <Tab key={item.id} title={item.title}>
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative -z-20">
                  <img
                    src="/images/right-top-sphere.png"
                    alt=""
                    className="absolute top-0 right-0"
                  />
                </div>
                <div className="grid grid-cols-12 custom-container py-10 relative w-full">
                  <div className="col-span-full md:col-span-9 space-y-8">
                    <div className="space-y-2">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-custom-primary">
                        {item.title}
                      </h2>
                      <hr className="h-[1px] border-custom-primary max-w-48" />
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        {item.price}
                      </h2>
                      <h3 className="text-lg font-light text-white">
                        {item.duration}
                      </h3>
                    </div>
                    <div className="rounded-[10px] py-5 px-3 border-2 border-gray-400 bg-[#1A377599] z-50">
                      <h2 className="text-custom-primary font-semibold">
                        MEMBERSHIP INCLUDES:
                      </h2>
                      <h3 className="text-gray-300 font-semibold mt-1">
                        Key Benefits
                      </h3>

                      <BenefitsSlider benefits={item.keyBenefits} />

                      <h3 className="text-gray-300 font-semibold mt-6">
                        Additional Perks
                      </h3>
                      <div className="mt-3 space-y-4 max-h-[280px] overflow-y-auto">
                        {item.perks.map((perk, index) => (
                          <div
                            className="flex items-center gap-2 border border-custom-primary p-2 rounded-[10px]"
                            key={index}
                          >
                            <div className="relative h-16 w-16">
                              <NextImage
                                src={perk.icon}
                                alt={perk.title}
                                className="object-contain"
                              />
                            </div>
                            <h2 className="text-white font-normal">
                              {perk.title}
                            </h2>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-3 sm:gap-8">
                      <ButtonUI className="w-[296px]">SIGN UP NOW!</ButtonUI>
                      <Link href="/" className="text-white underline">
                        Membership requirements
                      </Link>
                    </div>
                  </div>
                  <div className="md:col-span-3 absolute -top-10 md:top-10 -right-24 md:-right-0 md:relative -z-10">
                    <div className="relative h-[350px] sm:h-[600px] w-[300px] sm:w-[450px]">
                      <NextImage
                        src="/images/player-cut.png"
                        alt="player"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Tab>
        )}
      </Tabs>
    </>
  );
};

export default TierPlans;
