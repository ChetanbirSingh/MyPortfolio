import HeroSection from '@/components/HeroSection';
import Stats from '@/components/Stats';
import Inventory from '@/components/Inventory';
import TrainingLog from '@/components/TrainingLog';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Stats />
      <Inventory />
      <TrainingLog />
    </main>
  );
}
