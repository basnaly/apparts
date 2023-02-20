import EstateComponent from "../../components/EstateComponent";
import { getEstateList } from "../../lib/sqldb";

const Data = ({ data }) => {

	return (
		<div className="d-flex flex-wrap overflow-auto">
			{data.map((el) => (
				<div key={el.id}>
					<EstateComponent el={el} />
				</div>
			))}
		</div>
	);
};

export default Data;

export const getServerSideProps = async () => {
    
	const estateList = await getEstateList();

	return {
		props: {
			data: estateList.rows,
		},
	};
};
