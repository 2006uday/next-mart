import Image from "next/image";

const Cart = () => {
  const Cartdata = [
    {
      name: "Everyday Fresh & Clean with Our Products",
      image: "/cart1.png",
    },
    {
      name: "Make your Breakfast Healthy and Easy",
      image: "/cart2.png",
    },
    {
      name: "The best Organic Products Online",
      image: "/cart3.png",
    },
  ];

  return (
    <div className="flex gap-8 max-w-[1500px] mx-auto px-4">
      {Cartdata.map((item, index) => (
        <div
          key={index}
          className="relative w-full rounded-2xl overflow-hidden"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />

          <div className="absolute top-8 left-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 max-w-[250px]">
              {item.name}
            </h2>

            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition">
              Shop Now →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
