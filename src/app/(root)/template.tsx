import SimpleBottomNavigation from "@/components/BottomNavigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Container } from "@mui/material";

const Template = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<Hero />
			<Container component="main" sx={{ py: 5 }}>
				{children}
			</Container>
			<Footer />
			<SimpleBottomNavigation />
		</>
	);
};

export default Template;
