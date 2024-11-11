"use client";
import { useRouter } from "next/navigation";
import CustomButton from "../CustomButton";
import Image from "next/image";
import { Hero } from "@/assets/images";
import { motion } from "framer-motion";

const HeroSection = () => {
	const router = useRouter();

	return (
		<motion.div
			id="hero"
			className="w-full bg-paleYellow px-10 pt-[150px] md:pt-[200px] pb-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20"
		>
			<motion.div
				className="w-full md:w-1/2"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<h1 className="text-darkGrey text-[40px] md:text-[60px] font-bold leading-[50px] md:leading-[70px]">
					Connecting You with Top Health Professionals
				</h1>
				<p className="mt-2 text-darkGrey text-lg">
					Our recruitment services specialise in matching skilled
					health professionals with leading health and social care
					organisations. Let us help you find the perfect fit for your
					team today!
				</p>
				<motion.div
					className="mt-5 flex items-center gap-2"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<CustomButton
						btnTitle="Get Started"
						btnType="button"
						btnStyles="text-white font-semibold border-none w-[134px] h-[48px] bg-darkGrey cursor-pointer hover:bg-lightGrey"
						btnAction={() =>
							router.push("https://forms.gle/Dnw8CD5NArR82mmU9")
						}
					/>
					<CustomButton
						btnTitle="Learn More"
						btnType="button"
						btnStyles="text-darkGrey font-semibold border-2 w-[134px] h-[48px] bg-transparent border-darkGrey cursor-pointer hover:bg-lightGrey hover:text-white hover:border-none"
						btnAction={() => router.push("/about")}
					/>
				</motion.div>
			</motion.div>
			{/* <div className="w-full md:w-1/2 flex items-center justify-center">
				<Image src={Hero} alt="hero-image" height={500} />
			</div> */}
			<motion.div
				className="w-full md:w-1/2 flex items-center justify-center"
				initial={{ opacity: 0, scale: 0.8 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.7 }}
			>
				<Image src={Hero} alt="hero-image" height={500} />
			</motion.div>
		</motion.div>
	);
};

export default HeroSection;
