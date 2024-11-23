import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100 text-gray-900 pt-16">
      <div className="w-full bg-white p-10 rounded-lg shadow-2xl">
        {/* Page Heading */}
        <h1 className="text-5xl font-bold mb-6 text-black text-center">Contact Us</h1>
        <p className="text-xl mb-10 text-gray-700 text-center">
          We’re here to assist you with any questions or to schedule your next carpet cleaning appointment. Please use the information below to get in touch with us.
        </p>

        {/* Contact Information Section */}
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-center mb-4 text-blue-500">Contact Information</h2>
          <div className="text-center mb-6">
            <FaPhoneAlt className="text-3xl text-blue-500 mx-auto mb-2" />
            <p className="text-xl font-bold mb-1 text-blue-500">Phone Number:</p>
            <a href="tel:+18057042301" className="text-lg text-blue-500 hover:text-blue-700 hover:underline">
              +1 (805) 704-2301
            </a>
          </div>
          <div className="text-center mb-6">
            <FaEnvelope className="text-3xl text-blue-500 mx-auto mb-2" />
            <p className="text-xl font-bold mb-1 text-blue-500">Email:</p>
            <a href="mailto:contact@etsteamcarpetcleaning.com" className="text-lg text-blue-500 hover:text-blue-700 hover:underline">
              contact@etsteamcarpetcleaning.com
            </a>
          </div>
          <div className="text-center mb-6">
            <p className="text-xl font-bold mb-1 text-blue-500">Address:</p>
            <p className="text-lg mb-4">San Luis Obispo, CA</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold mb-1 text-blue-500">Hours of Operation:</p>
            <p className="text-lg mb-4">Monday - Sunday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-6 mb-12">
          {[
            { href: "https://www.facebook.com/etsteamcarpetcleaning", icon: <FaFacebookF className="text-3xl" /> },
            { href: "https://instagram.com", icon: <FaInstagram className="text-3xl" /> },
            { href: "https://www.youtube.com/@e.t.carpetcleaning", icon: <FaYoutube className="text-3xl" /> },
            { href: "https://www.tiktok.com/@e.t.carpetcleaning", icon: <FaTiktok className="text-3xl" /> },
            { href: "https://x.com/EtCarpetSteam", icon: <FaTwitter className="text-3xl" /> },
          ].map((social, index) => (
            <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              {social.icon}
            </a>
          ))}
        </div>

        {/* Additional Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Section 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/cleaning-process.webp"
              alt="Cleaning Process"
              width={600}
              height={400}
              className="rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2 text-blue-500">Our Cleaning Process</h3>
            <p>
              Discover how we ensure a deep and thorough clean for your carpets. Our proven process includes multiple stages to remove dirt, stains, and allergens.
            </p>
          </div>
          {/* Section 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/cleaning-tips.webp"
              alt="Cleaning Tips"
              width={600}
              height={400}
              className="rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2 text-blue-500">Cleaning Tips & Tricks</h3>
            <p>
              Learn some professional tips for maintaining your carpets between cleanings. Our expert advice can help you keep your home looking fresh.
            </p>
          </div>
          {/* Section 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/frequently-asked-questions.webp"
              alt="FAQs"
              width={600}
              height={400}
              className="rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2 text-blue-500">Frequently Asked Questions</h3>
            <p>
              Find answers to common questions about our services. Get clarity on our cleaning methods, pricing, and more.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
