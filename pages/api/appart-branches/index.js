import { getBranchList } from "../../../lib/sqldb";

const handler = async (req, res) => {

    if (req.method === 'GET') {

        const branchList = await getBranchList()

        res.status(200).json(branchList)
    }
}

export default handler