"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";

type CheckoutContext = {
	activeStep: number;
	setActiveStep: Dispatch<SetStateAction<CheckoutSteps>>;
	handleNext: () => void;
	handleBack: () => void;
	Authority?: string;
	Status?: "OK" | "NOK";
};

const initialContext: CheckoutContext = {
	activeStep: 0,
	setActiveStep: () => {},
	handleNext: () => {},
	handleBack: () => {},
};

export const checkoutContext = createContext(initialContext);

export enum CheckoutSteps {
	CHECK_CART_ITEMS,
	CHECK_USER_INFO,
	CHECK_PAYMENT_METHOD,
	CHECK_PAYMENT_RESULT,
}

interface ICheckoutProviderProps extends React.PropsWithChildren {
	Authority?: string;
	Status?: "OK" | "NOK";
}

const CheckoutProvider: React.FC<ICheckoutProviderProps> = ({
	children,
	Authority,
	Status,
}) => {
	const [activeStep, setActiveStep] = useState<CheckoutSteps>(
		Authority && Status ? 3 : 0
	);

	const handleNext = () => {
		setActiveStep((prev) => (prev < 3 ? prev + 1 : prev));
	};

	const handleBack = () => {
		setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
	};

	return (
		<checkoutContext.Provider
			value={{
				activeStep,
				setActiveStep,
				handleNext,
				handleBack,
				Authority,
				Status,
			}}
		>
			{children}
		</checkoutContext.Provider>
	);
};

export default CheckoutProvider;
