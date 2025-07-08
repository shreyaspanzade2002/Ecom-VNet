import React from "react";

const App = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-blue-600 text-white py-20 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-4">🛍️ Welcome to Yashlight Store</h1>
        <p className="text-lg">Shop smart. Shop secure. Powered by Azure.</p>
      </section>

      {/* Featured Products */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">🔥 Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 1, title: "Smartphone X", price: "₹49,999", img: "images\smartphone.jpeg" },
            { id: 2, title: "Wireless Headphones", price: "₹3,499", img: "images\wireless_earphones.jpg" },
            { id: 3, title: "Smartwatch Pro", price: "₹9,999", img: "images\smartwatch.jpg" },
          ].map(product => (
            <div key={product.id} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <img src={product.img} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-lg font-medium">{product.title}</h3>
              <p className="text-blue-600 font-semibold">{product.price}</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 bg-gray-100 mt-10 border-t">
        © {new Date().getFullYear()} Yashlight. Built on Azure 🚀
      </footer>
    </div>
  );
};

export default App;
