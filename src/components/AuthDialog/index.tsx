"use client";
import PersonIcon from "@mui/icons-material/Person";
import { Button, Dialog, DialogContent, IconButton } from "@mui/material";
import { useState } from "react";
import ForgotForm from "./ForgotForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Link from "next/link";

export enum AuthForms {
	REGISTER,
	LOGIN,
	FORGOT,
}

export interface IAuthFormProps {
	onClose: () => void;
	onFormChange: (form: AuthForms) => void;
}

const AuthDialog: React.FC = () => {
	const [currentForm, setCurrentForm] = useState<AuthForms>(AuthForms.REGISTER);
	const [open, setOpen] = useState(false);

	const handleChangeForm = (form: AuthForms) => {
		setCurrentForm(form);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button variant="contained" color="secondary" onClick={handleClickOpen}>
				ثبت نام / ورود
			</Button>
			<Button
				component={Link}
				href="/profile"
				size="large"
				aria-label="profile"
				color="inherit"
				sx={{ mr: -1 }}
			>
				<PersonIcon />
			</Button>

			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					{(() => {
						switch (currentForm) {
							case AuthForms.REGISTER:
								return (
									<RegisterForm
										onClose={handleClose}
										onFormChange={handleChangeForm}
									/>
								);
							case AuthForms.LOGIN:
								return (
									<LoginForm
										onClose={handleClose}
										onFormChange={handleChangeForm}
									/>
								);
							case AuthForms.FORGOT:
								return (
									<ForgotForm
										onClose={handleClose}
										onFormChange={handleChangeForm}
									/>
								);
						}
					})()}
				</DialogContent>
			</Dialog>
		</>
	);
};

export default AuthDialog;
