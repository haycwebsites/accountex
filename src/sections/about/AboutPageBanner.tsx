import { useHayc } from '../../hayc/config-context';
import { AppLink } from '../../components/AppLink';

function PlayIcon() {
  return (
    <svg className="ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function AboutPageBanner() {
  const { t, img, config, cp } = useHayc();
  const b = config.aboutPageConfig.banner;

  return (
    <section className="page-banner relative z-[1] -mt-[var(--hayc-sticky-header-h)] overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 pb-16 pt-[calc(var(--hayc-sticky-header-h)+4rem)] md:pb-24 md:pt-[calc(var(--hayc-sticky-header-h)+6rem)]">
      <div className="container relative z-[1] mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="page-title">
              <h1
                className="text-4xl font-bold text-slate-900 md:text-5xl"
                {...cp('aboutPageConfig.banner.title')}
              >
                {t(b.title)}
              </h1>
              <ul className="breadcrumbs-link mt-4 flex list-none flex-wrap items-center gap-2 p-0 text-sm text-slate-600">
                <li>
                  <AppLink
                    href={b.breadcrumbHomeHref}
                    className="transition hover:text-blue-900"
                    {...cp('aboutPageConfig.banner.breadcrumbHomeLabel')}
                  >
                    {t(b.breadcrumbHomeLabel)}
                  </AppLink>
                </li>
                <li aria-hidden className="text-slate-400">
                  /
                </li>
                <li
                  className="active font-medium text-blue-900"
                  {...cp('aboutPageConfig.banner.breadcrumbCurrent')}
                >
                  {t(b.breadcrumbCurrent)}
                </li>
              </ul>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2">
            <div className="page-banner-img relative overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
              <img
                src={img(b.bannerImage)}
                alt={t(b.bannerImageAlt)}
                className="w-full object-cover"
                {...cp('aboutPageConfig.banner.bannerImage')}
              />
              <div className="play-content pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-900/25">
                <a
                  href={b.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-popup pointer-events-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-900 shadow-lg transition hover:scale-105 hover:bg-blue-50"
                  aria-label={t(b.playButtonLabel)}
                  {...cp('aboutPageConfig.banner.playButtonLabel')}
                >
                  <PlayIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
