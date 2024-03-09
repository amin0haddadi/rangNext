import { Box, Paper, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TransferLoginCheck from "./TransferLoginCheck";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { ActiveStepContext } from "@/context/activeStep";

const TransferCheck = () => {
	const { handleNext } = useContext(ActiveStepContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		// Add your buy logic here using the data object
		console.log("Buy successful", data);
		handleNext();
	};

	return (
		<Box component="form" onSubmit={handleSubmit(onSubmit)}>
			<Grid container spacing={4} my={6}>
				<Grid xs={12} md={8}>
					<Box component={Paper} elevation={5}>
						<TransferLoginCheck register={register} errors={errors} />
					</Box>
				</Grid>
				<Grid xs={12} md={4}>
					<Box
						component={Paper}
						elevation={5}
						p={3}
						display={"flex"}
						flexDirection={"column"}
					>
						<Box
							display={"flex"}
							justifyContent={"space-between"}
							alignItems={"center"}
							mb={2}
							mx={1}
						>
							<Typography color={"grey"}>مبلغ قابل پرداخت:</Typography>
							<Typography fontWeight={900} fontSize={18}>
								1250000 تومان
							</Typography>
						</Box>
						<Button type="submit" variant="contained" fullWidth size="large">
							<Typography variant="h6">نهایی سازی سفارش</Typography>
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default TransferCheck;
