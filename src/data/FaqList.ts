type FAQProps = {
	id: number;
	question: string;
	answer: string;
	active?: number | undefined;
};

const faqList: FAQProps[] = [
	{
		id: 0,
		question: "What services do you offer?",
		answer: "We specialize in connecting healthcare professionals with top employers. Our services include recruitment for various positions, including nursing, social work, and allied health roles. We ensure a tailored approach to meet the unique needs of both candidates and employers.",
	},
	{
		id: 1,
		question: "How do I apply?",
		answer: "Applying is simple! Visit our 'Careers' page to browse current openings and submit your application online. Our team will review your submission and get back to you promptly.",
	},
	// {
	// 	id: 2,
	// 	question: "What is your delivery pricing model?",
	// 	answer: "There are many delivery related problems in Africa and many startups are stepping up to solve them. As we try to solve it in our own model, we will also support other ",
	// },
	{
		id: 3,
		question: "What is the process?",
		answer: "Our recruitment process involves several steps, including an initial screening, interviews, and reference checks. We aim to match candidates with positions that align with their skills and career goals. Throughout the process, we provide support and guidance to ensure a smooth experience.",
	},
	{
		id: 4,
		question: "Do you charge fees?",
		answer: "No, our services are free for job seekers. We are funded by employers who pay a fee for our recruitment services. This allows us to focus on finding the best opportunities for you without any cost.",
	},
	{
		id: 5,
		question: "How can I contact?",
		answer: "You can reach out to us via our contact form or by email. Our dedicated team is here to assist you with any inquiries. We strive to respond to all messages within 24 hours.",
	},
];

export default faqList;
