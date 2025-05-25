"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import ButtonUI from "../ui/button-ui";
import { BaselinePlus, MinusFilled } from "../icons";

export const MembershipFaqs = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const faqs = [
    {
      question: "Which Membership do I need to access tickets?",
      answer:
        "The Membership Program is a subscription-based service that offers exclusive benefits and discounts to its members.",
    },
    {
      question: "Can I change my membership tier during the season?",
      answer:
        "You can sign up for the Membership Program through our website or mobile app. Simply follow the prompts to create an account and choose your membership plan.",
    },
    {
      question: "I live outside Saudi Arabia — can I still become a member?",
      answer:
        "Members enjoy exclusive discounts, early access to sales, and special promotions throughout the year.",
    },
  ];

  return (
    <>
      <div className="bg-custom-secondary-100 py-5 sm:py-20 relative">
        <div className="custom-container space-y-3 sm:space-x-6 z-50 relative">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-custom-primary sm:text-center">
            MEMBERSHIP FAQS
          </h2>
          <div>
            <Accordion
              variant="splitted"
              itemClasses={{
                base: "sm:py-1 w-full bg-custom-secondary-400 rounded-none mb-2",
                title: "text-xs sm:text-lg text-white font-medium",
                indicator: "text-medium",
                content: "text-small",
              }}
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  aria-label={`Accordion ${index + 1}`}
                  title={faq.question}
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <MinusFilled className="h-6 w-6 text-white" />
                    ) : (
                      <BaselinePlus className="h-6 w-6 text-white" />
                    )
                  }
                >
                  <p className="text-white font-light">{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <p className="text-white font-light text-xs sm:text-base">
              Visit our Help Center for all our FAQs on our Memberships.
            </p>
            <ButtonUI className="px-10 mt-3 sm:mt-6">HELP CENTER</ButtonUI>
          </div>
        </div>
        <img
          src="/images/right-bottom-sphere.png"
          className="absolute bottom-0 right-0 h-full opacity-50"
          alt=""
        />
      </div>
    </>
  );
};
