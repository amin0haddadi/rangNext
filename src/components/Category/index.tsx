"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Paper } from "@mui/material";
import VerticalTabs from "./Tabs";

const CategoryMenu = () => {
	return (
		<Box
			sx={{
				display: "flex",
				position: "relative",
				"&:hover": {
					"& > .dropdown": {
						visibility: "visible",
						opacity: 1,
					},
				},
			}}
		>
			<Button
				sx={{
					color: "white",
					fontSize: 16,
					fontWeight: 900,
				}}
				aria-label="more"
				id="long-button"
				aria-haspopup="true"
				startIcon={<MenuIcon />}
			>
				دسته‌بندی
			</Button>
			<Paper
				className="dropdown"
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 2,
					visibility: "hidden",
					opacity: 0,
					zIndex: 100,
					position: "absolute",
					top: "72px",
					transform: "translateX(-50%)",
					background: "#ffffff",
					width: "250px",
					left: "110%",
				}}
			>
				<VerticalTabs />
			</Paper>
		</Box>
	);
};
export default CategoryMenu;
