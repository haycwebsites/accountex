import { Navigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useHayc } from '../hayc/config-context';

export default function ServiceCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, config, cp } = useHayc();

  if (!slug) {
    return <Navigate to="/services" replace />;
  }

  const stub = config.servicesPageConfig.categoryStubs[slug];
  if (!stub) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Navbar />
      <main className="-mt-[var(--hayc-sticky-header-h)] bg-slate-50 pb-20 pt-[calc(var(--hayc-sticky-header-h)+5rem)] md:pb-28 md:pt-[calc(var(--hayc-sticky-header-h)+7rem)]">
        <div className="container mx-auto max-w-3xl px-4">
          <h1
            className="text-3xl font-bold text-slate-900 md:text-4xl"
            {...cp(`servicesPageConfig.categoryStubs.${slug}.title`)}
          >
            {t(stub.title)}
          </h1>
          <p
            className="mt-6 text-lg leading-relaxed text-slate-600"
            {...cp(`servicesPageConfig.categoryStubs.${slug}.body`)}
          >
            {t(stub.body)}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
