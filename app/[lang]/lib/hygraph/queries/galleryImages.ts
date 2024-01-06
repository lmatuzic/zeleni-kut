import { gql } from 'graphql-request';

export const galleryImages = gql`
	query GalleryImages {
		assets(first: 100) {
			url
			fileName
		}
	}
`;
