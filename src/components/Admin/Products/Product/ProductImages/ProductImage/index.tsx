import { URL } from "@/constants";
import { deleteProductImage } from "@/lib/api/admin/products";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface IProductImageProps {
	id: string;
	image: Product["images"][0];
	count: number;
	onChange: Dispatch<SetStateAction<boolean>>;
}

const ProductImage: React.FC<IProductImageProps> = ({
	id,
	image,
	count,
	onChange,
}) => {
	const handleDelete = async () => {
		await deleteProductImage(id, image.id);
		onChange((prev) => !prev);
	};

	return (
		<Box>
			<Image
				alt=""
				src={URL.IMAGES + image.id}
				width={500}
				height={500}
				layout="responsive"
				objectFit="contain"
			/>
			<Button
				variant="outlined"
				color="error"
				fullWidth
				onClick={handleDelete}
				disabled={count < 2}
			>
				حذف عکس
			</Button>
		</Box>
	);
};

export default ProductImage;
