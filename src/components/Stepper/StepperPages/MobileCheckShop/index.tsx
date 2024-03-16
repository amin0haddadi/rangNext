import { useLayoutEffect, useState } from "react";
import { Box, Paper, Typography, Divider, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import QuantityInput from "@/components/Basket/BasketDrawer/BasketItems/NumberInput";
import TotalPrice from "../TotalPrice";

const MobileCheckShop = () => {
	const [p, setP] = useState<any>();

	useLayoutEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setP(data));
	}, []);
	return (
		<Box my={5} mx={2}>
			{p?.map((pro: any) => (
				<Box
					key={pro.id}
					sx={{ p: 2, mb: 1.5 }}
					component={Paper}
					elevation={5}
				>
					<Typography mb={-1}>{pro.title.slice(0, 15)}</Typography>
					<Divider variant="middle" />
					<Box mt={-2}>
						<Box
							display={"flex"}
							justifyContent={"space-between"}
							alignItems={"center"}
							mb={2}
						>
							<Typography color={"grey"}>قیمت:</Typography>
							<Typography>{pro.price} تومان</Typography>
						</Box>
						<Box
							display={"flex"}
							justifyContent={"space-between"}
							alignItems={"center"}
							mb={2}
						>
							<Typography color={"grey"}>تعداد:</Typography>
							<Typography>
								<QuantityInput />
							</Typography>
						</Box>
						<Box
							display={"flex"}
							justifyContent={"space-between"}
							alignItems={"center"}
							mb={2}
						>
							<Typography color={"grey"}>جمع قیمت:</Typography>
							<Typography>{pro.rating.rate} تومان</Typography>
						</Box>
						<Box display={"flex"} justifyContent={"flex-end"}>
							<IconButton sx={{ "&:hover": { color: "red" } }}>
								<DeleteOutlineIcon fontSize="medium" />
							</IconButton>
						</Box>
					</Box>
				</Box>
			))}
			<TotalPrice />
		</Box>
	);
};

export default MobileCheckShop;
