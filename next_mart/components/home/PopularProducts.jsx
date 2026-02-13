import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    brand: "NestFood",
    price: 28.85,
    oldPrice: 32.8,
    rating: 4.0,
    badge: "Hot",
    badgeColor: "bg-pink-500",
    // image: "",
  },
  {
    id: 2,
    title: "All Natural Italian-Style Chicken Meatballs",
    category: "Hodo Foods",
    brand: "Stouffer",
    price: 52.85,
    oldPrice: 55.8,
    rating: 3.5,
    badge: "Sale",
    badgeColor: "bg-blue-500",
    // image: "",
  },
  {
    id: 3,
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    category: "Snack",
    brand: "StarKist",
    price: 48.85,
    oldPrice: 52.8,
    rating: 4.0,
    badge: "New",
    badgeColor: "bg-green-500",
    // image: "",
  },
  {
    id: 4,
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    category: "Vegetables",
    brand: "NestFood",
    price: 17.85,
    oldPrice: 19.8,
    rating: 4.0,
    // image: "",
  },
  {
    id: 5,
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    category: "Pet Foods",
    brand: "NestFood",
    price: 23.85,
    oldPrice: 25.8,
    rating: 4.0,
    badge: "-14%",
    badgeColor: "bg-orange-500",
    // image: "",
  },



  {
    id: 6,
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    brand: "NestFood",
    price: 28.85,
    oldPrice: 32.8,
    rating: 4.0,
    badge: "Hot",
    badgeColor: "bg-pink-500",
    // image: "",
  },
  {
    id: 7,
    title: "All Natural Italian-Style Chicken Meatballs",
    category: "Hodo Foods",
    brand: "Stouffer",
    price: 52.85,
    oldPrice: 55.8,
    rating: 3.5,
    badge: "Sale",
    badgeColor: "bg-blue-500",
    // image: "",
  },
  {
    id: 8,
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    category: "Snack",
    brand: "StarKist",
    price: 48.85,
    oldPrice: 52.8,
    rating: 4.0,
    badge: "New",
    badgeColor: "bg-green-500",
    // image: "",
  },
  {
    id: 9,
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    category: "Vegetables",
    brand: "NestFood",
    price: 17.85,
    oldPrice: 19.8,
    rating: 4.0,
    // image: "",
  },
  {
    id: 10,
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    category: "Pet Foods",
    brand: "NestFood",
    price: 23.85,
    oldPrice: 25.8,
    rating: 4.0,
    badge: "-14%",
    badgeColor: "bg-orange-500",
    // image: "",
  },


  {
    id: 11,
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    brand: "NestFood",
    price: 28.85,
    oldPrice: 32.8,
    rating: 4.0,
    badge: "Hot",
    badgeColor: "bg-pink-500",
    // image: "",
  },
  {
    id: 12,
    title: "All Natural Italian-Style Chicken Meatballs",
    category: "Hodo Foods",
    brand: "Stouffer",
    price: 52.85,
    oldPrice: 55.8,
    rating: 3.5,
    badge: "Sale",
    badgeColor: "bg-blue-500",
    // image: "",
  },
  {
    id: 13,
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    category: "Snack",
    brand: "StarKist",
    price: 48.85,
    oldPrice: 52.8,
    rating: 4.0,
    badge: "New",
    badgeColor: "bg-green-500",
    // image: "",
  },
  {
    id: 14,
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    category: "Vegetables",
    brand: "NestFood",
    price: 17.85,
    oldPrice: 19.8,
    rating: 4.0,
    // image: "",
  },
  {
    id: 15,
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    category: "Pet Foods",
    brand: "NestFood",
    price: 23.85,
    oldPrice: 25.8,
    rating: 4.0,
    badge: "-14%",
    badgeColor: "bg-orange-500",
    // image: "",
  },
];

const PopularProducts = () => {
  return (
    <section className="max-w-[1500px] mx-auto px-4 py-12">

      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <h2 className="text-3xl font-semibold">Popular Products</h2>

        <div className="flex gap-6 text-sm text-gray-600">
          <button className="text-green-600 font-medium">All</button>
          <button>Milks & Dairies</button>
          <button>Coffes & Teas</button>
          <button>Pet Foods</button>
          <button>Meats</button>
          <button>Vegetables</button>
          <button>Fruits</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl p-4 hover:shadow-lg transition relative bg-white"
          >

            {product.badge && (
              <span
                className={`absolute top-4 left-4 text-xs text-white px-3 py-1 rounded-full ${product.badgeColor}`}
              >
                {product.badge}
              </span>
            )}

            <div className="flex justify-center mb-4">
              {/* <Image
                src={product.image}
                alt={product.title}
                width={160}
                height={160}
                className="object-contain h-[150px]"
              /> */}
            </div>


            <p className="text-xs text-gray-400 mb-1">{product.category}</p>


            <h3 className="text-sm font-medium mb-2 line-clamp-2">
              {product.title}
            </h3>


            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${i < Math.round(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                    }`}
                />
              ))}
              <span className="text-xs text-gray-500 ml-1">
                ({product.rating})
              </span>
            </div>


            <p className="text-xs text-gray-500 mb-3">
              By <span className="text-green-600">{product.brand}</span>
            </p>


            <div className="flex justify-between items-center">
              <div>
                <span className="text-green-600 font-semibold">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm ml-2">
                    ${product.oldPrice}
                  </span>
                )}
              </div>

              <button className="flex items-center gap-1 bg-green-100 text-green-600 px-3 py-1.5 rounded-md text-sm hover:bg-green-600 hover:text-white transition">
                <ShoppingCart size={14} />
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
