import { client, getEstateList } from "../../../lib/sqldb";

const handler = async (req, res) => {

	if (req.method === "POST") {
		
		const newEstate = {
			id: Date.now(),
			...req.body.newEstate,
		};
		console.log(newEstate);

		const result = await client.query(
			`INSERT INTO apparts 
	(id, currency, unit, price, bedrooms, bathrooms, area, address, estatetype, yearbuild, heating, cooling, parking, images) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
			[
				newEstate.id,
				newEstate.currency,
				newEstate.unit,
				newEstate.price,
				newEstate.bedrooms,
				newEstate.bathrooms,
				newEstate.area,
				newEstate.address,
				newEstate.estateType,
				newEstate.yearBuild,
				newEstate.heating,
				newEstate.cooling,
				newEstate.parking,
				newEstate.images,
			]
		);
		console.log(result);
		res.status(201).json(result);

	} else if (req.method === "GET") {
		
		const estateList = await getEstateList()

		res.status(200).json(estateList.rows)
	}
};

export default handler;
