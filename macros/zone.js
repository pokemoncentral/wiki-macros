'use strict';
/**
 * "abilità" macro, that translates move names
 */

(function(utils) {

const macros = utils.macros;

macros['Terre Selvagge'] = function(str) {
	// Terre Selvagge
	return str.replace(/Meetup Spot/gi, 'Piazzale Adunanza')
		.replace(/Rolling Fields/gi, 'Pianura Serena')
		.replace(/Dappled Grove/gi, 'Boschetto Ombraluce')
		.replace(/Watchtower Ruins/gi, 'Torre Diroccata')
		.replace(/East Lake Axewell/gi, 'Lago Axew (est)')
		.replace(/West Lake Axewell/gi, 'Lago Axew (ovest)')
		.replace(/Axew's Eye/gi, 'Occhio del Lago Axew')
		.replace(/South Lake Miloch/gi, 'Lago Milotic (sud)')
		.replace(/North Lake Miloch/gi, 'Lago Milotic (nord)')
		.replace(/Giant's Seat/gi, 'Sedia del Gigante')
		.replace(/Motostoke Riverbank/gi, 'Fiume di Steamington')
		.replace(/Bridge Field/gi, 'Piana dei Ponti')
		.replace(/Stony Wilderness/gi, 'Landa delle Pietre')
		.replace(/Dusty Bowl/gi, 'Conca delle Sabbie')
		.replace(/Giant's Mirror/gi, 'Specchio del Gigante')
		.replace(/Hammerlocke Hills/gi, 'Colle Knuckleburgh')
		.replace(/Giant's Cap/gi, 'Berretto del Gigante')
		.replace(/Lake of Outrage/gi, 'Lago Dragofuria')

		// Correzione errori

		// Ancora nessuno
};

macros['Aree Dream World'] = function(str) {
	return str.replace(/\{\{[Dd]wa\|(.+?)\}\}/g, '[[$1]]')
		.replace(/Pleasant Forest/g, 'Boschetto')
		.replace(/Windswept Sky/g, 'Settimo Cielo')
		.replace(/Sparkling Sea/g, 'Mar Brillante')
		.replace(/Spooky Manor/g, 'Maniero Antico')
		.replace(/Rugged Mountain/g, 'Monte Spigolo')
		.replace(/Icy Cave/g, 'Grotta Refrigerio')
		.replace(/Pokémon Café Forest/g, 'Foresta Pok&eacutemon Caf&eacute')
		.replace(/Dream Park/g, 'Parco Incanto');
};

macros['Aree Pokewalker'] = function(str) {
	return str.replace(/\{\{[Pp]w\|(.+?)\}\}/g, '[[$1]]')
		.replace(/Refreshing Field/g, 'Piana Tranquilla')
		.replace(/Noisy Forest/g, 'Bosco Cicaleccio')
		.replace(/Rugged Road/g, 'Sent. Impervio')
		.replace(/Beautiful Beach/g, 'Spiaggia Amena')
		.replace(/Suburban Area/g, 'Z. Residenziale')
		.replace(/Dim Cave/g, 'Caverna Penombra')
		.replace(/Blue Lake/g, 'Lago Turchese')
		.replace(/Town Outskirts/g, 'Periferia')
		.replace(/Hoenn Field/g, 'Piana di Hoenn')
		.replace(/Warm Beach/g, 'Spiag. Caliente')
		.replace(/Volcano Path/g, 'Sentiero Focoso')
		.replace(/Treehouse/g, 'Silvania')
		.replace(/Scary Cave/g, 'Grotta Terrore')
		.replace(/Sinnoh Field/g, 'Piana di Sinnoh')
		.replace(/Icy Mountain Rd./g, 'Dirupo Glaciale')
		.replace(/Big Forest/g, 'Grande Foresta')
		.replace(/White Lake/g, 'Lago Bruma')
		.replace(/Stormy Beach/g, 'Costa Tempestosa')
		.replace(/Resort/g, 'Riviera')
		.replace(/Quiet Cave/g, 'Grotta Pacifica')
		.replace(/Beyond the Sea/g, 'Oltremare')
		.replace(/Night Sky's Edge/g, 'Confinecielo')
		.replace(/Yellow Forest/g, 'Bosco Giallo')
		.replace(/Rally/g, 'Evento')
		.replace(/Sightseeing/g, 'A spasso')
		.replace(/Winner's Path/g, 'Via dei Campioni')
		.replace(/Amity Meadow/g, 'Campo Concordia');
};

if (utils.updateMenu) { utils.updateMenu() } ;
}(utils || { macros: {} }));