import { Typography, Box, Divider } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const totalPrice = 5680000;

const TotalPrice = () => {
	const isMobile = useMediaQuery("(max-width:700px)");
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={isMobile ? "start" : "end"}
		>
			<Divider sx={{ width: `${isMobile ? "100%" : "40%"}` }} />
			<Box
				display="flex"
				flexDirection={"row"}
				justifyContent={"space-between"}
				width={isMobile ? "100%" : "40%"}
			>
				<Typography color="grey">مبلغ کل سبد خرید :</Typography>
				<Typography fontWeight={600} color={"black"} fontSize={20}>
					{totalPrice} تومان
				</Typography>
			</Box>
			<Divider sx={{ width: `${isMobile ? "100%" : "40%"}` }} />
		</Box>
	);
};

export default TotalPrice;
