import React from "react";
import NextImage from "../next-image";
import Link from "next/link";
import { socialIcons } from "@/src/config/site";
import ButtonUI from "../ui/button-ui";

const Footer = () => {
  return (
    <>
      <footer className="bg-custom-secondary-300 pt-8 pb-16 px-8">
        <div className="border-b border-custom-secondary-200 pb-8">
          <div className="relative h-[72px] w-[52px] mx-auto">
            <NextImage src="/images/logo.svg" alt="logo" />
          </div>
        </div>
        <div className="text-white flex flex-col items-center space-y-2 py-8">
          <p className="text-sm">© 2025 al nassr fc. All rights reserved.</p>
          <Link href="/" className="underline text-sm">
            Privacy Policy | COOKIE POLICY
          </Link>
          <p className="text-sm">Terms & Conditions*</p>
        </div>
        <div className="flex justify-center gap-4">
          {socialIcons.map((item, index) => (
            <ButtonUI isIconOnly color='default' variant='light' key={index}>
              <div className="relative h-6 w-6">
                <NextImage src={item.icon} alt={`social-icon-${index}`} />
              </div>
            </ButtonUI>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
