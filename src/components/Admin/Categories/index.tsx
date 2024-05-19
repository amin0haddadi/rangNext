"use client";
import { fetchAdminCategories } from "@/lib/api/admin/categories";
import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import SearchInput from "../SearchInput";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";

const Categories: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [searchValue, setSearchValue] = useState<string>("");
	const [flag, setFlag] = useState<boolean>(false);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const {
	// 			data: { categories },
	// 		} = await fetchAdminCategories({ search: searchValue });
	// 		setCategories(categories);
	// 	};
	// 	fetchData();
	// }, [searchValue, flag]);

	useEffect(() => {
		fetch("http://localhost:3550/categories")
			.then((res) => res.json())
			.then((data) => {
				setCategories(data);
			});
	}, [flag]);

	return (
		<Stack gap={5}>
			<CategoryForm onChange={setCategories} />
			<Box>
				<SearchInput
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</Box>
			<CategoryList
				categories={categories}
				onChange={() => setFlag((prev) => !prev)}
			/>
		</Stack>
	);
};

export default Categories;
