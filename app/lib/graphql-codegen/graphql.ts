/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
	Date: { input: any; output: any };
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
	DateTime: { input: any; output: any };
	Hex: { input: any; output: any };
	/** Raw JSON value */
	Json: { input: any; output: any };
	/** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
	Long: { input: any; output: any };
	RGBAHue: { input: any; output: any };
	RGBATransparency: { input: any; output: any };
	/** Slate-compatible RichText AST */
	RichTextAST: { input: any; output: any };
};

export type Aggregate = {
	__typename?: 'Aggregate';
	count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity &
	Node & {
		__typename?: 'Asset';
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Get the document in other stages */
		documentInStages: Array<Asset>;
		/** The file name */
		fileName: Scalars['String']['output'];
		/** The file handle */
		handle: Scalars['String']['output'];
		/** The height of the file */
		height?: Maybe<Scalars['Float']['output']>;
		/** List of Asset versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		imagesGallery: Array<Gallery>;
		imagesRestaurantGallery: Array<RestaurantGallery>;
		/** System Locale field */
		locale: Locale;
		/** Get the other localizations for this document */
		localizations: Array<Asset>;
		/** The mime type of the file */
		mimeType?: Maybe<Scalars['String']['output']>;
		pictureEvent: Array<Event>;
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		/** The file size */
		size?: Maybe<Scalars['Float']['output']>;
		/** System stage field */
		stage: Stage;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
		/** Get the url for the asset with provided transformations applied. */
		url: Scalars['String']['output'];
		/** The file width */
		width?: Maybe<Scalars['Float']['output']>;
	};

/** Asset system model */
export type AssetCreatedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetImagesGalleryArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<GalleryOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<GalleryWhereInput>;
};

/** Asset system model */
export type AssetImagesRestaurantGalleryArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<RestaurantGalleryOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<RestaurantGalleryWhereInput>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPictureEventArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<EventOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<EventWhereInput>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
	transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
	__typename?: 'AssetConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<AssetEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type AssetCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	fileName: Scalars['String']['input'];
	handle: Scalars['String']['input'];
	height?: InputMaybe<Scalars['Float']['input']>;
	imagesGallery?: InputMaybe<GalleryCreateManyInlineInput>;
	imagesRestaurantGallery?: InputMaybe<RestaurantGalleryCreateManyInlineInput>;
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<AssetCreateLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	pictureEvent?: InputMaybe<EventCreateManyInlineInput>;
	size?: InputMaybe<Scalars['Float']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	fileName: Scalars['String']['input'];
	handle: Scalars['String']['input'];
	height?: InputMaybe<Scalars['Float']['input']>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
	/** Localization input */
	data: AssetCreateLocalizationDataInput;
	locale: Locale;
};

export type AssetCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
	/** Connect multiple existing Asset documents */
	connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Create and connect multiple existing Asset documents */
	create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
	/** Connect one existing Asset document */
	connect?: InputMaybe<AssetWhereUniqueInput>;
	/** Create and connect one Asset document */
	create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
	__typename?: 'AssetEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<AssetWhereStageInput>;
	documentInStages_none?: InputMaybe<AssetWhereStageInput>;
	documentInStages_some?: InputMaybe<AssetWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	imagesGallery_every?: InputMaybe<GalleryWhereInput>;
	imagesGallery_none?: InputMaybe<GalleryWhereInput>;
	imagesGallery_some?: InputMaybe<GalleryWhereInput>;
	imagesRestaurantGallery_every?: InputMaybe<RestaurantGalleryWhereInput>;
	imagesRestaurantGallery_none?: InputMaybe<RestaurantGalleryWhereInput>;
	imagesRestaurantGallery_some?: InputMaybe<RestaurantGalleryWhereInput>;
	pictureEvent_every?: InputMaybe<EventWhereInput>;
	pictureEvent_none?: InputMaybe<EventWhereInput>;
	pictureEvent_some?: InputMaybe<EventWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	FileNameAsc = 'fileName_ASC',
	FileNameDesc = 'fileName_DESC',
	HandleAsc = 'handle_ASC',
	HandleDesc = 'handle_DESC',
	HeightAsc = 'height_ASC',
	HeightDesc = 'height_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	MimeTypeAsc = 'mimeType_ASC',
	MimeTypeDesc = 'mimeType_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	SizeAsc = 'size_ASC',
	SizeDesc = 'size_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	WidthAsc = 'width_ASC',
	WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
	document?: InputMaybe<DocumentTransformationInput>;
	image?: InputMaybe<ImageTransformationInput>;
	/** Pass true if you want to validate the passed transformation parameters */
	validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
	fileName?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	imagesGallery?: InputMaybe<GalleryUpdateManyInlineInput>;
	imagesRestaurantGallery?: InputMaybe<RestaurantGalleryUpdateManyInlineInput>;
	/** Manage document localizations */
	localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	pictureEvent?: InputMaybe<EventUpdateManyInlineInput>;
	size?: InputMaybe<Scalars['Float']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
	fileName?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
	data: AssetUpdateLocalizationDataInput;
	locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>;
	/** Localizations to update */
	update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
	upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
	/** Connect multiple existing Asset documents */
	connect?: InputMaybe<Array<AssetConnectInput>>;
	/** Create and connect multiple Asset documents */
	create?: InputMaybe<Array<AssetCreateInput>>;
	/** Delete multiple Asset documents */
	delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Disconnect multiple Asset documents */
	disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Asset documents */
	set?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Update multiple Asset documents */
	update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Asset documents */
	upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
	fileName?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	/** Optional updates to localizations */
	localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
	fileName?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
	data: AssetUpdateManyLocalizationDataInput;
	locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: AssetUpdateManyInput;
	/** Document search */
	where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
	/** Connect existing Asset document */
	connect?: InputMaybe<AssetWhereUniqueInput>;
	/** Create and connect one Asset document */
	create?: InputMaybe<AssetCreateInput>;
	/** Delete currently connected Asset document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected Asset document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Asset document */
	update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Asset document */
	upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: AssetUpdateInput;
	/** Unique document search */
	where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
	/** Create document if it didn't exist */
	create: AssetCreateInput;
	/** Update document if it exists */
	update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
	create: AssetCreateLocalizationDataInput;
	locale: Locale;
	update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: AssetUpsertInput;
	/** Unique document search */
	where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<AssetWhereStageInput>;
	documentInStages_none?: InputMaybe<AssetWhereStageInput>;
	documentInStages_some?: InputMaybe<AssetWhereStageInput>;
	fileName?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	fileName_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	fileName_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	handle_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	handle_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	handle_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	handle_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	handle_starts_with?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than the given value. */
	height_gt?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than or equal the given value. */
	height_gte?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are contained in given list. */
	height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	/** All values less than the given value. */
	height_lt?: InputMaybe<Scalars['Float']['input']>;
	/** All values less than or equal the given value. */
	height_lte?: InputMaybe<Scalars['Float']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	height_not?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are not contained in given list. */
	height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	imagesGallery_every?: InputMaybe<GalleryWhereInput>;
	imagesGallery_none?: InputMaybe<GalleryWhereInput>;
	imagesGallery_some?: InputMaybe<GalleryWhereInput>;
	imagesRestaurantGallery_every?: InputMaybe<RestaurantGalleryWhereInput>;
	imagesRestaurantGallery_none?: InputMaybe<RestaurantGalleryWhereInput>;
	imagesRestaurantGallery_some?: InputMaybe<RestaurantGalleryWhereInput>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	mimeType_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	mimeType_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
	pictureEvent_every?: InputMaybe<EventWhereInput>;
	pictureEvent_none?: InputMaybe<EventWhereInput>;
	pictureEvent_some?: InputMaybe<EventWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	size?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than the given value. */
	size_gt?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than or equal the given value. */
	size_gte?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are contained in given list. */
	size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	/** All values less than the given value. */
	size_lt?: InputMaybe<Scalars['Float']['input']>;
	/** All values less than or equal the given value. */
	size_lte?: InputMaybe<Scalars['Float']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	size_not?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are not contained in given list. */
	size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
	width?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than the given value. */
	width_gt?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than or equal the given value. */
	width_gte?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are contained in given list. */
	width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	/** All values less than the given value. */
	width_lt?: InputMaybe<Scalars['Float']['input']>;
	/** All values less than or equal the given value. */
	width_lte?: InputMaybe<Scalars['Float']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	width_not?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are not contained in given list. */
	width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
	__typename?: 'BatchPayload';
	/** The number of nodes that have been affected by the Batch operation. */
	count: Scalars['Long']['output'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
	__typename?: 'Color';
	css: Scalars['String']['output'];
	hex: Scalars['Hex']['output'];
	rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
	hex?: InputMaybe<Scalars['Hex']['input']>;
	rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
	/** Connect document after specified document */
	after?: InputMaybe<Scalars['ID']['input']>;
	/** Connect document before specified document */
	before?: InputMaybe<Scalars['ID']['input']>;
	/** Connect document at last position */
	end?: InputMaybe<Scalars['Boolean']['input']>;
	/** Connect document at first position */
	start?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentFileTypes {
	Doc = 'doc',
	Docx = 'docx',
	Html = 'html',
	Jpg = 'jpg',
	Odp = 'odp',
	Ods = 'ods',
	Odt = 'odt',
	Pdf = 'pdf',
	Png = 'png',
	Ppt = 'ppt',
	Pptx = 'pptx',
	Svg = 'svg',
	Txt = 'txt',
	Webp = 'webp',
	Xls = 'xls',
	Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
	/**
	 * Transforms a document into a desired file type.
	 * See this matrix for format support:
	 *
	 * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
	 * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
	 * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
	 * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
	 * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
	 * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
	 * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
	 * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
	 * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
	 * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
	 * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
	 * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * SVG:	jpg, odp, ods, odt, pdf, png, and webp
	 * HTML:	jpg, odt, pdf, svg, txt, and webp
	 * TXT:	jpg, html, odt, pdf, svg, and webp
	 */
	format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
	/** Changes the output for the file. */
	output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
	__typename?: 'DocumentVersion';
	createdAt: Scalars['DateTime']['output'];
	data?: Maybe<Scalars['Json']['output']>;
	id: Scalars['ID']['output'];
	revision: Scalars['Int']['output'];
	stage: Stage;
};

/** An object with an ID */
export type Entity = {
	/** The id of the object. */
	id: Scalars['ID']['output'];
	/** The Stage of an object */
	stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
	/** Asset system model */
	Asset = 'Asset',
	/** Events related to Zeleni kut */
	Event = 'Event',
	/** Gallery of images to be displayed on "Gallery" page */
	Gallery = 'Gallery',
	/** Images related to restaurant: food, drinks, etc. */
	RestaurantGallery = 'RestaurantGallery',
	/** Scheduled Operation system model */
	ScheduledOperation = 'ScheduledOperation',
	/** Scheduled Release system model */
	ScheduledRelease = 'ScheduledRelease',
	/** User system model */
	User = 'User',
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
	/** The ID of an object */
	id: Scalars['ID']['input'];
	locale?: InputMaybe<Locale>;
	stage: Stage;
	/** The Type name of an object */
	typename: EntityTypeName;
};

/** Events related to Zeleni kut */
export type Event = Entity &
	Node & {
		__typename?: 'Event';
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Date and time of event */
		dateAndTime: Scalars['DateTime']['output'];
		/** Detailed description of event. */
		description: EventDescriptionRichText;
		/** Get the document in other stages */
		documentInStages: Array<Event>;
		/** List of Event versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** Determines whether it is displayed or not */
		isDisplayed?: Maybe<Scalars['Boolean']['output']>;
		/** System Locale field */
		locale: Locale;
		/** Get the other localizations for this document */
		localizations: Array<Event>;
		/** Pictures of specific event */
		pictures: Array<Asset>;
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		/** Short description that is going to show user a short info on specific event. On the click of event card, they will be redirected to Event page with detailed description . */
		shortDescription: Scalars['String']['output'];
		/** System stage field */
		stage: Stage;
		title: Scalars['String']['output'];
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

/** Events related to Zeleni kut */
export type EventCreatedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Events related to Zeleni kut */
export type EventCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Events related to Zeleni kut */
export type EventDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

/** Events related to Zeleni kut */
export type EventHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

/** Events related to Zeleni kut */
export type EventLocalizationsArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	locales?: Array<Locale>;
};

/** Events related to Zeleni kut */
export type EventPicturesArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<AssetOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<AssetWhereInput>;
};

