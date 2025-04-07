import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";

export default function MobileMenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="p-2">
          <IoMenuSharp className="text-2xl" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="max-h-[90vh] overflow-y-auto">
          <DrawerHeader className="px-6">
            <div>
              <Link
                href="/"
                title="AVAA"
                className="relative flex items-center space-x-2"
              >
                <Icons.logo className="w-auto h-[40px]" />
                <span className="font-bold text-xl">AVAA</span>
              </Link>
            </div>
            <nav>
              <ul className="mt-7 text-left space-y-4">
                {siteConfig.header.map((item, index) => (
                  <li key={index}>
                    {item.trigger ? (
                      <div>
                        <span className="font-semibold text-lg">{item.trigger}</span>
                        {item.content?.items && (
                          <ul className="mt-2 ml-4 space-y-2">
                            {item.content.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link 
                                  href={subItem.href} 
                                  className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link 
                        href={item.href || ""} 
                        className="font-semibold text-lg hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </DrawerHeader>
          <DrawerFooter className="px-6 pb-8">
            <Link
              href="https://share.hsforms.com/1QxGXqXqXQxGXqXqXQxGXqX"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full text-background flex gap-2 justify-center items-center"
              )}
            >
              <Icons.logo className="h-6 w-6" />
              Varaa demo
            </Link>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
