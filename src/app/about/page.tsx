import Navbar from "@/components/Navbar";
import "../globals.css";
import Image from "next/image";
import { About01, About02, About03, AboutBanner } from "@/assets/images";
import Footer from "@/components/landing-page/Footer";

export default function AboutPage() {
	return (
		<>
			<Navbar />
			<div
				id="about"
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${AboutBanner.src})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
				className="py-10 w-full h-[90vh] px-10 text-paleYellow flex justify-around items-center"
			>
				<div className="flex flex-col gap-5 text-center w-[80%]">
					<h1 className="text-2xl md:text-5xl font-bold">
						Empowering Your Healthcare Career
					</h1>
					<p className="text-lg md:text-xl font-semibold">
						At our health and social care recruitment website, we
						are dedicated to connecting top-tier healthcare
						professionals with rewarding opportunities that align
						with their expertise and passions
					</p>
				</div>
			</div>
			<div className="bg-paleYellow px-10 py-20 flex flex-col md:flex-row items-center gap-20">
				<div className="w-full md:w-1/2">
					<h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
					<p className="mt-5 md:mt-8 text-lg text-customRed">
						CW24 is a healthcare recruitment agency dedicated to
						providing high-quality staffing solutions for healthcare
						providers across the UK. We specialize in temporary and
						permanent placements, ensuring that our clients have
						access to highly skilled and reliable healthcare
						professionals. CW24 is led by a team of very experienced
						directors with decades of experience delivering
						high-quality services in the healthcare and recruitment
						sectors. Our commitment to excellence in recruitment,
						compliance, and customer satisfaction sets us apart.
					</p>
				</div>
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<Image
						src={About01}
						alt="service-image"
						className="rounded-[20px]"
					/>
				</div>
			</div>
			<div className="bg-lightGrey text-white px-10 py-20 flex flex-col md:flex-row items-center gap-20">
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<Image
						src={About02}
						alt="service-image"
						className="rounded-[20px]"
					/>
				</div>
				<div className="w-full md:w-1/2">
					<h1 className="text-4xl md:text-5xl font-bold">
						Mission and Vision
					</h1>
					<p className="mt-5 md:mt-8 text-lg">
						At CW24, our mission is to improve the quality of care
						provided in the healthcare sector by delivering
						top-notch recruitment services. We aim to be the go-to
						provider for healthcare staffing, known for reliability,
						professionalism, and a deep understanding of the sectors
						needs.
					</p>
				</div>
			</div>
			<div className="bg-white text-black px-10 py-20 flex flex-col md:flex-row items-center gap-20">
				<div className="w-full md:w-1/2">
					<h1 className="text-4xl md:text-5xl font-bold">Careers</h1>
					<p className="mt-5 md:mt-8 text-lg text-customRed">
						At CW24, we are always on the lookout for skilled
						healthcare professionals to join our growing team.
						Whether youre looking for temporary or permanent
						positions, we provide exciting career opportunities in
						various healthcare settings. Apply today or register
						your interest by contacting us at info@cw24.co.uk.
					</p>
				</div>
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<Image
						src={About03}
						alt="service-image"
						className="rounded-[20px]"
					/>
				</div>
			</div>
			<div className="w-full bg-lightGrey px-10 py-20 text-white text-center">
				<div className="w-[80%] mx-auto flex flex-col items-center gap-5">
					<h1 className="text-3xl md:text-4xl font-semibold">
						Compliance and Standards
					</h1>
					<p>
						We comply with the regulations of the Care Quality
						Commission (CQC) and other relevant authorities to
						ensure that our recruitment processes meet the highest
						standards of care and safety. Quality and compliance are
						at the core of our services, guaranteeing peace of mind
						for both our clients and candidates
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}
