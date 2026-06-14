import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Get Home Quotes" },
      {
        name: "description",
        content: "Questions? Need help finding a pro? Contact the Get Home Quotes team.",
      },
      { property: "og:title", content: "Contact Get Home Quotes" },
      {
        property: "og:description",
        content: "Reach out with questions about finding a local professional.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="bg-gradient-soft py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Get in touch
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl">
            Contact Us
          </h1>
          <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
            Questions? Need help finding a pro? Submit your request and we’ll help match you.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-5 lg:px-8">
          <div className="space-y-5 lg:col-span-2">
            {[
              { i: Mail, t: "Email us", d: "supporthomeqoutes@gmail.com" },
              { i: Phone, t: "Call us", d: "(555) 000-0000" },
              { i: MessageSquare, t: "Live support", d: "24/7" },
            ].map((c) => {
              const Icon = c.i;

              return (
                <div
                  key={c.t}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">{c.t}</p>
                    <p className="text-sm text-muted-foreground">{c.d}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}