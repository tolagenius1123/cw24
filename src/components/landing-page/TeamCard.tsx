import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Dribble, LinkedIn, Twitter } from "@/assets/icons";

type TeamCardProps = {
	team: {
		id: number;
		image: StaticImageData;
		fullname: string;
		role: string;
		description: string;
	};
};

export default function TeamCard({ team }: TeamCardProps) {
	const { id, image, fullname, role, description } = team;

	return (
		<div
			key={id}
			className="w-full md:w-[90%] flex flex-col gap-5 text-darkGrey team-card"
		>
			<Image
				src={image}
				alt="service-logo"
				className="w-auto h-[300px] rounded-lg"
				// height={300}
				// width={300}
			/>
			<div className="">
				<h1 className="text-xl font-bold">{fullname}</h1>
				<p className="">{role}</p>
			</div>
			<div className="">
				<p className="text-sm">{description}</p>
			</div>
			<div className="flex items-center gap-3">
				<Link href="/">
					<Image src={LinkedIn} alt="linkedIn-icon" />
				</Link>

				<Link href="/">
					<Image src={Twitter} alt="twitter-icon" />
				</Link>
				<Link href="/">
					<Image src={Dribble} alt="dribble-icon" />
				</Link>
			</div>
		</div>
	);
}
