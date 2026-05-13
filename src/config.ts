// =============================================================================
// Site Template Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
//
// STRUCTURE RULE: All interfaces must come first, then all export consts.
// This is required for the pull-config script to work correctly.
// =============================================================================

// =============================================================================
// INTERFACES
// =============================================================================

export interface LocaleString {
  el: string;
  en: string;
}

export interface SiteConfig {
  title: LocaleString;
  description: LocaleString;
  language: string;
  keywords: LocaleString;
  ogImage: string;
  canonical: string;
  siteId: string;
  apiUrl: string;
}

export interface DigitalProduct {
  id: string;
  type: 'course';
  title: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  price: string;
  language: string;
  estimatedDurationMinutes?: number;
  chapters?: {
    id: string;
    title: string;
    lessons: { id: string; title: string }[];
  }[];
}

export interface DigitalProductsConfig {
  enabled: boolean;
  lastSyncedAt?: string;
  products: DigitalProduct[];
}

export interface FooterNavItem {
  label: LocaleString;
  href: string;
}

export interface FooterConfig {
  logoHref: string;
  brandLogoImage: string;
  brandLogoAlt: LocaleString;
  taglineBeforeHighlight: LocaleString;
  taglineHighlight: LocaleString;
  servicesColumnTitle: LocaleString;
  servicesLinks: FooterNavItem[];
  linksColumnTitle: LocaleString;
  mainLinks: FooterNavItem[];
  followTitle: LocaleString;
  facebookUrl: string;
  facebookLinkLabel: LocaleString;
  newsletterTitleLine1: LocaleString;
  newsletterTitleLine2: LocaleString;
  newsletterDescription: LocaleString;
  copyrightLine: LocaleString;
  madeByPrefix: LocaleString;
  haycUrl: string;
  haycBrandName: LocaleString;
  madeBySuffix: LocaleString;
  privacyPolicyLabel: LocaleString;
  privacyPolicyHref: string;
}

export interface HomeHeroConfig {
  decorativeImage: string;
  heroImageAlt: LocaleString;
  mainTitle: LocaleString;
  subtitle: LocaleString;
  ctaLabel: LocaleString;
  ctaHref: string;
}

export interface HomeAboutConfig {
  image: string;
  imageAlt: LocaleString;
  subTitle: LocaleString;
  title: LocaleString;
  lead: LocaleString;
  body: LocaleString;
  bullets: LocaleString[];
  ctaLabel: LocaleString;
  ctaHref: string;
}

export interface HomeCourseCardConfig {
  image: string;
  title: LocaleString;
  description: LocaleString;
  durationLabel: LocaleString;
  lessonsLabel: LocaleString;
  buyLabel: LocaleString;
  buyHref: string;
}

export interface HomeEducationConfig {
  subTitle: LocaleString;
  title: LocaleString;
  description: LocaleString;
  courses: HomeCourseCardConfig[];
}

export interface HomeServiceItemConfig {
  icon: 'strategy' | 'design' | 'code';
  title: LocaleString;
  titleHref: string;
  bullets: LocaleString[];
  readMoreLabel: LocaleString;
  readMoreHref: string;
}

export interface HomeServicesConfig {
  subTitle: LocaleString;
  title: LocaleString;
  description: LocaleString;
  items: HomeServiceItemConfig[];
}

export interface HomeCtaConfig {
  sideImage: string;
  subTitle: LocaleString;
  titlePrefix: LocaleString;
  titleWord1: LocaleString;
  titleMiddle: LocaleString;
  titleWord2: LocaleString;
  titleConjunction: LocaleString;
  titleWord3: LocaleString;
  ctaLabel: LocaleString;
  ctaHref: string;
}

export interface HomeCounterItemConfig {
  icon: 'startup' | 'creativity' | 'medal' | 'support';
  value: string;
  label: LocaleString;
}

export interface HomeCounterConfig {
  subTitle: LocaleString;
  title: LocaleString;
  description: LocaleString;
  items: HomeCounterItemConfig[];
}

export interface HomeBlogPostConfig {
  image: string;
  imageAlt: LocaleString;
  title: LocaleString;
  href: string;
}

export interface HomeBlogConfig {
  subTitle: LocaleString;
  title: LocaleString;
  description: LocaleString;
  posts: HomeBlogPostConfig[];
  viewMoreLabel: LocaleString;
  viewMoreHref: string;
}

export interface HomePageConfig {
  hero: HomeHeroConfig;
  about: HomeAboutConfig;
  education: HomeEducationConfig;
  services: HomeServicesConfig;
  cta: HomeCtaConfig;
  counter: HomeCounterConfig;
  blog: HomeBlogConfig;
}

export interface ServicesBannerConfig {
  title: LocaleString;
  breadcrumbHomeLabel: LocaleString;
  breadcrumbHomeHref: string;
  breadcrumbCurrent: LocaleString;
  bannerImage: string;
  bannerImageAlt: LocaleString;
}

export interface ServicesTwoColumnTextConfig {
  image: string;
  imageAlt: LocaleString;
  subTitle: LocaleString;
  title: LocaleString;
  paragraphs: LocaleString[];
  ctaLabel: LocaleString;
  ctaHref: string;
}

export interface ServicesPageGridItemConfig {
  icon: 'strategy' | 'design' | 'code';
  title: LocaleString;
  titleHref: string;
  bullets: LocaleString[];
  learnMoreLabel: LocaleString;
  learnMoreHref: string;
}

export interface ServicesPageGridSectionConfig {
  subTitle: LocaleString;
  title: LocaleString;
  description: LocaleString;
  items: ServicesPageGridItemConfig[];
}

export interface ServicesGoalBlockConfig {
  subTitle: LocaleString;
  title: LocaleString;
  lead: LocaleString;
  paragraphs: LocaleString[];
  ctaLabel: LocaleString;
  ctaHref: string;
  shapeImage: string;
  shapeImageAlt: LocaleString;
  mainImage: string;
  mainImageAlt: LocaleString;
}

export interface ServicesPageCounterConfig {
  subTitle: LocaleString;
  title: LocaleString;
  description: LocaleString;
  items: HomeCounterItemConfig[];
}

export interface ServiceCategoryStubConfig {
  title: LocaleString;
  body: LocaleString;
}

