'use strict';
/**
 * Basic, uncategorized macros that are small enough to be packed
 * in a single file
 */

(function(utils) {

const macros = utils.macros;

macros.tipi = function(str) {
    return str
        .replace(/\bgrass\b/g, 'erba').replace(/\bGrass\b/g, 'Erba')
        .replace(/\bWater\b/g, 'Acqua').replace(/\bwater\b/g, 'acqua')
        .replace(/\bFire\b/g, 'Fuoco').replace(/\bfire\b/g, 'fuoco')
        .replace(/\bFlying\b/g, 'Volante').replace(/\bflying\b/g, 'volante')
        .replace(/\bFighting\b/g, 'Lotta').replace(/\bfighting\b/g, 'lotta')
        .replace(/\bGround\b/g, 'Terra').replace(/\bground\b/g, 'terra')
        .replace(/\bDark\b/g, 'Buio').replace(/\bdark\b/g, 'buio')
        .replace(/\bDragon\b/g, 'Drago').replace(/\bdragon\b/g, 'drago')
        .replace(/\bRock\b/g, 'Roccia').replace(/\brock\b/g, 'roccia')
        .replace(/\bPoison\b/g, 'Veleno').replace(/\bpoison\b/g, 'veleno')
        .replace(/\bGhost\b/g, 'Spettro').replace(/\bghost\b/g, 'spettro')
        .replace(/\bPsychic\b/g, 'Psico').replace(/\bpsychic\b/g, 'psico')
        .replace(/\bElectric\b/g, 'Elettro').replace(/\belectric\b/g, 'elettro')
        .replace(/\bSteel\b/g, 'Acciaio').replace(/\bsteel\b/g, 'acciaio')
        .replace(/\bNormal\b/g, 'Normale').replace(/\bnormal\b/g, 'normale')
        .replace(/\bBug\b/g, 'Coleottero').replace(/\bbug\b/g, 'coleottero')
        .replace(/\bFairy\b/g, 'Folletto').replace(/\bfairy\b/g, 'folletto')
        .replace(/\bUnknown\b/g, 'Sconosciuto').replace(/\bunknown\b/g, 'sconosciuto')
        .replace(/\bShadow\b/g, 'Ombra').replace(/\bshadow\b/g, 'ombra')
        .replace(/\bIce\b/g, 'Ghiaccio').replace(/\bice\b/g, 'ghiaccio')

    // Categorie danno
        .replace(/\bSpecial\b/g, 'Speciale').replace(/\bspecial\b/g, 'speciale')
        .replace(/\bStatus\b/g, 'Stato').replace(/\bstatus\b/g, 'stato')
        .replace(/\bPhysical\b/g, 'Fisico').replace(/\bphysical\b/g, 'fisico')

    // Correzione errori
        .replace(/Voloing/g, 'Volante').replace(/voloing/g, 'volante')
        .replace(/[Pp]sichico\|[Ff]isico/g, 'Psico|Fisico')
        .replace(/[Pp]sichico\|[Ss]peciale/g, 'Psico|Speciale')
        .replace(/[Pp]sichico\|[Ss]tato/g, 'Psico|Stato')
        .replace(/colore\s*\|?\s*(.+?)\s*\|?\s*buio\s*\}\}/gi,
                 'colore | $1 | dark }}')
};

macros.gare = function(str) {

	// Statistiche gara

	return str.replace(/Tough/gi, 'Grinta')
		.replace(/Cool/gi, 'Classe')
		.replace(/(Smart|Clever)/gi, 'Acume')
		.replace(/Beaut(y|iful)/gi, 'Bellezza')
		.replace(/Cute/gi, 'Grazia')

	// Correzione errori

		.replace(/TentaClasse/g, 'Tentacool')
		.replace(/ExeggGrazia/g, 'Exeggcute');
};

macros.generazioni = function(str, lastConj) {
	lastConj = lastConj || 'e';

	var ordinals = {1 : 'prima', 2 : 'seconda',
		3 : 'terza', 4 : 'quarta', 5 : 'quinta',
		6 : 'sesta', I : 'prima', II : 'seconda',
		III : 'terza', IV : 'quarta', V : 'quinta', VI: 'sesta'};

	return str.replace(/gen(eration)? ([1-7IV]+[-/1-6IV]*)+/gi,
		function(str, placeholder, gens) {
			gens = gens.match(/[1-7IV]+/gi);
			for (var k = 0; k < gens.length; ++k)
				gens[k] = ordinals[gens[k]];
			if (gens.length == 1)
				return gens[0] + ' generazione';
			var lastGen = gens.pop();
			return gens.join(', ') + ' ' + lastConj + ' '
				+ lastGen + ' generazione';
	});
};

