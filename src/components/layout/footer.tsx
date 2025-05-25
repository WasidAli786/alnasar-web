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
          <p className="text-xs uppercase">
            © 2025 al nassr fc. All rights reserved.
          </p>
          <Link href="/" className="uppercase text-xs underline">
            Terms & Conditions*
          </Link>
          <span className="flex gap-2 uppercase text-xs">
            <Link href="/" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/" className="hover:underline">
              Cookie Policy
            </Link>
          </span>
        </div>
        <div className="flex justify-center gap-4">
          {socialIcons.map((item, index) => (
            <Link href={item.link} target="_blank" key={index}>
              <ButtonUI isIconOnly color="default" variant="light">
                <div className="relative h-6 w-6">
                  <NextImage src={item.icon} alt={`social-icon-${index}`} />
                </div>
              </ButtonUI>
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
