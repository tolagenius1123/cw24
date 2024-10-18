import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "CW24 - healthcare recruitment agency dedicated to providing high-quality staffing solutions for healthcare providers across the UK",
	description:
		"healthcare recruitment agency dedicated to providing high-quality staffing solutions for healthcare providers across the UK",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
