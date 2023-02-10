import { signIn, signOut, useSession } from "next-auth/react";
import {
	HeaderLinkStyled,
	HeaderStyled,
	LinkNameStyled,
} from "../styles/StyledComponents";
import DialogForm from "./DialogForm";

const Header = () => {
	const { data: session, status } = useSession();
	const loading = status === "loading";

	// console.log({ session })

	let authUser = "";

	if (!loading && !session) {
		authUser = (
			<HeaderLinkStyled
				href="/api/auth/signin"
				onClick={(e) => {
					e.preventDefault();
					signIn();
				}}
			>
				Sign in
			</HeaderLinkStyled>
		);
	} else if (!loading && session) {
		authUser = (
			<HeaderLinkStyled
				href="/api/auth/signout"
				onClick={(e) => {
					e.preventDefault();
					signOut();
				}}
			>
				Sign out
			</HeaderLinkStyled>
		);
	}

	return (
		<HeaderStyled className="d-flex align-items-center justify-content-between">
			<div className="d-flex align-items-center mx-3">
				{session && (
					<HeaderLinkStyled href="/buy" className="me-3">
						Buy
					</HeaderLinkStyled>
				)}

				<HeaderLinkStyled href="/rent" className="me-3">
					Rent
				</HeaderLinkStyled>
				<HeaderLinkStyled href="/sell">Sell</HeaderLinkStyled>
			</div>

			<div className="d-flex align-items-center">
				<LinkNameStyled href="/">
					<div className="ms-2">🏠 Apparts</div>
				</LinkNameStyled>
			</div>

			<div className="d-flex align-items-center mx-3">
				{session && <DialogForm className="me-2" />}

				<HeaderLinkStyled href="/contacts" className="mx-3">
					Contacts
				</HeaderLinkStyled>

				{authUser}
			</div>
		</HeaderStyled>
	);
};

export default Header;
