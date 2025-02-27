'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type NavLinkProps = {
	route: string;
	children?: ReactNode;
	className?: string;
	onClick?: () => void;
};

export default function NavLink({ route, children, className = '', onClick }: NavLinkProps) {
	const currentPath = usePathname();

	return (
		<Link
			href={route}
			onClick={onClick}
			className={`${
				route === currentPath ? 'text-zk-green' : 'hover:text-zk-green transition-colors'
			} font-medium ${className}`}
		>
			{children}
		</Link>
	);
}
