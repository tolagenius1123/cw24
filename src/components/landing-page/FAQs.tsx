"use client";
import Accordion from "../Accordion";
import faqList from "@/data/FaqList";
import CustomButton from "../CustomButton";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Email, Location, Phone } from "@/assets/icons";
import Link from "next/link";

export default function FAQs() {
	const router = useRouter();

	return (
		<>
			<div id="team" className="w-full bg-white px-10 py-20 text-black">
				<h1 className="text-4xl font-semibold">FAQs</h1>
				<p className="mt-5">
					Find answers to your most pressing questions about our
					recruitment services and processes.
				</p>
				<div className="mt-20 flex flex-col gap-4">
					{faqList.map((item, i) => (
						<Accordion
							key={i}
							question={item.question}
							answer={item.answer}
							data={item}
						/>
					))}
				</div>
				<div className="mt-5 md:mt-20 flex flex-col gap-5">
					<h1 className="text-2xl font-semibold">
						Still have questions?
					</h1>
					<p>We&apos;re here to help you</p>
					<CustomButton
						btnTitle="Contact"
						btnType="button"
						btnStyles="text-darkGrey font-semibold border-2 w-[134px] h-[48px] bg-transparent border-darkGrey cursor-pointer hover:bg-lightGrey hover:text-white hover:border-none"
						btnAction={() => router.push("/#contact")}
					/>
				</div>
			</div>
			<div className="w-full bg-lightGrey px-10 py-20 text-white text-center">
				<div className="w-[90%] mx-auto flex flex-col items-center gap-5">
					<p className="font-semibold">Connect</p>
					<h1 className="text-3xl md:text-4xl font-semibold">
						Get in Touch
					</h1>
					<p>We&apos;re here to assist you with your inquiries</p>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
						<div className="flex flex-col gap-3 items-center">
							<Image src={Email} alt="email-icon" />
							<h1 className="text-xl md:text-2xl font-semibold">
								Email
							</h1>
							<p className="font-normal">
								Reach us at your convenience for any questions.
							</p>
							<Link href="/">info@cw24.co.uk</Link>
						</div>
						<div className="flex flex-col gap-3 items-center">
							<Image src={Phone} alt="phone-icon" />
							<h1 className="text-xl md:text-2xl font-semibold">
								Phone
							</h1>
							<p className="font-normal">
								Call us for immediate assistance and support
							</p>
							<Link href="/">
								+44 7340 764149, +44 2380 018034
							</Link>
						</div>
						<div className="flex flex-col gap-3 items-center">
							<Image src={Location} alt="email-icon" />
							<h1 className="text-xl md:text-2xl font-semibold">
								Office
							</h1>
							<p className="font-normal">
								Visit us for a personal consultation and support
							</p>
							<Link href="/">
								10 College Place, Southampton, SO15 2FD
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
