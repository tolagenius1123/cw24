"use client";
import { useRouter } from "next/navigation";
import { Shelly, Team2, Team3, Team4 } from "@/assets/images";
import TeamCard from "./TeamCard";
import CustomButton from "../CustomButton";

export default function Team() {
	const router = useRouter();

	const teamList = [
		{
			id: 1,
			image: Shelly,
			fullname: "Shelley West",
			role: "Staff Allocation Officer",
			description:
				"Shelley West serves as our Staff Allocation Officer at CW24 Recruitment Agency, taking on the essential role of coordinating staffing solutions for our clients and ensuring every assignment is filled with precision and care.  meeting daily requirements and handling urgent staffing requests as they arise.",
		},
		{
			id: 2,
			image: Team2,
			fullname: "Jane Smith",
			role: "Talent Specialist",
			description:
				"Passionate about connecting candidates with meaningful opportunities.",
		},
		{
			id: 3,
			image: Team3,
			fullname: "Emily Johnson",
			role: "Client Advisor",
			description:
				"Focused on building strong relationships with our clients.",
		},
		{
			id: 4,
			image: Team4,
			fullname: "Micheal Brown",
			role: "Recruitment Consultant",
			description: "Skilled in matching candidates with the right roles.",
		},
	];

	return (
		<div id="team" className="w-full bg-paleYellow px-10 py-20">
			<div className="w-full md:w-[60%] flex flex-col gap-5">
				<h1 className="text-customRed font-bold text-2xl">Meet</h1>
				<h1 className="text-darkGrey text-4xl md:text-5xl font-semibold">
					Our Team
				</h1>
				<p className="text-customRed">
					Dedicated professionals committed to your recruitment needs.
				</p>
			</div>
			<div className="mt-10 w-full grid grid-cols-1 md:grid-cols-4 gap-10">
				{teamList.map((team) => (
					<TeamCard key={team.id} team={team} />
				))}
			</div>
			<div className="mt-20 w-full md:w-[60%] flex flex-col gap-5">
				<h1 className="text-darkGrey text-2xl font-semibold">
					We&apos;re hiring!
				</h1>
				<h1 className="text-customRed">
					Discover your next career opportunity with us today
				</h1>
				<CustomButton
					btnTitle="Open positions"
					btnType="button"
					btnStyles="text-darkGrey font-semibold border-2 w-[134px] h-[48px] bg-transparent border-darkGrey cursor-pointer hover:border-none hover:bg-lightGrey hover:text-white"
					btnAction={() => router.push("/")}
				/>
			</div>
		</div>
	);
}
