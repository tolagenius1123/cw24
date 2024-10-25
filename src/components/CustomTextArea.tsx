// type CustomTextAreaProps = {
// 	label: string;
// 	inputName: string;
// 	inputStyles: string;
// };

// export default function CustomTextArea({
// 	label,
// 	inputName,
// 	inputStyles,
// }: CustomTextAreaProps) {
// 	return (
// 		<div className="flex flex-col gap-3">
// 			<p className="">{label}</p>
// 			<textarea name={inputName} className={inputStyles}></textarea>
// 		</div>
// 	);
// }

type CustomTextAreaProps = {
	label: string;
	inputName: string;
	inputStyles: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
	error?: string | boolean;
};

export default function CustomTextArea({
	label,
	inputName,
	inputStyles,
	value,
	onChange,
	onBlur,
	error,
}: CustomTextAreaProps) {
	return (
		<div className="flex flex-col gap-3">
			<p>{label}</p>
			<textarea
				name={inputName}
				className={`${inputStyles} ${error ? "border-red-500" : ""}`}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			></textarea>
			{error && <p className="text-red-500 text-sm">{error}</p>}
		</div>
	);
}
