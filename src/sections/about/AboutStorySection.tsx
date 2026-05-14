import { useHayc } from '../../hayc/config-context';
import { AppLink } from '../../components/AppLink';

export default function AboutStorySection() {
  const { t, img, config, cp } = useHayc();
  const s = config.aboutPageConfig.story;

  return (
    <section className="about-area about-area-v3 py-24 md:py-40">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          <div className="img-holder w-full lg:w-1/2">
            <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
              <img
                src={img(s.image)}
                alt={t(s.imageAlt)}
                className="h-auto w-full object-cover"
                {...cp('aboutPageConfig.story.image')}
              />
            </div>
          </div>
          <div className="text-wrapper w-full lg:w-1/2">
            <div className="section-title mb-6">
              <span
                className="sub-title st-one mb-2 inline-block text-sm font-semibold tracking-wide normal-case text-blue-900"
                {...cp('aboutPageConfig.story.subTitle')}
              >
                {t(s.subTitle)}
              </span>
              <h2
                className="text-3xl font-bold text-slate-900 md:text-4xl"
                {...cp('aboutPageConfig.story.title')}
              >
                {t(s.title)}
              </h2>
            </div>
            {s.paragraphs.map((para, i) => (
              <p
                key={i}
                className="mb-4 leading-relaxed text-slate-600"
                {...cp(`aboutPageConfig.story.paragraphs.${i}`)}
              >
                {t(para)}
              </p>
            ))}
            <ul className="list-style-one mb-8 mt-6 list-none space-y-2 p-0">
              {s.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="relative pl-7 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-blue-900"
                  {...cp(`aboutPageConfig.story.bullets.${i}`)}
                >
                  {t(bullet)}
                </li>
              ))}
            </ul>
            <AppLink
              href={s.ctaHref}
              className="main-btn bordered-btn btn-blue arrow-btn inline-flex items-center rounded-md border-2 border-blue-900 px-8 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white"
              {...cp('aboutPageConfig.story.ctaLabel')}
            >
              {t(s.ctaLabel)}
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
