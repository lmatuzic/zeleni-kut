import { gql } from 'graphql-request';

export const menuItems = gql`
	query menuItems($locales: [Locale!]!) {
		menuItems(locales: $locales) {
			name
			description
			price
			locale
			menuCategory {
				name
				locale
			}
		}
	}
`;
