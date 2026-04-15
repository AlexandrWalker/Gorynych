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
		'icon-wa': '&#xe900;',
		'icon-max': '&#xe901;',
		'icon-tg': '&#xe902;',
		'icon-agreement': '&#xe903;',
		'icon-privacy': '&#xe904;',
		'icon-client-services': '&#xe905;',
		'icon-history': '&#xe906;',
		'icon-time': '&#xe907;',
		'icon-sale': '&#xe908;',
		'icon-kuvshin': '&#xe909;',
		'icon-cup': '&#xe90a;',
		'icon-stars': '&#xe90b;',
		'icon-search': '&#xe90c;',
		'icon-zavtrak': '&#xe90d;',
		'icon-bar': '&#xe90e;',
		'icon-grill': '&#xe90f;',
		'icon-goryachee': '&#xe910;',
		'icon-menu-catering': '&#xe911;',
		'icon-add': '&#xe912;',
		'icon-share-2': '&#xe913;',
		'icon-ananas': '&#xe914;',
		'icon-bowl': '&#xe915;',
		'icon-grapefruit': '&#xe916;',
		'icon-butylka': '&#xe917;',
		'icon-bokal': '&#xe918;',
		'icon-language': '&#xe919;',
		'icon-home': '&#xe91b;',
		'icon-menu-slang': '&#xe91c;',
		'icon-vega': '&#xe91d;',
		'icon-chef': '&#xe91e;',
		'icon-menu-reviews': '&#xe91f;',
		'icon-trash': '&#xe920;',
		'icon-menu-rassadka': '&#xe921;',
		'icon-qr': '&#xe922;',
		'icon-points': '&#xe923;',
		'icon-menu-meatballs': '&#xe924;',
		'icon-clock': '&#xe925;',
		'icon-menu-personal-offers': '&#xe926;',
		'icon-star': '&#xe927;',
		'icon-menu-user': '&#xe928;',
		'icon-menu-like': '&#xe929;',
		'icon-menu-geo': '&#xe92a;',
		'icon-menu-card': '&#xe92b;',
		'icon-close': '&#xe92c;',
		'icon-user': '&#xe92d;',
		'icon-question-mark': '&#xe92e;',
		'icon-menu-contacts': '&#xe92f;',
		'icon-menu-loyalty-system': '&#xe930;',
		'icon-menu-list': '&#xe931;',
		'icon-menu-microphone': '&#xe932;',
		'icon-meatballs': '&#xe933;',
		'icon-login': '&#xe934;',
		'icon-filter': '&#xe935;',
		'icon-up': '&#xe936;',
		'icon-carbohydrates': '&#xe937;',
		'icon-protein': '&#xe938;',
		'icon-calories': '&#xe939;',
		'icon-fat': '&#xe93a;',
		'icon-share': '&#xe93b;',
		'icon-hot': '&#xe93c;',
		'icon-top': '&#xe93d;',
		'icon-star-fill': '&#xe93e;',
		'icon-like': '&#xe93f;',
		'icon-chevron-right': '&#xe940;',
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
