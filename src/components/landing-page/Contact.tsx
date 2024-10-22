import ContactForm from "./ContactForm";

export default function Contact() {
	return (
		<div
			id="contact"
			className="w-full flex gap-20 justify-between bg-paleYellow px-10 py-20 text-black"
		>
			<div className="w-full md:w-[40%] flex flex-col gap-5">
				<h1 className="text-xl font-semibold">Connect</h1>
				<h1 className="text-4xl font-semibold">Get in Touch</h1>
				<p>We're here to assist with your inquiries and requests.</p>
			</div>
			<div className="w-full md:w-[60%]">
				<ContactForm />
			</div>
		</div>
	);
}
