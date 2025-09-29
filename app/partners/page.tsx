"use client";

import Image from "next/image";
import Card, { CardContent } from "@/components/ui/Card";

export default function PartnersPage() {
  const partners = [
    {
      name: "Time Square Center",
      description:
        "A prestigious shopping and business hub in Dubai where we proudly provide eco-friendly car wash services.",
      logo: "/image/partners1.png", // replace with actual logo if available
    },
    {
      name: "Green Community, Dubai Investment Park",
      description:
        "Trusted partner in providing sustainable car cleaning solutions to the vibrant Green Community residents.",
      logo: "/image/partners2.png",
    },
    {
      name: "Silicon Gate 1, 2 & 3",
      description:
        "Serving the growing residential and commercial complexes of Silicon Gate with premium waterless car wash.",
      logo: "/image/partners3.png",
    },
    {
      name: "Multiple Buildings across Dubai",
      description:
        "Expanding our footprint across major communities and business districts, making eco-friendly car care accessible everywhere.",
      logo: "/image/partners4.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 animate-fadeIn">
          Our Trusted Partners
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fadeIn delay-200">
          We are proud to collaborate with leading communities, shopping centers,
          and residential complexes across Dubai. Together, we are making car
          care more eco-friendly and sustainable.
        </p>
      </section>

      {/* Partners Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <Card
            key={index}
            className="glass-effect hover:scale-105 transition-transform duration-300"
          >
            <CardContent className="space-y-4 text-center">
              {/* Partner Logo */}
              <div className="flex justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={120}
                  className="object-contain h-24 w-24"
                />
              </div>
              {/* Partner Info */}
              <h2 className="text-xl font-semibold text-blue-500">
                {partner.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {partner.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12 animate-fadeInUp">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Become a Partner
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Join our growing network of partners and experience the benefits of
          sustainable, innovative, and high-quality car wash services.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow-lg">
          Contact Us
        </button>
      </section>
    </div>
  );
}
