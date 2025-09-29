"use client";

import { Car, Sparkles, Sun, Droplets } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import Image from 'next/image'; // Import the Image component if using Next.js

export default function ServicesPage() {
  const services = [
    {
      title: "Eco-Friendly Wash",
      description:
        "Waterless, scratch-proof cleaning using eco-friendly solutions that protect your car and the planet.",
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Interior Detailing",
      description:
        "Deep cleaning of seats, carpets, and dashboard to keep your cars interior fresh and spotless.",
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Headlight Restoration",
      description:
        "Remove oxidation and restore clarity to your headlights for better visibility and safety.",
      icon: <Car className="w-8 h-8 text-gray-600" />,
    },
    {
      title: "Tyre & Rim Dressing",
      description:
        "UV-protection tyre dressing and rim polish that add shine and extend durability.",
      icon: <Sun className="w-8 h-8 text-orange-500" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Our Professional Services
      </h1>

      {/* Image added here */}
      <div className="mb-10 text-center">
        {/* If you are using Next.js, it's recommended to use the `next/image` component for optimization */}
        <Image
          src="/image/serves-page.jpg" // Path to your image, adjust as needed
          alt="Car Washing Services"
          width={900} // Set appropriate width
          height={400} // Set appropriate height
          className="rounded-lg shadow-md mx-auto"
        />
        {/* If not using Next.js or prefer standard img tag: */}
        {/* <img
          src="/images/car-wash-banner.jpg" // Path to your image, adjust as needed
          alt="Car Washing Services"
          className="max-w-full h-auto rounded-lg shadow-md mx-auto"
        /> */}
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="p-6 shadow-lg rounded-2xl glass-effect hover:scale-105 transition-transform duration-300"
          >
            <CardContent className="space-y-4 text-center">
              <div className="flex justify-center">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call To Action */}
      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md">
          Book a Service Now
        </button>
      </div>
    </div>
  );
}