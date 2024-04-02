import { FC, useEffect, useState } from "react";
import {
	ListItemButton,
	ListItemText,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SubSubCategories from "../SubCategories";

interface DetailProps {
	categoryId: number;
}
const Detail: FC<DetailProps> = ({ categoryId }) => {
	const [subCategories, setSubCategories] = useState<any>();

	useEffect(() => {
		fetch(`http://localhost:3550/categories/${categoryId}/subcategories`)
			.then((res) => res.json())
			.then((data) => setSubCategories(data));
	}, []);

	return (
		<>
			{subCategories?.map((x: any, i: number) => (
				<Accordion sx={{ width: "100%", backgroundColor: "lightgrey" }}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`${x.name}-content`}
						id={x._id}
					>
						<Typography fontWeight={800} fontSize={18}>
							{x.name}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<ListItemButton key={x._id}>
							<ListItemText>
								<SubSubCategories subCategoryId={x._id} />
							</ListItemText>
						</ListItemButton>
					</AccordionDetails>
				</Accordion>
			))}
		</>
	);
};

export default Detail;
