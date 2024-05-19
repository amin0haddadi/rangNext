import { changeCategory } from "@/lib/api/admin/categories";
import {
	Box,
	Button,
	ListItem,
	Link as MLink,
	Paper,
	TextField,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface ICategoryItemProps {
	name: string;
	id: string;
	onChange: () => void;
}

const CategoryItem: React.FC<ICategoryItemProps> = ({ name, id, onChange }) => {
	const { register, handleSubmit } = useForm();
	const [isEditing, setIsEditing] = useState(false);

	const handleChange: SubmitHandler<FieldValues> = async (data) => {
		await changeCategory({ name: data.newValue, id: data.id });
		setIsEditing(false);
		onChange();
	};

	return (
		<Paper key={id} variant="outlined">
			<ListItem>
				{isEditing ? (
					<Box
						component={"form"}
						sx={{
							width: "100%",
							display: "flex",
							alignItems: "center",
						}}
						onSubmit={handleSubmit(handleChange)}
					>
						<TextField defaultValue={name} {...register("newValue")} />
						<TextField
							hidden={true}
							sx={{ display: "none" }}
							{...register("id")}
							value={id}
						/>
						<Button
							variant="contained"
							color="warning"
							sx={{ ml: "auto", mr: 1 }}
							onClick={() => setIsEditing(false)}
						>
							لغو تغییر
						</Button>
						<Button variant="contained" type="submit">
							تایید
						</Button>
					</Box>
				) : (
					<>
						<MLink component={Link} href={`/dashboard/categories/${id}`}>
							{name}
						</MLink>
						<Button
							variant="outlined"
							onClick={() => setIsEditing(true)}
							sx={{ ml: "auto" }}
						>
							تغییر
						</Button>
					</>
				)}
			</ListItem>
		</Paper>
	);
};

export default CategoryItem;
