import { useHayc } from '../hayc/config-context';
import { AppLink } from '../components/AppLink';

export default function HomeHero() {
  const { t, img, config, cp } = useHayc();
  const h = config.homePageConfig.hero;
  const src = img(h.decorativeImage);

  return (
    <section className="hero-banner-v1 relative min-h-[100svh] overflow-hidden bg-slate-100">
      <div className="bg-one pointer-events-none absolute -left-32 top-0 h-[60%] w-[70%] rounded-br-[40%] bg-gradient-to-br from-slate-200/90 to-slate-100" />
      <div className="bg-two pointer-events-none absolute -right-24 bottom-0 h-[55%] w-[65%] rounded-tl-[45%] bg-gradient-to-tl from-blue-100/80 to-transparent" />
      <div className="hero-img hero-img-one pointer-events-none absolute right-[8%] top-[18%] hidden w-[min(38vw,420px)] md:block">
        <img
          src={src}
          alt={t(h.heroImageAlt)}
          className="rounded-lg shadow-xl ring-1 ring-black/5"
          {...cp('homePageConfig.hero.decorativeImage')}
        />
      </div>
      <div className="hero-img hero-img-two pointer-events-none absolute bottom-[12%] right-[22%] hidden w-[min(28vw,320px)] lg:block">
        <img
          src={src}
          alt=""
          className="rounded-lg shadow-lg ring-1 ring-black/5 opacity-90"
          aria-hidden
        />
      </div>
      <div className="container relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-32 md:pt-40">
        <div className="max-w-3xl">
          <div className="hero-content">
            <h1
              className="titleStyle text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
              {...cp('homePageConfig.hero.mainTitle')}
            >
              {t(h.mainTitle)}
            </h1>
            <p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl"
              {...cp('homePageConfig.hero.subtitle')}
            >
              {t(h.subtitle)}
            </p>
            <AppLink
              href={h.ctaHref}
              className="main-btn arrow-btn mt-10 inline-flex items-center rounded-md bg-blue-900 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-950"
              {...cp('homePageConfig.hero.ctaLabel')}
            >
              {t(h.ctaLabel)}
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
