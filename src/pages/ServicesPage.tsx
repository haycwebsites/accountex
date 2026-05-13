import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesPageBanner from '../sections/services/ServicesPageBanner';
import ServicesTwoColumnText from '../sections/services/ServicesTwoColumnText';
import ServicesPageGrid from '../sections/services/ServicesPageGrid';
import ServicesOurGoal from '../sections/services/ServicesOurGoal';
import ServicesPageStats from '../sections/services/ServicesPageStats';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPageBanner />
        <ServicesTwoColumnText blockKey="whatWeDo" />
        <ServicesPageGrid />
        <ServicesOurGoal />
        <ServicesPageStats />
        <ServicesTwoColumnText blockKey="invoicing" className="bg-white" />
      </main>
      <Footer />
    </>
  );
}
