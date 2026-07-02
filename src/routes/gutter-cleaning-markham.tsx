import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock,
  ShieldCheck,
  DollarSign,
  Zap,
  FileText,
  Droplets,
  Home,
  Leaf,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/gutter-cleaning-markham")({
  head: () => ({
    meta: [
      {
        title: "Gutter Cleaning Markham | Compare Local Gutter Cleaning Quotes",
      },
      {
        name: "description",
        content:
          "Looking for gutter cleaning in Markham? Compare quotes from local gutter cleaning companies serving Markham and nearby York Region communities."
      },
      {
        property: "og:title",
        content: "Gutter Cleaning Markham | Get Free Quotes",
      },
      {
        property: "og:description",
        content:
          "Find local gutter cleaning professionals in Markham and compare free quotes.",
      },
    ],
  }),
  component: GutterCleaningMarkhamPage,
});

function GutterCleaningMarkhamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-soft" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pt-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Free • Fast • No obligation
            </span>

            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl lg:text-7xl">
              Gutter Cleaning <span className="text-brand">Markham</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Compare quotes from trusted local gutter cleaning professionals
              serving Markham and the nearby York Region communities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-base font-semibold text-navy-foreground shadow-card transition-all hover:bg-brand hover:shadow-glow"
              >
                Get Free Quotes <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-navy transition-colors hover:bg-muted"
              >
                View Pricing
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-brand" /> Local Markham pros
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-brand" /> Fast responses
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-lift">
              <img
                src="/images/gutter-cleaning-markham-hero.png"
                alt="Professional gutter cleaning service in Markham"
                width={1280}
                height={1280}
                className="aspect-square w-full object-cover sm:aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Markham CONTENT */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Markham Gutter Cleaning
          </p>

          <h2 className="mt-3 font-display text-4xl font-bold text-navy">
            Gutter Cleaning Markham: Protect Your Home Year-Round
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Markham homeowners experience heavy spring runoff, autumn leaf buildup, and changing weather conditions that can clog gutters and downspouts. Regular gutter cleaning helps water drain properly and reduces the risk of roof, siding, and foundation damage.
          </p>

          <p className="mt-4 text-lg text-muted-foreground">
            Whether you live in Unionville, Cornell, Angus Glen, Box Grove, Wismer, or Berczy Village, keeping your gutters clean is an important part of protecting your home throughout the year.
          </p>
        </div>
      </section>

      {/* WHY GUTTER CLEANING */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                Why it matters
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
                Protect your home from water damage
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                i: Droplets,
                t: "Prevent Overflow",
                d: "Clogged gutters can overflow during heavy rain.",
              },
              {
                i: Home,
                t: "Protect Foundation",
                d: "Move water away from your home’s foundation.",
              },
              {
                i: Leaf,
                t: "Remove Debris",
                d: "Clear leaves, twigs, dirt, and buildup.",
              },
              {
                i: ShieldCheck,
                t: "Avoid Repairs",
                d: "Reduce the risk of costly exterior damage.",
              },
            ].map((b) => {
              const Icon = b.i;
              return (
                <div
                  key={b.t}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy">{b.t}</h3>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">
                    {b.d}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Typical pricing
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
              Gutter cleaning cost in Markham
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pricing depends on home size, number of storeys, accessibility,
              and debris buildup.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { t: "Small Home", p: "$100–$200", d: "Bungalows and smaller homes." },
              { t: "Medium Home", p: "$150–$300", d: "Typical two-storey homes." },
              { t: "Large Home", p: "$250–$500+", d: "Large or difficult-access homes." },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-3xl border border-border bg-card p-8 text-center shadow-card transition-all hover:shadow-lift"
              >
                <h3 className="text-xl font-bold text-navy">{item.t}</h3>
                <p className="mt-3 font-display text-4xl font-bold text-brand">
                  {item.p}
                </p>
                <p className="mt-2 text-muted-foreground">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 font-display text-4xl font-bold text-navy">
            Gutter Cleaning FAQs
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-navy">
                How often should gutters be cleaned in Markham?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Most  homes benefit from gutter cleaning at least twice per
                year, typically in the spring and fall.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy">
                How much does gutter cleaning cost?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Most homeowners pay between $100 and $500 depending on the size of
                the home, number of storeys, and accessibility.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy">
                Can clogged gutters cause foundation problems?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Yes. Overflowing gutters can allow water to collect around the
                foundation and potentially cause costly damage over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="bg-gradient-soft py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Find your pro
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
              Get Free Gutter Cleaning Quotes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out the form and we’ll match your request with local gutter
              cleaning professionals. Free, fast, and no obligation.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Takes under 60 seconds",
                "Compare local providers",
                "Serving Markham and nearby York Region communities",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-navy">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand/10 text-brand">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <QuoteForm defaultService="gutter-cleaning" />
          </div>
        </div>
      </section>

            {/* AREAS WE SERVE */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Areas We Serve
            </p>

            <h2 className="mt-3 font-display text-4xl font-bold text-navy">
              Looking for Gutter Cleaning Nearby?
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              We help homeowners compare gutter cleaning quotes across the Greater
              Toronto Area.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/gutter-cleaning-toronto"
              className="rounded-full border border-border px-6 py-3 hover:bg-muted"
            >
              Toronto
            </a>

            <a
              href="/gutter-cleaning-mississauga"
              className="rounded-full border border-border px-6 py-3 hover:bg-muted"
            >
              Mississauga
            </a>

            <a
              href="/gutter-cleaning-markham"
              className="rounded-full border border-border px-6 py-3 hover:bg-muted"
            >
              Markham
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}