export interface ServicesPageConfig {
  banner: ServicesBannerConfig;
  whatWeDo: ServicesTwoColumnTextConfig;
  serviceGrid: ServicesPageGridSectionConfig;
  ourGoal: ServicesGoalBlockConfig;
  stats: ServicesPageCounterConfig;
  invoicing: ServicesTwoColumnTextConfig;
  categoryStubs: Record<string, ServiceCategoryStubConfig>;
}

export interface AboutPageBannerConfig {
  title: LocaleString;
  breadcrumbHomeLabel: LocaleString;
  breadcrumbHomeHref: string;
  breadcrumbCurrent: LocaleString;
  bannerImage: string;
  bannerImageAlt: LocaleString;
  videoUrl: string;
  playButtonLabel: LocaleString;
}

export interface AboutStoryConfig {
  image: string;
  imageAlt: LocaleString;
  subTitle: LocaleString;
  title: LocaleString;
  paragraphs: LocaleString[];
  bullets: LocaleString[];
  ctaLabel: LocaleString;
  ctaHref: string;
}

export interface AboutHighlightCardConfig {
  icon: 'strategy' | 'design' | 'code';
  title: LocaleString;
  titleHref: string;
  description: LocaleString;
  readMoreLabel: LocaleString;
  readMoreHref: string;
}

export interface AboutHighlightsConfig {
  subTitle: LocaleString;
  title: LocaleString;
  items: AboutHighlightCardConfig[];
}

export interface AboutGoalBlockConfig {
  subTitle: LocaleString;
  title: LocaleString;
  lead: LocaleString;
  paragraphs: LocaleString[];
  ctaLabel: LocaleString;
  ctaHref: string;
  shapeImage: string;
  shapeImageAlt: LocaleString;
  mainImage: string;
  mainImageAlt: LocaleString;
}

export interface AboutPageConfig {
  banner: AboutPageBannerConfig;
  story: AboutStoryConfig;
  highlights: AboutHighlightsConfig;
  goal: AboutGoalBlockConfig;
}

export interface ContactPageBannerConfig {
  title: LocaleString;
  breadcrumbHomeLabel: LocaleString;
  breadcrumbHomeHref: string;
  breadcrumbCurrent: LocaleString;
}

export interface ContactIntroConfig {
  subTitle: LocaleString;
  title: LocaleString;
}

export interface ContactMainConfig {
  headingPart1: LocaleString;
  headingHighlight1: LocaleString;
  headingPart2: LocaleString;
  headingHighlight2: LocaleString;
  headingPart3: LocaleString;
  introParagraph: LocaleString;
  emailBlockTitle: LocaleString;
  emailAddress: string;
  phoneBlockTitle: LocaleString;
  phoneDisplay: string;
  phoneTel: string;
  sideImage: string;
  sideImageAlt: LocaleString;
}

export interface ContactPageConfig {
  banner: ContactPageBannerConfig;
  intro: ContactIntroConfig;
  main: ContactMainConfig;
}

// =============================================================================
// CONSTANTS
// =============================================================================

export const siteConfig: SiteConfig = {
  title: {
    el: 'AccountEx — Λογιστικές & φορολογικές υπηρεσίες',
    en: 'AccountEx — Accounting & Tax Services',
  },
  description: {
    el: 'Αξιόπιστες λογιστικές και φορολογικές υπηρεσίες για επιχειρήσεις και επαγγελματίες.',
    en: 'Reliable accounting and tax services for businesses and professionals.',
  },
  language: 'el',
  keywords: {
    el: 'λογιστική, φόροι, AccountEx, Ελλάδα',
    en: 'accounting, taxes, AccountEx, Greece',
  },
  ogImage:
    'https://accountex.gr/wp-content/uploads/2026/01/brqldmdsozv83qm5dmmq-removebg-preview-e1768610504913.png',
  canonical: 'https://accountex.gr/',
  siteId: 'accountex',
  apiUrl: 'https://hayc.gr',
};

export const digitalProductsConfig: DigitalProductsConfig = {
  enabled: false,
  products: [],
};

