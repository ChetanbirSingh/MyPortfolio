import HeroSection from '@/components/sections/HeroSection';
import Stats from '@/components/sections/Stats';
import Inventory from '@/components/sections/Inventory';
import TrainingLog from '@/components/sections/TrainingLog';
import SideQuests from '@/components/sections/SideQuests';
import ContactSection from '@/components/sections/Contact';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Stats />
      <Inventory />
      <SideQuests />
      <TrainingLog />
      <ContactSection />
    </main>
  );
}
