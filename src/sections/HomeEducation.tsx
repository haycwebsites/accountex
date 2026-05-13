import { useHayc } from '../hayc/config-context';
import { AppLink } from '../components/AppLink';

export default function HomeEducation() {
  const { t, img, config, cp } = useHayc();
  const e = config.homePageConfig.education;

  return (
    <section className="courses-area scroll-mt-20 pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span
            className="sub-title st-one mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-blue-900"
            {...cp('homePageConfig.education.subTitle')}
          >
            {t(e.subTitle)}
          </span>
          <h2
            className="text-3xl font-bold text-slate-900 md:text-4xl"
            {...cp('homePageConfig.education.title')}
          >
            {t(e.title)}
          </h2>
          <p
            className="mt-4 text-slate-600"
            {...cp('homePageConfig.education.description')}
          >
            {t(e.description)}
          </p>
        </div>
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8">
          {e.courses.map((course, i) => (
            <div
              key={i}
              className="course-card flex w-full max-w-md flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm min-[600px]:w-[calc(50%-1rem)]"
            >
              <div className="course-card__img aspect-[3/2] overflow-hidden">
                <img
                  src={img(course.image)}
                  alt={t(course.title)}
                  className="h-full w-full object-cover"
                  {...cp(`homePageConfig.education.courses.${i}.image`)}
                />
              </div>
              <div className="course-card__body flex flex-1 flex-col p-6">
                <h3
                  className="course-card__title mt-1 text-xl font-bold text-slate-900"
                  {...cp(`homePageConfig.education.courses.${i}.title`)}
                >
                  {t(course.title)}
                </h3>
                <p
                  className="course-card__desc mt-2 flex-1 text-sm leading-relaxed text-slate-600"
                  {...cp(`homePageConfig.education.courses.${i}.description`)}
                >
                  {t(course.description)}
                </p>
                <ul className="course-card__meta mt-4 flex list-none flex-wrap gap-4 p-0 text-sm text-slate-500">
                  <li {...cp(`homePageConfig.education.courses.${i}.durationLabel`)}>
                    {t(course.durationLabel)}
                  </li>
                  <li {...cp(`homePageConfig.education.courses.${i}.lessonsLabel`)}>
                    {t(course.lessonsLabel)}
                  </li>
                </ul>
              </div>
              <div className="course-card__footer border-t border-slate-100 p-6 pt-0">
                <AppLink
                  href={course.buyHref}
                  className="btn2 hayc-buy-btn-guest w-full text-center"
                  {...cp(`homePageConfig.education.courses.${i}.buyLabel`)}
                >
                  {t(course.buyLabel)}
                </AppLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
