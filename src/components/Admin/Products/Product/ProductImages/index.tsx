import GridView from "@/components/GridView";
import { Grid } from "@mui/material";
import ProductImage from "./ProductImage";
import { Dispatch, SetStateAction } from "react";
import AddProductImage from "./AddProductImage";

interface IProductImagesProps {
	product: Product;
	onChange: Dispatch<SetStateAction<boolean>>;
}

const ProductImages: React.FC<IProductImagesProps> = ({
	product: { id, images },
	onChange,
}) => {
	const count = images.length;
	return (
		<GridView>
			{images.map((img) => (
				<Grid item key={img.id} xs={1}>
					<ProductImage id={id} image={img} count={count} onChange={onChange} />
				</Grid>
			))}
			<Grid item xs={1}>
				<AddProductImage id={id} onChange={onChange} />
			</Grid>
		</GridView>
	);
};

export default ProductImages;
