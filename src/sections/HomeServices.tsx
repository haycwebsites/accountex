import { useHayc } from '../hayc/config-context';
import { AppLink } from '../components/AppLink';
import { HomeServiceIcon } from './HomeSectionIcons';

export default function HomeServices() {
  const { t, config, cp } = useHayc();
  const s = config.homePageConfig.services;

  return (
    <section className="service-area scroll-mt-20 pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span
            className="sub-title st-one mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-blue-900"
            {...cp('homePageConfig.services.subTitle')}
          >
            {t(s.subTitle)}
          </span>
          <h2
            className="text-3xl font-bold text-slate-900 md:text-4xl"
            {...cp('homePageConfig.services.title')}
          >
            {t(s.title)}
          </h2>
          <p
            className="mt-4 text-slate-600"
            {...cp('homePageConfig.services.description')}
          >
            {t(s.description)}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => (
            <div
              key={i}
              className="service-item service-style-one flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="icon mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-slate-100">
                <HomeServiceIcon kind={item.icon} />
              </div>
              <div className="text flex flex-1 flex-col">
                <h3 className="title text-lg font-bold text-slate-900">
                  <AppLink
                    href={item.titleHref}
                    className="hover:text-blue-900"
                    {...cp(`homePageConfig.services.items.${i}.title`)}
                  >
                    {t(item.title)}
                  </AppLink>
                </h3>
                <ul className="list-style-two mt-4 list-none space-y-2 p-0 text-slate-600">
                  {item.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-blue-900"
                      {...cp(`homePageConfig.services.items.${i}.bullets.${j}`)}
                    >
                      {t(b)}
                    </li>
                  ))}
                </ul>
                <AppLink
                  href={item.readMoreHref}
                  className="btn-link mt-6 inline-flex text-sm font-semibold text-blue-900 hover:underline"
                  {...cp(`homePageConfig.services.items.${i}.readMoreLabel`)}
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
