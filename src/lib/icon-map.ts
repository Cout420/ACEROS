import {
  Component,
  Factory,
  Award,
  ShieldCheck,
  Microscope,
  Star,
  Zap,
  Lightbulb,
  Gem,
  Handshake,
  Cpu,
  Ship,
  Drill,
  Layers,
  Search,
  type LucideIcon,
} from 'lucide-react';

export type IconName =
  | 'Component'
  | 'Factory'
  | 'Award'
  | 'ShieldCheck'
  | 'Microscope'
  | 'Star'
  | 'Zap'
  | 'Lightbulb'
  | 'Gem'
  | 'Handshake'
  | 'Cpu'
  | 'Ship'
  | 'Drill'
  | 'Layers'
  | 'Search';

export const iconMap: Record<IconName, LucideIcon> = {
  Component,
  Factory,
  Award,
  ShieldCheck,
  Microscope,
  Star,
  Zap,
  Lightbulb,
  Gem,
  Handshake,
  Cpu,
  Ship,
  Drill,
  Layers,
  Search,
};

    