"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-6 py-10">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          <CarouselItem className="basis-full">
            <HeroSlide image="/Heroslider-1.png" />
          </CarouselItem>

          <CarouselItem className="basis-full">
            <HeroSlide image="/Heroslider-2.png" />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="left-4 hidden md:flex" />
        <CarouselNext className="right-4 hidden md:flex" />
      </Carousel>
    </section>
  );
}

function HeroSlide({ image }) {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden">
      <Image src={image} alt="grocery" fill priority className="object-cover" />

      <div className="absolute inset-0 " />

      <div className="relative max-w-7xl mx-auto px-8 py-16 min-h-[420px] flex items-center">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Don’t miss amazing
            <br />
            grocery deals
          </h1>

          <p className="text-lg text-slate-600">
            Sign up for the daily newsletter
          </p>

          <div className="flex gap-4 max-w-md">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                type="email"
                placeholder="Your email address"
                className="w-full pl-12 pr-4 h-12 rounded-full bg-white outline-none border border-gray-200 focus:ring-2 focus:ring-green-400"
              />
            </div>

            <Button className="h-12 px-8 rounded-full bg-green-500 hover:bg-green-600">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
