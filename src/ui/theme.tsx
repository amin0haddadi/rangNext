"use client";

import { createTheme } from "@mui/material/styles";
import vazirmatn from "@/ui/font";

const theme = createTheme({
	direction: "rtl",
	typography: {
		fontFamily: vazirmatn.style.fontFamily,
	},
	components: {
		MuiContainer: {
			defaultProps: {
				maxWidth: "xl",
			},
		},
		MuiDivider: {
			defaultProps: {
				style: {
					margin: "2rem 0",
				},
			},
		},
		MuiLink: {
			defaultProps: {
				underline: "hover",
			},
		},
	},
	palette: {
		primary: {
			main: "#000",
		},
	},
});

export default theme;
