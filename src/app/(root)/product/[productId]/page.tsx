import ProductCard from "@/components/Card";
import Product from "@/components/Product";
import Slider from "@/components/Slider";
import { fetchCategory } from "@/lib/api/categories";
import { fetchProduct } from "@/lib/api/products";
import { Box, Divider, Typography } from "@mui/material";

interface IProductPageProps {
	params: {
		productId: string;
	};
}

const ProductPage: React.FC<IProductPageProps> = async ({ params }) => {
	const product = await fetchProduct(params.productId);
	const category = await fetchCategory({ id: product.categoryId._id });
	console.log(category);

	const relatedProducts =
		category.products.length > 2 ? (
			<Slider>
				{category.products
					.filter((item: any) => item._id !== params.productId)
					.map((product: any) => (
						<ProductCard key={product._id} product={product} />
					))}
			</Slider>
		) : (
			<Box maxWidth={400}>
				{category.products
					.filter((item: any) => item._id !== params.productId)
					.map((product: any) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Box>
		);

	return (
		<>
			<Product product={product} />
			{category.products.filter((item: any) => item._id !== params.productId)
				.length ? (
				<Divider>
					<Typography variant="h6" component={"h5"} textAlign={"center"}>
						محصولات مرتبط
					</Typography>
				</Divider>
			) : (
				""
			)}

			{relatedProducts}
		</>
	);
};

export default ProductPage;
