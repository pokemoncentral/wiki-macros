'use strict';
/**
 * Macros to translate a learnlist template call to a learnlist module call
 */

(function(utils) {

const macros = utils.macros;

macros['learnlist template 1-2'] = function(str) {
    if (!str.includes("__NOTOC__")) {
        str = "__NOTOC__\n" + str;
    }

    return str
        .replace(/{{Learnlist\/(\w+)h\|([^|]+)\|(\w+)\|(\w+)\|(\d)\|(\d)\s*(\|[^}]+)?}}/gi,
            "{{#invoke: learnlist/hf | $1h | $2 | $3 | $4 | $5 | $6 }}\n{{#invoke: render | render | Modulo:Learnlist/entry$5 | $1 | //")
        .replace(/{{Learnlist\/(\w+)f\|([^|]+)\|(\w+)\|(\w+)\|(\d)\|(\d)\s*(\|[^}]+)?}}/gi,
            "}}\n{{#invoke: learnlist/hf | $1f | $2 | $3 | $4 | $5 | $6 }}")
        .replace(/{{Learnlist\/(\w+)f\|([^|]+)\|(\w+)\|(\w+)\|(\d)\s*(\|[^}]+)?}}/gi,
            "}}\n{{#invoke: learnlist/hf | $1f | $2 | $3 | $4 | $5 }}")
        // Of course breed is fucked up
        .replace(/{{MS\|(\d{3}[A-Za-z]*)\|[^}]+}}/g, "#$1#")
        .replace(/{{[Aa]ni\|(\d{3}[A-Za-z]*)\|[^}]+}}/g, "#$1#")
        .replace(/{{#invoke:\s*MiniSprite\s*\|[\w\s]+\|\s*(\d{3}[A-Za-z]*)[^}]+}}/g, "#$1#")
        .replace(/{{[Ll]earnlist\/\w+\d\|([^}]*)}}/g, "|$1| //")
        // This replacement happens after the others, so it can remove the render call
        .replace(/{{#invoke: render \| render \| Modulo:Learnlist\/entry\d \| \w+ \| \/\/\n?{{[Ll]earnlist\/(\w+)(\d)null}}\s*}}/g,
            "{{#invoke: learnlist/entry$2 | $1null }}")
        .replace(/\b([cC])oleot\b/g, "$1oleottero")
    ;
};

const gen34games = ["RZ", "S", "RZS", "RFVF", "DP", "Pt", "DPPt", "HGSS", "PtHGSS"];
const moduleparams = { 3: ["RZS", "RFVF"], 4: ["DP", "Pt", "HGSS"], 0: [] };

macros['learnlist template 3-4'] = function(str) {
    // Basically I have to parse shit for levels to work
    // Count the number of level headers: if more than 1, warn the user (the translation will be fucked)
    const num_level = (str.match(/{{Learnlist\/levelh\|([^|]+)\|(\w+)\|(\w+)\|[34]\|[1-4]}}/gi) || []).length;
    if (num_level >= 2) {
        alert(`Found ${num_level} level learnlists, the translation for levels will be fucked up. Do it manually or ask Ff300`);
    }
    else if (num_level === 1) {
        let gen = 0;
        // Parse all level entries it finds
        // console.log("============ Regex matching ============");
        const level_entries = Array.from(
            str.matchAll(/{{learnlist\/level([34])\|(\w+)\|([^|]+)\|([^}]*)\|([^}|]*)}}/gi),
            ([whole, local_gen, level, movename, rest, last_param]) => {
                // {{learnlist/level4|Inizio|Palla Clima|Normale|Speciale|50|100|10|Acume|2|||HGSS}}
                // {{Learnlist/level3|22|Raffica|Volante|40|100|35|Acume|3|0||'''|RFVF}}
                if (gen === 0) {
                    gen = local_gen;
                }
                else {
                    console.assert(local_gen === gen, `Wait: gen doesn't match: local_gen (${local_gen}) !== gen (${gen})`, whole);
                }
                let game = "";
                // Check if the last param is the game
                if (gen34games.includes(last_param)) {
                    game = last_param;
                }
                else {
                    rest += "|" + last_param;
                }
                // console.log(whole, game, rest);
                return [level, movename, rest, game];
            }
        );
        // console.log(level_entries);
        // console.log("============ Merging moves ============");
        // Merge level entries for same move
        let entries = {};
        for (const entry of level_entries) {
            const [level, movename, rest, game] = entry;
            const cleaned_rest = rest.replace(/\|+$/, "");
            entries[movename] = entries[movename] || {
                movename: movename,
                rest: cleaned_rest,
                levels: [],
            };
            console.assert(entries[movename].rest === cleaned_rest, entries[movename], cleaned_rest);
            entries[movename].levels.push([level, game]);
        };
        // console.log(entries);

        // console.log("============ Grouping levels ============");
        const entries_arr = [];
        for (const [movename, entry] of Object.entries(entries)) {
            const levels = entry.levels;
            // Algorithm to group different games: first adds rows which are
            // shared among all games, then sorts and matches the others.

            // Since we already have games which share the level, we get those out of the way
            for (const [lvl, local_game] of levels) {
                if (local_game === "") {
                    const e = Array(moduleparams[gen].length).fill(lvl);
                    e.push(movename);
                    e.push(entry.rest);
                    entries_arr.push(e);
                }
            }

            // For every game, get all the (other) levels at which the Pokémon can learn the move in that game
            const games2levels = {};
            for (const game of moduleparams[gen]) {
                games2levels[game] = levels
                    // This filter never matches for local_game === ""
                    .filter(([_, local_game]) => local_game.includes(game))
                    .map(([lvl, _]) => lvl);
            }
            // console.log(movename, games2levels);
            // Now it just scan the arrays together
            for (let i = 0; i < Math.max(...Object.values(games2levels).map(v => v.length)); ++i) {
                const e = moduleparams[gen].map(g => games2levels[g][i] || "&mdash;");
                e.push(movename);
                e.push(entry.rest);
                entries_arr.push(e);
            }
        }
        // console.log(entries_arr);

        // Sort the entries
        // console.log("============ Sorting ============");
        const sort_idx = moduleparams[gen].length - 1;
        const sort_val = (lvl) => lvl === "Inizio" ? 1 : lvl === "&mdash;" ? 101 : parseInt(lvl);
        entries_arr.sort((a, b) => sort_val(a[sort_idx]) - sort_val(b[sort_idx]));
        // console.log(entries_arr);

        // Print the entries: it replaces a single learnlist/level with the whole body, then removes all the others
        // console.log("============ Printing ============");
        const output = entries_arr.map(e => "|" + e.join("|")).join("| //\n") + "| //";
        str = str
            .replace(/{{learnlist\/level([34])\|(\w+)\|([^|]+)\|([^}]*)\|([^}|]*)}}/i, output)
            .replace(/{{learnlist\/level([34])\|(\w+)\|([^|]+)\|([^}]*)\|([^}|]*)}}\n?/gi, "");
    }

    str = macros['learnlist template 1-2'](str);
    return str;
};


if (utils.updateMenu) { utils.updateMenu() } ;
}(utils || { macros: {} }));