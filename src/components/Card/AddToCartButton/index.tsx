"use client";
import { Chip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddToCartButton = () => {
	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		console.log("added to cart");
	};
	return (
		<Chip
			icon={<AddIcon sx={{ fill: "white" }} />}
			onClick={handleClick}
			color="primary"
			sx={{
				position: "absolute",
				zIndex: 3,
				display: "none",
				placeItems: "center",
				width: "50px",
				height: "25px",
				padding: 0,
				top: 5,
				right: 5,
				opacity: "0.8",
				"& > *": {
					margin: "0 !important",
				},
			}}
		/>
	);
};

export default AddToCartButton;
