"use client";

import ButtonUI from "../ui/button-ui";
import { OutlineCheck } from "../icons";
import { plansContent, plansHeader } from "@/src/config/site";

const ComparePlans = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/compare-tiers-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 h-full w-full top-0 flex flex-col items-center gap-8 py-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-custom-primary text-center">
            Compare Al-Nassr Tiers
          </h2>
          <div className="custom-container">
            <div className="flex divide-x-1 divide-white w-full bg-custom-secondary-100">
              {plansHeader.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-2 p-2 w-full"
                >
                  <h2 className="text-xs md:xl lg:text-2xl font-bold text-white uppercase">
                    {item.heading}
                  </h2>
                  <p className="text-[10px] md:text-sm font-normal text-white">
                    {item.money}
                  </p>
                </div>
              ))}
            </div>
            {plansContent.map((item, index) => (
              <div key={index} className=" flex flex-col">
                <div className="grid grid-cols-1 bg-[#1A3775]/50  text-center p-1 text-base">
                  <span className="font-bold text-white">{item.title}</span>
                  {item?.subTitle && (
                    <span className="capitalize font-bold text-white">
                      {item?.subTitle}
                    </span>
                  )}
                </div>
                <div className="flex divide-x-1 divide-custom-secondary-100 w-full bg-white">
                  {item?.voting?.map((items, key) => (
                    <div
                      key={key}
                      className="flex flex-col items-center text-center gap-2 p-2 w-full"
                    >
                      <span>
                        {items ? (
                          <OutlineCheck />
                        ) : (
                          <span className="text-custom-secondary-100">-</span>
                        )}
                      </span>
                    </div>
                  ))}
                  {item?.discount &&
                    item?.discount?.map((items, key) => (
                      <div
                        key={key}
                        className="flex flex-col items-center text-center gap-2 p-2 w-full"
                      >
                        <span className="text-sm font-semibold text-custom-secondary-100">
                          {items}
                        </span>
                      </div>
                    ))}
                  {item?.entries &&
                    item?.entries?.map((items, key) => (
                      <div
                        key={key}
                        className="flex flex-col items-center text-center gap-2 p-2 w-full"
                      >
                        <span className="text-sm font-semibold text-custom-secondary-100">
                          {items === 0 ? "-" : `${items} Entries`}
                        </span>
                      </div>
                    ))}

                  {item?.memberShipCard &&
                    item?.memberShipCard?.map((items, key) => (
                      <div
                        key={key}
                        className="flex flex-col items-center text-center gap-2 p-2 w-full"
                      >
                        <span>
                          {items ? (
                            <span className="flex flex-col text-xs md:text-sm items-center font-bold text-custom-secondary-100 uppercase">
                              <span>Digital</span>
                              <span>+</span>
                              <span>Physical</span>
                            </span>
                          ) : (
                            <span className="text-xs md:text-sm font-bold text-custom-secondary-100 uppercase flex items-center justify-center">
                              Digital
                            </span>
                          )}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <ButtonUI className="px-20" size="lg">
            SIGN UP NOW!
          </ButtonUI>
        </div>
      </div>
    </>
  );
};

export default ComparePlans;