/** Events related to Zeleni kut */
export type EventPublishedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Events related to Zeleni kut */
export type EventPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Events related to Zeleni kut */
export type EventScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Events related to Zeleni kut */
export type EventUpdatedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Events related to Zeleni kut */
export type EventUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type EventConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: EventWhereUniqueInput;
};

/** A connection to a list of items. */
export type EventConnection = {
	__typename?: 'EventConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<EventEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type EventCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	dateAndTime: Scalars['DateTime']['input'];
	/** description input for default locale (en) */
	description: Scalars['RichTextAST']['input'];
	isDisplayed?: InputMaybe<Scalars['Boolean']['input']>;
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<EventCreateLocalizationsInput>;
	pictures?: InputMaybe<AssetCreateManyInlineInput>;
	/** shortDescription input for default locale (en) */
	shortDescription: Scalars['String']['input'];
	/** title input for default locale (en) */
	title: Scalars['String']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventCreateLocalizationDataInput = {
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description: Scalars['RichTextAST']['input'];
	shortDescription: Scalars['String']['input'];
	title: Scalars['String']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventCreateLocalizationInput = {
	/** Localization input */
	data: EventCreateLocalizationDataInput;
	locale: Locale;
};

export type EventCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<EventCreateLocalizationInput>>;
};

export type EventCreateManyInlineInput = {
	/** Connect multiple existing Event documents */
	connect?: InputMaybe<Array<EventWhereUniqueInput>>;
	/** Create and connect multiple existing Event documents */
	create?: InputMaybe<Array<EventCreateInput>>;
};

export type EventCreateOneInlineInput = {
	/** Connect one existing Event document */
	connect?: InputMaybe<EventWhereUniqueInput>;
	/** Create and connect one Event document */
	create?: InputMaybe<EventCreateInput>;
};

export type EventDescriptionRichText = {
	__typename?: 'EventDescriptionRichText';
	/** Returns HTMl representation */
	html: Scalars['String']['output'];
	json: Scalars['RichTextAST']['output'];
	/** Returns Markdown representation */
	markdown: Scalars['String']['output'];
	/** @deprecated Please use the 'json' field */
	raw: Scalars['RichTextAST']['output'];
	references: Array<EventDescriptionRichTextEmbeddedTypes>;
	/** Returns plain-text contents of RichText */
	text: Scalars['String']['output'];
};

export type EventDescriptionRichTextReferencesArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type EventDescriptionRichTextEmbeddedTypes = Asset | Event;

/** An edge in a connection. */
export type EventEdge = {
	__typename?: 'EventEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Event;
};

/** Identifies documents */
export type EventManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<EventWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<EventWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<EventWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	dateAndTime?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	dateAndTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	dateAndTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	dateAndTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	dateAndTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	dateAndTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	dateAndTime_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	dateAndTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	documentInStages_every?: InputMaybe<EventWhereStageInput>;
	documentInStages_none?: InputMaybe<EventWhereStageInput>;
	documentInStages_some?: InputMaybe<EventWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isDisplayed?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isDisplayed_not?: InputMaybe<Scalars['Boolean']['input']>;
	pictures_every?: InputMaybe<AssetWhereInput>;
	pictures_none?: InputMaybe<AssetWhereInput>;
	pictures_some?: InputMaybe<AssetWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum EventOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DateAndTimeAsc = 'dateAndTime_ASC',
	DateAndTimeDesc = 'dateAndTime_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	IsDisplayedAsc = 'isDisplayed_ASC',
	IsDisplayedDesc = 'isDisplayed_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	ShortDescriptionAsc = 'shortDescription_ASC',
	ShortDescriptionDesc = 'shortDescription_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type EventUpdateInput = {
	dateAndTime?: InputMaybe<Scalars['DateTime']['input']>;
	/** description input for default locale (en) */
	description?: InputMaybe<Scalars['RichTextAST']['input']>;
	isDisplayed?: InputMaybe<Scalars['Boolean']['input']>;
	/** Manage document localizations */
	localizations?: InputMaybe<EventUpdateLocalizationsInput>;
	pictures?: InputMaybe<AssetUpdateManyInlineInput>;
	/** shortDescription input for default locale (en) */
	shortDescription?: InputMaybe<Scalars['String']['input']>;
	/** title input for default locale (en) */
	title?: InputMaybe<Scalars['String']['input']>;
};

