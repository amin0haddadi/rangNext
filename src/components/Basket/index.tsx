"use client";
import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BasketDrawer from "./BasketDrawer";
import { useState } from "react";

const basketCounter = 4;
const BasketButton = () => {
	const [openBasket, setOpenBasket] = useState(false);
	const handleBasketDrawerClose = () => {
		setOpenBasket(false);
	};
	const handleBasketDrawerOpen = () => {
		setOpenBasket(true);
	};

	return (
		<>
			<IconButton
				aria-label="add to shopping cart"
				size="small"
				color="inherit"
				onClick={handleBasketDrawerOpen}
			>
				<Badge badgeContent={basketCounter} color="secondary">
					<AddShoppingCartIcon />
				</Badge>
			</IconButton>
			<BasketDrawer
				handleDrawerOpen={handleBasketDrawerOpen}
				handleDrawerClose={handleBasketDrawerClose}
				open={openBasket}
			/>
		</>
	);
};

export default BasketButton;
