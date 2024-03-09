import { FC } from "react";
import DesktopCheckShop from "./CheckShop";
import { useMediaQuery } from "@mui/material";
import MobileCheckShop from "./MobileCheckShop";
import TransferCheck from "./TransferCheck";

interface IStepperPagesProps {
	activeStep: number;
}
const StepperPages: FC<IStepperPagesProps> = ({ activeStep }) => {
	const isMobile = useMediaQuery("(max-width:700px)");
	return (
		<>
			{activeStep === 0 ? (
				<>{isMobile ? <MobileCheckShop /> : <DesktopCheckShop />}</>
			) : activeStep === 1 ? (
				<TransferCheck />
			) : activeStep === 2 ? (
				<>Code block for step 2</>
			) : activeStep === 3 ? (
				<>Code block for step 3</>
			) : (
				<>Code block for default case</>
			)}
		</>
	);
};

export default StepperPages;
