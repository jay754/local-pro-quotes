import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/pressure-washing/toronto")({
  head: () => ({
    meta: [
      {
        title:
          "Pressure Washing Toronto | Get Free Quotes | Get Home Quotes",
      },
      {
        name: "description",
        content:
          "Compare free pressure washing quotes in Toronto for driveways, patios, decks, siding, walkways, and commercial properties.",
      },
      {
        property: "og:title",
        content: "Pressure Washing Toronto | Get Free Quotes",
      },
      {
        property: "og:description",
        content:
          "Request pressure washing quotes in Toronto from local professionals.",
      },
    ],
  }),
  component: TorontoPressureWashingPage,
});

function TorontoPressureWashingPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-sky-200">
              Toronto Pressure Washing
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Pressure washing services in Toronto for cleaner outdoor spaces.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-sky-100">
              GetHomeQuotes helps homeowners compare local pressure washing
              providers for driveways, patios, decks, siding, walkways, and
              exterior surfaces across Toronto.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#quote"
                className="rounded-full bg-brand px-6 py-3 font-black text-white shadow-glow transition hover:opacity-90"
              >
                Request a Free Quote
              </a>

              <a
                href="#services"
                className="rounded-full bg-white px-6 py-3 font-black text-navy transition hover:bg-sky-50"
              >
                View Services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Fast quote requests",
                "Toronto providers",
                "Residential & commercial",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div id="quote">
            <QuoteForm
              defaultService="pressure-washing"
              title="Get a Pressure Washing Quote"
              description="Share a few details and we'll help connect you with local providers."
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

        {/* WHY CHOOSE US */}

        <section className="bg-white py-24">
        <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
                WHY CHOOSE GETHOMEQUOTES
            </p>

            <h2 className="mb-5 text-4xl font-black text-navy md:text-5xl">
                Request pressure washing quotes in Toronto.
            </h2>

            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Whether you're cleaning a driveway, patio, deck, siding, or commercial
                property, GetHomeQuotes makes it easy to submit your pressure washing
                request online.
            </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                <div className="mb-5 text-5xl">⚡</div>

                <h3 className="mb-3 text-xl font-black text-navy">
                Fast Quote Requests
                </h3>

                <p className="text-muted-foreground">
                Submit your pressure washing project in just a few minutes using our
                simple online quote request form.
                </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                <div className="mb-5 text-5xl">🏡</div>

                <h3 className="mb-3 text-xl font-black text-navy">
                Residential & Commercial
                </h3>

                <p className="text-muted-foreground">
                Request pressure washing for homes, patios, driveways, storefronts,
                parking areas, and commercial properties.
                </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                <div className="mb-5 text-5xl">📍</div>

                <h3 className="mb-3 text-xl font-black text-navy">
                Toronto Coverage
                </h3>

                <p className="text-muted-foreground">
                Serving homeowners and businesses across Toronto and surrounding
                neighbourhoods.
                </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                <div className="mb-5 text-5xl">📝</div>

                <h3 className="mb-3 text-xl font-black text-navy">
                Simple Online Request
                </h3>

                <p className="text-muted-foreground">
                Complete a short form describing your project and submit your request
                online at no cost.
                </p>
            </div>

            </div>
        </div>
        </section>

                {/* SERVICES GRID */}
        <section id="services" className="bg-surface py-24">
        <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mb-14">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
                Pressure Washing Services
            </p>

            <h2 className="mb-5 max-w-3xl text-4xl font-black text-navy md:text-5xl">
                Clean the surfaces that make your property look tired.
            </h2>

            <p className="max-w-3xl text-lg text-muted-foreground">
                From driveway stains to patio grime, request quotes for common exterior
                cleaning jobs across Toronto.
            </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
                ["🚗", "Driveway Pressure Washing", "Remove dirt, salt stains, tire marks, and surface buildup from concrete, asphalt, and interlock driveways."],
                ["🧱", "Walkways & Steps", "Refresh front paths, side walkways, entrance steps, and high-traffic areas around your property."],
                ["🌿", "Patio Cleaning", "Clean stone, brick, concrete, and backyard patio surfaces before warmer weather or gatherings."],
                ["🪵", "Deck Cleaning", "Help remove mildew, grime, and weather buildup from wood or composite deck surfaces."],
                ["🏠", "Siding & House Washing", "Request exterior washing for siding, walls, garage doors, and other home surfaces."],
                ["🏢", "Commercial Pressure Washing", "Get quotes for storefronts, sidewalks, plazas, parking areas, and business entrances."],
            ].map(([icon, title, description]) => (
                <div
                key={title}
                className="group rounded-3xl border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
                >
                <div className="mb-6 text-5xl">{icon}</div>

                <h3 className="mb-3 text-xl font-black text-navy">
                    {title}
                </h3>

                <p className="mb-6 text-muted-foreground">
                    {description}
                </p>

                <a
                    href="#quote"
                    className="font-black text-brand transition group-hover:opacity-80"
                >
                    Request quote →
                </a>
                </div>
            ))}
            </div>
        </div>
        </section>

        {/* SERVICE AREAS */}

        <section className="bg-surface py-24">
        <div className="mx-auto w-[92%] max-w-6xl">

            <div className="mb-14 text-center">

            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
                Toronto Service Areas
            </p>

            <h2 className="mb-5 text-4xl font-black text-navy md:text-5xl">
                Pressure washing services across Toronto.
            </h2>

            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Looking for pressure washing near you? Request quotes from local providers
                serving neighbourhoods across Toronto.
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
                "Danforth"
            ].map((area) => (

                <div
                key={area}
                className="rounded-2xl border bg-white p-5 text-center shadow-card transition hover:-translate-y-1 hover:shadow-lift"
                >
                <h3 className="font-bold text-navy">
                    {area}
                </h3>
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

            <h2 className="mb-5 text-4xl font-black text-navy md:text-5xl">
                Toronto Pressure Washing FAQs
            </h2>

            <p className="text-lg text-muted-foreground">
                Everything you need to know before requesting a quote.
            </p>
            </div>

            <div className="space-y-5">

            {[
                {
                question: "How much does pressure washing cost in Toronto?",
                answer:
                    "Pricing depends on the size of the area, the type of surface, and the condition of the property. Request a free quote for pricing tailored to your project.",
                },
                {
                question: "What surfaces can be pressure washed?",
                answer:
                    "Common surfaces include driveways, patios, walkways, decks, fences, siding, garage floors, and many commercial exterior surfaces.",
                },
                {
                question: "Is pressure washing safe for all surfaces?",
                answer:
                    "Not every surface should be cleaned with high pressure. Some materials require soft washing or lower-pressure techniques depending on their condition.",
                },
                {
                question: "Do I need to be home during the service?",
                answer:
                    "In many cases, no. As long as the provider has access to the areas being cleaned and any necessary water supply, the work may be completed without you being present.",
                },
                {
                question: "Do you offer commercial pressure washing?",
                answer:
                    "Yes. You can request quotes for storefronts, office buildings, parking areas, sidewalks, plazas, and other commercial properties.",
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