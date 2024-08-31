import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-foreground">
      <div className="max-w-4xl w-full text-center">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-8">
          We’re here to assist you with any questions or to schedule your next carpet cleaning appointment. 
          Please use the information below to get in touch with us.
        </p>

        {/* Contact Information Section */}
        <div className="mb-8">
          <p className="text-xl font-bold mb-2">Phone Number:</p>
          <p className="text-lg mb-4">
            <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (805) 704-2301</a>
          </p>
          <p className="text-xl font-bold mb-2">Email:</p>
          <p className="text-lg mb-4">
            <a href="mailto:contact@etsteamcarpetcleaning.com" className="text-blue-500 hover:underline">contact@etsteamcarpetcleaning.com</a>
          </p>
          <p className="text-xl font-bold mb-2">Address:</p>
          <p className="text-lg mb-4">
            1234 Carpet Lane, Clean City, CA 90210
          </p>
          <p className="text-xl font-bold mb-2">Hours of Operation:</p>
          <p className="text-lg mb-4">
            Monday - Friday: 9:00 AM - 6:00 PM<br />
            Saturday: 10:00 AM - 4:00 PM<br />
            Sunday: Closed
          </p>
        </div>

        {/* Email Contact Button */}
        <div className="mb-8">
          <a
            href="mailto:contact@etsteamcarpetcleaning.com"
            className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
          >
            Email Us
          </a>
        </div>

        {/* Social Media Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/facebook-icon.png"
                alt="Facebook"
                width={40}
                height={40}
                className="hover:opacity-80"
              />
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/instagram-icon.png"
                alt="Instagram"
                width={40}
                height={40}
                className="hover:opacity-80"
              />
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/twitter-icon.png"
                alt="Twitter"
                width={40}
                height={40}
                className="hover:opacity-80"
              />
            </a>
          </div>
        </div>

        {/* Additional Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Section 1 */}
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <Image
              src="/images/cleaning-process.jpg"
              alt="Cleaning Process"
              width={600}
              height={400}
              className="rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2">Our Cleaning Process</h3>
            <p>
              Discover how we ensure a deep and thorough clean for your carpets. Our proven process includes multiple stages to remove dirt, stains, and allergens.
            </p>
          </div>
          {/* Section 2 */}
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <Image
              src="/images/cleaning-tips.jpg"
              alt="Cleaning Tips"
              width={600}
              height={400}
              className="rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2">Cleaning Tips & Tricks</h3>
            <p>
              Learn some professional tips for maintaining your carpets between cleanings. Our expert advice can help you keep your home looking fresh.
            </p>
          </div>
          {/* Section 3 */}
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <Image
              src="/images/testimonials.jpg"
              alt="Testimonials"
              width={600}
              height={400}
              className="rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2">Customer Testimonials</h3>
            <p>
              Hear from our satisfied customers about their experiences with our carpet cleaning services. Their stories highlight our commitment to quality.
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div>
          <Link href="/" className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
