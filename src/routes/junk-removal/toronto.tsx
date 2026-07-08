import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/junk-removal/toronto")({
  head: () => ({
    meta: [
      {
        title: "Junk Removal Toronto | Get Free Quotes | Get Home Quotes",
      },
      {
        name: "description",
        content:
          "Compare free junk removal quotes in Toronto for furniture removal, appliances, garage cleanouts, renovation debris, yard waste, and commercial junk removal.",
      },
      {
        property: "og:title",
        content: "Junk Removal Toronto | Get Free Quotes",
      },
      {
        property: "og:description",
        content:
          "Request junk removal quotes in Toronto from local professionals.",
      },
    ],
  }),
  component: TorontoJunkRemovalPage,
});

function TorontoJunkRemovalPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      {/* HERO */}

      <section className="bg-gradient-hero py-20 text-white">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-sky-200">
              Toronto Junk Removal
            </p>

            <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Junk removal services in Toronto.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-sky-100">
              Request quotes for furniture removal, appliance pickup, renovation
              debris, garage cleanouts, yard waste, and commercial junk removal
              throughout Toronto.
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
              title="Get a Toronto Junk Removal Quote"
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

      {/* ABOUT */}

      <section className="bg-white py-24">
        <div className="mx-auto w-[92%] max-w-5xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
            Junk Removal in Toronto
          </p>

          <h2 className="mb-6 text-4xl font-black text-navy md:text-5xl">
            Clear unwanted junk from your home or business.
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Whether you're moving, renovating, downsizing, or simply clearing
            clutter, request junk removal quotes from local professionals serving
            Toronto.
          </p>
        </div>
      </section>

      {/* SERVICES */}

      <section className="bg-surface py-24">
        <div className="mx-auto w-[92%] max-w-6xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
            Services
          </p>

          <h2 className="mb-10 text-4xl font-black text-navy md:text-5xl">
            Common junk removal services in Toronto
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["🛋️", "Furniture Removal"],
              ["📦", "Appliance Removal"],
              ["🏠", "Garage Cleanouts"],
              ["🧱", "Renovation Debris"],
              ["🌿", "Yard Waste Removal"],
              ["🏢", "Commercial Junk Removal"],
            ].map(([icon, title]) => (
              <div
                key={title}
                className="rounded-3xl border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="mb-5 text-5xl">{icon}</div>

                <h3 className="text-xl font-black text-navy">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
            Toronto Service Areas
          </p>

          <h2 className="mb-5 text-4xl font-black text-navy md:text-5xl">
            Junk removal across Toronto.
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Request junk removal quotes from providers serving neighbourhoods across Toronto.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            "Downtown Toronto",
            "North York",
            "Scarborough",
            "Etobicoke",
            "East York",
            "York",
            "Midtown",
            "Liberty Village",
            "The Beaches",
            "Leslieville",
            "High Park",
            "Parkdale",
            "Leaside",
            "Forest Hill",
            "Annex",
            "Danforth",
          ].map((area) => (
            <div
              key={area}
              className="rounded-2xl border bg-white p-5 text-center shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="font-bold text-navy">{area}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* FAQ */}

      <section className="bg-white py-24">
        <div className="mx-auto w-[92%] max-w-4xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
              Frequently Asked Questions
            </p>

            <h2 className="text-4xl font-black text-navy md:text-5xl">
              Toronto Junk Removal FAQs
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                q: "How much does junk removal cost in Toronto?",
                a: "Pricing depends on the amount of junk, type of materials, accessibility, and disposal requirements.",
              },
              {
                q: "Can large furniture be removed?",
                a: "Yes. Many providers remove couches, mattresses, tables, wardrobes, and other bulky furniture.",
              },
              {
                q: "Do you remove renovation debris?",
                a: "Yes. Many junk removal providers handle drywall, flooring, wood, and other renovation waste.",
              },
              {
                q: "Can businesses request junk removal?",
                a: "Absolutely. Commercial offices, retail stores, warehouses, and other businesses can request quotes.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl border bg-white p-6 shadow-card"
              >
                <summary className="cursor-pointer text-lg font-black text-navy">
                  {faq.q}
                </summary>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {faq.a}
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