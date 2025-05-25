"use client";

import { Input } from "@heroui/input";
import { Modal, ModalContent, ModalBody } from "@heroui/modal";
import { AppleIcon, FlagSaudiArabia, GoogleIcon } from "../icons";
import NextImage from "../next-image";
import ButtonUI from "../ui/button-ui";

const LoginModal = () => {
  return (
    <>
      <Modal
        isOpen={true}
        classNames={{
          body: "p-5 md:p-10 relative",
          base: "bg-custom-secondary-100 rounded-none",
          closeButton:
            "border bg-custom-secondary-200 text-white hover:bg-custom-secondary-300 top-5 right-5 z-50 active:bg-custom-secondary-300",
        }}
        size="5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <img
                  src="/images/left-top-sphere.png"
                  alt=""
                  className="absolute top-0 left-0 h-full opacity-30"
                />
                <div className="grid grid-cols-12 sm:gap-10 z-10">
                  <div className="col-span-full xs:col-span-8">
                    <div className="grid grid-cols-12">
                      <div className="col-span-8 xs:col-span-full">
                        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-custom-primary uppercase">
                          You’ve selected the
                        </h2>
                        <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-custom-primary uppercase md:mt-2">
                          Platinum Membership!
                        </h3>
                        <p className="text-sm md:text-xl font-normal text-white mt-4 md:mt-10">
                          Enjoy huge discounts on merch, early access, signed
                          jerseys, tours, and more.
                        </p>
                      </div>
                      <div className="col-span-4 block xs:hidden">
                        <div className="relative aspect-[4/5]">
                          <NextImage
                            src="/images/player-cut.png"
                            alt="player"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 md:mt-20 max-w-md">
                      <Input
                        name="phone"
                        label="Verified Mobile Number"
                        placeholder="Enter your mobile number"
                        labelPlacement="outside"
                        classNames={{
                          label: "text-xs md:text-lg font-normal !text-white",
                        }}
                        size="lg"
                        color="secondary"
                        startContent={<FlagSaudiArabia className="text-2xl" />}
                      />
                      <button className="underline text-white mt-2 text-xs sm:text-base">
                        Edit number
                      </button>
                    </div>
                  </div>
                  <div className="xs:col-span-4 hidden xs:block">
                    <div className="relative aspect-[4/5]">
                      <NextImage
                        src="/images/player-cut.png"
                        alt="player"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 mt-5">
                  <div className="flex gap-2">
                    <ButtonUI size="lg" endContent={<GoogleIcon />}>
                      SIGN UP VIA
                    </ButtonUI>
                    <ButtonUI size="lg" endContent={<AppleIcon />}>
                      SIGN UP VIA
                    </ButtonUI>
                  </div>
                  <ButtonUI
                    size="lg"
                    variant="bordered"
                    className="xs:px-24 w-full xs:w-auto"
                  >
                    SIGN UP VIA E-MAIL
                  </ButtonUI>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
