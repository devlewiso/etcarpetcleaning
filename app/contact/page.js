import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100 text-gray-900">
      <div className="w-full bg-white p-10 rounded-lg shadow-2xl">
        {/* Page Heading */}
        <h1 className="text-5xl font-bold mb-6 text-black text-center">Contact Us</h1>
        <p className="text-xl mb-10 text-gray-700 text-center">
          We’re here to assist you with any questions or to schedule your next carpet cleaning appointment. Please use the information below to get in touch with us.
        </p>

        {/* Contact Information Section */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-2">
              <FaPhoneAlt className="text-3xl text-blue-500" />
            </div>
            <div>
              <p className="text-xl font-bold mb-1 text-blue-500">Phone Number:</p>
              <button className="text-lg text-blue-500 hover:text-blue-700 hover:underline">
                <a href="tel:+1234567890">+1 (805) 704-2301</a>
              </button>
            </div>
          </div>
          <div className="text-center mb-6">
            <div className="flex justify-center mb-2">
              <FaEnvelope className="text-3xl text-blue-500" />
            </div>
            <div>
              <p className="text-xl font-bold mb-1 text-blue-500">Email:</p>
              <button className="text-lg text-blue-500 hover:text-blue-700 hover:underline">
                <a href="mailto:contact@etsteamcarpetcleaning.com">contact@etsteamcarpetcleaning.com</a>
              </button>
            </div>
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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-500">
            <FaFacebookF className="text-3xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-500">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-500">
            <FaYoutube className="text-3xl" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-500">
            <FaTiktok className="text-3xl" />
          </a>
        </div>

        {/* Additional Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
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
              src="/images/testimonials.jpg"
              alt="Testimonials"
              width={600}
              height={400}
              className="rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2 text-blue-500">Customer Testimonials</h3>
            <p>
              Hear from our satisfied customers about their experiences with our carpet cleaning services. Their stories highlight our commitment to quality.
            </p>
          </div>
          {/* Section 4 */}
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
          {/* Section 5 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/carpet-stain-removal.webp"
              alt="Carpet Stain Removal"
              width={600}
              height={400}
              className="rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2 text-blue-500">Carpet Stain Removal</h3>
            <p>
              Our expert stain removal services can handle even the toughest carpet stains, restoring your carpets to their original condition.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
