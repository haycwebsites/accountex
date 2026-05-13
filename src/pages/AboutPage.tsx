import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutPageBanner from '../sections/about/AboutPageBanner';
import AboutStorySection from '../sections/about/AboutStorySection';
import AboutHighlightsSection from '../sections/about/AboutHighlightsSection';
import AboutGoalSection from '../sections/about/AboutGoalSection';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPageBanner />
        <AboutStorySection />
        <AboutHighlightsSection />
        <AboutGoalSection />
      </main>
      <Footer />
    </>
  );
}
