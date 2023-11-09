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
      <div className="blur1 left-0 top-10   " />
      <div className="blur2 right-0 top-10   " />

      <Header />
      <Sidebar />
      <Hero />

      <Sponsors />
      <Services />
      <About />
      <Work />
      <Review />
      <Footer />
    </div>
  );
}
