import { gql } from 'graphql-request';

export const events = gql`
	query Events {
		events {
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
