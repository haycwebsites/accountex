import { useHayc } from '../../hayc/config-context';
import { HomeCounterIcon } from '../HomeSectionIcons';

export default function ServicesPageStats() {
  const { t, config, cp } = useHayc();
  const c = config.servicesPageConfig.stats;

  return (
    <section className="counter-area counter-area-v1 relative z-[1] bg-white pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <span
            className="sub-title st-one mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-blue-900"
            {...cp('servicesPageConfig.stats.subTitle')}
          >
            {t(c.subTitle)}
          </span>
          <h2
            className="text-3xl font-bold text-slate-900 md:text-4xl"
            {...cp('servicesPageConfig.stats.title')}
          >
            {t(c.title)}
          </h2>
          <p
            className="mt-4 text-slate-600"
            {...cp('servicesPageConfig.stats.description')}
          >
            {t(c.description)}
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {c.items.map((item, i) => (
            <div
              key={i}
              className="counter-item flex flex-col items-center text-center"
            >
              <div className="icon mb-4">
                <HomeCounterIcon kind={item.icon} />
              </div>
              <div className="text">
                <h2 className="number text-4xl font-bold text-slate-900 md:text-5xl">
                  <span>{item.value}</span>+
                </h2>
                <p
                  className="mt-2 text-slate-600"
                  {...cp(`servicesPageConfig.stats.items.${i}.label`)}
                >
                  {t(item.label)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
