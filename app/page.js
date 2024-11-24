import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full text-center pt-16">
        {/* Phone Number Section */}
        <div className="mb-8">
          <p className="text-xl font-bold">Schedule an Appointment: <a href="tel:+18027042301" className="text-blue-500 hover:underline">+1 (805) 704-2301</a></p>
        </div>

        <h1 className="text-4xl font-bold mb-">Welcome to Carpet Cleaning Company SLO</h1>
        <p className="text-lg mb-8">
          We offer professional carpet cleaning services for homes and businesses in San Luis Obispo, California.
          With years of experience and a highly skilled team, we guarantee exceptional results and impeccable customer service.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Residential Cleaning</h2>
            <p>
              We remove stains and dirt from your carpets to make your home look clean and fresh.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Commercial Cleaning</h2>
            <p>
              Specialized services for offices and businesses, ensuring a clean and professional environment.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Stain Treatment</h2>
            <p>
              Advanced techniques to remove tough stains and keep your carpets in excellent condition.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="w-full mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-8">
            Our team uses the latest technology and eco-friendly products to ensure your carpets are not only clean but also safe for you and your family.
          </p>
          <div className="relative w-full mb-8">
            <div className="absolute inset-0 z-10 bg-cover bg-center transition-opacity duration-300 opacity-0 hover:opacity-100" style={{ backgroundImage: "url('/images/hover-image.webp')" }}></div>
            <Image
              src="/images/hover2.jpg"
              alt="Descriptive Alt Text"
              width={800} // Ajusta según tu necesidad
              height={450} // Ajusta según tu necesidad
              className="rounded-lg shadow-lg mb-8 inline-block"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Experienced Professionals</h3>
              <p>
                Our technicians are highly trained and experienced in all aspects of carpet cleaning.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Products</h3>
              <p>
                We use environmentally friendly cleaning solutions that are safe for kids and pets.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p>
                We are committed to providing the highest level of service and ensuring your complete satisfaction.
              </p>
            </div>
          </div>
          <Image
            src="/images/hover1.webp"
            alt="Carpet Cleaning"
            width={800}
            height={450}
            className="rounded-lg shadow-lg mb-8 mt-12 items-center inline-block"
          />
        </section>

        {/* Our Process Section */}
        <section className="w-full mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-lg mb-8">
            From scheduling your appointment to completing the job, we follow a meticulous process to ensure the best results.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <Image
                src="/images/schedule-and-appointment.webp"
                alt="Schedule an Appointment"
                width={500}
                height={300}
                className="rounded-lg shadow-lg mb-8 inline-block"
              />
              <h3 className="text-xl font-semibold mb-2">1. Schedule an Appointment</h3>
              <p>
                Contact us to schedule a convenient time for your carpet cleaning service.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <Image
                src="/images/profesional-cleaning.webp"
                alt="Professional Cleaning"
                width={500}
                height={300}
                className="rounded-lg shadow-lg mb-8 inline-block"
              />
              <h3 className="text-xl font-semibold mb-2">2. Professional Cleaning</h3>
              <p>
                Our team will arrive on time and perform a thorough cleaning of your carpets.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <Image
                src="/images/quality-check.webp"
                alt="Quality Check"
                width={500}
                height={300}
                className="rounded-lg shadow-lg mb-8 inline-block"
              />
              <h3 className="text-xl font-semibold mb-2">3. Quality Check</h3>
              <p>
                We conduct a final inspection to ensure that you are completely satisfied with our work.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Button */}
        <div className="mt-12">
          <a
            href="mailto:contact@etsteamcarpetcleaning.com"
            className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
