import Image from "next/image";


export default function MiddleNavbar() {
    return (
        <>
            {/* middle-navbar */}
            <div className="middle-navbar flex justify-around px-5 my-7  py-0.5 text-sm items-center">
                <div>
                    <Image src="/logo/logo.svg" alt="logo" width={100} height={100} className="w-[180px]" />
                </div>
                <div className="flex gap-5">
                    <div>
                        <input type="text" className="w-[500px] h-[50px] border border-1 p-3" placeholder="Search" />
                    </div>
                    <div className="flex justify-around w-[500px] items-center">
                        <div>
                            your location
                        </div>
                        <div>
                            Compare
                        </div>
                        <div>
                            Wishlist
                        </div>
                        <div>
                            Cart
                        </div>
                        <div>
                            Account

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   