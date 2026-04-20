export type LocaleCode = "en" | "es";

export type RoomType = {
  id: string;
  name: string;
  rate: string;
  capacity: string;
  summary: string;
  features: string[];
  badge?: string;
};

export type MassageService = {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  note?: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  context: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BookingProviderConfig = {
  provider: "cloudbeds" | "simplybook";
  label: string;
  baseUrl: string;
  fallbackUrl: string;
  ready: boolean;
};

export type LocaleSiteContent = {
  locale: LocaleCode;
  languageLabel: string;
  meta: {
    localeName: string;
    title: string;
    description: string;
  };
  brand: {
    name: string;
    label: string;
    tagline: string;
    location: string;
    announcement: string;
  };
  navigation: {
    home: string;
    stay: string;
    massage: string;
    contact: string;
    bookStay: string;
    bookMassage: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      proof: string[];
    };
    directBooking: {
      eyebrow: string;
      title: string;
      intro: string;
      benefits: string[];
    };
    rooms: {
      eyebrow: string;
      title: string;
      intro: string;
      cta: string;
    };
    massage: {
      eyebrow: string;
      title: string;
      intro: string;
      cta: string;
      highlights: string[];
    };
    localStory: {
      eyebrow: string;
      title: string;
      intro: string;
      moments: string[];
    };
    testimonials: {
      eyebrow: string;
      title: string;
    };
    faq: {
      eyebrow: string;
      title: string;
      intro: string;
    };
    finalCta: {
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
    };
  };
  stay: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      availabilityLabel: string;
    };
    directBenefitsTitle: string;
    directBenefits: string[];
    amenitiesTitle: string;
    amenities: string[];
    roomTypesTitle: string;
    roomTypesIntro: string;
    faqTitle: string;
    faqIntro: string;
    finalCta: {
      title: string;
      description: string;
      cta: string;
    };
  };
  massage: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      bookingLabel: string;
    };
    servicesTitle: string;
    servicesIntro: string;
    ritualTitle: string;
    ritualSteps: string[];
    trustTitle: string;
    trustPoints: string[];
    depositNote: string;
    widgetTitle: string;
    widgetIntro: string;
    finalCta: {
      title: string;
      description: string;
      cta: string;
    };
  };
  contact: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    contactTitle: string;
    contactMethods: {
      label: string;
      value: string;
    }[];
    arrivalTitle: string;
    arrivalSteps: string[];
    policyTitle: string;
    policyPoints: string[];
  };
  rooms: RoomType[];
  massages: MassageService[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  footer: {
    note: string;
    legal: string;
  };
};
