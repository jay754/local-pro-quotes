import { useState } from "react";
import { Upload, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";

export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState(defaultService ?? "");

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-lift">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-navy">Request received</h3>
        <p className="mt-2 text-muted-foreground">
          We're matching you with local professionals now. You'll hear back shortly from matched pros.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Service Needed" full>
          <select
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="input"
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </Field>
        <Field label="Name"><input required className="input" placeholder="Jane Doe" /></Field>
        <Field label="Email"><input required type="email" className="input" placeholder="you@email.com" /></Field>
        <Field label="Phone Number"><input required type="tel" className="input" placeholder="(555) 000-0000" /></Field>
        <Field label="Postal Code"><input required className="input" placeholder="12345" /></Field>
        <Field label="Project Description" full>
          <textarea rows={4} className="input resize-none" placeholder="Briefly describe what you need…" />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-navy px-6 py-4 text-base font-semibold text-navy-foreground shadow-card transition-all hover:bg-brand hover:shadow-glow"
      >
        Find My Pro
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Free to use. No obligation. Your info is shared only with matched local pros.
      </p>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--color-foreground);
          transition: all 0.15s;
        }
        .input:focus {
          outline: none;
          border-color: var(--color-brand);
          box-shadow: 0 0 0 3px oklch(0.55 0.20 255 / 0.15);
        }
      `}</style>
    </form>
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
