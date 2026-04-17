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
		'icon-call': '&#xe900;',
		'icon-chef': '&#xe901;',
		'icon-vega': '&#xe902;',
		'icon-hot': '&#xe903;',
		'icon-top': '&#xe904;',
		'icon-napitki': '&#xe905;',
		'icon-deserty': '&#xe906;',
		'icon-zakuski': '&#xe907;',
		'icon-rolls': '&#xe908;',
		'icon-salads': '&#xe909;',
		'icon-business-lunch': '&#xe90a;',
		'icon-null': '&#xe90b;',
		'icon-reviews': '&#xe90c;',
		'icon-notification': '&#xe90d;',
		'icon-callback': '&#xe90e;',
		'icon-wa': '&#xe90f;',
		'icon-max': '&#xe910;',
		'icon-tg': '&#xe911;',
		'icon-agreement': '&#xe912;',
		'icon-privacy': '&#xe913;',
		'icon-client-services': '&#xe914;',
		'icon-history': '&#xe915;',
		'icon-time': '&#xe916;',
		'icon-sale': '&#xe917;',
		'icon-kuvshin': '&#xe918;',
		'icon-cup': '&#xe919;',
		'icon-stars': '&#xe91a;',
		'icon-search': '&#xe91b;',
		'icon-zavtrak': '&#xe91c;',
		'icon-bar': '&#xe91d;',
		'icon-grill': '&#xe91e;',
		'icon-goryachee': '&#xe91f;',
		'icon-menu-catering': '&#xe920;',
		'icon-add': '&#xe921;',
		'icon-share-2': '&#xe922;',
		'icon-butylka': '&#xe923;',
		'icon-bokal': '&#xe924;',
		'icon-language': '&#xe925;',
		'icon-home': '&#xe926;',
		'icon-menu-slang': '&#xe927;',
		'icon-menu-reviews': '&#xe928;',
		'icon-trash': '&#xe929;',
		'icon-menu-rassadka': '&#xe92a;',
		'icon-qr': '&#xe92b;',
		'icon-points': '&#xe92c;',
		'icon-menu-meatballs': '&#xe92d;',
		'icon-clock': '&#xe92e;',
		'icon-menu-personal-offers': '&#xe92f;',
		'icon-star': '&#xe930;',
		'icon-menu-user': '&#xe931;',
		'icon-menu-like': '&#xe932;',
		'icon-menu-geo': '&#xe933;',
		'icon-menu-card': '&#xe934;',
		'icon-close': '&#xe935;',
		'icon-user': '&#xe936;',
		'icon-question-mark': '&#xe937;',
		'icon-menu-contacts': '&#xe938;',
		'icon-menu-loyalty-system': '&#xe939;',
		'icon-menu-list': '&#xe93a;',
		'icon-menu-microphone': '&#xe93b;',
		'icon-meatballs': '&#xe93c;',
		'icon-login': '&#xe93d;',
		'icon-filter': '&#xe93e;',
		'icon-up': '&#xe93f;',
		'icon-carbohydrates': '&#xe940;',
		'icon-protein': '&#xe941;',
		'icon-calories': '&#xe942;',
		'icon-fat': '&#xe943;',
		'icon-share': '&#xe944;',
		'icon-star-fill': '&#xe945;',
		'icon-like': '&#xe946;',
		'icon-chevron-right': '&#xe947;',
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
