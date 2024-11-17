import { ArrowRight, CheckCircle, Clock, Home, Sparkles } from "lucide-react";
import Link from "next/link";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      <header className=" bg-[#52B765] px-4 py-16 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight text-black md:text-5xl">
          The Ultimate Guide to Maintaining a Clean and Healthy Home
        </h1>
        <p className="mt-4 text-xl">
          Tips and tricks for a spotless, healthy, and serene living space
        </p>
      </header>

      <main className="container mx-auto my-12 max-w-screen-xl px-4">
        <section className="mb-12 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-blue-800">
            Why Is a Clean Home Essential?
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            A clean home is more than just visually appealing—it&apos;s crucial
            for health and productivity.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Improves Indoor Air Quality",
                desc: "Dust, pet dander, and mold can cause respiratory problems.",
              },
              {
                title: "Prevents Illnesses",
                desc: "Proper hygiene and regular disinfection minimize infection risks.",
              },
              {
                title: "Boosts Mental Clarity",
                desc: "A clutter-free home reduces stress and enhances focus.",
              },
              {
                title: "Extends Longevity of Items",
                desc: "Regular cleaning preserves your belongings.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <strong className="font-semibold text-gray-900">
                    {item.title}:
                  </strong>{" "}
                  <span className="text-gray-600">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-blue-800">
            Daily Cleaning Tips for a Sparkling Home
          </h2>
          <ul className="space-y-4">
            {[
              "Make your bed every morning for a tidier bedroom.",
              "Spend 10 minutes daily decluttering.",
              "Wipe down surfaces using a microfiber cloth.",
              "Sweep or vacuum high-traffic areas to avoid buildup.",
              "Empty trash bins regularly to prevent odors and pests.",
            ].map((tip, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800">
                  {index + 1}
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-blue-800">
            Deep Cleaning: Why and How Often?
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            Deep cleaning ensures your home is thoroughly sanitized. Aim for
            every 3–6 months, focusing on:
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Home,
                title: "Kitchen",
                desc: "Clean behind appliances and sanitize the sink.",
              },
              {
                icon: Sparkles,
                title: "Bathroom",
                desc: "Scrub grout, disinfect faucets, and descale showerheads.",
              },
              {
                icon: Home,
                title: "Living Areas",
                desc: "Shampoo carpets and polish wooden furniture.",
              },
              {
                icon: Clock,
                title: "Bedrooms",
                desc: "Vacuum mattresses and wash pillows.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-lg font-medium text-blue-800">
            For hassle-free deep cleaning, consider professional services like{" "}
            <strong>Cleano</strong>.
          </p>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-blue-800">
            Hygiene Practices to Adopt
          </h2>
          <ul className="space-y-4">
            {[
              "Wash hands frequently, especially before meals.",
              "Disinfect high-touch surfaces such as doorknobs and light switches.",
              "Avoid wearing outdoor shoes inside to reduce dirt and germs.",
              "Launder bedding and towels in hot water regularly.",
            ].map((practice, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{practice}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-white">
            Cleano&apos;s Commitment to Your Cleanliness
          </h2>
          <p className="mb-6 text-lg text-gray-400">
            At <strong>Cleano</strong>, we offer tailored cleaning solutions
            including:
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Residential Cleaning",
              "Office Cleaning",
              "Carpet and Upholstery Cleaning",
              "Post-Construction Cleaning",
              "Move-In/Move-Out Cleaning",
            ].map((service, index) => (
              <li key={index} className="flex items-center space-x-2">
                <ArrowRight className="h-5 w-5" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg font-medium text-white">
            Let us handle the dirty work while you focus on what matters most.
          </p>
        </section>

        <footer className="rounded-lg bg-gray-100 p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-800">
            Transform Your Home Today
          </h3>
          <p className="mt-2 text-lg">
            Contact <strong>Cleano</strong> for expert cleaning services and let
            us make your home shine!
          </p>
          <div>
            <Link
              href="/contact-us"
              className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700  "
            >
              Contact Us
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
