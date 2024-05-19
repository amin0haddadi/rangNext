import { patchProduct } from "@/lib/api/admin/products";
import { Paper, Stack } from "@mui/material";
import { isEqual } from "lodash";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ProductPatchFormFields from "./ProductPatchForm";
import ProductPatchFormButtons from "./ProductPatchFormButtons";

interface IProductInfoProps {
	id: string;
	name: string;
	price: number;
	quantity: number;
	description: string;
	category: Category;
}

export type FormFields = {
	name: string;
	price: string;
	quantity: string;
	description: string;
	categoryId: string;
};

const ProductInfo: React.FC<IProductInfoProps> = ({
	id,
	name,
	price,
	quantity,
	description,
	category,
}) => {
	const [defaultValues, setDefaultValues] = useState<FormFields>(() => ({
		name,
		price: price.toString(),
		quantity: quantity.toString(),
		description,
		categoryId: category._id,
	}));

	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
		watch,
	} = useForm<FormFields>({
		defaultValues,
	});

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		const formData = {
			...data,
			quantity: +data.quantity,
			price: +data.price,
		};
		await patchProduct({ id, data: formData });
		setDefaultValues(data);
	};

	const handleCancelChanges = () => {
		reset();
	};

	const handleChange = watch();

	const hasChanged = useMemo(
		() => isEqual(handleChange, defaultValues),
		[handleChange, defaultValues]
	);

	return (
		<Paper component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{ p: 3 }}>
			<Stack direction={"row"}>
				<ProductPatchFormFields
					register={register}
					errors={errors}
					category={category}
				/>
				<ProductPatchFormButtons
					handleCancelChanges={handleCancelChanges}
					hasChanged={hasChanged}
					productId={id}
				/>
			</Stack>
		</Paper>
	);
};

export default ProductInfo;
