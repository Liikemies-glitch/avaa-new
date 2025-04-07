"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    trigger: "Palvelut",
    content: {
      main: {
        href: "/palvelut",
        title: "AVAA-ratkaisu",
        description: "Moderni kiinteistöhallinnan digitaalinen alusta",
      },
      items: [
        {
          href: "/palvelut/kiinteistohallinta",
          title: "Kiinteistöhallinta",
          description: "Tehosta kiinteistöjen hallintaa ja seurantaa",
        },
        {
          href: "/palvelut/asukaspalvelut",
          title: "Asukaspalvelut",
          description: "Paranna asukasviestintää ja palvelupyyntöjen käsittelyä",
        },
        {
          href: "/palvelut/raportointi",
          title: "Raportointi",
          description: "Kattavat työkalut kiinteistöjen tilan seurantaan",
        },
      ],
    },
  },
  {
    trigger: "Ratkaisut",
    content: {
      items: [
        {
          href: "/ratkaisut/isannoitsijat",
          title: "Isännöitsijöille",
          description: "Tehosta isännöintityötä ja paranna asiakaspalvelua",
        },
        {
          href: "/ratkaisut/kiinteistoyhtiot",
          title: "Kiinteistöyhtiöille",
          description: "Modernisoi kiinteistöjen hallinta ja viestintä",
        },
        {
          href: "/ratkaisut/huoltopalvelut",
          title: "Huoltopalveluille",
          description: "Tehosta huoltotöiden hallintaa ja seurantaa",
        },
        {
          href: "/ratkaisut/asukkaat",
          title: "Asukkaille",
          description: "Helpota asumista ja yhteydenpitoa",
        },
      ],
    },
  },
  {
    label: "Hinnoittelu",
    href: "/hinnoittelu",
  },
  {
    label: "Tuki",
    href: "/tuki",
  },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.trigger ? (
              <>
                <NavigationMenuTrigger>{item.trigger}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className={`grid gap-3 p-6 ${
                      item.content.main
                        ? "md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
                        : "w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                    }`}
                  >
                    {item.content.main && (
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-primary/10 from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href={item.content.main.href}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {item.content.main.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {item.content.main.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    )}
                    {item.content.items.map((subItem, subIndex) => (
                      <ListItem
                        key={subIndex}
                        href={subItem.href}
                        title={subItem.title}
                        className="hover:bg-primary/10"
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href || ""} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.label}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
