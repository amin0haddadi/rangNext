import { Metadata } from "next";

export const metadata: Metadata = {
	title: "",
	description: "",
};

interface IProductLayoutProps extends React.PropsWithChildren {}

const ProductLayout: React.FC<IProductLayoutProps> = ({
	children,
}): JSX.Element => {
	return <>{children}</>;
};

export default ProductLayout;
