type ProductPageProps = {
    params:{
        slug:string
    }
}

export default function ProductDetails({params}:ProductPageProps) {
    return  (
    <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
            {/* Left side - Images */}
            <div>
                <img
                src="/images/shoe-main.png"
                alt="Main shoe"
                className="rounded-lg mb-4"
                />
                <div className="flex gap-2">
                {["shoe-main", "shoe-side", "shoe-angle", "shoe-back"].map((img, i) => (
                    <img
                    key={i}
                    src={`/images/${img}.png`}
                    alt={`Shoe ${i}`}
                    className="w-20 h-20 rounded-md border cursor-pointer hover:border-blue-500"
                    />
                ))}
                </div>
            </div>

            {/* Right side - Details */}
            <div className="space-y-2">
                 
                 {/* Product Title */}
                <h1 className="text-2xl font-semibold text-gray-800">
                    Women Leather Heels Sandal
                </h1>

                {/* Rating + Review Link */}
                <div className="flex items-center space-x-3">
                    {/* Stars */}
                    <div className="flex text-pink-400 text-xl">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                    </div>

                    {/* Divider */}
                    <span className="text-gray-300">|</span>

                    {/* Review Link */}
                    <a
                    href="#"
                    className="text-sm text-blue-600 underline hover:text-blue-800"
                    >
                    Be the first to review this product
                    </a>
                </div>

                {/* Product Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1990
                </p>

                {/* Price and Stock */}
                <div className="flex justify-between items-center">
                    <div>
                    <p className="text-sm text-gray-600">As low as</p>
                    <p className="text-2xl font-bold">$68.00</p>
                    </div>
                    <div className="text-right">
                    <p className="text-sm text-gray-700 font-semibold">IN STOCK</p>
                    <p className="text-sm">
                        <span className="font-semibold">SKU#:</span>{' '}
                        <span className="font-bold text-gray-800">WH12</span>
                    </p>
                    </div>
                </div>

                {/* Size */}
                <div>
                    <p className="font-semibold mb-1">SIZE</p>
                    <div className="flex gap-2">
                    {['7', '8', '9'].map(size => (
                        <button
                        key={size}
                        className="w-8 h-8 border text-sm rounded hover:bg-gray-100"
                        >
                        {size}
                        </button>
                    ))}
                    </div>
                </div>

                {/* Color */}
                <div>
                    <p className="font-semibold mb-1">COLOR</p>
                    <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full border-2 border-white ring-1 ring-gray-300 bg-[#6fa4a8] cursor-pointer"></span>
                    <span className="w-6 h-6 rounded-full border-2 border-white ring-1 ring-gray-300 bg-[#3a3a3a] cursor-pointer"></span>
                    </div>
                </div>

                {/* Quantity & Buttons */}
                <div className="flex gap-4 items-center flex-wrap border-t pt-4">
                    {/* Quantity Counter */}
                    <div className="flex border rounded overflow-hidden">
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">−</button>
                    <span className="px-4 py-1">1</span>
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">+</button>
                    </div>

                    {/* Add to Cart */}
                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    ADD TO CART
                    </button>

                    {/* Icons */}
                    <button className="border p-2 rounded hover:bg-gray-100">♡</button>
                    <button className="border p-2 rounded hover:bg-gray-100">👁</button>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 pt-2">
                    {[
                    'facebook',
                    'twitter',
                    'instagram',
                    'youtube',
                    'behance',
                    'whatsapp',
                    'plus',
                    ].map((icon, idx) => (
                    <button
                        key={idx}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-sm"
                    >
                        <i className={`fab fa-${icon}`} />
                    </button>
                    ))}
                </div>                                 
            </div>
        </div>
    </div>
    )
}