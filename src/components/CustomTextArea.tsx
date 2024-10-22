type CustomTextAreaProps = {
	label: string;
	inputName: string;
	inputStyles: string;
};

export default function CustomTextArea({
	label,
	inputName,
	inputStyles,
}: CustomTextAreaProps) {
	return (
		<div className="flex flex-col gap-3">
			<p className="">{label}</p>
			<textarea name={inputName} className={inputStyles}></textarea>
		</div>
	);
}
