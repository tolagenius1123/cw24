import ContactForm from "./ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
	return (
		<div
			id="contact"
			className="w-full flex flex-col md:flex-row gap-20 justify-between bg-paleYellow px-8 md:px-10 py-20 text-black"
		>
			<div className="w-full md:w-[40%]">
				<div className="flex flex-col gap-5">
					<h1 className="text-xl font-semibold">Connect</h1>
					<h1 className="text-4xl font-semibold">Get in Touch</h1>
					<p>
						We&apos;re here to assist with your inquiries and
						requests.
					</p>
				</div>
				<div className="mt-10 flex flex-col gap-5">
					<div className="flex items-center gap-3">
						<Mail />
						<p className="">info@cw24.co.uk</p>
					</div>
					<div className="flex items-center gap-3">
						<Phone />
						<div className="flex flex-col">
							<div className="flex items-center gap-2">
								<span className="">Mobile:</span>
								+44 7340 764149
							</div>
							<div className="flex items-center gap-2">
								<span className="">Landline:</span>
								+44 2380 018034
							</div>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<MapPin />
						<p className="">
							10 College Place, Southampton, SO15 2FD
						</p>
					</div>
				</div>
			</div>
			<div className="w-full md:w-[60%]">
				<ContactForm />
			</div>
		</div>
	);
}
