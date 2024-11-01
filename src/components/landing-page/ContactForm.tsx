"use client";
import CustomInput from "../CustomInput";
import { Checkbox } from "@/components/ui/checkbox";
import CustomTextArea from "../CustomTextArea";
import CustomButton from "../CustomButton";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function ContactForm() {
	const { toast } = useToast();
	const [btnTitle, setBtnTitle] = useState("Send");

	const validationSchema = Yup.object({
		firstName: Yup.string().required("First name is required"),
		lastName: Yup.string().required("Last name is required"),
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		phoneNumber: Yup.string().required("Phone number is required"),
		message: Yup.string().required("Message is required"),
		category: Yup.array().min(1, "Please select at least one category"),
	});

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			message: "",
			category: [],
		},
		validationSchema,
		onSubmit: async (values: {
			firstName: string;
			lastName: string;
			email: string;
			phoneNumber: string;
			message: string;
			category: string[];
		}) => {
			console.log(values);
			setBtnTitle("Sending...");
		},
	});

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await formik.submitForm(); // Validate and submit the form
		if (!formik.isValid) return; // Prevent submission if validation fails

		setBtnTitle("Sending...");

		// Prepare the form data
		const formData = {
			firstName: formik.values.firstName,
			lastName: formik.values.lastName,
			email: formik.values.email,
			phoneNumber: formik.values.phoneNumber,
			message: formik.values.message,
			category: formik.values.category,
		};

		try {
			const response = await fetch("https://formspree.io/f/mkgnjbvp", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			setBtnTitle("Send");

			if (response.ok) {
				toast({
					variant: "success",
					description: "Your message has been successfully sent.",
				});
				formik.resetForm();
			} else {
				toast({
					variant: "destructive",
					description:
						"There was an issue sending your message. Please try again.",
				});
			}
		} catch (error) {
			console.error("Error sending form data:", error);
			toast({
				variant: "destructive",
				description: "An error occurred. Please try again.",
			});
			setBtnTitle("Send");
		}
	};

	const handleCheckboxChange = (label: string) => {
		const { category } = formik.values;
		const newCategory = category.includes(label)
			? category.filter((item: string) => item !== label)
			: [...category, label];
		formik.setFieldValue("category", newCategory);
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				<CustomInput
					label="First Name"
					inputType="text"
					inputName="firstName"
					inputStyles="bg-transparent border border-black h-[48px] w-full px-2"
					value={formik.values.firstName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={
						formik.touched.firstName &&
						typeof formik.errors.firstName === "string"
							? formik.errors.firstName
							: undefined
					}
				/>
				<CustomInput
					label="Last Name"
					inputType="text"
					inputName="lastName"
					inputStyles="bg-transparent border border-black h-[48px] w-full px-2"
					value={formik.values.lastName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={
						formik.touched.lastName &&
						typeof formik.errors.lastName === "string"
							? formik.errors.lastName
							: undefined
					}
				/>
			</div>
			<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
				<CustomInput
					label="Email"
					inputType="text"
					inputName="email"
					inputStyles="bg-transparent border border-black h-[48px] w-full px-2"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={
						formik.touched.email &&
						typeof formik.errors.email === "string"
							? formik.errors.email
							: undefined
					}
				/>
				<CustomInput
					label="Phone Number"
					inputType="text"
					inputName="phoneNumber"
					inputStyles="bg-transparent border border-black h-[48px] w-full px-2"
					value={formik.values.phoneNumber}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={
						formik.touched.phoneNumber &&
						typeof formik.errors.phoneNumber === "string"
							? formik.errors.phoneNumber
							: undefined
					}
				/>
			</div>
			<div className="mt-8">
				<h1>What describes you best?</h1>
				<div className="mt-5">
					{[
						"Healthcare provider",
						"Job Seeker",
						"Client Inquiry",
						"General Question",
						"Other Inquiry",
					].map((label, index) => (
						<div
							key={index}
							className="w-[200px] flex items-center gap-2 mb-5"
						>
							<Checkbox
								id={`category-${index}`}
								checked={formik.values.category.includes(label)}
								onCheckedChange={() =>
									handleCheckboxChange(label)
								}
							/>
							<label
								htmlFor={`category-${index}`}
								className="text-sm"
							>
								{label}
							</label>
						</div>
					))}
				</div>
			</div>
			<CustomTextArea
				label="Message"
				inputName="message"
				inputStyles="p-2 bg-transparent border border-black h-[300px] resize-none"
				value={formik.values.message}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={
					formik.touched.message &&
					typeof formik.errors.message === "string"
						? formik.errors.message
						: undefined
				}
			/>

			<div className="mt-6">
				<CustomButton
					btnTitle={btnTitle}
					btnType="submit"
					btnStyles="text-paleYellow font-semibold w-[134px] h-[48px] bg-darkGrey cursor-pointer"
				/>
			</div>
		</form>
	);
}