export type EventUpdateLocalizationDataInput = {
	description?: InputMaybe<Scalars['RichTextAST']['input']>;
	shortDescription?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type EventUpdateLocalizationInput = {
	data: EventUpdateLocalizationDataInput;
	locale: Locale;
};

export type EventUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<EventCreateLocalizationInput>>;
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>;
	/** Localizations to update */
	update?: InputMaybe<Array<EventUpdateLocalizationInput>>;
	upsert?: InputMaybe<Array<EventUpsertLocalizationInput>>;
};

export type EventUpdateManyInlineInput = {
	/** Connect multiple existing Event documents */
	connect?: InputMaybe<Array<EventConnectInput>>;
	/** Create and connect multiple Event documents */
	create?: InputMaybe<Array<EventCreateInput>>;
	/** Delete multiple Event documents */
	delete?: InputMaybe<Array<EventWhereUniqueInput>>;
	/** Disconnect multiple Event documents */
	disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Event documents */
	set?: InputMaybe<Array<EventWhereUniqueInput>>;
	/** Update multiple Event documents */
	update?: InputMaybe<Array<EventUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Event documents */
	upsert?: InputMaybe<Array<EventUpsertWithNestedWhereUniqueInput>>;
};

export type EventUpdateManyInput = {
	dateAndTime?: InputMaybe<Scalars['DateTime']['input']>;
	/** description input for default locale (en) */
	description?: InputMaybe<Scalars['RichTextAST']['input']>;
	isDisplayed?: InputMaybe<Scalars['Boolean']['input']>;
	/** Optional updates to localizations */
	localizations?: InputMaybe<EventUpdateManyLocalizationsInput>;
	/** shortDescription input for default locale (en) */
	shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type EventUpdateManyLocalizationDataInput = {
	description?: InputMaybe<Scalars['RichTextAST']['input']>;
	shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type EventUpdateManyLocalizationInput = {
	data: EventUpdateManyLocalizationDataInput;
	locale: Locale;
};

export type EventUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<EventUpdateManyLocalizationInput>>;
};

export type EventUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: EventUpdateManyInput;
	/** Document search */
	where: EventWhereInput;
};

export type EventUpdateOneInlineInput = {
	/** Connect existing Event document */
	connect?: InputMaybe<EventWhereUniqueInput>;
	/** Create and connect one Event document */
	create?: InputMaybe<EventCreateInput>;
	/** Delete currently connected Event document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected Event document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Event document */
	update?: InputMaybe<EventUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Event document */
	upsert?: InputMaybe<EventUpsertWithNestedWhereUniqueInput>;
};

export type EventUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: EventUpdateInput;
	/** Unique document search */
	where: EventWhereUniqueInput;
};

export type EventUpsertInput = {
	/** Create document if it didn't exist */
	create: EventCreateInput;
	/** Update document if it exists */
	update: EventUpdateInput;
};

export type EventUpsertLocalizationInput = {
	create: EventCreateLocalizationDataInput;
	locale: Locale;
	update: EventUpdateLocalizationDataInput;
};

export type EventUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: EventUpsertInput;
	/** Unique document search */
	where: EventWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type EventWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type EventWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<EventWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<EventWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<EventWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	dateAndTime?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	dateAndTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	dateAndTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	dateAndTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	dateAndTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	dateAndTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	dateAndTime_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	dateAndTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	documentInStages_every?: InputMaybe<EventWhereStageInput>;
	documentInStages_none?: InputMaybe<EventWhereStageInput>;
	documentInStages_some?: InputMaybe<EventWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isDisplayed?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isDisplayed_not?: InputMaybe<Scalars['Boolean']['input']>;
	pictures_every?: InputMaybe<AssetWhereInput>;
	pictures_none?: InputMaybe<AssetWhereInput>;
	pictures_some?: InputMaybe<AssetWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	shortDescription?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	shortDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	shortDescription_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	shortDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	shortDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	shortDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type EventWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<EventWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<EventWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<EventWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<EventWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Event record uniquely */
export type EventWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

/** Gallery of images to be displayed on "Gallery" page */
export type Gallery = Entity &
	Node & {
		__typename?: 'Gallery';
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Get the document in other stages */
		documentInStages: Array<Gallery>;
		/** List of Gallery versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		images: Array<Asset>;
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		/** System stage field */
		stage: Stage;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

/** Gallery of images to be displayed on "Gallery" page */
export type GalleryCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Gallery of images to be displayed on "Gallery" page */
export type GalleryDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

/** Gallery of images to be displayed on "Gallery" page */
export type GalleryHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

/** Gallery of images to be displayed on "Gallery" page */
export type GalleryImagesArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<AssetOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<AssetWhereInput>;
};

/** Gallery of images to be displayed on "Gallery" page */
export type GalleryPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Gallery of images to be displayed on "Gallery" page */
export type GalleryScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Gallery of images to be displayed on "Gallery" page */
export type GalleryUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type GalleryConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: GalleryWhereUniqueInput;
};

/** A connection to a list of items. */
export type GalleryConnection = {
	__typename?: 'GalleryConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<GalleryEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type GalleryCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	images?: InputMaybe<AssetCreateManyInlineInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GalleryCreateManyInlineInput = {
	/** Connect multiple existing Gallery documents */
	connect?: InputMaybe<Array<GalleryWhereUniqueInput>>;
	/** Create and connect multiple existing Gallery documents */
	create?: InputMaybe<Array<GalleryCreateInput>>;
};

export type GalleryCreateOneInlineInput = {
	/** Connect one existing Gallery document */
	connect?: InputMaybe<GalleryWhereUniqueInput>;
	/** Create and connect one Gallery document */
	create?: InputMaybe<GalleryCreateInput>;
};

/** An edge in a connection. */
export type GalleryEdge = {
	__typename?: 'GalleryEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Gallery;
};

/** Identifies documents */
export type GalleryManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<GalleryWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<GalleryWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<GalleryWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<GalleryWhereStageInput>;
	documentInStages_none?: InputMaybe<GalleryWhereStageInput>;
	documentInStages_some?: InputMaybe<GalleryWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	images_every?: InputMaybe<AssetWhereInput>;
	images_none?: InputMaybe<AssetWhereInput>;
	images_some?: InputMaybe<AssetWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum GalleryOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type GalleryUpdateInput = {
	images?: InputMaybe<AssetUpdateManyInlineInput>;
};

export type GalleryUpdateManyInlineInput = {
	/** Connect multiple existing Gallery documents */
	connect?: InputMaybe<Array<GalleryConnectInput>>;
	/** Create and connect multiple Gallery documents */
	create?: InputMaybe<Array<GalleryCreateInput>>;
	/** Delete multiple Gallery documents */
	delete?: InputMaybe<Array<GalleryWhereUniqueInput>>;
	/** Disconnect multiple Gallery documents */
	disconnect?: InputMaybe<Array<GalleryWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Gallery documents */
	set?: InputMaybe<Array<GalleryWhereUniqueInput>>;
	/** Update multiple Gallery documents */
	update?: InputMaybe<Array<GalleryUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Gallery documents */
	upsert?: InputMaybe<Array<GalleryUpsertWithNestedWhereUniqueInput>>;
};

export type GalleryUpdateManyInput = {
	/** No fields in updateMany data input */
	_?: InputMaybe<Scalars['String']['input']>;
};

export type GalleryUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: GalleryUpdateManyInput;
	/** Document search */
	where: GalleryWhereInput;
};

export type GalleryUpdateOneInlineInput = {
	/** Connect existing Gallery document */
	connect?: InputMaybe<GalleryWhereUniqueInput>;
	/** Create and connect one Gallery document */
	create?: InputMaybe<GalleryCreateInput>;
	/** Delete currently connected Gallery document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected Gallery document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Gallery document */
	update?: InputMaybe<GalleryUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Gallery document */
	upsert?: InputMaybe<GalleryUpsertWithNestedWhereUniqueInput>;
};

export type GalleryUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: GalleryUpdateInput;
	/** Unique document search */
	where: GalleryWhereUniqueInput;
};

export type GalleryUpsertInput = {
	/** Create document if it didn't exist */
	create: GalleryCreateInput;
	/** Update document if it exists */
	update: GalleryUpdateInput;
};

