import {
	Box,
	Typography,
	Container,
	Link as MLink,
	Stack,
	Divider,
	Paper,
} from "@mui/material";
import Link from "next/link";
import styles from "./style.module.css";

const Copyright = () => {
	return (
		<Stack
			direction={"row"}
			alignItems={"center"}
			justifyContent={"space-between"}
			flexWrap={"wrap"}
		>
			<Typography variant="caption" fontWeight="bold" color="text.secondary">
				کلیه حقوق مادی و معنوی این سایت متعلق به فروشگاه 70Rang می‌باشد
			</Typography>
			<Box dir={"ltr"}>
				<Typography variant="caption" fontWeight="bold" color="text.secondary">
					<MLink component={Link} color="inherit" href="/dashboard">
						70Rang.ir
					</MLink>
					{" - "}
					{new Date().getFullYear()}
					{" © Copyright"}
				</Typography>
			</Box>
		</Stack>
	);
};

const Address = () => {
	return (
		<Box>
			<Typography variant="h6">آدرس فروشگاه:</Typography>
			<Typography variant="subtitle1">
				لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
				از طراحان گرافیک است
			</Typography>
		</Box>
	);
};

const LinkSection = () => {
	return (
		<Box className={styles["footer-grid-section"]}>
			<Box className={styles["logo-section"]}>
				<Paper sx={{ width: 128, height: 128 }}>
					{/* logo or eNamad */}logo
				</Paper>
			</Box>
			<Box className={styles["links-section"]}>
				<Paper sx={{ width: 128, height: 200 }}>
					{/* footer links */} additional links
				</Paper>
				<Paper sx={{ width: 128, height: 200 }}>
					{/* footer links */} additional links
				</Paper>
				<Paper sx={{ width: 128, height: 200 }}>
					{/* footer links */} additional links
				</Paper>
			</Box>
			<Box className={styles["extra-section"]}>
				<Paper sx={{ width: 128, height: 128 }}>
					{/* logo or eNamad */}extra
				</Paper>
			</Box>
		</Box>
	);
};

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				py: 3,
				px: 2,
				mt: "auto",
				bgcolor: "gainsboro",
			}}
		>
			<Container>
				{/* <LinkSection /> */}
				{/* <Divider /> */}
				<Address />
				<Divider />
				<Copyright />
			</Container>
		</Box>
	);
};

export default Footer;
