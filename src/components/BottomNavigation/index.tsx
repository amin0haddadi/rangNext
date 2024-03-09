"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Paper } from "@mui/material";
import HeaderDrawer from "./Drawer";
import BasketButton from "../Basket";
import Link from "next/link";
import { SearchDialog } from "../Search";

const SimpleBottomNavigation = () => {
	const [value, setValue] = React.useState(0);
	const [open, setOpen] = React.useState(false);

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	return (
		<Box pb={{ xs: 7, md: 0 }}>
			<Paper
				sx={{
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
					display: { xs: "block", md: "none" },
				}}
				elevation={3}
			>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction
						onClick={handleDrawerOpen}
						color="inherit"
						label="منو"
						icon={<MenuIcon />}
					/>
					<BottomNavigationAction
						color="inherit"
						label="پروفایل"
						icon={<AccountCircleIcon />}
						LinkComponent={Link}
						href="/profile"
					/>
					<BottomNavigationAction
						color="inherit"
						label="جستجو"
						icon={<SearchDialog />}
					/>
					<BottomNavigationAction
						label="سبد خرید"
						color="inherit"
						icon={<BasketButton />}
					/>
				</BottomNavigation>
			</Paper>
			<HeaderDrawer
				open={open}
				handleDrawerClose={handleDrawerClose}
				handleDrawerOpen={handleDrawerOpen}
			/>
		</Box>
	);
};

export default SimpleBottomNavigation;
