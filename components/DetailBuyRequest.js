import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { CancelButton, DateRequestsStyled, SaveButton } from "@/styles/StyledComponents";
import Link from "next/link";

const DetailBuyRequest = ({ el }) => {
	const [isShow, setIsShow] = useState(false);

	const showData = () => {
		setIsShow((prev) => !prev);
	};

	return (
		<Box
			sx={{
				display: "flex",
				margin: "10px",
                
			}}
		>
			<Paper elevation={20} sx={{ width: "250px" }}>
				<div className="d-flex flex-column align-items-center p-3">
					<DateRequestsStyled className="me-2">{el.created_at}</DateRequestsStyled>
					<Link className="me-2"
                        href={`mailto:${el.email}`}
                    >
                        {el.email}
                    </Link>
					<div className="me-2">
						{el.ishome === true ? "Home" : ""}{" "}
						{el.iscottage === true ? "Cottage" : ""}
						{el.isappartment === true ? "Appartment" : ""}
					</div>
					<div className="me-2">
						{el.currency} {el.pricemin} - {el.pricemax}
					</div>

					{!isShow ? (
						""
					) : (
						<>
							<div className="me-2">
								{el.unit} {el.areamin} - {el.areamax}
							</div>
							<div className="me-2">
								Bedrooms: {el.bedroomsmin} - {el.bedroomsmax}
							</div>
							<div className="me-2">
								Bathrooms: {el.bathroomsmin} - {el.bathroomsmax}
							</div>
							<div className="me-2">
								Year build: {el.yearbuildmin} -{" "}
								{el.yearbuildmax}
							</div>
							<div className="me-2">
								Floor: {el.floormin} - {el.floormax}
							</div>
							<div className="me-2">
								Parking: {el.parkingmin} - {el.parkingmax}
							</div>
							<div className="me-2">
								Add request: {el.addrequest}
							</div>
						</>
					)}

					<CancelButton
						onClick={showData}
						variant={"outlined"}
						className="my-2"
					>
						{
                            isShow ? "Show less" : "Show more"
                        }
					</CancelButton>
				</div>
			</Paper>
		</Box>
	);
};

export default DetailBuyRequest;
