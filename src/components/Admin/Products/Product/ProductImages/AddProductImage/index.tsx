import { postProductImage } from "@/lib/api/admin/products";
import { AddAPhoto } from "@mui/icons-material";
import { Box, Button, IconButton, Paper } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

interface IAddProductImageProps {
	id: string;
	onChange: Dispatch<SetStateAction<boolean>>;
}

const AddProductImage: React.FC<IAddProductImageProps> = ({ id, onChange }) => {
	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const formData = new FormData();
		const listOfFiles = event.target.files
			? Array.from(event.target.files)
			: [];
		listOfFiles.forEach((file) => {
			formData.append("files", file);
		});

		await postProductImage(id, formData);
		onChange((prev) => !prev);
	};

	return (
		<Button
			component={"label"}
			variant="outlined"
			sx={{
				width: "100%",
				aspectRatio: 1,
				display: "grid",
				placeItems: "center",
			}}
		>
			<AddAPhoto fontSize="large" />
			<input
				type="file"
				style={{ display: "none" }}
				onChange={handleFileChange}
				multiple
			/>
		</Button>
	);
};

export default AddProductImage;
