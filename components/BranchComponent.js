import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BadgeIcon from '@mui/icons-material/Badge';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { BranchDataStyled, BrunchTitleStyled } from '@/styles/StyledComponents';

const BranchComponent = ({ el }) => {

	return (
		<Card sx={{ width: 380, m: 3 }} className="shadow-lg">
			<CardContent>
				<BrunchTitleStyled className="d-flex align-items-center justify-content-center">
					<BadgeIcon color="scarlet" />
					<div className="ms-2">{el.branchname}</div>
				</BrunchTitleStyled>

				<div className="d-flex align-items-center my-1">
					<HomeWorkIcon color="scarlet" />
					<BranchDataStyled className="ms-2" 
						href={`https://www.google.com/maps/search/${el.address}`}
						target="_blank" >
						{el.address}
					</BranchDataStyled>
				</div>

				<div className="d-flex align-items-center my-1">
					<LocalPhoneIcon color="scarlet" />
					<BranchDataStyled className="ms-2" href={`tel:${el.phone}`}>{el.phone} </BranchDataStyled>
				</div>

				<div className="d-flex align-items-center my-1">
					<EmailIcon color="scarlet" />
					<BranchDataStyled className="ms-2" href={`mailto:${el.email}`}>{el.email} </BranchDataStyled>
				</div>

				<div className="d-flex align-items-center my-1">
					<ManageAccountsIcon color="scarlet" />
					<div className="ms-2">{el.manager}</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default BranchComponent;
