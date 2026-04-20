# Casa Quilla

Bilingual Next.js direct-booking concept site for a Peruvian hostel and massage business.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Pages

- `/en` and `/es`
- `/[locale]/stay`
- `/[locale]/massage`
- `/[locale]/contact`

## Environment

Copy `.env.example` and replace the placeholder values before launch:

- `NEXT_PUBLIC_CLOUDBEDS_BOOKING_URL`
- `NEXT_PUBLIC_SIMPLYBOOK_WIDGET_URL`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_SITE_URL`

If the booking URLs are not configured, the site still renders and shows branded placeholder behavior for the massage widget while stay buttons fall back to a generic Cloudbeds entry URL.

## Scripts

```bash
pnpm dev
pnpm lint
pnpm build
```

## Content model

All launch content lives in `content/site/index.ts`, including:

- EN/ES copy
- room types
- massage services
- testimonials
- FAQ content

## Notes

- Placeholder media lives in `public/media`.
- Booking URL generation and analytics helpers live in `lib/booking` and `lib/analytics`.
- Replace the invented launch brand/content with the real hostel brand assets when ready.
