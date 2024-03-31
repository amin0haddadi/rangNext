import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FC, useEffect, useState } from "react";
import GrandChildTabs from "../GrandChildTabs";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

interface IChildTabProps {
	categoryId: number;
}
const ChildTabs: FC<IChildTabProps> = ({ categoryId }) => {
	const [value, setValue] = useState(0);
	const [subCategories, setSubCategories] = useState<any>();

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const handleHover = (
		event: React.MouseEvent<HTMLElement>,
		newValue: number
	) => {
		setValue(newValue);
	};

	useEffect(() => {
		fetch(`http://localhost:3550/categories/${categoryId}/subcategories`)
			.then((res) => res.json())
			.then((data) => setSubCategories(data));
	}, []);
	return (
		<Box sx={{ minWidth: 400 }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					{subCategories?.map((x: any, i: number) => (
						<Tab
							label={x.name}
							{...a11yProps(i)}
							key={x._id}
							onMouseEnter={(e) => handleHover(e, i)}
							sx={{ fontSize: 17, fontWeight: 900, paddingX: 4 }}
						/>
					))}
				</Tabs>
			</Box>
			{subCategories?.map((x: any, i: number) => (
				<CustomTabPanel value={value} index={i} key={x._id}>
					<GrandChildTabs subCategoryId={x._id} />
				</CustomTabPanel>
			))}
		</Box>
	);
};
export default ChildTabs;
