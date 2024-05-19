"use client";

import Pagination from "@/components/Pagination";
import { LIMIT } from "@/constants";
import { fetchCustomers } from "@/lib/api/admin/users";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CustomersTable from "./CustomersTable";

interface ICustomersProps {
	page?: number;
}

const Customers: React.FC<ICustomersProps> = ({ page }) => {
	const [customers, setCustomers] = useState<CustomerBase[]>([]);
	const [count, setCount] = useState<number>(0);

	const title = "مشتری ها";

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await fetchCustomers({ limit: LIMIT, page });
			setCustomers(data.users);
			setCount(data.count);
		};
		fetchData();
	}, [page]);

	return (
		<Paper sx={{ p: 3 }}>
			<Typography variant="h5" fontWeight={"bold"}>
				{title}
			</Typography>
			<Divider></Divider>
			<Box px={3}>
				<CustomersTable customers={customers} />
				<Pagination totalPages={Math.ceil(count / LIMIT)} />
			</Box>
		</Paper>
	);
};

export default Customers;
