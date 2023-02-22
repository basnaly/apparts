import DetailBuyRequest from "@/components/DetailBuyRequest";
import { getBuyEstateList } from "@/lib/sqldb";
import { RequestsStyled } from "@/styles/StyledComponents";
import { getSession } from "next-auth/react";
import React from "react";

const buyRequests = ({ data }) => {

	return (

		<div className="d-flex flex-column text-align-center w-100">
			<RequestsStyled className="d-flex flex-column text-center w-100">
                List of requests
            </RequestsStyled>
            <div className="d-flex flex-wrap align-items-start">
			{data.map((el) => (
				<DetailBuyRequest el={el} key={el.id} />
			))}
            </div>
		</div>
	);
};

export default buyRequests;

export const getServerSideProps = async (context) => {

    const session = await getSession(context);

	if (!session && session?.user?.role !== "admin" ) {
		return {
			redirect: {
				destination: process.env.BUY_REDIRECT_LOGIN,
				permanent: false,
			},
		};
	}

	const buyEstateList = await getBuyEstateList();

	return {
		props: {
			data: buyEstateList.rows.map((el) => {
				return {
					...el,
					created_at: el.created_at.toLocaleString("en-UK", {
						year: "numeric",
						month: "2-digit",
						day: "2-digit",
					}),
				};
			}),
		},
	};
};
