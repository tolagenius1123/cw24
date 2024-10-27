"use client";
import { RiMenu4Fill } from "react-icons/ri";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

export default function MobileMenu() {
	const pathName = usePathname();
	const router = useRouter();

	return (
		<div className="md:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<RiMenu4Fill className="h-8 w-8 text-darkGrey" />
				</SheetTrigger>
				<SheetContent>
					<div className="mt-5">
						<div className="flex flex-col gap-6">
							<div className="flex flex-col gap-4">
								<Link
									href="/"
									className={`font-medium hover:text-lightGreen ${
										pathName === "/"
											? "text-darkGrey"
											: "text-lightGrey"
									}`}
								>
									<SheetClose>Home</SheetClose>
								</Link>
								<Link
									href="/about"
									className={`font-medium hover:text-lightGreen ${
										pathName === "/about"
											? "text-darkGrey"
											: "text-lightGrey"
									}`}
								>
									<SheetClose>About</SheetClose>
								</Link>
								<Link
									href="/#services"
									className={`font-medium hover:text-lightGreen ${
										pathName === "/#services"
											? "text-darkGrey"
											: "text-lightGrey"
									}`}
								>
									<SheetClose>Services</SheetClose>
								</Link>
								<Link
									href="/#contact"
									className={`font-medium hover:text-lightGreen ${
										pathName === "/#contact"
											? "text-darkGrey"
											: "text-lightGrey"
									}`}
								>
									<SheetClose>Contact Us</SheetClose>
								</Link>
							</div>
							<CustomButton
								btnTitle="Sign Up"
								btnType="button"
								btnStyles="text-white rounded-md font-semibold border-none w-[120px] h-[40px] bg-darkGrey cursor-pointer hover:bg-lightGrey"
								btnAction={() =>
									router.push(
										"https://forms.gle/N6uMEQNFr7ibosG89"
									)
								}
							/>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
