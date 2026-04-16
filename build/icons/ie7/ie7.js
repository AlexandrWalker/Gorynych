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
		'icon-chef': '&#xe900;',
		'icon-vega': '&#xe901;',
		'icon-hot': '&#xe902;',
		'icon-top': '&#xe903;',
		'icon-napitki': '&#xe904;',
		'icon-deserty': '&#xe905;',
		'icon-zakuski': '&#xe906;',
		'icon-rolls': '&#xe907;',
		'icon-salads': '&#xe908;',
		'icon-business-lunch': '&#xe909;',
		'icon-null': '&#xe90a;',
		'icon-reviews': '&#xe90b;',
		'icon-notification': '&#xe90c;',
		'icon-callback': '&#xe90d;',
		'icon-wa': '&#xe90e;',
		'icon-max': '&#xe90f;',
		'icon-tg': '&#xe910;',
		'icon-agreement': '&#xe911;',
		'icon-privacy': '&#xe912;',
		'icon-client-services': '&#xe913;',
		'icon-history': '&#xe914;',
		'icon-time': '&#xe915;',
		'icon-sale': '&#xe916;',
		'icon-kuvshin': '&#xe917;',
		'icon-cup': '&#xe918;',
		'icon-stars': '&#xe919;',
		'icon-search': '&#xe91a;',
		'icon-zavtrak': '&#xe91b;',
		'icon-bar': '&#xe91c;',
		'icon-grill': '&#xe91d;',
		'icon-goryachee': '&#xe91e;',
		'icon-menu-catering': '&#xe91f;',
		'icon-add': '&#xe920;',
		'icon-share-2': '&#xe921;',
		'icon-butylka': '&#xe922;',
		'icon-bokal': '&#xe923;',
		'icon-language': '&#xe924;',
		'icon-home': '&#xe925;',
		'icon-menu-slang': '&#xe926;',
		'icon-menu-reviews': '&#xe927;',
		'icon-trash': '&#xe928;',
		'icon-menu-rassadka': '&#xe929;',
		'icon-qr': '&#xe92a;',
		'icon-points': '&#xe92b;',
		'icon-menu-meatballs': '&#xe92c;',
		'icon-clock': '&#xe92d;',
		'icon-menu-personal-offers': '&#xe92e;',
		'icon-star': '&#xe92f;',
		'icon-menu-user': '&#xe930;',
		'icon-menu-like': '&#xe931;',
		'icon-menu-geo': '&#xe932;',
		'icon-menu-card': '&#xe933;',
		'icon-close': '&#xe934;',
		'icon-user': '&#xe935;',
		'icon-question-mark': '&#xe936;',
		'icon-menu-contacts': '&#xe937;',
		'icon-menu-loyalty-system': '&#xe938;',
		'icon-menu-list': '&#xe939;',
		'icon-menu-microphone': '&#xe93a;',
		'icon-meatballs': '&#xe93b;',
		'icon-login': '&#xe93c;',
		'icon-filter': '&#xe93d;',
		'icon-up': '&#xe93e;',
		'icon-carbohydrates': '&#xe93f;',
		'icon-protein': '&#xe940;',
		'icon-calories': '&#xe941;',
		'icon-fat': '&#xe942;',
		'icon-share': '&#xe943;',
		'icon-star-fill': '&#xe944;',
		'icon-like': '&#xe945;',
		'icon-chevron-right': '&#xe946;',
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