export type GalleryUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: GalleryUpsertInput;
	/** Unique document search */
	where: GalleryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type GalleryWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type GalleryWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<GalleryWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<GalleryWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<GalleryWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<GalleryWhereStageInput>;
	documentInStages_none?: InputMaybe<GalleryWhereStageInput>;
	documentInStages_some?: InputMaybe<GalleryWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	images_every?: InputMaybe<AssetWhereInput>;
	images_none?: InputMaybe<AssetWhereInput>;
	images_some?: InputMaybe<AssetWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GalleryWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<GalleryWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<GalleryWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<GalleryWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<GalleryWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Gallery record uniquely */
export type GalleryWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export enum ImageFit {
	/** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
	Clip = 'clip',
	/** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
	Crop = 'crop',
	/** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
	Max = 'max',
	/** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
	Scale = 'scale',
}

export type ImageResizeInput = {
	/** The default value for the fit parameter is fit:clip. */
	fit?: InputMaybe<ImageFit>;
	/** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
	height?: InputMaybe<Scalars['Int']['input']>;
	/** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
	width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
	/** Resizes the image */
	resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
	/** System locale */
	En = 'en',
	Hr = 'hr',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
	__typename?: 'Location';
	distance: Scalars['Float']['output'];
	latitude: Scalars['Float']['output'];
	longitude: Scalars['Float']['output'];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
	from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
	latitude: Scalars['Float']['input'];
	longitude: Scalars['Float']['input'];
};

export type Mutation = {
	__typename?: 'Mutation';
	/**
	 * Create one asset
	 * @deprecated Asset mutations will be overhauled soon
	 */
	createAsset?: Maybe<Asset>;
	/** Create one event */
	createEvent?: Maybe<Event>;
	/** Create one gallery */
	createGallery?: Maybe<Gallery>;
	/** Create one restaurantGallery */
	createRestaurantGallery?: Maybe<RestaurantGallery>;
	/** Create one scheduledRelease */
	createScheduledRelease?: Maybe<ScheduledRelease>;
	/** Delete one asset from _all_ existing stages. Returns deleted document. */
	deleteAsset?: Maybe<Asset>;
	/** Delete one event from _all_ existing stages. Returns deleted document. */
	deleteEvent?: Maybe<Event>;
	/** Delete one gallery from _all_ existing stages. Returns deleted document. */
	deleteGallery?: Maybe<Gallery>;
	/**
	 * Delete many Asset documents
	 * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
	 */
	deleteManyAssets: BatchPayload;
	/** Delete many Asset documents, return deleted documents */
	deleteManyAssetsConnection: AssetConnection;
	/**
	 * Delete many Event documents
	 * @deprecated Please use the new paginated many mutation (deleteManyEventsConnection)
	 */
	deleteManyEvents: BatchPayload;
	/** Delete many Event documents, return deleted documents */
	deleteManyEventsConnection: EventConnection;
	/**
	 * Delete many Gallery documents
	 * @deprecated Please use the new paginated many mutation (deleteManyGalleriesConnection)
	 */
	deleteManyGalleries: BatchPayload;
	/** Delete many Gallery documents, return deleted documents */
	deleteManyGalleriesConnection: GalleryConnection;
	/**
	 * Delete many RestaurantGallery documents
	 * @deprecated Please use the new paginated many mutation (deleteManyRestaurantGalleriesConnection)
	 */
	deleteManyRestaurantGalleries: BatchPayload;
	/** Delete many RestaurantGallery documents, return deleted documents */
	deleteManyRestaurantGalleriesConnection: RestaurantGalleryConnection;
	/** Delete one restaurantGallery from _all_ existing stages. Returns deleted document. */
	deleteRestaurantGallery?: Maybe<RestaurantGallery>;
	/** Delete and return scheduled operation */
	deleteScheduledOperation?: Maybe<ScheduledOperation>;
	/** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
	deleteScheduledRelease?: Maybe<ScheduledRelease>;
	/** Publish one asset */
	publishAsset?: Maybe<Asset>;
	/** Publish one event */
	publishEvent?: Maybe<Event>;
	/** Publish one gallery */
	publishGallery?: Maybe<Gallery>;
	/**
	 * Publish many Asset documents
	 * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
	 */
	publishManyAssets: BatchPayload;
	/** Publish many Asset documents */
	publishManyAssetsConnection: AssetConnection;
	/**
	 * Publish many Event documents
	 * @deprecated Please use the new paginated many mutation (publishManyEventsConnection)
	 */
	publishManyEvents: BatchPayload;
	/** Publish many Event documents */
	publishManyEventsConnection: EventConnection;
	/**
	 * Publish many Gallery documents
	 * @deprecated Please use the new paginated many mutation (publishManyGalleriesConnection)
	 */
	publishManyGalleries: BatchPayload;
	/** Publish many Gallery documents */
	publishManyGalleriesConnection: GalleryConnection;
	/**
	 * Publish many RestaurantGallery documents
	 * @deprecated Please use the new paginated many mutation (publishManyRestaurantGalleriesConnection)
	 */
	publishManyRestaurantGalleries: BatchPayload;
	/** Publish many RestaurantGallery documents */
	publishManyRestaurantGalleriesConnection: RestaurantGalleryConnection;
	/** Publish one restaurantGallery */
	publishRestaurantGallery?: Maybe<RestaurantGallery>;
	/** Schedule to publish one asset */
	schedulePublishAsset?: Maybe<Asset>;
	/** Schedule to publish one event */
	schedulePublishEvent?: Maybe<Event>;
	/** Schedule to publish one gallery */
	schedulePublishGallery?: Maybe<Gallery>;
	/** Schedule to publish one restaurantGallery */
	schedulePublishRestaurantGallery?: Maybe<RestaurantGallery>;
	/** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishAsset?: Maybe<Asset>;
	/** Unpublish one event from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishEvent?: Maybe<Event>;
	/** Unpublish one gallery from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishGallery?: Maybe<Gallery>;
	/** Unpublish one restaurantGallery from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishRestaurantGallery?: Maybe<RestaurantGallery>;
	/** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishAsset?: Maybe<Asset>;
	/** Unpublish one event from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishEvent?: Maybe<Event>;
	/** Unpublish one gallery from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishGallery?: Maybe<Gallery>;
	/**
	 * Unpublish many Asset documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
	 */
	unpublishManyAssets: BatchPayload;
	/** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyAssetsConnection: AssetConnection;
	/**
	 * Unpublish many Event documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyEventsConnection)
	 */
	unpublishManyEvents: BatchPayload;
	/** Find many Event documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyEventsConnection: EventConnection;
	/**
	 * Unpublish many Gallery documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyGalleriesConnection)
	 */
	unpublishManyGalleries: BatchPayload;
	/** Find many Gallery documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyGalleriesConnection: GalleryConnection;
	/**
	 * Unpublish many RestaurantGallery documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyRestaurantGalleriesConnection)
	 */
	unpublishManyRestaurantGalleries: BatchPayload;
	/** Find many RestaurantGallery documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyRestaurantGalleriesConnection: RestaurantGalleryConnection;
	/** Unpublish one restaurantGallery from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishRestaurantGallery?: Maybe<RestaurantGallery>;
	/** Update one asset */
	updateAsset?: Maybe<Asset>;
	/** Update one event */
	updateEvent?: Maybe<Event>;
	/** Update one gallery */
	updateGallery?: Maybe<Gallery>;
	/**
	 * Update many assets
	 * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
	 */
	updateManyAssets: BatchPayload;
	/** Update many Asset documents */
	updateManyAssetsConnection: AssetConnection;
	/**
	 * Update many events
	 * @deprecated Please use the new paginated many mutation (updateManyEventsConnection)
	 */
	updateManyEvents: BatchPayload;
	/** Update many Event documents */
	updateManyEventsConnection: EventConnection;
	/**
	 * Update many galleries
	 * @deprecated Please use the new paginated many mutation (updateManyGalleriesConnection)
	 */
	updateManyGalleries: BatchPayload;
	/** Update many Gallery documents */
	updateManyGalleriesConnection: GalleryConnection;
	/**
	 * Update many restaurantGalleries
	 * @deprecated Please use the new paginated many mutation (updateManyRestaurantGalleriesConnection)
	 */
	updateManyRestaurantGalleries: BatchPayload;
	/** Update many RestaurantGallery documents */
	updateManyRestaurantGalleriesConnection: RestaurantGalleryConnection;
	/** Update one restaurantGallery */
	updateRestaurantGallery?: Maybe<RestaurantGallery>;
	/** Update one scheduledRelease */
	updateScheduledRelease?: Maybe<ScheduledRelease>;
	/** Upsert one asset */
	upsertAsset?: Maybe<Asset>;
	/** Upsert one event */
	upsertEvent?: Maybe<Event>;
	/** Upsert one gallery */
	upsertGallery?: Maybe<Gallery>;
	/** Upsert one restaurantGallery */
	upsertRestaurantGallery?: Maybe<RestaurantGallery>;
};

