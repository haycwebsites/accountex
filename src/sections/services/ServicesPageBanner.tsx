import { useHayc } from '../../hayc/config-context';
import { AppLink } from '../../components/AppLink';

export default function ServicesPageBanner() {
  const { t, img, config, cp } = useHayc();
  const b = config.servicesPageConfig.banner;

  return (
    <section className="page-banner relative z-[1] overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 py-16 md:py-24">
      <div className="container relative z-[1] mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <div className="page-title">
              <h1
                className="text-4xl font-bold text-slate-900 md:text-5xl"
                {...cp('servicesPageConfig.banner.title')}
              >
                {t(b.title)}
              </h1>
              <ul className="breadcrumbs-link mt-4 flex list-none flex-wrap items-center gap-2 p-0 text-sm text-slate-600">
                <li>
                  <AppLink
                    href={b.breadcrumbHomeHref}
                    className="transition hover:text-blue-900"
                    {...cp('servicesPageConfig.banner.breadcrumbHomeLabel')}
                  >
                    {t(b.breadcrumbHomeLabel)}
                  </AppLink>
                </li>
                <li aria-hidden className="text-slate-400">
                  /
                </li>
                <li className="active font-medium text-blue-900" {...cp('servicesPageConfig.banner.breadcrumbCurrent')}>
                  {t(b.breadcrumbCurrent)}
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="page-banner-img overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
              <img
                src={img(b.bannerImage)}
                alt={t(b.bannerImageAlt)}
                className="h-auto w-full object-cover"
                {...cp('servicesPageConfig.banner.bannerImage')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
