import { useState } from "react";
import CartModal from "./CartModal";

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(0);
    const [selectedColor, setSelectedColor] = useState("Purple");
    const [selectedSize, setSelectedSize] = useState("XL");
    const [selectedPrice, setSelectedPrice] = useState(99);
    const [cart, setCart] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const productImageSrc = {
        Purple: "images/watch-purple.png",
        Cyan: "images/watch-cyan.png",
        Blue: "images/watch-blue.png",
        Black: "images/watch-black.png",
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    };

    const addToCart = () => {
        if (quantity > 0) {
            const price = selectedPrice * quantity;
            const cartItem = {
                item: "Classy Modern Smart Watch",
                color: selectedColor,
                size: selectedSize,
                quantity,
                price,
                image: productImageSrc[selectedColor],
            };
            setCart([...cart, cartItem]);
            setShowModal(true);
        }
    };
    
    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <div className="flex gap-6">
                <div className="w-1/2">
                    <img
                        id="product-image"
                        src={productImageSrc[selectedColor]}
                        alt="Smart Watch"
                        className="rounded-lg shadow-md"
                    />
                </div>

                <div className="w-1/2">
                    <h1 className="text-2xl font-bold text-gray-800">Classy Modern Smart Watch</h1>
                    <div className="flex items-center mt-2">
                        <div className="text-yellow-500">&#9733; &#9733; &#9733; &#9733; &#9734;</div>
                        <span className="text-sm text-gray-600 ml-2">(2 Reviews)</span>
                    </div>
                    <p className="text-gray-500 mt-4">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>

                    <div className="mt-6">
                        <p className="text-sm text-gray-600">Type: <span className="font-medium">Watch</span></p>
                        <p className="text-sm text-gray-600">Model Number: <span className="font-medium">Forerunner 290XT</span></p>
                    </div>

                    <div className="mt-6">
                        <span className="block text-sm text-gray-600">Band Color:</span>
                        <div className="flex gap-2 mt-2">
                            {["Purple", "Cyan", "Blue", "Black"].map((color) => (
                                <button
                                    key={color}
                                    className={`color-option w-6 h-6 rounded-full border-2 ${color === selectedColor ? "border-gray-800" : "border-transparent"
                                        }`}
                                    style={{ backgroundColor: color.toLowerCase() }} // Apply color visually
                                    onClick={() => setSelectedColor(color)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <span className="block text-sm text-gray-600">Wrist Size:</span>
                        <div className="flex gap-2 mt-2">
                            {["S", "M", "L", "XL"].map((size) => (
                                <button
                                    key={size}
                                    className={`size-option px-3 py-1 border border-gray-300 rounded text-sm ${size === selectedSize ? "bg-gray-800 text-white" : ""}`}
                                    onClick={() => {
                                        const prices = { S: 69, M: 79, L: 89, XL: 99 };
                                        setSelectedSize(size);
                                        setSelectedPrice(prices[size]);
                                    }}
                                >
                                    {size} ${size === "S" ? 69 : size === "M" ? 79 : size === "L" ? 89 : 99}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <button onClick={decrementQuantity} className="px-2 py-1 border border-gray-300 rounded">-</button>
                            <span className="px-4 py-1 border border-gray-300 rounded">{quantity}</span>
                            <button onClick={incrementQuantity} className="px-2 py-1 border border-gray-300 rounded">+</button>
                        </div>
                        <button onClick={addToCart} className="bg-purple-600 text-white px-6 py-2 rounded shadow hover:bg-purple-700">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <CartModal cart={cart} showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
};

export default ProductDetail;
