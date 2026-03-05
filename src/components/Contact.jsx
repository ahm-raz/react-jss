import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-8">
      <div className="max-w-xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>

          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;