import ProductCard from "@/components/Card";
import GridView from "@/components/GridView";
import Slider from "@/components/Slider";
import { Grid } from "@mui/material";
import Image from "next/image";

const Home = async () => {
	const res = await fetch("https://fakestoreapi.com/products", {
		cache: "no-cache",
	});
	if (!res.ok) {
		throw new Error("HTTP error! status:");
	}
	const p = await res.json();
	return (
		<>
			<Slider>
				{p?.map((pro: ProductBase, i: number) => (
					<Image key={i} src={pro.image} width={200} height={200} alt="prod" />
				))}
			</Slider>

			<GridView>
				{p.map((pro: ProductBase, i: number) => (
					<Grid item key={i} xs={1}>
						<ProductCard key={i} product={pro} />
					</Grid>
				))}
			</GridView>
		</>
	);
};

export default Home;
