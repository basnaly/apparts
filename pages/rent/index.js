import EstateComponent from "@/components/EstateComponent";
import SearchInput from "@/components/SearchInput";
import { getEstateListByAction } from "@/lib/sqldb";
import { useState } from "react";

const Rent = ({ data }) => {
    
    const [filteredEstates, setFilteredEstates] = useState([]);

	const findFilteredEstates = (e) => {
		const filteredData = data.filter((el) =>
			el.address.toLowerCase().includes(e.target.value)
		);
		setFilteredEstates(filteredData);
	};

    return (
		<div className="d-flex flex-column text-align-center w-100">

			<SearchInput findFilteredEstates={findFilteredEstates} /> 

			<div className="d-flex flex-wrap overflow-auto">
				{filteredEstates.map((el) => (
					<div key={el.id}>
						<EstateComponent el={el} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Rent

export const getStaticProps = async () => {
    
	const estateListByAction = await getEstateListByAction("rent");

	return {
		props: {
			data: estateListByAction.rows,
		},
	};
};