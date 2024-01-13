/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
	'\n\tquery Event($locales: [Locale!]!, $id: ID!) {\n\t\tevent(locales: $locales, where: { id: $id }) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tshortDescription\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t\ttext\n\t\t\t}\n\t\t\tisDisplayed\n\t\t\tdateAndTime\n\t\t\tlocale\n\t\t\tpictures {\n\t\t\t\turl\n\t\t\t\tfileName\n\t\t\t}\n\t\t}\n\t}\n':
		types.EventDocument,
	'\n\tquery Events($locales: [Locale!]!) {\n\t\tevents(locales: $locales) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tshortDescription\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t\ttext\n\t\t\t}\n\t\t\tisDisplayed\n\t\t\tdateAndTime\n\t\t\tlocale\n\t\t}\n\t}\n':
		types.EventsDocument,
	'\n\tquery Gallery {\n\t\tgalleries {\n\t\t\timages(first: 100) {\n\t\t\t\tfileName\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n':
		types.GalleryDocument,
	'\n\tquery Assets {\n\t\tassets(where: { mimeType: "application/pdf" }) {\n\t\t\tid\n\t\t\tfileName\n\t\t\turl\n\t\t}\n\t}\n':
		types.AssetsDocument,
	'\n\tquery MenuCategories {\n\t\tmenuCategories {\n\t\t\tname\n\t\t}\n\t}\n':
		types.MenuCategoriesDocument,
	'\n\tquery menuItems($locales: [Locale!]!) {\n\t\tmenuItems(locales: $locales) {\n\t\t\tname\n\t\t\tdescription\n\t\t\tprice\n\t\t\tlocale\n\t\t\tmenuCategory {\n\t\t\t\tname\n\t\t\t\tlocale\n\t\t\t}\n\t\t}\n\t}\n':
		types.MenuItemsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery Event($locales: [Locale!]!, $id: ID!) {\n\t\tevent(locales: $locales, where: { id: $id }) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tshortDescription\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t\ttext\n\t\t\t}\n\t\t\tisDisplayed\n\t\t\tdateAndTime\n\t\t\tlocale\n\t\t\tpictures {\n\t\t\t\turl\n\t\t\t\tfileName\n\t\t\t}\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery Event($locales: [Locale!]!, $id: ID!) {\n\t\tevent(locales: $locales, where: { id: $id }) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tshortDescription\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t\ttext\n\t\t\t}\n\t\t\tisDisplayed\n\t\t\tdateAndTime\n\t\t\tlocale\n\t\t\tpictures {\n\t\t\t\turl\n\t\t\t\tfileName\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery Events($locales: [Locale!]!) {\n\t\tevents(locales: $locales) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tshortDescription\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t\ttext\n\t\t\t}\n\t\t\tisDisplayed\n\t\t\tdateAndTime\n\t\t\tlocale\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery Events($locales: [Locale!]!) {\n\t\tevents(locales: $locales) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tshortDescription\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t\ttext\n\t\t\t}\n\t\t\tisDisplayed\n\t\t\tdateAndTime\n\t\t\tlocale\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery Gallery {\n\t\tgalleries {\n\t\t\timages(first: 100) {\n\t\t\t\tfileName\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery Gallery {\n\t\tgalleries {\n\t\t\timages(first: 100) {\n\t\t\t\tfileName\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery Assets {\n\t\tassets(where: { mimeType: "application/pdf" }) {\n\t\t\tid\n\t\t\tfileName\n\t\t\turl\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery Assets {\n\t\tassets(where: { mimeType: "application/pdf" }) {\n\t\t\tid\n\t\t\tfileName\n\t\t\turl\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery MenuCategories {\n\t\tmenuCategories {\n\t\t\tname\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery MenuCategories {\n\t\tmenuCategories {\n\t\t\tname\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery menuItems($locales: [Locale!]!) {\n\t\tmenuItems(locales: $locales) {\n\t\t\tname\n\t\t\tdescription\n\t\t\tprice\n\t\t\tlocale\n\t\t\tmenuCategory {\n\t\t\t\tname\n\t\t\t\tlocale\n\t\t\t}\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery menuItems($locales: [Locale!]!) {\n\t\tmenuItems(locales: $locales) {\n\t\t\tname\n\t\t\tdescription\n\t\t\tprice\n\t\t\tlocale\n\t\t\tmenuCategory {\n\t\t\t\tname\n\t\t\t\tlocale\n\t\t\t}\n\t\t}\n\t}\n'];

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
