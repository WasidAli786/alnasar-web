"use client";

import { Modal, ModalContent, ModalBody } from "@heroui/modal";

const MembershipPointsModal = () => {
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
                <div className="max-w-[650px] flex flex-col items-center justify-center gap-8 sm:gap-16 mx-auto h-full">
                  <h3 className="text-xl xs:text-3xl md:text-4xl font-bold text-custom-primary uppercase">
                    MEMBERSHIP REQUIREMENTS
                  </h3>
                  <span>
                    <p className="text-white font-normal">
                      To qualify for membership in the foundation, applicants
                      must meet the following conditions:
                    </p>
                    <ul className="text-white font-normal list-decimal mt-6 space-y-4 sm:pl-4">
                      <li>Be at least 18 years of age.</li>
                      <li>Have no legal restrictions preventing membership.</li>
                      <li>
                        Submit their application according to the procedures
                        outlined in Article 6 of the regulations.
                      </li>
                      <li>
                        Pay the membership fee by the specified due date
                        (non-refundable unless the application is rejected).
                      </li>
                      <li>
                        Not be employed by the Ministry of Sport, Saudi Olympic
                        and Paralympic Committee, their sub-entities, the Sports
                        Arbitration Center, or any other sports institution or
                        club.
                      </li>
                      <li>
                        Not have had prior membership revoked, nor be serving a
                        penalty restricting administrative or membership roles
                        in sports organizations.
                      </li>
                      <li>
                        Not have a final judicial ruling against them for crimes
                        affecting honor or integrity, unless restitution has
                        been made.
                      </li>
                    </ul>
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

export default MembershipPointsModal;
