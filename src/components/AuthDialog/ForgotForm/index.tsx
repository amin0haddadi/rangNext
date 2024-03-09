"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AuthForms, IAuthFormProps } from "..";

interface IForgotFormProps extends IAuthFormProps {}

const ForgotForm: React.FC<IForgotFormProps> = ({ onClose, onFormChange }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		// Add your login logic here using the data object
		console.log("Login successful", data);
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				maxWidth: "500px",
				margin: "auto",
				padding: "20px",
			}}
		>
			<Typography variant="h5" mb={2} textAlign={"center"} fontWeight={"bold"}>
				فراموشی رمز عبور
			</Typography>
			<TextField
				fullWidth
				label="شماره موبایل *"
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
				بازیابی رمز
			</Button>
			<Stack direction={"row"} sx={{ mt: 2 }} justifyContent={"space-between"}>
				<Button variant="text" onClick={() => onFormChange(AuthForms.LOGIN)}>
					ورود به حساب کاربری
				</Button>
				<Button variant="text" onClick={() => onFormChange(AuthForms.REGISTER)}>
					ایجاد حساب کاربری
				</Button>
			</Stack>
		</Box>
	);
};

export default ForgotForm;
