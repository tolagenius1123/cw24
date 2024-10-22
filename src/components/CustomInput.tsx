type CustomInputProps = {
	label: string;
	inputType: string;
	inputName: string;
	inputStyles: string;
};

export default function CustomInput({
	label,
	inputType,
	inputName,
	inputStyles,
}: CustomInputProps) {
	return (
		<div className="flex flex-col gap-3">
			<p className="">{label}</p>
			<input type={inputType} name={inputName} className={inputStyles} />
		</div>
	);
}
