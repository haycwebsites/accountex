import { useHayc } from '../hayc/config-context';
import { AppLink } from '../components/AppLink';

export default function HomeCta() {
  const { t, img, config, cp } = useHayc();
  const c = config.homePageConfig.cta;
  const showSide = Boolean(c.sideImage?.trim());

  return (
    <section className="cta-area cta-area-v1 pt-24 md:pt-32">
      <div className="mx-auto max-w-[1450px] px-4">
        <div className="cta-wrapper dark-blue-bg relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-16 text-white md:px-12 md:py-20">
          {showSide && (
            <div className="cta-img pointer-events-none absolute right-0 top-0 hidden h-full w-2/5 lg:block">
              <img
                src={img(c.sideImage)}
                alt=""
                className="h-full w-full object-cover opacity-40"
                {...cp('homePageConfig.cta.sideImage')}
              />
            </div>
          )}
          <div className="relative z-10 max-w-3xl">
            <div className="section-title section-title-white mb-10">
              <span
                className="sub-title st-one mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-blue-200"
                {...cp('homePageConfig.cta.subTitle')}
              >
                {t(c.subTitle)}
              </span>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                <span {...cp('homePageConfig.cta.titlePrefix')}>{t(c.titlePrefix)}</span>
                <span className="fill-text text-amber-300" {...cp('homePageConfig.cta.titleWord1')}>
                  {t(c.titleWord1)}
                </span>
                <span {...cp('homePageConfig.cta.titleMiddle')}>{t(c.titleMiddle)}</span>
                <span className="fill-text text-amber-300" {...cp('homePageConfig.cta.titleWord2')}>
                  {t(c.titleWord2)}
                </span>
                <span {...cp('homePageConfig.cta.titleConjunction')}>{t(c.titleConjunction)}</span>
                <span className="fill-text text-amber-300" {...cp('homePageConfig.cta.titleWord3')}>
                  {t(c.titleWord3)}
                </span>
              </h2>
            </div>
            <AppLink
              href={c.ctaHref}
              className="main-btn bordered-btn btn-white arrow-btn inline-flex items-center rounded-md border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
              {...cp('homePageConfig.cta.ctaLabel')}
            >
              {t(c.ctaLabel)}
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
