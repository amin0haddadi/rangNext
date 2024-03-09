"use client";
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

const cityArr = ["تهران", "اردبیل", "یزد", "شیراز", "گیلان", "کرمان"];

interface FormFields {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email?: string;
	state?: string;
	city?: string;
	postalCode?: string;
	address?: string;
}

const UserInfoForm: React.FC<FormFields> = (formData) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm<FormFields>();

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};

	return (
		<Stack
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			spacing={3}
			padding={1}
		>
			<Stack direction={"row"} spacing={3}>
				<TextField
					fullWidth
					defaultValue={formData.firstName}
					label="نام"
					{...register("firstName", {
						required: "وارد کردن نام الزامی است",
					})}
					error={Boolean(errors.firstName)}
					helperText={
						errors.firstName?.message ? <>{errors.firstName.message}</> : null
					}
					margin="normal"
				/>
				<TextField
					fullWidth
					defaultValue={formData.lastName}
					label="نام خانوادگی"
					{...register("lastName", {
						required: "وارد کردن نام خانوادگی الزامی است",
					})}
					error={Boolean(errors.lastName)}
					helperText={
						errors.lastName?.message ? <>{errors.lastName.message}</> : null
					}
					margin="normal"
				/>
			</Stack>
			<Stack direction={"row"} spacing={3}>
				<TextField
					fullWidth
					defaultValue={formData.phoneNumber}
					label="شماره موبایل"
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
					margin="normal"
				/>
				<TextField
					fullWidth
					defaultValue={formData.email}
					type="email"
					label="ایمیل"
					{...register("email")}
					error={Boolean(errors.email)}
					helperText={
						errors.email?.message ? <>{errors.email.message}</> : null
					}
					margin="normal"
				/>
			</Stack>
			<Stack direction={"row"} spacing={3}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">استان</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						label="استان"
						defaultValue={formData.state}
						{...register("state")}
					>
						{cityArr.map((city) => (
							<MenuItem key={city} value={city}>
								{city}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">شهر</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						label="شهر"
						defaultValue={formData.city}
						{...register("city")}
					>
						{cityArr.map((city) => (
							<MenuItem key={city} value={city}>
								{city}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<TextField
					fullWidth
					defaultValue={formData.postalCode}
					label="کدپستی"
					{...register("postalCode", {
						minLength: {
							value: 8,
							message: "کدپستی شما باید ۸ رقم باشد",
						},
					})}
					inputMode="tel"
					margin="normal"
				/>
			</Stack>
			<Stack direction={"row"} spacing={3}>
				<TextField
					fullWidth
					defaultValue={formData.address}
					label="آدرس"
					{...register("address")}
					error={Boolean(errors.address)}
					helperText={
						errors.address?.message ? <>{errors.address.message}</> : null
					}
					margin="normal"
				/>
			</Stack>
			<Stack direction={"row"} spacing={3}>
				<Button variant="outlined" color="primary" type="reset" fullWidth>
					لغو تغییرات
				</Button>
				<Button variant="contained" color="primary" type="submit" fullWidth>
					تایید اطلاعات
				</Button>
			</Stack>
		</Stack>
	);
};

export default UserInfoForm;

