import BarChartIcon from "@mui/icons-material/BarChart";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

const ListItems: React.FC = () => (
	<>
		<ListItemButton LinkComponent={Link} href="/dashboard/">
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary="داشبورد" />
		</ListItemButton>
		<ListItemButton LinkComponent={Link} href="/dashboard/orders">
			<ListItemIcon>
				<ShoppingCartIcon />
			</ListItemIcon>
			<ListItemText primary="سفارشات" />
		</ListItemButton>
		<ListItemButton LinkComponent={Link} href="/dashboard/customers">
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="مشتری‌ها" />
		</ListItemButton>
		<ListItemButton LinkComponent={Link} href="/dashboard/invoices">
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary="پرداخت‌ها" />
		</ListItemButton>
		<ListItemButton LinkComponent={Link} href="/dashboard/products">
			<ListItemIcon>
				<InventoryIcon />
			</ListItemIcon>
			<ListItemText primary="محصولات" />
		</ListItemButton>
		<ListItemButton LinkComponent={Link} href="/dashboard/categories">
			<ListItemIcon>
				<CategoryIcon />
			</ListItemIcon>
			<ListItemText primary="دسته‌بندی‌ها" />
		</ListItemButton>
		<ListItemButton LinkComponent={Link} href="/dashboard/pictures">
			<ListItemIcon>
				<SettingsIcon />
			</ListItemIcon>
			<ListItemText primary="تصاویر" />
		</ListItemButton>
	</>
);

export default ListItems;
