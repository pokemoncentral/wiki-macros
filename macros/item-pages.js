'use strict';
/**
 * Macros to help translate item pages
 */

(function(utils) {

const macros = utils.macros;

macros["pagine strumenti"] = function(str) {
    return macros.langtable(
        macros.tasche(
        macros.itemtemplates(
        macros.iteminfobox(
    str))));
}

const ordinals = {
    I: '1', II: '2', III: '3', IV: '4', V: '5', VI: '6',
    VII: '7', VIII: '8', IX: '9',
};

macros.tasche = function(str) {
    return str
        .replace(/key items/gi, "Strumenti base")
        .replace(/items/gi, "Strumenti")
        .replace(/z-crystals/gi, "Cristalli Z")
        .replace(/ingredients/gi, "Ingredienti")
        .replace(/treasures/gi, "Tesori")
}

macros.iteminfobox = function(str) {
    // Identify the template. Better to be precise because on Bulba is made of
    // several non-nested subtemplates call
    const begin = str.indexOf("{{ItemInfobox/head");
    const end = str.indexOf("|}", begin);
    let templ = str.substring(begin, end);
    // templ doesn't contain the closing "|}"
    templ = templ
        .replace("{{ItemInfobox/head", "{{ItemInfobox")
        .replace(/\|name=([^|]+)\|/, "|name=\n|engname=$1|engtans=\n|")
        .replace(/\|art=([^|]+)/, "")
        .replace(/\|sprite2=([^|]+)/, "")
        .replace(/\|jtrans=([^|]+)\|/, "|jrom=\n|jtrans=$1|")
        .replace(/\|gen=([IVX]+)\n?(\||})/, function(_, genord, closing) { return "|gen=" + ordinals[genord] + "\n" + closing; })
        .replace(/\|colorscheme=[^|}]+\n?(\||})/, "$1")
        .replace(/\|fling=[a-zA-Z]+\n?(\||})/, "$1")
        // bag rows
        .replace(/{{ItemInfobox\/BagRow(?:Bottom)?\|([IVX]+)\|([a-zA-Zé0-9- ]+)(?:\|[^}]*)?}}/g, function(_, genord, pocket) {
            return "|bag" + ordinals[genord] + "=" + macros.tasche(pocket);
        })
        // fling
        .replace(/{{ItemInfobox\/Fling\|(\d+)\|colorscheme=[^}]*}}/, "|fling=$1")
        // Remove the }} closing the ItemInfobox/head
        .replace("}}\n", "");

    return str.substring(0, begin) + templ + "}}" + str.substring(end + 2);
};

macros.itemtemplates = function(str) {
    str = str
    // ItemPrice
        .replace(/N\/A/g, "-")
        .replace(/{{ItemPrice\|/g, "{{ItemPrice/Row|")
        .replace(/\|{{PDollar}}([\d,.]+)(?:\||})/g, "|$1$2")
        // twice because the pipes around may be shared
        .replace(/\|{{PDollar}}([\d,.]+)(?:\||})/g, "|$1$2")
    // ItemDescription
        .replace(/{{movedesc\|/, "{{ItemDescription/head|")
        .replace(/{{movedescentry\|/, "{{ItemDescription/row|")
    // ItemAvailability
        // TODO
        ;

    str = macros.tasche(str);

    return str;
}

// macros.colori = function(str) {
// 	str = str.replace(/color buio/gi, 'color dark');
// 	var matches = /\{\{([\s\w]+) color\s?[dark|light]?\}\}/gi.exec(str);
// 	str = str.replace(/\{\{([\s\w]+) color\s?((dark|light))?\}\}/gi,
// 		'{{#invoke: colore | $1 | $2 }}')
// 		.replace(/(\{\{#invoke: colore \| .+? )\|\s*\}\}/gi, '$1| normale }}');
// 	if (matches && matches.length)
// 		for (var k = 1; k < matches.length; ++k)
// 			str = str.replace(matches[k], matches[k].replace(/\s/g, '_'));
// 	return str;
// };

// macros['nature'] = function(str) {
// 	return str.replace(/Hardy/g, 'Ardita')
// 		.replace(/Lonely/g, 'Schiva')
// 		.replace(/Brave/g, 'Audace')
// 		.replace(/Adamant/g, 'Decisa')
// 		.replace(/Naughty/g, 'Birbona')
// 		.replace(/Decisa Orb/g, 'Adamant Orb')
// 		.replace(/Fiacca Incense/g, 'Lax Incense')
// 		.replace(/Calma Mind/g, 'Calm Mind')
// };

if (utils.updateMenu) { utils.updateMenu() } ;
}(utils || { macros: {} }));