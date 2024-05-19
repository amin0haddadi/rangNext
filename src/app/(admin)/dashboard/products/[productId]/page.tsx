import Product from "@/components/Admin/Products/Product";

interface IProductPageProps {
	params: {
		productId: string;
	};
}

const ProductPage: React.FC<IProductPageProps> = async ({ params }) => {
	return <Product id={params.productId} />;
};

export default ProductPage;
