import { getSession } from "next-auth/react";
import { getBuyEstateRows, pool } from "../../../lib/sqldb";

const handler = async (req, res) => {

	const session = await getSession({ req })

	if (req.method === "POST") {

		if (!session) {
			res.status(401).json({ error: 'Unauthenticated user' })
			return
		} 

		const newBuyEstate = {
			id: Date.now(),
			...req.body.newBuyEstate,
		};

		const result = await pool.query(
			`INSERT INTO buyestate 
	(id, currency, priceMin, priceMax, unit, areaMin, areaMax, bedroomsMin, bedroomsMax, bathroomsMin, bathroomsMax, isHome, isCottage, isAppartment, preferAreaEstate, yearbuildMin, yearbuildMax, floorMin, floorMax, parkingMin, parkingMax, addRequest, email, created_at) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)`,
			[
				newBuyEstate.id,
				newBuyEstate.currency,
                newBuyEstate.priceMin,
                newBuyEstate.priceMax,
                newBuyEstate.unit,
                newBuyEstate.areaMin,
                newBuyEstate.areaMax,
                newBuyEstate.bedroomsMin,
                newBuyEstate.bedroomsMax,
                newBuyEstate.bathroomsMin,
                newBuyEstate.bathroomsMax,
				newBuyEstate.isHome,
				newBuyEstate.isCottage,
				newBuyEstate.isAppartment,
				newBuyEstate.preferAreaEstate,
				newBuyEstate.yearBuildMin,
				newBuyEstate.yearBuildMax,
				newBuyEstate.floorMin,
				newBuyEstate.floorMax,
				newBuyEstate.parkingMin,
				newBuyEstate.parkingMax,
				newBuyEstate.addRequest,
				session.user.email,
				new Date(),
			]
		);
		res.status(201).json(result);

	} else if (req.method === "GET") {

		const buyEstateRows = await getBuyEstateRows()
		res.status(200).json({count: buyEstateRows?.rows?.[0]?.count})
	}
};

export default handler;
