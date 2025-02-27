import { gql } from 'graphql-request';

export const event = gql`
	query Event($locales: [Locale!]!, $id: ID!) {
		event(locales: $locales, where: { id: $id }) {
			id
			title
			shortDescription
			description {
				json
			}
			isDisplayed
			dateAndTime
			locale
			pictures {
				url
				fileName
			}
		}
	}
`;
