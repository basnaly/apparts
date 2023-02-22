import { signIn, signOut, useSession } from "next-auth/react";
import {
	HeaderLinkStyled,
	HeaderStyled,
	LinkNameStyled,
} from "../styles/StyledComponents";
import DialogEstateForm from "./DialogEstateForm";
import Badge from "@mui/material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import { COLORS } from "@/utils/constants";
import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";

const fetcher = async () => {
	const response = await fetch("/api/appart-buy");
	const data = await response.json();
	return data;
};

const Header = () => {

	const router = useRouter()

	const { data: session, status } = useSession();
	const loading = status === "loading";

	const { data, error } = useSWR("buyEstateRows", fetcher);

	if (error) return "An error was occur";
	if (!data) return "Loading..";

	let authUser = "";

	if (!loading && !session ) {
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
					<>
						<HeaderLinkStyled href="/buy" className="me-3">
							Buy
						</HeaderLinkStyled>

						{session?.user?.role !== "admin" ? (
							""
						) : (
							<Link href="/buy-requests">
								<Badge
									badgeContent={data.count}
									color="success"
									className="me-3"
								>
									<EmailIcon
										sx={{ color: COLORS.lightOlive }}
									/>
								</Badge>
							</Link>
						)}
					</>
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
				{session?.user?.role === "admin" && (
					<DialogEstateForm className="me-2" />
				)}

				<HeaderLinkStyled href="/contacts" className="mx-3">
					Contacts
				</HeaderLinkStyled>

				{
					router.pathname === '/signin' ? "" :
					<div>{authUser}</div>
				}
				
			</div>
		</HeaderStyled>
	);
};

export default Header;
