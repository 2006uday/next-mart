import Image from "next/image";
import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/featured-categories";
import CarT from "@/components/home/Cart";
import PopularProducts from "@/components/home/PopularProducts";

function page() {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <CarT />
      <PopularProducts />
    </div>
  )
}

export default page
