"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";
import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./style.css";
import styles from "./style.module.css";

const SampleNextArrow: React.FC<any> = ({ onClick }) => {
	return (
		<Box
			className={`${styles["slick-arrow"]} ${styles["slick-next"]}`}
			onClick={onClick}
			sx={{ background: "black", color: "white" }}
		>
			<ArrowBackIcon />
		</Box>
	);
};

const SamplePrevArrow: React.FC<any> = ({ onClick }) => {
	return (
		<Box
			className={`${styles["slick-arrow"]} ${styles["slick-prev"]}`}
			onClick={onClick}
			sx={{ background: "black", color: "white" }}
		>
			<ArrowForwardIcon />
		</Box>
	);
};

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: true,
	rtl: true,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				draggable: true,
			},
		},
	],
};

interface ISliderProps extends React.PropsWithChildren {}

const Slider: React.FC<ISliderProps> = ({ children }) => {
	return (
		<div className="slider-container">
			<SlickSlider {...settings}>{children}</SlickSlider>
		</div>
	);
};

export default Slider;
