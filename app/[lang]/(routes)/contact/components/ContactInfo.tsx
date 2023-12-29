type ContactInfoProps = {
	translation: {
		address: string;
		owner: string;
		phone: string;
		mobilePhone: string;
		email: string;
	};
};

export default function ContactInfo({ translation }: ContactInfoProps) {
	return (
		<div>
			<div className='mb-1 text-zk-green'>{translation.address}</div>
			<div className='mb-8'>Zvečaj 109, 47250 Duga Resa</div>

			<div className='mb-1 text-zk-green'>{translation.owner}</div>
			<div className='mb-8'>Mladen Puškarić</div>

			<div className='mb-1 text-zk-green'>{translation.phone}</div>
			<div className='mb-8'>+385 (0) 47 866 100 </div>

			<div className='mb-1 text-zk-green'>{translation.mobilePhone} (1)</div>
			<div className='mb-8'>+385 (0) 98 911 4115</div>

			<div className='mb-1 text-zk-green'>{translation.mobilePhone} (2)</div>
			<div className='mb-8'>+385 (0) 98 976 56 00</div>

			<div className='mb-1 text-zk-green'>{translation.email}</div>
			<div className='mb-8'>info@zeleni-kut.com</div>
		</div>
	);
}
