import Customer from "@/components/Admin/Customers/Customer";
import React from "react";

interface ICustomerPageProps {
	params: {
		customerId: string;
	};
}

const CustomerPage: React.FC<ICustomerPageProps> = ({ params }) => {
	return <Customer customerId={params.customerId} />;
};

export default CustomerPage;
