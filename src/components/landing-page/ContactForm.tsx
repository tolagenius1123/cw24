"use client";
import CustomInput from "../CustomInput";
import { Checkbox } from "@/components/ui/checkbox";
import CustomTextArea from "../CustomTextArea";
import CustomButton from "../CustomButton";

export default function ContactForm() {
	return (
		<form>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				<CustomInput
					label="First Name"
					inputType="text"
					inputName="firstName"
					inputStyles="bg-transparent border border-black h-[48px] w-full px-1"
				/>
				<CustomInput
					label="Last Name"
					inputType="text"
					inputName="lastName"
					inputStyles="bg-transparent border border-black h-[48px] w-full px-1"
				/>
			</div>
			<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
				<CustomInput
					label="Email"
					inputType="email"
					inputName="email"
					inputStyles="bg-transparent border border-black h-[48px] w-full px-1"
				/>
				<CustomInput
					label="Phone Number"
					inputType="text"
					inputName="lastName"
					inputStyles="bg-transparent border border-black h-[48px] w-full px-1"
				/>
			</div>
			<div className="mt-8">
				<h1>What describes you best?</h1>
				<div className="mt-5">
					<div className="flex items-center gap-20 mb-5">
						<div className="w-[200px] flex items-center gap-2">
							<Checkbox id="terms1" />
							<label htmlFor="terms1" className="text-sm">
								Healthcare provider
							</label>
						</div>
						<div className="w-[200px] flex items-center gap-2">
							<Checkbox id="terms1" />
							<label htmlFor="terms1" className="text-sm">
								Job Seeker
							</label>
						</div>
					</div>
					<div className="flex items-center gap-20 mb-5">
						<div className="w-[200px] flex items-center gap-2">
							<Checkbox id="terms1" />
							<label htmlFor="terms1" className="text-sm">
								Client Inquiry
							</label>
						</div>
						<div className="w-[200px] flex items-center gap-2">
							<Checkbox id="terms1" />
							<label htmlFor="terms1" className="text-sm">
								General Question
							</label>
						</div>
					</div>
					<div className="flex items-center justify-between gap-20 mb-5">
						<div className="w-[200px] flex items-center gap-2">
							<Checkbox id="terms1" />
							<label htmlFor="terms1" className="text-sm">
								Other Inquiry
							</label>
						</div>
					</div>
				</div>
			</div>
			<CustomTextArea
				label="Message"
				inputName="message"
				inputStyles="p-2 bg-transparent border border-black h-[300px] resize-none"
			/>
			<div className="mt-6">
				<CustomButton
					btnTitle="Send"
					btnType="button"
					btnStyles="text-paleYellow font-semibold w-[134px] h-[48px] bg-darkGrey cursor-pointer"
					btnAction={() => {}}
				/>
			</div>
		</form>
	);
}
