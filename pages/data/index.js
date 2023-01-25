
import Image from "next/image"
import { getEstateList } from "../../lib/sqldb"
import { EstateListStyled } from "../../styles/StyledComponents"

const Data = ({data}) => {

    console.log(data)

    return (
        <div className="d-flex">
            {
                data.map(el => (
                    <EstateListStyled key={el.id} className="d-flex flex-column align-items-center m-3">
                        <div className="d-flex">
                            {el.currency} {el.price}
                        </div>

                        <div className="d-flex">
                        {el.bedrooms} bds {el.bathrooms} bs Area: {el.area} {el.unit}
                        </div>

                        <div className="d-flex">
                            {el.address}
                        </div>

                        {
                            el.images !== null ? 
                            <Image  src={el.images[0]}
                            alt='me' width='200' height='200' />
                            : ""
                        }
   
                    </EstateListStyled>
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