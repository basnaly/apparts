import React from "react";
import Image from "next/image"
import { AddressStyled, EstateListStyled, EstatePriceStyled, EstateSpanStyled } from "../styles/StyledComponents";

const EstateComponent = ({ el }) => {

	return (
		<EstateListStyled
			key={el.id}
			className="d-flex flex-column align-items-center m-3 p-3"
		>
			<EstatePriceStyled className="d-flex">
				{el.currency} {el.price.toLocaleString("en-US")}
			</EstatePriceStyled>

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
		</EstateListStyled>
	);
};

export default EstateComponent;
