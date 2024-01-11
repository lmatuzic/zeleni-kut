import * as z from 'zod';

type EmailTemplateProps<T extends z.ZodObject<any, any, any>> = {
	formValues: z.TypeOf<T>;
	emailSubject: string;
};

export const EmailTemplate = <T extends z.ZodObject<any, any, any>>({
	formValues,
	emailSubject,
}: EmailTemplateProps<T>) => (
	<div>
		<h1>{emailSubject}</h1>
		{/* Render formValues dynamically based on the provided Zod schema */}
		{Object.entries(formValues).map(([key, value]) => (
			<div key={key}>
				<strong>{key}:</strong> {value}
			</div>
		))}
	</div>
);
