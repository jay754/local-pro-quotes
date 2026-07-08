import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/pressure-washing/")({
  head: () => ({
    meta: [
      {
        title: "Pressure Washing Services | Get Free Quotes | Get Home Quotes",
      },
      {
        name: "description",
        content:
          "Compare free pressure washing quotes for driveways, patios, decks, siding, walkways, and commercial properties.",
      },
      {
        property: "og:title",
        content: "Pressure Washing Services | Get Free Quotes",
      },
      {
        property: "og:description",
        content:
          "Request pressure washing quotes for driveways, patios, decks, siding, walkways, and commercial properties.",
      },
    ],
  }),
  component: PressureWashingPage,
});

function PressureWashingPage() {
  const serviceAreas = [
    { name: "Toronto", href: "/pressure-washing/toronto" },
    { name: "Mississauga", href: "/pressure-washing/mississauga" },
    { name: "Markham", href: "/pressure-washing/markham" },
  ];

  return (
    <main className="min-h-screen bg-white text-foreground">
      <section className="bg-gradient-hero py-20 text-white">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-sky-200">
              Pressure Washing Services
            </p>

            <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Refresh your property with professional pressure washing.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-sky-100">
              Request pressure washing quotes for driveways, patios, walkways,
              decks, siding, storefronts, and other exterior surfaces.
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
              defaultService="pressure-washing"
              title="Get a Pressure Washing Quote"
              description="Tell us what needs cleaning and submit your request online."
              projectTypes={[
                "Driveway",
                "Patio",
                "Deck",
                "Siding / exterior walls",
                "Walkway",
                "Commercial property",
                "Other",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto w-[92%] max-w-6xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
            Why Pressure Washing Matters
          </p>

          <h2 className="mx-auto mb-5 max-w-3xl text-4xl font-black text-navy md:text-5xl">
            Remove buildup before it makes your property look tired.
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Dirt, algae, salt, grime, mildew, and weather stains can build up on
            outdoor surfaces. Pressure washing helps improve curb appeal and keeps
            exterior areas looking cleaner.
          </p>
        </div>
      </section>

      <section id="services" className="bg-surface py-24">
        <div className="mx-auto w-[92%] max-w-6xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
            Pressure Washing Services
          </p>

          <h2 className="mb-10 max-w-3xl text-4xl font-black text-navy md:text-5xl">
            Request quotes for common exterior cleaning jobs.
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["🚗", "Driveway Pressure Washing", "Clean dirt, salt stains, tire marks, and surface buildup from driveways."],
              ["🧱", "Walkways & Steps", "Refresh paths, steps, entrances, and high-traffic exterior areas."],
              ["🌿", "Patio Cleaning", "Clean stone, brick, concrete, and backyard patio surfaces."],
              ["🪵", "Deck Cleaning", "Help remove grime and weather buildup from wood or composite decks."],
              ["🏠", "Siding & House Washing", "Request exterior washing for siding, garage doors, and walls."],
              ["🏢", "Commercial Pressure Washing", "Submit requests for storefronts, sidewalks, plazas, and parking areas."],
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
              Pressure washing in the GTA and surrounding areas.
            </h2>

            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Submit a quote request for pressure washing services in your area.
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

              <p className="mt-2 text-muted-foreground">
                Pressure Washing
              </p>

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
              Pressure Washing FAQs
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                question: "How much does pressure washing cost?",
                answer:
                  "Pricing depends on the size of the area, surface type, condition, access, and whether the job is residential or commercial.",
              },
              {
                question: "What surfaces can be pressure washed?",
                answer:
                  "Common surfaces include driveways, patios, walkways, decks, siding, fences, garage floors, storefronts, and commercial exterior areas.",
              },
              {
                question: "Is pressure washing safe for every surface?",
                answer:
                  "Not always. Some surfaces need lower pressure or soft washing depending on the material and condition.",
              },
              {
                question: "Do I need to be home?",
                answer:
                  "In many cases, you may not need to be home if there is access to the area being cleaned and any required water source.",
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