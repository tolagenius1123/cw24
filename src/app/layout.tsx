import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
	title: "CW24 - healthcare recruitment agency dedicated to providing high-quality staffing solutions for healthcare providers across the UK",
	description:
		"healthcare recruitment agency dedicated to providing high-quality staffing solutions for healthcare providers across the UK",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body>
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
// &apos;
