import { pool, getEstateList } from "../../../lib/sqldb";

const handler = async (req, res) => {

	if (req.method === "POST") {
		const { estateId } = req.query;
		const result = await pool.query(
			`UPDATE apparts set 
                currency = $1, 
                unit = $2, 
                price = $3, 
                bedrooms = $4, 
                bathrooms = $5, 
                area = $6, 
                address = $7, 
                estatetype = $8, 
                estateaction = $9, 
                yearbuild = $10, 
                heating = $11, 
                cooling = $12, 
                parking = $13, 
                images = $14
                where id = ${estateId}`,
            [
				req.body.estate.currency,
				req.body.estate.unit,
				req.body.estate.price,
				req.body.estate.bedrooms,
				req.body.estate.bathrooms,
				req.body.estate.area,
				req.body.estate.address,
				req.body.estate.estateType,
				req.body.estate.estateAction,
				req.body.estate.yearBuild,
				req.body.estate.heating,
				req.body.estate.cooling,
				req.body.estate.parking,
				req.body.estate.images,
			]
		);
		res.status(201).json(result);

	} else if (req.method === "GET") {
		const estateList = await getEstateList();

		res.status(200).json(estateList.rows);

	} else if (req.method === "DELETE") {
		const { estateId } = req.query;
		const result = await pool.query(
			`DELETE FROM apparts where id = ${estateId}`
		)
		res.status(202).json(result)
	}
};

export default handler;