export const homePageConfig: HomePageConfig = {
  hero: {
    decorativeImage:
      'https://accountex.gr/wp-content/uploads/2026/01/marissa-grootes-zv5QSKaP8G8-unsplash-scaled.jpg',
    heroImageAlt: { el: 'Φωτογραφία ήρωα', en: 'Hero image' },
    mainTitle: {
      el: 'Αξιόπιστος σύμβουλος λογιστικής και φορολογίας',
      en: 'Trusted Accounting & Tax Consultant',
    },
    subtitle: {
      el: 'Αξιόπιστες υπηρεσίες λογιστικής, φορολογίας και χρηματοοικονομικής συμβουλευτικής για επιχειρήσεις, ελεύθερους επαγγελματίες και ιδιώτες — με ακρίβεια, διαφάνεια και προσωπική υποστήριξη.',
      en: 'Reliable accounting, tax, and financial advisory services for businesses, self-employed professionals, and individuals — delivered with accuracy, transparency, and personal support.',
    },
    ctaLabel: { el: 'Επικοινωνήστε μαζί μας', en: 'Contact Us' },
    ctaHref: '/contact',
  },
  about: {
    image:
      'https://accountex.gr/wp-content/uploads/2026/01/marissa-grootes-zv5QSKaP8G8-unsplash-scaled.jpg',
    imageAlt: { el: 'Λογιστικό γραφείο', en: 'Accounting office' },
    subTitle: { el: 'Σχετικά με εμάς', en: 'About Us' },
    title: {
      el: 'Αξιόπιστες λογιστικές και φορολογικές υπηρεσίες με εμπειρία',
      en: 'Trusted Accounting & Tax Services with Experience',
    },
    lead: {
      el: 'Επαγγελματικές λογιστικές λύσεις προσαρμοσμένες στις οικονομικές σας ανάγκες',
      en: 'Professional accounting solutions tailored to your financial needs',
    },
    body: {
      el: 'Με χρόνια εμπειρίας και σύγχρονη προσέγγιση στη λογιστική, στηρίζουμε επιχειρήσεις, ελεύθερους επαγγελματίες και ιδιώτες με αξιόπιστη οικονομική διαχείριση, φορολογική συμμόρφωση και στρατηγική καθοδήγηση.',
      en: 'With years of experience and a modern accounting approach, we support businesses, freelancers, and individuals with reliable financial management, tax compliance, and strategic guidance.',
    },
    bullets: [
      {
        el: 'Ολοκληρωμένες λογιστικές υπηρεσίες',
        en: 'Comprehensive Accounting Services',
      },
      {
        el: 'Φορολογικός σχεδιασμός και συμμόρφωση',
        en: 'Tax Planning & Compliance',
      },
      {
        el: 'Εξατομικευμένη οικονομική υποστήριξη',
        en: 'Personalized Financial Support',
      },
    ],
    ctaLabel: { el: 'Μάθετε περισσότερα για εμάς', en: 'Learn More About Us' },
    ctaHref: '/about',
  },
  education: {
    subTitle: { el: 'Εκπαίδευση', en: 'Education' },
    title: { el: 'Εκπαιδευτικά προγράμματα', en: 'Educational Programs' },
    description: {
      el: 'Αποκτήστε τις γνώσεις που χρειάζεστε για να διαχειρίζεστε σωστά την επιχείρησή σας.',
      en: 'Gain the knowledge you need to properly manage your business.',
    },
    courses: [
      {
        image:
          'https://accountex.gr/wp-content/uploads/2026/01/jakub-zerdzicki-heiYgqp0Tsk-unsplash-scaled.jpg',
        title: {
          el: 'Διαχείριση επιχείρησης ΙΚΕ',
          en: 'IKE Business Management',
        },
        description: {
          el: 'Ένας πλήρης οδηγός για τη λογιστική και φορολογική διαχείριση Ιδιωτικής Κεφαλαιουχικής Εταιρείας (ΙΚΕ). Από την ίδρυση έως την καθημερινή λειτουργία.',
          en: 'A complete guide to the accounting and tax management of a Private Capital Company (IKE). From incorporation to day-to-day operations.',
        },
        durationLabel: { el: '8 ώρες', en: '8 hours' },
        lessonsLabel: { el: '12 μαθήματα', en: '12 lessons' },
        buyLabel: { el: 'Αγορά τώρα', en: 'Buy Now' },
        buyHref: 'https://accountex.gr/',
      },
      {
        image:
          'https://accountex.gr/wp-content/uploads/2026/01/charlesdeluvio-OqxPH8c1UFE-unsplash-scaled.jpg',
        title: {
          el: 'Διαχείριση επιχείρησης ατομικής επιχείρησης',
          en: 'Sole Trader Business Management',
        },
        description: {
          el: 'Όλα όσα χρειάζεται να γνωρίζει ένας ελεύθερος επαγγελματίας για τη φορολογία, τις δηλώσεις και την ορθή τήρηση βιβλίων.',
          en: 'Everything a self-employed professional needs to know about taxation, filings, and proper bookkeeping.',
        },
        durationLabel: { el: '6 ώρες', en: '6 hours' },
        lessonsLabel: { el: '9 μαθήματα', en: '9 lessons' },
        buyLabel: { el: 'Αγορά τώρα', en: 'Buy Now' },
        buyHref: 'https://accountex.gr/',
      },
    ],
  },
  services: {
    subTitle: { el: 'Υπηρεσίες', en: 'Services' },
    title: {
      el: 'Λογιστικές και φορολογικές λύσεις',
      en: 'Accounting & Tax Solutions',
    },
    description: {
      el: 'Επαγγελματικές λογιστικές υπηρεσίες για συμμόρφωση, σαφήνεια και οικονομική σταθερότητα.',
      en: 'Professional accounting services designed to ensure compliance, clarity, and financial stability.',
    },
    items: [
      {
        icon: 'strategy',
        title: {
          el: 'Επιχειρηματική και χρηματοοικονομική λογιστική',
          en: 'Business & Financial Accounting',
        },
        titleHref: '/services',
        bullets: [
          { el: 'Χρηματοοικονομικός σχεδιασμός', en: 'Financial Planning' },
          { el: 'Συμβουλευτική επιχειρήσεων', en: 'Business Advisory' },
          { el: 'Βελτιστοποίηση φόρων', en: 'Tax Optimization' },
        ],
        readMoreLabel: { el: 'Διαβάστε περισσότερα', en: 'Read More' },
        readMoreHref: '/services',
      },
      {
        icon: 'design',
        title: {
          el: 'Τήρηση βιβλίων και φορολογικές δηλώσεις',
          en: 'Bookkeeping & Tax Returns',
        },
        titleHref: '/services',
        bullets: [
          { el: 'Τήρηση βιβλίων και αρχείων', en: 'Bookkeeping & Records' },
          { el: 'ΦΠΑ και φορολογικές δηλώσεις', en: 'VAT & Tax Filings' },
          { el: 'Οικονομικές καταστάσεις', en: 'Financial Statements' },
        ],
        readMoreLabel: { el: 'Διαβάστε περισσότερα', en: 'Read More' },
        readMoreHref: '/services',
      },
      {
        icon: 'code',
        title: {
          el: 'Μισθοδοσία και ρυθμιστική συμμόρφωση',
          en: 'Payroll & Regulatory Compliance',
        },
        titleHref: '/services',
        bullets: [
          { el: 'Διαχείριση μισθοδοσίας', en: 'Payroll Management' },
          { el: 'Αρχεία εργαζομένων', en: 'Employee Records' },
          { el: 'Ρυθμιστική συμμόρφωση', en: 'Regulatory Compliance' },
        ],
        readMoreLabel: { el: 'Διαβάστε περισσότερα', en: 'Read More' },
        readMoreHref: '/services',
      },
    ],
  },
  cta: {
    sideImage: '',
    subTitle: { el: 'Συνεργαστείτε μαζί μας', en: 'Work With Us' },
    titlePrefix: { el: 'Αξιόπιστες και στρατηγικές ', en: 'Reliable & Strategic ' },
    titleWord1: { el: 'λογιστικές', en: 'Accounting' },
    titleMiddle: { el: ' λύσεις για ', en: ' solutions for ' },
    titleWord2: { el: 'επιχειρήσεις', en: 'businesses' },
    titleConjunction: { el: ' και ', en: ' and ' },
    titleWord3: { el: 'επαγγελματίες', en: 'professionals' },
    ctaLabel: { el: 'Ζητήστε συμβουλευτική', en: 'Request a Consultation' },
    ctaHref: '/contact',
  },
  counter: {
    subTitle: { el: 'Στατιστικά γραφείου', en: 'Agency Statistics' },
    title: { el: 'Γιατί μας εμπιστεύονται', en: 'Why People Like Us' },
    description: {
      el: 'Επαγγελματικό λογιστικό γραφείο με ολοκληρωμένες λύσεις.',
      en: 'Professional Design Agency to provide solutions',
    },
    items: [
      {
        icon: 'startup',
        value: '256',
        label: { el: 'Ολοκληρωμένα έργα', en: 'Projects Completed' },
      },
      {
        icon: 'creativity',
        value: '783',
        label: { el: 'Ικανοποιημένοι πελάτες', en: 'Happy Clients' },
      },
      {
        icon: 'medal',
        value: '97',
        label: { el: 'Βραβεύσεις', en: 'Awards Winning' },
      },
      {
        icon: 'support',
        value: '35',
        label: { el: 'Χρόνια εμπειρίας', en: 'Years Of Experience' },
      },
    ],
  },
  blog: {
    subTitle: { el: 'Blog', en: 'Blog' },
    title: {
      el: 'Λογιστικά και φορολογικά νέα',
      en: 'Accounting & Tax Insights',
    },
    description: {
      el: 'Μείνετε ενημερωμένοι για φορολογικές ρυθμίσεις, λογιστικές πρακτικές και χρηματοοικονομικό σχεδιασμό.',
      en: 'Stay informed with updates on tax regulations, accounting practices, and financial planning.',
    },
    posts: [
      {
        image: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Blog',
        imageAlt: { el: 'Άρθρο blog', en: 'Blog article' },
        title: {
          el: 'Φορολογικές ενημερώσεις για το 2026',
          en: 'Tax updates for 2026',
        },
        href: 'https://accountex.gr/blog/',
      },
      {
        image: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Blog',
        imageAlt: { el: 'Άρθρο blog', en: 'Blog article' },
        title: {
          el: 'Καλύτερη τήρηση βιβλίων για μικρές επιχειρήσεις',
          en: 'Better bookkeeping for small businesses',
        },
        href: 'https://accountex.gr/blog/',
      },
      {
        image: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Blog',
        imageAlt: { el: 'Άρθρο blog', en: 'Blog article' },
        title: {
          el: 'Χρηματοοικονομικός σχεδιασμός για ελεύθερους επαγγελματίες',
          en: 'Financial planning for freelancers',
        },
        href: 'https://accountex.gr/blog/',
      },
    ],
    viewMoreLabel: { el: 'Περισσότερα άρθρα', en: 'View More Blogs' },
    viewMoreHref: 'https://accountex.gr/blog/',
  },
};



