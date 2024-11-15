"use client";
import { useRouter } from "next/navigation";
import CustomButton from "../CustomButton";
import ServiceCard from "./ServiceCard";
import { ServiceLogo, ServiceWhiteLogo } from "@/assets/icons";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ServiceImage } from "@/assets/images";
import { motion } from "framer-motion";

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
			<motion.div
				id="services"
				className="w-full bg-white px-8 md:px-10 py-20"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={{
					hidden: { opacity: 0 },
					visible: { opacity: 1 },
				}}
				transition={{ duration: 0.5 }}
			>
				{/* Section Title and Description */}
				<motion.div
					className="w-full md:w-[60%] flex flex-col gap-5"
					initial={{ y: -20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-darkGrey font-bold text-2xl">
						Services
					</h1>
					<h1 className="text-darkGrey text-4xl md:text-5xl font-semibold">
						Comprehensive Recruitment Solutions for Healthcare
					</h1>
					<p className="text-darkGrey">
						Our recruitment services are designed to meet the unique
						needs of healthcare providers, ensuring we connect them
						with qualified professionals to enhance their operations
						and patient care.
					</p>
				</motion.div>

				{/* Service Cards */}
				<motion.div
					className="mt-10 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: 0.2,
							},
						},
					}}
				>
					{serviceList.map((service) => (
						<motion.div
							key={service.id}
							variants={{
								hidden: { opacity: 0, scale: 0.9 },
								visible: { opacity: 1, scale: 1 },
							}}
							transition={{ duration: 0.5 }}
						>
							<ServiceCard service={service} />
						</motion.div>
					))}
				</motion.div>

				{/* Buttons */}
				<div className="mt-10 md:mt-20 flex items-center gap-5">
					<motion.div
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
						<CustomButton
							btnTitle="Learn More"
							btnType="button"
							btnStyles="text-darkGrey font-semibold border-2 w-[134px] h-[48px] bg-transparent border-darkGrey cursor-pointer hover:bg-lightGrey hover:text-white hover:border-none"
							btnAction={() => router.push("/about")}
						/>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
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
								router.push(
									"https://forms.gle/Dnw8CD5NArR82mmU9"
								)
							}
						/>
					</motion.div>
				</div>
			</motion.div>

			<div className="bg-lightGrey px-8 md:px-10 py-20 flex flex-col md:flex-row items-center gap-20 text-white">
				{/* Advantages Section */}
				<motion.div
					className="w-full md:w-1/2"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1 },
					}}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-4xl md:text-5xl font-bold">
						Discover the advantages of partnering with CW24 for your
						health care recruitment needs
					</h1>
					<p className="mt-5 md:mt-8 text-lg">
						Our expertise in health and social care recruitment
						ensures you find the right talent quickly. With a vast
						network of professionals, we tailor our solutions to
						meet your specific needs.
					</p>
					<motion.div
						className="mt-5 md:mt-8 flex flex-col items-start gap-5"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: { staggerChildren: 0.1 },
							},
						}}
					>
						{[
							"Expertise in health and social care recruitment.",
							"Access to a wide network of professionals.",
							"Tailored recruitment solutions for your unique needs.",
							"24/7 on call service (free).",
							"Ability to fulfil last-minute requests at short notice.",
						].map((text, index) => (
							<motion.div
								key={index}
								className="flex items-center gap-3"
								variants={{
									hidden: { opacity: 0, y: 10 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.5 }}
							>
								<Image
									src={ServiceWhiteLogo}
									alt="service-logo"
								/>
								<p>{text}</p>
							</motion.div>
						))}
					</motion.div>
				</motion.div>

				<div className="w-full md:w-1/2 flex items-center justify-center">
					<Image src={ServiceImage} alt="service-image" />
				</div>
			</div>
		</>
	);
}
