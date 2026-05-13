import { useHayc } from '../../hayc/config-context';
import { AppLink } from '../../components/AppLink';

export default function AboutGoalSection() {
  const { t, img, config, cp } = useHayc();
  const g = config.aboutPageConfig.goal;

  return (
    <section className="fancy-text-block fancy-text-block-v1 relative z-[1] scroll-mt-8 bg-slate-100 pb-20 pt-32 md:pb-24 md:pt-40">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
          <div className="text-wrapper mb-0 w-full lg:w-1/2">
            <div className="section-title mb-6">
              <span
                className="sub-title st-one mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-blue-900"
                {...cp('aboutPageConfig.goal.subTitle')}
              >
                {t(g.subTitle)}
              </span>
              <h2
                className="text-3xl font-bold text-slate-900 md:text-4xl"
                {...cp('aboutPageConfig.goal.title')}
              >
                {t(g.title)}
              </h2>
              <p
                className="blue-dark mt-3 font-medium text-blue-900"
                {...cp('aboutPageConfig.goal.lead')}
              >
                {t(g.lead)}
              </p>
            </div>
            {g.paragraphs.map((para, i) => (
              <p
                key={i}
                className="mb-4 leading-relaxed text-slate-600 last:mb-6"
                {...cp(`aboutPageConfig.goal.paragraphs.${i}`)}
              >
                {t(para)}
              </p>
            ))}
            <AppLink
              href={g.ctaHref}
              className="main-btn arrow-btn mt-2 inline-flex items-center rounded-md bg-blue-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-950"
              {...cp('aboutPageConfig.goal.ctaLabel')}
            >
              {t(g.ctaLabel)}
            </AppLink>
          </div>
          <div className="img-holder relative z-[1] w-full lg:w-1/2">
            <div className="shape shape-two pointer-events-none absolute -right-4 -top-6 z-[2] w-24 opacity-90 md:w-32">
              <img
                src={img(g.shapeImage)}
                alt={t(g.shapeImageAlt)}
                className="h-auto w-full"
                {...cp('aboutPageConfig.goal.shapeImage')}
              />
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
              <img
                src={img(g.mainImage)}
                alt={t(g.mainImageAlt)}
                className="h-auto w-full object-cover"
                {...cp('aboutPageConfig.goal.mainImage')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