export type MutationCreateAssetArgs = {
	data: AssetCreateInput;
};

export type MutationCreateEventArgs = {
	data: EventCreateInput;
};

export type MutationCreateGalleryArgs = {
	data: GalleryCreateInput;
};

export type MutationCreateRestaurantGalleryArgs = {
	data: RestaurantGalleryCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
	data: ScheduledReleaseCreateInput;
};

export type MutationDeleteAssetArgs = {
	where: AssetWhereUniqueInput;
};

export type MutationDeleteEventArgs = {
	where: EventWhereUniqueInput;
};

export type MutationDeleteGalleryArgs = {
	where: GalleryWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyEventsArgs = {
	where?: InputMaybe<EventManyWhereInput>;
};

export type MutationDeleteManyEventsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<EventManyWhereInput>;
};

export type MutationDeleteManyGalleriesArgs = {
	where?: InputMaybe<GalleryManyWhereInput>;
};

export type MutationDeleteManyGalleriesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<GalleryManyWhereInput>;
};

export type MutationDeleteManyRestaurantGalleriesArgs = {
	where?: InputMaybe<RestaurantGalleryManyWhereInput>;
};

export type MutationDeleteManyRestaurantGalleriesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<RestaurantGalleryManyWhereInput>;
};

export type MutationDeleteRestaurantGalleryArgs = {
	where: RestaurantGalleryWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
	where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
	where: ScheduledReleaseWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	to?: Array<Stage>;
	where: AssetWhereUniqueInput;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishEventArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	to?: Array<Stage>;
	where: EventWhereUniqueInput;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishGalleryArgs = {
	to?: Array<Stage>;
	where: GalleryWhereUniqueInput;
};

export type MutationPublishManyAssetsArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<AssetManyWhereInput>;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<AssetManyWhereInput>;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishManyEventsArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<EventManyWhereInput>;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishManyEventsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<EventManyWhereInput>;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishManyGalleriesArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<GalleryManyWhereInput>;
};

export type MutationPublishManyGalleriesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<GalleryManyWhereInput>;
};

export type MutationPublishManyRestaurantGalleriesArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<RestaurantGalleryManyWhereInput>;
};

export type MutationPublishManyRestaurantGalleriesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<RestaurantGalleryManyWhereInput>;
};

export type MutationPublishRestaurantGalleryArgs = {
	to?: Array<Stage>;
	where: RestaurantGalleryWhereUniqueInput;
};

export type MutationSchedulePublishAssetArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: AssetWhereUniqueInput;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationSchedulePublishEventArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: EventWhereUniqueInput;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationSchedulePublishGalleryArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: GalleryWhereUniqueInput;
};

export type MutationSchedulePublishRestaurantGalleryArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: RestaurantGalleryWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishEventArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where: EventWhereUniqueInput;
};

export type MutationScheduleUnpublishGalleryArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	where: GalleryWhereUniqueInput;
};

export type MutationScheduleUnpublishRestaurantGalleryArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	where: RestaurantGalleryWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where: AssetWhereUniqueInput;
};

export type MutationUnpublishEventArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where: EventWhereUniqueInput;
};

export type MutationUnpublishGalleryArgs = {
	from?: Array<Stage>;
	where: GalleryWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyEventsArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where?: InputMaybe<EventManyWhereInput>;
};

export type MutationUnpublishManyEventsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where?: InputMaybe<EventManyWhereInput>;
};

export type MutationUnpublishManyGalleriesArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<GalleryManyWhereInput>;
};

export type MutationUnpublishManyGalleriesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<GalleryManyWhereInput>;
};

export type MutationUnpublishManyRestaurantGalleriesArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<RestaurantGalleryManyWhereInput>;
};

export type MutationUnpublishManyRestaurantGalleriesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<RestaurantGalleryManyWhereInput>;
};

export type MutationUnpublishRestaurantGalleryArgs = {
	from?: Array<Stage>;
	where: RestaurantGalleryWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
	data: AssetUpdateInput;
	where: AssetWhereUniqueInput;
};

export type MutationUpdateEventArgs = {
	data: EventUpdateInput;
	where: EventWhereUniqueInput;
};

export type MutationUpdateGalleryArgs = {
	data: GalleryUpdateInput;
	where: GalleryWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
	data: AssetUpdateManyInput;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: AssetUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyEventsArgs = {
	data: EventUpdateManyInput;
	where?: InputMaybe<EventManyWhereInput>;
};

export type MutationUpdateManyEventsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: EventUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<EventManyWhereInput>;
};

export type MutationUpdateManyGalleriesArgs = {
	data: GalleryUpdateManyInput;
	where?: InputMaybe<GalleryManyWhereInput>;
};

export type MutationUpdateManyGalleriesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: GalleryUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<GalleryManyWhereInput>;
};

export type MutationUpdateManyRestaurantGalleriesArgs = {
	data: RestaurantGalleryUpdateManyInput;
	where?: InputMaybe<RestaurantGalleryManyWhereInput>;
};

export type MutationUpdateManyRestaurantGalleriesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: RestaurantGalleryUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<RestaurantGalleryManyWhereInput>;
};

export type MutationUpdateRestaurantGalleryArgs = {
	data: RestaurantGalleryUpdateInput;
	where: RestaurantGalleryWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
	data: ScheduledReleaseUpdateInput;
	where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
	upsert: AssetUpsertInput;
	where: AssetWhereUniqueInput;
};

export type MutationUpsertEventArgs = {
	upsert: EventUpsertInput;
	where: EventWhereUniqueInput;
};

export type MutationUpsertGalleryArgs = {
	upsert: GalleryUpsertInput;
	where: GalleryWhereUniqueInput;
};

export type MutationUpsertRestaurantGalleryArgs = {
	upsert: RestaurantGalleryUpsertInput;
	where: RestaurantGalleryWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
	/** The id of the object. */
	id: Scalars['ID']['output'];
	/** The Stage of an object */
	stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
	__typename?: 'PageInfo';
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars['String']['output']>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean']['output'];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean']['output'];
	/** Number of items in the current page. */
	pageSize?: Maybe<Scalars['Int']['output']>;
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars['String']['output']>;
};

export type PublishLocaleInput = {
	/** Locales to publish */
	locale: Locale;
	/** Stages to publish selected locales to */
	stages: Array<Stage>;
};

export type Query = {
	__typename?: 'Query';
	/** Retrieve a single asset */
	asset?: Maybe<Asset>;
	/** Retrieve document version */
	assetVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple assets */
	assets: Array<Asset>;
	/** Retrieve multiple assets using the Relay connection interface */
	assetsConnection: AssetConnection;
	/** Fetches an object given its ID */
	entities?: Maybe<Array<Entity>>;
	/** Retrieve a single event */
	event?: Maybe<Event>;
	/** Retrieve document version */
	eventVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple events */
	events: Array<Event>;
	/** Retrieve multiple events using the Relay connection interface */
	eventsConnection: EventConnection;
	/** Retrieve multiple galleries */
	galleries: Array<Gallery>;
	/** Retrieve multiple galleries using the Relay connection interface */
	galleriesConnection: GalleryConnection;
	/** Retrieve a single gallery */
	gallery?: Maybe<Gallery>;
	/** Retrieve document version */
	galleryVersion?: Maybe<DocumentVersion>;
	/** Fetches an object given its ID */
	node?: Maybe<Node>;
	/** Retrieve multiple restaurantGalleries */
	restaurantGalleries: Array<RestaurantGallery>;
	/** Retrieve multiple restaurantGalleries using the Relay connection interface */
	restaurantGalleriesConnection: RestaurantGalleryConnection;
	/** Retrieve a single restaurantGallery */
	restaurantGallery?: Maybe<RestaurantGallery>;
	/** Retrieve document version */
	restaurantGalleryVersion?: Maybe<DocumentVersion>;
	/** Retrieve a single scheduledOperation */
	scheduledOperation?: Maybe<ScheduledOperation>;
	/** Retrieve multiple scheduledOperations */
	scheduledOperations: Array<ScheduledOperation>;
	/** Retrieve multiple scheduledOperations using the Relay connection interface */
	scheduledOperationsConnection: ScheduledOperationConnection;
	/** Retrieve a single scheduledRelease */
	scheduledRelease?: Maybe<ScheduledRelease>;
	/** Retrieve multiple scheduledReleases */
	scheduledReleases: Array<ScheduledRelease>;
	/** Retrieve multiple scheduledReleases using the Relay connection interface */
	scheduledReleasesConnection: ScheduledReleaseConnection;
	/** Retrieve a single user */
	user?: Maybe<User>;
	/** Retrieve multiple users */
	users: Array<User>;
	/** Retrieve multiple users using the Relay connection interface */
	usersConnection: UserConnection;
};

