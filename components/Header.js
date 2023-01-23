import Link from "next/link";
import { HeaderLinkStyled, HeaderNameStyled, HeaderStyled } from '../styles/MuiStyles';
import DialogForm from "./DialogForm"

const Header = () => {
	return (
		<HeaderStyled className="d-flex align-items-center justify-content-between">
			<div className="d-flex align-items-center mx-3">
				<HeaderLinkStyled href="/buy" className="me-3">Buy</HeaderLinkStyled>
				<HeaderLinkStyled href="/rent">Rent</HeaderLinkStyled>
			</div>

			<div className="d-flex align-items-center">
				<Link href="/">🏠</Link>
				<HeaderNameStyled className="ms-2">Apparts</HeaderNameStyled>
			</div>

			<div className="d-flex align-items-center mx-3">
				<DialogForm className="me-2"/>
				<HeaderLinkStyled href="/contacts" className="mx-3">Contacts</HeaderLinkStyled>
				<HeaderLinkStyled href="/signin">Sign in</HeaderLinkStyled>
			</div>
		</HeaderStyled>
	);
};

export default Header;
