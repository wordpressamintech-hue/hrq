import { Router, useRouter } from './components/Router';
import { AuthProvider } from './hooks/useAuth';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { InsightsPage } from './pages/InsightsPage';
import { CareerPage } from './pages/CareerPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { AdminPanel } from './components/AdminPanel';
import { Toaster } from './components/ui/sonner';

function AppContent() {
  const { currentPage } = useRouter();

  // Admin panel has its own layout, so render it separately
  if (currentPage === 'admin') {
    return <AdminPanel />;
  }

  return (
    <>
      <Header />
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'industries' && <IndustriesPage />}
        {currentPage === 'case-studies' && <CaseStudiesPage />}
        {currentPage === 'insights' && <InsightsPage />}
        {/* {currentPage === 'careers' && <CareerPage />} */}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'privacy' && <PrivacyPolicyPage />}
        {currentPage === 'terms' && <TermsOfServicePage />}
        {currentPage === 'cookies' && <CookiePolicyPage />}
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}