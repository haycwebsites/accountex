import { useHayc } from '../../hayc/config-context';
import { AppLink } from '../../components/AppLink';
import type { ServicesTwoColumnTextConfig } from '../../config';

type BlockKey = 'whatWeDo' | 'invoicing';

export default function ServicesTwoColumnText({
  blockKey,
  className = '',
}: {
  blockKey: BlockKey;
  className?: string;
}) {
  const { t, img, config, cp } = useHayc();
  const b: ServicesTwoColumnTextConfig = config.servicesPageConfig[blockKey];
  const pfx = `servicesPageConfig.${blockKey}`;

  return (
    <section className={`fancy-text-block fancy-text-block-v2 py-20 md:py-28 ${className}`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="img-holder mb-0 w-full lg:w-1/2">
            <div className="img-holder overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
              <img
                src={img(b.image)}
                alt={t(b.imageAlt)}
                className="h-auto w-full object-cover"
                {...cp(`${pfx}.image`)}
              />
            </div>
          </div>
          <div className="text-wrapper w-full lg:w-1/2">
            <div className="section-title mb-6">
              <span
                className="sub-title st-one mb-2 inline-block text-sm font-semibold tracking-wide normal-case text-blue-900"
                {...cp(`${pfx}.subTitle`)}
              >
                {t(b.subTitle)}
              </span>
              <h2
                className="text-3xl font-bold text-slate-900 md:text-4xl"
                {...cp(`${pfx}.title`)}
              >
                {t(b.title)}
              </h2>
            </div>
            {b.paragraphs.map((para, i) => (
              <p
                key={i}
                className="mb-4 leading-relaxed text-slate-600 last:mb-6"
                {...cp(`${pfx}.paragraphs.${i}`)}
              >
                {t(para)}
              </p>
            ))}
            <AppLink
              href={b.ctaHref}
              className="main-btn arrow-btn mt-2 inline-flex items-center rounded-md bg-blue-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-950"
              {...cp(`${pfx}.ctaLabel`)}
            >
              {t(b.ctaLabel)}
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
