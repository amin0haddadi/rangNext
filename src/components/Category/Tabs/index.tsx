import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import ChildTabs from "./ChildTabs";

const options = [
	["ارایشی", "براق کننده", "رژلب جامد", "رژلب مایع"],
	["اکسسوری", "بدلیجات", "کمربند"],
	["مردانه", "اسپرت", "مجلسی"],
];
const options1 = [
	["براق کننده", "رژلب جامد", "رژلب مایع"],
	["بدلیجات", "کمربند"],
	["اسپرت", "مجلسی"],
];

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 1 }}>{children}</Box>}
		</Box>
	);
};

const a11yProps = (index: number) => {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
};

const VerticalTabs = () => {
	const [value, setValue] = useState<number>(0);

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
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: "background.paper",
				display: "flex",
				height: 400,
			}}
		>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				sx={{
					bgcolor: "#eeeeee",
					py: 2,
					"& .MuiTabs-indicator": {
						display: "none",
					},
					borderRight: 1,
					borderColor: "#eeeeee",
				}}
			>
				{options?.map((x, i) => (
					<Tab
						label={x[0]}
						{...a11yProps(i)}
						key={i}
						onMouseEnter={(e) => handleHover(e, i)}
						sx={{
							fontSize: 16,
							fontWeight: 600,
							paddingX: 4,
							paddingY: 2,
							":hover": { bgcolor: "background.paper", color: "red" },
						}}
					/>
				))}
			</Tabs>
			{options?.map((x, i) => (
				<TabPanel value={value} index={i} key={i}>
					<ChildTabs options={value === 1 ? options : options1} />
				</TabPanel>
			))}
		</Box>
	);
};
export default VerticalTabs;
