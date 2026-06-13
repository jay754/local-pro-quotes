import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Home } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-background/0"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-navy">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-hero text-white">
            <Home className="h-4 w-4" />
          </span>
          Get Home Quotes
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="quote"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-navy-foreground shadow-card transition-all hover:bg-brand hover:shadow-glow"
          >
            Find a Pro
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="quote"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-navy-foreground"
            >
              Find a Pro
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
