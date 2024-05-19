import CardImage from "@/components/Card/CardImage";
import { formatPriceToIranRial } from "@/lib/utils";
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import Link from "next/link";

interface IProductGridItemProps {
	product: ProductBase;
}

const ProductGridItem: React.FC<IProductGridItemProps> = ({ product }) => {
	const available = product.quantity > 0;
	return (
		<Card
			variant="elevation"
			sx={{
				position: "relative",
				":hover": { "& > :first-of-type": { display: "grid" } },
			}}
		>
			<Link
				href={`/dashboard/products/${product._id}`}
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
						<CardImage product={product} />
					</CardMedia>
					<CardContent sx={{ textAlign: "center" }}>
						<Typography gutterBottom variant="h5">
							{product.name}
						</Typography>
						<Typography variant="h6" fontWeight={600}>
							{formatPriceToIranRial(product.price)}
						</Typography>
						{available ? (
							<Typography variant="h6" fontWeight={600}>
								تعداد: {product.quantity}
							</Typography>
						) : (
							<Typography variant="h6" fontWeight={500} color={"red"}>
								ناموجود
							</Typography>
						)}
					</CardContent>
				</CardActionArea>
			</Link>
		</Card>
	);
};

export default ProductGridItem;
