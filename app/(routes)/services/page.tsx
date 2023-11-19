import { Button } from '@/app/(ui)/components/shadcn/Button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/app/(ui)/components/shadcn/Card';
import { ACCOMMODATION_PAGE, MENU_PAGE, RECREATION_PAGE } from '@/app/constants/routes';
import Link from 'next/link';

export default function Services() {
	return (
		<div className='pb-12'>
			<h1 className='mb-4 text-2xl text-zk-green'>Ponuda</h1>

			<p className='max-w-2xl mb-12'>
				Na svom razvojnom putu uspjela se očuvati dominacija prirode o čemu svjedoči i bogata
				gastronomska ponuda riječne ribe iz vlastitih bazena (šaran, som, pastrva), specijaliteti
				suhomesnatih domaćih proizvoda (šunka, kobasica, slanina), ali i mesnih specijaliteta
				hrvatske kuhinje potpomognuta raznim morskim specijalitetima.
			</p>

			<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
				<Card className='flex flex-col justify-between'>
					<CardHeader>
						<CardTitle className='mb-2 text-xl'>Smještaj</CardTitle>

						<CardDescription>
							14 moderno uređenih soba čeka na Vas. U ponudi imamo jednokrevetne i dvokrevetne sobe
							uz mogućnost dodatnih ležaja.
						</CardDescription>
					</CardHeader>

					<CardContent>
						<Link href={ACCOMMODATION_PAGE}>
							<Button className='w-full xs:w-fit'>Vidi više</Button>
						</Link>
					</CardContent>
				</Card>

				<Card className='flex flex-col justify-between'>
					<CardHeader>
						<CardTitle className='mb-2 text-xl'>Gastro</CardTitle>

						<CardDescription>
							Bogata ponuda hrvatskih specijaliteta, jela domaćeg kraja, riječnih riba, ali i
							morskih plodova i lignji. U posebnoj ponudi također nudimo vegeterijanska jela, te
							jela ispod peke ili sa ražnja, ali i pizze iz krušne peći.
						</CardDescription>
					</CardHeader>

					<CardContent>
						<Link href={MENU_PAGE}>
							<Button className='w-full xs:w-fit'>Vidi više</Button>
						</Link>
					</CardContent>
				</Card>

				<Card className='flex flex-col justify-between'>
					<CardHeader>
						<CardTitle className='mb-2 text-xl'>Rekreacija</CardTitle>

						<CardDescription>
							Uživajte u vožnji kanuom po rijeci ​Mrežnici, igrajući odbojku na pijesku, badminton,
							kupanje, a tu je i zabava za najmlađe na dječjem igralištu.
						</CardDescription>
					</CardHeader>

					<CardContent>
						<Link href={RECREATION_PAGE}>
							<Button className='w-full xs:w-fit'>Vidi više</Button>
						</Link>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
