import {
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	SwipeableDrawer,
	Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import React, { FC, useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import Detail from "./Details";

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	borderBottom: "solid 1px lightgrey",
	padding: "3px 4px",
}));

const drawerWidth = { xs: "90%", md: "40%" };

interface IDrawerProps {
	handleDrawerClose: () => void;
	handleDrawerOpen: () => void;
	open: Boolean;
}

const HeaderDrawer: FC<IDrawerProps> = ({
	handleDrawerClose,
	handleDrawerOpen,
	open,
}): JSX.Element => {
	const [categories, setCategories] = useState<any>();
	const [subSubCategories, setSubSubCategories] = useState<any>();

	useEffect(() => {
		fetch("http://localhost:3550/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	return (
		<SwipeableDrawer
			sx={{
				width: drawerWidth,
				"& .MuiDrawer-paper": {
					width: drawerWidth,
					boxSizing: "border-box",
				},
				display: { xs: "block", md: "none" },
			}}
			onClose={handleDrawerClose}
			onOpen={handleDrawerOpen}
			open={!!open}
		>
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					<CloseIcon />
				</IconButton>
			</DrawerHeader>

			<List sx={{ overflowY: "auto" }}>
				{categories?.map((Category: any) => (
					<ListItem key={Category._id}>
						<Accordion sx={{ width: "100%" }}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls={`${Category.name}-content`}
								id={Category._id}
							>
								<Typography fontWeight={900} fontSize={22}>
									{Category.name}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Detail categoryId={Category._id} />
							</AccordionDetails>
						</Accordion>
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
				<Box borderTop="solid 2px lightgrey" paddingY={2}>
					<Button
						variant="text"
						component={Link}
						href="/set"
						startIcon={<CheckroomIcon />}
						fullWidth
						size="large"
					>
						ست
					</Button>
				</Box>
				<Box borderTop="solid 2px lightgrey" paddingTop={2}>
					<Button
						variant="text"
						component={Link}
						href="/shop"
						startIcon={<LocationOnIcon />}
						fullWidth
						size="large"
					>
						خرید حضوری
					</Button>
				</Box>
			</Box>
		</SwipeableDrawer>
	);
};

export default HeaderDrawer;
