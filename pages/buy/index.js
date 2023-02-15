import { DataBuyProvider } from "@/components/DataBuyContext";
import DetailBuyForm from "@/components/DetailBuyForm";
import DialogContactAgent from "@/components/DialogContactAgent";
import GeneralBuyForm from "@/components/GeneralBuyForm";
import {
	CancelButton,
	ContactTitleStyled,
	SaveButton,
	UserNameStyled,
} from "@/styles/StyledComponents";
import { Card, CardContent } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { useState } from "react";
import { getSession } from "next-auth/react";

const Buy = ({ username }) => {

	const [currency, setCurrency] = useState("$");
	const [priceMin, setPriceMin] = useState(0);
	const [priceMax, setPriceMax] = useState(0);

	const [unit, setUnit] = useState("sqm");
	const [areaMin, setAreaMin] = useState(0);
	const [areaMax, setAreaMax] = useState(0);

	const [bedroomsMin, setBedroomsMin] = useState(2);
	const [bedroomsMax, setBedroomsMax] = useState(4);

	const [bathroomsMin, setBathroomsMin] = useState(1);
	const [bathroomsMax, setBathroomsMax] = useState(2);

	const [isHome, setIsHome] = useState(false);
	const [isCottage, setIsCottage] = useState(false);
	const [isAppartment, setIsAppartment] = useState(true);

	const [preferAreaEstate, setPreferAreaEstate] = useState("");

	const [yearBuildMin, setYearBuildMin] = useState(1990);
	const [yearBuildMax, setYearBuildMax] = useState(2010);

	const [floorMin, setFloorMin] = useState(1);
	const [floorMax, setFloorMax] = useState(4);

	const [parkingMin, setParkingMin] = useState(1);
	const [parkingMax, setParkingMax] = useState(3);

	const [addRequest, setAddRequest] = useState([]);

	const [status, setStatus] = useState("");

	const saveBuyForm = async () => {
		const response = await fetch("/api/appart-buy", {
			method: "POST",
			body: JSON.stringify({
				newBuyEstate: {
					currency,
					priceMin,
					priceMax,
					unit,
					areaMin,
					areaMax,
					bedroomsMin,
					bedroomsMax,
					bathroomsMin,
					bathroomsMax,
					isHome,
					isCottage,
					isAppartment,
					preferAreaEstate,
					yearBuildMin,
					yearBuildMax,
					floorMin,
					floorMax,
					parkingMin,
					parkingMax,
					addRequest
				},
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		// const data = await response.json()

		if (response.ok) {
			setStatus("The request was created");
		} else {
			setStatus("Failed to create the request");
		}
	}

	const clearData = () => {
		setCurrency("$");
		setPriceMin(0);
		setPriceMax(0);
		setUnit("sqm");
		setAreaMin(0);
		setAreaMax(0);
		setBedroomsMin(2);
		setBedroomsMax(4);
		setBathroomsMin(1);
		setBathroomsMax(2);
		setIsHome(false);
		setIsCottage(false);
		setIsAppartment(true);
		setPreferAreaEstate("");
		setYearBuildMin(1990);
		setYearBuildMax(2010);
		setFloorMin(1);
		setFloorMax(4);
		setParkingMin(1);
		setParkingMax(3);
		setAddRequest([]);
	};

	return (
		<DataBuyProvider
			value={{
				currency,
				setCurrency,
				priceMin,
				setPriceMin,
				priceMax,
				setPriceMax,
				unit,
				setUnit,
				areaMin,
				setAreaMin,
				areaMax,
				setAreaMax,
				bedroomsMin,
				setBedroomsMin,
				bedroomsMax,
				setBedroomsMax,
				bathroomsMin,
				setBathroomsMin,
				bathroomsMax,
				setBathroomsMax,
				isHome,
				setIsHome,
				isCottage,
				setIsCottage,
				isAppartment,
				setIsAppartment,
				preferAreaEstate,
				setPreferAreaEstate,
				yearBuildMin,
				setYearBuildMin,
				yearBuildMax,
				setYearBuildMax,
				floorMin,
				setFloorMin,
				floorMax,
				setFloorMax,
				parkingMin,
				setParkingMin,
				parkingMax,
				setParkingMax,
				addRequest,
				setAddRequest,
			}}
		>
			<div className="d-flex flex-column align-items-center w-100">
				<ContactTitleStyled className="my-3">
					Hello <UserNameStyled>{username}</UserNameStyled>, please fill the form or contact us:
				</ContactTitleStyled>

				<Card className="shadow-lg overflow-auto">
					<div className="d-flex align-items-center justify-content-between m-2">
						<div className="d-flex align-items-centerm-3 ms-4">
							🏠 Apparts
						</div>

						<DialogContactAgent />

					</div>
					<hr className="mx-2 my-0" />

					<CardContent>
						<GeneralBuyForm />
						<DetailBuyForm />
					</CardContent>

					<CardActions className="d-flex align-items-center justify-content-center mb-3">
						<SaveButton
							onClick={saveBuyForm}
							variant={"outlined"}
							className=" mx-3"
							disabled={ +priceMin > +priceMax || +areaMin > +areaMax 
								|| +bedroomsMin > +bedroomsMax || +bathroomsMin > +bathroomsMax
								|| +yearBuildMin > +yearBuildMax || +floorMin > +floorMax
								|| +parkingMin > +parkingMax
							} 
						>
							Save
						</SaveButton>

						<CancelButton
							onClick={clearData}
							variant={"outlined"}
							className=" mx-3"
						>
							Clear
						</CancelButton>
					</CardActions>
				</Card>
			</div>
		</DataBuyProvider>
	);
};

export default Buy;

export const getServerSideProps = async (context) => {

	const session = await getSession(context)
	console.log(session)

	if (!session) {
		return {
			redirect: {
				destination: process.env.BUY_REDIRECT_LOGIN,
				permanent: false
			}
		}
	}

	return {
		props: {
			username: session.user.name
		}
	}
}