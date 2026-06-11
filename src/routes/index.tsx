import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star, Clock, ShieldCheck, DollarSign, Zap, FileText } from "lucide-react";
import heroImg from "@/assets/hero-homeowner.jpg";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { services } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get Home Quotes — Free Quotes From Trusted Local Pros" },
      { name: "description", content: "Tell us what you need and we'll connect you with local professionals for a free quote. Gutter cleaning, pressure washing, junk removal and more." },
      { property: "og:title", content: "Get Home Quotes — Free Quotes From Trusted Local Pros" },
      { property: "og:description", content: "Free, fast quotes from trusted local home service professionals." },
    ],
  }),
  component: Home,
});

function Home() {
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
              Get Quotes From <span className="text-brand">Trusted Local Pros</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Tell us what you need and we'll connect you with local professionals for a free quote.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#quote" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-base font-semibold text-navy-foreground shadow-card transition-all hover:bg-brand hover:shadow-glow">
                Get Free Quotes <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-navy transition-colors hover:bg-muted">
                Browse Services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-brand text-brand" />)}</div>
                <span className="font-semibold text-navy">4.9/5</span>
              </div>
              <div className="flex items-center gap-1.5"><Check className="h-4 w-4 text-brand" /> Vetted local pros</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-lift">
              <img src={heroImg} alt="Homeowner getting quotes on phone outside their house" width={1280} height={1280} className="aspect-square w-full object-cover sm:aspect-[4/5]" />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-lift sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand/10 text-brand"><Zap className="h-5 w-5" /></div>
                <div>
                  <p className="text-sm font-semibold text-navy">Quote received</p>
                  <p className="text-xs text-muted-foreground">3 pros responded in 12 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">How it works</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">Three simple steps</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", title: "Tell Us About Your Project", desc: "Choose a service and upload photos if needed." },
              { n: "02", title: "We Match Your Request", desc: "We connect your request with local professionals." },
              { n: "03", title: "Receive Your Quote", desc: "Get pricing and availability from trusted providers." },
            ].map((s) => (
              <div key={s.n} className="relative rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-lift">
                <span className="font-display text-5xl font-bold text-brand/20">{s.n}</span>
                <h3 className="mt-3 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">Popular services</p>
              <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">What can we help with?</h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-brand hover:underline">View all services →</Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.slug} className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy">{s.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">{s.short}</p>
                  <a href="#quote" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all group-hover:gap-2">
                    Request Quote <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Why Get Home Quotes</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">Built for busy homeowners</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { i: FileText, t: "One Form", d: "No calling multiple companies." },
              { i: Zap, t: "Fast Responses", d: "Get quotes quickly." },
              { i: ShieldCheck, t: "Trusted Providers", d: "We work with local pros." },
              { i: DollarSign, t: "Free To Use", d: "No cost to request quotes." },
              { i: Clock, t: "Save Time", d: "Get connected faster." },
            ].map((b) => {
              const Icon = b.i;
              return (
                <div key={b.t} className="rounded-2xl bg-surface p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-navy-foreground"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 font-bold text-navy">{b.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="bg-gradient-soft py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Request a free quote</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">Request A Free Quote</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out the form and we'll match you with local professionals. Free, fast, and no obligation.
            </p>
            <ul className="mt-8 space-y-3">
              {["Takes under 60 seconds", "Compare quotes side by side", "Only vetted local providers"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-navy">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand/10 text-brand"><Check className="h-3.5 w-3.5" /></span>
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

      {/* SOCIAL PROOF */}
      <section className="bg-navy py-20 text-navy-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-white text-white" />)}</div>
              4.9/5 Customer Satisfaction
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">Trusted by homeowners everywhere</h2>
            <p className="mt-4 text-lg text-white/70">
              Thousands of homeowners use quote comparison platforms every year to find local service providers.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { name: "Sarah M.", text: "Got three quotes for gutter cleaning the same day. Saved me hours of phone calls.", service: "Gutter Cleaning" },
              { name: "James R.", text: "Pressure washing pro showed up the next morning. House looks brand new.", service: "Pressure Washing" },
              { name: "Linda K.", text: "Quick and easy. The pros they matched me with were professional and fairly priced.", service: "Window Cleaning" },
            ].map((r) => (
              <div key={r.name} className="rounded-2xl bg-white/5 p-6 backdrop-blur">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-white text-white" />)}</div>
                <p className="mt-3 text-white/90">"{r.text}"</p>
                <p className="mt-4 text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-white/60">{r.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="font-display text-4xl font-bold text-navy sm:text-5xl lg:text-6xl">
            Need Help Around Your Home?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
            Get connected with local professionals today.
          </p>
          <a href="#quote" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-semibold text-navy-foreground shadow-card transition-all hover:bg-brand hover:shadow-glow">
            Get Free Quotes <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
