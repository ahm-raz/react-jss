import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-gray-600 mb-6">
          We build modern digital solutions using powerful technologies and
          clean design.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          Explore Services
        </button>
      </div>
    </section>
  );
};

export default Home;