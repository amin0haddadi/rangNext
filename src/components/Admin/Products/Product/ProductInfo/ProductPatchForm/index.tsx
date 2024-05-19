import { fetchAdminCategories } from "@/lib/api/admin/categories";
import {
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextareaAutosize,
	TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormFields } from "..";

interface IProductPatchFormProps {
	register: UseFormRegister<FormFields>;
	errors: FieldErrors<FormFields>;
	category: Category;
}

const ProductPatchFormFields: React.FC<IProductPatchFormProps> = ({
	register,
	errors,
	category,
}) => {
	const [categories, setCategories] = useState<Category[]>();

	useEffect(() => {
		const fetchData = async () => {
			const {
				data: { categories },
			} = await fetchAdminCategories({ search: "" });
			setCategories(categories);
		};
		fetchData();
	}, []);

	return (
		<Stack width={500} spacing={3} mr={"auto"}>
			<TextField
				fullWidth
				label="نام محصول"
				{...register("name", {
					required: "وارد کردن نام محصول الزامی است",
				})}
				error={Boolean(errors.name)}
				helperText={errors.name?.message ? <>{errors.name.message}</> : null}
				margin="normal"
			/>
			<TextField
				fullWidth
				label="قیمت محصول"
				type="number"
				{...register("price", {
					required: "وارد کردن قیمت الزامی است",
				})}
				error={Boolean(errors.price)}
				helperText={errors.price?.message ? <>{errors.price.message}</> : null}
				margin="normal"
			/>
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
			<FormControl fullWidth>
				<InputLabel id="select-label">دسته‌بندی</InputLabel>
				<Select
					labelId="select-label"
					label="دسته‌بندی"
					{...register("categoryId", {
						required: "انتخاب دسته‌بندی الزامی است",
					})}
					error={Boolean(errors.categoryId)}
					defaultValue={category.id}
				>
					{categories?.map((category) => (
						<MenuItem key={category.id} value={category.id}>
							{category.name}
						</MenuItem>
					))}
				</Select>
				<FormHelperText>
					{errors.categoryId?.message ? <>{errors.categoryId.message}</> : null}
				</FormHelperText>
			</FormControl>
			<TextareaAutosize
				style={{ fontFamily: "vazirmatn" }}
				minRows={4}
				placeholder="توضیحات محصول ..."
				{...register("description", {
					required: "وارد کردن توضیحات الزامی است",
				})}
			/>
		</Stack>
	);
};

export default ProductPatchFormFields;
