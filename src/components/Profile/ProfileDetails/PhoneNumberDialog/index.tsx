"use client";
import { Button, Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
import ChangeNumberForm from "./ChangeNumberForm";
import VerifyNewNumberForm from "./VerifyNewNumberForm";

export enum PhoneNumberForms {
	CHANGE,
	VERIFY,
}

export interface IFormProps {
	onClose: () => void;
	onFormChange: (form: PhoneNumberForms) => void;
}

const PhoneNumberDialog: React.FC = () => {
	const [currentForm, setCurrentForm] = useState<PhoneNumberForms>(
		PhoneNumberForms.CHANGE
	);
	const [open, setOpen] = useState(false);

	const handleFormChange = (form: PhoneNumberForms) => {
		setCurrentForm(form);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setTimeout(() => handleFormChange(PhoneNumberForms.CHANGE), 200);
	};

	return (
		<>
			<Button
				variant="contained"
				color="primary"
				onClick={handleClickOpen}
				sx={{ flexGrow: 1 }}
			>
				ویرایش شماره موبایل
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					{(() => {
						switch (currentForm) {
							case PhoneNumberForms.CHANGE:
								return (
									<ChangeNumberForm
										onClose={handleClose}
										onFormChange={handleFormChange}
									/>
								);
							case PhoneNumberForms.VERIFY:
								return (
									<VerifyNewNumberForm
										onClose={handleClose}
										onFormChange={handleFormChange}
									/>
								);
						}
					})()}
				</DialogContent>
			</Dialog>
		</>
	);
};

export default PhoneNumberDialog;

