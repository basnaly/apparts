import styled, { css } from "styled-components";
import { Button, Dialog, DialogActions, TextField, DialogContentText, DialogTitle } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { COLORS } from "../utils/constants";
import SearchIcon from "@mui/icons-material/Search";
import CardHeader from "@mui/material/CardHeader";
import BranchComponent from "@/components/BranchComponent";
import Switch from '@mui/material/Switch';

export const MainStyled = styled.div`
	height: 100vh;
	background-color: ${COLORS.lightTeal};
`;

export const BodyStyled = styled.div`
	font-size: 20px;
`;

export const HeaderStyled = styled.div`
	background-color: ${COLORS.scarlet};
	font-size: 24px;
	padding: 5px;
`;

export const HeaderLinkStyled = styled(Link)`
	color: ${COLORS.lightOlive};
	white-space: nowrap;
	&:hover {
		color: ${COLORS.lightTeal};
	}
	&.active {
		border-bottom: 2px solid chartreuse;
	}
`;
export const LinkNameStyled = styled(Link)`
	text-decoration: none;
	color: ${COLORS.lightTeal};
	font-size: 30px;
	&:hover {
		color: ${COLORS.lightOlive};
	}
`;

export const TextFieldStyled = styled(TextField)`
	width: 450px;
	margin-top: 20px;
`;

export const SearchIconStyled = styled(SearchIcon)`
	position: absolute;
	top: 20px;
	left: 420px;
`;

export const FormButton = styled(Button)`
	&& {
		text-transform: none;
		color: ${COLORS.scarlet};
		border: 1px solid dimgray;
		font-size: 20px;
		background-color: ${COLORS.lightOlive};
		padding: 1px 8px;
		&:hover {
			background-color: ${COLORS.lightTeal};
			border: 1px solid dimgray;
		}
	}
`;

export const ContactButton = styled(Button)`
	&& {
		text-transform: none;
		color: ${COLORS.scarlet};
		border: 1px solid dimgray;
		font-size: 18px;
		background-color: ${COLORS.lightTeal};
		padding: 1px 6px;
		&:hover {
			background-color: gray;
			color: ${COLORS.lightOlive};
			border: 1px solid dimgray;
		}
	}
`;

export const SaveButton = styled(Button)`
	&& {
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
		}
	}
`;

export const CancelButton = styled(Button)`
	&& {
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
		}
	}
`;

export const DialogActionsStyled = styled(DialogActions)`
	margin-top: -20px;
`;

export const EstateListStyled = styled.div`
	border: 1px solid dimgray;
	background-color: ${COLORS.lightOlive};
`;

export const AddIconStyled = styled(AddIcon)`
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	color: ${(props) => (props.disabled ? "gray" : COLORS.scarlet)};
	margin-top: 15px;
`;

export const EstatePriceStyled = styled.div`
	font-size: 26px;
	font-weight: bold;
`;

export const AddressStyled = styled.div`
	font-size: 16px;
`;
export const EstateSpanStyled = styled.span`
	font-weight: bold;
	margin: 0 5px;
`;

export const ContactTitleStyled = styled.div`
	font-size: 28px;
`;

export const BrunchTitleStyled = styled.div`
	font-size: 22px;
	font-weight: bold;
`;

export const BranchDataStyled = styled(Link)`
	text-decoration: none;
	color: black;
	font-size: 20px;
	text-decoration: underline;
	&:hover {
		color: ${COLORS.scarlet};
	}
`;

export const TitleBuyStyled = styled.div`
	font-size: 1rem;
`;

export const CardHeaderStyled = styled(CardHeader)`
	font-size: 20px;
`;

export const BranchComponentStyledGreen = styled(BranchComponent)`
	background-color: ${COLORS.lightTeal};
	border: 1px solid gray;
	border-radius: 7px;
`;

export const ManagerNameStyled = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
`;

export const UserNameStyled = styled.span`
	color: ${COLORS.scarlet};
	font-size: 1.8rem;
	// font-weight: bold;
`;


export const AntSwitch = styled(Switch)(({ theme }) => ({
	width: 28,
	height: 16,
	padding: 0,
	display: 'flex',
	'&:active': {
	  '& .MuiSwitch-thumb': {
		width: 15,
	  },
	  '& .MuiSwitch-switchBase.Mui-checked': {
		transform: 'translateX(9px)',
	  },
	},
	'& .MuiSwitch-switchBase': {
	  padding: 2,
	  '&.Mui-checked': {
		transform: 'translateX(12px)',
		color: '#fff',
		'& + .MuiSwitch-track': {
		  opacity: 1,
		  backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
		},
	  },
	},
	'& .MuiSwitch-thumb': {
	  boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
	  width: 12,
	  height: 12,
	  borderRadius: 6,
	  transition: theme.transitions.create(['width'], {
		duration: 200,
	  }),
	},
	'& .MuiSwitch-track': {
	  borderRadius: 16 / 2,
	  opacity: 1,
	  backgroundColor:
		theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
	  boxSizing: 'border-box',
	},
  }));
  
  export const SignButtonStyled = styled(Button)`
  && {
	  text-transform: none;
	  color: ${COLORS.scarlet};
	  border: 1px solid dimgray;
	  font-size: 20px;
	  background-color: ${COLORS.lightOlive};
	  padding: 1px 8px;
	  &:hover {
		  background-color: ${COLORS.scarlet};
		  color: ${COLORS.lightOlive};
		  border: 1px solid dimgray;
	  }
  }
`;

export const CredentialStyled = styled.div`
	font-size: 1.2rem;
	// font-weight: bold;
`;

export const ImageStyled = styled.img`
	max-width: 500px;
	margin: auto;
`;

export const DialogContentTextStyled = styled(DialogContentText)`
	color: black;
	font-size: 1.2rem;
`;

export const DialogTitleStyled = styled(DialogTitle)`
	font-size: 1.5rem;
`;