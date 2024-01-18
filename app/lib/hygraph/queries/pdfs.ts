import { gql } from 'graphql-request';

export const pdfs = gql`
	query Pdfs($fileName: String!) {
		assets(where: { AND: [{ mimeType: "application/pdf" }, { fileName: $fileName }] }) {
			id
			fileName
			url
		}
	}
`;
