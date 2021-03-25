'use strict';
/**
 * langtable-related macros
 */

(function(utils) {

const macros = utils.macros;

macros['table in langtable'] = function(str) {
	str = str.replace(/{\|[^\n]*style=\"[^\n]*background: ?#(?:{{([\w\s]*) color[\w\s]*}}|{{locationcolor\/\w*\|(\w*))[^\n]*border:[^{]*#(?:{{([\w\s]*) color[\w\s]*}}|{{locationcolor\/\w*\|(\w*))[^\n]*\n(?:\|\-[^\n]*\n)?\![^\n]*Language\n\![^\n]*Name(?:\n\![^\n]*Origin)?/i,
			function (match, t1, t2, t3, t4){
				t1 = t1 || t2;
				t3 = t3 || t4;
				return '{{langtable|type=' + t1 + (t1 === t3 ? '' : '|type2=' + t3)
			})
		.replace('|}', '}}')

	// Copia le righe con più nomi in uno
	while (/\|\-[^\n]*\n\|([\w\s]*)(?:, ?| ?<br> ?)((?:[\w\s,]|<br>)*)\n\|([^\n]*)\n(\|[^-][^\n]*\n)?/g.test(str))
		str = str.replace(/\|\-[^\n]*\n\|([\w\s]*)(?:, ?| ?<br> ?)((?:[\w\s,]|<br>)*)\n\|([^\n]*)\n(\|[^-][^\n]*\n)?/gi, '|-\n|$1\n|$3\n$4|-\n|$2\n|$3\n$4');

	var languages = [['Japanese', 'ja'], ['English', 'en'], ['French', 'fr'], ['German', 'de'], ['Spanish', 'es'], ['Korean', 'ko'], ['Vietnamese', 'vi'],
		['Chinese.*Mandarin[^\\n]*', 'zh_cmn'], ['Chinese.*Cantonese[^\\n]*', 'zh_yue'], ['Italian', 'it'], ['Brazilian Portuguese', 'pt_br'], ['Portuguese', 'pt'],
		['Russian', 'ru'], ['European Spanish', 'es_eu']];
	// Riga semplice, senza rowspan
	for (l in languages)
		str = str.replace(new RegExp('\\|\\-[^\\n]*\\n\\| ?' + languages[l][0] + ' ?\\n\\|([^\\n]*)\\n(?:\\|([^-][^\\n]*)\\n)?', 'i'), function(match, value, meaning) {
			return '|-\n|' + languages[l][1] + '=' + value.replace(/^[ \t][ \t]*/, '') + (meaning ? '|' + languages[l][1] + 'meaning=' + meaning.replace(/^[ \t][ \t]*/, '') + '\n' : '\n');
		});

	return macros.langtable(str.replace(/\|\-\n/g, ''));
};

macros.langtable = function(str) {
	var count = false;
	var rep = function(){
		count = !count;
		if (count)
			return "&lt;div&gt;";
		else
			return "&lt;/div&gt;";
	}

	str = macros.giochi(macros.colori(str));

	str = str.replace(/(<br>|\n)/g, function(match){
			if (match == '<br>')
				return rep();
			else if (match ==  '\n' && count)
				return rep() + '\n';
			else
				return '\n';
		})
		.replace(/''\{\{tt\|([^\|]*)\|[^\|]*\}\}''/gi, "''$1''")
		.replace(/\{\{tt\|\*\|([^\|]*)\}\}/gi, '($1)')

		// se il colore è lo stesso ma in due varianti diverse, indipendentemente da queste usa il parametro type
		.replace(/\|color=\{\{\#invoke\: colore \| ([\w\s\d]*) \| (?:normale|dark|light) \}\}\n?\|bordercolor=\{\{\#invoke\: colore \| \1 \| (?:normale|dark|light) \}\}/gi, '|type=$1')

		.replace(/\{\{Other languages\|/gi, "{{langtable|")
		.replace('TCG', 'GCC')
		.replace(/\[?\[?The Official Pok.mon Handbook\]?\]?/gi, 'Il grande libro ufficiale dei Pok&eacute;mon')
		.replace(/Games/gi, 'giochi')
		.replace(/Pre-Gen VII Media/gi, 'media precedenti alla settima generazione')
		.replace(/Same as (?:its |his |hers )?English name/gi, 'Uguale al nome inglese')
		.replace(/Same as (?:its |his |hers )?Japanese name/gi, 'Uguale al nome giapponese')
		.replace(/Transliteration of (?:its |his |hers )?Japanese name/gi, 'Traslitterazione del nome giapponese')
		.replace(/Transcription of (?:its |his |hers )?English name/gi, 'Trascrizione del nome inglese')
		// Do those two replace really make sense?
		.replace(/Transliteration of (?:its |his |hers )?English name/gi, 'Traslitterazione del nome inglese')
		.replace(/Transcription of (?:its |his |hers )?Japanese name/gi, 'Trascrizione del nome giapponese')

	str = macros.tipi(str);

	// prova ad aggiungere i template delle lingue
	var languages = [['zh_yue', 'yue'], ['zh_cmn', 'cmn'], ['ja', 'j'], ['ko', 'k'], ['el', 'gr'], ['gr', 'gr'], ['hi', 'hi'], ['th', 'th'], ['bg', 'bg'], ['he', 'he'], ['ru', 'ru'], ['sr', 'sr']];
	var regexNonstandardChar = /([^\s\n\u0020-\u017E\u200B\u2714\u01C4-\u0233\u1E00-\u1EFF]+)/g;

	for (lang in languages){
		str = str.replace(new RegExp('\\|' + languages[lang][0] + ' ?=([^|]*)(\\||})'), function(match, data, closing){
				return '|' + languages[lang][0] + '=' +
					data.replace(regexNonstandardChar, '{{' + languages[lang][1] + '|$1}}').replace(/^\s\s*/, '')
					+ closing;
			})
			.replace(new RegExp('\\|' + languages[lang][0] + 'meaning ?=([^|]*)(\\||})'), function(match, data, closing){
				console.log('meaning di', languages[lang][0]);
				return '|' + languages[lang][0] + 'meaning=' +
					data.replace(regexNonstandardChar, '{{' + languages[lang][1] + '|$1}}').replace(/^[ \t][ \t]*/, '')
					+ closing;
			})

		// Unifies calls space-separated
			.replace(new RegExp('{{' + languages[lang][1] + '\\|([^}]*)}}(\\s*){{' + languages[lang][1] + '\\|([^}]*)}}'),
				'{{' + languages[lang][1] + '|$1$2$3}}'
			);
	}

	return str;
};

if (utils.updateMenu) { utils.updateMenu() } ;
}(utils || { macros: {} }));