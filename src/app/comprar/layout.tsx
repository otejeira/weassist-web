import { CheckoutChrome } from "@/components/checkout/CheckoutChrome";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <CheckoutChrome>{children}</CheckoutChrome>;
}
