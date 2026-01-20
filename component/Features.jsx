import React from 'react';

const Features = () => {
    return (
          <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 shadow rounded">Public Pages</div>
          <div className="bg-white p-6 shadow rounded">Mock Authentication</div>
          <div className="bg-white p-6 shadow rounded">Express API</div>
        </div>
      </section>
    );
};

export default Features;