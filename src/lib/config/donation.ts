import { withBasePath } from "@/lib/routing/base-path";

export const DONATION_QR_PATH = "/inputs/payments/QR_CODE.png";

export type DonationConfig = {
  paypalUrl: string;
  qrPath: string;
  enabled: boolean;
};

export function getDonationConfig(): DonationConfig {
  const paypalUrl =
    process.env.paypal_url?.trim() ||
    process.env.PAYPAL_URL?.trim() ||
    process.env.NEXT_PUBLIC_PAYPAL_URL?.trim() ||
    "";

  return {
    paypalUrl,
    qrPath: withBasePath(DONATION_QR_PATH),
    enabled: Boolean(paypalUrl || DONATION_QR_PATH),
  };
}
