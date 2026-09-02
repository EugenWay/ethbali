import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TickerBar from './components/TickerBar';
import AboutSection from './components/AboutSection';
import ScheduleSection from './components/ScheduleSection';
import SponsorsSection from './components/SponsorsSection';
import TicketsSection from './components/TicketsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const showSchedule = true;
  const showSponsors = true;

  return (
    <div className="font-space antialiased bg-slate-900 text-slate-900 selection:bg-rose-500 selection:text-white">
      <Header showSchedule={showSchedule} showSponsors={showSponsors} />
      <HeroSection />
      <TickerBar />
      <AboutSection />
      {showSchedule && <ScheduleSection />}
      {showSponsors && <SponsorsSection />}
      <TicketsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
