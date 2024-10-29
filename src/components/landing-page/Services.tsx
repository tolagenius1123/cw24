"use client";
import { useRouter } from "next/navigation";
import CustomButton from "../CustomButton";
import ServiceCard from "./ServiceCard";
import { ServiceLogo, ServiceWhiteLogo } from "@/assets/icons";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ServiceImage } from "@/assets/images";

export default function Services() {
	const router = useRouter();

	const serviceList = [
		{
			id: 1,
			image: ServiceLogo,
			title: "Temporary Staffing Solutions",
			description:
				"Access skilled healthcare professionals on short notice to fill gaps in your workforce.",
		},
		{
			id: 2,
			image: ServiceLogo,
			title: "Permanent Placement for Long-Term Success",
			description:
				"access skilled healthcare workers and registered nurses",
		},
		{
			id: 3,
			image: ServiceLogo,
			title: "Specialized Healthcare Recruitment",
			description:
				"Special recruitment for Mental Health, Elderly Care, Disability Support, etc",
		},
	];

	return (
		<>
			<div id="services" className="w-full bg-white px-10 py-20">
				<div className="w-full md:w-[60%] flex flex-col gap-5">
					<h1 className="text-customRed font-bold text-2xl">
						Services
					</h1>
					<h1 className="text-darkGrey text-4xl md:text-5xl font-semibold">
						Comprehensive Recruitment Solutions for Healthcare
					</h1>
					<p className="text-customRed">
						Our recruitment services are designed to meet the unique
						needs of healthcare providers, ensuring we connect them
						with qualified professionals to enhance their operations
						and patient care.
					</p>
				</div>
				<div className="mt-10 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
					{serviceList.map((service) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>
				<div className="mt-10 md:mt-20 flex items-center gap-5">
					<CustomButton
						btnTitle="Learn More"
						btnType="button"
						btnStyles="text-darkGrey font-semibold border-2 w-[134px] h-[48px] bg-transparent border-darkGrey cursor-pointer hover:bg-lightGrey hover:text-white hover:border-none"
						btnAction={() => router.push("/about")}
					/>
					<CustomButton
						btnTitle={
							<div className="flex items-center gap-2 text-darkGrey">
								Sign Up
								<ArrowRight className="animate-arrow text-darkGrey" />
							</div>
						}
						btnType="button"
						btnStyles="text-darkGrey font-semibold w-[134px] h-[48px] bg-transparent border-darkGrey cursor-pointer"
						btnAction={() =>
							router.push("https://forms.gle/Dnw8CD5NArR82mmU9")
						}
					/>
				</div>
			</div>
			<div className="bg-lightGrey px-10 py-20 flex flex-col md:flex-row items-center gap-20 text-white">
				<div className="w-full md:w-1/2">
					<h1 className="text-4xl md:text-5xl font-bold">
						Discover the advantages of partnering with CW24 for your
						health care recruitment needs
					</h1>
					<p className="mt-5 md:mt-8 text-lg">
						Our expertise in health and social care recruitment
						ensures you find the right talent quickly. With a vast
						network of professionals, we tailor our solutions to
						meet your specific needs
					</p>
					<div className="mt-5 md:mt-8 flex flex-col items-start gap-5">
						<div className="flex items-center gap-3">
							<Image src={ServiceWhiteLogo} alt="hero-image" />
							<p className="">
								Expertise in health and social care recruitment.
							</p>
						</div>
						<div className="flex items-center gap-3">
							<Image src={ServiceWhiteLogo} alt="hero-image" />
							<p className="">
								Access to a wide network of professionals.
							</p>
						</div>
						<div className="flex items-center gap-3">
							<Image src={ServiceWhiteLogo} alt="hero-image" />
							<p className="">
								Tailored recruitment solutions for your unique
								needs.
							</p>
						</div>
						<div className="flex items-center gap-3">
							<Image src={ServiceWhiteLogo} alt="hero-image" />
							<p className="">24/7 on call service (free).</p>
						</div>
						<div className="flex items-center gap-3">
							<Image src={ServiceWhiteLogo} alt="hero-image" />
							<p className="">
								Ability to fulfil last-minute requests at short
								notice.
							</p>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<Image src={ServiceImage} alt="service-image" />
				</div>
			</div>
		</>
	);
}
