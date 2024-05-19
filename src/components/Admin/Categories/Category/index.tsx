import GridView from "@/components/GridView";
import Pagination from "@/components/Pagination";
import { LIMIT } from "@/constants";
import { changeCategory, fetchAdminCategory } from "@/lib/api/admin/categories";
import {
	Box,
	Button,
	Grid,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ProductGridItem from "../../Products/ProductGrid/ProductGridItem";
import DeleteCategoryDialog from "./DeleteCategoryDialog";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface ICategoryProps {
	id: string;
	page: number;
}

const Category: React.FC<ICategoryProps> = ({ id, page }) => {
	const [category, setCategory] = useState<
		Category & { products: ProductBase[] }
	>();
	const [count, setCount] = useState<number>(0);
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const { handleSubmit, register } = useForm<FieldValues>();
	const [flag, setFlag] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			const {
				data: { category, count },
			} = await fetchAdminCategory({ id, page });
			setCategory(category);
			setCount(count);
		};
		fetchData();
	}, [id, page, flag]);

	const handleChange: SubmitHandler<FieldValues> = async (data) => {
		await changeCategory({ name: data.newValue, id: data.id });
		setIsEditing(false);
		setFlag((prev) => !prev);
	};

	const renderCategoryName = () =>
		isEditing ? (
			<Box
				component={"form"}
				sx={{
					display: "flex",
					gap: 2,
				}}
				onSubmit={handleSubmit(handleChange)}
			>
				<TextField defaultValue={category?.name} {...register("newValue")} />
				<TextField
					hidden={true}
					sx={{ display: "none" }}
					{...register("id")}
					value={id}
				/>
				<Button
					variant="contained"
					color="warning"
					onClick={() => setIsEditing(false)}
				>
					لغو تغییر
				</Button>
				<Button variant="contained" type="submit">
					تایید
				</Button>
			</Box>
		) : (
			<Box
				sx={{
					display: "flex",
					gap: 5,
				}}
			>
				<Typography variant="h5">{category?.name}</Typography>
				<Button variant="outlined" onClick={() => setIsEditing(true)}>
					تغییر
				</Button>
			</Box>
		);

	return (
		<>
			{category && (
				<Stack spacing={4}>
					<Paper
						sx={{ display: "flex", justifyContent: "space-between", p: 3 }}
					>
						{renderCategoryName()}
						<DeleteCategoryDialog categoryId={id} canDelete={!count} />
					</Paper>
					<GridView>
						{category.products.map((product) => (
							<Grid item key={product.id} xs={1}>
								<ProductGridItem product={product} />
							</Grid>
						))}
					</GridView>
					{!!count && <Pagination totalPages={Math.ceil(count / LIMIT)} />}
				</Stack>
			)}
		</>
	);
};

export default Category;
