"use client";

import React, { useEffect, useState } from "react";
import useWindowHeight from "@/hooks/useDimension";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { ChartFail, HambergerMenu, Notification } from "iconsax-react";
// import MobileNav from "./mobile";
import { FaBars } from "react-icons/fa";
import { useStateCtx } from "@/context/stateCtx";
import * as Icon from "../Icons";
import { NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();
  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <nav
      className={cn(
        " max-[500px]:py-2 w-full justify-between items-center bg-brand-white  transition-colors duration-500",
        scrollHeight > 200
          ? " fixed backdrop-blur-xl top-0 left-0  z-50 -translate-y-28 opacity-0 animate-slideDown bg-brand-white/90 py-2 border-b border-gray-200 shadow-md"
          : "sm:py-6 py-4",
        {
          "bg-brand-white/60 ": scrollHeight > 800 && scrollHeight < 4300,
        }
      )}
    >
      <header className="md:flex  justify-between items-center md:px-16 px-5 container">
        <div className="flex items-center justify-between">
          <Link href="/?path=" className="">
            <Image
              src="/logo.png"
              alt="epvot logo"
              width={150}
              height={150}
              className=""
            />
          </Link>
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden text-2xl cursor-pointer"
            onClick={() => setShowMobileMenu(true)}
          >
            <FaBars />
          </div>
        </div>
        <div className="md:text-base text-xs font-semibold items-center justify-between md:gap-4 hidden md:flex max-h-[68px]">
          <div className="flex items-center gap-1">
            <Icon.MailIcon />
            <div className="flex flex-col gap-1">
              <span className="text-brand-blue font-unica">Mail Us</span>
              <span className="text-brand-main">YourEmail@example.com</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Icon.PhoneIcon />
            <div className="flex flex-col gap-1">
              <span className="text-brand-blue font-unica">Call us</span>
              <span className="text-brand-main">YourEmail@example.com</span>
            </div>
          </div>
        </div>
      </header>
      <div
        className={cn(
          "md:flex hidden flex-col md:flex-row gap-2 lg:justify-between border-t-2 py-8 md:px-16 px-5 container bg-brand-main mt-4",
          scrollHeight > 200 ? "md:hidden h-0 bg-transparent" : ""
        )}
      >
        <div className="md:text-base  font-bold items-center justify-between w-full">
          {NAV_LINKS.map((item) => (
            <Button
              asChild
              key={item.id}
              variant="link"
              className={cn(
                { hidden: scrollHeight > 200 },
                isActive === item.link ? "text-brand-white" : "text-brand-blue",
                "capitalize font-bold"
              )}
            >
              <Link
                href={`${item.link}/?path=${item.link}`}
                onClick={() => {
                  setIsActive(item.link);
                }}
              >
                {item.label}
              </Link>
            </Button>
          ))}
        </div>
        <Button className="rounded-none" variant="secondary">
          Have Any Question?
        </Button>
      </div>
    </nav>
  );
};