export const servicesPageConfig: ServicesPageConfig = {
  banner: {
    title: { el: 'Υπηρεσίες', en: 'Services' },
    breadcrumbHomeLabel: { el: 'Αρχική', en: 'Home' },
    breadcrumbHomeHref: '/',
    breadcrumbCurrent: { el: 'Υπηρεσίες', en: 'Services' },
    bannerImage:
      'https://accountex.gr/wp-content/uploads/2026/01/tyler-franta-iusJ25iYu1c-unsplash-scaled.jpg',
    bannerImageAlt: { el: 'Υπηρεσίες AccountEx', en: 'AccountEx services' },
  },
  whatWeDo: {
    image: 'https://accountex.gr/wp-content/uploads/2026/01/img-5.png',
    imageAlt: { el: 'Λογιστικές υπηρεσίες', en: 'Accounting services' },
    subTitle: { el: 'Τι κάνουμε', en: 'What We Do' },
    title: {
      el: 'Σαφείς, αξιόπιστες και επαγγελματικές λογιστικές υπηρεσίες',
      en: 'Clear, Reliable & Professional Accounting Services',
    },
    paragraphs: [
      {
        el: 'Παρέχουμε ολοκληρωμένες λογιστικές, φορολογικές και επιχειρησιακές υπηρεσίες σε ελεύθερους επαγγελματίες, ατομικές επιχειρήσεις και εταιρείες, με στόχο τη σωστή οργάνωση, τη νομική συμμόρφωση και τη βιώσιμη ανάπτυξη κάθε επιχείρησης. Αναλαμβάνουμε την ίδρυση και την έναρξη νέων επιχειρήσεων, συμπεριλαμβανομένων ατομικών και εταιρικών μορφών, με πλήρη καθοδήγηση σε κάθε βήμα. Παράλληλα, παρέχουμε συνεχή λογιστική παρακολούθηση και τήρηση βιβλίων σύμφωνα με την ισχύουσα νομοθεσία.',
        en: 'We provide comprehensive accounting, tax, and business support services to freelancers, sole proprietors, and companies, with the aim of ensuring proper organization, legal compliance, and the sustainable growth of each business. We undertake the establishment and launch of new businesses, including sole proprietorships and corporate entities, offering full guidance throughout every step of the process. At the same time, we provide ongoing accounting supervision and bookkeeping services in accordance with current accounting and tax regulations.',
      },
      {
        el: 'Η φιλοσοφία μας βασίζεται στην προσωπική επαφή, τη σαφή καθοδήγηση και την πρακτική υποστήριξη των επαγγελματιών σε κάθε στάδιο της επιχειρηματικής τους πορείας. Αντιμετωπίζουμε κάθε συνεργασία όχι μόνο ως εκπλήρωση λογιστικών υποχρεώσεων, αλλά ως ουσιαστική συμβουλευτική σχέση που βοηθά τους επιχειρηματίες να κατανοούν τις επιλογές τους και να λαμβάνουν τεκμηριωμένες αποφάσεις.',
        en: 'Our philosophy is based on personal contact, clear guidance, and hands-on support for professionals at every stage of their entrepreneurial journey. We approach each collaboration not merely as the fulfillment of accounting obligations, but as a meaningful advisory relationship that helps business owners understand their options and make well-informed decisions.',
      },
    ],
    ctaLabel: { el: 'Ζητήστε συμβουλευτική', en: 'Request a Consultation' },
    ctaHref: '/contact',
  },
  serviceGrid: {
    subTitle: { el: 'Υπηρεσίες', en: 'Services' },
    title: {
      el: 'Αξιόπιστες λογιστικές και φορολογικές λύσεις',
      en: 'Reliable Accounting & Tax Solutions',
    },
    description: {
      el: 'Επαγγελματική καθοδήγηση για επιχειρήσεις, ελεύθερους επαγγελματίες και ιδιώτες.',
      en: 'Professional guidance for businesses, self-employed professionals, and individuals.',
    },
    items: [
      {
        icon: 'strategy',
        title: { el: 'Υπηρεσίες για επιχειρήσεις', en: 'Services for Businesses' },
        titleHref: '/services/businesses',
        bullets: [
          { el: 'Τήρηση βιβλίων (απλογραφικά και διπλογραφικά)', en: 'Bookkeeping (single & double-entry)' },
          { el: 'Οικονομικές καταστάσεις και αναφορές', en: 'Financial statements & reporting' },
          { el: 'Μισθοδοσία και εργοδοτικές υποχρεώσεις', en: 'Payroll & employment obligations' },
        ],
        learnMoreLabel: { el: 'Μάθετε περισσότερα', en: 'Learn More' },
        learnMoreHref: '/contact',
      },
      {
        icon: 'design',
        title: {
          el: 'Υπηρεσίες για ελεύθερους επαγγελματίες',
          en: 'Self-Employed Professionals',
        },
        titleHref: '/services/self-employed',
        bullets: [
          { el: 'Φορολογικός σχεδιασμός και συμμόρφωση', en: 'Tax planning & compliance' },
          { el: 'ΦΠΑ και παρακρατούμενοι φόροι', en: 'VAT & withholding taxes' },
          { el: 'Συνεχής λογιστική υποστήριξη', en: 'Ongoing accounting support' },
        ],
        learnMoreLabel: { el: 'Μάθετε περισσότερα', en: 'Learn More' },
        learnMoreHref: '/contact',
      },
      {
        icon: 'code',
        title: { el: 'Υπηρεσίες για ιδιώτες', en: 'Services for Individuals' },
        titleHref: '/services/individuals',
        bullets: [
          { el: 'Φορολογικές δηλώσεις εισοδήματος (Ε1, Ε2, Ε9)', en: 'Income tax returns (E1, E2, E9)' },
          { el: 'Δηλώσεις περιουσίας και περιουσιακών στοιχείων', en: 'Property & asset declarations' },
          { el: 'Υποστήριξη επιδομάτων και πιστοποιητικών', en: 'Benefits & certificates support' },
        ],
        learnMoreLabel: { el: 'Μάθετε περισσότερα', en: 'Learn More' },
        learnMoreHref: '/contact',
      },
    ],
  },
  ourGoal: {
    subTitle: { el: 'Ο στόχος μας', en: 'Our Goal' },
    title: {
      el: 'Αξιόπιστη υποστήριξη βασισμένη στην εμπειρία και την ακρίβεια',
      en: 'Reliable Support Built on Experience & Accuracy',
    },
    lead: {
      el: 'Με έμφαση στη σαφήνεια, την υπευθυνότητα και τη μακροχρόνια συνεργασία.',
      en: 'Focused on clarity, responsibility, and long-term cooperation.',
    },
    paragraphs: [
      {
        el: 'Υποστηρίζουμε ιδιώτες και νομικά πρόσωπα στη φορολογική συμμόρφωση, συμπεριλαμβανομένων δηλώσεων εισοδήματος, ΦΠΑ και άλλων φορολογικών υποχρεώσεων, καθώς και συμβουλευτικών υπηρεσιών φορολογικού σχεδιασμού. Αναλαμβάνουμε μισθοδοσία, διαδικασίες πρόσληψης και εργοδοτικές υποχρεώσεις, συμπεριλαμβανομένων υποβολών στο σύστημα ΕΡΓΑΝΗ, υπολογισμού ασφαλιστικών εισφορών και υποστήριξης σε θέματα εργατικού δικαίου. Παρέχουμε επίσης καθοδήγηση σε θέματα ασφάλισης για επαγγελματίες και επιχειρήσεις.',
        en: 'We support both individuals and legal entities with tax compliance, including the filing of income tax returns, VAT returns, and other tax obligations, as well as tax planning advisory services, ensuring that business activity is structured in a lawful and efficient manner. We handle payroll management, hiring procedures, and employment-related obligations, including submissions to the ERGANI system, calculation of social security contributions, and support on labor law matters. We also provide guidance on insurance-related issues for professionals and companies.',
      },
      {
        el: 'Επιπλέον, προσφέρουμε ολοκληρωμένη υποστήριξη για συμμετοχή σε προγράμματα του ΔΥΠΑ (πρώην ΟΑΕΔ), τόσο για επιχορηγήσεις νέων επιχειρήσεων όσο και για κίνητρα απασχόλησης. Οι υπηρεσίες μας περιλαμβάνουν ενημέρωση για διαθέσιμα προγράμματα, αξιολόγηση προϋποθέσεων, προετοιμασία και υποβολή αιτήσεων και παρακολούθηση συμμόρφωσης. Τέλος, παρέχουμε συμβουλευτική για οργάνωση, ταμειακές ροές και προετοιμασία ελέγχων, ως αξιόπιστος συνεργάτης στην καθημερινή λειτουργία κάθε επιχείρησης.',
        en: 'In addition, we offer comprehensive support for participation in programs of DYPA (formerly OAED), covering both startup subsidy programs and employment incentive schemes. Our services include informing clients about available programs, assessing eligibility requirements, preparing and submitting applications, and continuously monitoring compliance obligations arising from participation in subsidized programs, allowing business owners to take full advantage of available opportunities without the risk of losing funding due to procedural errors. Finally, we provide advisory support for business organization, cash flow management, and preparation for tax or social security audits, acting as a reliable partner in the day-to-day operation and long-term stability of each business.',
      },
    ],
    ctaLabel: { el: 'Επικοινωνήστε μαζί μας', en: 'Contact Us' },
    ctaHref: '/contact',
    shapeImage: 'https://accountex.gr/wp-content/uploads/2026/01/shape-6.png',
    shapeImageAlt: { el: 'Διακοσμητικό σχήμα', en: 'Decorative shape' },
    mainImage: 'https://accountex.gr/wp-content/uploads/2026/01/img-4.jpg',
    mainImageAlt: { el: 'Λογιστική υποστήριξη', en: 'Accounting support' },
  },
  stats: {
    subTitle: { el: 'Στατιστικά γραφείου', en: 'Agency Statistics' },
    title: { el: 'Γιατί μας εμπιστεύονται', en: 'Why People Like Us' },
    description: {
      el: 'Επαγγελματικό λογιστικό γραφείο με ολοκληρωμένες λύσεις.',
      en: 'Professional Design Agency to provide solutions',
    },
    items: [
      {
        icon: 'startup',
        value: '256',
        label: { el: 'Ολοκληρωμένα έργα', en: 'Project Complate' },
      },
      {
        icon: 'creativity',
        value: '783',
        label: { el: 'Ολοκληρωμένα έργα', en: 'Project Complate' },
      },
      {
        icon: 'medal',
        value: '97',
        label: { el: 'Βραβεύσεις', en: 'Awards Winning' },
      },
      {
        icon: 'support',
        value: '35',
        label: { el: 'Χρόνια εμπειρίας', en: 'Years Of Experience' },
      },
    ],
  },
  invoicing: {
    image: 'https://accountex.gr/wp-content/uploads/2026/01/img-5.png',
    imageAlt: { el: 'Πρόγραμμα τιμολόγησης', en: 'Invoicing program' },
    subTitle: { el: 'Πρόγραμμα τιμολόγησης', en: 'Invoicing Program' },
    title: {
      el: 'Μια απλή και αξιόπιστη λύση για την επιχείρησή σας',
      en: 'A simple & reliable solution for your business',
    },
    paragraphs: [
      {
        el: 'Η διαχείριση μιας επιχείρησης ξεπερνά την έκδοση τιμολογίων. Περιλαμβάνει παρακολούθηση εσόδων και δαπανών, κατανόηση φορολογικών υποχρεώσεων, παρακολούθηση υποχρεώσεων και σαφή οικονομική εικόνα. Το πρόγραμμα τιμολόγησής μας συγκεντρώνει όλα αυτά σε ένα σύγχρονο, εύκολο περιβάλλον, ώστε να εκδίδετε τιμολόγια και αποδείξεις γρήγορα και να παρακολουθείτε την απόδοσή σας σε πραγματικό χρόνο.',
        en: 'Managing a business goes beyond issuing invoices. It involves monitoring income and expenses, understanding tax obligations, tracking liabilities, and maintaining a clear financial overview. Our invoicing program brings all these elements together in a modern, easy-to-use environment, allowing you to issue invoices and receipts quickly while tracking your financial performance in real time.',
      },
      {
        el: 'Το σύστημα μπορεί να συνδεθεί με υπηρεσίες της ΑΑΔΕ, παρέχοντας άμεση πρόσβαση σε βασικές φορολογικές πληροφορίες όπως υποχρεώσεις και ρυθμίσεις πληρωμών από ένα κεντικό σημείο. Με την έγκρισή σας ενσωματώνεται και στο δικό μας διοικητικό περιβάλλον, για ταχύτερη υποστήριξη και ομαλότερη συνεργασία με τον λογιστή σας. Περισσότερο από εργαλείο τιμολόγησης, λειτουργεί ως πλήρες επιχειρησιακό dashboard.',
        en: 'The system can be connected to AADE services, providing direct access to key tax information such as liabilities and payment arrangements from one central point. With your approval, it also integrates with our administrative environment, enabling faster support and smoother collaboration with your accountant. More than just an invoicing tool, it functions as a complete business dashboard that helps you stay organized and make better decisions for your business.',
      },
    ],
    ctaLabel: {
      el: 'Οργανώστε την επιχείρησή σας πιο έξυπνα σήμερα',
      en: 'Organize your business smarter today',
    },
    ctaHref: '/contact',
  },
  categoryStubs: {
    businesses: {
      title: { el: 'Υπηρεσίες για επιχειρήσεις', en: 'Services for Businesses' },
      body: {
        el: 'Λεπτομερής περιγραφή των υπηρεσιών για επιχειρήσεις θα προστεθεί εδώ όταν μας στείλετε το περιεχόμενο της σελίδας.',
        en: 'Detailed content for business services can be added here when you send the dedicated page copy.',
      },
    },
    'self-employed': {
      title: {
        el: 'Υπηρεσίες για ελεύθερους επαγγελματίες',
        en: 'Self-Employed Professionals',
      },
      body: {
        el: 'Λεπτομερής περιγραφή των υπηρεσιών για ελεύθερους επαγγελματίες θα προστεθεί εδώ όταν μας στείλετε το περιεχόμενο της σελίδας.',
        en: 'Detailed content for self-employed services can be added here when you send the dedicated page copy.',
      },
    },
    individuals: {
      title: { el: 'Υπηρεσίες για ιδιώτες', en: 'Services for Individuals' },
      body: {
        el: 'Λεπτομερής περιγραφή των υπηρεσιών για ιδιώτες θα προστεθεί εδώ όταν μας στείλετε το περιεχόμενο της σελίδας.',
        en: 'Detailed content for individual services can be added here when you send the dedicated page copy.',
      },
    },
  },
};



