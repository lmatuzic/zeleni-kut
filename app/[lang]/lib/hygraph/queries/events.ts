import { gql } from 'graphql-request';

export const events = gql`
	query Events($locales: [Locale!]!) {
		events(locales: $locales) {
			id
			title
			shortDescription
			description {
				html
				text
			}
			isDisplayed
			dateAndTime
			locale
		}
	}
`;
