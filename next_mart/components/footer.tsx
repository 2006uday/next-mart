'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { useRouter } from 'next/navigation'


function Footer() {

  const navigate = useRouter()

  return (
    <div className=' bottom-0 right-0 grid grid-cols-5 gap-3 p-4 text-gray-900'>
      {/* div 1 */}
      <div>
        {/* image logo */}
        <Image src={'/logo/logo.svg'} alt='Next Mart & Grocery' width={175} height={175} />

        {/* tag line */}
        <h2>Awesome grocery store website</h2>

        {/* address */}
        <p className='flex items-start gap-3'><span className='font-bold flex justify-center items-center'><Image src={'/assets/location-pin.svg'} alt='' width={20} height={20} />Address:</span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>

        {/* Call us */}
        <p className='flex items-start gap-3'><span className='font-bold flex justify-center items-center'><Image src={'/assets/customer-service.svg'} alt='' width={20} height={20} />Call Us:</span>(+91) - 540-025-124553</p>

        {/* Email */}
        <p className='flex items-start gap-3'><span className='font-bold flex justify-center items-center'><Image src={'/assets/sendSvg.svg'} alt='' width={20} height={20} />Email:</span>sale@Next.com</p>

        {/* Hours */}
        <p className='flex items-start gap-3'><span className='font-bold flex justify-center items-center'><Image src={'/assets/clock.svg'} alt='' width={20} height={20} />Hours:</span>10:00 - 18:00,Mon - Sat</p>

        <h1 className='text-2xl font-semibold'>Install App</h1>

        {/* More apps */}
        <h3>From App Store or Google Play</h3>

        {/* buttons */}
        <div className='w-full flex gap-2 my-5'>
          {/* apple store */}
          <motion.button
            whileHover={{ y: -5 }}
            exit={{ y: 0 }}
            className='bg-black px-2 py-1 flex justify-center items-center rounded-sm'>
            <Image src={'/assets/apple-store.svg'} alt='Appple Store' width={25} height={25} className=' invert-100' />

            <div className='text-white'>
              <p className='text-xs'>Download on the</p>
              <h1>App Store</h1>
            </div>
          </motion.button>

          {/* google play */}
          <motion.button
            whileHover={{ y: -5 }}
            exit={{ y: 0 }}
            className='bg-black px-2 py-1 flex justify-center items-center rounded-sm'>
            <Image src={'/assets/google-play.svg'} alt='Google Play' width={25} height={25} />

            <div className='text-white'>
              <p className='text-xs'>GET IT ON</p>
              <h1>Google Play</h1>
            </div>
          </motion.button>
        </div>

        <h3>Secured Payment Gateways</h3>

        <Image src={'/assets/payment-method.png'} alt='Payment Methods' width={175} height={175} className='my-5' />

      </div>

      {/* div 2 */}
      <div>
        <h1 className='text-2xl font-semibold mb-5'>Company</h1>

        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/about")}
        >
          About Us
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/deliveryInformationt")}
        >
          Delivery Information
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/privacyPolicy")}
        >
          Privacy Policy
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/termsConditions")}
        >
          Terms & Conditions
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/contact")}
        >
          Contact Us
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/supportCenter")}
        >
          Support Center
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/careers")}
        >
          Careers
        </motion.h3>

      </div>

      {/* div 3 */}
      <div>
        <h1 className='text-2xl font-semibold mb-5'>Account</h1>

        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/signIn")}
        >
          Sign In
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/viewCart")}
        >
          View Cart
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/myWishlist")}
        >
          My Wishlist
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/trackMyOrder")}
        >
          Track My Order
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/helpTicket")}
        >
          Help Ticket
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/shippingDetails")}
        >
          Shipping Details
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/compareProducts")}
        >
          Compare Products
        </motion.h3>

      </div>

      {/* div 4 */}
      <div>
        <h1 className='text-2xl font-semibold mb-5'>Corporate</h1>

        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/becomeAVendor")}
        >
          Become A Vendor
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/affiliateProgram")}
        >
          Affiliate Program
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/farmBusiness")}
        >
          Farm Business
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/farmCareers")}
        >
          Farm Careers
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/ourSupplies")}
        >
          Our Supplies
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/accessibility")}
        >
          Accessibility
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/promotions")}
        >
          Promotions
        </motion.h3>

      </div>

      {/* div 5 */}
      <div>
        <h1 className='text-2xl font-semibold mb-5'>Popular</h1>

        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/milk&FlavouredMilk")}
        >
          Milk & Flavoured Milk
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/butterAndMargarine")}
        >
          Butter And Margarine
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/eggsSubstitutes")}
        >
          Eggs Substitutes
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/marmalades")}
        >
          Marmalades
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/sourCreamAndDips")}
        >
          Sour Cream And Dips
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/tea&Kombucha")}
        >
          Tea & Kombucha
        </motion.h3>
        <motion.h3
          whileHover={{ x: 5 }}
          exit={{ x: 0 }}
          className="hover:text-green-400 mb-5"
          onClick={() => navigate.push("/cheese")}
        >
          Cheese
        </motion.h3>

      </div>
    </div>
  )
}

export default Footer
