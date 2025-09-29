// app/contact/page.tsx
import Image from "next/image"; // Import Image component

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>

      {/* Contact Info and Image Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4 md:flex md:space-x-8 md:space-y-0 items-center">
        <div className="md:w-1/2 space-y-4"> {/* Left half for text */}
          <h2 className="text-2xl font-semibold text-gray-800">
            Company Information
          </h2>
          <p className="text-gray-700">
            Feel free to reach out to us for any inquiries, partnerships, or
            support.
          </p>

          <div className="space-y-2 text-gray-800">
            <p>
              <span className="font-semibold">Managing Director:</span> Md
              Mujibul Haq
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:bustanalzuhoorparking@gmail.com"
                className="text-blue-600 hover:underline"
              >
                bustanalzuhoorparking@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Mobile Phone 1:</span>{" "}
              <a
                href="tel:+971566782890"
                className="text-blue-600 hover:underline"
              >
                +971 56 6782890
              </a>
            </p>
            <p>
              <span className="font-semibold">Mobile Phone 2:</span>{" "}
              <a
                href="tel:+9715625762116"
                className="text-blue-600 hover:underline"
              >
                +971 5625762116
              </a>
            </p>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0"> {/* Right half for image */}
          <Image
            src="/image/ffffffff.png" // You'll need to save the image you like to your public folder, e.g., public/image/contact_person.jpg
            alt="Contact Person - Md Mujibul Haq"
            width={400} // Adjust width as needed
            height={400} // Adjust height as needed, or use layout="responsive"
            className="rounded-xl shadow-md object-cover"
          />
        </div>
      </div>

      {/* Address Section */}
      <div className="bg-gray-100 rounded-2xl shadow-md p-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Office Address
        </h2>
        <p className="text-gray-700 mt-2">
          Dubai Investment Park,
          <br /> Green Community,
          <br /> United Arab Emirates
        </p>
      </div>

      {/* Google Map Embed */}
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.69981721276!2d55.186971!3d25.045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f72f24caa6b2b%3A0x8ab67a4c56a4c927!2sDubai%20Investment%20Park!5e0!3m2!1sen!2sae!4v1694429930000!5m2!1sen!2sae"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}