import ProductCard from "@/components/Card";
import GridView from "@/components/GridView";
import Pagination from "@/components/Pagination";
import { LIMIT } from "@/constants";
import { fetchCategory } from "@/lib/api/categories";

import { Divider, Grid, Typography } from "@mui/material";
interface ICategoryPageProps {
	params: {
		categoryId: string;
	};
	searchParams?: {
		page?: string;
		limit?: string;
	};
}

const CategoryPage: React.FC<ICategoryPageProps> = async ({
	params,
	searchParams,
}) => {
	const limit = Number(searchParams?.limit) || LIMIT;
	const page = Number(searchParams?.page) || 1;
	const category = await fetchCategory({ id: params.categoryId, limit, page });
	return (
		<>
			<Divider>
				<Typography variant="h6" component={"h4"} textAlign={"center"}>
					{category?.name}
				</Typography>
			</Divider>
			<GridView>
				{category?.products?.map((product: any) => (
					<Grid key={product._id} item xs={1}>
						<ProductCard product={product} />
					</Grid>
				))}
			</GridView>
			<Pagination totalPages={Math.ceil(category?.products?.length / limit)} />
		</>
	);
};

export default CategoryPage;
