import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Deposits from "./Deposits";
import Orders from "./Orders";

const Dashboard: React.FC = () => {
	return (
		<>
			<Toolbar />
			<Container maxWidth="lg">
				<Grid container spacing={3}>
					{/* Recent Deposits */}
					<Grid item xs={12} md={4} lg={3}>
						<Paper
							sx={{
								p: 2,
								display: "flex",
								flexDirection: "column",
								height: 240,
							}}
						>
							<Deposits />
						</Paper>
					</Grid>
					{/* Recent Orders */}
					<Grid item xs={12}>
						<Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
							<Orders />
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Dashboard;
