import { useHayc } from '../../hayc/config-context';
import { AppLink } from '../../components/AppLink';

export default function ContactPageBanner() {
  const { t, config, cp } = useHayc();
  const b = config.contactPageConfig.banner;

  return (
    <section className="page-banner relative z-[1] -mt-[var(--hayc-sticky-header-h)] overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 pb-16 pt-[calc(var(--hayc-sticky-header-h)+4rem)] md:pb-20 md:pt-[calc(var(--hayc-sticky-header-h)+5rem)]">
      <div className="container relative z-[1] mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1
            className="text-4xl font-bold text-slate-900 md:text-5xl"
            {...cp('contactPageConfig.banner.title')}
          >
            {t(b.title)}
          </h1>
          <ul className="breadcrumbs-link mt-4 flex list-none flex-wrap items-center justify-center gap-2 p-0 text-sm text-slate-600">
            <li>
              <AppLink
                href={b.breadcrumbHomeHref}
                className="transition hover:text-blue-900"
                {...cp('contactPageConfig.banner.breadcrumbHomeLabel')}
              >
                {t(b.breadcrumbHomeLabel)}
              </AppLink>
            </li>
            <li aria-hidden className="text-slate-400">
              /
            </li>
            <li
              className="active font-medium text-blue-900"
              {...cp('contactPageConfig.banner.breadcrumbCurrent')}
            >
              {t(b.breadcrumbCurrent)}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
