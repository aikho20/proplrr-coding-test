"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import Link from "next/link";
import { Menu, ShoppingCartIcon, UserIcon } from "lucide-react";
import { categoryList, mobileControls } from "@/data";
import CategoryItem from "../ui/category-item";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { DialogDescription } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row w-full px-5 py-2 items-center justify-between sticky  top-0 left-0 bg-white z-10">
      <Drawer direction={"left"}>
        <DrawerTrigger asChild>
          <Button variant="secondary" className="block md:hidden py-1">
            <Menu className="h-6 w-6 text-primary " />
          </Button>
        </DrawerTrigger>
        <VisuallyHidden>
          <DrawerTitle>Menu</DrawerTitle>
          <DialogDescription>Mobile Controls</DialogDescription>
        </VisuallyHidden>
        <DrawerContent className="h-screen top-0 left-0 mt-0 w-[300px] rounded-none">
          <div className="flex flex-col items-center  ">
            <div className=" h-24 w-24 rounded-full bg-slate-100" />

            <div className="flex flex-col justify-start w-full pt-5">
              {mobileControls.map((items, index) => {
                const Icon = items.icon;
                return (
                  <Link
                    className="text-xs flex flex-row p-2 justify-start items-center"
                    key={index}
                    href={items.path}
                  >
                    <Icon
                      className={`h-6 w-6 mx-2 ${
                        pathname === items.path
                          ? "text-primary"
                          : "text-gray-400"
                      }`}
                    />
                    {items.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      <Link className="text-destructive font-bold text-2xl" href={"/"}>
        ENVX.
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${
                  pathname === "/" ? "text-primary" : ""
                }`}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Category</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px]md:w-[500px] lg:w-[400px] ">
                {categoryList.map((items, index) => (
                  <div key={index} className="w-full border-b-2">
                    <CategoryItem
                      id={items.id}
                      title={items.title}
                      image={items.image}
                    />
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contacts
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-row">
        <Input
          type="email"
          placeholder="Search"
          className="max-w-[300px]  hidden md:block mx-1"
        />
        <Drawer direction={"right"}>
          <DrawerTrigger asChild>
            <Button className="bg-white  p-0" variant={"secondary"}>
              <ShoppingCartIcon className="h-5 w-5 mx-1" />
            </Button>
          </DrawerTrigger>
          <VisuallyHidden>
            <DrawerTitle>Cart</DrawerTitle>
            <DialogDescription>Cart Items</DialogDescription>
          </VisuallyHidden>
          <DrawerContent className="h-screen top-0 right-0 mt-0 w-[350px] md:w-[500px] left-auto rounded-none">
            <div className="flex flex-col items-center  justify-center h-full">
              <ShoppingCartIcon className="h-5 w-5 text-gray-400" />
              <p className="text-gray-400 text-sm">No Items to your cart.</p>
            </div>
          </DrawerContent>
        </Drawer>

        <div className="flex flex-row space-x-3  hidden md:block mx-1">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-row px-2 py-2 items-center ">
              <UserIcon className="h-5 w-5 mt-1" />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Signout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
