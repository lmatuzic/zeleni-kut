import { gql } from 'graphql-request';

export const menuCategories = gql`
	query MenuCategories {
		menuCategories {
			name
		}
	}
`;
