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
	// const {
	// 	data: { product },
	// } = await fetchProduct(params.productId);
	// const {
	// 	data: { category },
	// } = await fetchCategory({ id: product.category.id });

	const res = await fetch(
		`http://localhost:3550/products/${params.productId}`,
		{
			cache: "no-cache",
		}
	);
	if (!res) {
		throw new Error("HTTP error! status:");
	}
	const p = await res.json();

	const resCategory = await fetch("http://localhost:3550/products", {
		cache: "no-cache",
	});
	if (!res.ok) {
		throw new Error("HTTP error! status:");
	}
	const pCategory = await resCategory.json();

	return (
		<>
			<Product product={p} />
			<Divider>
				<Typography variant="h6" component={"h5"} textAlign={"center"}>
					محصولات مرتبط
				</Typography>
			</Divider>
			<Slider>
				{pCategory?.products.map((product: any) => (
					<ProductCard key={product.id} product={product} />
				))}
			</Slider>
		</>
	);
};

export default ProductPage;
