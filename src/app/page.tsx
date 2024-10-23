import Navbar from "@/components/Navbar";
import Contact from "@/components/landing-page/Contact";
import FAQs from "@/components/landing-page/FAQs";
import Footer from "@/components/landing-page/Footer";
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
			<FAQs />
			<Contact />
			<Footer />
		</main>
	);
}
