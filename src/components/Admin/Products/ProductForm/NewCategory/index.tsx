import { postCategory } from "@/lib/api/admin/categories";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/system";
import { useState } from "react";

interface INewCategoryProps {
	onNewCategory: () => void;
}

const NewCategory: React.FC<INewCategoryProps> = ({ onNewCategory }) => {
	const [open, setOpen] = useState<boolean>(false);
	const [value, setValue] = useState<string>("");

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setValue("");
	};

	const onSubmit = async (e: any) => {
		e.preventDefault();
		await postCategory({ name: value });
		onNewCategory();
		handleClose();
	};

	return (
		<>
			<Button
				variant="contained"
				startIcon={<AddCircleIcon />}
				sx={{ width: { md: "50%", sm: "100%" } }}
				onClick={handleClickOpen}
			>
				دسته‌بندی جدید
			</Button>
			<Dialog
				component={"form"}
				open={open}
				onClose={handleClose}
				aria-labelledby="responsive-dialog"
			>
				<DialogTitle id="responsive-dialog">ساختن دسته‌بندی جدید</DialogTitle>
				<DialogContent sx={{ padding: 3 }}>
					<Stack>
						<TextField
							fullWidth
							label="نام دسته‌بندی"
							margin="normal"
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
					</Stack>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						لغو
					</Button>
					<Button type="submit" disabled={!value} autoFocus onClick={onSubmit}>
						تایید
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default NewCategory;
