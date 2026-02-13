"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const categories = [
  { name: "Red Apple", items: 54, img: "/cat/apple.png", bg: "bg-orange-50" },
  { name: "Snack", items: 56, img: "/cat/snack.png", bg: "bg-orange-50" },
  { name: "Vegetables", items: 72, img: "/cat/cabbage.png", bg: "bg-pink-50" },
  {
    name: "Strawberry",
    items: 36,
    img: "/cat/strawberry.png",
    bg: "bg-green-50",
  },
  { name: "Black plum", items: 123, img: "/cat/plum.png", bg: "bg-orange-50" },
  {
    name: "Custard apple",
    items: 34,
    img: "/cat/custard.png",
    bg: "bg-yellow-50",
  },
  {
    name: "Coffee & Tea",
    items: 89,
    img: "/cat/coffee.png",
    bg: "bg-orange-50",
  },
  {
    name: "Headphone",
    items: 87,
    img: "/cat/headphone.png",
    bg: "bg-green-50",
  },
  { name: "Cake & Milk", items: 26, img: "/cat/burger.png", bg: "bg-green-50" },
  { name: "Organic Kiwi", items: 28, img: "/cat/kiwi.png", bg: "bg-yellow-50" },
];

export default function FeaturedCategories() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = 300;
    container.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto px-6 py-14">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-8 flex-wrap">
          <h2 className="text-3xl font-bold text-slate-800">
            Featured Categories
          </h2>

          <div className="flex gap-6 text-lg">
            <span className="font-medium">Cake & Milk</span>
            <span className="font-medium">Coffes & Teas</span>
            <span className="font-medium text-green-600">Pet Foods</span>
            <span className="font-medium">Vegetables</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full"
            onClick={() => scroll("left")}
          >
            <ChevronLeft />
          </Button>

          <Button
            size="icon"
            variant="secondary"
            className="rounded-full"
            onClick={() => scroll("right")}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`min-w-[180px] rounded-2xl border-0 ${cat.bg} hover:shadow-md transition`}
          >
            <div className="p-6 flex flex-col items-center text-center gap-3">
              <div className="relative w-20 h-20">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-slate-800">{cat.name}</p>
                <p className="text-sm text-gray-500">{cat.items} items</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
