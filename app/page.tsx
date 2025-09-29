"use client";

import Image from "next/image";
import Card from "@/components/ui/Card";
export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="relative text-center">
        <Image
          src="/image/backgroun-img-1.png"
          alt="Car Wash"
          width={1200}
          height={500}
          className="rounded-xl object-cover w-full h-[400px] md:h-[500px] brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Bustan Alzuhoor Parking Car Washing L.L.C
          </h1>
          <p className="text-lg md:text-xl animate-fadeIn delay-200">
            Eco-friendly, scratch-proof, and innovative car wash service in Dubai.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow-lg glass-effect animate-fadeIn delay-400">
            Book a Wash
          </button>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2 gap-8">
        <Card className="glass-effect p-6 animate-slideInLeft">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Our Vision</h2>
          <p>
            To become the most innovative and eco-friendly mobile car wash company in U.A.E, using state-of-the-art technology.
          </p>
        </Card>
        <Card className="glass-effect p-6 animate-slideInRight">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Our Mission</h2>
          <p>
            We provide the best eco-friendly car cleaning services with zero water wastage, preserving the environment for future generations.
          </p>
        </Card>
      </section>

      {/* Objectives */}
      <section className="animate-fadeIn">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Objectives</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Expand our client base across the UAE.</li>
          <li>Establish our brand through innovative services.</li>
          <li>Ensure mutual benefits for both our company and clients.</li>
        </ul>
      </section>

      {/* Services */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-effect p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly Wash</h3>
            <p>Waterless, scratch-proof cleaning using eco-friendly solutions.</p>
          </Card>
          <Card className="glass-effect p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Interior Detailing</h3>
            <p>Deep clean of car interiors, including carpets and upholstery.</p>
          </Card>
          <Card className="glass-effect p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Exterior Polishing</h3>
            <p>Shine and protect your car’s paint with eco-friendly polish.</p>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="text-center space-y-6 animate-fadeIn">
        <h2 className="text-3xl font-bold text-blue-600">Why Choose Us?</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          We combine innovation, sustainability, and premium service to deliver a superior car wash experience. From advanced waterless technologies to skilled staff, every car is treated like our own.
        </p>
      </section>

      {/* Testimonials */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-effect p-6 hover:shadow-xl transition-shadow duration-300">
            <p>&quot;Best car wash in Dubai! Eco-friendly and efficient.&quot;</p>
            <span className="mt-4 block font-semibold">– Ahmed K.</span>
          </Card>
          <Card className="glass-effect p-6 hover:shadow-xl transition-shadow duration-300">
            <p>&quot;Professional staff and zero scratches on my car.&quot;</p>
            <span className="mt-4 block font-semibold">– Fatima R.</span>
          </Card>
          <Card className="glass-effect p-6 hover:shadow-xl transition-shadow duration-300">
            <p>&quot;Quick service and very eco-conscious. Highly recommend.&quot;</p>
            <span className="mt-4 block font-semibold">– John D.</span>
          </Card>
        </div>
      </section>

    </div>
  );
}
