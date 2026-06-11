import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Home Services — Get Home Quotes" },
      { name: "description", content: "Browse home services we help you find quotes for: gutter cleaning, window cleaning, pressure washing, dryer vent cleaning, junk removal and more." },
      { property: "og:title", content: "Home Services We Help You Find" },
      { property: "og:description", content: "Browse home services and request free quotes from trusted local professionals." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="bg-gradient-soft py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Services</p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl">
            Home Services We Help You Find
          </h1>
          <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
            Browse the services below and request a free quote from local professionals in your area.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.slug} className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-lift">
                  <div className="flex items-start gap-4">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-hero text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy">{s.name}</h2>
                      <p className="mt-1 text-muted-foreground">{s.description}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold uppercase tracking-wider text-navy">Common problems</p>
                    <ul className="mt-3 space-y-2">
                      {s.problems.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/"
                    hash="quote"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-all hover:bg-brand hover:shadow-glow"
                  >
                    Request Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-navy-foreground">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Ready to get started?</h2>
          <p className="mt-4 text-lg text-white/70">One form. Multiple quotes. Free to use.</p>
          <Link to="/" hash="quote" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-navy transition-all hover:bg-brand hover:text-white">
            Get Free Quotes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
