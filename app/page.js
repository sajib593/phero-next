import About from "@/component/About";
import CallAction from "@/component/CallAction";
import Features from "@/component/Features";
import Hero from "@/component/Hero";
import Items from "@/component/Items";
import Service from "@/component/Service";
import Testimonial from "@/component/Testimonial";
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
    <Service></Service>

      {/* 5. Items Preview Section */}
      <Items></Items>

      {/* 6. Testimonials Section */}
     <Testimonial></Testimonial>

      {/* 7. Call To Action Section */}
      <CallAction></CallAction>
   

    </main>
     
    </>
  );
}
