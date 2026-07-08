import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { services } from "@/lib/services";
import { useServerFn } from "@tanstack/react-start";
import { submitQuote } from "@/lib/quote.functions";

type QuoteFormProps = {
  defaultService?: string;
  title?: string;
  description?: string;
  projectTypes?: string[];
};

export function QuoteForm({
  defaultService,
  title = "Request a Free Quote",
  description = "Tell us about your project and submit your request online.",
  projectTypes,
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

const [formData, setFormData] = useState({
  service: defaultService ?? "",
  projectType: "",
  name: "",
  email: "",
  phone: "",
  postalCode: "",
  description: "",
});

  const sendQuote = useServerFn(submitQuote);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await sendQuote({ data: formData });
      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-lift">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand">
          <CheckCircle2 className="h-7 w-7" />
        </div>

        <h3 className="mt-4 font-display text-2xl font-bold text-navy">
          Request received
        </h3>

        <p className="mt-2 text-muted-foreground">
          We're matching you with local professionals now. You'll hear back shortly from matched pros.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8"
    >
      <h2 className="text-3xl font-black text-navy">
        {title}
      </h2>

      <p className="mt-3 mb-8 text-lg text-muted-foreground">
        {description}
      </p>


      {error && (
        <div className="mb-4 flex items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {!defaultService && (
          <Field label="Service Needed" full>
            <select
              required
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="input"
            >
              <option value="">Select a service...</option>

              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
          </Field>
        )}

        {projectTypes && (
          <Field label="What needs service?" full>
            <select
              required
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="input"
            >
              <option value="">Select one...</option>

              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </Field>
        )}

        <Field label="Name">
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="Jane Doe"
            maxLength={100}
          />
        </Field>

        <Field label="Email">
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="you@email.com"
            maxLength={255}
          />
        </Field>

        <Field label="Phone Number">
          <input
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
            placeholder="(555) 000-0000"
            maxLength={50}
          />
        </Field>

        <Field label="Postal Code">
          <input
            required
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="input"
            placeholder="M5V 2T6"
            maxLength={20}
          />
        </Field>

        <Field label="Project Description (Optional)" full>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="input resize-none"
            placeholder="Briefly describe what you need…"
            maxLength={2000}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 text-base font-semibold text-navy-foreground shadow-card transition-all hover:bg-brand hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting…
          </>
        ) : (
          "Find My Pro"
        )}
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

function Field({
  label,
  full,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </span>
      {children}
    </label>
  );
}