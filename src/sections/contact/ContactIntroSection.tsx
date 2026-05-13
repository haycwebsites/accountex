import { useHayc } from '../../hayc/config-context';

export default function ContactIntroSection() {
  const { t, config, cp } = useHayc();
  const i = config.contactPageConfig.intro;

  return (
    <section className="contact-info-v1 pt-16 md:pt-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="max-w-xl">
          <div className="section-title mb-12 md:mb-16">
            <span
              className="sub-title st-one mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-blue-900"
              {...cp('contactPageConfig.intro.subTitle')}
            >
              {t(i.subTitle)}
            </span>
            <h2
              className="text-3xl font-bold text-slate-900 md:text-4xl"
              {...cp('contactPageConfig.intro.title')}
            >
              {t(i.title)}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
