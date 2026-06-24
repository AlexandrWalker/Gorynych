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
		'icon-bron': '&#xe900;',
		'icon-theme': '&#xe901;',
		'icon-vk-min': '&#xe902;',
		'icon-callback': '&#xe903;',
		'icon-wa': '&#xe904;',
		'icon-callback-min': '&#xe905;',
		'icon-wa-min': '&#xe906;',
		'icon-tg-min': '&#xe907;',
		'icon-max-min': '&#xe908;',
		'icon-orientation': '&#xe909;',
		'icon-foodbook': '&#xe90a;',
		'icon-tg': '&#xe90b;',
		'icon-vk': '&#xe90c;',
		'icon-max': '&#xe90d;',
		'icon-menu-telephone': '&#xe90e;',
		'icon-menu-call': '&#xe90f;',
		'icon-menu-platform': '&#xe910;',
		'icon-call': '&#xe911;',
		'icon-chef': '&#xe912;',
		'icon-vega': '&#xe913;',
		'icon-hot': '&#xe914;',
		'icon-top': '&#xe915;',
		'icon-napitki': '&#xe916;',
		'icon-deserty': '&#xe917;',
		'icon-zakuski': '&#xe918;',
		'icon-rolls': '&#xe919;',
		'icon-salads': '&#xe91a;',
		'icon-business-lunch': '&#xe91b;',
		'icon-null': '&#xe91c;',
		'icon-reviews': '&#xe91d;',
		'icon-notification': '&#xe91e;',
		'icon-agreement': '&#xe91f;',
		'icon-privacy': '&#xe920;',
		'icon-client-services': '&#xe921;',
		'icon-history': '&#xe922;',
		'icon-time': '&#xe923;',
		'icon-sale': '&#xe924;',
		'icon-kuvshin': '&#xe925;',
		'icon-cup': '&#xe926;',
		'icon-stars': '&#xe927;',
		'icon-search': '&#xe928;',
		'icon-zavtrak': '&#xe929;',
		'icon-bar': '&#xe92a;',
		'icon-grill': '&#xe92b;',
		'icon-goryachee': '&#xe92c;',
		'icon-menu-catering': '&#xe92d;',
		'icon-add': '&#xe92e;',
		'icon-share-2': '&#xe92f;',
		'icon-butylka': '&#xe930;',
		'icon-bokal': '&#xe931;',
		'icon-language': '&#xe932;',
		'icon-home': '&#xe933;',
		'icon-menu-slang': '&#xe934;',
		'icon-menu-reviews': '&#xe935;',
		'icon-trash': '&#xe936;',
		'icon-menu-rassadka': '&#xe937;',
		'icon-qr': '&#xe938;',
		'icon-points': '&#xe939;',
		'icon-menu-meatballs': '&#xe93a;',
		'icon-clock': '&#xe93b;',
		'icon-menu-personal-offers': '&#xe93c;',
		'icon-star': '&#xe93d;',
		'icon-menu-user': '&#xe93e;',
		'icon-menu-like': '&#xe93f;',
		'icon-menu-geo': '&#xe940;',
		'icon-menu-card': '&#xe941;',
		'icon-close': '&#xe942;',
		'icon-user': '&#xe943;',
		'icon-question-mark': '&#xe944;',
		'icon-menu-contacts': '&#xe945;',
		'icon-menu-loyalty-system': '&#xe946;',
		'icon-menu-list': '&#xe947;',
		'icon-menu-microphone': '&#xe948;',
		'icon-meatballs': '&#xe949;',
		'icon-login': '&#xe94a;',
		'icon-filter': '&#xe94b;',
		'icon-up': '&#xe94c;',
		'icon-carbohydrates': '&#xe94d;',
		'icon-protein': '&#xe94e;',
		'icon-calories': '&#xe94f;',
		'icon-fat': '&#xe950;',
		'icon-share': '&#xe951;',
		'icon-star-fill': '&#xe952;',
		'icon-like': '&#xe953;',
		'icon-chevron-right': '&#xe954;',
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
