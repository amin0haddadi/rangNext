import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import CustomerTableRow from "./CustomerTableRow";

interface ICustomersTableProps {
	customers: CustomerBase[];
}

const CustomersTable: React.FC<ICustomersTableProps> = ({ customers }) => {
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="center">شماره تلفن</TableCell>
						<TableCell align="center">نام مشتری</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{customers.map((customer) => (
						<CustomerTableRow key={customer.id} customer={customer} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CustomersTable;
