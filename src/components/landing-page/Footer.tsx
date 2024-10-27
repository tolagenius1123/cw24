import { cw24 } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="w-full bg-white text-black px-10 py-20">
			<div className="flex flex-col md:flex-row justify-between gap-10">
				<div className="flex flex-col gap-4">
					<Image src={cw24} alt="footer-logo" />
					<div className="flex flex-col">
						<p className="font-semibold">Address:</p>
						<p>10 College Place, Southampton, SO15 2FD </p>
					</div>
					<div className="mt-5 flex flex-col">
						<p className="font-semibold">Contact:</p>
						<div className="">
							<p className="">+44 7340 764149, +44 2380 018034</p>
							<p className="">info@cw24.co.uk</p>
						</div>
					</div>
					<div className="mt-5 flex items-center gap-3">
						<Link href="/">
							<FaFacebook className="h-6 w-6" />
						</Link>
						<Link href="/">
							<BsInstagram className="h-6 w-6" />
						</Link>
						<Link href="/">
							<BsTwitter className="h-6 w-6" />
						</Link>
						<Link href="/">
							<BsLinkedin className="h-5 w-5" />
						</Link>
						<Link href="/">
							<BsYoutube className="h-6 w-6" />
						</Link>
					</div>
				</div>
				<div className="flex gap-20">
					<div className="flex flex-col gap-3">
						<Link href="/">About Us</Link>
						<Link href="/">Our Services</Link>
						<Link href="/">Contact Support</Link>
						<Link href="/">Careers Page</Link>
						<Link href="/">Blog Articles</Link>
					</div>
					<div className="flex flex-col gap-3">
						<Link href="/">FAQs Section</Link>
						<Link href="/">Client Portal</Link>
						<Link href="/">Feedback Form</Link>
						<Link href="/">Resource Center</Link>
						<Link href="/">Site Map</Link>
					</div>
				</div>
			</div>
			<div className="mt-20 h-[1px] bg-black w-full"></div>
			<div className="mt-10 flex flex-col md:flex-row justify-between gap-5">
				<p>© 2024 Relume. All rights reserved.</p>
				<div className="flex flex-col md:flex-row gap-4">
					<Link href="/" className="underline">
						Privacy Policy
					</Link>
					<Link href="/" className="underline">
						Terms of Service
					</Link>
					<Link href="/" className="underline">
						Cookies Seetings
					</Link>
				</div>
			</div>
		</div>
	);
}
