import React from "react";
import Image from "next/image";
import {
	AddressStyled,
	CancelButton,
	EstateListStyled,
	EstatePriceStyled,
	EstateSpanStyled,
	SaveButton,
} from "../styles/StyledComponents";
import { Chip } from "@mui/material";
import { useSession } from "next-auth/react";

const EstateComponent = ({ el }) => {

	const { data: session, status } = useSession();
	// const loading = status === "loading";
	// console.log({ session });

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
					sx={{ fontWeight: "bold" }}
				/>
			</div>
			<div className="d-flex">
				<EstateSpanStyled>{el.bedrooms}</EstateSpanStyled> bds
				<EstateSpanStyled>{el.bathrooms}</EstateSpanStyled> bs
				<EstateSpanStyled>{el.area}</EstateSpanStyled>
				{el.unit}
			</div>

			<AddressStyled className="d-flex">{el.address}</AddressStyled>

			{el.images !== null ? (
				<Image
					src={el.images[0]}
					alt={el.images[0]}
					width="200"
					height="200"
					priority="true"
					className="mt-3"
				/>
			) : (
				""
			)}

			{session?.user?.role === "admin" ? (
				<div className="d-flex align-items-center justify-content-center mt-3">
					<SaveButton
						// onClick={saveEstate}
						variant={"outlined"}
						className="mx-3"
					>
						Edit
					</SaveButton>

					<CancelButton
						// onClick={closeDialog}
						variant={"outlined"}
						className=" mx-3"
					>
						Delete
					</CancelButton>
				</div>
			) : (
				""
			)}
		</EstateListStyled>
	);
};

export default EstateComponent;
