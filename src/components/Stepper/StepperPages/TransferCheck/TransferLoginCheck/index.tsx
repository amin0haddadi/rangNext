import { Box, Paper, Typography, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface ITransferLoginCheck {
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors<FieldValues>;
}
const TransferLoginCheck: FC<ITransferLoginCheck> = ({ register, errors }) => {
	return (
		<Grid container spacing={3} p={6}>
			<Grid md={6} xs={12}>
				<TextField
					label="نام"
					variant="outlined"
					fullWidth
					autoFocus
					{...register("transferFirstName", {
						required: "وارد کردن نام الزامی است",
						minLength: {
							value: 3,
							message: "نام باید حداقل ۳ کارکتر باشد",
						},
					})}
					error={Boolean(errors.transferFirstName)}
					helperText={
						errors.transferFirstName?.message ? (
							<>{errors.transferFirstName.message}</>
						) : null
					}
				/>
			</Grid>
			<Grid md={6} xs={12}>
				<TextField
					label="نام خانوادگی"
					variant="outlined"
					fullWidth
					{...register("transferLastName", {
						required: "وارد کردن نام خانوادگی الزامی است",
						minLength: {
							value: 3,
							message: "نام خانوادگی باید حداقل ۳ کارکتر باشد",
						},
					})}
					error={Boolean(errors.transferLastName)}
					helperText={
						errors.transferLastName?.message ? (
							<>{errors.transferLastName.message}</>
						) : null
					}
				/>
			</Grid>
			<Grid md={6} xs={12}>
				<TextField
					label="شماره موبایل"
					variant="outlined"
					fullWidth
					{...register("transferPhoneNumber", {
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
					error={Boolean(errors.transferPhoneNumber)}
					helperText={
						errors.transferPhoneNumber?.message ? (
							<>{errors.transferPhoneNumber.message}</>
						) : null
					}
				/>
			</Grid>
			<Grid md={6} xs={12}>
				<TextField
					label="ایمیل"
					variant="outlined"
					fullWidth
					{...register("transferEmail", {
						required: "وارد کردن ایمیل الزامی است",
						pattern: {
							value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3})$/,
							message: "ایمیل وارد شده معتبر نیست",
						},
					})}
					error={Boolean(errors.transferEmail)}
					helperText={
						errors.transferEmail?.message ? (
							<>{errors.transferEmail.message}</>
						) : null
					}
				/>
			</Grid>
			<Grid md={4} xs={12}>
				<TextField
					label="استان"
					variant="outlined"
					fullWidth
					{...register("transferUnited", {
						required: "وارد کردن استان الزامی است",
					})}
					error={Boolean(errors.transferUnited)}
					helperText={
						errors.transferUnited?.message ? (
							<>{errors.transferUnited.message}</>
						) : null
					}
				/>
			</Grid>
			<Grid md={4} xs={12}>
				<TextField
					label="شهر"
					variant="outlined"
					fullWidth
					{...register("transferCity", {
						required: "وارد کردن شهر الزامی است",
					})}
					error={Boolean(errors.transferCity)}
					helperText={
						errors.transferCity?.message ? (
							<>{errors.transferCity.message}</>
						) : null
					}
				/>
			</Grid>
			<Grid md={4} xs={12}>
				<TextField
					label="کد پستی"
					variant="outlined"
					fullWidth
					{...register("transferPostalCode", {
						required: "وارد کردن کد پستی الزامی است",
						maxLength: { value: 10, message: "کد پستی معتبر نیست" },
						minLength: { value: 10, message: "کد پستی معتبر نیست" },
					})}
					error={Boolean(errors.transferPostalCode)}
					helperText={
						errors.transferPostalCode?.message ? (
							<>{errors.transferPostalCode.message}</>
						) : null
					}
				/>
			</Grid>
			<Grid md={12} xs={12}>
				<TextField
					label="آدرس پستی"
					variant="outlined"
					fullWidth
					{...register("transferAddress", {
						required: "وارد کردن آدرس الزامی است",
					})}
					error={Boolean(errors.transferAddress)}
					helperText={
						errors.transferAddress?.message ? (
							<>{errors.transferAddress.message}</>
						) : null
					}
				/>
			</Grid>
			<Grid md={4} xs={12}>
				<TextField
					label="تلفن ثابت (اختیاری)"
					variant="outlined"
					fullWidth
					{...register("transferTelephone")}
				/>
			</Grid>
			<Grid md={8} xs={12}>
				<TextField
					label="توضیحات (اختیاری)"
					variant="outlined"
					fullWidth
					{...register("transferTelephone")}
				/>
			</Grid>
		</Grid>
	);
};

export default TransferLoginCheck;
