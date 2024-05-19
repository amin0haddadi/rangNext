"use client";
import { fetchAdminProduct } from "@/lib/api/admin/products";
import { Paper, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ProductInfo from "./ProductInfo";
import ProductImages from "./ProductImages";

interface IProductProps {
	id: string;
}

const Product: React.FC<IProductProps> = ({ id }) => {
	const [product, setProduct] = useState<Product>();
	const [flag, setFlag] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			const {
				data: { product },
			} = await fetchAdminProduct(id);
			setProduct(product);
		};
		fetchData();
	}, [id, flag]);

	return (
		<>
			{product && (
				<>
					<Stack gap={3} mb={5}>
						<ProductInfo {...product} />
						<ProductImages product={product} onChange={setFlag} />
					</Stack>
				</>
			)}
		</>
	);
};

export default Product;
