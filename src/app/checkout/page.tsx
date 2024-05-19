import CheckoutStepper from "@/components/Stepper";
import { FC } from "react";
import CheckoutProvider from "@/context/checkout";
import { Container } from "@mui/material";

interface ICheckoutProps {
	searchParams?: {
		Authority?: string;
		Status?: "OK" | "NOK";
	};
}

const Checkout: FC<ICheckoutProps> = ({ searchParams }) => {
	return (
		<Container component="main" sx={{ py: 5, px: "2rem !important" }}>
			<CheckoutProvider {...searchParams}>
				<CheckoutStepper />
			</CheckoutProvider>
		</Container>
	);
};

export default Checkout;
