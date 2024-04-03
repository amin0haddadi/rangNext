"use client";
import PersonIcon from "@mui/icons-material/Person";
import { Button, Dialog, DialogContent, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import ForgotForm from "./ForgotForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Link from "next/link";
import { Context } from "@/context/User";

export enum AuthForms {
	REGISTER,
	LOGIN,
	FORGOT,
}

export interface IAuthFormProps {
	onClose: () => void;
	onFormChange: (form: AuthForms) => void;
}
interface AuthDialogProps {
	position: "cart" | "header" | "bottomNavigation";
}

const AuthDialog: React.FC<AuthDialogProps> = ({ position }) => {
	const [currentForm, setCurrentForm] = useState<AuthForms>(AuthForms.REGISTER);
	const [open, setOpen] = useState(false);
	const { user } = useContext(Context);

	const handleChangeForm = (form: AuthForms) => {
		setCurrentForm(form);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const loginOrProfile = user.username ? (
		<Button
			component={Link}
			href="/profile"
			size="large"
			aria-label="profile"
			color="inherit"
		>
			<PersonIcon />
		</Button>
	) : position === "header" || position === "bottomNavigation" ? (
		<Button variant="text" color="inherit" onClick={handleClickOpen}>
			ثبت نام / ورود
		</Button>
	) : (
		<Button
			variant="contained"
			color="primary"
			size="large"
			fullWidth
			onClick={handleClickOpen}
		>
			ثبت نام / ورود
		</Button>
	);

	return (
		<>
			{loginOrProfile}
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
