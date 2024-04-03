import { Box, Grid, Hidden, Typography } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";
import ProductInfo from "./ProductInfo";
import SlideShow from "./SlideShow";

interface IProductProps extends React.PropsWithChildren {
	product: any;
}

const Product: React.FC<IProductProps> = ({ product }) => {
	const arr = [
		product.images[0],
		product.images[0],
		product.images[0],
		product.images[0],
	];
	const nameAndBreadcrumbs = (
		<Box>
			<Breadcrumbs product={product.name} category={product.categoryId} />
			<Typography variant="h4" component={"h4"}>
				{product.name}
			</Typography>
		</Box>
	);
	return (
		<>
			<Hidden smUp>{nameAndBreadcrumbs}</Hidden>
			<Grid container columns={{ xs: 1, sm: 2, md: 2, lg: 3 }} spacing={4}>
				<Grid item xs={1}>
					<SlideShow images={arr} />
				</Grid>
				<Grid item xs={1} flexGrow={1}>
					<ProductInfo product={product}>
						<Hidden smDown>{nameAndBreadcrumbs}</Hidden>
					</ProductInfo>
				</Grid>
			</Grid>
		</>
	);
};

export default Product;
