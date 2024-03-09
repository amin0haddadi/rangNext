import { FC, useLayoutEffect, useState } from "react";
import {
	Typography,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
	Paper,
	Box,
	Divider,
} from "@mui/material";
import TableItem from "./TableItem";
import TotalPrice from "../TotalPrice";

const DesktopCheckShop = () => {
	const [p, setP] = useState<any>();

	useLayoutEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setP(data));
	});

	return (
		<TableContainer sx={{ mt: 8 }}>
			<Table
				sx={{
					minWidth: 600,
					borderSpacing: "5px 25px",
					borderCollapse: "separate",
				}}
				aria-label="simple table"
			>
				<TableHead>
					<TableRow sx={{ " td,  th": { border: 0 } }}>
						<TableCell>
							<Typography color="grey" px={5}>
								محصول
							</Typography>
						</TableCell>
						<TableCell>
							<Typography textAlign={"center"} color="grey">
								قیمت
							</Typography>
						</TableCell>
						<TableCell align="center">
							<Typography color="grey">تعداد</Typography>
						</TableCell>
						<TableCell>
							<Typography color="grey">جمع قیمت</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{p?.map((pro: any) => (
						<TableRow
							key={pro.id}
							sx={{ " td,  th": { border: 0 }, p: 5 }}
							component={Paper}
							elevation={5}
						>
							<TableItem product={pro} />
						</TableRow>
					))}
				</TableBody>
			</Table>
			<TotalPrice />
		</TableContainer>
	);
};

export default DesktopCheckShop;
