import React from "react";
import Image from "next/image";
import {
	AddressStyled,
	EstateListStyled,
	EstatePriceStyled,
	EstateSpanStyled,
} from "../styles/StyledComponents";
import { Chip } from "@mui/material";
import { useSession } from "next-auth/react";
import EditEstateForm from "./EditEstateForm";
import DeleteEstateDialog from "./DeleteEstateDialog";
import img from "../public/estate.png";

const EstateComponent = ({ el, mutate }) => {

	const { data: session, status } = useSession();
	
	const estateImage = el?.images[0]

	return (
		<EstateListStyled
			key={el.id}
			className="d-flex flex-column align-items-center m-3 p-3"
		>
			<div className="d-flex w-100 justify-content-around">
				<EstatePriceStyled className="d-flex">
					{el.currency} {el.price.toLocaleString("en-US")}
				</EstatePriceStyled>
				<Chip
					label={el.estateaction}
					color="scarlet"
					sx={{ fontWeight: "bold", textTransform: "capitalize" }}
				/>
			</div>
			<div className="d-flex">
				<EstateSpanStyled>{el.bedrooms}</EstateSpanStyled> bds
				<EstateSpanStyled>{el.bathrooms}</EstateSpanStyled> bs
				<EstateSpanStyled>{el.area}</EstateSpanStyled>
				{el.unit}
			</div>

			<AddressStyled className="d-flex">{el.address}</AddressStyled>

			{el.images !== null && el.images.length !== 0 && estateImage !== "" ? (
				<Image
					src = {estateImage}
					alt = {estateImage}
					width = "200"
					height = "200"
					priority = "true"
					className = "mt-3"
				/>
			) : (
				<Image
					src = {img}
					alt = "Apparts"
					width = "200"
					height = "200"
					priority = "true"
					className = "mt-3"
				/>
			)}

			{session?.user?.role === "admin" ? (
				<div className="d-flex align-items-center justify-content-center mt-3">

					<EditEstateForm el={el} mutate={mutate} />

					<DeleteEstateDialog el={el} />
				</div>
			) : (
				""
			)}
		</EstateListStyled>
	);
};

export default EstateComponent;
