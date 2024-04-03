import { Breadcrumbs as MBreadcrumbs, Typography } from "@mui/material";
import Link from "next/link";

interface IBreadcrumbsProps {
	product: string;
	category: Category;
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ product, category }) => {
	return (
		<MBreadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
			<Link href="/">خانه</Link>
			<Link href={`/category/${category._id}`}>{category.name}</Link>
			<Typography>{product}</Typography>
		</MBreadcrumbs>
	);
};

export default Breadcrumbs;
