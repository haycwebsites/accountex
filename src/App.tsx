import { BrowserRouter, Routes, Route, Navigate }
  from 'react-router-dom';
import { HaycProvider } from './hayc/config-context';
import ScrollToTop from './components/ScrollToTop';
import IndexPage from './pages/IndexPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ServiceCategoryPage from './pages/ServiceCategoryPage';
import AboutPage from './pages/AboutPage';
// HAYC Pipeline: Additional page imports are added
// here automatically during project creation.

function App() {
  return (
    <HaycProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceCategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* HAYC Pipeline: Additional routes are
              added here during project creation. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HaycProvider>
  );
}

export default App;
