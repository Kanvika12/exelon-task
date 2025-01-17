import React, { useState } from 'react';
import productImage from "../assets/images/pur2.jpg";
import chocRaspberryImg from "../assets/images/red.jpg";
import matchaLemonImg from "../assets/images/green.jpg";
import mangoTurmericImg from "../assets/images/orange.jpg";

import { ShoppingCart, Search, User, Menu, CheckCircle, Leaf, Package } from 'lucide-react';

const Puposefuellanding = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState({
    chocolateRaspberry: 0,
    matchaLemon: 0,
    mangoTurmeric: 0
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { title: "Chocolate Raspberry Cacao 3pk", img: chocRaspberryImg, productKey: 'chocolateRaspberry' },
    { title: "Matcha Lemon 3pk", img: matchaLemonImg, productKey: 'matchaLemon' },
    { title: "Mango Turmeric 3pk", img: mangoTurmericImg, productKey: 'mangoTurmeric' }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const updateCart = (product, quantity) => {
    setCart(prevCart => ({
      ...prevCart,
      [product]: quantity
    }));
  };

  const getTotalItems = () => {
    return cart.chocolateRaspberry + cart.matchaLemon + cart.mangoTurmeric;
  };

  const getTotalPrice = () => {
    const prices = {
      chocolateRaspberry: 15,
      matchaLemon: 12,
      mangoTurmeric: 10
    };
    return (
      cart.chocolateRaspberry * prices.chocolateRaspberry +
      cart.matchaLemon * prices.matchaLemon +
      cart.mangoTurmeric * prices.mangoTurmeric
    );
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <div className="bg-[#E86141] text-white text-center py-2 whitespace-nowrap overflow-hidden">
        <div className="animate-scroll flex">
          <span className="px-4">Orders Over $80 Get Ship Free.</span>
          <span className="px-4">Orders Over $80 Get Ship Free.</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 border-b">
        <div className="flex items-center gap-6">
          <div className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6 cursor-pointer" />
          </div>
          <div className={`absolute top-16 left-0 w-full bg-white shadow-lg md:static md:flex gap-6 md:shadow-none ${menuOpen ? 'block' : 'hidden'}`}>
            <a href="#home" className="block px-6 py-2 text-black hover:text-gray-600 md:px-0">Home</a>
            <a href="#shop" className="block px-6 py-2 text-black hover:text-gray-600 md:px-0">Shop</a>
            <a href="#about" className="block px-6 py-2 text-black hover:text-gray-600 md:px-0">About</a>
          </div>
        </div>
        <div className="text-xl font-bold">
          Purpose<span className="text-[#E86141]">fuel</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-2 top-2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-4 py-2 border rounded-full focus:outline-none focus:ring focus:ring-[#E86141]"
            />
          </div>
          <div className="relative" onClick={toggleCart}>
            <ShoppingCart className="h-5 w-5 cursor-pointer" />
            {getTotalItems() > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 rounded-full">
                {getTotalItems()}
              </span>
            )}
          </div>
          <User className="h-5 w-5" />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-yellow-400 p-6 md:p-16 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              DESSERT SNACKS<br />WITH FUNCTIONALITY
            </h1>
            <p className="mb-6 text-base md:text-lg">
              A Revolutionary Superfood Snack Bite Inspired by<br />
              Global Cultures and Packed with Nostalgia
            </p>
            <button
              className="bg-white text-black px-6 md:px-8 py-2 rounded-full w-fit hover:bg-gray-100 transition-transform transform hover:scale-105"
              onClick={() => {
                const shopSection = document.getElementById("shop");
                if (shopSection) {
                  shopSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              SHOP NOW
            </button>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-green-500 p-4 md:p-8">
            <img
              src={productImage}
              alt="Product showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-around items-center">
          <div className="flex flex-col items-center">
            <Leaf className="h-10 w-10 text-[#E86141]" />
            <p className="mt-2 font-semibold text-center">100% Plant-based</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="h-10 w-10 text-[#E86141]" />
            <p className="mt-2 font-semibold text-center">Real Fruits, Nuts, & Superfoods</p>
          </div>
          <div className="flex flex-col items-center">
            <Package className="h-10 w-10 text-[#E86141]" />
            <p className="mt-2 font-semibold text-center">No Preservatives or Added Sugar</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="shop" className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Enjoy Our Purposefuel
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-pink-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-full h-60 overflow-hidden rounded-lg">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mt-4">{product.title}</h3>
              <div className="flex justify-center mt-4">
                <select
                  value={cart[product.productKey]}
                  onChange={(e) => updateCart(product.productKey, parseInt(e.target.value))}
                  className="w-full max-w-[200px] p-2 rounded border"
                >
                  <option value="0">Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shopping Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-2xl font-bold mb-4">Shopping Cart</h3>
            <ul>
              {Object.entries(cart).map(([productKey, quantity]) => (
                quantity > 0 && (
                  <li key={productKey} className="flex justify-between mb-2">
                    <span>{productKey.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                    <span>{quantity}</span>
                  </li>
                )
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-right font-semibold text-lg">
                Total: ${getTotalPrice()}
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={toggleCart}
                className="bg-gray-800 text-white py-2 px-6 rounded-full"
              >
                Close Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Puposefuellanding;
