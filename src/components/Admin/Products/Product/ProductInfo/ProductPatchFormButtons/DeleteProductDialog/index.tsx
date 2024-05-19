import { deleteProduct } from "@/lib/api/admin/products";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IDeleteProductDialogProps {
	productId: string;
}

const DeleteProductDialog: React.FC<IDeleteProductDialogProps> = ({
	productId,
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
		await deleteProduct(productId);
		handleClose();
		router.back();
	};

	return (
		<>
			<Button
				variant="contained"
				color="error"
				size="large"
				onClick={handleClickOpen}
			>
				<Typography fontWeight={"bold"}>حذف محصول</Typography>
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>
					<Typography variant="h6">
						آیا از حذف این محصول اطمینان دارید؟
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
			</Dialog>
		</>
	);
};

export default DeleteProductDialog;
