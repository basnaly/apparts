import { client } from "../../../lib/sqldb";

const handler = async (req, res) => {
	if (req.method === "POST") {
		await client.connect();

		const newEstate = {
			id: Date.now(),
			...req.body.newEstate,
		};
		console.log(newEstate);
        
		const result = await client.query(
			`INSERT INTO apparts 
	(id, currency, unit, price, bedrooms, bathrooms, area, address, estatetype, yearbuild, heating, cooling, parking) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
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
			]
		);
		console.log(result);
		await client.end();
        res.status(201).json(result)
	}
};

export default handler;
