"use client";

import Drawer from "@/components/drawer";
import { Icons } from "@/components/icons";
import Menu from "@/components/menu";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [addBorder, setAddBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "relative sticky top-0 z-50 py-2 bg-background/60 backdrop-blur",
        addBorder && "border-b border-border"
      )}
    >
      <div className="flex justify-between items-center container px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          title="AVAA"
          className="relative flex items-center space-x-2"
        >
          <Icons.logo className="w-auto h-[32px] sm:h-[40px]" />
          <span className="font-bold text-lg sm:text-xl">AVAA</span>
        </Link>

        <div className="hidden lg:block">
          <div className="flex items-center">
            <nav className="mr-16">
              <Menu />
            </nav>

            <div className="gap-4 flex">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full sm:w-auto text-background flex gap-2"
                )}
              >
                <Icons.logo className="h-6 w-6" />
                Varaa demo
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div className="flex items-center lg:hidden">
          <Drawer />
        </div>
      </div>
    </header>
  );
}
