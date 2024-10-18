"use client";
import { useRouter } from "next/navigation";
import CustomButton from "../CustomButton";
import Image from "next/image";
import { Hero } from "@/assets/images";

const HeroSection = () => {
	const router = useRouter();

	return (
		<div className="w-full bg-paleYellow px-10 pt-[150px] md:pt-[200px] pb-10 flex flex-col md:flex-row items-center justify-between gap-10">
			<div className="w-full md:w-1/2">
				<h1 className="text-darkGrey text-[40px] md:text-[60px] font-bold leading-[50px] md:leading-[70px]">
					Connecting You with Top Health Professional
				</h1>
				<p className="mt-2 text-customRed text-lg">
					Our recruitment services specialize in matching skilled
					professionals with leading health and social care
					organizations. Let us help you find the perfect fit for your
					team today!
				</p>
				<div className="mt-5 flex items-center gap-2">
					<CustomButton
						btnTitle="Get Started"
						btnType="button"
						btnStyles="text-white font-semibold border-none w-[134px] h-[48px] bg-darkGrey cursor-pointer hover:bg-lightGrey"
						btnAction={() => router.push("/")}
					/>
					<CustomButton
						btnTitle="Learn More"
						btnType="button"
						btnStyles="text-darkGrey font-semibold border-2 w-[134px] h-[48px] bg-transparent border-darkGrey cursor-pointer hover:bg-lightGrey hover:text-white"
						btnAction={() => router.push("/")}
					/>
				</div>
			</div>
			<div className="w-full md:w-1/2 flex items-center justify-center">
				<Image
					src={Hero}
					alt="hero-image"
					// className="rounded-[100px]"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
