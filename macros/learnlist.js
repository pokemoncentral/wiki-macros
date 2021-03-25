'use strict';
/**
 * learnlists and movelists-related macro
 *
 * Since new learnlists and movelists are handled automagically
 * there should be no need to update this file
 */

(function(utils) {

const macros = utils.macros;

macros.intestazioni = function(str, type) {
	var customTrans = {
		learnset: {
			learnlist: '==Mosse apprese==',
			movelist: '==Apprendimento=='
		}
	};

	var tmHeading = str.indexOf('h/7') == -1
		? '==Tramite [[MT]]/[[MN]]=='
		: '==Tramite [[MT]]==';

	return str.replace(/TM(\d{2,3})/g, 'MT$1')
		.replace(/HM(\d{2,3})/g, 'MN$1')
		.replace(/==[Ll]earnset==/g, customTrans.learnset[type])
		.replace(/==\[\[Dream World\]\]\-only moves==/g, '==Mosse esclusive del {{pkmn|Dream World}}==')
		.replace(/==\{\{pkmn\|Dream World\}\}\-only moves==/g, '==Mosse esclusive del {{pkmn|Dream World}}==')
		.replace(/==By \[\[[Ll]evel\|leveling up\]\]==/g, '==Aumentando di [[livello]]==')
		.replace(/==By \[\[TM\]\]\/\[\[HM\]\]==/g, tmHeading)
		.replace(/==By \[\[TM\]\]==/g, '==Tramite [[MT]]==')
		.replace(/==By \[\[HM\]\]==/g, '==Tramite [[MN]]==')
		.replace(/==By \{\{pkmn\|breeding\}\}==/g, '==Tramite [[Accoppiamento Pok&eacutemon|accoppiamento]]==')
		.replace(/==By \[\[[Mm]ove [Tt]utor(\|tutoring)?\]\]==/g, "==Dall'[[Insegnamosse]]==")
		.replace(/==By \{\{pkmn2\|event\}\}s==/g, '==Tramite [[Evento Pok&eacutemon|eventi]]==')
		.replace(/==Speciale? moves?==/g, '==Mosse speciali==')
		.replace(/==By a prior \[\[evolution\]\]==/g, '==Tramite [[evoluzione|evoluzioni]] precedenti==')
		.replace(/==\{\{Trading Card Game\}\}\-only moves==/g, '==Mosse apprese solamente nel [[Gioco di Carte Collezionabili Pok&eacutemon|GCC]]==');
};

macros.learnlist = function(str) {

	// Traduzione mosse, tipi, gare, intestazioni, sigle giochi

	str = macros.mosse(str);
	str = macros.gare(str);
	str = macros.tipi(str);
	str = macros.intestazioni(str, 'learnlist');
	str = macros.giochi(str, false);

	// Traduzione learnlist vero e proprio

	// Entry: traduzione numeri romani --> cifre arabe

	return str.replace(/\{\{learnlist\/([^V\|]+)([VI]+)/g, function(str, method, roman) {
		var numbers = {I: '1', II: '2', III: '3', IV: '4', V: '5', VI: '6', VII: '7', VIII: '8'};
		return '{{learnlist/' + method + numbers[roman]; })

	// Headers in doppio formato:
	// 		- {{learnlist/<method>h/<genheader>|<type1>|<type2>|<genpoke>|etc}} e
	// 		- {{learnlist/<method>h|<type1>|<type2>|<genheader>|<genpoke>|etc}}

		.replace(/\{\{[Ll]earnlist\/(\w+)h\|(.+)\|(\d)\|(\d)\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$2|$3|$4}}<br>{{#invoke: Render | entry | learnlist/entry$3.$1 |')
		.replace(/\{\{[Ll]earnlist\/(\w+)h\/(\d)\|(.+)\|(\d)\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$3|$2|$4}}<br>{{#invoke: Render | entry | learnlist/entry$2.$1 |')

	/*
		Entry: inserimento di un carattere di rimando al footer
		per le mosse imparate all'evoluzione.
	*/
		.replace(/\{\{tt\|\*\|.+evolving\}\}/g, '&amp;#x2670;')


	// Entry: MT e MN, Mini Sprite, N/A, Start, sup XY ORAS, fixing Evo., eliminazione tt

		.replace(/\{\{[Ll]earnlist\/tm(\d)\|TM/g, '{{learnlist/tm$1|MT')
		.replace(/\{\{[Ll]earnlist\/tm(\d)\|HM/g, '{{learnlist/tm$1|MN')
		.replace(/\{\{[Ll]earnlist\/tr\|TR/g, '{{learnlist/tm1|DT')
		.replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}(?:<br\/?>)?/g, '#$1#')
		.replace(/N\/A/g, 'Assente')
		.replace(/Start/g, 'Inizio')
		.replace(/\{\{sup\/6\|(XY|ROZA)\}\}/g, '$1')
		.replace(/\{\{tt\|[Ee]vo\.?\|[^|}]*\}\}|Evo\.?/g, "Evo")
		.replace(/\{\{tt\|.+\|(.+?)\}\}/g, '$1')

	// Entry: traduzioni generiche

		.replace(/\{\{[lL]earnlist\/(\w+)(\d)\|(.+)\|?\}\}/g,
		function(str, method, gen, args) {

			// Raddoppiamento livelli se non lo sono già
			/*if (gen > 4 && method == 'level' &&
				args.search(/^(Inizio|Assente|\d{1,3})\|(Inizio|Assente|\d{1,3})\|/) == -1)
				return '[[&euro;' + args.replace(/^(Inizio|\d{1,3})\|/, '$1|$1|')
					+ '&pound;]]|';*/

			return '[[&euro;' + args + '&pound;]]|';
		})

	// Sostituzione del livello 1 con Inizio

		.replace(/&euro;1\|/g, '&euro;Inizio|')
		.replace(/&euro;(Inizio|Assente|\d{1,3})\|1\|/g, '&euro;$1|Inizio|')

	// Footer in doppio formato:
	// 		- {{learnlist/<method>f/<footergen>|etc}}
	// 		- {{learnlist/<method>f|etc}}

		.replace(/\{\{[lL]earnlist\/(\w+)f\/(\d)\|(.+)\|(\d)(.*?)\}\}/g,
		function(str, method, genf, args, genp, otherArgs) {
			return '}}<br>{{#invoke: learnlist/hf | ' + method + 'f|' + args + '|' + genf
				+ '|' + genp + (otherArgs.search('xy=') == -1 ? otherArgs : '') + '}}';
		})
		.replace(/\{\{[lL]earnlist\/(\w+)f(.+?)\}\}/g, '}}<br>{{#invoke: learnlist/hf | $1f$2}}')

	// Footer: inserimento della generazione del footer se non presente, assumendo la settima

		.replace(/\{\{#invoke: learnlist\/hf \| (\w+)f([^0-9]+)\|(\d)\}\}/gi, '{{#invoke: learnlist/hf | $1f$2|8|$3}}')

	// Entry: traduzione null

		.replace(/\{\{[lL]earnlist\/(\w+)(\d)null\}\}\n?\}\}/g, '{{#invoke: learnlist/entry$2 | $1null}}')

	// Traduzione psichico|psichico in header e footer

	// str = str.replace(/€(.+)[Pp]sichico\|[Pp]sichico\|(.+)£/g, '€$1Psichico|Psico$2£');

		.replace(/[Ll]earnlist(.+)\|[Pp]sichico\|[Pp]sichico(.+)\}\}/g,
		'learnlist$1|Psico|Psico$2}}')
		.replace(/[Ll]earnlist(.+)\|[Pp]sichico(.+)\}\}/g, 'learnlist$1|Psico$2}}')

	// Eliminazione chiamata al modulo Render per gli entry null

		.replace(/\{\{#invoke: Render \| entry \| learnlist\/entry\d\.\w+ \|\n(\{\{.+null\}\})/g, '$1')

	// Eliminazione del parametro STAB e form e aggiustamenti sintattici

		.replace(/STAB=/g, '')
		.replace(/form=[^\|£]+\|?(.*?)£/g, '$1£')
		.replace(/\}\}&pound;\]\]/g, '&pound;]]}}')
		.replace(/\|?\n?\}\}\|?/g, '}}')
		.replace(/STAB prior to (Gen [0-9IV]+)/gi, function(str, gen) {
			return 'Gode di STAB prima della ' + macros.generazioni(gen);
		})

	// Eliminazione dei dati della mossa, recuperati in automatico dal modulo

		.replace(/[^\|]*\|(Fisico|Stato|Speciale)\|[^\|]*\|[^\|]*\|[^\|&]*\|?/g, '')

    // Sorting parameters according to our module
		.replace(/\[\[\&euro;(\w*)\|([^|]*)\|?([^|]*)?\|?('*)?\&pound;\]\](\||\})/g, function(str, level, move, notes = "", stab = "", close) {
            return "[[&euro;" + move + '|' + stab + '|' + notes + '|' + level + "&pound;]]" + close;
        });

};

macros["learnlist settima"] = function(str) {

	// Traduzione mosse, tipi, gare, intestazioni, sigle giochi

	str = macros.mosse(str);
	str = macros.gare(str);
	str = macros.tipi(str);
	str = macros.intestazioni(str, 'learnlist');
	str = macros.giochi(str, false);

	// Traduzione learnlist vero e proprio

	// Entry: traduzione numeri romani --> cifre arabe

	return str.replace(/\{\{learnlist\/([^V\|]+)([VI]+)/g, function(str, method, roman) {
		var numbers = {I: '1', II: '2', III: '3', IV: '4', V: '5', VI: '6', VII: '7'};
		return '{{learnlist/' + method + numbers[roman]; })

	// Headers in doppio formato:
	// 		- {{learnlist/<method>h/<genheader>|<type1>|<type2>|<genpoke>|etc}} e
	// 		- {{learnlist/<method>h|<type1>|<type2>|<genheader>|<genpoke>|etc}}

		.replace(/\{\{[Ll]earnlist\/(\w+)h\|(.+)\|([1-7])\|([1-7])\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$2|$3|$4}}<br>{{#invoke: Render | entry | learnlist/entry$3.$1 |')
		.replace(/\{\{[Ll]earnlist\/(\w+)h\/([1-7])\|(.+)\|([1-7])\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$3|$2|$4}}<br>{{#invoke: Render | entry | learnlist/entry$2.$1 |')

	/*
		Entry: inserimento di un carattere di rimando al footer
		per le mosse imparate all'evoluzione.
	*/
		.replace(/\{\{tt\|\*\|.+evolving\}\}/g, '&amp;#x2670;')


	// Entry: MT e MN, Mini Sprite, N/A, Start, sup XY ORAS, eliminazione tt

		.replace(/\{\{[Ll]earnlist\/tm([1-7])\|TM/g, '{{learnlist/tm$1|MT')
		.replace(/\{\{[Ll]earnlist\/tm([1-7])\|HM/g, '{{learnlist/tm$1|MN')
		.replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}(?:<br\/?>)?/g, '#$1#')
		.replace(/N\/A/g, 'Assente')
		.replace(/Start/g, 'Inizio')
		.replace(/\{\{sup\/6\|(XY|ROZA)\}\}/g, '$1')
		.replace(/\{\{tt\|[Ee]vo\.?\|[^|}]*\}\}|Evo\.?/g, "Evo")
		.replace(/\{\{tt\|.+\|(.+?)\}\}/g, '$1')

	// Entry: traduzioni generiche

		.replace(/\{\{[lL]earnlist\/(\w+)([1-7])\|(.+)\|?\}\}/g,
		function(str, method, gen, args) {

			// Raddoppiamento livelli se non lo sono già
			if (gen > 4 && method == 'level' &&
				args.search(/^(Inizio|Assente|Evo|Evoluzione|\d{1,3})\|(Inizio|Assente|Evo|Evoluzione|\d{1,3})\|/) == -1)
				return '[[&euro;' + args.replace(/^(Inizio|Evo|Evoluzione|\d{1,3})\|/, '$1|$1|')
					+ '&pound;]]|';

			return '[[&euro;' + args + '&pound;]]|';
		})

	// Sostituzione del livello 1 con Inizio

		.replace(/&euro;1\|/g, '&euro;Inizio|')
		.replace(/&euro;(Inizio|Assente|\d{1,3})\|1\|/g, '&euro;$1|Inizio|')

	// Footer in doppio formato:
	// 		- {{learnlist/<method>f/<footergen>|etc}}
	// 		- {{learnlist/<method>f|etc}}

		.replace(/\{\{[lL]earnlist\/(\w+)f\/([1-7])\|(.+)\|([1-7])(.*?)\}\}/g,
		function(str, method, genf, args, genp, otherArgs) {
			return '}}<br>{{#invoke: learnlist/hf | ' + method + 'f|' + args + '|' + genf
				+ '|' + genp + (otherArgs.search('xy=') == -1 ? otherArgs : '') + '}}';
		})
		.replace(/\{\{[lL]earnlist\/(\w+)f(.+?)\}\}/g, '}}<br>{{#invoke: learnlist/hf | $1f$2}}')

	// Footer: inserimento della generazione del footer se non presente, assumendo la settima

		.replace(/\{\{#invoke: learnlist\/hf \| (\w+)f([^1-7]+)\|([1-7])\}\}/gi, '{{#invoke: learnlist/hf | $1f$2|7|$3}}')

	// Entry: traduzione null

		.replace(/\{\{[lL]earnlist\/(\w+)(\d)null\}\}\n?\}\}/g, '{{#invoke: learnlist/entry$2 | $1null}}')

	// Traduzione psichico|psichico in header e footer

	// str = str.replace(/€(.+)[Pp]sichico\|[Pp]sichico\|(.+)£/g, '€$1Psichico|Psico$2£');

		.replace(/[Ll]earnlist(.+)\|[Pp]sichico\|[Pp]sichico(.+)\}\}/g,
		'learnlist$1|Psico|Psico$2}}')
		.replace(/[Ll]earnlist(.+)\|[Pp]sichico(.+)\}\}/g, 'learnlist$1|Psico$2}}')

	// Eliminazione chiamata al modulo Render per gli entry null

		.replace(/\{\{#invoke: Render \| entry \| learnlist\/entry\d\.\w+ \|\n(\{\{.+null\}\})/g, '$1')

	// Eliminazione del parametro STAB e form e aggiustamenti sintattici

		.replace(/STAB=/g, '')
		.replace(/form=[^\|£]+\|?(.*?)£/g, '$1£')
		.replace(/\}\}&pound;\]\]/g, '&pound;]]}}')
		.replace(/\|?\n?\}\}\|?/g, '}}')
		.replace(/STAB prior to (Gen [1-7IV]+)/gi, function(str, gen) {
			return 'Gode di STAB prima della ' + macros.generazioni(gen);
		})

	// Eliminazione dei dati della mossa, recuperati in automatico dal modulo

		.replace(/[^\|]*\|(Fisico|Stato|Speciale)\|[^\|]*\|[^\|]*\|[^\|&]*\|?/g, '');
};

macros['learnlist sesta'] = function(str) {

	// Traduzione mosse, tipi, gare, intestazioni, sigle giochi

	str = macros.mosse(str);
	str = macros.gare(str);
	str = macros.tipi(str);
	str = macros.intestazioni(str, 'learnlist');
	str = macros.giochi(str, false);

	// Traduzione learnlist vero e proprio

	// Entry: traduzione numeri romani --> cifre arabe

	return str.replace(/\{\{learnlist\/([^V\|]+)([VI]+)/g, function(str, method, roman) {
		var numbers = {I: '1', II: '2', III: '3', IV: '4', V: '5', VI: '6'};
		return '{{learnlist/' + method + numbers[roman]; })

	// Headers in doppio formato:
	// 		- {{learnlist/<method>h/<genheader>|<type1>|<type2>|<genpoke>|etc}} e
	// 		- {{learnlist/<method>h|<type1>|<type2>|<genheader>|<genpoke>|etc}}

		.replace(/\{\{[Ll]earnlist\/(\w+)h\|(.+)\|([1-6])\|([1-6])\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$2|$3|$4}}<br>{{#invoke: Render | entry | learnlist/entry$3.$1 |')
		.replace(/\{\{[Ll]earnlist\/(\w+)h\/([1-6])\|(.+)\|([1-6])\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$3|$2|$4}}<br>{{#invoke: Render | entry | learnlist/entry$2.$1 |')

	// Entry: MT e MN, Mini Sprite, N/A, Start, sup XY ORAS, eliminazione tt

		.replace(/\{\{[Ll]earnlist\/tm([1-6])\|TM/g, '{{learnlist/tm$1|MT')
		.replace(/\{\{[Ll]earnlist\/tm([1-6])\|HM/g, '{{learnlist/tm$1|MN')
		.replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}/g, '#$1#')
		.replace(/N\/A/g, 'Assente')
		.replace(/Start/g, 'Inizio')
		.replace(/\{\{sup\/6\|(XY|ROZA)\}\}/g, '$1')
		.replace(/\{\{tt\|.+\|(.+?)\}\}/g, '$1')

	// Entry: traduzioni generiche

		.replace(/\{\{[lL]earnlist\/(\w+)([1-6])\|(.+)\|?\}\}/g,
		function(str, method, gen, args) {

			// Raddoppiamento livelli se non lo sono già

			if (gen > 4 && method == 'level' &&
				args.search(/^(Inizio|Assente|\d{1,3})\|(Inizio|Assente|\d{1,3})\|/) == -1)
				return '[[&euro;' + args.replace(/^(Inizio|\d{1,3})\|/, '$1|$1|')
					+ '&pound;]]|';
			return '[[&euro;' + args + '&pound;]]|';
		})

	// Sostituzione del livello 1 con Inizio

		.replace(/&euro;1\|/g, '&euro;Inizio|')
		.replace(/&euro;(Inizio|Assente|\d{1,3})\|1\|/g, '&euro;$1|Inizio|')

	// Footer in doppio formato:
	// 		- {{learnlist/<method>f/<footergen>|etc}}
	// 		- {{learnlist/<method>f|etc}}

		.replace(/\{\{[lL]earnlist\/(\w+)f\/([1-6])\|(.+)\|([1-6])(.*?)\}\}/g,
		function(str, method, genf, args, genp, otherArgs) {
			return '}}<br>{{#invoke: learnlist/hf | ' + method + 'f|' + args + '|' + genf
				+ '|' + genp + (otherArgs.search('xy=') == -1 ? otherArgs : '') + '}}';
		})
		.replace(/\{\{[lL]earnlist\/(\w+)f(.+?)\}\}/g, '}}<br>{{#invoke: learnlist/hf | $1f$2}}')

	// Footer: inserimento della generazione dl footer se non presente, assumendo la sesta

		.replace(/\{\{#invoke: learnlist\/hf \| (\w+)f([^1-6]+)\|([1-6])\}\}/gi, '{{#invoke: learnlist/hf | $1f$2|6|$3}}')

	// Entry: traduzione null

		.replace(/\{\{[lL]earnlist\/(\w+)(\d)null\}\}\n?\}\}/g, '{{#invoke: learnlist/entry$2 | $1null}}')

	// Traduzione psichico|psichico in header e footer

	// str = str.replace(/€(.+)[Pp]sichico\|[Pp]sichico\|(.+)£/g, '€$1Psichico|Psico$2£');

		.replace(/[Ll]earnlist(.+)\|[Pp]sichico\|[Pp]sichico(.+)\}\}/g,
		'learnlist$1|Psico|Psico$2}}')
		.replace(/[Ll]earnlist(.+)\|[Pp]sichico(.+)\}\}/g, 'learnlist$1|Psico$2}}')

	// Eliminazione chiamata al modulo Render per gli entry null

		.replace(/\{\{#invoke: Render \| entry \| learnlist\/entry\d\.\w+ \|\n(\{\{.+null\}\})/g, '$1')

	// Eliminazione del parametro STAB e form e aggiustamenti sintattici

		.replace(/STAB=/g, '')
		.replace(/form=[^\|£]+\|?(.*?)£/g, '$1£')
		.replace(/\}\}&pound;\]\]/g, '&pound;]]}}')
		.replace(/\|?\n?\}\}\|?/g, '}}')
		.replace(/STAB prior to (Gen [1-6IV]+)/gi, function(str, gen) {
			return 'Gode di STAB prima della ' + macros.generazioni(gen);
		});
};

macros.movelist = function(str) {
	var generation;

	// Giochi senza parametro
	var games = ['RB', 'RGB', 'GS', 'RS', 'RSE', 'DP', 'DPPt', 'BW', 'XY', 'SM'];
	// Corrispondente parametro
	var otherGames = ['Y', 'Y', 'C', 'E', 'FRLG', 'PtHGSS', 'HGSS', 'B2W2', 'ORAS', 'USUM'];

	// Traduzione tipi e intestazioni
	str = macros.forme(str, true);
	str = macros.tipi(str);
	str = macros.intestazioni(str, 'movelist');

	// Traduzione movelist vero e proprio
	return str.replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}/g, '#$1#')
		.replace(/\|\{\{tt\|(.+?)\|XY\}\}(<br>)?/g, '|$1|')
		.replace(/\{\{tt\|(.+?)\|ORAS\}\}/g, 'ORAS=$1')
		.replace(/\{\{[Mm]ovehead\/(\w+)\|(\w+)\|([0-9]+)(\|[^\}]*)?\}\}/g, function(str, kind, tipo, gen, tm){
			generation = gen;
			return '{{#invoke: Movelist/hf | ' + kind + 'h |' + tipo + '|' + gen + (tm ? tm : '') +'}}<br>{{#invoke: Render | entry | Movelist/entry.' + kind + ' |'
		})
		.replace(/\{\{[Mm]ovefoot(\/[Tt]utor)?\|(\w+?)(\|[0-9])?\}\}/g,
		'}}<br>{{#invoke: Movelist/hf | footer | $2}}<br>')
		.replace(/\{\{[Mm]oveentry\/[0-9]\|(.+)\}\}/g, function(str, data){
			// Traduce i parametri vuoti in no
			data = data.replace(/\|(?=\|)/g, '|no')
				.replace(/\|$/g, '|no')

			// Toglie nome, i type, numero di GU e i due GU
				.replace(/\|type2? ?\= ?\w+/g, '')
				.replace(/^([0-9a-zA-Z]+)\|([\w \-'.:]+[^|])\|[12]\|([\w \-]+)\|([\w \-]+)\|/g, '$1|')

			// Toglie i sup e li mette come parametri
			// Per LGPE lo scrivo a mano, e va eseguito prima perché l'altro rompe la sostituzione
				.replace(/\|([^}|]+){{sup\/7\|SM}}{{sup\/7\|USUM}}<br>([\d ,]+){{sup\/7\|PE}}/g, '|$1|LGPE=$2')
				.replace(/\|([^\}\|]+)\{\{sup\/\d\|(\w+)\}\}(<br>([\d ,]+)\{\{sup\/\d\|(\w+)\}\})?/g, function(str, lvl, game, _, lvl2 = 'no', game2){
					// se il primo gioco è ok mette il doppio parametro
					var otherGame = otherGames[games.indexOf(game)];
					if (otherGame)
						return '|' + lvl + '|' + otherGame + '=' + lvl2;
					else
						return '|no|' + game + '=' + lvl;
				})

			// Replace vari
				.replace(/\{\{tt\|Evo\.\|Learned upon evolving\}\}/g, 'Evo')
				.replace(/\|$/g, '')
				.replace(new RegExp(String.fromCharCode(10004), 'g'), 'yes')

			//console.log('[[€' + generation + '|' + data + '£]]|');
			return '[[&euro;' + generation + '|' + data + '&pound;]]|'
		})
		.replace(/\{\{[Mm]oveentry\|(.+)\|?\}\}/g,
		'[[&euro;$1&pound;]]|')
		.replace(/\{\{[Mm]oveentryspecial\|(.+)\|?\}\}/g,
		'[[&euro;$1&pound;]]|')
		.replace(/\{\{(maschio|femmina)&pound;\]\]\}\}/gi,
		'|form=$1&pound;]]}}')
		.replace(/\{\{(maschio|femmina)\}\}&pound;\]\]/gi,
		'|form=$1&pound;]]')
		.replace(/\}\}&pound;\]\]/g, '&pound;]]}}')
		.replace(/\|?\n?\}\}\n?\|?/g, '}}')
		.replace(/STAB prior to (Gen [1-7IV]+)/gi, function(str, gen) {
			return 'Gode di STAB prima della ' + macros.generazioni(gen);
		})

	// Traduzioni delle note del breed più ricorrenti

		.replace(/Breed from (Gen [1-7IV]+[-/1-6IV]* )?TM( in \w+)?/gi,
			function(str, gen, game) {
				gen = gen ? 'nella ' + macros.generazioni(gen, 'o') : '';
				game = game ? macros.giochi(game) : '';
				return 'I padri devono aver appreso la mossa tramite MT ' + gen + game;
		})
		.replace(/(Breed from|or) (Gen [1-7IV]+[-/1-6IV]* )?Move Tutor/gi,
			function(str, prefix, gen) {
				prefix = prefix == 'or' ? 'o' : 'I padri devono aver appreso la mossa tramite';
				gen = gen ? 'nella ' + macros.generazioni(gen, 'o') : '';
				return prefix + ' Insegnamosse ' + gen;
		})
		.replace(/chain breed(ing)?/gi, 'Catena di accoppiamenti')
		.replace(/Breed through Sketch in (\w+)/gi, function(str, game) {
			var replace = macros.generazioni(game);
			if (replace == game)
				replace = 'in ' + macros.giochi(game);
			else
				replace = 'nella ' + replace;
			return 'Il padre deve averla copiata con Schizzo ' + replace;
		});
};

macros['movelist tutor'] = function(str) {
	// Crea un array che contiene le celle da mostrare e non sulla base dell'header
	// {'cristallo', 'rossofuoco', 'smeraldo', 'xd', 'diamante', 'platino', 'heartgold', 'nero', 'nero2', 'x', 'rubinoomega', 'sole', 'ultrasole', 'lgpikachu', 'spada', 'isolaarmatura', 'landacorona' }
	var cells = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
	// posizione nell'array del primo parametro corrispondente alla generazione dell'indice. Il primo è -1 perché l'array è 0-based, l'ultimo serve per fare (headers[gen+1]-headers[gen])
	var headers = [-1, 0, 0, 1, 4, 7, 9, 11, 14, cells.lenght];
	// Cerca gli header che corrispondono ai vari giochi. Se non li torva viene utilizzato il default "non mostrare"
	// Bisogna sostituire subito il tick con yes perché su Bulba lo usano a caso
	str = str.replace(new RegExp(String.fromCharCode(10004), 'g'), 'yes')
		.replace(/\{\{[Mm]ovehead\/tutor\/([1-8])([yesno\|]*)\}\}/gi, function (match, gen, yesnos) {
		// Se la generazione ha un solo gioco su Bulba non c'è parametro, lo mostra e basta
		if (headers[gen + 1] - headers[gen] === 1){
			cells[headers[gen]] = '<replace>';
		}
		else {
			var splitted = yesnos.split('|');
			splitted.shift();
			for (i = 0; i < splitted.length; ++i)
				if (splitted[i] === 'yes')
					cells[headers[gen] + i] = '<replace>';
		}
		return '{{#invoke: Movelist/hf | tutor' + gen + ' ' + yesnos + '}}';
	});


	// Traduzione tipi e intestazioni
	str = macros.forme(str, true);
	str = macros.tipi(str);
	str = macros.intestazioni(str, 'movelist');

	// Traduzione movelist vero e proprio
	return str.replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}/g, '#$1#')
		.replace(/\|\{\{tt\|(.+?)\|XY\}\}(<br>)?/g, '|$1|')
		.replace(/\{\{Movehead\/tutor\|(.+?)\}\}/gi,
		'{{#invoke: Movelist/hf | tutorh | $1}}')
		.replace(/(\{\{\#invoke\: Movelist\/hf \| tutor[1-8] [^\}]*?\}\})\n\{\{[Mm]oveentry/gi,
		'$1<br>{{#invoke: Render | render | Modulo:Movelist/entry | tutor | //<br>{{Moveentry')
		//~ .replace(/\{\{[Mm]ovehead\/tutor\/([1-7])([yesno\|]*)\}\}/gi,
		//~ '{{#invoke: Movelist/hf | tutor$1 $2}}')
		.replace(/\{\{[Mm]ovefoot(\/[Tt]utor)?\|(\w+?)(\|\d)?\}\}/g,
		'}}<br>{{#invoke: Movelist/hf | footer}}<br>')
		.replace(/\{\{[Mm]oveentry\/\d\|(.+)\}\}/g, function(str, data){
			var ndex;
			// Se c'è lo stab se lo salva
			var stab = data.match(/\|STAB=(\'{0,3})/i);
			stab = stab ? ( '|STAB <- ' + stab[1]) : '';
			// Traduce i parametri vuoti in no
			data = data.replace(/\|(?=\|)/g, '|no')
				.replace(/\|$/g, '|no')

			// Toglie nome, i type, numero di GU e i due GU
				.replace(/\|type2? ?\= ?\w+/g, '')
				.replace(/^([0-9a-zA-Z]+)\|([\w \-'.:]+[^|])\|[12]\|([\w \-]+)\|([\w \-]+)\|/g, function(str, num){
					ndex = num + '|';
					return '';
				})

			// Replace vari
				.replace(/\|$/g, '')

			// Crea la nuova stringa dei tutor: sostituisce i <replace> in cells.join('|') con i parametri che trova in data
			var values = cells.join('|');
			('|' + data).replace(/\|(yes|no)/gi, function(match, p1) {
				values = values.replace('<replace>', p1);
				return '';
			});

			return '|' + ndex + values + stab + '| //';
		})
		.replace(/\{\{[Mm]oveentry\|(.+)\|?\}\}/g,
		'|$1| //')
		.replace(/\{\{[Mm]oveentryspecial\|(.+)\|?\}\}/g,
		'|$1| //')
		.replace(/\{\{(maschio|femmina)\}\}\| \/\//gi,
		'|form=$1| //')
		.replace(/\}\}\| \/\//g, '| //}}')
		.replace(/\|?\n?\}\}\n?\|?/g, '}}')
		.replace(/STAB prior to (Gen [1-7IV]+)/gi, function(str, gen) {
			return 'Gode di STAB prima della ' + macros.generazioni(gen);
		})
		.replace('{{#invoke: Movelist/hf | tutor2 }}', '{{#invoke: Movelist/hf | tutor2 |yes}}');
};

macros['movelist breed cinesi'] = function(str) {
	str = str.replace(/\{\{[Mm]SP\|([\dA]*)\|[^}]*\}\}/g, '#$1#')
	str = str.replace(/\|((?:[#\d]|{{sup\/\d\|\w*}})*)(?=\|)/gi, function(match, list){
			var res = /{{sup\/\d\|(\w*)}}/i.exec(match);
			if (!res)
				return match;
			return '|' + list.replace(/#\d\d\d#{{sup\/\d\|\w*}}/gi, '') + '|' + res[1] + '=' + list.replace(/{{sup\/\d\|\w*}}/gi, '');
		});

	return str.replace(/\|alt\=/gi, '|STAB=')
		.replace(/\{\{Movelist\/breed\/gen(\d)\|([\w\d]+)\|.*?\|.*?\|.*?\|([^}]*)\}\}/g, '[[&euro;$1|$2|$3&pound;]]|')
		.replace(/\|(?=\|)/g, '|no')
		.replace(/\u8FDE\u9501\u9057\u4F20/g, 'Catena di accoppiamenti')
		.replace(/\u7B2C\u4E8C\u4E16\u4EE3\u901A\u8FC7\u7B2C\u4E00\u4E16\u4EE3\u7684\u62DB\u5F0F\u5B66\u4E60\u5668\u9057\u4F20/g, 'In seconda generazione il padre deve aver appreso la mossa nei giochi di prima generazione tramite MT')
};


if (utils.updateMenu) { utils.updateMenu() } ;
}(utils || { macros: {} }));