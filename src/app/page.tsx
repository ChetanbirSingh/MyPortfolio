import HeroSection from '@/components/HeroSection';
import Stats from '@/components/Stats';
import Inventory from '@/components/Inventory';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Stats />
      <Inventory />
    </main>
  );
}
