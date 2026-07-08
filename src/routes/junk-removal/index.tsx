import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/junk-removal/")({
  component: JunkRemovalPage,
});

function JunkRemovalPage() {
  const serviceAreas = [
    { name: "Toronto", href: "/junk-removal/toronto" },
    { name: "Mississauga", href: "/junk-removal/mississauga" },
    { name: "Markham", href: "/junk-removal/markham" },
  ];

  return (
    <main className="min-h-screen bg-white text-foreground">
      <section className="bg-gradient-hero py-20 text-white">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-sky-200">
              Junk Removal Services
            </p>

            <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Junk removal services for homes, garages, basements, and businesses.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-sky-100">
              Request junk removal quotes for furniture, appliances, renovation
              debris, yard waste, garage cleanouts, and commercial junk removal.
            </p>

            <a
              href="#quote"
              className="rounded-full bg-brand px-6 py-3 font-black text-white shadow-glow transition hover:opacity-90"
            >
              Request a Free Quote
            </a>
          </div>

          <div id="quote">
            <QuoteForm
              defaultService="junk-removal"
              title="Get a Junk Removal Quote"
              description="Tell us what needs to be removed and submit your request online."
              projectTypes={[
                "Furniture Removal",
                "Appliance Removal",
                "Garage Cleanout",
                "Basement Cleanout",
                "Yard Waste",
                "Renovation Debris",
                "Commercial Junk Removal",
                "Other",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto w-[92%] max-w-6xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
            Why Junk Removal
          </p>

          <h2 className="mx-auto mb-5 max-w-3xl text-4xl font-black text-navy md:text-5xl">
            Clear out unwanted items without doing the heavy lifting.
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Junk removal helps homeowners and businesses clear space quickly,
            whether it is old furniture, appliances, household clutter, yard
            waste, or renovation debris.
          </p>
        </div>
      </section>

      <section id="services" className="bg-surface py-24">
        <div className="mx-auto w-[92%] max-w-6xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
            Junk Removal Services
          </p>

          <h2 className="mb-10 max-w-3xl text-4xl font-black text-navy md:text-5xl">
            Request quotes for common junk removal jobs.
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["🛋️", "Furniture Removal", "Remove old couches, mattresses, tables, chairs, cabinets, and other bulky furniture."],
              ["📦", "Appliance Removal", "Request pickup for fridges, washers, dryers, stoves, dishwashers, and other appliances."],
              ["🏠", "Garage & Basement Cleanouts", "Clear clutter from garages, basements, storage rooms, and utility spaces."],
              ["🧱", "Renovation Debris", "Remove leftover construction materials, drywall, wood, flooring, and project debris."],
              ["🌿", "Yard Waste Removal", "Get help removing branches, leaves, soil, outdoor debris, and seasonal yard waste."],
              ["🏢", "Commercial Junk Removal", "Request junk removal for offices, retail spaces, storage areas, and commercial properties."],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-3xl border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="mb-5 text-5xl">{icon}</div>
                <h3 className="mb-3 text-xl font-black text-navy">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
              Service Areas
            </p>

            <h2 className="mb-5 text-4xl font-black text-navy md:text-5xl">
              Junk removal in the GTA.
            </h2>

            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Submit a quote request for junk removal services in your area.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {serviceAreas.map((city) => (
              <a
                key={city.name}
                href={city.href}
                className="group rounded-3xl border bg-white p-8 text-center shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <h3 className="text-2xl font-black text-navy">{city.name}</h3>

                <p className="mt-2 text-muted-foreground">Junk Removal</p>

                <span className="mt-6 inline-flex items-center justify-center font-black text-brand transition group-hover:gap-2">
                  View Service →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto w-[92%] max-w-4xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
              Frequently Asked Questions
            </p>

            <h2 className="text-4xl font-black text-navy md:text-5xl">
              Junk Removal FAQs
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                question: "How much does junk removal cost?",
                answer:
                  "Pricing depends on the type of junk, volume, weight, access, disposal requirements, and whether the job is residential or commercial.",
              },
              {
                question: "What items can be removed?",
                answer:
                  "Common items include furniture, appliances, mattresses, boxes, yard waste, renovation debris, garage clutter, and office junk.",
              },
              {
                question: "Do I need to move items outside?",
                answer:
                  "In many cases, junk removal providers can remove items from inside the home, garage, basement, or business location.",
              },
              {
                question: "Do you handle commercial junk removal?",
                answer:
                  "Yes. You can request quotes for offices, retail spaces, storage rooms, warehouses, and other commercial properties.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border bg-white p-6 shadow-card"
              >
                <summary className="cursor-pointer text-lg font-black text-navy">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}