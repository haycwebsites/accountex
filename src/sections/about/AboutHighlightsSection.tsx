import { useHayc } from '../../hayc/config-context';
import { AppLink } from '../../components/AppLink';
import { HomeServiceIcon } from '../HomeSectionIcons';

export default function AboutHighlightsSection() {
  const { t, config, cp } = useHayc();
  const h = config.aboutPageConfig.highlights;

  return (
    <section className="service-area relative z-[2] -mb-24 bg-white pb-12 pt-4 md:-mb-32 md:pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span
            className="sub-title st-one mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-blue-900"
            {...cp('aboutPageConfig.highlights.subTitle')}
          >
            {t(h.subTitle)}
          </span>
          <h2
            className="text-3xl font-bold text-slate-900 md:text-4xl"
            {...cp('aboutPageConfig.highlights.title')}
          >
            {t(h.title)}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {h.items.map((item, i) => (
            <div
              key={i}
              className="service-item service-style-three flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="icon mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-slate-100">
                <HomeServiceIcon kind={item.icon} />
              </div>
              <div className="text flex flex-1 flex-col">
                <h3 className="title text-lg font-bold text-slate-900">
                  <AppLink
                    href={item.titleHref}
                    className="hover:text-blue-900"
                    {...cp(`aboutPageConfig.highlights.items.${i}.title`)}
                  >
                    {t(item.title)}
                  </AppLink>
                </h3>
                <p
                  className="mt-3 flex-1 text-sm leading-relaxed text-slate-600"
                  {...cp(`aboutPageConfig.highlights.items.${i}.description`)}
                >
                  {t(item.description)}
                </p>
                <AppLink
                  href={item.readMoreHref}
                  className="btn-link mt-6 inline-flex text-sm font-semibold text-blue-900 hover:underline"
                  {...cp(`aboutPageConfig.highlights.items.${i}.readMoreLabel`)}
                >
                  {t(item.readMoreLabel)}
                </AppLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
