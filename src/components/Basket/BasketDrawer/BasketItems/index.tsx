import { Box } from "@mui/system";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { FC } from "react";
import { IconButton, Typography } from "@mui/material";
import QuantityInput from "./NumberInput";
import ItemImage from "./ItemImage";

interface IBasketItemProps {}
const BasketItem: FC<IBasketItemProps> = () => {
	return (
		<Box
			mx={1}
			border="solid 2px lightgrey"
			borderRadius={2}
			display={"flex"}
			flexGrow={1}
			justifyContent={"space-between"}
		>
			<Box display={"flex"}>
				<Box width={100} m={1}>
					<ItemImage />
				</Box>
				<Box
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"space-between"}
					m={3}
				>
					<Typography fontWeight={900} fontSize={19} color={"black"}>
						MY SWEET BOY
					</Typography>
					<Typography color={"lightblack"} fontSize={17}>
						1/200/000 تومان
					</Typography>
				</Box>
			</Box>
			<Box display={"flex"} flexDirection={"column"} my={1}>
				<Box ml={"auto"} mb={"auto"}>
					<IconButton sx={{ "&:hover": { color: "red" } }}>
						<DeleteOutlineIcon fontSize="medium" />
					</IconButton>
				</Box>
				<Box m={1}>
					<QuantityInput />
				</Box>
			</Box>
		</Box>
	);
};

export default BasketItem;
