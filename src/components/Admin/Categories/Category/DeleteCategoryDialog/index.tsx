import { deleteCategory } from "@/lib/api/admin/categories";
import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	Tooltip,
	Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IDeleteCategoryDialogProps {
	categoryId: string;
	canDelete: boolean;
}

const DeleteCategoryDialog: React.FC<IDeleteCategoryDialogProps> = ({
	categoryId,
	canDelete,
}) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = async () => {
		await deleteCategory(categoryId);
		handleClose();
		router.replace("/dashboard/categories");
	};

	const renderDialogContent = () =>
		canDelete ? (
			<>
				<DialogTitle>
					<Typography variant="h6">
						آیا از حذف این دسته‌بندی اطمینان دارید؟
					</Typography>
				</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose} variant="outlined" color="error">
						<Typography fontWeight={"bold"}>خیر</Typography>
					</Button>
					<Button onClick={handleSubmit} variant="contained" color="success">
						<Typography fontWeight={"bold"}>بله</Typography>
					</Button>
				</DialogActions>
			</>
		) : (
			<DialogTitle>
				<Typography variant="h6">
					دسته‌بندی دارای محصول قابل حذف کردن نمی‌باشد!
				</Typography>
			</DialogTitle>
		);

	return (
		<>
			<Button
				variant="contained"
				color="error"
				size="large"
				onClick={handleClickOpen}
			>
				<Typography fontWeight={"bold"}>حذف دسته‌بندی</Typography>
			</Button>
			<Dialog open={open} onClose={handleClose}>
				{renderDialogContent()}
			</Dialog>
		</>
	);
};

export default DeleteCategoryDialog;