export type QueryAssetArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
	where: VersionWhereInput;
};

export type QueryAssetsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AssetOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AssetOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<AssetWhereInput>;
};

export type QueryEntitiesArgs = {
	locales?: InputMaybe<Array<Locale>>;
	where: Array<EntityWhereInput>;
};

export type QueryEventArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: EventWhereUniqueInput;
};

export type QueryEventVersionArgs = {
	where: VersionWhereInput;
};

export type QueryEventsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<EventOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<EventWhereInput>;
};

export type QueryEventsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<EventOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<EventWhereInput>;
};

export type QueryGalleriesArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<GalleryOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<GalleryWhereInput>;
};

export type QueryGalleriesConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<GalleryOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<GalleryWhereInput>;
};

export type QueryGalleryArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: GalleryWhereUniqueInput;
};

export type QueryGalleryVersionArgs = {
	where: VersionWhereInput;
};

export type QueryNodeArgs = {
	id: Scalars['ID']['input'];
	locales?: Array<Locale>;
	stage?: Stage;
};

export type QueryRestaurantGalleriesArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<RestaurantGalleryOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<RestaurantGalleryWhereInput>;
};

export type QueryRestaurantGalleriesConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<RestaurantGalleryOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<RestaurantGalleryWhereInput>;
};

export type QueryRestaurantGalleryArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: RestaurantGalleryWhereUniqueInput;
};

export type QueryRestaurantGalleryVersionArgs = {
	where: VersionWhereInput;
};

export type QueryScheduledOperationArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryUserArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<UserOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<UserOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
	__typename?: 'RGBA';
	a: Scalars['RGBATransparency']['output'];
	b: Scalars['RGBAHue']['output'];
	g: Scalars['RGBAHue']['output'];
	r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
	a: Scalars['RGBATransparency']['input'];
	b: Scalars['RGBAHue']['input'];
	g: Scalars['RGBAHue']['input'];
	r: Scalars['RGBAHue']['input'];
};

/** Images related to restaurant: food, drinks, etc. */
export type RestaurantGallery = Entity &
	Node & {
		__typename?: 'RestaurantGallery';
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Get the document in other stages */
		documentInStages: Array<RestaurantGallery>;
		/** List of RestaurantGallery versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		images: Array<Asset>;
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		/** System stage field */
		stage: Stage;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

/** Images related to restaurant: food, drinks, etc. */
export type RestaurantGalleryCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Images related to restaurant: food, drinks, etc. */
export type RestaurantGalleryDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

/** Images related to restaurant: food, drinks, etc. */
export type RestaurantGalleryHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

/** Images related to restaurant: food, drinks, etc. */
export type RestaurantGalleryImagesArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<AssetOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<AssetWhereInput>;
};

/** Images related to restaurant: food, drinks, etc. */
export type RestaurantGalleryPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Images related to restaurant: food, drinks, etc. */
export type RestaurantGalleryScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Images related to restaurant: food, drinks, etc. */
export type RestaurantGalleryUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type RestaurantGalleryConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: RestaurantGalleryWhereUniqueInput;
};

/** A connection to a list of items. */
export type RestaurantGalleryConnection = {
	__typename?: 'RestaurantGalleryConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<RestaurantGalleryEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type RestaurantGalleryCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	images?: InputMaybe<AssetCreateManyInlineInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RestaurantGalleryCreateManyInlineInput = {
	/** Connect multiple existing RestaurantGallery documents */
	connect?: InputMaybe<Array<RestaurantGalleryWhereUniqueInput>>;
	/** Create and connect multiple existing RestaurantGallery documents */
	create?: InputMaybe<Array<RestaurantGalleryCreateInput>>;
};

export type RestaurantGalleryCreateOneInlineInput = {
	/** Connect one existing RestaurantGallery document */
	connect?: InputMaybe<RestaurantGalleryWhereUniqueInput>;
	/** Create and connect one RestaurantGallery document */
	create?: InputMaybe<RestaurantGalleryCreateInput>;
};

/** An edge in a connection. */
export type RestaurantGalleryEdge = {
	__typename?: 'RestaurantGalleryEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: RestaurantGallery;
};

/** Identifies documents */
export type RestaurantGalleryManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<RestaurantGalleryWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<RestaurantGalleryWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<RestaurantGalleryWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<RestaurantGalleryWhereStageInput>;
	documentInStages_none?: InputMaybe<RestaurantGalleryWhereStageInput>;
	documentInStages_some?: InputMaybe<RestaurantGalleryWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	images_every?: InputMaybe<AssetWhereInput>;
	images_none?: InputMaybe<AssetWhereInput>;
	images_some?: InputMaybe<AssetWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum RestaurantGalleryOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type RestaurantGalleryUpdateInput = {
	images?: InputMaybe<AssetUpdateManyInlineInput>;
};

export type RestaurantGalleryUpdateManyInlineInput = {
	/** Connect multiple existing RestaurantGallery documents */
	connect?: InputMaybe<Array<RestaurantGalleryConnectInput>>;
	/** Create and connect multiple RestaurantGallery documents */
	create?: InputMaybe<Array<RestaurantGalleryCreateInput>>;
	/** Delete multiple RestaurantGallery documents */
	delete?: InputMaybe<Array<RestaurantGalleryWhereUniqueInput>>;
	/** Disconnect multiple RestaurantGallery documents */
	disconnect?: InputMaybe<Array<RestaurantGalleryWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing RestaurantGallery documents */
	set?: InputMaybe<Array<RestaurantGalleryWhereUniqueInput>>;
	/** Update multiple RestaurantGallery documents */
	update?: InputMaybe<Array<RestaurantGalleryUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple RestaurantGallery documents */
	upsert?: InputMaybe<Array<RestaurantGalleryUpsertWithNestedWhereUniqueInput>>;
};

export type RestaurantGalleryUpdateManyInput = {
	/** No fields in updateMany data input */
	_?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantGalleryUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: RestaurantGalleryUpdateManyInput;
	/** Document search */
	where: RestaurantGalleryWhereInput;
};

export type RestaurantGalleryUpdateOneInlineInput = {
	/** Connect existing RestaurantGallery document */
	connect?: InputMaybe<RestaurantGalleryWhereUniqueInput>;
	/** Create and connect one RestaurantGallery document */
	create?: InputMaybe<RestaurantGalleryCreateInput>;
	/** Delete currently connected RestaurantGallery document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected RestaurantGallery document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single RestaurantGallery document */
	update?: InputMaybe<RestaurantGalleryUpdateWithNestedWhereUniqueInput>;
	/** Upsert single RestaurantGallery document */
	upsert?: InputMaybe<RestaurantGalleryUpsertWithNestedWhereUniqueInput>;
};

export type RestaurantGalleryUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: RestaurantGalleryUpdateInput;
	/** Unique document search */
	where: RestaurantGalleryWhereUniqueInput;
};

export type RestaurantGalleryUpsertInput = {
	/** Create document if it didn't exist */
	create: RestaurantGalleryCreateInput;
	/** Update document if it exists */
	update: RestaurantGalleryUpdateInput;
};

