import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Preview,
	Section,
	Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import * as z from 'zod';
import zeleniKutDarkLogo from '../../../public/zeleni-kut-logo-dark.svg';

type EmailTemplateProps<T extends z.ZodObject<any, any, any>> = {
	formValues: z.TypeOf<T>;
	emailSubject: string;
};

export const EmailTemplate = <T extends z.ZodObject<any, any, any>>({
	formValues,
	emailSubject,
}: EmailTemplateProps<T>) => (
	<Html>
		<Head>
			<title>{emailSubject}</title>
		</Head>

		<Preview>Nova rezervacija sa web stranice Zeleni Kut</Preview>

		<Tailwind>
			<Body className='bg-gray-100'>
				<Container>
					<Img src={zeleniKutDarkLogo} width='42' height='42' alt='Zeleni Kut logo' />
					<Heading className='leading-tight'>{emailSubject}</Heading>

					<Section className='bg-white border border-solid '>
						<Text>
							Korisnik: {formValues.firstName} {formValues.lastName}
						</Text>

						<Text>Email: {formValues.email}</Text>
						<Text>Broj ljudi: {formValues.numberOfPeople}</Text>
						<Text>Telefon / mobitel: {formValues.phone}</Text>
						<Text>Datum: {formValues.date}</Text>
						{formValues.message ? <Text>Poruka: {formValues.message}</Text> : null}
					</Section>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);
