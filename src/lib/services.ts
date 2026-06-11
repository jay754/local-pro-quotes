import { Droplets, Sparkles, Wind, Trash2, Flame, Bug, SquareDashedBottom, Wrench, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  problems: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    short: "Clear debris and protect your home's foundation.",
    description: "Professional gutter cleaning removes leaves, sticks, and buildup so water flows freely away from your home.",
    problems: ["Overflowing gutters during storms", "Sagging or pulling away gutters", "Water damage near foundation"],
    icon: Droplets,
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    short: "Streak-free shine, inside and out.",
    description: "Get crystal clear windows with professional interior and exterior cleaning, including screens and tracks.",
    problems: ["Hard water spots", "Streaky or cloudy glass", "Hard-to-reach upper windows"],
    icon: Sparkles,
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    short: "Restore driveways, siding, and decks.",
    description: "High-powered cleaning that removes dirt, mold, mildew, and stains from exterior surfaces.",
    problems: ["Mold or algae on siding", "Stained driveways or patios", "Dirty deck or fence"],
    icon: Wind,
  },
  {
    slug: "dryer-vent-cleaning",
    name: "Dryer Vent Cleaning",
    short: "Improve safety and dryer efficiency.",
    description: "Clogged dryer vents are a leading cause of home fires. Annual cleaning protects your home and saves energy.",
    problems: ["Clothes taking longer to dry", "Burning smell when drying", "Lint buildup around vent"],
    icon: SquareDashedBottom,
  },
  {
    slug: "junk-removal",
    name: "Junk Removal",
    short: "Haul away unwanted items, fast.",
    description: "Furniture, appliances, yard waste, renovation debris — pros handle the heavy lifting and disposal.",
    problems: ["Old furniture to remove", "Garage or basement cleanout", "Post-renovation debris"],
    icon: Trash2,
  },
  {
    slug: "chimney-cleaning",
    name: "Chimney Cleaning",
    short: "Safe fires start with a clean chimney.",
    description: "Annual chimney sweeping removes creosote buildup, the leading cause of chimney fires.",
    problems: ["Smoke entering the home", "Soot or creosote buildup", "Annual safety inspection needed"],
    icon: Flame,
  },
  {
    slug: "mosquito-control",
    name: "Mosquito Control",
    short: "Reclaim your yard from pests.",
    description: "Seasonal treatments target mosquitoes and ticks so you can enjoy your outdoor space.",
    problems: ["Can't enjoy backyard at dusk", "Standing water concerns", "Family with bites"],
    icon: Bug,
  },
  {
    slug: "additional-home-services",
    name: "Additional Home Services",
    short: "Have something else? We can help.",
    description: "From handyman work to specialty cleaning, tell us what you need and we'll match you with the right pro.",
    problems: ["Don't see your service listed?", "Need multiple services?", "Custom project quote"],
    icon: Wrench,
  },
];
