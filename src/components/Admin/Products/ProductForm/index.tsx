"use client";
import { fetchAdminCategories } from "@/lib/api/admin/categories";
import { postProduct } from "@/lib/api/admin/products";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
	Box,
	Button,
	Divider,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	TextField,
	TextareaAutosize,
	Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import NewCategory from "./NewCategory";
import { error } from "console";
import { getTokens } from "@/lib/utils";

interface ICreateProduct {
	files?: FileList; // Add this line
	quantity: string;
	name: string;
	price: string;
	categoryId: string;
	description: string;
}

const ProductForm: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [flag, setFlag] = useState<boolean>(false);
	const [fileList, setFileList] = useState<FileList | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ICreateProduct>();

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const {
	// 			data: { categories },
	// 		} = await fetchAdminCategories({ search: "" });
	// 		setCategories(categories);
	// 	};
	// 	fetchData();
	// }, [flag]);

	useEffect(() => {
		fetch("http://localhost:3550/categories")
			.then((res) => res.json())
			.then((data) => {
				setCategories(data);
			});
	}, [flag]);

	const title = "محصولات";

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFileList(event.target.files);
	};

	const onSubmit: SubmitHandler<ICreateProduct> = async (data) => {
		const formData = new FormData();
		const listOfFiles = fileList ? Array.from(fileList) : [];

		for (const key in data) {
			formData.append(key, (data as any)[key]);
		}
		listOfFiles.forEach((file) => {
			formData.append("images", file);
		});
		const { access_token } = getTokens();
		console.log(formData);
		await fetch("http://localhost:3550/products", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
			body: formData,
		});
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
					maxWidth: "50%",
					margin: "auto",
					padding: "20px",
				}}
			>
				<Stack spacing={3}>
					<Stack direction={"row"} spacing={3}>
						<TextField
							fullWidth
							label="نام محصول"
							{...register("name", {
								required: "وارد کردن نام محصول الزامی است",
							})}
							error={Boolean(errors.name)}
							helperText={
								errors.name?.message ? <>{errors.name.message}</> : null
							}
							margin="normal"
						/>
					</Stack>
					<Stack direction={"row"} spacing={3}>
						<TextField
							fullWidth
							label="قیمت محصول"
							type="number"
							{...register("price", {
								required: "وارد کردن قیمت الزامی است",
							})}
							error={Boolean(errors.price)}
							helperText={
								errors.price?.message ? <>{errors.price.message}</> : null
							}
							margin="normal"
						/>
					</Stack>
					<Stack direction={"row"} spacing={3}>
						<TextField
							fullWidth
							label="تعداد"
							type="number"
							{...register("quantity", {
								required: "وارد کردن تعداد الزامی است",
							})}
							error={Boolean(errors.quantity)}
							helperText={
								errors.quantity?.message ? <>{errors.quantity.message}</> : null
							}
							margin="normal"
						/>
					</Stack>

					<Box
						display={"flex"}
						flexDirection={{ md: "row", sm: "column" }}
						gap={2}
					>
						<Box sx={{ width: { md: "50%", sm: "100%" } }}>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">دسته‌بندی</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									label="دسته‌بندی"
									{...register("categoryId", {
										required: "انتخاب دسته‌بندی الزامی است",
									})}
									error={Boolean(errors.categoryId)}
								>
									{categories?.map((category) => (
										<MenuItem key={category._id} value={category._id}>
											{category.name}
										</MenuItem>
									))}
								</Select>
								<FormHelperText>
									{errors.categoryId?.message ? (
										<>{errors.categoryId.message}</>
									) : null}
								</FormHelperText>
							</FormControl>
						</Box>
						<NewCategory onNewCategory={() => setFlag((prev) => !prev)} />
					</Box>

					<TextareaAutosize
						minRows={4}
						placeholder="توضیحات محصول ..."
						{...register("description", {
							required: "وارد کردن توضیحات الزامی است",
						})}
					/>

					<FormHelperText>
						{errors.description?.message ? (
							<>{errors.description.message}</>
						) : null}
					</FormHelperText>

					<Button
						component="label"
						role={undefined}
						variant="contained"
						tabIndex={-1}
						startIcon={<CloudUploadIcon />}
					>
						آپلود فایل
						<input
							type="file"
							{...register("files", { onChange: handleFileChange })}
							style={{ display: "none" }}
							multiple
						/>
					</Button>
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

export default ProductForm;
