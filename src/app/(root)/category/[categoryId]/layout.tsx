import { Metadata } from "next";

interface ICategoryLayoutProps extends React.PropsWithChildren {}

export const metadata: Metadata = {
	title: "",
	description: "",
};

const CategoryLayout: React.FC<ICategoryLayoutProps> = ({
	children,
}): JSX.Element => {
	return <>{children}</>;
};

export default CategoryLayout;
