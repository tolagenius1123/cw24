"use client";

type CustomButtonProps = {
	btnTitle: string;
	btnStyles: string;
	btnType: "submit" | "reset" | "button" | undefined;
	btnAction: () => void;
};

export default function CustomButton({
	btnTitle,
	btnStyles,
	btnType,
	btnAction,
}: CustomButtonProps) {
	return (
		<button type={btnType} onClick={btnAction} className={btnStyles}>
			{btnTitle}
		</button>
	);
}
