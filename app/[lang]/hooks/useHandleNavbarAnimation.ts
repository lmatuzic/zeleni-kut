import useScrollDirection from './useScrollDirection';

const useHandleNavbarAnimation = () => {
	const { scrollDirection } = useScrollDirection();

	if (scrollDirection === 'up') {
		return 'translateY(-69px)';
	}

	return 'translateY(0)';
};

export default useHandleNavbarAnimation;
