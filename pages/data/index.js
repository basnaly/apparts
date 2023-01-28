import EstateComponent from "../../components/EstateComponent"
import { getEstateList } from "../../lib/sqldb"

const Data = ({ data }) => {

    console.log(data)

    return (
        <div className="d-flex flex-wrap overflow-auto">
            {
                data.map(el => (
                    <EstateComponent el={el} />
                ))
            }
        </div>
    )
}

export default Data

export const getServerSideProps = async () => {
   
    const estateList = await getEstateList()

    return {
        props: {
            data: estateList.rows
        }
    }
}