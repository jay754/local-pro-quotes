import { Droplets, Sparkles, Wind, Trash2, Flame, Bug, SquareDashedBottom, Wrench, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  problems: string[];
  icon: LucideIcon;
  href: string;
};

export const services: Service[] = [
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    short: "Clear debris and protect your home's foundation.",
    description: "Professional gutter cleaning removes leaves, sticks, and buildup so water flows freely away from your home.",
    problems: ["Overflowing gutters during storms", "Sagging or pulling away gutters", "Water damage near foundation"],
    icon: Droplets,
    href: "/gutter-cleaning",
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    short: "Restore driveways, siding, and decks.",
    description: "High-powered cleaning that removes dirt, mold, mildew, and stains from exterior surfaces.",
    problems: ["Mold or algae on siding", "Stained driveways or patios", "Dirty deck or fence"],
    icon: Wind,
    href: "/pressure-washing",
  },
  {
    slug: "junk-removal",
    name: "Junk Removal",
    short: "Haul away unwanted items, fast.",
    description: "Furniture, appliances, yard waste, renovation debris — pros handle the heavy lifting and disposal.",
    problems: ["Old furniture to remove", "Garage or basement cleanout", "Post-renovation debris"],
    icon: Trash2,
    href: "/junk-removal",
  },
];
