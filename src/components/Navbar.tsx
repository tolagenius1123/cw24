"use client";
import { useRouter } from "next/navigation";
import { cw24, CW24 } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
	const router = useRouter();
	return (
		<header className="w-full bg-white px-10 py-1 flex items-center justify-between fixed z-10 shadow-md">
			<Image src={cw24} alt="logo" className="" />
			<div className="hidden md:flex items-center gap-20 mr-10">
				<div className="flex gap-10 items-center">
					<Link
						href="/"
						className="text-lightGrey font-semibold hover:text-darkGrey"
					>
						Home
					</Link>
					<Link
						href="/"
						className="text-lightGrey font-semibold hover:text-darkGrey"
					>
						About
					</Link>
					<Link
						href="/"
						className="text-lightGrey font-semibold hover:text-darkGrey"
					>
						Services
					</Link>
					<Link
						href="/"
						className="text-lightGrey font-semibold hover:text-darkGrey"
					>
						Contact Us
					</Link>
				</div>
				<CustomButton
					btnTitle="Register"
					btnType="button"
					btnStyles="text-white rounded-md px-4 py-2 bg-darkGrey cursor-pointer hover:bg-lightGrey"
					btnAction={() => router.push("/")}
				/>
			</div>
			<MobileMenu />
		</header>
	);
}
