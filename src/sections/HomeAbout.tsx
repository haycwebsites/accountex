import { useHayc } from '../hayc/config-context';
import { AppLink } from '../components/AppLink';

export default function HomeAbout() {
  const { t, img, config, cp } = useHayc();
  const a = config.homePageConfig.about;

  return (
    <section className="about-area about-area-v1 relative scroll-mt-20 pt-24 md:pt-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="img-holder-box w-full shrink-0 lg:w-1/2">
            <div className="img-holder overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
              <img
                src={img(a.image)}
                alt={t(a.imageAlt)}
                className="h-auto w-full object-cover"
                {...cp('homePageConfig.about.image')}
              />
            </div>
          </div>
          <div className="text-wrapper w-full lg:w-1/2">
            <div className="section-title mb-4">
              <span
                className="sub-title st-one mb-2 inline-block text-sm font-semibold tracking-wide normal-case text-blue-900"
                {...cp('homePageConfig.about.subTitle')}
              >
                {t(a.subTitle)}
              </span>
              <h2
                className="text-3xl font-bold text-slate-900 md:text-4xl"
                {...cp('homePageConfig.about.title')}
              >
                {t(a.title)}
              </h2>
            </div>
            <h4
              className="mb-4 text-xl font-semibold text-slate-800"
              {...cp('homePageConfig.about.lead')}
            >
              {t(a.lead)}
            </h4>
            <p
              className="mb-6 leading-relaxed text-slate-600"
              {...cp('homePageConfig.about.body')}
            >
              {t(a.body)}
            </p>
            <ul className="list-style-one mb-8 list-none space-y-2 pl-0">
              {a.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="relative pl-7 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-blue-900"
                  {...cp(`homePageConfig.about.bullets.${i}`)}
                >
                  {t(bullet)}
                </li>
              ))}
            </ul>
            <AppLink
              href={a.ctaHref}
              className="main-btn bordered-btn btn-blue arrow-btn inline-flex items-center rounded-md border-2 border-blue-900 px-8 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white"
              {...cp('homePageConfig.about.ctaLabel')}
            >
              {t(a.ctaLabel)}
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
