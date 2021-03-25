'use strict';
/**
 * "forme" macro
 */

(function(utils) {

const macros = utils.macros;

/*

L'argomento useful, con default false, se a true indica
che saranno tradotte solo le forme rilevanti

*/
macros.forme = function(str, useful) {
	useful = useful || false;
	if (!useful) {

		// Traduzione dei nomi che identificano le forme

		str = str.replace(/(\w+) (Forme?|Mode)/gi, 'Forma $1')
			.replace(/(\w+) Cloak/gi, 'Manto $1')
			.replace(/(\w+) Sea/gi, 'Mare $1')
			.replace(/(\w+) Pattern/gi, 'Motivo $1')
			.replace(/(\w+) Flower/gi, 'Fiore $1')
			.replace(/(\w+) Trim/gi, 'Taglio $1')
			.replace(/Size/gi, '')
			.replace(/Standard Mode/gi, 'Forma Normalit&agrave')
			.replace(/Zen Mode/gi, 'Forma Zen')
			.replace(/(\w+) Mode/gi, 'Modo $1')

		// Traduzione dei nomi estesi delle forme

			.replace(/(Normal|Neutral)/gi, 'Normale')
			.replace(/Plant/gi, 'Pianta')
			.replace(/Overcast/gi, 'Nuvola')
			.replace(/West/gi, 'Ovest')
			.replace(/Altered/gi, 'Alterata')
			.replace(/Land/gi, 'Terra')
			.replace(/Red-Striped/gi, 'Linearossa')
			.replace(/Spring/gi, 'Primavera')
			.replace(/Incarnate/gi, 'Incarnazione')
			.replace(/Ordinary/gi, 'Ordinaria')
			.replace(/Aria Forme/gi, 'Forma Canto')
			.replace(/Red/gi, 'Rosso')
			.replace(/Natural Form/gi, 'Nessun Taglio')
			.replace(/Flower/gi, 'Fiore')
			.replace(/Shield/gi, 'Scudo')
			.replace(/Average/gi, 'Normale')
			.replace(/\bexclamation\b/gi, 'esclamativo')
			.replace(/\bquestion\b/gi, 'interrogativo')
			.replace(/\beast\b/gi, 'est')
			.replace(/\bsummer\b/gi, 'estate')
			.replace(/\bautumn\b/gi, 'autunno')
			.replace(/\bwinter\b/gi, 'inverno')
			.replace(/\bactive\b/gi, 'attivo')
			.replace(/\barchipelago\b/gi, 'arcipelago')
			.replace(/\bcontinental\b/gi, 'continentale')
			.replace(/\belegant\b/gi, 'eleganza')
			.replace(/\bgarden\b/gi, 'prato')
			.replace(/\bicy\s?snow\b/gi, 'nevi perenni')
			.replace(/\bhigh\s?plains\b/gi, 'deserto')
			.replace(/\bjungle\b/gi, 'giungla')
			.replace(/\bmarine\b/gi, 'marino')
			.replace(/\bmeadow\b/gi, 'giardinfiore')
			.replace(/\bmodern\b/gi, 'trendy')
			.replace(/\bmonsoon\b/gi, 'pluviale')
			.replace(/\bocean\b/gi, 'oceanico')
			.replace(/\bpolar\b/gi, 'nordico')
			.replace(/\briver\b/gi, 'fluviale')
			.replace(/\bsandstorm\b/gi, 'sabbia')
			.replace(/\bsavannah\b/gi, 'savana')
			.replace(/\bsun\b/gi, 'solare')
			.replace(/\btundra\b/gi, 'manto di neve')
			.replace(/\bfancy\b/gi, 'sbarazzino')
			.replace(/\bpokeball\b/gi, 'pok&eacute ball')
			.replace(/\borange\b/gi, 'arancione')
			.replace(/\byellow\b/gi, 'giallo')
			.replace(/\bblue\b/gi, 'blu')
			.replace(/\bheart\b/gi, 'cuore')
			.replace(/\bdiamond\b/gi, 'diamante')
			.replace(/\bstar\b/gi, 'stella')
			.replace(/\b(la)?\s?reine\b/gi, 'regina')
			.replace(/\bgentildonna\b/gi, 'matron')
			.replace(/\bdebutante\b/gi, 'signorina')
			.replace(/\bdandy\b/gi, 'gentiluomo')

		// Traduzione delle sigle. Solo se accompagnate da ndex,
		// poiché forme diverse condividono le stesse sigle

			.replace(/666Arc/g, '666A')
			.replace(/666Con/g, '666C')
			.replace(/666Ele/g, '666E')
			.replace(/666Gar/g, '666Pr')
			.replace(/666Icy/g, '666Ne')
			.replace(/666Hig/g, '666D')
			.replace(/666Jun/g, '666Gu')
			.replace(/666Mar/g, '666Mr')
			.replace(/666Mod/g, '666T')
			.replace(/666Mon/g, '666Pl')
			.replace(/666Oce/g, '666O')
			.replace(/666Pol/g, '666No')
			.replace(/666Riv/g, '666F')
			.replace(/666San/g, '666Sb')
			.replace(/666Sav/g, '666Sv')
			.replace(/666Sun/g, '666So')
			.replace(/666Tun/g, '666Mn')
			.replace(/666Fan/g, '666Sr')
			.replace(/666Pok/g, '666Po')
			.replace(/201EX/g, '201PE')
			.replace(/201QU/g, '201PD')
			.replace(/58(5|6)S/g, '58$1E')
			.replace(/58(5|6)W/g, '58$1I')
			.replace(/6(69|70|71)O/g, '6$1A')
			.replace(/6(69|70|71)B/g, '6$1Bl')
			.replace(/6(69|70|71)Y/g, '6$1G')
			.replace(/6(69|70|71)W/g, '6$1Bi')
			.replace(/676De/g, '676Si')
			.replace(/676Di/g, '676D')
			.replace(/676He/g, '676C')
			.replace(/676Ka/g, '676K')
			.replace(/676La/g, '676R')
			.replace(/676Ma/g, '676Gd')
			.replace(/676Ph/g, '676F')
			.replace(/676Da/g, '676Gu');
	}

	// Traduzione dei nomi estesi delle forme

	return str.replace(/\bsunny\b/gi, 'sole')
		.replace(/\brain\b/gi, 'pioggia')
		.replace(/\bsnowy\b/gi, 'neve')
		.replace(/\battack\b/gi, 'attacco')
		.replace(/\bdefense\b/gi, 'difesa')
		.replace(/\bspeed\b/gi, 'velocit&agrave')
		.replace(/\bsandy\b/gi, 'sabbia')
		.replace(/\btrash\b/gi, 'scarti')
		.replace(/\bheat\b/gi, 'calore')
		.replace(/\bwash\b/gi, 'lavaggio')
		.replace(/\bfrost\b/gi, 'gelo')
		.replace(/\bfan\b/gi, 'vortice')
		.replace(/\bmow\b/gi, 'taglio')
		.replace(/\borigin\b/gi, 'originale')
		.replace(/\bsky\b/gi, 'cielo')
		.replace(/\bblue-?striped\b/gi, 'lineablu')
		.replace(/\bdaruma\b/gi, 'zen')
		.replace(/\btherian\b/gi, 'totem')
		.replace(/\bblack\b/gi, 'nero')
		.replace(/\bwhite\b/gi, 'bianco')
		.replace(/\bresolute\b/gi, 'risoluta')
		.replace(/\bstep\b/gi, 'danza')
		.replace(/\bmale\b/gi, 'maschio')
		.replace(/\bfemale\b/gi, 'femmina')
		.replace(/\bblade\b/gi, 'spada')
		.replace(/\bsmall\b/gi, 'mini')
		.replace(/\blarge\b/gi, 'grande')
		.replace(/\bsuper\b/gi, 'maxi')
		.replace(/\bconfined\b/gi, 'vincolato')
		.replace(/\bunbound\b/gi, 'libero')

	// Traduzione delle sigle. Solo se accompagnate da ndex,
	// poiché forme diverse condividono le stesse sigle

		.replace(/479L/g, '479T')
		.replace(/479W/g, '479L')
		.replace(/479O/g, '479C')
		.replace(/479F/g, '479V')
		.replace(/479R/g, '479G')
		.replace(/646B/g, '646N')
		.replace(/646W/g, '646B')
		.replace(/41(2|3)G/g, '41$1Sa')
		.replace(/41(2|3)S/g, '41$1Sc')
		.replace(/648P/g, '648D')
		.replace(/386S/g, '386V')
		.replace(/351R/g, '351P')
		.replace(/351H/g, '351N')
		.replace(/710_0/g, '710L')
		.replace(/710_1/g, '710S')
		.replace(/710_2/g, '710XL')
		.replace(/711_0/g, '711L')
		.replace(/711_1/g, '711S')
		.replace(/711_2/g, '711XL')
		.replace(/681B/g, '681S')
		.replace(/492S/g, '492C')
		.replace(/720U/g, '720L')
		.replace(/745Mn/g, '745N')
		.replace(/745D/g, '745C')
		.replace(/800DM/g, '800V')
		.replace(/800DW/g, '800A');
};

macros['forme rilevanti'] = function(str) { return macros.forme(str, true); };

if (utils.updateMenu) { utils.updateMenu() } ;
}(utils || { macros: {} }));