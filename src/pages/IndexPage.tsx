import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeHero from '../sections/HomeHero';
import HomeAbout from '../sections/HomeAbout';
import HomeEducation from '../sections/HomeEducation';
import HomeServices from '../sections/HomeServices';
import HomeCta from '../sections/HomeCta';
import HomeCounters from '../sections/HomeCounters';
import HomeBlog from '../sections/HomeBlog';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <HomeAbout />
        <HomeEducation />
        <HomeServices />
        <HomeCta />
        <HomeCounters />
        <HomeBlog />
        <div id="faq" className="sr-only" aria-hidden>
          FAQ
        </div>
        <div id="newsletter" className="sr-only" aria-hidden>
          Newsletter
        </div>
      </main>
      <Footer />
    </>
  );
}
