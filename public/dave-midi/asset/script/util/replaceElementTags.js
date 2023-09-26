/*
Add {{tags}} inside a HTML element and this will replace them with items from { key: value, ... } objects.
*/
export default (_element, _replacements) => {

	// Add a temporary unique marker to the element.
	// Adjusting outerHTML fucks the reference, so we will want to find the element again afterwards.

	const attr = 'data-replace-element-tags-temp';
	const id = Date.now();
	_element.setAttribute(attr, id);

	// Replace tags.

	let html = _element.outerHTML;

	for (const key in _replacements)
		html = html.replace(new RegExp(`{{${key}}}`, 'g'), _replacements[key]);

	_element.outerHTML = html;

	// Find the element again and return it.

	const element = document.querySelector(`[${attr}="${id}"]`);
	element.removeAttribute(attr);

	return element;
};