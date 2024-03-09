"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Stack } from "@mui/material";
import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./style.module.css";
import Image from "next/image";

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

const appendDots = (dots: any) => (
	<Stack
		component={"ul"}
		direction={"row"}
		sx={{
			justifyContent: "center",
			alignItems: "center",
			margin: 0,
			paddingBottom: 1,
			overflowX: "scroll",
			position: "relative",
			bottom: "0",
			"& > li": {
				marginInline: "1.5rem",
				height: "auto",
			},
		}}
	>
		{dots}
	</Stack>
);

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	draggable: true,
	arrows: true,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
	appendDots,
};

const renderSingleImage = (imageSrc: string) => (
	<Image
		src={imageSrc}
		alt=""
		width={400}
		height={400}
		style={{
			display: "block",
			width: "100%",
			aspectRatio: "1/1",
			objectFit: "cover",
		}}
	/>
);

interface ISlideShowProps {
	images: Product["images"];
}

const SlideShow: React.FC<ISlideShowProps> = ({ images }) => {
	const customPaging = (i: number) => (
		<Image width={50} height={50} alt="" src={images[i]} />
	);

	if (images.length === 1) {
		return <Box>{renderSingleImage(images[0])}</Box>;
	}

	return (
		<Box className="slider-container">
			<SlickSlider {...settings} customPaging={customPaging}>
				{images.map((img, index) => (
					<Box key={index}>{renderSingleImage(img)}</Box>
				))}
			</SlickSlider>
		</Box>
	);
};

export default SlideShow;