/*

Il secondo argomento deve essere true per far sì che vengano
tradotti HeartGold e SoulSilver in Oro HeartGold e Argento
SoulSilver

*/
macros.giochi = function(str, transHGSS) {
	transHGSS = transHGSS == null || transHGSS;

	// Eccezioni per i colori

	str = str.replace(/firered color/gi, 'rossofuoco color')
		.replace(/leafgreen color/gi, 'verdefoglia color')
		.replace(/black2 color/gi, 'nero2 color')
		.replace(/white2 color/gi, 'bianco2 color');

	if (transHGSS) {
		str = str.replace(/SoulSilver/g, 'Argento SoulSilver')
			.replace(/HeartGold/g, 'Oro HeartGold')

		// Correzione errori

			.replace(/Argento Argento SoulSilver/g, 'Argento SoulSilver')
			.replace(/Oro Oro HeartGold/g, 'Oro HeartGold');
	}

	// Traduzione nomi giochi

	return str.replace(/FireRed/gi, 'Rosso Fuoco')
		.replace(/LeafGreen/gi, 'Verde Foglia')
		.replace(/Alpha Sapphire/gi, 'Zaffiro Alpha')
		.replace(/Omega Ruby/gi, 'Rubino Omega')
		.replace(/\bGold\b/gi, 'Oro')
		.replace(/\bSilver\b/gi, 'Argento')
		.replace(/\bRed\b/gi, 'Rosso')
		.replace(/\bBlue\b/gi, 'Blu')
		.replace(/\bGreen\b/gi, 'Verde')
		.replace(/Crystal/gi, 'Cristallo')
		.replace(/Yellow/gi, 'Giallo')
		.replace(/\bRuby\b/gi, 'Rubino')
		.replace(/Sapphire/gi, 'Zaffiro')
		.replace(/Emerald/gi, 'Smeraldo')
		.replace(/Diamond/gi, 'Diamante')
		.replace(/\bPearl\b/gi, 'Perla')
		.replace(/Platinum/gi, 'Platino')
		.replace(/\bBlack\b/gi, 'Nero')
		.replace(/\bWhite\b/gi, 'Bianco')

	// Traduzione sigle dei giochi

		.replace(/\bRG_/g, 'RV_')
		.replace(/\bRG\b/g, 'RV')
		.replace(/\bRGB_/g, 'RVB_')
		.replace(/\bRGB\b/g, 'RVB')
		.replace(/\bRGBY_/g, 'RVBG_')
		.replace(/\bRGBY\b/g, 'RVBG')
		.replace(/\bY\b/g, 'G')
		.replace(/\bY_/g, 'G_')
		.replace(/\bGS_/g, 'OA_')
		.replace(/\bGS\b/g, 'OA')
		.replace(/\bGSC_/g, 'OAC_')
		.replace(/\bGSC\b/g, 'OAC')
		.replace(/\bRu?Sa?_/g, 'RZ_')
		.replace(/\bRu?Sa?\b/g, 'RZ')
		.replace(/\bSa_/g, 'Z_')
		.replace(/\bSa\b/g, 'Z')
		.replace(/\bRSE_/g, 'RZS_')
		.replace(/\bRSE\b/g, 'RZS')
		.replace(/\bRE_/g, 'RS_')
		.replace(/\bRE\b/g, 'RS')
		.replace(/\bSE_/g, 'ZS_')
		.replace(/\bSE\b/g, 'ZS')
		.replace(/\bE_/g, 'S_')
		.replace(/\bE\b/g, 'S')
		.replace(/\bFR?LG?_/g, 'RFVF_')
		.replace(/\bFR?LG?\b/g, 'RFVF')
		.replace(/\bHS_/g, 'HGSS_')
		.replace(/\bHS\b/g, 'HGSS')
		.replace(/\bBW_/g, 'NB_')
		.replace(/\bBW\b/g, 'NB')
		.replace(/\bB2W2_/g, 'N2B2_')
		.replace(/\bB2W2\b/g, 'N2B2')
		.replace(/\bBl_/g, 'N_')
		.replace(/\bBl\b/g, 'N')
		.replace(/\bW_/g, 'Bi_')
		.replace(/\bW\b/g, 'Bi')
		.replace(/\bB2_/g, 'N2_')
		.replace(/\bB2\b/g, 'N2')
		.replace(/\bW2_/g, 'B2_')
		.replace(/\bW2\b/g, 'B2')
		.replace(/\bBWB2W2_/g, 'NBN2B2_')
		.replace(/\bBWB2W2\b/g, 'NBN2B2')
		.replace(/\by_/g, 'Y_')
		.replace(/\by\b/g, 'Y')
		.replace(/\bOR_/g, 'RO_')
		.replace(/\bOR\b/g, 'RO')
		.replace(/\bAS_/g, 'ZA_')
		.replace(/\bAS\b/g, 'ZA')
		.replace(/\bORAS_/g, 'ROZA_')
		.replace(/\bORAS\b/g, 'ROZA')
		.replace(/\bXYORAS_/g, 'XYROZA_')
		.replace(/\bXYORAS\b/g, 'XYROZA')
		.replace(/([\|=]\n?)Pokémon Stadium(\n?[\|=])/g, '$1St$2')
		.replace(/([\|=]\n?)Pokémon Stadium 2(\n?[\|=])/g, '$1St2$2')
		.replace(/\bSM_/g, 'SL_')
		.replace(/\bSM\b/g, 'SL')
		.replace(/\bUSUM_/g, 'USUL_')
		.replace(/\bUSUM\b/g, 'USUL')
		.replace(/\bSMUSUM_/g, 'SLUSUL_')
		.replace(/\bSMUSUM\b/g, 'SLUSUL')
		.replace(/\bSwSh_/g, 'SpSc_')
		.replace(/\bSwSh\b/g, 'SpSc')
		.replace(/\bLA\b/g, 'LPA')

	// Correzione errori

		.replace(/Diamante\s?Storm/gi, 'Diamantempesta');
};

