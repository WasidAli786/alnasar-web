"use client";

import { Input } from "@heroui/input";
import { Checkbox } from "@heroui/checkbox";
import { Modal, ModalContent, ModalBody } from "@heroui/modal";
import NextImage from "../next-image";
import ButtonUI from "../ui/button-ui";

const UserDetailsModal = () => {
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
                  <div className="col-span-full sm:col-span-8">
                    <div className="grid grid-cols-12">
                      <div className="col-span-8 sm:col-span-full">
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
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-custom-primary uppercase md:mt-10">
                          ENTER YOUR DETAILS
                        </h3>
                      </div>
                      <div className="col-span-4 block sm:hidden">
                        <div className="relative aspect-[4/5]">
                          <NextImage
                            src="/images/player-cut.png"
                            alt="player"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-12 gap-2 sm:gap-6">
                      <div className="col-span-full sm:col-span-6">
                        <Input
                          name="email"
                          label="Email"
                          placeholder="Enter your email"
                          labelPlacement="outside"
                          classNames={{
                            label: "text-xs md:text-lg font-normal !text-white",
                          }}
                          size="lg"
                          color="secondary"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 col-span-12">
                        <Input
                          name="firstName"
                          label="First Name"
                          placeholder="Enter your first name"
                          labelPlacement="outside"
                          classNames={{
                            label: "text-xs md:text-lg font-normal !text-white",
                          }}
                          size="lg"
                          color="secondary"
                        />
                        <Input
                          name="lastName"
                          label="Last Name"
                          placeholder="Enter your last name"
                          labelPlacement="outside"
                          classNames={{
                            label: "text-xs md:text-lg font-normal !text-white",
                          }}
                          size="lg"
                          color="secondary"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 col-span-12">
                        <Input
                          name="dob"
                          label="Date of Birth"
                          labelPlacement="outside"
                          type="date"
                          classNames={{
                            label: "text-xs md:text-lg font-normal !text-white",
                          }}
                          size="lg"
                          color="secondary"
                        />
                        <Input
                          name="nationalId"
                          label="National ID"
                          placeholder="Enter your national ID"
                          labelPlacement="outside"
                          classNames={{
                            label: "text-xs md:text-lg font-normal !text-white",
                          }}
                          size="lg"
                          color="secondary"
                        />
                      </div>
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
                  <div className="sm:col-span-4 hidden sm:block">
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
                    BECOME A MEMBER
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

export default UserDetailsModal;
