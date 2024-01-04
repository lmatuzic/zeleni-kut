import { gql } from 'graphql-request';

export const events = gql`
	query GalleryImages {
		assets(first: 40) {
			url
			fileName
		}
	}
`;
