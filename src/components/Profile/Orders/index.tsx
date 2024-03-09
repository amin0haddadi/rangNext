"use client";
import {
	Pagination,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function createData(
	id: string,
	amount: number,
	trackingCode: number,
	date: any
) {
	return { id, amount, trackingCode, date };
}

const rows = [
	createData("234343", 10000, 234234, 4234),
	createData("234345", 10000, 234234, 4234),
	createData("236434", 10000, 234234, 4234),
	createData("234834", 10000, 234234, 4234),
];

interface IOrdersProps {
	id: string;
	amount: number;
	trackingCode: number;
	date: any; // todo: change type
}

const Orders = () => {
	const [page, setPage] = useState(1);
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
		console.log(page);
	};
	return (
		<Stack direction={"column"} alignItems={"center"} gap={2}>
			<TableContainer component={Paper} elevation={3}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell align="center">تاریخ سفارش</TableCell>
							<TableCell align="center">مبلغ سفارش</TableCell>
							<TableCell align="center">کد پیگیری</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.id}
								component={Link}
								href={`profile/order/${row.id}`}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row" align="center">
									{row.date}
								</TableCell>
								<TableCell align="center">{row.amount}</TableCell>
								<TableCell align="center">{row.trackingCode}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Pagination count={10} shape="rounded" onChange={handleChange} />
		</Stack>
	);
};

export default Orders;
