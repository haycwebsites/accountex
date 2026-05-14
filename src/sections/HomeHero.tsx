import { useHayc } from '../hayc/config-context';
import { AppLink } from '../components/AppLink';

export default function HomeHero() {
  const { t, img, config, cp } = useHayc();
  const h = config.homePageConfig.hero;
  const src = img(h.decorativeImage);

  return (
    <section
      className="home-hero relative -mt-[var(--hayc-sticky-header-h)] min-h-[min(100svh,880px)] overflow-hidden px-6 pb-28 pt-[calc(var(--hayc-sticky-header-h)+6rem)] sm:px-10 sm:pb-32 sm:pt-[calc(var(--hayc-sticky-header-h)+6.5rem)] md:px-12 md:pt-[calc(var(--hayc-sticky-header-h)+7rem)] lg:min-h-[min(92svh,860px)] lg:px-16 lg:pb-36 lg:pt-[calc(var(--hayc-sticky-header-h)+7.5rem)] xl:px-20 xl:pb-40 2xl:px-24"
      style={{
        background:
          'linear-gradient(90deg, rgb(237 233 254 / 0.9) 0%, rgb(248 250 252) 42%, rgb(236 253 245 / 0.45) 100%)',
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-x-20 xl:gap-x-28 2xl:gap-x-36">
          <div className="relative z-20 mx-auto w-full max-w-xl lg:mx-0 lg:max-w-[26rem] lg:justify-self-end lg:pr-2 xl:max-w-xl xl:pr-6">
            <h1
              className="text-balance text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-[3.15rem] lg:leading-[1.12] xl:text-5xl"
              {...cp('homePageConfig.hero.mainTitle')}
            >
              {t(h.mainTitle)}
            </h1>
            <p
              className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-600 md:mt-6 md:text-xl"
              {...cp('homePageConfig.hero.subtitle')}
            >
              {t(h.subtitle)}
            </p>
            <AppLink
              href={h.ctaHref}
              className="main-btn arrow-btn mt-8 inline-flex rounded-lg shadow-md md:mt-10"
              {...cp('homePageConfig.hero.ctaLabel')}
            >
              {t(h.ctaLabel)}
            </AppLink>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative aspect-[3/4] w-[min(88vw,380px)] overflow-hidden rounded-[999px] shadow-xl ring-1 ring-black/5 sm:w-[min(72vw,400px)] md:w-[min(52vw,430px)] lg:w-[min(38vw,400px)] xl:w-[min(34vw,460px)]">
              <img
                src={src}
                alt={t(h.heroImageAlt)}
                className="h-full w-full object-cover"
                {...cp('homePageConfig.hero.decorativeImage')}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-5 z-[1] hidden aspect-[3/4] w-[7.5rem] overflow-hidden rounded-[4.5rem] shadow-lg ring-1 ring-black/5 sm:bottom-10 sm:left-8 sm:w-36 md:w-40 lg:bottom-12 lg:left-10 lg:block xl:bottom-14 xl:left-12 xl:w-44"
        aria-hidden
      >
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  );
}
