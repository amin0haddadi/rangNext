import { SubmitHandler, useForm } from "react-hook-form";
import { IFormProps, PhoneNumberForms } from "..";
import { Box, Button, TextField, Typography } from "@mui/material";

interface IVerifyNewNumberForm extends IFormProps {}
type FieldValues = {
	otp: string;
};

const VerifyNewNumberForm: React.FC<IVerifyNewNumberForm> = ({
	onClose,
	onFormChange,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
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
				تایید شماره موبایل
			</Typography>
			<TextField
				fullWidth
				autoFocus
				label="کد تایید"
				{...register("otp", {
					required: "وارد کردن کد تایید الزامی است",
					pattern: {
						value: /^\d{5}$/,
						message: "کد تایید ۵ رقمی است",
					},
					minLength: {
						value: 5,
						message: "کد تایید ۵ رقمی است",
					},
				})}
				inputMode="tel"
				error={Boolean(errors.otp)}
				helperText={errors.otp?.message ? <>{errors.otp.message}</> : null}
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
				تایید شماره
			</Button>
		</Box>
	);
};

export default VerifyNewNumberForm;

