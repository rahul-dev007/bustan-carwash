"use client";

import Image from "next/image";
import Card from "@/components/ui/Card"; // Custom Card component

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Hero Section - About Us */}
      <section className="relative text-center">
        <Image
          src="/image/about-hero.jpg"
          alt="About Us - Bustan Alzuhoor"
          width={1200}
          height={500}
          className="rounded-xl object-cover w-full h-[300px] md:h-[400px] brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            About Bustan Alzuhoor
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Pioneering eco-friendly car care in Dubai with a commitment to
            innovation and sustainability.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          Our Story
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/image/about-hero.jpg"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
          <div className="md:w-1/2 text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              Bustan Alzuhoor Parking Car Washing L.L.C was founded with a clear
              vision: to revolutionize the car wash industry in Dubai by
              offering unparalleled eco-friendly services. We recognized the
              growing need for sustainable practices and committed ourselves to
              providing top-tier car care that protects both vehicles and the
              environment.
            </p>
            <p className="mb-4">
              Since our inception, we have championed waterless and scratch-proof
              cleaning technologies, ensuring that every wash minimizes water
              wastage without compromising on quality. Our journey is one of
              continuous innovation, striving to set new benchmarks in service
              excellence and environmental responsibility.
            </p>
            <p>
              We believe in building lasting relationships with our clients,
              offering convenience, transparency, and a service that truly makes
              a difference. Join us in our mission to drive a greener future, one
              clean car at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8">
          Meet Our Dedicated Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/image/team-member-1.jpg"
              alt="Team Member 1"
              width={150}
              height={150}
              className="rounded-full object-cover mb-4 w-32 h-32"
            />
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300">
              Mohammed Al-Farsi
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Founder & CEO</p>
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
              Visionary leader passionate about sustainable business.
            </p>
          </Card>

          <Card className="glass-card p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/image/team-member-2.jpg"
              alt="Team Member 2"
              width={150}
              height={150}
              className="rounded-full object-cover mb-4 w-32 h-32"
            />
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300">
              Aisha Khan
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Head of Operations</p>
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
              Ensures seamless service delivery and customer satisfaction.
            </p>
          </Card>

          <Card className="glass-card p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/image/team-member-3.jpg"
              alt="Team Member 3"
              width={150}
              height={150}
              className="rounded-full object-cover mb-4 w-32 h-32"
            />
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300">
              Omar Hassan
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Lead Technician</p>
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
              Expert in advanced car cleaning techniques and product innovation.
            </p>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300 mb-2">
              Sustainability
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Committed to eco-friendly practices and water conservation.
            </p>
          </Card>
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300 mb-2">
              Innovation
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Continuously adopting the latest car care technologies.
            </p>
          </Card>
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300 mb-2">
              Excellence
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Delivering premium quality and unmatched customer satisfaction.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
