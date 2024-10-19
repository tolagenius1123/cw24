// import { Avatar, Rating } from "@/assets/images";
// import Image from "next/image";

// export default function Testimonials() {
// 	return (
// 		<div id="team" className="w-full bg-white px-10 py-20 text-[#2B4449]">
// 			<div className="w-[50%] mx-auto">
// 				<h1 className="text-2xl font-semibold text-center">
// 					Testimonial
// 				</h1>
// 				<div className="mt-10 w-[90%] mx-auto flex flex-col items-center gap-2">
// 					<Image src={Rating} alt="rating-icon" />
// 					<p className="font-semibold mt-3 text-center text-xl">
// 						"The team at Health and Social Care Recruitment exceeded
// 						our expectations. Their dedication to finding the right
// 						fit for our organization was truly impressive."
// 					</p>
// 					<div className="mt-3 flex items-center gap-3">
// 						<Image src={Avatar} alt="rating-icon" />
// 						<div className="flex flex-col">
// 							<p className="font-semibold">James Johnson</p>
// 							<p className="text-sm">HR Manager, CarePlus</p>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="mt-5 flex items-center">
// 					<div className="mx-auto flex items-center gap-2">
// 						<div className="rounded-full h-3 w-3 bg-black"></div>
// 						<div className="rounded-full h-3 w-3 bg-black"></div>
// 						<div className="rounded-full h-3 w-3 bg-black"></div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Avatar, Rating } from "@/assets/images";
import CustomButton from "../CustomButton";

const testimonials = [
	{
		text: "The team at Health and Social Care Recruitment exceeded our expectations. Their dedication to finding the right fit for our organization was truly impressive.",
		name: "James Johnson",
		title: "HR Manager, CarePlus",
		avatar: Avatar,
	},
	{
		text: "Excellent service! They made the hiring process seamless and provided top-notch candidates.",
		name: "Sarah Brown",
		title: "CEO, WellCare",
		avatar: Avatar,
	},
	{
		text: "Their professional approach and understanding of our needs were outstanding.",
		name: "Michael Smith",
		title: "Director, MedCare",
		avatar: Avatar,
	},
];

const TestimonialCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(
				(prevIndex) => (prevIndex + 1) % testimonials.length
			);
		}, 5000); // Change testimonial every 5 seconds

		return () => clearInterval(interval); // Clear interval on component unmount
	}, []);

	return (
		<>
			<div
				id="team"
				className="w-full bg-white px-10 py-20 text-[#2B4449]"
			>
				<div className="w-[50%] mx-auto">
					<h1 className="text-2xl font-semibold text-center">
						Testimonial
					</h1>
					<div className="mt-10 w-[90%] mx-auto flex flex-col items-center gap-4">
						<Image src={Rating} alt="rating-icon" />
						<p className="font-semibold mt-3 text-center text-xl">
							"{testimonials[activeIndex].text}"
						</p>
						<div className="mt-3 flex items-center gap-3">
							<Image
								src={testimonials[activeIndex].avatar}
								alt="avatar"
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
				className="w-full bg-lightGrey px-10 py-20 text-white"
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
							btnAction={() => {}}
						/>
						<CustomButton
							btnTitle="Learn More"
							btnType="button"
							btnStyles="text-white font-semibold border-2 w-[134px] h-[48px] bg-transparent border-white cursor-pointer transition ease-in-out duration-300 hover:bg-white hover:border-none hover:text-customRed"
							btnAction={() => {}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default TestimonialCarousel;
