import { ReactElement } from "react";

type ServiceCard = {
	image: ReactElement;
	title: string;
	description: string;
};

type ContactData = {
	firstName: "";
	lastName: "";
	email: "";
	phoneNumber: "";
	message: "";
	category: [];
};
