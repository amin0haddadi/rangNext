import { Grid } from "@mui/material";

interface IGridViewProps extends React.PropsWithChildren {}

const GridView: React.FC<IGridViewProps> = ({ children }) => {
	return (
		<Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
			{children}
		</Grid>
	);
};

export default GridView;
