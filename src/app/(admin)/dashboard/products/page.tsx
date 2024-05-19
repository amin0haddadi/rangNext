import Products from "@/components/Admin/Products";
import { FC } from "react";

interface IProductsPageProps {
	searchParams: {
		page?: string;
	};
}

const ProductsPage: FC<IProductsPageProps> = async ({ searchParams }) => {
	const props = {
		page: Number(searchParams?.page) || 1,
	};
	return <Products {...props} />;
};

export default ProductsPage;
