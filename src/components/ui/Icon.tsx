import {
  Ambulance,
  Baby,
  Banknote,
  Briefcase,
  CalendarDays,
  CalendarX,
  CheckCircle2,
  Clock,
  ConciergeBell,
  CreditCard,
  Globe,
  GraduationCap,
  Headphones,
  HeartPulse,
  Laptop,
  Lock,
  Luggage,
  Mail,
  MessageCircle,
  Award,
  Mountain,
  PawPrint,
  Phone,
  Plane,
  Play,
  ShieldCheck,
  Stethoscope,
  Users,
  Wallet,
  type LucideIcon as LucideIconType,
} from "lucide-react";

/** Mapa curado de iconos lucide usados en el sitio (referenciados por nombre en datos). */
const ICONS: Record<string, LucideIconType> = {
  Ambulance,
  Baby,
  Banknote,
  Briefcase,
  CalendarDays,
  CalendarX,
  CheckCircle2,
  Clock,
  ConciergeBell,
  CreditCard,
  Globe,
  GraduationCap,
  Headphones,
  HeartPulse,
  Laptop,
  Lock,
  Luggage,
  Mail,
  MessageCircle,
  Award,
  Mountain,
  PawPrint,
  Phone,
  Plane,
  Play,
  ShieldCheck,
  Stethoscope,
  Users,
  Wallet,
};

export function Icon({
  name,
  className,
  strokeWidth = 2,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name] ?? ShieldCheck;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
