


export default function LastNavbar() {
    return (
        <>
            <div className="flex justify-around items-center mt-3 border-b border-gray-200 border-1 py-3">
                <div className="flex justify-start items-center gap-13">
                    <div className="bg-green-600 p-3">
                        Browse
                        All Categories
                    </div>
                    <div>Deals</div>
                    <div className="text-green-600 font-bold">Home</div>
                    <div>About </div>
                    <div>Shop</div>
                    <div>Vendors</div>
                    <div>Mega menu</div>
                    <div>Blog</div>
                    <div>Pages</div>
                    <div>Contact</div>
                </div>
                <div className="flex flex-col justify-end items-center gap-0">
                    <p className="font-bold text-end text-green-600 text-3xl">1900-666-888</p>
                    <p className="text-sm text-end">24/7 Support</p>
                </div>
            </div>
        </>
    )
}