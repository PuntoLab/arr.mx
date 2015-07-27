/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'arr\'">' + entity + '</span>' + html;
	}
	var icons = {
		'fontearth': '&#xe600;',
		'fontusers': '&#xe972;',
		'fontclipboard': '&#xe9b8;',
		'fontmenu-movil': '&#xe9be;',
		'fontlink': '&#xe9cb;',
		'fonteye-plus': '&#xe9cf;',
		'fontworld': '&#xe601;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/font[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
