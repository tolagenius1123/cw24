// "use client";
// import { ChevronRight } from "lucide-react";
// import { ReactNode, useState } from "react";

// type Data = {
// 	id: number;
// 	question: string;
// 	answer: ReactNode;
// 	active?: number | undefined;
// };

// type AccordionProps = {
// 	question: string;
// 	answer: ReactNode;
// 	data: Data;
// };

// const Accordion = ({ question, answer, data }: AccordionProps) => {
// 	const [item, setItem] = useState(data);

// 	const handleToggle = () => {
// 		const newActive = item.active === 1 ? 0 : 1;
// 		setItem({ ...item, active: newActive });
// 	};

// 	return (
// 		<div
// 			className={`bg-white w-full p-5 border border-black border-l-0 border-r-0 border-b-0  duration-500 group ${
// 				item.active === 1 ? "is-active" : ""
// 			}`}
// 		>
// 			<div className="flex flex-col gap-4">
// 				<div className="flex items-center gap-3">
// 					<p className="w-full group-[.is-active]:font-bold duration-500">
// 						{question}
// 					</p>
// 					<div
// 						className="text-xl rotate-90 group-[.is-active]:rotate-[270deg] duration-500 cursor-pointer"
// 						onClick={handleToggle}
// 					>
// 						<ChevronRight />
// 					</div>
// 				</div>
// 				<p className="overflow-hidden max-h-0 group-[.is-active]:max-h-[100px] duration-500">
// 					{answer}
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// export default Accordion;

"use client";
import { ChevronRight } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

type Data = {
	id: number;
	question: string;
	answer: ReactNode;
	active?: number | undefined;
};

type AccordionProps = {
	question: string;
	answer: ReactNode;
	data: Data;
};

const Accordion = ({ question, answer, data }: AccordionProps) => {
	// Set initial state to match server-rendered version
	const [item, setItem] = useState<Data>({
		...data,
		active: data.active ?? 0,
	});

	const handleToggle = () => {
		const newActive = item.active === 1 ? 0 : 1;
		setItem({ ...item, active: newActive });
	};

	useEffect(() => {
		// Sync state after mount, if needed, to avoid hydration mismatch
		setItem((prev) => ({ ...prev, active: data.active ?? 0 }));
	}, [data.active]);

	return (
		<div
			className={`bg-white w-full p-5 border border-black border-l-0 border-r-0 border-b-0 duration-500 group ${
				item.active === 1 ? "is-active" : ""
			}`}
		>
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-3">
					<p className="w-full group-[.is-active]:font-bold duration-500">
						{question}
					</p>
					<div
						className="text-xl rotate-90 group-[.is-active]:rotate-[270deg] duration-500 cursor-pointer"
						onClick={handleToggle}
					>
						<ChevronRight />
					</div>
				</div>
				<div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[100px] duration-500">
					{answer}
				</div>
			</div>
		</div>
	);
};

export default Accordion;