export const aboutPageConfig: AboutPageConfig = {
  banner: {
    title: { el: 'Σχετικά με εμένα', en: 'About Me' },
    breadcrumbHomeLabel: { el: 'Αρχική', en: 'Home' },
    breadcrumbHomeHref: '/',
    breadcrumbCurrent: { el: 'Σχετικά με εμένα', en: 'About Me' },
    bannerImage: 'https://accountex.gr/wp-content/uploads/2026/01/img-1.jpg',
    bannerImageAlt: { el: 'Φωτογραφία γραφείου', en: 'Office photo' },
    videoUrl: 'https://www.youtube.com/watch?v=AT6oSIDbGkw',
    playButtonLabel: { el: 'Παρακολουθήστε το βίντεο στο YouTube', en: 'Watch video on YouTube' },
  },
  story: {
    image: 'https://accountex.gr/wp-content/uploads/2026/01/about-4.png',
    imageAlt: { el: 'Σχετικά με το γραφείο', en: 'About the firm' },
    subTitle: { el: 'Σχετικά με εμάς', en: 'About Us' },
    title: {
      el: 'Επαγγελματικές λογιστικές και χρηματοοικονομικές υπηρεσίες υποστήριξης',
      en: 'Professional Accounting & Financial Support Services',
    },
    paragraphs: [
      {
        el: 'Είμαι πτυχιούχος του Οικονομικού Πανεπιστημίου Αθηνών και εργάζομαι επαγγελματικά στον τομέα της λογιστικής και της φορολογίας ως μέρος τριτοβάθμιας οικογενειακής επιχείρησης. Το λογιστικό μας γραφείο λειτουργεί για δεκαετίες, έχοντας στηρίξει επαγγελματίες, ελεύθερους επαγγελματίες και επιχειρήσεις σε κάθε στάδιο — από το πρώτο βήμα έως την ανάπτυξη και την οργάνωση μιας βιώσιμης επιχείρησης.',
        en: 'I am a graduate of the Athens University of Economics and Business and I work professionally in the field of accounting and taxation as part of a third-generation family business. Our accounting firm has been operating for decades, having supported professionals, freelancers, and businesses at every stage of their journey—from the very first step to the growth and organization of a sustainable enterprise.',
      },
      {
        el: 'Μεγάλωσα μέσα στο περιβάλλον της επιχείρησης και εκτέθηκα νωρίς στις πραγματικές προκλήσεις και ανάγκες της αγοράς. Αυτή η εμπειρία μου επέτρεψε να αποκτήσω όχι μόνο ισχυρή θεωρητική γνώση, αλλά και ουσιαστική πρακτική εμπειρία στην καθημερινότητα των επιχειρηματιών. Πιστεύω στη σαφή επικοινωνία, τη σωστή καθοδήγηση και την απλοποίηση διαδικασιών που συχνά φαίνονται περίπλοκες και αγχωτικές σε όσους ξεκινούν τη δική τους επιχείρηση.',
        en: 'I grew up within the environment of the business and was exposed early on to the real challenges and needs of the market. This experience allowed me to gain not only strong theoretical knowledge, but also substantial hands-on experience in the everyday realities faced by entrepreneurs. I believe in clear communication, proper guidance, and the simplification of processes that often seem complex and stressful to those starting their own business.',
      },
    ],
    bullets: [
      {
        el: 'Σαφής και αξιόπιστη λογιστική καθοδήγηση',
        en: 'Clear and reliable accounting guidance',
      },
      {
        el: 'Πλήρης συμμόρφωση με τη φορολογική νομοθεσία',
        en: 'Full compliance with tax legislation',
      },
      {
        el: 'Εξατομικευμένη υποστήριξη για κάθε πελάτη',
        en: 'Personalized support for every client',
      },
    ],
    ctaLabel: { el: 'Δείτε τις υπηρεσίες', en: 'View Services' },
    ctaHref: '/services',
  },
  highlights: {
    subTitle: { el: 'Γιατί να με επιλέξετε;', en: 'Why Choose Me?' },
    title: { el: 'Τι με ξεχωρίζει', en: 'What Makes Me Stand Out' },
    items: [
      {
        icon: 'strategy',
        title: { el: 'Εμπειρία και τεχνογνωσία', en: 'Experience & Expertise' },
        titleHref: '/services',
        description: {
          el: 'Χρόνια επαγγελματικής εμπειρίας σε λογιστική και φορολογική υποστήριξη, με ακριβή και αξιόπιστη καθοδήγηση.',
          en: 'Years of professional accounting and tax support experience ensuring accurate, reliable guidance.',
        },
        readMoreLabel: { el: 'Διαβάστε περισσότερα', en: 'Read More' },
        readMoreHref: '/services',
      },
      {
        icon: 'design',
        title: { el: 'Εξατομικευμένη εξυπηρέτηση', en: 'Personalized Service' },
        titleHref: '/services',
        description: {
          el: 'Κάθε πελάτης λαμβάνει προσαρμοσμένες λύσεις και προσωπική φροντίδα για τις δικές του οικονομικές ανάγκες.',
          en: 'Every client receives tailored solutions and personal attention for their unique financial needs.',
        },
        readMoreLabel: { el: 'Διαβάστε περισσότερα', en: 'Read More' },
        readMoreHref: '/services',
      },
      {
        icon: 'code',
        title: { el: 'Ακρίβεια και συμμόρφωση', en: 'Accuracy & Compliance' },
        titleHref: '/services',
        description: {
          el: 'Εγγυώμαι πλήρη συμμόρφωση με τη φορολογική νομοθεσία, σαφείς αναφορές και διαφανή επικοινωνία.',
          en: 'I guarantee full compliance with tax legislation, clear reporting, and transparent communication.',
        },
        readMoreLabel: { el: 'Διαβάστε περισσότερα', en: 'Read More' },
        readMoreHref: '/services',
      },
    ],
  },
  goal: {
    subTitle: { el: 'Ο στόχος μου', en: 'My Goal' },
    title: {
      el: 'Αξιόπιστη υποστήριξη βασισμένη στην εμπειρία και την ακρίβεια',
      en: 'Reliable Support Built on Experience & Accuracy',
    },
    lead: {
      el: 'Με έμφαση στη σαφήνεια, την υπευθυνότητα και τη μακροχρόνια συνεργασία.',
      en: 'Focused on clarity, responsibility, and long-term cooperation.',
    },
    paragraphs: [
      {
        el: 'Ο στόχος μου είναι να βοηθήσω επαγγελματίες και υποψήφιους επιχειρηματίες να κάνουν τα πρώτα τους βήματα σωστά, να αποφεύγουν συχνά λάθη και να χτίζουν επιχειρήσεις σε στέρεες βάσεις, νομικά και φορολογικά. Μέσω των υπηρεσιών και των εκπαιδευτικών σεμιναρίων που προσφέρω, στοχεύω στην παροχή πρακτικών γνώσεων σε σαφή και προσβάσιμο τρόπο, ώστε ο καθένας να λαμβάνει τεκμηριωμένες αποφάσεις για το επιχειρηματικό του μέλλον.',
        en: 'My goal is to help professionals and aspiring entrepreneurs take their first steps correctly, avoid common mistakes, and build businesses on solid foundations, both legally and tax-wise. Through the services and educational seminars I provide, I aim to deliver practical knowledge in a clear and accessible way, enabling each individual to make informed and confident decisions about their entrepreneurial future.',
      },
      {
        el: 'Η προσέγγισή μου συνδυάζει επαγγελματική τεχνογνωσία με σαφή επικοινωνία, ώστε οι πελάτες να κατανοούν πάντα τη χρηματοοικονομική τους θέση και τις υποχρεώσεις τους.',
        en: 'My approach combines professional expertise with clear communication, so clients always understand their financial position and obligations.',
      },
    ],
    ctaLabel: { el: 'Επικοινωνία', en: 'Contact' },
    ctaHref: '/contact',
    shapeImage: 'https://accountex.gr/wp-content/uploads/2026/01/shape-6.png',
    shapeImageAlt: { el: 'Διακοσμητικό σχήμα', en: 'Decorative shape' },
    mainImage: 'https://accountex.gr/wp-content/uploads/2026/01/img-4.jpg',
    mainImageAlt: { el: 'Υποστήριξη πελατών', en: 'Client support' },
  },
};



