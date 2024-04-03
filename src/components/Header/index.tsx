"use client";
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import Link from "next/link";
import AuthDialog from "../AuthDialog";
import BasketButton from "../Basket";
import CategoryMenu from "../Category";
import { SearchDialog } from "../Search";
import { useEffect, useState } from "react";

const pages = [{ title: "خرید حضوری", href: "/shop" }];

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [isScrolledDown, setIsScrolledDown] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollTop = document.documentElement.scrollTop;
			const scrolledDown = currentScrollTop > lastScrollTop;
			setIsScrolledDown(scrolledDown);
			setLastScrollTop(currentScrollTop);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollTop]);
	return (
		<Box
			sx={{
				flexGrow: 1,
				position: "sticky",
				top: 0,
				mb: 10,
				zIndex: 1000,
				transition: "opacity 0.5s",
				opacity: isScrolledDown ? 0 : 1,
			}}
		>
			<AppBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
				<Container>
					<Toolbar disableGutters>
						<Typography
							variant="h6"
							noWrap
							component={Link}
							href="/"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							70Rang
						</Typography>
						<Typography
							variant="h5"
							component={Link}
							href="/"
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
								justifyContent: "center",
							}}
						>
							70Rang
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								gap: 2,
								display: { xs: "none", md: "flex", fontSize: 50 },
							}}
						>
							<CategoryMenu />
							{pages.map((page, i) => (
								<Button
									key={i}
									component={Link}
									href={page.href}
									sx={{
										my: 2,
										color: "white",
										display: "block",
										fontSize: 16,
										fontWeight: 900,
									}}
								>
									{page.title}
								</Button>
							))}
						</Box>
						<Box sx={{ display: { xs: "none", md: "flex" } }}>
							<AuthDialog position="header" />
							<SearchDialog />
							<BasketButton />
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Header;
