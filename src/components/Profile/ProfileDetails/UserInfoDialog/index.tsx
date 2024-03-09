"use client";
import { Button, Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
import UserInfoForm from "./UserInfoForm";

const formFields = {
	firstName: "mohammadreza",
	lastName: "soltani",
	phoneNumber: "09129634081",
	email: "Soltan@gmail.com",
	state: "تهران",
	city: "تهران",
	postalCode: "12457896",
	address: "address",
};

const UserInfoDialog = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<Button
				variant="contained"
				color="primary"
				onClick={handleClickOpen}
				sx={{ flexGrow: 1 }}
			>
				ویرایش اطلاعات کاربری
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				maxWidth={"sm"}
				fullWidth={true}
			>
				<DialogContent>
					<UserInfoForm {...formFields} />
				</DialogContent>
			</Dialog>
		</>
	);
};

export default UserInfoDialog;
