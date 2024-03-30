import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FC, useState } from "react";

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
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
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
	options: string[][];
}
const ChildTabs: FC<IChildTabProps> = ({ options }) => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const handleHover = (
		event: React.MouseEvent<HTMLElement>,
		newValue: number
	) => {
		setValue(newValue);
	};

	return (
		<Box>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					{options?.map((x, i) => (
						<Tab
							label={x[0]}
							{...a11yProps(i)}
							key={i}
							onMouseEnter={(e) => handleHover(e, i)}
							sx={{ fontSize: 17, fontWeight: 900, paddingX: 4 }}
						/>
					))}
				</Tabs>
			</Box>
			{options?.map((x, i) => (
				<CustomTabPanel value={value} index={i} key={i}>
					{x[i]}
				</CustomTabPanel>
			))}
		</Box>
	);
};
export default ChildTabs;
