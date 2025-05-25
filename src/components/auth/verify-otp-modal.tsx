"use client";

import { Modal, ModalContent, ModalBody } from "@heroui/modal";
import { InputOtp } from "@heroui/input-otp";
import { Checkbox } from "@heroui/checkbox";
import NextImage from "../next-image";
import ButtonUI from "../ui/button-ui";

const VerifyOtpModal = () => {
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
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-custom-primary uppercase mt-4 md:mt-10">
                      please verify your phone number
                    </h3>
                    <p className="text-sm sm:text-lg font-normal text-white mt-3">
                      Enter OTP sent to +000 000 000 0000
                    </p>
                    <InputOtp
                      length={6}
                      size="lg"
                      color="secondary"
                      classNames={{
                        segmentWrapper: "gap-x-2",
                      }}
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <button className="underline text-white text-xs sm:text-base">
                        Re-send code
                      </button>
                      <span className="text-white">or</span>
                      <button className="underline text-white text-xs sm:text-base">
                        change number
                      </button>
                    </div>
                    <div className="mt-4 space-y-[1px]">
                      <Checkbox
                        classNames={{
                          label: "text-white text-xs sm:text-base",
                        }}
                      >
                        By submitting this information, you agree to our Terms &
                        Conditions.
                      </Checkbox>
                      <Checkbox
                        classNames={{
                          label: "text-white text-xs sm:text-base",
                        }}
                      >
                        Placeholder Non KSA Disclosure T&C.
                      </Checkbox>
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
                <div className="flex justify-center mt-5">
                  <ButtonUI size="lg" className="xs:px-32 w-full xs:w-auto">
                    VERIFY
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

export default VerifyOtpModal;
