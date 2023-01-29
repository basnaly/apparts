import Link from "next/link";
import {
	HeaderLinkStyled,
	HeaderStyled,
	LinkNameStyled,
} from "../styles/StyledComponents";
import DialogForm from "./DialogForm";

const Header = () => {
	return (
		<HeaderStyled className="d-flex align-items-center justify-content-between">
			<div className="d-flex align-items-center mx-3">
				<HeaderLinkStyled href="/buy" className="me-3">
					Buy
				</HeaderLinkStyled>
				<HeaderLinkStyled href="/rent" className="me-3">
					Rent
				</HeaderLinkStyled>
				<HeaderLinkStyled href="/sell">Sell</HeaderLinkStyled>
			</div>

			<div className="d-flex align-items-center">
				<LinkNameStyled href="/">
					<div className="ms-2">
					🏠 Apparts
					</div>
				</LinkNameStyled>
			</div>

			<div className="d-flex align-items-center mx-3">
				<DialogForm className="me-2" />
				<HeaderLinkStyled href="/contacts" className="mx-3">
					Contacts
				</HeaderLinkStyled>
				<HeaderLinkStyled href="/signin">Sign in</HeaderLinkStyled>
			</div>
		</HeaderStyled>
	);
};

export default Header;
