import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/gutter-cleaning/")({
  component: GutterCleaningPage,
});

function GutterCleaningPage() {
  const serviceAreas = [
    { name: "Toronto", href: "/gutter-cleaning/toronto" },
    { name: "Markham", href: "/gutter-cleaning/markham" },
    { name: "Mississauga", href: "/gutter-cleaning/mississauga" },
  ];

  return (
    <main className="min-h-screen bg-white text-foreground">
      {/* HERO */}

      <section className="bg-gradient-hero py-20 text-white">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-sky-200">
              Gutter Cleaning Services
            </p>

            <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Professional gutter cleaning services for homes and businesses.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-sky-100">
              Request gutter cleaning quotes for residential and commercial
              properties. Keep your gutters flowing properly and help protect
              your home from clogged drainage systems.
            </p>

            <a
              href="#quote"
              className="rounded-full bg-brand px-6 py-3 font-black text-white shadow-glow transition hover:opacity-90"
            >
              Request a Free Quote
            </a>
          </div>

          <div id="quote" className="rounded-3xl">
            <QuoteForm
              defaultService="gutter-cleaning"
              title="Get a Gutter Cleaning Quote"
              description="Tell us about your property and submit your request online."
              projectTypes={[
                "Single Story Home",
                "Two Story Home",
                "Townhouse",
                "Commercial Property",
                "Downspout Cleaning",
                "Gutter Inspection",
                "Other",
              ]}
            />
          </div>
        </div>
      </section>

      {/* WHY GUTTER CLEANING */}

      <section className="bg-white py-24">
        <div className="mx-auto w-[92%] max-w-6xl">

          <div className="mb-16 text-center">

            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
              WHY GUTTER CLEANING
            </p>

            <h2 className="mb-5 text-4xl font-black text-navy md:text-5xl">
              Keep rainwater flowing where it should.
            </h2>

            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Regular gutter cleaning removes leaves, twigs, dirt, and debris
              that can block water flow and contribute to overflowing gutters.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
              <div className="mb-5 text-5xl">🍂</div>

              <h3 className="mb-3 text-xl font-black text-navy">
                Remove Debris
              </h3>

              <p className="text-muted-foreground">
                Clear leaves, twigs, and other debris from gutters and
                downspouts.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
              <div className="mb-5 text-5xl">🌧️</div>

              <h3 className="mb-3 text-xl font-black text-navy">
                Improve Water Flow
              </h3>

              <p className="text-muted-foreground">
                Help rainwater move through your gutter system more effectively.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
              <div className="mb-5 text-5xl">🏡</div>

              <h3 className="mb-3 text-xl font-black text-navy">
                Residential & Commercial
              </h3>

              <p className="text-muted-foreground">
                Submit requests for homes, townhouses, condos, and commercial
                buildings.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
              <div className="mb-5 text-5xl">📝</div>

              <h3 className="mb-3 text-xl font-black text-navy">
                Simple Online Request
              </h3>

              <p className="text-muted-foreground">
                Complete a short form describing your property and submit your
                request online.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}

      <section className="bg-surface py-24">
        <div className="mx-auto w-[92%] max-w-6xl">

          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
            Gutter Cleaning Services
          </p>

          <h2 className="mb-10 max-w-3xl text-4xl font-black text-navy md:text-5xl">
            Services available for your property.
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              ["🍂","Gutter Cleaning"],
              ["⬇️","Downspout Cleaning"],
              ["🏠","Single Story Homes"],
              ["🏡","Two Story Homes"],
              ["🏢","Commercial Buildings"],
              ["🔍","Gutter Inspection"],
            ].map(([icon,title]) => (

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

      {/* SERVICE AREAS */}

      <section className="bg-white py-24">
        <div className="mx-auto w-[92%] max-w-6xl">

          <div className="mb-14 text-center">

            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
              Service Areas
            </p>

            <h2 className="mb-5 text-4xl font-black text-navy md:text-5xl">
              Gutter cleaning across the GTA.
            </h2>

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
                  Gutter Cleaning
                </p>

                <span className="mt-6 inline-flex items-center justify-center font-black text-brand transition group-hover:gap-2">
                  View Service →
                </span>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}

      <section className="bg-surface py-24">
        <div className="mx-auto w-[92%] max-w-4xl">

          <div className="mb-14 text-center">

            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-brand">
              Frequently Asked Questions
            </p>

            <h2 className="text-4xl font-black text-navy md:text-5xl">
              Gutter Cleaning FAQs
            </h2>

          </div>

          <div className="space-y-5">

            {[
              {
                q:"How often should gutters be cleaned?",
                a:"Many homeowners schedule gutter cleaning at least twice a year, typically during the spring and fall."
              },
              {
                q:"What causes gutters to clog?",
                a:"Leaves, twigs, dirt, roof debris, and other materials can build up over time and restrict water flow."
              },
              {
                q:"Do you clean downspouts?",
                a:"Many gutter cleaning services include clearing accessible downspouts. Confirm this when requesting your quote."
              },
              {
                q:"Do you service commercial buildings?",
                a:"Yes. You can submit quote requests for commercial properties as well as residential homes."
              }
            ].map((faq)=>(
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

      {/* CTA */}

      <section className="bg-navy py-20 text-center text-white">
        <div className="mx-auto w-[92%] max-w-3xl">

          <h2 className="mb-4 text-4xl font-black">
            Ready to clean your gutters?
          </h2>

          <p className="mb-8 text-sky-100">
            Submit your gutter cleaning quote request and get started today.
          </p>

          <a
            href="#quote"
            className="rounded-full bg-brand px-6 py-3 font-black text-white"
          >
            Request a Free Quote
          </a>

        </div>
      </section>

    </main>
  );
}