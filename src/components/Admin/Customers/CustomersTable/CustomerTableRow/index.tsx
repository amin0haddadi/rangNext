import { TableCell, TableRow } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

interface ICustomerTableRowProps {
	customer: CustomerBase;
}

const CustomerTableRow: React.FC<ICustomerTableRowProps> = ({ customer }) => {
	const name = customer.firstName + " " + customer.lastName;
	const router = useRouter();

	return (
		<TableRow
			key={customer.id}
			onClick={() => router.push(`/dashboard/customers/${customer.id}`)}
			sx={{
				cursor: "pointer",
				"&:last-child td, &:last-child th": { border: 0 },
			}}
		>
			<TableCell align="center">{customer.username}</TableCell>
			<TableCell align="center">{name}</TableCell>
		</TableRow>
	);
};

export default CustomerTableRow;
