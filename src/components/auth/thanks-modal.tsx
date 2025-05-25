"use client";

import { Modal, ModalContent, ModalBody } from "@heroui/modal";

const ThanksModal = () => {
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
                <div className="max-w-[412] flex flex-col items-center text-center justify-center gap-16 mx-auto h-full">
                  <h3 className="text-xl xs:text-3xl md:text-4xl font-bold text-custom-primary uppercase">
                    THANK YOU.
                  </h3>
                  <span>
                    <p className="text-white font-normal">
                      We’ve received your information. Verification and access
                      to the payment and membership portal will be provided via
                      email.
                    </p>
                    <p className="text-white font-normal mt-2">
                      Please check your inbox for further instructions.
                    </p>
                  </span>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ThanksModal;
