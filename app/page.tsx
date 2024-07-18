import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { blogEvenList, carouselData, productList } from "@/data";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/product-card";
import BlogEvenItem from "@/components/ui/blog-event-item";
import Link from "next/link";
import { Share2 } from "lucide-react";

export default function Home() {
  return (
    <div className="md:container w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {carouselData.map((items, index) => (
            <CarouselItem key={index}>
              <div className="p-1 relative w-full">
                <div className="absolute z-50 w-full h-full">
                  <div className="flex flex-row justify-stretch items-center w-full h-full space-x-5">
                    <div className="flex items-end w-[50%] h-full justify-center flex-col ">
                      <div className="flex flex-col w-[60%] justify-end h-[60%] items-start">
                        <p className="text-lg text-white  font-bold md:text-3xl lg:text-5xl">
                          {items.headerText}
                        </p>
                        <p className="text-xs text-slate-400 py-2 md:text-lg">
                          {items.description}
                        </p>
                      </div>
                      <div className="flex flex-col w-[60%] justify-eend sm:justify-end h-[30%] items-start z-100">
                        <div className="flex flex-row mt-[30px] md:mt-0">
                          <Button
                            variant={"secondary"}
                            size={"sm"}
                            className="rounded-none"
                          >
                            COLOR
                          </Button>
                          <Button
                            variant={"secondary"}
                            size={"sm"}
                            className="rounded-none"
                          >
                            PRICE
                            <span className="text-destructive mx-2">
                              {items.price}
                            </span>
                          </Button>
                          <Button
                            variant={"destructive"}
                            className="rounded-none hidden md:block"
                            size={"sm"}
                          >
                            VIEW PRODUCT
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-center  h-full justify-center relative">
                      <img
                        src={items.image}
                        className="rotate-[5deg] h-[70%] max-w-[90%] object-fill animate-bouncy-bounce"
                      />
                      <div className="animate-shadow z-200 -rotate-[15deg] h-[5%]" />
                      <div className="flex flex-col justify-end sm:justify-end h-[15%] items-start z-100">
                        <Button
                          variant={"secondary"}
                          className="rounded-none hidden md:block"
                          size={"sm"}
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  src={items.backgroundImage}
                  className="w-full object-cover z-10 min-h-[300px]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-10 top-1/2" />
        <CarouselNext className="right-10 top-1/2" />
      </Carousel>

      <p className="text-lg md:text-2xl text-gray-500 font-weight-100 text-center py-10">
        NEW PRODUCTS
      </p>
      <div className="">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {productList.map((items, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <ProductCard
                    id={index.toString()}
                    productName={items.productName}
                    price={items.price}
                    image={items.image}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[20%] md:left-[30%] lg:left-[35%]  -top-[55px] text-dark" />
          <CarouselNext className="right-[20%] md:right-[30%] lg:right-[35%]  -top-[55px] text-dark" />
        </Carousel>
      </div>

      <div className="flex flex-col lg:flex-row my-5">
        <div className="md:px-12">
          <>
            <div className="flex flex-row justify-between p-3">
              <p className="text-gray-600">BLOG x EVENT</p>
              <Link href={"/"}> See all</Link>
            </div>
            <hr />
            {blogEvenList.map((items, index) => (
              <div key={index} className="w-full">
                <BlogEvenItem
                  id={items.id}
                  title={items.title}
                  date={items.date}
                  image={items.image}
                />
              </div>
            ))}
          </>
        </div>
        <div className="">
          <div className="relative">
            <img
              src="/images/blogevent3.png"
              className="p-10 max-h-[500px] overflow-hidden w-full bg-opacity-75 bg-center object-cover "
            />
            <div className="absolute z-100 top-0 flex flex-row items-center justify-start bottom h-full w-full">
              <div className="w-[50%] h-[60%]">
                <img
                  src="/images/helmet4.png"
                  className="h-full w-full animate-bouncy-bounce"
                />
                <div className="animate-shadow z-200 rotate-[15deg] h-[5%] ml-14" />
              </div>
              <div className=" flex flex-col items-end pr-20">
                <p className="text-white text-4xl text-right font-bold">
                  {"ADV BEST SELLER"}
                </p>
                <hr className="border-2 my-4 w-[80px] border-[#e5e7ebad]" />
                <p className="text-xs text-white mb-5 text-right">
                  SEE OUR MOST POPULAR PRODUCT
                </p>
                <Button
                  variant={"destructive"}
                  size={"sm"}
                  className="rounded-none shadow-lg w-[80px] "
                >
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
