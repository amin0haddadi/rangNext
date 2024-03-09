import ProductCard from "@/components/Card";
import Product from "@/components/Product";
import Slider from "@/components/Slider";
import { fetchCategory } from "@/lib/api/categories";
import { fetchProduct } from "@/lib/api/products";
import { Divider, Typography } from "@mui/material";

interface IProductPageProps {
	params: {
		productId: string;
	};
}

const ProductPage: React.FC<IProductPageProps> = async ({ params }) => {
	const {
		data: { product },
	} = await fetchProduct(params.productId);
	const {
		data: { category },
	} = await fetchCategory({ id: product.category.id });

	return (
		<>
			<Product product={product} />
			<Divider>
				<Typography variant="h6" component={"h5"} textAlign={"center"}>
					محصولات مرتبط
				</Typography>
			</Divider>
			<Slider>
				{category.products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</Slider>
		</>
	);
};

export default ProductPage;
