import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactPageBanner from '../sections/contact/ContactPageBanner';
import ContactIntroSection from '../sections/contact/ContactIntroSection';
import ContactMainSection from '../sections/contact/ContactMainSection';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPageBanner />
        <ContactIntroSection />
        <ContactMainSection />
      </main>
      <Footer />
    </>
  );
}
