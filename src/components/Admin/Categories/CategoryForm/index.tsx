"use client";
import { postCategory } from "@/lib/api/admin/categories";
import { fetchCategories } from "@/lib/api/categories";
import {
	Box,
	Button,
	Divider,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ICreateCategory {
	categoryName: string;
}

interface ICategoryFormProps {
	onChange: Dispatch<SetStateAction<Category[]>>;
}

const CategoryForm: React.FC<ICategoryFormProps> = ({ onChange }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ICreateCategory>();

	const [newData, setNewData] = useState<Category[]>([]);

	const title = "دسته بندی";

	useEffect(() => {
		fetch("http://localhost:3550/categories")
			.then((res) => res.json())
			.then((data) => {
				setNewData(data);
			});
	}, []);

	const onSubmit: SubmitHandler<ICreateCategory> = async (data) => {
		await postCategory({ name: data.categoryName });
		onChange(newData);
		reset();
	};

	return (
		<Paper sx={{ p: 3 }}>
			<Typography variant="h5" fontWeight={"bold"}>
				{title}
			</Typography>
			<Divider></Divider>
			<Box
				component="form"
				onSubmit={handleSubmit(onSubmit)}
				sx={{
					maxWidth: "500px",
					margin: "auto",
					padding: "20px",
				}}
			>
				<Stack spacing={3}>
					<Stack direction={"row"} spacing={3}>
						<TextField
							fullWidth
							label="نام دسته بندی"
							{...register("categoryName", {
								required: "وارد کردن نام دسته بندی الزامی است",
							})}
							error={Boolean(errors.categoryName)}
							helperText={
								errors.categoryName?.message ? (
									<>{errors.categoryName.message}</>
								) : null
							}
							margin="normal"
						/>
					</Stack>
				</Stack>

				<Button
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
					sx={{ mt: 2 }}
				>
					ثبت
				</Button>
			</Box>
		</Paper>
	);
};

export default CategoryForm;
