import {
	Body,
	Column,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Row,
	Section,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import { format } from 'date-fns';
import * as z from 'zod';

type EmailTemplateProps<T extends z.ZodObject<any, any, any>> = {
	formValues: z.TypeOf<T>;
	emailSubject: string;
};

export const EmailTemplate = <T extends z.ZodObject<any, any, any>>({
	formValues,
	emailSubject,
}: EmailTemplateProps<T>) => (
	<Tailwind>
		<Html>
			<Head>
				<title>{emailSubject}</title>
			</Head>

			<Preview>Nova rezervacija sa web stranice Zeleni Kut</Preview>

			<Body className='bg-gray-100 p-4 pt-0 rounded-xl'>
				<Container>
					<Heading className='leading-tight'>{emailSubject}</Heading>

					<Section className='bg-white border border-solid border-neutral-300 rounded-xl p-4'>
						<Row className='mb-4'>
							<Column>
								<span className='font-semibold m-0'>Korisnik</span>
								<div className='m-0'>{`${formValues.firstName} ${formValues.lastName}`}</div>
							</Column>
						</Row>

						<Row className='mb-4'>
							<Column>
								<span className='font-semibold m-0'>Email</span>
								<div className='m-0'>{formValues.email}</div>
							</Column>
						</Row>

						<Row className='mb-4'>
							<Column>
								<span className='font-semibold m-0'>Broj ljudi</span>
								<div className='m-0'>{formValues.numberOfPeople}</div>
							</Column>
						</Row>

						<Row className='mb-4'>
							<Column>
								<span className='font-semibold m-0'>Telefon / mobitel</span>
								<div className='m-0'>{formValues.phone}</div>
							</Column>
						</Row>

						{formValues.typeOfRoom ? (
							<Row className='mb-4'>
								<Column>
									<span className='font-semibold m-0'>Tip sobe</span>
									<div className='m-0'>{formValues.typeOfRoom}</div>
								</Column>
							</Row>
						) : null}

						{formValues.numberOfNights ? (
							<Row className='mb-4'>
								<Column>
									<span className='font-semibold m-0'>Broj noćenja</span>
									<div className='m-0'>{formValues.numberOfNights}</div>
								</Column>
							</Row>
						) : null}

						{formValues.reservationDate ? (
							<Row className='mb-4'>
								<Column>
									<span className='font-semibold m-0'>Datum</span>
									<div className='m-0'>{format(formValues.reservationDate, 'dd.MM.yyy')}</div>
								</Column>
							</Row>
						) : null}

						{formValues.time ? (
							<Row className='mb-4'>
								<Column>
									<span className='font-semibold m-0'>Vrijeme</span>
									<div className='m-0'>{formValues.time}</div>
								</Column>
							</Row>
						) : null}

						{formValues.checkInDate ? (
							<Row className='mb-4'>
								<Column>
									<span className='font-semibold m-0'>Check in</span>
									<div className='m-0'>{format(formValues.checkInDate, 'dd.MM.yyy')}</div>
								</Column>
							</Row>
						) : null}

						{formValues.checkOutDate ? (
							<Row className='mb-4'>
								<Column>
									<span className='font-semibold m-0'>Check out</span>
									<div className='m-0'>{format(formValues.checkOutDate, 'dd.MM.yyy')}</div>
								</Column>
							</Row>
						) : null}

						{formValues.message ? (
							<Row>
								<Column>
									<span className='font-semibold m-0'>Poruka</span>
									<p className='m-0'>{formValues.message}</p>
								</Column>
							</Row>
						) : null}
					</Section>
				</Container>
			</Body>
		</Html>
	</Tailwind>
);
