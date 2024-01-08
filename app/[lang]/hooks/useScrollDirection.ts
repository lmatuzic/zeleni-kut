import { useState, useEffect } from 'react';

const useScrollDirection = () => {
	const [scrollDirection, setScrollDirection] = useState<string>('down');

	useEffect(() => {
		const threshold = 40;
		let lastVerticalScrollPosition = window.scrollY;
		let ticking = false;

		const updateScrollDirection = () => {
			const verticalScrollAmount = window.scrollY;

			if (Math.abs(verticalScrollAmount - lastVerticalScrollPosition) < threshold) {
				ticking = false;
				return;
			}

			setScrollDirection(verticalScrollAmount > lastVerticalScrollPosition ? 'up' : 'down');
			lastVerticalScrollPosition = verticalScrollAmount > 0 ? verticalScrollAmount : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDirection);
				ticking = true;
			}
		};

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollDirection]);

	return { scrollDirection };
};

export default useScrollDirection;
