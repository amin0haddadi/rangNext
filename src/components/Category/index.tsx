"use client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCategories } from "@/lib/api/categories";
import VerticalTabs from "./Tabs";

const CategoryMenu = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [categories, setCategories] = useState<any[]>([]);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	useEffect(() => {
		fetchCategories().then((data) => setCategories(data.data.categories));
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
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
					left: "128%",
					transform: "translateX(-50%)",
					background: "#ffffff",
				}}
			>
				<VerticalTabs />
			</Paper>
		</Box>
	);
};
export default CategoryMenu;
