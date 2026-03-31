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
		el.innerHTML = '<span style="font-family: \'GorynychIconFont\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-time': '&#xe900;',
		'icon-sale': '&#xe901;',
		'icon-kuvshin': '&#xe902;',
		'icon-cup': '&#xe903;',
		'icon-stars': '&#xe904;',
		'icon-search': '&#xe905;',
		'icon-zavtrak': '&#xe906;',
		'icon-bar': '&#xe907;',
		'icon-grill': '&#xe908;',
		'icon-goryachee': '&#xe909;',
		'icon-menu-catering': '&#xe90a;',
		'icon-add': '&#xe90b;',
		'icon-share-2': '&#xe90c;',
		'icon-ananas': '&#xe90d;',
		'icon-bowl': '&#xe90e;',
		'icon-grapefruit': '&#xe90f;',
		'icon-butylka': '&#xe910;',
		'icon-bokal': '&#xe911;',
		'icon-language': '&#xe912;',
		'icon-home': '&#xe914;',
		'icon-menu-slang': '&#xe915;',
		'icon-vega': '&#xe916;',
		'icon-chef': '&#xe917;',
		'icon-menu-reviews': '&#xe918;',
		'icon-trash': '&#xe919;',
		'icon-menu-rassadka': '&#xe91a;',
		'icon-qr': '&#xe91b;',
		'icon-points': '&#xe91c;',
		'icon-menu-meatballs': '&#xe91d;',
		'icon-clock': '&#xe91e;',
		'icon-menu-personal-offers': '&#xe91f;',
		'icon-star': '&#xe920;',
		'icon-menu-user': '&#xe921;',
		'icon-menu-like': '&#xe922;',
		'icon-menu-geo': '&#xe923;',
		'icon-menu-card': '&#xe924;',
		'icon-close': '&#xe925;',
		'icon-user': '&#xe926;',
		'icon-question-mark': '&#xe927;',
		'icon-menu-contacts': '&#xe928;',
		'icon-menu-loyalty-system': '&#xe929;',
		'icon-menu-list': '&#xe92a;',
		'icon-menu-microphone': '&#xe92b;',
		'icon-meatballs': '&#xe92c;',
		'icon-login': '&#xe92d;',
		'icon-filter': '&#xe92e;',
		'icon-up': '&#xe92f;',
		'icon-carbohydrates': '&#xe930;',
		'icon-protein': '&#xe931;',
		'icon-calories': '&#xe932;',
		'icon-fat': '&#xe933;',
		'icon-share': '&#xe934;',
		'icon-hot': '&#xe935;',
		'icon-top': '&#xe936;',
		'icon-star-fill': '&#xe937;',
		'icon-like': '&#xe938;',
		'icon-chevron-right': '&#xe939;',
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
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
