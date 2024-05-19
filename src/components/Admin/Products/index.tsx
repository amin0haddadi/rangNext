"use client";
import { LIMIT } from "@/constants";
import { fetchAdminProducts } from "@/lib/api/admin/products";
import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import SearchInput from "../SearchInput";
import ProductForm from "./ProductForm";
import ProductGrid from "./ProductGrid";

interface IProductsProps {
	page: number;
}

const Products: React.FC<IProductsProps> = ({ page }) => {
	const [searchValue, setSearchValue] = useState<string>("");
	const [products, setProducts] = useState<ProductBase[]>([]);
	const [count, setCount] = useState<number>(1);

	useEffect(() => {
		const fetchData = async () => {
			const { products, totalPages } = await fetchAdminProducts({
				search: searchValue,
				page,
				limit: LIMIT,
			});
			setProducts(products);
			setCount(totalPages);
		};
		fetchData();
	}, [page, searchValue]);

	return (
		<Stack gap={5}>
			<ProductForm />
			<Box>
				<SearchInput
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</Box>
			<ProductGrid products={products} count={count} />
		</Stack>
	);
};

export default Products;
