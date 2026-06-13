import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
      meta: [
        { title: "Contact Us — Get Home Quotes" },
        { name: "description", content: "Questions? Need help finding a pro? Contact the Get Home Quotes team." },
        { property: "og:title", content: "Contact Get Home Quotes" },
        { property: "og:description", content: "Reach out with questions about finding a local professional." },
      ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="bg-gradient-soft py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Get in touch</p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl">Contact Us</h1>
          <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
            Questions? Need help finding a pro? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-5 lg:px-8">
          <div className="space-y-5 lg:col-span-2">
            {[
              { i: Mail, t: "Email us", d: "hello@gethomequotes.com" },
              { i: Phone, t: "Call us", d: "(555) 000-0000" },
              { i: MessageSquare, t: "Live support", d: "Mon–Fri, 9am–6pm" },
            ].map((c) => {
              const Icon = c.i;
              return (
                <div key={c.t} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
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
            {sent ? (
              <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-lift">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-navy">Message sent</h3>
                <p className="mt-2 text-muted-foreground">Thanks for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="rounded-3xl border border-border bg-card p-8 shadow-lift"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name"><input required className="cinput" placeholder="Your name" /></Field>
                  <Field label="Email"><input required type="email" className="cinput" placeholder="you@email.com" /></Field>
                  <Field label="Phone" full><input type="tel" className="cinput" placeholder="(555) 000-0000" /></Field>
                  <Field label="Message" full>
                    <textarea required rows={6} className="cinput resize-none" placeholder="How can we help?" />
                  </Field>
                </div>
                <button type="submit" className="mt-6 w-full rounded-full bg-navy px-6 py-4 text-base font-semibold text-navy-foreground shadow-card transition-all hover:bg-brand hover:shadow-glow">
                  Send Message
                </button>
                <style>{`
                  .cinput {
                    width: 100%;
                    border-radius: 0.75rem;
                    border: 1px solid var(--color-border);
                    background: var(--color-background);
                    padding: 0.75rem 1rem;
                    font-size: 0.95rem;
                    color: var(--color-foreground);
                  }
                  .cinput:focus {
                    outline: none;
                    border-color: var(--color-brand);
                    box-shadow: 0 0 0 3px oklch(0.55 0.20 255 / 0.15);
                  }
                `}</style>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, full, children }: { label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-sm font-medium text-navy">{label}</span>
      {children}
    </label>
  );
}
