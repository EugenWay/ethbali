import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TickerBar from './components/TickerBar';
import AboutSection from './components/AboutSection';
import ScheduleSection from './components/ScheduleSection';
import SponsorsSection from './components/SponsorsSection';
import VenueSection from './components/VenueSection';
import TicketsSection from './components/TicketsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const showSchedule = false;
  const showSponsors = false;

  return (
    <div className="font-space antialiased bg-slate-900 text-slate-900 selection:bg-rose-500 selection:text-white">
      <Header showSchedule={showSchedule} showSponsors={showSponsors} />
      <HeroSection />
      <TickerBar />
      <AboutSection />
      {showSchedule && <ScheduleSection />}
      {showSponsors && <SponsorsSection />}
      <VenueSection />
      <TicketsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