export const contactPageConfig: ContactPageConfig = {
  banner: {
    title: { el: 'Επικοινωνία', en: 'Contact Us' },
    breadcrumbHomeLabel: { el: 'Αρχική', en: 'Home' },
    breadcrumbHomeHref: '/',
    breadcrumbCurrent: { el: 'Επικοινωνία', en: 'Contact Us' },
  },
  intro: {
    subTitle: { el: 'Επικοινωνήστε', en: 'Get In Touch' },
    title: { el: 'Ας συνδεθούμε', en: "Let's Connect" },
  },
  main: {
    headingPart1: { el: 'Έχετε ', en: 'Have a ' },
    headingHighlight1: { el: 'μια ερώτηση', en: 'Question' },
    headingPart2: { el: ' ή χρειάζεστε ', en: ' or Need ' },
    headingHighlight2: { el: 'υποστήριξη;', en: 'Support?' },
    headingPart3: { el: ' Επικοινωνήστε μαζί μας', en: ' Contact Us' },
    introParagraph: {
      el: 'Είτε είστε επιχειρηματίας, ελεύθερος επαγγελματίας είτε ιδιώτης, είμαστε εδώ για να βοηθήσουμε με αξιόπιστη λογιστική, φορολογική συμβουλευτική και χρηματοοικονομική καθοδήγηση προσαρμοσμένη στις ανάγκες σας.',
      en: 'Whether you are a business owner, freelancer, or individual, we are here to help with reliable accounting, tax consulting, and financial guidance tailored to your needs.',
    },
    emailBlockTitle: { el: 'Στείλτε μας email', en: 'Email Us' },
    emailAddress: 'christopouloueleni1@gmail.com',
    phoneBlockTitle: { el: 'Καλέστε μας', en: 'Phone Us' },
    phoneDisplay: '+306989738983',
    phoneTel: '+306989738983',
    sideImage:
      'https://accountex.gr/wp-content/uploads/2026/01/marissa-grootes-zv5QSKaP8G8-unsplash-scaled.jpg',
    sideImageAlt: { el: 'Επικοινωνία', en: 'Contact' },
  },
};

