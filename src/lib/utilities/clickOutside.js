// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/**
 * Hide element when clicking outside
 *  */

export const clickOutside = (node) => {
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', node));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};
