"use client";
import { useRouter } from "next/navigation";
import { Azhar, ShellyPortrait, Team3 } from "@/assets/images";
import TeamCard from "./TeamCard";
import CustomButton from "../CustomButton";

export default function Team() {
	const router = useRouter();

	const teamList = [
		{
			id: 1,
			image: ShellyPortrait,
			fullname: "Shelley West",
			role: "Staff Allocation Officer",
			description:
				"Shelley West serves as our Staff Allocation Officer at CW24 Recruitment Agency, taking on the essential role of coordinating staffing solutions for our clients and ensuring every assignment is filled with precision and care.  meeting daily requirements and handling urgent staffing requests as they arise.",
		},
		{
			id: 2,
			image: Azhar,
			fullname: "Azhar Ahmed",
			role: "Head of Admin and Compliance",
			description:
				"Azhar Ahmed is our Head of Admin and Compliance at CW24, overseeing the essential frameworks that ensure our organization meets and exceeds the highest standards of regulatory and operational excellence. With extensive experience in administrative management and compliance, Azhar is instrumental in maintaining rigorous compliance protocols and a smoothly functioning administrative system.",
		},
		{
			id: 3,
			image: Team3,
			fullname: "Emily Johnson",
			role: "Client Advisor",
			description:
				"Focused on building strong relationships with our clients.",
		},
		// {
		// 	id: 4,
		// 	image: Team4,
		// 	fullname: "Micheal Brown",
		// 	role: "Recruitment Consultant",
		// 	description: "Skilled in matching candidates with the right roles.",
		// },
	];

	return (
		<div id="team" className="w-full bg-paleYellow px-10 py-20">
			<div className="w-full md:w-[60%] flex flex-col gap-5">
				<h1 className="text-darkGrey font-bold text-2xl">Meet</h1>
				<h1 className="text-darkGrey text-4xl md:text-5xl font-semibold">
					Our Team
				</h1>
				<p className="text-darkGrey">
					Dedicated healthcare professionals committed to your
					recruitment needs.
				</p>
			</div>
			<div className="mt-10 w-full grid grid-cols-1 md:grid-cols-3 gap-10">
				{teamList.map((team, index) => (
					<div
						className={`scale-in flex justify-center`}
						key={team.id}
						style={{ animationDelay: `${index * 100}ms` }}
					>
						<TeamCard key={team.id} team={team} />
					</div>
				))}
			</div>
			<div className="mt-20 w-full md:w-[60%] flex flex-col gap-5">
				<h1 className="text-darkGrey text-2xl font-semibold">
					We&apos;re hiring!
				</h1>
				<h1 className="">
					Discover your next career opportunity with us today
				</h1>
				<CustomButton
					btnTitle="Open positions"
					btnType="button"
					btnStyles="text-darkGrey font-semibold border-2 w-[134px] h-[48px] bg-transparent border-darkGrey cursor-pointer hover:border-none hover:bg-lightGrey hover:text-white"
					btnAction={() =>
						router.push("https://forms.gle/N6uMEQNFr7ibosG89")
					}
				/>
			</div>
		</div>
	);
}
