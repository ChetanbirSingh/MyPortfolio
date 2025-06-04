import HeroSection from '@/components/HeroSection';
import Stats from '@/components/Stats';
import Inventory from '@/components/Inventory';
import TrainingLog from '@/components/TrainingLog';
import SideQuests from '@/components/SideQuests';
import ContactSection from '@/components/Contact';
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