export const footerConfig: FooterConfig = {
  logoHref: 'https://accountex.gr/',
  brandLogoImage:
    'https://accountex.gr/wp-content/uploads/2026/01/brqldmdsozv83qm5dmmq-removebg-preview-e1768610504913.png',
  brandLogoAlt: { el: 'Λογότυπο AccountEx', en: 'AccountEx brand logo' },
  taglineBeforeHighlight: {
    el: 'Αξιόπιστες λογιστικές και φορολογικές υπηρεσίες για',
    en: 'Reliable Accounting & Tax Services for',
  },
  taglineHighlight: {
    el: 'επιχειρήσεις και επαγγελματίες',
    en: 'Businesses & Professionals',
  },
  servicesColumnTitle: { el: 'Υπηρεσίες', en: 'Services' },
  servicesLinks: [
    { label: { el: 'Συχνές ερωτήσεις', en: 'FAQ' }, href: '/#faq' },
    { label: { el: 'Newsletter', en: 'Newsletter' }, href: '/#newsletter' },
  ],
  linksColumnTitle: { el: 'Σύνδεσμοι', en: 'Links' },
  mainLinks: [
    { label: { el: 'Αρχική', en: 'Home' }, href: 'https://accountex.gr/' },
    {
      label: { el: 'Υπηρεσίες', en: 'Services' },
      href: '/services',
    },
    { label: { el: 'Σχετικά', en: 'About' }, href: '/about' },
    {
      label: { el: 'Επικοινωνία', en: 'Contact' },
      href: '/contact',
    },
  ],
  followTitle: { el: 'Ακολουθήστε', en: 'Follow' },
  facebookUrl: 'https://www.facebook.com/profile.php?id=61581228651473',
  facebookLinkLabel: { el: 'Facebook', en: 'Facebook' },
  newsletterTitleLine1: { el: 'Εγγραφείτε στο', en: 'Subscribe to Our' },
  newsletterTitleLine2: { el: 'Newsletter μας', en: 'Newsletter' },
  newsletterDescription: {
    el: 'Λάβετε συμβουλές λογιστικής, ενημερώσεις φορολογίας και οικονομικές συμβουλές στο inbox σας. Μείνετε ενημερωμένοι και πάρτε καλύτερες αποφάσεις για την επιχείρησή σας.',
    en: 'Get the latest accounting tips, tax updates, and financial advice delivered straight to your inbox. Stay informed and make smarter business decisions.',
  },
  copyrightLine: {
    el: 'Copyright © 2026 Με την επιφύλαξη παντός δικαιώματος.',
    en: 'Copyright © 2026 All Right Reserved.',
  },
  madeByPrefix: { el: 'Κατασκευή από', en: 'Made by' },
  haycUrl: 'https://hayc.gr/',
  haycBrandName: { el: 'hayc', en: 'hayc' },
  madeBySuffix: { el: ' με 💙', en: ' with 💙' },
  privacyPolicyLabel: {
    el: 'Πολιτική απορρήτου',
    en: 'Privacy Policy',
  },
  privacyPolicyHref: 'https://accountex.gr/privacy-policy',
};
