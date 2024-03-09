import {
	Divider,
	IconButton,
	List,
	ListItem,
	Typography,
	SwipeableDrawer,
	Box,
	Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import React, { FC } from "react";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import BasketItem from "./BasketItems";
import Link from "next/link";

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	marginTop: 20,
	justifyContent: "flex-start",
	height: 10,
	position: "sticky",
	top: 0,
}));

const drawerWidth = { xs: "90%", sm: "55%", md: "38%" };
const pages = [
	["لباس", "تیشرت", "شلوار", "کاپشن"],
	["اکسسوری", "کلاه", "کمربند"],
	["کفش", "اسپرت", "مجلسی"],
];
const totalPrice = "2/320/000 تومان";

interface IDrawerProps {
	handleDrawerClose: () => void;
	handleDrawerOpen: () => void;
	open: Boolean;
}

const BasketDrawer: FC<IDrawerProps> = ({
	handleDrawerClose,
	handleDrawerOpen,
	open,
}): JSX.Element => {
	return (
		<SwipeableDrawer
			sx={{
				width: drawerWidth,
				"& .MuiDrawer-paper": {
					width: drawerWidth,
					boxSizing: "border-box",
				},
			}}
			onClose={handleDrawerClose}
			onOpen={handleDrawerOpen}
			open={!!open}
			anchor="right"
		>
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					<CloseIcon />
				</IconButton>
				<Typography
					variant="h6"
					sx={{
						display: "flex",
						flexGrow: 1,
						fontWeight: 700,
						color: "inherit",
						textDecoration: "none",
						justifyContent: "center",
					}}
				>
					سبد خرید
				</Typography>
				<Box mr={2}>
					<LooksOneIcon />
				</Box>
			</DrawerHeader>
			<Divider />
			<List sx={{ overflowY: "auto" }}>
				{pages.map((page) => (
					<ListItem key={page[0]}>
						<BasketItem />
					</ListItem>
				))}
			</List>
			<Box
				sx={{
					px: 3,
					py: 2,
					mt: "auto",
				}}
			>
				<Box
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
					borderTop="solid 2px lightgrey"
					paddingY={3}
				>
					<Typography fontWeight={300} fontSize={20} color={"grey"}>
						مبلغ سبد خرید :
					</Typography>
					<Typography fontWeight={900} color={"black"} fontSize={20}>
						{totalPrice}
					</Typography>
				</Box>
				<Box borderTop="solid 2px lightgrey" paddingY={3}>
					<Button
						variant="contained"
						fullWidth
						size="large"
						LinkComponent={Link}
						href="/checkout"
					>
						<Typography variant="h5">نهایی کردن خرید</Typography>
					</Button>
				</Box>
			</Box>
		</SwipeableDrawer>
	);
};

export default BasketDrawer;
