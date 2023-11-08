import About from '@/sections/About';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header'
import Sidebar from '@/sections/Header/Sidebar';
import Hero from '@/sections/Hero'
import Review from '@/sections/Reviews';
import Services from '@/sections/Services';
import Sponsors from '@/sections/Sponsors';
import Work from '@/sections/Work';

export default function Home() {
  return (
    <div className="h-full w-full  overflow-hidden   ">
      <Header />
      <Sidebar/>
      <Hero />
      <Sponsors/>
      <Services/>
      <About/>
      <Work/>
      <Review/>
      <Footer/>
    </div>
  );
}
