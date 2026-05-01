import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Spacer to allow scrolling to test sticky navbar */}
      <div className="h-[50vh] bg-background"></div>
    </main>
  );
}
