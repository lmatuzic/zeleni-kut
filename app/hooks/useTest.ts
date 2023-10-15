'use client';

import request from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { allBubaras } from '../lib/hygraph/queries/getAllBubaras';

export default function useTest() {
	const { data } = useQuery({
		queryKey: ['bubaras'],
		queryFn: async () =>
			request(
				`${process.env.HYGRAPH_CONTENT_API}`,
				allBubaras,
				// variables are type-checked too!
				{ first: 10 }
			),
	});

	console.log(data);

	return { data };
}
