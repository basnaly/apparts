import Image from "next/image";
import img from "../public/estate.png";

import { useState } from "react";
import useSWR from "swr";
import EstateComponent from "../components/EstateComponent";
import SearchInput from "@/components/SearchInput";

const fetcher = async () => {
	const response = await fetch("/api/appart-data");
	const data = await response.json();
	return data;
};

const Home = () => {
	
	const { data, error } = useSWR("estateList", fetcher);

	const [filteredEstates, setFilteredEstates] = useState([]);

	if (error) return "An error was occur";
	if (!data) return "Loading..";

	const findFilteredEstates = (e) => {
		const filteredData = data.filter((el) =>
			el.address.toLowerCase().includes(e.target.value)
		);
		setFilteredEstates(filteredData);
		console.log(filteredData);
	};

	return (
		<div className="d-flex flex-column text-align-center w-100">

			<SearchInput findFilteredEstates={findFilteredEstates} />
			
			<div className="d-flex flex-wrap overflow-auto">
				{filteredEstates.length !== 0 ? (
					filteredEstates.map((el) => (
						<div key={el.id}>
							<EstateComponent el={el} />
						</div>
					))
				) : (
					<Image
						src={img}
						placeholder="blur"
						blurDataURL="../public/estate.png"
						alt={img}
						width="650"
						height="450"
						className="flex-shrink-0 my-4 m-auto"
					/>
				)}
			</div>
		</div>
	);
};

export default Home;