macros.colori = function(str) {
	str = str.replace(/color buio/gi, 'color dark');
	var matches = /\{\{([\s\wé]+) color\s?[dark|light]?\}\}/gi.exec(str);
	str = str.replace(/\{\{([\s\wé]+) color\s?((dark|light))?\}\}/gi,
		'{{#invoke: colore | $1 | $2 }}')
		.replace(/(\{\{#invoke: colore \| .+? )\|\s*\}\}/gi, '$1| normale }}');
	if (matches && matches.length)
		for (var k = 1; k < matches.length; ++k)
			str = str.replace(matches[k], matches[k].replace(/\s/g, '_'));
	return str;
};

macros['nature'] = function(str) {
	return str.replace(/Hardy/g, 'Ardita')
		.replace(/Lonely/g, 'Schiva')
		.replace(/Brave/g, 'Audace')
		.replace(/Adamant/g, 'Decisa')
		.replace(/Naughty/g, 'Birbona')
		.replace(/Bold/g, 'Sicura')
		// .replace(/Docile/g, 'Docile')
		.replace(/Relaxed/g, 'Placida')
		.replace(/Impish/g, 'Scaltra')
		.replace(/Lax/g, 'Fiacca')
		.replace(/Timid/g, 'Timida')
		.replace(/Hasty/g, 'Lesta')
		.replace(/Serious/g, 'Seria')
		.replace(/Jolly/g, 'Allegra')
		.replace(/Naive/g, 'Ingenua')
		.replace(/Modest/g, 'Modesta')
		.replace(/Mild/g, 'Mite')
		.replace(/Quiet/g, 'Quieta')
		.replace(/Bashful/g, 'Ritrosa')
		.replace(/Rash/g, 'Ardente')
		.replace(/Calm/g, 'Calma')
		.replace(/Gentle/g, 'Gentile')
		.replace(/Sassy/g, 'Vivace')
		.replace(/Careful/g, 'Cauta')
		.replace(/Quirky/g, 'Furba')

		// Correzione errori
		.replace(/Timidaa/g, 'Timida')
		.replace(/Modestaa/g, 'Modesta')
		.replace(/Quietaa/g, 'Quieta')
		.replace(/Calmaa/g, 'Calma')

		.replace(/Audace Bird/g, 'Brave Bird')
		.replace(/Decisa Orb/g, 'Adamant Orb')
		.replace(/Fiacca Incense/g, 'Lax Incense')
		.replace(/Calma Mind/g, 'Calm Mind')
};

macros.date = function(str) {
    return str
        .replace(/January (\d+), (\d+)/g, '$1 gennaio $2')
        .replace(/February (\d+), (\d+)/g, '$1 febbraio $2')
        .replace(/March (\d+), (\d+)/g, '$1 marzo $2')
        .replace(/April (\d+), (\d+)/g, '$1 aprile $2')
        .replace(/May (\d+), (\d+)/g, '$1 maggio $2')
        .replace(/June (\d+), (\d+)/g, '$1 giugno $2')
        .replace(/July (\d+), (\d+)/g, '$1 luglio $2')
        .replace(/August (\d+), (\d+)/g, '$1 agosto $2')
        .replace(/September (\d+), (\d+)/g, '$1 settembre $2')
        .replace(/October (\d+), (\d+)/g, '$1 ottobre $2')
        .replace(/November (\d+), (\d+)/g, '$1 novembre $2')
        .replace(/December (\d+), (\d+)/g, '$1 dicembre $2')
};

if (utils.updateMenu) { utils.updateMenu() } ;
}(utils || { macros: {} }));