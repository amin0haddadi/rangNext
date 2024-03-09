"use client";
import React, { FC, useContext, useState } from "react";
import { createContext } from "react";

const ActiveStepContext = createContext<any>(undefined);

const ActiveStepProvider: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<ActiveStepContext.Provider
			value={{ activeStep, setActiveStep, handleNext, handleBack }}
		>
			{children}
		</ActiveStepContext.Provider>
	);
};

export { ActiveStepContext, ActiveStepProvider };
