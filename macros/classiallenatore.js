'use strict';
/**
 * classi allenatore-related macros
 */

(function(utils) {

const macros = utils.macros;

macros['classi allenatore VI'] = function(str) {
	return str.replace(/Pokémon Breeder/gi, 'Allevapokémon')
		.replace(/Bird Keeper/gi, 'Avicoltore')
		.replace(/Beauty/gi, 'Bellezza')
		.replace(/Kindler/gi, 'Brandifuoco')
		.replace(/Youngster/gi, 'Bullo')
		.replace(/Camper/gi, 'Campeggiatore')
		.replace(/Collector/gi, 'Cerca Pokémon')
		.replace(/Guitarist/gi, 'Chitarrista')
		.replace(/Tuber/gi, 'Ciambellino e Ciambellina')
		.replace(/Black Belt/gi, 'Cinturanera')
		.replace(/Battle Girl/gi, 'Combat Girl')
		.replace(/Old Couple/gi, 'Coppiarzilla')
		.replace(/Young Couple/gi, 'Coppietta')
		.replace(/Dragon Tamer/gi, 'Domadraghi')
		.replace(/Brains & Brawn/gi, 'Duo Braccio e Mente')
		.replace(/Rich Boy/gi, 'Elegantone')
		.replace(/Ace Duo/gi, 'Fantaduo')
		.replace(/Ace Trainer/gi, 'Fantallenatore e Fantallenatrice')
		.replace(/Sis and Bro/gi, 'Fratellini')
		.replace(/Twins/gi, 'Gemelle')
		.replace(/Monsieur/gi, 'Gentiluomo')
		.replace(/Backpacker/gi, 'Giramondo')
		.replace(/Bug Maniac/gi, 'Insettologo')
		.replace(/Sailor/gi, 'Marinaio')
		.replace(/Hiker/gi, 'Montanaro')
		.replace(/Swimmer/gi, 'Nuotatore e Nuotatrice')
		.replace(/Parasol Lady/gi, 'Ombrellina')
		.replace(/Fisherman/gi, 'Pescatore')
		.replace(/Free Diver/gi, 'Pescatrice di Perle')
		.replace(/Picnicker/gi, 'Picnic Girl')
		.replace(/Bug Catcher/gi, 'Pigliamosche')
		.replace(/PokéFan/gi, 'Pokéfan')
		.replace(/Poké Maniac/gi, 'Pokéfanatico')
		.replace(/Aroma Lady/gi, 'Profumina')
		.replace(/Lass/gi, 'Pupa')
		.replace(/Fairy Tale Girl/gi, 'Ragazza delle fiabe')
		.replace(/Team Aqua Grunt/gi, 'Recluta Team Idro')
		.replace(/Team Magma Grunt/gi, 'Recluta Team Magma')
		.replace(/Interviewers/gi, 'Reporter')
		.replace(/Ruin Maniac/gi, 'Scoprirovine')
		.replace(/Teammates/gi, 'Senior & Junior')
		.replace(/Psychic/gi, 'Sensitivo')
		.replace(/Myterious Sisters/gi, 'Sorelle Mistero')
		.replace(/Expert/gi, 'Specialista')
		.replace(/Hex Maniac/gi, 'Streghetta')
		.replace(/School Kid/gi, 'Studente e Studentessa')
		.replace(/Scuba Diver/gi, 'Sub')
		.replace(/Street Thug/gi, 'Tipaccio')
		.replace(/Delinquent/gi, 'Tipaccia')
		.replace(/Triathlete/gi, 'Triatleta');
};

macros['classi allenatore'] = macros['classi allenatore VI'];

macros['trainerlist ROZA'] = function(str) {
	str = macros['strumenti lotta'](str);
	str = macros['classi allenatore VI'](str);

	// Traduzione dei template
	return str.replace(/\{\{trainer([a-z]+)\|/gi, '{{Trainerlist/$1|')
	// sprite names
		.replace(/\|VS([a-zé\s]+)\.png/gi, '|ROZA VS$1.png')
		.replace(/ ?oras ?/gi, '')
	//rematches
		.replace(/After acquiring the \{\{badge\|([a-z]+)\}\}/gi, 'Dopo aver ottenuto la {{medaglia|$1}}')
		.replace(/After entering the \[\[Hall of Fame\]\]/g, "Dopo essere entrati nella [[Sala d'onore]]")
	//per sistemare la visualizzazione html
		.replace(/é/g, '&eacute;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
};

if (utils.updateMenu) { utils.updateMenu() } ;
}(utils || { macros: {} }));