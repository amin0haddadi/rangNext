"use client";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import StepperPages from "./StepperPages";
import StepperButton from "./StepperButtons";
import { ActiveStepContext } from "@/context/activeStep";

const steps = [
	{ lable: " بررسی سبد خرید", icon: ShoppingCartCheckoutIcon },
	{ lable: " اطلاعات ارسال", icon: LocalShippingIcon },
	{ lable: " نحوه پرداخت", icon: CreditCardIcon },
	{ lable: " پایان خرید", icon: DoneAllIcon },
];

const length = steps.length;

export default function CheckoutStepper() {
	const { activeStep, setActiveStep } = useContext(ActiveStepContext);

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((step) => (
					<Step key={step.lable}>
						<StepLabel
							StepIconComponent={step.icon}
							icon
							sx={{
								"& .Mui-disabled": { color: "#bdbdbd" },
							}}
						>
							{step.lable}
						</StepLabel>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length ? (
				<>
					<Typography sx={{ mt: 2, mb: 1 }}>
						All steps completed - you&apos;re finished
					</Typography>
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Box sx={{ flex: "1 1 auto" }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</>
			) : (
				<>
					<StepperPages activeStep={activeStep} />
					<StepperButton length={length} />
				</>
			)}
		</Box>
	);
}
