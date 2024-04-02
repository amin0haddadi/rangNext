import { FC, useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import Link from "next/link";

interface SubSubCategoriesProps {
	subCategoryId: number;
}
const SubSubCategories: FC<SubSubCategoriesProps> = ({ subCategoryId }) => {
	const [subSubCategories, setSubSubCategories] = useState<any>();

	useEffect(() => {
		fetch(`http://localhost:3550/categories/${subCategoryId}/subsubcategories`)
			.then((res) => res.json())
			.then((data) => setSubSubCategories(data));
	}, []);
	return (
		<>
			{subSubCategories?.map((x: any, i: number) => (
				<Typography
					key={x._id}
					fontSize={17}
					fontWeight={900}
					color={"grey"}
					my={0.5}
				>
					<Button
						LinkComponent={Link}
						href={`/category/${x._id}`}
						size="large"
						sx={{
							":hover": {
								backgroundColor: "black",
								color: "white",
							},
							borderRadius: 5,
						}}
					>
						{x.name}
					</Button>
				</Typography>
			))}
		</>
	);
};

export default SubSubCategories;
