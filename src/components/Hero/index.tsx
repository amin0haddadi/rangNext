"use client";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import Image from "next/image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
	{
		label: "San Francisco – Oakland Bay Bridge, United States",
		imgPath: "https://cdn.khanoumi.com/adw/638441037339367466.jpg?w=1500",
	},
	{
		label: "Bird",
		imgPath: "https://cdn.khanoumi.com/adw/638446412227416000.jpg?w=1500",
	},
	{
		label: "Bali, Indonesia",
		imgPath: "https://cdn.khanoumi.com/adw/638441037339367466.jpg?w=1500",
	},
	{
		label: "Goč, Serbia",
		imgPath: "https://cdn.khanoumi.com/adw/638446412227416000.jpg?w=1500",
	},
];

const Hero = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	return (
		<Box sx={{ width: "100%", flexGrow: 1, position: "relative" }}>
			<AutoPlaySwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{images.map((step, index) => (
					<Box key={step.label} width={"100%"}>
						{Math.abs(activeStep - index) <= 2 ? (
							<Image
								width={1440}
								height={900}
								style={{
									display: "block",
									width: "100%",
									height: "60%",
									aspectRatio: 3,
								}}
								src={step.imgPath}
								alt={step.label}
							/>
						) : null}
					</Box>
				))}
			</AutoPlaySwipeableViews>
			<Button
				size="large"
				onClick={handleNext}
				disabled={activeStep === maxSteps - 1}
				sx={{ position: "absolute", top: "45%", right: 20 }}
			>
				{theme.direction === "rtl" ? (
					<ArrowBackIosIcon />
				) : (
					<ArrowForwardIosIcon />
				)}
			</Button>
			<Button
				size="large"
				onClick={handleBack}
				disabled={activeStep === 0}
				sx={{ position: "absolute", top: "45%", left: 20 }}
			>
				{theme.direction === "rtl" ? (
					<ArrowForwardIosIcon />
				) : (
					<ArrowBackIosIcon />
				)}
			</Button>
			<MobileStepper
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				steps={maxSteps}
				position="static"
				activeStep={activeStep}
				nextButton={<Button sx={{ display: "none" }}></Button>}
				backButton={<Button sx={{ display: "none" }}></Button>}
			/>
		</Box>
	);
};

export default Hero;
