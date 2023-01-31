import { ContactTitleStyled } from "@/styles/StyledComponents";
import { getBranchList } from "@/lib/sqldb";
import BranchComponent from "@/components/BranchComponent";

const Contacts = ({ data }) => {
	console.log(data);

	return (
		<div className="d-flex flex-column align-items-center w-100">
			<ContactTitleStyled className="my-3">
				Hello, you can contact us one of the following ways:
			</ContactTitleStyled>

			<div className="d-flex align-items-center justify-content-center  flex-wrap">
				{data.map((el) => (
					<BranchComponent el={el} key={el.id} />
				))}
			</div>
		</div>
	);
};

export default Contacts;

export const getStaticProps = async () => {
	const branchList = await getBranchList();

	return {
		props: {
			data: branchList.rows,
		},
	};
};
