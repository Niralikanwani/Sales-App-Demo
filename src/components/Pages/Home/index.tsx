import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import SalesOrder from "../SalesOrder";

// Tab Panel
interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
	className?: string;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, className, value, index, ...other } = props;
	return (
		<div
			role="tabpanel"
			className={className}
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box className="tab-panel-wrapper">{children}</Box>}
		</div>
	);
};

const a11yProps = (index: number) => {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
};

const Home: React.FC = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<Tabs
				value={value}
				variant="scrollable"
				allowScrollButtonsMobile
				onChange={handleChange}
			>
				<Tab label="SALES ORDER" {...a11yProps(0)} />
				<Tab label="SEARCH ORDERS" {...a11yProps(1)} />
				<Tab label="DELIVERY SHEET" {...a11yProps(2)} />
				<Tab label="IN PRODUCTION" {...a11yProps(3)} />
				<Tab label="INVOICE" {...a11yProps(4)} />
			</Tabs>
			<TabPanel value={value} index={0}>
				<SalesOrder />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<h2>Search Orders Page</h2>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<h2>Delivery Sheet Page</h2>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<h2>In Production Page</h2>
			</TabPanel>
			<TabPanel value={value} index={4}>
				<h2>Invoice Page</h2>
			</TabPanel>
		</>
	);
};

export default Home;
