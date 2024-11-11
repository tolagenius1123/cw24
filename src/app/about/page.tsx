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
				className="pt-20 w-full h-[80vh] md:h-[90vh] px-10 text-paleYellow flex justify-around items-center"
			>
				<div className="flex flex-col gap-5 text-center md:w-[80%]">
					<h1 className="text-3xl md:text-5xl font-bold">
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
			<div className="bg-white px-10 py-20 flex flex-col md:flex-row items-center gap-10 md:gap-20 text-darkGrey">
				<div className="w-full md:w-1/2">
					<h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
					<p className="mt-5 md:mt-8 text-[15px] md:text-lg">
						CW24 is a dedicated healthcare recruitment agency that
						provides high-quality staffing solutions across the UK.
						We specialize in placing{" "}
						<span className="font-semibold">
							Healthcare Assistants
						</span>
						, <span className="font-semibold">Support Workers</span>
						, <span className="font-semibold">Chefs</span>,{" "}
						<span className="font-semibold">
							Domestic/Kitchen Assistants
						</span>{" "}
						to <span className="font-semibold">nursing homes</span>,{" "}
						<span className="font-semibold">residential homes</span>{" "}
						and{" "}
						<span className="font-semibold">
							learning disability establishments
						</span>
						, offering both temporary and permanent roles. Led by a
						team of experienced directors with decades of expertise
						in healthcare and recruitment, CW24 ensures that our
						clients have access to skilled and reliable
						professionals. Our strong focus on recruitment
						excellence, compliance, and customer satisfaction sets
						us apart in the industry.
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
			<div className="bg-lightGrey text-white px-10 py-20 flex flex-col md:flex-row items-center gap-10 md:gap-20">
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
					<p className="mt-5 md:mt-8 text-[15px] md:text-lg">
						At CW24, our mission is to improve the quality of care
						provided in the healthcare sector by delivering
						top-notch recruitment services. We aim to be the go-to
						provider for healthcare staffing, known for reliability,
						professionalism, and a deep understanding of the sectors
						needs.
					</p>
				</div>
			</div>
			<div className="bg-white text-darkGrey px-10 py-20 flex flex-col md:flex-row items-center gap-10 md:gap-20">
				<div className="w-full md:w-1/2">
					<h1 className="text-4xl md:text-5xl font-bold">Careers</h1>
					{/* <p className="mt-5 md:mt-8 text-[15px] md:text-lg">
						At CW24, we are always on the lookout for skilled
						healthcare professionals to join our growing team.
						Whether youre looking for temporary or permanent
						positions, we provide exciting career opportunities in
						various healthcare settings.{" "}
						<a
							href="https://forms.gle/N6uMEQNFr7ibosG89"
							target="_blank"
							className="text-blue-700 underline"
						>
							Apply today
						</a>{" "}
						or register your interest by contacting us at{" "}
						<a
							href="/"
							target="_blank"
							className="text-blue-700 underline"
						>
							info@cw24.co.uk.
						</a>{" "}
					</p> */}
					<p className="mt-5 md:mt-8 text-[15px] md:text-lg">
						At CW24, we are always on the lookout for skilled
						healthcare professionals to join our growing team.
						Whether you&apos;re looking for temporary or permanent
						positions, we provide exciting career opportunities in
						various healthcare settings.{" "}
						<a
							href="https://forms.gle/Dnw8CD5NArR82mmU9"
							target="_blank"
							className="text-blue-700 underline"
						>
							Apply today
						</a>{" "}
						or register your interest by contacting us at{" "}
						<a
							href="mailto:info@cw24.co.uk"
							target="_blank"
							className="text-blue-700 underline"
						>
							info@cw24.co.uk.
						</a>{" "}
						<br />
						We also offer{" "}
						<span className="font-semibold">
							comprehensive mandatory training
						</span>{" "}
						that is fully compliant with the Skills for{" "}
						<span className="font-semibold">
							Care Certificate standards
						</span>
						, providing confidence to both our staff and clients.
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
				<div className="md:w-[80%] mx-auto flex flex-col items-center gap-5">
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
