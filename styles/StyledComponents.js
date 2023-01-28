import styled, {css} from "styled-components";
import { Button, Dialog, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { COLORS } from "../utils/constants";
import SearchIcon from '@mui/icons-material/Search';

export const MainStyled = styled.div`
	height: 100vh;
    background-color: ${COLORS.lightTeal};
`

export const BodyStyled = styled.div`
	font-size: 20px;
`

export const HeaderStyled = styled.div`
	background-color: ${COLORS.scarlet};
    font-size: 24px;
	padding: 5px;
`

export const HeaderNameStyled = styled.div`
	color: ${COLORS.lightTeal};
    font-size: 30px;
`

export const HeaderLinkStyled = styled(Link)`
	color: ${COLORS.lightOlive};
	white-space: nowrap;
	&:hover {
		color: ${COLORS.lightTeal};
	}
	&.active {
		border-bottom: 2px solid chartreuse;		
	}
`

export const TextFieldStyled = styled(TextField)`
	width: 450px;
	margin-top: 20px;
`

export const SearchIconStyled = styled(SearchIcon)`
	position: absolute;
    top: 40px;
    left: 420px;
`

export const FormButton = styled(Button)`
	text-transform: none;
	color: ${COLORS.scarlet};
	border: 1px solid dimgray;
	font-size: 20px;
	background-color: ${COLORS.lightOlive};
	padding: 1px 8px;
	&:hover {
		background-color: ${COLORS.lightTeal};
		border: 1px solid dimgray;
	},
`

export const ContactButton = styled(Button)`
	text-transform: none;
	color: ${COLORS.scarlet};
	border: 1px solid dimgray;
	font-size: 20px;
	background-color: ${COLORS.lightTeal};
	padding: 1px 8px;
	&:hover {
		background-color: gray;
		color: ${COLORS.lightOlive};
		border: 1px solid dimgray;
	},
`

export const SaveButton = styled(Button)`
	text-transform: none;
	color: ${COLORS.lightOlive};
	border: 1px solid dimgray;
	font-size: 20px;
	background-color: ${COLORS.lightTeal};
	padding: 1px 8px;
	&:hover {
		background-color: gray;
		color: ${COLORS.lightOlive};
		border: 1px solid dimgray;
	},
`

export const CancelButton = styled(Button)`
	text-transform: none;
	color: ${COLORS.lightOlive};
	border: 1px solid dimgray;
	font-size: 20px;
	background-color: ${COLORS.scarlet};
	padding: 1px 8px;
	&:hover {
		background-color: gray;
		color: ${COLORS.scarlet};
		border: 1px solid dimgray;
	},
`

export const EstateListStyled = styled.div`
	border: 1px solid dimgray;
	background-color: ${COLORS.lightOlive};
`

export const AddIconStyled = styled(AddIcon)`
	cursor: ${props => props.disabled ? 'not-allowed': 'pointer'};
	color: ${props => props.disabled ? 'gray' : COLORS.scarlet};
`

export const EstatePriceStyled = styled.div`
	font-size: 26px;
	font-weight: bold;
`

export const AddressStyled = styled.div`
	font-size: 16px;
`
export const EstateSpanStyled = styled.span`
	font-weight: bold;
	margin: 0 5px;
`