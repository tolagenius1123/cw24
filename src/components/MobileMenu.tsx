import { RiMenu4Fill } from "react-icons/ri";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";

export default function MobileMenu() {
	return (
		<div className="md:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<RiMenu4Fill className="h-6 w-6 text-darkGrey" />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Edit profile</SheetTitle>
						<SheetDescription>
							Make changes to your profile here. Click save when
							you're done.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
}
