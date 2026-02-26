import ExperienceEducationPage from '../pages/ExperienceEducationPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import OverviewPage from '../pages/OverviewPage';
import PricingPage from '../pages/PricingPage';
import ServicesPage from '../pages/ServicesPage';
import TeamPage from '../pages/TeamPage';

function AppRouter() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';

  if (normalizedPath === '/opyt-i-obrazovanie' || normalizedPath === '/experienta-educatie') {
    return <ExperienceEducationPage />;
  }

  if (normalizedPath === '/overview') {
    return <OverviewPage />;
  }

  if (normalizedPath === '/servicii') {
    return <ServicesPage />;
  }

  if (normalizedPath === '/tarife') {
    return <PricingPage />;
  }

  if (normalizedPath === '/echipa') {
    return <TeamPage />;
  }

  if (normalizedPath === '/contact') {
    return <ContactPage />;
  }

  return <HomePage />;
}

export default AppRouter;
