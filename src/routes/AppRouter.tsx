import AboutClinicPage from '../pages/AboutClinicPage';
import ExperienceEducationPage from '../pages/ExperienceEducationPage';
import ContactPage from '../pages/ContactPage';
import OverviewPage from '../pages/OverviewPage';
import PricingPage from '../pages/PricingPage';
import TeamMemberPage from '../pages/TeamMemberPage';
import ServicesPage from '../pages/ServicesPage';
import TeamPage from '../pages/TeamPage';

function AppRouter() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';

  if (normalizedPath === '/opyt-i-obrazovanie' || normalizedPath === '/experienta-educatie') {
    return <ExperienceEducationPage />;
  }

  if (normalizedPath === '/' || normalizedPath === '/overview') {
    return <OverviewPage />;
  }

  if (normalizedPath === '/o-klinike' || normalizedPath === '/despre-noi') {
    return <AboutClinicPage />;
  }

  if (normalizedPath === '/uslugi' || normalizedPath === '/servicii') {
    return <ServicesPage />;
  }

  if (normalizedPath === '/tarify' || normalizedPath === '/tarife') {
    return <PricingPage />;
  }

  if (normalizedPath.startsWith('/komanda/') || normalizedPath.startsWith('/echipa/')) {
    const slug = normalizedPath.split('/').filter(Boolean).slice(1).join('/');
    return <TeamMemberPage slug={decodeURIComponent(slug)} />;
  }

  if (normalizedPath === '/komanda' || normalizedPath === '/echipa') {
    return <TeamPage />;
  }

  if (normalizedPath === '/kontakty' || normalizedPath === '/contact') {
    return <ContactPage />;
  }

  return <OverviewPage />;
}

export default AppRouter;
