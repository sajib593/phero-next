import About from "@/component/About";
import Features from "@/component/Features";
import Hero from "@/component/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>

    <main className="w-full">

      {/* 1. Hero Section */}

      <Hero></Hero>
      

      {/* 2. About Section */}
     
     <About></About>

      {/* 3. Features Section */}
    
    <Features></Features>

      {/* 4. Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <ul className="space-y-2 text-gray-600">
          <li>✔ Modern UI with Tailwind</li>
          <li>✔ Fast Routing with App Router</li>
          <li>✔ Simple Authentication Flow</li>
        </ul>
      </section>

      {/* 5. Items Preview Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Featured Items
        </h2>
        <p className="text-center text-gray-600">
          Browse our latest items from the items page.
        </p>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-600">
          “This project is clean, simple, and perfect for beginners.”
        </p>
      </section>

      {/* 7. Call To Action Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Explore?
        </h2>
        <p className="mb-6">
          Login and check out the items list.
        </p>
      </section>

    </main>
     
    </>
  );
}
