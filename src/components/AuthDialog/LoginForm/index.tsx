"use client";
import { ILoginUserParams, loginUser } from "@/lib/api/auth";
import { setTokens } from "@/lib/utils";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	Box,
	Button,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthForms, IAuthFormProps } from "..";

interface ILoginFormProps extends IAuthFormProps {}

const LoginForm: React.FC<ILoginFormProps> = ({ onClose, onFormChange }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginUserParams>();
	const [showPassword, setShowPassword] = useState(false);

	const onSubmit: SubmitHandler<ILoginUserParams> = async (data) => {
		const _data = { username: "09046116105", password: "amir6105" };
		try {
			// todo : fix types for user
			const res = await loginUser(_data as ILoginUserParams);
			if (res.statusCode !== 201) {
				throw new Error(res.message);
			}
			setTokens(res.data.tokens);
			// todo : create context for user and set user
			onClose();
		} catch (error) {
			console.error(error);
			alert(error);
		}
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
				ورود به حساب کاربری
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
			<TextField
				fullWidth
				type={showPassword ? "text" : "password"}
				label="رمز عبور *"
				{...register("password", {
					required: "وارد کردن رمز عبور الزامی است",
					pattern: {
						value: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/,
						message: "رمز عبور باید شامل حرف و عدد باشد",
					},
					minLength: {
						value: 8,
						message: "رمز عبور شما باید حداقل ۸ کارکتر باشد",
					},
				})}
				error={Boolean(errors.password)}
				helperText={
					errors.password?.message ? <>{errors.password.message}</> : null
				}
				margin="normal"
				sx={{ mt: 2 }}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			<Button
				type="submit"
				variant="contained"
				color="primary"
				fullWidth
				sx={{ mt: 2 }}
			>
				ورود
			</Button>
			<Stack direction={"row"} sx={{ mt: 2 }} justifyContent={"space-between"}>
				<Button variant="text" onClick={() => onFormChange(AuthForms.FORGOT)}>
					فراموشی رمز عبور
				</Button>
				<Button variant="text" onClick={() => onFormChange(AuthForms.REGISTER)}>
					ایجاد حساب کاربری
				</Button>
			</Stack>
		</Box>
	);
};

export default LoginForm;
