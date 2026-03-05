import React from "react";

const Services = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-600">
              Modern responsive websites using the latest frameworks.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold mb-3">UI / UX Design</h3>
            <p className="text-gray-600">
              Clean, user-friendly interfaces designed for real users.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold mb-3">Backend Systems</h3>
            <p className="text-gray-600">
              Secure and scalable APIs powering modern applications.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;