export type RestaurantGalleryUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: RestaurantGalleryUpsertInput;
	/** Unique document search */
	where: RestaurantGalleryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type RestaurantGalleryWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type RestaurantGalleryWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<RestaurantGalleryWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<RestaurantGalleryWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<RestaurantGalleryWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<RestaurantGalleryWhereStageInput>;
	documentInStages_none?: InputMaybe<RestaurantGalleryWhereStageInput>;
	documentInStages_some?: InputMaybe<RestaurantGalleryWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	images_every?: InputMaybe<AssetWhereInput>;
	images_none?: InputMaybe<AssetWhereInput>;
	images_some?: InputMaybe<AssetWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type RestaurantGalleryWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<RestaurantGalleryWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<RestaurantGalleryWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<RestaurantGalleryWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<RestaurantGalleryWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References RestaurantGallery record uniquely */
export type RestaurantGalleryWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
	__typename?: 'RichText';
	/** Returns HTMl representation */
	html: Scalars['String']['output'];
	/** Returns Markdown representation */
	markdown: Scalars['String']['output'];
	/** Returns AST representation */
	raw: Scalars['RichTextAST']['output'];
	/** Returns plain-text contents of RichText */
	text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity &
	Node & {
		__typename?: 'ScheduledOperation';
		affectedDocuments: Array<ScheduledOperationAffectedDocument>;
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Operation description */
		description?: Maybe<Scalars['String']['output']>;
		/** Get the document in other stages */
		documentInStages: Array<ScheduledOperation>;
		/** Operation error message */
		errorMessage?: Maybe<Scalars['String']['output']>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		/** Raw operation payload including all details, this field is subject to change */
		rawPayload: Scalars['Json']['output'];
		/** The release this operation is scheduled for */
		release?: Maybe<ScheduledRelease>;
		/** System stage field */
		stage: Stage;
		/** operation Status */
		status: ScheduledOperationStatus;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Event | Gallery | RestaurantGallery;

export type ScheduledOperationConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
	__typename?: 'ScheduledOperationConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ScheduledOperationEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
	/** Connect multiple existing ScheduledOperation documents */
	connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
	/** Connect one existing ScheduledOperation document */
	connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
	__typename?: 'ScheduledOperationEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	/** All values containing the given json path. */
	rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Recursively tries to find the provided JSON scalar value inside the field.
	 * It does use an exact match when comparing values.
	 * If you pass `null` as value the filter will be ignored.
	 * Note: This filter fails if you try to look for a non scalar JSON value!
	 */
	rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
	release?: InputMaybe<ScheduledReleaseWhereInput>;
	status?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	ErrorMessageAsc = 'errorMessage_ASC',
	ErrorMessageDesc = 'errorMessage_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	StatusAsc = 'status_ASC',
	StatusDesc = 'status_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
	Canceled = 'CANCELED',
	Completed = 'COMPLETED',
	Failed = 'FAILED',
	InProgress = 'IN_PROGRESS',
	Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
	/** Connect multiple existing ScheduledOperation documents */
	connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
	/** Disconnect multiple ScheduledOperation documents */
	disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ScheduledOperation documents */
	set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
	/** Connect existing ScheduledOperation document */
	connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
	/** Disconnect currently connected ScheduledOperation document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	/** All values containing the given json path. */
	rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Recursively tries to find the provided JSON scalar value inside the field.
	 * It does use an exact match when comparing values.
	 * If you pass `null` as value the filter will be ignored.
	 * Note: This filter fails if you try to look for a non scalar JSON value!
	 */
	rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
	release?: InputMaybe<ScheduledReleaseWhereInput>;
	status?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity &
	Node & {
		__typename?: 'ScheduledRelease';
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Release description */
		description?: Maybe<Scalars['String']['output']>;
		/** Get the document in other stages */
		documentInStages: Array<ScheduledRelease>;
		/** Release error message */
		errorMessage?: Maybe<Scalars['String']['output']>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** Whether scheduled release should be run */
		isActive: Scalars['Boolean']['output'];
		/** Whether scheduled release is implicit */
		isImplicit: Scalars['Boolean']['output'];
		/** Operations to run with this release */
		operations: Array<ScheduledOperation>;
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		/** Release date and time */
		releaseAt?: Maybe<Scalars['DateTime']['output']>;
		/** System stage field */
		stage: Stage;
		/** Release Status */
		status: ScheduledReleaseStatus;
		/** Release Title */
		title?: Maybe<Scalars['String']['output']>;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
	__typename?: 'ScheduledReleaseConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ScheduledReleaseEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
	/** Connect multiple existing ScheduledRelease documents */
	connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Create and connect multiple existing ScheduledRelease documents */
	create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
	/** Connect one existing ScheduledRelease document */
	connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
	/** Create and connect one ScheduledRelease document */
	create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
	__typename?: 'ScheduledReleaseEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
	isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
	operations_every?: InputMaybe<ScheduledOperationWhereInput>;
	operations_none?: InputMaybe<ScheduledOperationWhereInput>;
	operations_some?: InputMaybe<ScheduledOperationWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	status?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	ErrorMessageAsc = 'errorMessage_ASC',
	ErrorMessageDesc = 'errorMessage_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	IsActiveAsc = 'isActive_ASC',
	IsActiveDesc = 'isActive_DESC',
	IsImplicitAsc = 'isImplicit_ASC',
	IsImplicitDesc = 'isImplicit_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	ReleaseAtAsc = 'releaseAt_ASC',
	ReleaseAtDesc = 'releaseAt_DESC',
	StatusAsc = 'status_ASC',
	StatusDesc = 'status_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
	Completed = 'COMPLETED',
	Failed = 'FAILED',
	InProgress = 'IN_PROGRESS',
	Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
	/** Connect multiple existing ScheduledRelease documents */
	connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
	/** Create and connect multiple ScheduledRelease documents */
	create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
	/** Delete multiple ScheduledRelease documents */
	delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Disconnect multiple ScheduledRelease documents */
	disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ScheduledRelease documents */
	set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Update multiple ScheduledRelease documents */
	update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple ScheduledRelease documents */
	upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ScheduledReleaseUpdateManyInput;
	/** Document search */
	where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
	/** Connect existing ScheduledRelease document */
	connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
	/** Create and connect one ScheduledRelease document */
	create?: InputMaybe<ScheduledReleaseCreateInput>;
	/** Delete currently connected ScheduledRelease document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected ScheduledRelease document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single ScheduledRelease document */
	update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ScheduledRelease document */
	upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ScheduledReleaseUpdateInput;
	/** Unique document search */
	where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
	/** Create document if it didn't exist */
	create: ScheduledReleaseCreateInput;
	/** Update document if it exists */
	update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ScheduledReleaseUpsertInput;
	/** Unique document search */
	where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
	isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
	operations_every?: InputMaybe<ScheduledOperationWhereInput>;
	operations_none?: InputMaybe<ScheduledOperationWhereInput>;
	operations_some?: InputMaybe<ScheduledOperationWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	status?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
	/** The Draft is the default stage for all your content. */
	Draft = 'DRAFT',
	/** The Published stage is where you can publish your content to. */
	Published = 'PUBLISHED',
}

export enum SystemDateTimeFieldVariation {
	Base = 'BASE',
	Combined = 'COMBINED',
	Localization = 'LOCALIZATION',
}

export type UnpublishLocaleInput = {
	/** Locales to unpublish */
	locale: Locale;
	/** Stages to unpublish selected locales from */
	stages: Array<Stage>;
};

/** User system model */
export type User = Entity &
	Node & {
		__typename?: 'User';
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** Get the document in other stages */
		documentInStages: Array<User>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** Flag to determine if user is active or not */
		isActive: Scalars['Boolean']['output'];
		/** User Kind. Can be either MEMBER, PAT or PUBLIC */
		kind: UserKind;
		/** The username */
		name: Scalars['String']['output'];
		/** Profile Picture url */
		picture?: Maybe<Scalars['String']['output']>;
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** System stage field */
		stage: Stage;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
	};

/** User system model */
export type UserDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type UserConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
	__typename?: 'UserConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<UserEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
	/** Connect multiple existing User documents */
	connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
	/** Connect one existing User document */
	connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
	__typename?: 'UserEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: User;
};

