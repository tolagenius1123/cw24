import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing-page/Hero";
import Services from "@/components/landing-page/Services";
import Team from "@/components/landing-page/Team";
import Testimonials from "@/components/landing-page/Testimonials";

export default function Home() {
	return (
		<main className="h-auto w-full">
			<Navbar />
			<HeroSection />
			<Services />
			<Team />
			<Testimonials />
		</main>
	);
}
