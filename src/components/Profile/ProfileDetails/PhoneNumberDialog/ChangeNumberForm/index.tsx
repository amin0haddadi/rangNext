import { Box, Button, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormProps, PhoneNumberForms } from "..";
import React from "react";

interface IChangeNumberFormProps extends IFormProps {}

const ChangeNumberForm: React.FC<IChangeNumberFormProps> = ({
	onClose,
	onFormChange,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<{ phoneNumber: string }>();

	const onSubmit: SubmitHandler<{ phoneNumber: string }> = (data) => {
		// Add your login logic here using the data object
		console.log("Login successful", data);
		onFormChange(PhoneNumberForms.VERIFY);
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				maxWidth: "500px",
				padding: "20px",
			}}
		>
			<Typography variant="h5" mb={2} textAlign={"center"} fontWeight={"bold"}>
				تغییر شماره موبایل
			</Typography>
			<TextField
				fullWidth
				autoFocus
				label="شماره موبایل جدید"
				{...register("phoneNumber", {
					required: "وارد کردن شماره موبایل الزامی است",
					pattern: {
						value: /^09\d{9}$/,
						message: "فرمت شماره موبایل صحیح نمی‌باشد",
					},
					minLength: {
						value: 11,
						message: "شماره موبایل شما باید ۱۱ رقم باشد",
					},
				})}
				inputMode="tel"
				error={Boolean(errors.phoneNumber)}
				helperText={
					errors.phoneNumber?.message ? <>{errors.phoneNumber.message}</> : null
				}
				margin="normal"
				sx={{ mt: 2 }}
			/>
			<Button
				type="submit"
				variant="contained"
				color="primary"
				fullWidth
				sx={{ mt: 2 }}
			>
				تغییر شماره
			</Button>
		</Box>
	);
};

export default ChangeNumberForm;

