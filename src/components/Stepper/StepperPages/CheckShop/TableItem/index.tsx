import { FC } from "react";
import { Box, Paper, Typography, TableCell, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";
import QuantityInput from "@/components/Basket/BasketDrawer/BasketItems/NumberInput";

interface TableItemProps {
	product: ProductBase;
}
const TableItem: FC<TableItemProps> = ({ product }) => {
	return (
		<>
			<TableCell
				sx={{ display: "flex", alignItems: "center" }}
				component="th"
				scope="row"
			>
				<Image
					src={product.image}
					alt="product-search-image"
					width={65}
					height={65}
					style={{
						display: "block",
						objectFit: "cover",
						borderRadius: 10,
						aspectRatio: 3 / 2,
					}}
				></Image>
				<Typography margin={2}>{product.title.slice(0, 15)}</Typography>
			</TableCell>
			<TableCell>
				<Typography textAlign={"center"}>{product.price} تومان</Typography>
			</TableCell>
			<TableCell>
				<QuantityInput />
			</TableCell>
			<TableCell>
				<Typography>{product.rating.rate}</Typography>
			</TableCell>
			<TableCell>
				<IconButton sx={{ "&:hover": { color: "red" } }}>
					<DeleteOutlineIcon fontSize="medium" />
				</IconButton>
			</TableCell>
		</>
	);
};

export default TableItem;
