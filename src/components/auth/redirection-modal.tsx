"use client";

import { Modal, ModalContent, ModalBody } from "@heroui/modal";
import ButtonUI from "../ui/button-ui";

const RedirectionModal = () => {
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
        size="full"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="max-w-[412] flex flex-col items-center text-center justify-center mx-auto h-full">
                  <div>
                    <h3 className="text-xl xs:text-3xl md:text-4xl font-bold text-custom-primary uppercase">
                      REDIRECTING YOU TO PAYMENT PORTAL
                    </h3>
                    <p className="text-white font-normal mt-2 sm:mt-16">
                      Please wait a moment while we take you to our secure
                      payment page.
                    </p>
                  </div>
                  <ButtonUI
                    size="lg"
                    className="xs:px-28 mt-16 w-full xs:w-auto"
                  >
                    CONTINUE
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

export default RedirectionModal;
