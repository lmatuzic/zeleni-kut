import { gql } from 'graphql-request';

export const menuItems = gql`
	query menuItems {
		menuItems {
			name
			description
			price
			menuCategory {
				name
				locale
			}
		}
	}
`;
