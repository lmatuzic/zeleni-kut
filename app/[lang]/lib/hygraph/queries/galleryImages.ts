import { gql } from 'graphql-request';

export const galleryImages = gql`
	query Gallery {
		galleries {
			images(first: 100) {
				fileName
				url
			}
		}
	}
`;
