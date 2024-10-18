import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing-page/Hero";
import Services from "@/components/landing-page/Services";

export default function Home() {
	return (
		<main className="h-auto w-full">
			<Navbar />
			<HeroSection />
			<Services />
		</main>
	);
}
