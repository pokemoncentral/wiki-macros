'use strict';
/**
 * Macros to translate a learnlist template call to a learnlist module call
 */

(function(utils) {

const macros = utils.macros;

macros['learnlist template'] = function(str) {
    return str
        .replace(/{{Learnlist\/(\w+)h\|([^|]+)\|(\w+)\|(\w+)\|(\d)\|(\d)}}/gi,
            "{{#invoke: learnlist/hf | $1h | $2 | $3 | $4 | $5 | $6 }}\n{{#invoke: render | render | Modulo:Learnlist/entry$5 | $1 | //")
        .replace(/{{Learnlist\/(\w+)f\|([^|]+)\|(\w+)\|(\w+)\|(\d)\|(\d)}}/gi,
            "}}\n{{#invoke: learnlist/hf | $1f | $2 | $3 | $4 | $5 | $6 }}")
        // Of course breed is fucked up
        .replace(/{{MS\|(\d{3})\|[^}]+}}/g, "#$1#")
        .replace(/{{[Ll]earnlist\/\w+\d\|([^}]*)}}/g, "|$1| //")
        // This replacement happens after the others, so it can remove the render call
        .replace(/{{#invoke: render \| render \| Modulo:Learnlist\/entry\d \| \w+ \| \/\/\n{{learnlist\/(\w+)(\d)null}}\s*\n}}/g,
            "{{#invoke: learnlist/entry$2 | $1null }}")
    ;
};

if (utils.updateMenu) { utils.updateMenu() } ;
}(utils || { macros: {} }));