import { gql } from 'graphql-request';

export const galleryImages = gql`
	query RestaurantGallery {
		restaurantGalleries {
			images(first: 100) {
				fileName
				url
			}
		}
	}
`;
