import Hero from '@/components/Hero';
import MemeGallery from '@/components/MemeGallery';
import ComicViewer from '@/components/ComicViewer';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <MemeGallery />
      <ComicViewer />
      <Footer />
    </main>
  );
}
