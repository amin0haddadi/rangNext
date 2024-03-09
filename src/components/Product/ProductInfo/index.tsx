import { Box, Button, Typography } from "@mui/material";

interface IProductInfoProps extends React.PropsWithChildren {
	product: Product;
}

const ProductInfo: React.FC<IProductInfoProps> = ({ children, product }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
				height: "100%",
			}}
		>
			{children}
			<Typography variant="h4" component={"p"}>
				{product.price} تومان
			</Typography>
			<Typography
				variant="body1"
				sx={{ wordWrap: "break-word", overflowWrap: "break-word" }}
			>
				{product.description}
			</Typography>
			<Button variant="contained" sx={{ mt: "auto !important", mb: 2 }}>
				اضافه به سبد خرید
			</Button>
		</Box>
	);
};

export default ProductInfo;