/** System User Kind */
export enum UserKind {
	Member = 'MEMBER',
	Pat = 'PAT',
	Public = 'PUBLIC',
	Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	documentInStages_every?: InputMaybe<UserWhereStageInput>;
	documentInStages_none?: InputMaybe<UserWhereStageInput>;
	documentInStages_some?: InputMaybe<UserWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<UserKind>;
	/** All values that are contained in given list. */
	kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	/** Any other value that exists and is not equal to the given value. */
	kind_not?: InputMaybe<UserKind>;
	/** All values that are not contained in given list. */
	kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	name?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']['input']>;
	picture?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	picture_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	picture_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	picture_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	picture_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	picture_starts_with?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	IsActiveAsc = 'isActive_ASC',
	IsActiveDesc = 'isActive_DESC',
	KindAsc = 'kind_ASC',
	KindDesc = 'kind_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	PictureAsc = 'picture_ASC',
	PictureDesc = 'picture_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
	/** Connect multiple existing User documents */
	connect?: InputMaybe<Array<UserConnectInput>>;
	/** Disconnect multiple User documents */
	disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing User documents */
	set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
	/** Connect existing User document */
	connect?: InputMaybe<UserWhereUniqueInput>;
	/** Disconnect currently connected User document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	documentInStages_every?: InputMaybe<UserWhereStageInput>;
	documentInStages_none?: InputMaybe<UserWhereStageInput>;
	documentInStages_some?: InputMaybe<UserWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<UserKind>;
	/** All values that are contained in given list. */
	kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	/** Any other value that exists and is not equal to the given value. */
	kind_not?: InputMaybe<UserKind>;
	/** All values that are not contained in given list. */
	kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	name?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']['input']>;
	picture?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	picture_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	picture_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	picture_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	picture_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	picture_starts_with?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<UserWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
	__typename?: 'Version';
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ID']['output'];
	revision: Scalars['Int']['output'];
	stage: Stage;
};

export type VersionWhereInput = {
	id: Scalars['ID']['input'];
	revision: Scalars['Int']['input'];
	stage: Stage;
};

export enum _FilterKind {
	And = 'AND',
	Not = 'NOT',
	Or = 'OR',
	Contains = 'contains',
	ContainsAll = 'contains_all',
	ContainsNone = 'contains_none',
	ContainsSome = 'contains_some',
	EndsWith = 'ends_with',
	Eq = 'eq',
	EqNot = 'eq_not',
	Gt = 'gt',
	Gte = 'gte',
	In = 'in',
	JsonPathExists = 'json_path_exists',
	JsonValueRecursive = 'json_value_recursive',
	Lt = 'lt',
	Lte = 'lte',
	NotContains = 'not_contains',
	NotEndsWith = 'not_ends_with',
	NotIn = 'not_in',
	NotStartsWith = 'not_starts_with',
	RelationalEvery = 'relational_every',
	RelationalNone = 'relational_none',
	RelationalSingle = 'relational_single',
	RelationalSome = 'relational_some',
	Search = 'search',
	StartsWith = 'starts_with',
	UnionEmpty = 'union_empty',
	UnionEvery = 'union_every',
	UnionNone = 'union_none',
	UnionSingle = 'union_single',
	UnionSome = 'union_some',
}

export enum _MutationInputFieldKind {
	Enum = 'enum',
	Relation = 'relation',
	RichText = 'richText',
	RichTextWithEmbeds = 'richTextWithEmbeds',
	Scalar = 'scalar',
	Union = 'union',
	Virtual = 'virtual',
}

export enum _MutationKind {
	Create = 'create',
	Delete = 'delete',
	DeleteMany = 'deleteMany',
	Publish = 'publish',
	PublishMany = 'publishMany',
	SchedulePublish = 'schedulePublish',
	ScheduleUnpublish = 'scheduleUnpublish',
	Unpublish = 'unpublish',
	UnpublishMany = 'unpublishMany',
	Update = 'update',
	UpdateMany = 'updateMany',
	Upsert = 'upsert',
}

export enum _OrderDirection {
	Asc = 'asc',
	Desc = 'desc',
}

export enum _RelationInputCardinality {
	Many = 'many',
	One = 'one',
}

export enum _RelationInputKind {
	Create = 'create',
	Update = 'update',
}

export enum _RelationKind {
	Regular = 'regular',
	Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
	Base = 'base',
	Combined = 'combined',
	Localization = 'localization',
}

export type EventQueryVariables = Exact<{
	locales: Array<Locale> | Locale;
	id: Scalars['ID']['input'];
}>;

export type EventQuery = {
	__typename?: 'Query';
	event?: {
		__typename?: 'Event';
		id: string;
		title: string;
		shortDescription: string;
		isDisplayed?: boolean | null;
		dateAndTime: any;
		locale: Locale;
		description: {
			__typename?: 'EventDescriptionRichText';
			html: string;
			text: string;
			markdown: string;
		};
		pictures: Array<{ __typename?: 'Asset'; url: string; fileName: string }>;
	} | null;
};

export type EventsQueryVariables = Exact<{
	locales: Array<Locale> | Locale;
}>;

export type EventsQuery = {
	__typename?: 'Query';
	events: Array<{
		__typename?: 'Event';
		id: string;
		title: string;
		shortDescription: string;
		isDisplayed?: boolean | null;
		dateAndTime: any;
		locale: Locale;
		description: { __typename?: 'EventDescriptionRichText'; html: string; text: string };
	}>;
};

export type GalleryQueryVariables = Exact<{ [key: string]: never }>;

export type GalleryQuery = {
	__typename?: 'Query';
	galleries: Array<{
		__typename?: 'Gallery';
		images: Array<{ __typename?: 'Asset'; fileName: string; url: string }>;
	}>;
};

export type PdfsQueryVariables = Exact<{
	fileName: Scalars['String']['input'];
}>;

export type PdfsQuery = {
	__typename?: 'Query';
	assets: Array<{ __typename?: 'Asset'; id: string; fileName: string; url: string }>;
};

export type RestaurantGalleryQueryVariables = Exact<{ [key: string]: never }>;

export type RestaurantGalleryQuery = {
	__typename?: 'Query';
	restaurantGalleries: Array<{
		__typename?: 'RestaurantGallery';
		images: Array<{ __typename?: 'Asset'; fileName: string; url: string }>;
	}>;
};

export const EventDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'Event' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'locales' } },
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'ListType',
							type: {
								kind: 'NonNullType',
								type: { kind: 'NamedType', name: { kind: 'Name', value: 'Locale' } },
							},
						},
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'event' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'locales' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'locales' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'id' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'description' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'html' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'text' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'markdown' } },
										],
									},
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'isDisplayed' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'dateAndTime' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'locale' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'pictures' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'fileName' } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<EventQuery, EventQueryVariables>;
export const EventsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'Events' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'locales' } },
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'ListType',
							type: {
								kind: 'NonNullType',
								type: { kind: 'NamedType', name: { kind: 'Name', value: 'Locale' } },
							},
						},
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'events' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'locales' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'locales' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'description' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'html' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'text' } },
										],
									},
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'isDisplayed' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'dateAndTime' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'locale' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<EventsQuery, EventsQueryVariables>;
export const GalleryDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'Gallery' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'galleries' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'images' },
									arguments: [
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'first' },
											value: { kind: 'IntValue', value: '100' },
										},
									],
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'fileName' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GalleryQuery, GalleryQueryVariables>;
export const PdfsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'Pdfs' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'fileName' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'assets' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'where' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'AND' },
											value: {
												kind: 'ListValue',
												values: [
													{
														kind: 'ObjectValue',
														fields: [
															{
																kind: 'ObjectField',
																name: { kind: 'Name', value: 'mimeType' },
																value: {
																	kind: 'StringValue',
																	value: 'application/pdf',
																	block: false,
																},
															},
														],
													},
													{
														kind: 'ObjectValue',
														fields: [
															{
																kind: 'ObjectField',
																name: { kind: 'Name', value: 'fileName' },
																value: {
																	kind: 'Variable',
																	name: { kind: 'Name', value: 'fileName' },
																},
															},
														],
													},
												],
											},
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'fileName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<PdfsQuery, PdfsQueryVariables>;
export const RestaurantGalleryDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'RestaurantGallery' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'restaurantGalleries' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'images' },
									arguments: [
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'first' },
											value: { kind: 'IntValue', value: '100' },
										},
									],
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'fileName' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<RestaurantGalleryQuery, RestaurantGalleryQueryVariables>;
