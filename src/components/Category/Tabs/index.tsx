import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import ChildTabs from "./ChildTabs";

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
	const [categories, setCategories] = useState<any>();

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
		fetch("http://localhost:3550/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: "background.paper",
				display: "flex",
				minHeight: 400,
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
				{categories?.map((x: any, i: number) => (
					<Tab
						label={x.name}
						{...a11yProps(x._id)}
						key={x._id}
						onMouseEnter={(e) => handleHover(e, i)}
						sx={{
							fontSize: 16,
							fontWeight: 600,
							paddingX: 5,
							paddingY: 2,
							":hover": { bgcolor: "background.paper", color: "red" },
						}}
					/>
				))}
			</Tabs>
			{categories?.map((x: any, i: number) => (
				<TabPanel value={value} index={i} key={x._id}>
					<ChildTabs categoryId={x._id} />
				</TabPanel>
			))}
		</Box>
	);
};
export default VerticalTabs;
