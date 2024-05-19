import GridView from "@/components/GridView";
import Pagination from "@/components/Pagination";
import { LIMIT } from "@/constants";
import { Grid } from "@mui/material";
import ProductGridItem from "./ProductGridItem";

interface IProductListProps {
	products: ProductBase[];
	count: number;
}

const ProductGrid: React.FC<IProductListProps> = ({ products, count }) => {
	return (
		<>
			<GridView>
				{products.map((product) => (
					<Grid item key={product._id} xs={1}>
						<ProductGridItem product={product} />
					</Grid>
				))}
			</GridView>
			<Pagination totalPages={count} />
		</>
	);
};

export default ProductGrid;
