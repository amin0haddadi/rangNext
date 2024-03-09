import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import Image from "next/image";
import Link from "next/link";

const ShopPage = () => {
	return (
		<Grid container gap={4}>
			<Grid item xs={12} md>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					mb={3}
				>
					<Typography variant="h4" component="h4">
						آدرس فروشگاه
					</Typography>
					<Link
						href="https://maps.app.goo.gl/Q9AACKYmHnZCQpc4A"
						target="_blank"
					>
						<Button variant="outlined" type="button">
							<PlaceIcon sx={{ mr: 1 }} />
							نمایش روی نقشه
						</Button>
					</Link>
				</Stack>
				<Typography variant="body1" component="p">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
					از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
					سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
				</Typography>
				<Divider />
				<Typography variant="body1" component="p">
					ساعات کاری فروشگاه های حضوری:
					<br />
					هر روز هفته (شنبه تا پنج شنبه و جمعه) از ساعت 11 الی 22
				</Typography>
				<Divider />
				<Typography variant="body1" component="p">
					امور مشتریان: 91005005 - 021
					<br />
					شماره پیام رسان واتساپ و تلگرام: 09305000500{" "}
				</Typography>
			</Grid>
			<Grid
				item
				container
				xs={12}
				md
				display={"grid"}
				gap={2}
				gridTemplateColumns={"repeat(4, auto)"}
				gridTemplateRows={"repeat(5, auto)"}
			>
				<Grid bgcolor={"blueviolet"} item gridRow={"1/2"} gridColumn={"1/5"}>
					<Image
						src={
							"https://images.unsplash.com/photo-1604278666650-0f3eab3c6644?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						width={200}
						height={200}
						alt=""
						style={{
							width: "100%",
							height: "100%",
							display: "block",
							objectFit: "cover",
						}}
					/>
				</Grid>
				<Grid bgcolor={"blueviolet"} item gridRow={"2/6"} gridColumn={"1/3"}>
					<Image
						src={
							"https://images.unsplash.com/photo-1706303192345-294f72ac7d4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
						}
						width={200}
						height={200}
						alt=""
						style={{
							width: "100%",
							height: "100%",
							display: "block",
							objectFit: "cover",
						}}
					/>
				</Grid>
				<Grid bgcolor={"blueviolet"} item gridRow={"2/4"} gridColumn={"3/5"}>
					<Image
						src={
							"https://images.unsplash.com/photo-1604278666650-0f3eab3c6644?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						width={200}
						height={200}
						alt=""
						style={{
							width: "100%",
							height: "100%",
							display: "block",
							objectFit: "cover",
						}}
					/>
				</Grid>
				<Grid bgcolor={"blueviolet"} item gridRow={"4/6"} gridColumn={"3/5"}>
					<Image
						src={
							"https://images.unsplash.com/photo-1604278666650-0f3eab3c6644?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						width={200}
						height={200}
						alt=""
						style={{
							width: "100%",
							height: "100%",
							display: "block",
							objectFit: "cover",
						}}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ShopPage;
