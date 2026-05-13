import { Link } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';
import { NewsletterForm } from './NewsletterForm';
import type { FooterNavItem } from '../config';

function FacebookGlyph() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M13.5 22v-8.3h2.8l.4-3.2h-3.2V8.6c0-.9.3-1.5 1.6-1.5h1.7V4.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.4H7.5v3.2H9.6V22h3.9z" />
    </svg>
  );
}

export default function Footer() {
  const { t, img, config, cp } = useHayc();
  const fc = config.footerConfig;

  const facebookLabel = t(fc.facebookLinkLabel);

  function renderNavItem(
    item: FooterNavItem,
    index: number,
    arrayKey: 'servicesLinks' | 'mainLinks'
  ) {
    const path = `footerConfig.${arrayKey}.${index}.label`;
    const label = t(item.label);
    const className = 'nav-link text-inherit transition hover:opacity-80';

    if (item.href.startsWith('http')) {
      return (
        <a href={item.href} className={className} {...cp(path)}>
          {label}
        </a>
      );
    }

    return (
      <Link to={item.href} className={className} {...cp(path)}>
        {label}
      </Link>
    );
  }

  return (
    <section>
      <footer className="footer-area border-t border-zinc-200 bg-zinc-50 text-zinc-800">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="footer-top pt-12 pb-10 md:pt-16 md:pb-12">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="footer-logo wow fadeInLeft">
                <a href={fc.logoHref} className="inline-block">
                  <img
                    src={img(fc.brandLogoImage)}
                    alt={t(fc.brandLogoAlt)}
                    className="h-[75px] w-auto"
                    {...cp('footerConfig.brandLogoImage')}
                  />
                </a>
              </div>
              <div className="text-wrapper wow fadeInRight max-w-xl">
                <h4 className="text-lg font-semibold leading-snug text-zinc-900 md:text-xl">
                  <span {...cp('footerConfig.taglineBeforeHighlight')}>
                    {t(fc.taglineBeforeHighlight)}
                  </span>{' '}
                  <span
                    className="text-blue-900"
                    {...cp('footerConfig.taglineHighlight')}
                  >
                    {t(fc.taglineHighlight)}
                  </span>
                </h4>
              </div>
            </div>
          </div>

          <div className="footer-widget border-t border-zinc-200/80 pt-12 pb-10 md:pt-16 md:pb-12">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <div className="widget footer-nav-widget">
                  <h4
                    className="widget-title text-base font-semibold text-zinc-900"
                    {...cp('footerConfig.servicesColumnTitle')}
                  >
                    {t(fc.servicesColumnTitle)}
                  </h4>
                  <ul className="widget-nav mt-4 list-none space-y-2 p-0">
                    {fc.servicesLinks.map((item, index) => (
                      <li key={`servicesLinks-${index}-${item.href}`}>
                        {renderNavItem(item, index, 'servicesLinks')}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="widget footer-nav-widget">
                  <h4
                    className="widget-title text-base font-semibold text-zinc-900"
                    {...cp('footerConfig.linksColumnTitle')}
                  >
                    {t(fc.linksColumnTitle)}
                  </h4>
                  <ul className="widget-nav mt-4 list-none space-y-2 p-0">
                    {fc.mainLinks.map((item, index) => (
                      <li key={`mainLinks-${index}-${item.href}`}>
                        {renderNavItem(item, index, 'mainLinks')}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="widget social-widget">
                  <h4
                    className="widget-title text-base font-semibold text-zinc-900"
                    {...cp('footerConfig.followTitle')}
                  >
                    {t(fc.followTitle)}
                  </h4>
                  <ul className="social-nav mt-4 flex list-none gap-3 p-0">
                    <li>
                      <a
                        href={fc.facebookUrl}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 transition hover:border-blue-800 hover:text-blue-900"
                        aria-label={facebookLabel}
                        title={facebookLabel}
                        {...cp('footerConfig.facebookUrl')}
                      >
                        <FacebookGlyph />
                        <span className="sr-only">{facebookLabel}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="widget newsletter-widget">
                  <div className="newsletter-content">
                    <h3 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                      <span {...cp('footerConfig.newsletterTitleLine1')}>
                        {t(fc.newsletterTitleLine1)}
                      </span>{' '}
                      <span {...cp('footerConfig.newsletterTitleLine2')}>
                        {t(fc.newsletterTitleLine2)}
                      </span>
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base"
                      {...cp('footerConfig.newsletterDescription')}
                    >
                      {t(fc.newsletterDescription)}
                    </p>
                    <div className="mt-5 max-w-md">
                      <NewsletterForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright border-t border-zinc-200 py-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="copyright-text text-sm text-zinc-600">
                <p>
                  <span {...cp('footerConfig.copyrightLine')}>
                    {t(fc.copyrightLine)}
                  </span>{' '}
                  <span {...cp('footerConfig.madeByPrefix')}>
                    {t(fc.madeByPrefix)}
                  </span>{' '}
                  <a
                    href={fc.haycUrl}
                    className="font-medium text-blue-900 underline-offset-2 hover:underline"
                    {...cp('footerConfig.haycBrandName')}
                  >
                    {t(fc.haycBrandName)}
                  </a>
                  <span {...cp('footerConfig.madeBySuffix')}>
                    {t(fc.madeBySuffix)}
                  </span>
                </p>
              </div>
              <div className="footer-nav md:text-right">
                <ul className="m-0 list-none space-y-1 p-0 text-sm">
                  <li>
                    <a
                      href={fc.privacyPolicyHref}
                      className="text-zinc-700 underline-offset-2 hover:text-zinc-900 hover:underline"
                      {...cp('footerConfig.privacyPolicyLabel')}
                    >
                      {t(fc.privacyPolicyLabel)}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
