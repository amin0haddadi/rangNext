import { Box, Button, Stack, Typography } from "@mui/material";
import DeleteProductDialog from "./DeleteProductDialog";

interface IProductPatchFormButtonsProps {
	hasChanged: boolean;
	handleCancelChanges: () => void;
	productId: string;
}

const ProductPatchFormButtons: React.FC<IProductPatchFormButtonsProps> = ({
	handleCancelChanges,
	hasChanged,
	productId,
}) => {
	return (
		<Stack justifyContent={"space-between"} alignItems={"end"}>
			<Box>
				<DeleteProductDialog productId={productId} />
			</Box>
			<Stack direction={"row"} gap={2}>
				<Button
					variant="contained"
					color="success"
					size="large"
					disabled={hasChanged}
					type="submit"
				>
					<Typography fontWeight={"bold"}>ثبت</Typography>
				</Button>
				<Button
					variant="outlined"
					color="error"
					size="large"
					onClick={handleCancelChanges}
					disabled={hasChanged}
				>
					<Typography fontWeight={"bold"}>لغو تغییرات</Typography>
				</Button>
			</Stack>
		</Stack>
	);
};

export default ProductPatchFormButtons;
