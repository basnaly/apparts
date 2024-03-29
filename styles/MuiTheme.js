import { createTheme } from "@mui/material/styles";
import { COLORS } from "../utils/constants";

export const myTheme = createTheme({
	palette: {
		dimgray: {
			main: "dimgrey",
			contrastText: "#fff",
		},
		scarlet: {
			main: COLORS.scarlet,
			contrastText: COLORS.lightOlive,
		},
		white: {
			main: "white",
			contrastText: "gray"
		}
	},
	components: {
		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontSize: "18px",
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				input: {
					fontSize: "18px",
					color: COLORS.scarlet,
				},
				root: {
					backgroundColor: COLORS.lightOlive,
					borderColor: COLORS.lightTeal,
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					color: COLORS.scarlet,
					borderColor: "dimgray",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: COLORS.lightOlive,
					color: "black",
				},
			},
		},
		MuiBadge: {
			styleOverrides: {
				badge: {
					backgroundColor: COLORS.lightTeal,
					color: COLORS.scarlet,
					fontWeight: "bold"
				}
			}
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					color: COLORS.scarlet,
				}
			}
		}
	},
});
