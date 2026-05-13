import { useHayc } from '../../hayc/config-context';
import { ContactForm } from '../../components/ContactForm';
import { ContactEnvelopeIcon, ContactPhoneIcon } from './ContactIcons';

export default function ContactMainSection() {
  const { t, img, config, cp } = useHayc();
  const m = config.contactPageConfig.main;
  const mailto = `mailto:${m.emailAddress}`;

  return (
    <section className="contact-area contact-area-v1 pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:items-start">
          <div className="w-full lg:w-2/3">
            <div className="text-wrapper mb-0">
              <h2 className="text-2xl font-bold leading-snug text-slate-900 md:text-3xl lg:text-4xl">
                <span {...cp('contactPageConfig.main.headingPart1')}>{t(m.headingPart1)}</span>
                <span className="text-amber-700" {...cp('contactPageConfig.main.headingHighlight1')}>
                  {t(m.headingHighlight1)}
                </span>
                <span {...cp('contactPageConfig.main.headingPart2')}>{t(m.headingPart2)}</span>
                <span className="text-amber-700" {...cp('contactPageConfig.main.headingHighlight2')}>
                  {t(m.headingHighlight2)}
                </span>
                <span {...cp('contactPageConfig.main.headingPart3')}>{t(m.headingPart3)}</span>
              </h2>
              <p
                className="mt-6 max-w-2xl leading-relaxed text-slate-600"
                {...cp('contactPageConfig.main.introParagraph')}
              >
                {t(m.introParagraph)}
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div className="information-style-one">
                  <div className="icon mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <ContactEnvelopeIcon className="h-5 w-5 shrink-0 text-blue-900" />
                    <span {...cp('contactPageConfig.main.emailBlockTitle')}>{t(m.emailBlockTitle)}</span>
                  </div>
                  <div className="info">
                    <p className="m-0">
                      <a
                        href={mailto}
                        className="text-blue-900 underline-offset-2 hover:underline"
                        {...cp('contactPageConfig.main.emailAddress')}
                      >
                        {m.emailAddress}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="information-style-one">
                  <div className="icon mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <ContactPhoneIcon className="h-5 w-5 shrink-0 text-blue-900" />
                    <span {...cp('contactPageConfig.main.phoneBlockTitle')}>{t(m.phoneBlockTitle)}</span>
                  </div>
                  <div className="info">
                    <h4 className="m-0 text-lg font-semibold">
                      <a
                        href={`tel:${m.phoneTel.replace(/\s/g, '')}`}
                        className="text-slate-900 hover:text-blue-900"
                        {...cp('contactPageConfig.main.phoneDisplay')}
                      >
                        {m.phoneDisplay}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="contact-form mt-10 max-w-xl">
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="w-full shrink-0 lg:w-1/3">
            <div className="img-holder relative overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
              <img
                src={img(m.sideImage)}
                alt={t(m.sideImageAlt)}
                className="h-auto w-full object-cover"
                {...cp('contactPageConfig.main.sideImage')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
