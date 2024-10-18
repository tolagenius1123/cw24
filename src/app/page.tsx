import HeroSection from "@/components/landing-page/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<main className="h-auto w-full">
			<Navbar />
			<HeroSection />
		</main>
	);
}
