const markdown = require('markdown-it');
var hljs = require('highlight.js/lib/highlight');
function markLoader(src) {
	const md = markdown({
		html: true,
		typographer: true,
		highlight: function(str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(lang, str)
						.value;
				} catch (__) {}
			}

			return ''; // 使用额外的默认转义
		}
	});
	const html = md.render(src);

	return (
		'<template>\n' +
		`<div class="markdown">${html}</div>\n` +
		'</template>\n'
	);
}
module.exports = markLoader;
