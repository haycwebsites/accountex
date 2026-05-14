import {
  siteConfig,
  digitalProductsConfig,
  footerConfig,
  headerConfig,
  homePageConfig,
  servicesPageConfig,
  aboutPageConfig,
  contactPageConfig,
  type DigitalProductsConfig,
} from '../config';

export interface RemoteConfig {
  version: number;
  exportedAt: string;
  siteConfig: typeof siteConfig;
  digitalProductsConfig?: DigitalProductsConfig;
  footerConfig: typeof footerConfig;
  headerConfig: typeof headerConfig;
  homePageConfig: typeof homePageConfig;
  servicesPageConfig: typeof servicesPageConfig;
  aboutPageConfig: typeof aboutPageConfig;
  contactPageConfig: typeof contactPageConfig;
}

export const defaultConfig: RemoteConfig = {
  version: 1,
  exportedAt: '',
  siteConfig,
  digitalProductsConfig,
  footerConfig,
  headerConfig,
  homePageConfig,
  servicesPageConfig,
  aboutPageConfig,
  contactPageConfig,
};

export async function fetchRemoteConfig(): Promise<RemoteConfig> {
  // In development, use config.ts directly for instant updates
  if (import.meta.env.DEV) {
    return defaultConfig;
  }

  // In production, fetch from remote config.json
  try {
    const res = await fetch('/hayc/config.json');
    if (!res.ok) throw new Error('Failed to fetch config: ' + res.status);
    const data = (await res.json()) as Partial<RemoteConfig>;
    return {
      ...defaultConfig,
      ...data,
      siteConfig: { ...defaultConfig.siteConfig, ...(data.siteConfig ?? {}) },
      homePageConfig: data.homePageConfig ?? defaultConfig.homePageConfig,
      servicesPageConfig:
        data.servicesPageConfig ?? defaultConfig.servicesPageConfig,
      aboutPageConfig: data.aboutPageConfig ?? defaultConfig.aboutPageConfig,
      contactPageConfig:
        data.contactPageConfig ?? defaultConfig.contactPageConfig,
      footerConfig: data.footerConfig ?? defaultConfig.footerConfig,
      headerConfig: data.headerConfig ?? defaultConfig.headerConfig,
      digitalProductsConfig:
        data.digitalProductsConfig ?? defaultConfig.digitalProductsConfig,
    };
  } catch (err) {
    console.warn('[HAYC] Remote config fetch failed, using default config.', err);
    return defaultConfig;
  }
}
