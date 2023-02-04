import { ContactTitleStyled } from "@/styles/StyledComponents";
import { getBranchList } from "@/lib/sqldb";
import BranchComponent from "@/components/BranchComponent";

const Contacts = ({ data, isPreviewMode }) => {
	console.log(data);

	if (isPreviewMode) {
		return (
			<div className="d-flex flex-column align-items-center w-100">
				This is preview mode
			</div>
		)
	}

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

export const getStaticProps = async (context) => {

	const branchList = await getBranchList();

	return {
		props: {
			isPreviewMode: !!context.preview,
			data: context.preview
			? []
			: branchList.rows
		},
	};
};
