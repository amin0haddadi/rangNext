"use client";
import { fetchCustomer } from "@/lib/api/admin/users";
import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface ICustomerProps {
	customerId: string;
}

const Customer: React.FC<ICustomerProps> = ({ customerId }) => {
	const [customer, setCustomer] = useState<Customer>();

	const title = "اطلاعات مشتری";

	useEffect(() => {
		const fetchData = async () => {
			const {
				data: { user },
			} = await fetchCustomer(customerId);
			setCustomer(user);
		};
		fetchData();
	}, [customerId]);

	const renderCustomerDetails = () => (
		<Stack spacing={2}>
			<Typography>شماره تماس: {customer?.username}</Typography>
			<Typography>نام: {customer?.firstName}</Typography>
			<Typography>نام خانوادگی: {customer?.lastName}</Typography>
			<Typography>استان: {customer?.province}</Typography>
			<Typography> شهر: {customer?.city}</Typography>
			<Typography> کد پستی: {customer?.postalCode}</Typography>
			<Typography> آدرس: {customer?.address}</Typography>
		</Stack>
	);

	return (
		<>
			<Paper sx={{ p: 3 }}>
				<Typography variant="h5" fontWeight={"bold"}>
					{title}
				</Typography>
				<Divider></Divider>
				<Box px={3}>{renderCustomerDetails()}</Box>
			</Paper>
		</>
	);
};

export default Customer;
