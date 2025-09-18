import { Router, useRouter } from "./components/Router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";
import { InsightsPage } from "./pages/InsightsPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";
import { Toaster } from "./components/ui/sonner";
import { useEffect } from 'react';

function AppContent() {
  const { currentPage } = useRouter();

  // Scroll to top on any page refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "services" && <ServicesPage />}
        {currentPage === "industries" && <IndustriesPage />}
        {currentPage === "case-studies" && <CaseStudiesPage />}
        {currentPage === "insights" && <InsightsPage />}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "privacy" && <PrivacyPolicyPage />}
        {currentPage === "terms" && <TermsOfServicePage />}
        {currentPage === "cookies" && <CookiePolicyPage />}
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}