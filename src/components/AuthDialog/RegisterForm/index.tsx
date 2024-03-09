"use client";
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
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AuthForms, IAuthFormProps } from "..";

interface IRegisterFormProps extends IAuthFormProps {}

const RegisterForm: React.FC<IRegisterFormProps> = ({
	onClose,
	onFormChange,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [showPassword, setShowPassword] = useState(false);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		// Add your login logic here using the data object
		console.log("Register successful", data);
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
				ایجاد حساب کاربری
			</Typography>
			<Stack direction={"row"} justifyContent={"space-between"}>
				<TextField
					label="نام *"
					{...register("firstName", {
						required: "وارد کردن نام الزامی است",
						minLength: {
							value: 3,
							message: "نام باید حداقل ۳ کارکتر باشد",
						},
					})}
					error={Boolean(errors.firstName)}
					helperText={
						errors.firstName?.message ? <>{errors.firstName.message}</> : null
					}
					margin="normal"
				/>
				<TextField
					label="نام خانوادگی *"
					{...register("lastName", {
						required: "وارد کردن نام خانوادگی الزامی است",
						minLength: {
							value: 3,
							message: "نام خانوادگی باید حداقل ۳ کارکتر باشد",
						},
					})}
					error={Boolean(errors.lastName)}
					helperText={
						errors.lastName?.message ? <>{errors.lastName.message}</> : null
					}
					margin="normal"
				/>
			</Stack>
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

			<Stack direction={"row"} justifyContent={"space-between"} gap={2} mt={2}>
				<Button
					onClick={() => onFormChange(AuthForms.LOGIN)}
					type="button"
					variant="outlined"
					color="primary"
					fullWidth
				>
					ورود
				</Button>
				<Button type="submit" variant="contained" color="primary" fullWidth>
					ثبت نام
				</Button>
			</Stack>
		</Box>
	);
};

export default RegisterForm;
