import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import UserInfoDialog from "./UserInfoDialog";
import PhoneNumberDialog from "./PhoneNumberDialog";

interface UserProfileProps {
	name: string;
	email: string;
	number: string;
	lastname: string;
}

const Profile: React.FC<UserProfileProps> = ({
	name,
	lastname,
	email,
	number,
}) => {
	return (
		<Paper elevation={3}>
			<Stack
				direction={"row"}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexWrap={"wrap"}
				p={2}
			>
				<Box display="flex" alignItems="center">
					<Avatar
						sx={{ width: 70, height: 70, marginRight: 2, marginLeft: 5 }}
					/>
					<Box>
						<Typography variant="h6">
							{name} {lastname}
						</Typography>
						<Typography variant="body1">{email}</Typography>
						<Typography variant="body1">{number}</Typography>
					</Box>
				</Box>
				<Stack
					gap={1}
					direction={{ xs: "row", sm: "column" }}
					flexGrow={{ xs: 1, sm: 0 }}
					mt={{ xs: 2, sm: 0 }}
				>
					<UserInfoDialog />
					<PhoneNumberDialog />
				</Stack>
			</Stack>
		</Paper>
	);
};

export default Profile;
