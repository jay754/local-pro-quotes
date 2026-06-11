import { Link } from "@tanstack/react-router";
import { Home, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-lg font-bold text-navy">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-hero text-white">
                <Home className="h-4 w-4" />
              </span>
              Get Home Quotes
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Connecting homeowners with trusted local service professionals. Get free quotes in minutes.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-navy">Home</Link></li>
              <li><Link to="/services" className="hover:text-navy">Services</Link></li>
              <li><Link to="/contact" className="hover:text-navy">Contact</Link></li>
              <li><a href="#" className="hover:text-navy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-navy">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@gethomequotes.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 000-0000</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Get Home Quotes. All rights reserved.</p>
          <p>Free quote service. Not a contractor.</p>
        </div>
      </div>
    </footer>
  );
}
