import type { BookingProviderConfig, LocaleCode } from "@/content/site/types";

const fallbackCloudbedsUrl = "https://www.cloudbeds.com/booking-engine/";
const fallbackSimplybookUrl = "https://simplybook.me/";

function withTracking(baseUrl: string, params: Record<string, string>) {
  try {
    const url = new URL(baseUrl);

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      }
    });

    return url.toString();
  } catch {
    return baseUrl;
  }
}

export function getBookingProviderConfig(
  provider: BookingProviderConfig["provider"],
): BookingProviderConfig {
  if (provider === "cloudbeds") {
    const configuredUrl = process.env.NEXT_PUBLIC_CLOUDBEDS_BOOKING_URL?.trim();

    return {
      provider,
      label: "Cloudbeds",
      baseUrl: configuredUrl || fallbackCloudbedsUrl,
      fallbackUrl: fallbackCloudbedsUrl,
      ready: Boolean(configuredUrl),
    };
  }

  const configuredUrl = process.env.NEXT_PUBLIC_SIMPLYBOOK_WIDGET_URL?.trim();

  return {
    provider,
    label: "SimplyBook.me",
    baseUrl: configuredUrl || fallbackSimplybookUrl,
    fallbackUrl: fallbackSimplybookUrl,
    ready: Boolean(configuredUrl),
  };
}

export function getCloudbedsBookingUrl(
  locale: LocaleCode,
  context: string,
  roomId?: string,
) {
  const config = getBookingProviderConfig("cloudbeds");

  return withTracking(config.baseUrl, {
    utm_source: "direct-site",
    utm_medium: "website",
    utm_campaign: `${locale}-stay`,
    utm_content: context,
    room: roomId || "",
  });
}

export function getMassageBookingUrl(
  locale: LocaleCode,
  context: string,
  serviceId?: string,
) {
  const config = getBookingProviderConfig("simplybook");

  return withTracking(config.baseUrl, {
    utm_source: "direct-site",
    utm_medium: "website",
    utm_campaign: `${locale}-massage`,
    utm_content: context,
    service: serviceId || "",
  });
}

export function getSimplybookEmbedUrl(locale: LocaleCode) {
  const config = getBookingProviderConfig("simplybook");

  return withTracking(config.baseUrl, {
    widget: "inline",
    locale,
    source: "direct-site",
  });
}
