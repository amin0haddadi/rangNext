import {
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import AddToCartButton from "./AddToCartButton";

interface IProductCardProps {
	product: ProductBase;
}
const ProductCard: FC<IProductCardProps> = ({ product }) => {
	return (
		<Card
			variant="elevation"
			sx={{
				position: "relative",
				":hover": { "& > :first-of-type": { display: "grid" } },
			}}
		>
			<AddToCartButton />
			<Link
				href={`/product/${product.id}`}
				style={{ display: "block", color: "inherit" }}
			>
				<CardActionArea>
					<CardMedia
						sx={{
							background: "black",
							position: "relative",
							":hover": { "& > :first-of-type": { display: "grid" } },
						}}
					>
						<Image
							src={product.image}
							// todo : fix Product type (merge ProductBase and Product data type)
							alt={product?.description}
							width={400}
							height={400}
							style={{
								display: "block",
								width: "100%",
								height: "300px",
								objectFit: "cover",
							}}
						/>
					</CardMedia>
					<CardContent sx={{ textAlign: "center" }}>
						<Typography gutterBottom variant="h5">
							{product.title.slice(0, 15)}
						</Typography>
						<Typography variant="h6" fontWeight={600}>
							{product.price} تومان
						</Typography>
					</CardContent>
				</CardActionArea>
			</Link>
		</Card>
	);
};

export default ProductCard;
