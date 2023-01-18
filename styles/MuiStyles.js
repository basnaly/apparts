import { styled } from "@mui/material";
import Link from "next/link";
import { COLORS } from "../utils/constants";
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const MainStyled = styled("div")({
	height: "100vh",
    backgroundColor: COLORS.lightOlive,
})

export const BodyStyled = styled("div")({
	
	fontSize: '20px',
});

export const HeaderStyled = styled("div")({
	backgroundColor: COLORS.scarlet,
    fontSize: '24px',
	padding: '5px',
});

export const HeaderNameStyled = styled("div")({
	color: COLORS.lightTeal,
    fontSize: '30px',
	//padding: '5px',
});

export const HeaderLinkStyled = styled(Link)({
	// textDecoration: "none",
	color: COLORS.lightOlive,
	whiteSpace: "nowrap",
	"&:hover": {
		color: COLORS.lightTeal,
	},
	"&.active": {
		borderBottom: "2px solid chartreuse"		
	}
});

export const TextFieldStyled = styled(TextField)({
	width: "450px",
	marginTop: "20px",
	// borderLeft: "1px solid black",
});


export const SearchIconStyled = styled(SearchIcon)({
	position: "absolute",
    top: "40px",
    left: "420px",
	
});