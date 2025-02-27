type ContactInfoProps = {
	translation: {
		address: string;
		owner: string;
		phone: string;
		mobilePhone: string;
		email: string;
	};
};

export default function ContactInfo({ translation }: Readonly<ContactInfoProps>) {
	return (
		<div>
			<div className='mb-1 text-zk-green font-medium'>{translation.address}</div>
			<div className='mb-8'>Zvečaj 109, 47250 Duga Resa</div>

			<div className='mb-1 text-zk-green font-medium'>{translation.owner}</div>
			<div className='mb-8'>Mladen Puškarić</div>

			<div className='mb-1 text-zk-green font-medium'>{translation.phone}</div>
			<div className='mb-8'>+385 (0) 47 866 100 </div>

			<div className='mb-1 text-zk-green font-medium'>{translation.mobilePhone} (1)</div>
			<div className='mb-8'>+385 99 5446 599</div>

			<div className='mb-1 text-zk-green font-medium'>{translation.mobilePhone} (2)</div>
			<div className='mb-8'>+385 (0) 98 976 56 00</div>

			<div className='mb-1 text-zk-green font-medium'>{translation.email}</div>
			<a href='mailto:info@zeleni-kut.com'>info@zeleni-kut.com</a>
		</div>
	);
}
