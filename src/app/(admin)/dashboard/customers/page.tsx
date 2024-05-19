import Customers from "@/components/Admin/Customers";

interface ICustomersPageProps {
	searchParams?: {
		page?: string;
	};
}

const CustomersPage: React.FC<ICustomersPageProps> = ({ searchParams }) => {
	const page = Number(searchParams?.page) || 1;

	return <Customers page={page} />;
};

export default CustomersPage;
