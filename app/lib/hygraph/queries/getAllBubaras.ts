import { gql } from 'graphql-request';

export const allBubaras = gql`
	query allBubaras {
		bubaras {
			id
			title
			subtitle
		}
	}
`;
