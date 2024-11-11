import Image from "next/image";

type ServiceCard = {
	service: {
		id: number;
		image: string;
		title: string;
		description: string;
	};
};

export default function ServiceCard({ service }: ServiceCard) {
	const { id, title, description, image } = service;

	return (
		<div key={id} className="flex flex-col gap-5 md:gap-8">
			<Image src={image} alt="service-logo" />
			<h1 className="text-darkGrey text-3xl font-semibold">{title}</h1>
			<p className="text-darkGrey">{description}</p>
		</div>
	);
}
