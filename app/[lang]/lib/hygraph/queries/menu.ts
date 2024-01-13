import { gql } from 'graphql-request';

export const menu = gql`
	query Assets {
		assets(where: { mimeType: "application/pdf" }) {
			id
			fileName
			url
		}
	}
`;

// TODO: add code below there is a need to filter by a filename also, to extract exact PDF file and query it

// query Assets {
//     assets(where: {
//       AND: [
//         { mimeType: "application/pdf" },
//         { fileName: "zeleni-kut-jelovnik.pdf" },
//       ]
//     }) {
//       id
//       fileName
//       url
//     }
//   }
