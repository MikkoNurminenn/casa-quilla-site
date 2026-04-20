export type AnalyticsEventName =
  | "hero_cta_click"
  | "stay_cta_click"
  | "massage_cta_click"
  | "booking_engine_click";

export type AnalyticsPayload = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (
      command: string,
      eventName: string,
      payload?: AnalyticsPayload,
    ) => void;
    gtag?: (
      command: "event",
      eventName: string,
      payload?: AnalyticsPayload,
    ) => void;
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  payload: AnalyticsPayload,
) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", eventName, payload);
  window.fbq?.("trackCustom", eventName, payload);
  window.dataLayer?.push({ event: eventName, ...payload });
}
