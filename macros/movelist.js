'use strict';
/**
 * learnlists and movelists-related macro
 *
 * Since new learnlists and movelists are handled automagically
 * there should be no need to update this file
 */

(function(utils) {

const macros = utils.macros;
const lastGen = 9;

function intestazioni(str) {
	return str.replace(/TM(\d{2,3})/g, 'MT$1')
		.replace(/HM(\d{2,3})/g, 'MN$1')
		.replace(/==[Ll]earnset==/g, '==Apprendimento==')
		.replace(/==\[\[Dream World\]\]\-only moves==/g, '==Mosse esclusive del {{pkmn|Dream World}}==')
		.replace(/==\{\{pkmn\|Dream World\}\}\-only moves==/g, '==Mosse esclusive del {{pkmn|Dream World}}==')
		.replace(/==By \[\[[Ll]evel\|leveling up\]\]==/g, '==Aumentando di [[livello]]==')
		.replace(/==By \[\[TM\]\]\/\[\[HM\]\]==/g, '==Tramite [[MT]]/[[MN]]==')
		.replace(/==By \[\[TM\]\]\/\[\[TR\]\]==/g, '==Tramite [[MT]]/[[DT]]==')
		.replace(/==By \[\[TM\]\]==/g, '==Tramite [[MT]]==')
		.replace(/==By \[\[HM\]\]==/g, '==Tramite [[MN]]==')
		.replace(/==By \{\{pkmn\|breeding\}\}==/g, '== Come [[Mossa Uovo|mosse Uovo]]==')
		.replace(/==By \[\[[Mm]ove [Tt]utor(\|tutoring)?\]\]==/g, "==Dall'[[Insegnamosse]]==")
		.replace(/==By \{\{pkmn2\|event\}\}s==/g, '==Tramite [[Evento Pok&eacutemon|evento]]==')
		.replace(/==Speciale? moves?==/g, '==Mosse speciali==')
		.replace(/==By a prior \[\[evolution\]\]==/g, '==Tramite [[evoluzione|evoluzioni]] precedenti==');
};

macros.movelist = function(str) {
	let generation;

	// Giochi senza parametro
	const games = ['RB', 'RGB', 'GS', 'RS', 'RSE', 'DP', 'DPPt', 'BW', 'XY', 'SM', 'SMUSUM', 'SwSh', 'SwSh'];
	// Corrispondente parametro
	const otherGames = ['Y', 'Y', 'C', 'E', 'FRLG', 'PtHGSS', 'HGSS', 'B2W2', 'ORAS', 'USUM', 'LGPE', 'BDSP', 'LA'];

	// Traduzione tipi e intestazioni
	str = macros.forme(str, true);
	str = macros.tipi(str);
	str = intestazioni(str, 'movelist');

	// Traduzione movelist vero e proprio
	return str.replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}/g, '#$1#')
		.replace(/\|\{\{tt\|(.+?)\|XY\}\}(<br>)?/g, '|$1|')
		.replace(/\{\{tt\|(.+?)\|ORAS\}\}/g, 'ORAS <- $1')
		.replace(/\{\{[Mm]ovehead\/(\w+)\|(\w+)\|([0-9]+)(\|[^\}]*)?\}\}/g, function(_, kind, tipo, gen, tm) {
			generation = gen;
			return '{{#invoke: Movelist/hf | ' + kind + 'h |' + tipo + '|' + gen + (tm ? tm : '') +'}}<br>{{#invoke: Render | render | Movelist/entry | ' + kind + ' | //';
		})
		.replace(/\{\{[Mm]ovefoot(\/[Tt]utor)?\|(\w+?)(\|[0-9])?\}\}/g,
		'}}<br>{{#invoke: Movelist/hf | footer | $2}}<br>')
		.replace(/\{\{[Mm]oveentry\/[0-9]\|(.+)\}\}/g, function(_, data){
			// Traduce i parametri vuoti in no
			let data2 = data.replace(/\|(?=\|)/g, '|no')
				.replace(/\|$/g, '|no')

			// Toglie nome, i type, numero di GU e i due GU
				.replace(/\|type2? ?\= ?\w+/g, '')
				.replace(/^([0-9a-zA-Z]+)\|([\w '.:é\-]+[^|])\|[12]\|([\w \-]+)\|([\w \-]+)\|/g, '$1|')

			// Toglie i sup e li mette come parametri
			// Per LGPE lo scrivo a mano, e va eseguito prima perché l'altro rompe la sostituzione
				.replace(/\|([^}|]+){{sup\/7\|SM}}{{sup\/7\|USUM}}<br>([\d ,]+){{sup\/7\|PE}}/g, '|$1|LGPE <- $2')
				.replace(/\|([^}|]+){{sup\/7\|SMUSUM}}<br>([\d ,]+){{sup\/7\|PE}}/g, '|$1|LGPE <- $2')
				.replace(/\|([^\}\|]+)\{\{sup\/\d\|(\w+)\}\}(<br>([\d ,]+)\{\{sup\/\d\|(\w+)\}\})?/g, function(_, lvl, game, __, lvl2 = 'no', game2) {
					// se il primo gioco è ok mette il doppio parametro
					const otherGame = otherGames[games.indexOf(game)];
					if (otherGame)
						return '|' + lvl + '|' + otherGame + ' <- ' + lvl2;
					else
						return '|no|' + game + ' <- ' + lvl;
				})
			// Replace vari
				.replace(/\{\{tt\|Evo\.\|Learned upon evolving\}\}/g, 'Evo')
				.replace(/\|$/g, '')
				.replace(new RegExp(String.fromCharCode(10004), 'g'), 'yes')
			// Remove the "form" parameter
				.replace(/\|form=[^|}]+(\||$)/g, '$1')
			// STAB parameter
				.replace(/\|STAB ?= ?(\'{0,3})/, '|STAB <- $1')

			// Count positional parameters in data2 to add "no" for last gens
			{
				const params = data2.split("|");
				if (data2.indexOf("{") !== -1) {
					const ndex = params[0];
					alert(`Found "{" in the row for ndex ${ndex}. It may miss some final "no".`);
					console.log(data2);
				}
				else {
					const numPosParams = params.filter(p => !p.includes("<-")).length;
					// The first positional parameter is the ndex
					const missingNos = (lastGen - generation + 1) - (numPosParams - 1);
					if (missingNos < 0) {
						console.log(`data2: ${data2}\nnumPosParams: ${numPosParams}`);
					}
					data2 += "|no".repeat(missingNos);
				}
			}

			return '|' + generation + '|' + data2 + '| //';
		})
		.replace(/\{\{(maschio|femmina)\}\}\| \/\//gi,
		'|form=$1| //')
		.replace(/\|?\n?\}\}\n?\|?/g, '}}')
		.replace(/\| \/\/[ ]*\}\}/g, '| //\n}}')
		.replace(/STAB prior to (Gen [0-9IVX]+)/gi, function(_, gen) {
			return 'Gode di STAB prima della ' + macros.generazioni(gen);
		})

	// Traduzioni delle note del breed più ricorrenti

		.replace(/Breed from (Gen [0-9IVX]+[-/0-9IVX]* )?TM( in \w+)?/gi,
			function(_, gen, game) {
				gen = gen ? 'nella ' + macros.generazioni(gen, 'o') : '';
				game = game ? macros.giochi(game) : '';
				return 'I padri devono aver appreso la mossa tramite MT ' + gen + game;
		})
		.replace(/(Breed from|or) (Gen [0-9IVX]+[-/0-9IVX]* )?Move Tutor/gi,
			function(_, prefix, gen) {
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
	// {'cristallo', 'rossofuoco', 'smeraldo', 'xd', 'diamante', 'platino', 'heartgold', 'nero', 'nero2', 'x', 'rubinoomega', 'sole', 'ultrasole', 'lgpikachu', 'spada', 'isolaarmatura', 'diamantelucente', 'leggendearceus' }
	const cells = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
	// posizione nell'array del primo parametro corrispondente alla generazione dell'indice. Il primo è -1 perché l'array è 0-based, l'ultimo serve per fare (headers[gen+1]-headers[gen])
	const headers = [-1, 0, 0, 1, 4, 7, 9, 11, 14, 18, cells.lenght];
	// Cerca gli header che corrispondono ai vari giochi. Se non li torva viene utilizzato il default "non mostrare"
	// Bisogna sostituire subito il tick con yes perché su Bulba lo usano a caso
	str = str.replace(new RegExp(String.fromCharCode(10004), 'g'), 'yes')
		.replace(/\{\{[Mm]ovehead\/tutor\/([0-9])([yesno\|]*)\}\}/gi, function (match, gen, yesnos) {
		// Se la generazione ha un solo gioco su Bulba non c'è parametro, lo mostra e basta
		if (headers[gen + 1] - headers[gen] === 1){
			cells[headers[gen]] = '<replace>';
		}
		else {
			const splitted = yesnos.split('|');
			splitted.shift();
			for (let i = 0; i < splitted.length; ++i)
				if (splitted[i] === 'yes')
					cells[headers[gen] + i] = '<replace>';
		}
		return '{{#invoke: Movelist/hf | tutor' + gen + ' ' + yesnos + '}}';
	});

	// Traduzione tipi e intestazioni
	str = macros.forme(str, true);
	str = macros.tipi(str);
	str = intestazioni(str);

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
		.replace(/\{\{[Mm]oveentry\/\d+\|(.+)\}\}/g, function(_, data){
			let ndex;
			// Se c'è lo stab se lo salva
			let stab = data.match(/\|STAB=(\'{0,3})/i);
			stab = stab ? ( '|STAB <- ' + stab[1]) : '';
			// Traduce i parametri vuoti in no
			data = data.replace(/\|(?=\|)/g, '|no')
				.replace(/\|$/g, '|no')

			// Toglie nome, i type, numero di GU e i due GU
				.replace(/\|type2? ?\= ?\w+/g, '')
				.replace(/^([0-9a-zA-Z]+)\|([\w \-'.:]+[^|])\|[12]\|([\w \-]+)\|([\w \-]+)\|/g, function(_, num){
					ndex = num + '|';
					return '';
				})

			// Replace vari
				.replace(/\|$/g, '')

			// Crea la nuova stringa dei tutor: sostituisce i <replace> in cells.join('|') con i parametri che trova in data
			let values = cells.join('|');
			('|' + data).replace(/\|(yes|no)/gi, function(_, p1) {
				values = values.replace('<replace>', p1);
				return '';
			});
			// Any missing trailing parameter is by default a "no"
			values = values.replace(/<replace>/g, 'no');

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