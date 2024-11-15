"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Avatar, Leadership, Olly, Rating, Sandra } from "@/assets/images";
import CustomButton from "../CustomButton";
import { useRouter } from "next/navigation";

const testimonials = [
	{
		text: "The team at cw24 exceeded our expectations on the speed at which they were able to find cover for us at such short notice",
		name: "James Johnson",
		title: "HR Manager, CarePlus",
		avatar: Avatar,
	},
	{
		text: "Excellent service! They made the hiring process seamless and provided top-notch candidates.",
		name: "Sarah Brown",
		title: "CEO, WellCare",
		avatar: Sandra,
	},
	{
		text: "Their professional approach and understanding of our needs were outstanding.",
		name: "Nancy Smith",
		title: "Director, MedCare",
		avatar: Olly,
	},
];

const TestimonialCarousel = () => {
	const router = useRouter();
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(
				(prevIndex) => (prevIndex + 1) % testimonials.length
			);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div
				id="team"
				className="w-full bg-white px-8 md:px-10 py-20 text-[#2B4449]"
			>
				<div className="w-[90%] md:w-[50%] mx-auto">
					<h1 className="text-2xl font-semibold text-center">
						Testimonial
					</h1>
					<div className="mt-10 w-[90%] mx-auto flex flex-col items-center gap-4">
						<Image src={Rating} alt="rating-icon" />
						<p className="font-semibold mt-3 text-center text-xl">
							&quot;{testimonials[activeIndex].text}&quot;
						</p>
						<div className="mt-3 flex items-center gap-3">
							<Image
								src={testimonials[activeIndex].avatar}
								alt="avatar"
								className="h-10 w-10 rounded-full"
							/>
							<div className="flex flex-col">
								<p className="font-semibold">
									{testimonials[activeIndex].name}
								</p>
								<p className="text-sm">
									{testimonials[activeIndex].title}
								</p>
							</div>
						</div>
					</div>
					<div className="mt-10 flex items-center">
						<div className="mx-auto flex items-center gap-2">
							{testimonials.map((_, index) => (
								<div
									key={index}
									className={`rounded-full h-3 w-3 transition-all duration-300 ${
										activeIndex === index
											? "w-5 bg-black"
											: "bg-gray-300"
									}`}
								></div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div
				id="team"
				className="w-full bg-lightGrey px-8 md:px-10 py-20 text-white text-center"
			>
				<div className="w-[80%] mx-auto flex flex-col items-center gap-5">
					<h1 className="text-3xl md:text-4xl font-semibold">
						Your Recruitment Partner Awaits
					</h1>
					<p>
						Reach out today to discover how we can meet your
						recruitment needs effectively.
					</p>
					<div className="flex items-center gap-5">
						<CustomButton
							btnTitle="Contact"
							btnType="button"
							btnStyles="text-customRed font-semibold w-[134px] h-[48px] bg-white cursor-pointer hover:border-2 hover:bg-transparent hover:text-white transition ease-in-out duration-300"
							btnAction={() => router.push("/#contact")}
						/>
						<CustomButton
							btnTitle="Learn More"
							btnType="button"
							btnStyles="text-white font-semibold border-2 w-[134px] h-[48px] bg-transparent border-white cursor-pointer transition ease-in-out duration-300 hover:bg-white hover:border-none hover:text-customRed"
							btnAction={() => router.push("/about")}
						/>
					</div>
				</div>
			</div>
			<div
				id="team"
				className="w-full bg-paleYellow px-8 md:px-10 py-20 text-darkGrey text-center"
			>
				<div className="w-full md:w-[80%] mx-auto flex flex-col items-center gap-5">
					<h1 className="text-3xl md:text-4xl font-semibold">
						Our Team / Leadership
					</h1>
					<p className="text-darkGrey text-sm md:text-lg">
						Our leadership team consists of experienced directors
						with a proven track record in both healthcare and
						recruitment. Their extensive knowledge and expertise
						ensure that CW24 operates at the highest standards,
						offering tailored recruitment solutions that meet the
						ever-evolving needs of healthcare providers. From
						strategic direction to day-to-day management, our
						directors are committed to maintaining the quality and
						reliability that CW24 is known for.
					</p>
					<div className="">
						<Image src={Leadership} alt="leadership-logo" />
					</div>
				</div>
			</div>
		</>
	);
};

export default TestimonialCarousel;
