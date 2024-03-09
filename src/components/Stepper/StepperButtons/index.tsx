import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { FC, useContext, useState } from "react";
import { ActiveStepContext } from "@/context/activeStep";

interface IStepperButton {
	length: number;
}
const StepperButton: FC<IStepperButton> = ({ length }): JSX.Element => {
	const isMobile = useMediaQuery("(max-width:700px)");
	const { activeStep, handleNext, handleBack } = useContext(ActiveStepContext);

	return (
		<>
			<Box display={isMobile ? "none" : "flex"} flexDirection={"row"} pt={2}>
				<Button
					type="button"
					LinkComponent={Link}
					href={activeStep === 0 ? "/" : ""}
					onClick={handleBack}
					color="primary"
					sx={{
						mr: 1,
						width: "20%",
						boxShadow: 7,
					}}
				>
					<NavigateNextIcon />
					<Typography m={1} flexGrow={1} textAlign={"center"}>
						{activeStep === 1 ? "بررسی سبد خرید" : "برگشت"}
					</Typography>
				</Button>
				<Box sx={{ flex: "1 1 auto" }} />
				<Button
					onClick={handleNext}
					variant="contained"
					color="primary"
					sx={{
						mr: 1,
						width: "20%",
						boxShadow: 7,
						display: `${activeStep !== 1 && !isMobile ? "flex" : "none"}`,
					}}
				>
					<Typography m={1} flexGrow={1} textAlign={"center"}>
						{activeStep === length - 1 ? "Finish" : "ثبت سفارش"}
					</Typography>
					<NavigateBeforeIcon />
				</Button>
			</Box>
			<Box display={isMobile ? "flex" : "none"} flexDirection={"row"} pt={2}>
				<Button
					type="button"
					LinkComponent={Link}
					href={activeStep === 0 ? "/" : ""}
					onClick={handleBack}
					color="primary"
					fullWidth
					sx={{
						mr: 1,
						boxShadow: 7,
					}}
				>
					<NavigateNextIcon />
					<Typography m={1} flexGrow={1} textAlign={"center"}>
						بازگشت
					</Typography>
				</Button>
			</Box>
			<Box
				display={activeStep !== 1 && isMobile ? "flex" : "none"}
				flexDirection={"row"}
				pt={2}
			>
				<Button
					onClick={handleNext}
					variant="contained"
					color="primary"
					fullWidth
					sx={{ mr: 1, boxShadow: 7 }}
				>
					<Typography m={1} flexGrow={1} textAlign={"center"}>
						{activeStep === length - 1 ? "Finish" : "ثبت سفارش"}
					</Typography>
					<NavigateBeforeIcon />
				</Button>
			</Box>
		</>
	);
};

export default StepperButton;
