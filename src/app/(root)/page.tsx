import ProductCard from "@/components/Card";
import GridView from "@/components/GridView";
import Slider from "@/components/Slider";
import { Grid } from "@mui/material";
import Image from "next/image";

const Home = async () => {
	const res = await fetch("http://localhost:3550/products", {
		cache: "no-cache",
	});
	if (!res.ok) {
		throw new Error("HTTP error! status:");
	}
	const p = await res.json();
	return (
		<>
			<Slider>
				{p?.products.map((product: any) => (
					<ProductCard key={product.id} product={product} />
				))}
			</Slider>

			<GridView>
				{p?.products.map((pro: ProductBase, i: number) => (
					<Grid item key={i} xs={1}>
						<ProductCard key={i} product={pro} />
					</Grid>
				))}
			</GridView>
		</>
	);
};

export default Home;
