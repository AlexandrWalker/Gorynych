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
		'icon-vk': '&#xe900;',
		'icon-call': '&#xe901;',
		'icon-chef': '&#xe902;',
		'icon-vega': '&#xe903;',
		'icon-hot': '&#xe904;',
		'icon-top': '&#xe905;',
		'icon-napitki': '&#xe906;',
		'icon-deserty': '&#xe907;',
		'icon-zakuski': '&#xe908;',
		'icon-rolls': '&#xe909;',
		'icon-salads': '&#xe90a;',
		'icon-business-lunch': '&#xe90b;',
		'icon-null': '&#xe90c;',
		'icon-reviews': '&#xe90d;',
		'icon-notification': '&#xe90e;',
		'icon-callback': '&#xe90f;',
		'icon-wa': '&#xe910;',
		'icon-max': '&#xe911;',
		'icon-tg': '&#xe912;',
		'icon-agreement': '&#xe913;',
		'icon-privacy': '&#xe914;',
		'icon-client-services': '&#xe915;',
		'icon-history': '&#xe916;',
		'icon-time': '&#xe917;',
		'icon-sale': '&#xe918;',
		'icon-kuvshin': '&#xe919;',
		'icon-cup': '&#xe91a;',
		'icon-stars': '&#xe91b;',
		'icon-search': '&#xe91c;',
		'icon-zavtrak': '&#xe91d;',
		'icon-bar': '&#xe91e;',
		'icon-grill': '&#xe91f;',
		'icon-goryachee': '&#xe920;',
		'icon-menu-catering': '&#xe921;',
		'icon-add': '&#xe922;',
		'icon-share-2': '&#xe923;',
		'icon-butylka': '&#xe924;',
		'icon-bokal': '&#xe925;',
		'icon-language': '&#xe926;',
		'icon-home': '&#xe927;',
		'icon-menu-slang': '&#xe928;',
		'icon-menu-reviews': '&#xe929;',
		'icon-trash': '&#xe92a;',
		'icon-menu-rassadka': '&#xe92b;',
		'icon-qr': '&#xe92c;',
		'icon-points': '&#xe92d;',
		'icon-menu-meatballs': '&#xe92e;',
		'icon-clock': '&#xe92f;',
		'icon-menu-personal-offers': '&#xe930;',
		'icon-star': '&#xe931;',
		'icon-menu-user': '&#xe932;',
		'icon-menu-like': '&#xe933;',
		'icon-menu-geo': '&#xe934;',
		'icon-menu-card': '&#xe935;',
		'icon-close': '&#xe936;',
		'icon-user': '&#xe937;',
		'icon-question-mark': '&#xe938;',
		'icon-menu-contacts': '&#xe939;',
		'icon-menu-loyalty-system': '&#xe93a;',
		'icon-menu-list': '&#xe93b;',
		'icon-menu-microphone': '&#xe93c;',
		'icon-meatballs': '&#xe93d;',
		'icon-login': '&#xe93e;',
		'icon-filter': '&#xe93f;',
		'icon-up': '&#xe940;',
		'icon-carbohydrates': '&#xe941;',
		'icon-protein': '&#xe942;',
		'icon-calories': '&#xe943;',
		'icon-fat': '&#xe944;',
		'icon-share': '&#xe945;',
		'icon-star-fill': '&#xe946;',
		'icon-like': '&#xe947;',
		'icon-chevron-right': '&#xe948;',
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
