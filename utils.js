function createElement(tag, attrs) {
	const keys = Object.keys(attrs || {});
	const el = document.createElement(tag);
	for (let i = 0; i < keys.length; ++i) {
		el.setAttribute(keys[i], attrs[[keys[i]]]);
	}
	return el;
}
