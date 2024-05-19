"use client";
import { List, Paper } from "@mui/material";
import CategoryItem from "./CategoryItem";

interface ICategoryListProps {
	categories: Category[];
	onChange: () => void;
}

const CategoryList: React.FC<ICategoryListProps> = ({
	categories,
	onChange,
}) => {
	return (
		<Paper sx={{ p: 3 }}>
			<List sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
				{categories.map((item) => (
					<CategoryItem key={item.id} {...item} onChange={onChange} />
				))}
			</List>
		</Paper>
	);
};

export default CategoryList;
