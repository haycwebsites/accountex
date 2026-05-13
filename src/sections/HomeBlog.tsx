import { useHayc } from '../hayc/config-context';
import { AppLink } from '../components/AppLink';

export default function HomeBlog() {
  const { t, img, config, cp } = useHayc();
  const b = config.homePageConfig.blog;

  return (
    <section className="blog-area blog-area-v1 scroll-mt-20 bg-slate-100 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <span
            className="sub-title st-one mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-blue-900"
            {...cp('homePageConfig.blog.subTitle')}
          >
            {t(b.subTitle)}
          </span>
          <h2
            className="text-3xl font-bold text-slate-900 md:text-4xl"
            {...cp('homePageConfig.blog.title')}
          >
            {t(b.title)}
          </h2>
          <p
            className="mt-4 text-slate-600"
            {...cp('homePageConfig.blog.description')}
          >
            {t(b.description)}
          </p>
        </div>
        <div className="lc-block">
          <div className="row mb-4 grid gap-8 md:grid-cols-3">
            {b.posts.map((post, i) => (
              <div key={i} className="col-md-4">
                <AppLink
                  href={post.href}
                  className="text-decoration-none group block text-inherit no-underline"
                >
                  <div className="row g-3 flex flex-col gap-3">
                    <div className="col-12 overflow-hidden rounded-lg">
                      <img
                        loading="lazy"
                        src={img(post.image)}
                        alt={t(post.imageAlt)}
                        className="img-fluid aspect-[4/3] w-full object-cover transition group-hover:scale-[1.02]"
                        {...cp(`homePageConfig.blog.posts.${i}.image`)}
                      />
                    </div>
                    <div className="col-12">
                      <h3
                        className="fw-bold h5 text-lg font-bold text-slate-900 group-hover:text-blue-900"
                        {...cp(`homePageConfig.blog.posts.${i}.title`)}
                      >
                        {t(post.title)}
                      </h3>
                    </div>
                  </div>
                </AppLink>
              </div>
            ))}
          </div>
        </div>
        <div className="button-box mt-12 text-center">
          <AppLink
            href={b.viewMoreHref}
            className="main-btn arrow-btn inline-flex items-center rounded-md bg-blue-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-950"
            {...cp('homePageConfig.blog.viewMoreLabel')}
          >
            {t(b.viewMoreLabel)}
          </AppLink>
        </div>
      </div>
    </section>
  );
}
