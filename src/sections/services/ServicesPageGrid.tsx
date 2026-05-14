import { useHayc } from '../../hayc/config-context';
import { AppLink } from '../../components/AppLink';
import { HomeServiceIcon } from '../HomeSectionIcons';

export default function ServicesPageGrid() {
  const { t, config, cp } = useHayc();
  const s = config.servicesPageConfig.serviceGrid;

  return (
    <section className="service-area service-area-v1 relative z-[2] -mb-24 bg-white pb-12 pt-4 md:-mb-32 md:pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span
            className="sub-title st-one mb-2 inline-block text-sm font-semibold tracking-wide normal-case text-blue-900"
            {...cp('servicesPageConfig.serviceGrid.subTitle')}
          >
            {t(s.subTitle)}
          </span>
          <h2
            className="text-3xl font-bold text-slate-900 md:text-4xl"
            {...cp('servicesPageConfig.serviceGrid.title')}
          >
            {t(s.title)}
          </h2>
          <p
            className="mt-4 text-slate-600"
            {...cp('servicesPageConfig.serviceGrid.description')}
          >
            {t(s.description)}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => (
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
                    {...cp(`servicesPageConfig.serviceGrid.items.${i}.title`)}
                  >
                    {t(item.title)}
                  </AppLink>
                </h3>
                <ul className="list-style-two mt-4 list-none space-y-2 p-0 text-slate-600">
                  {item.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-blue-900"
                      {...cp(`servicesPageConfig.serviceGrid.items.${i}.bullets.${j}`)}
                    >
                      {t(bullet)}
                    </li>
                  ))}
                </ul>
                <AppLink
                  href={item.learnMoreHref}
                  className="btn-link mt-6 inline-flex text-sm font-semibold text-blue-900 hover:underline"
                  {...cp(`servicesPageConfig.serviceGrid.items.${i}.learnMoreLabel`)}
                >
                  {t(item.learnMoreLabel)}
                </AppLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
