import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock,
  ShieldCheck,
  DollarSign,
  Zap,
  FileText,
} from "lucide-react";
import heroImg from "@/assets/hero-homeowner.jpg";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { services } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Get Home Quotes | Local Home Service Quotes in Toronto, Mississauga & Markham",
      },
      {
        name: "description",
        content:
          "Request free quotes for gutter cleaning, pressure washing, and junk removal in Toronto, Mississauga, and Markham.",
      },
      {
        property: "og:title",
        content: "Get Home Quotes | Local Home Service Quotes",
      },
      {
        property: "og:description",
        content:
          "Request free quotes for gutter cleaning, pressure washing, and junk removal across Toronto, Mississauga, and Markham.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-soft" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pt-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Free • Fast • No obligation
            </span>

            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl lg:text-7xl">
              Find <span className="text-brand">Trusted Local Pros</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Tell us what you need and request quotes for local home services.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-base font-semibold text-navy-foreground shadow-card transition-all hover:bg-brand hover:shadow-glow"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-navy transition-colors hover:bg-muted"
              >
                Browse Services
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-brand" /> Simple quote requests
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-brand" /> Local services
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-lift">
              <img
                src={heroImg}
                alt="Homeowner getting help on phone outside their house"
                width={1280}
                height={1280}
                className="aspect-square w-full object-cover sm:aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              How it works
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
              Three simple steps
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-3">
            {[
              {
                n: "01",
                title: "Tell Us About Your Project",
                desc: "Choose a service and share a few project details.",
              },
              {
                n: "02",
                title: "Submit Your Request",
                desc: "Send your quote request online with no obligation.",
              },
              {
                n: "03",
                title: "Get Started",
                desc: "Use your request details to move forward with the right service.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="relative rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-lift"
              >
                <span className="font-display text-5xl font-bold text-brand/20">
                  {s.n}
                </span>
                <h3 className="mt-3 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Featured Services
            </p>

            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
              Home Services We Specialize In
            </h2>

            <p className="mt-5 text-lg text-muted-foreground">
              Explore our current home service categories and request a free quote.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;

              return (
                <Link
                  key={s.slug}
                  to={s.href}
                  className="group flex min-h-[320px] flex-col rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-hero text-white shadow-card">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-navy">{s.name}</h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-muted-foreground">
                    {s.short}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-brand transition-all group-hover:gap-3">
                    View Service <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Why Get Home Quotes
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
              Built for busy homeowners
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { i: FileText, t: "One Form", d: "Submit your request online." },
              { i: Zap, t: "Fast Start", d: "Share project details quickly." },
              { i: ShieldCheck, t: "Local Services", d: "Built around common home projects." },
              { i: DollarSign, t: "Free To Use", d: "No cost to submit a request." },
              { i: Clock, t: "Save Time", d: "No need to repeat the same details." },
            ].map((b) => {
              const Icon = b.i;
              return (
                <div key={b.t} className="rounded-2xl bg-surface p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-navy-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-navy">{b.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="quote" className="bg-gradient-soft py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Request a quote
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
              Tell Us What You Need
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out the form and submit your home service request. Free, fast,
              and no obligation.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Takes under 60 seconds",
                "Free quote request",
                "For common local home services",
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
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="font-display text-4xl font-bold text-navy sm:text-5xl lg:text-6xl">
            Need Help Around Your Home?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
            Submit your request for local home services today.
          </p>
          <a
            href="#quote"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-semibold text-navy-foreground shadow-card transition-all hover:bg-brand hover:shadow-glow"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}