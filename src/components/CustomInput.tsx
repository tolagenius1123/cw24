type CustomInputProps = {
	label: string;
	inputType: string;
	inputName: string;
	inputStyles: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
	error?: string | boolean;
};

export default function CustomInput({
	label,
	inputType,
	inputName,
	inputStyles,
	value,
	onChange,
	onBlur,
	error,
}: CustomInputProps) {
	return (
		<div className="flex flex-col gap-3">
			<p>{label}</p>
			<input
				type={inputType}
				name={inputName}
				className={`${inputStyles} ${error ? "border-red-500" : ""}`}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{error && <p className="text-red-500 text-sm">{error}</p>}
		</div>
	);
}
