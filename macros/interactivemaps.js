'use strict';
/**
 * interactive maps-related macros
 */

(function(utils) {

const macros = utils.macros;

macros['lpamap disordinato'] = function(str) {
    return str
        .replace("{{TP/Encabezado/Área LPA}}", "{{InteractiveMap/LPAhead|pcwiki}}")
        .replace("{{TP/Fin}}", "{{InteractiveMap/LPAfoot}}")
        .replace("{{TP/Encabezado/Salvaje LPA|Todo el día}}", "{{InteractiveMap/LPAdiv|sempre}}")
        .replace("{{TP/Encabezado/Salvaje LPA|Por la mañana}}", "{{InteractiveMap/LPAdiv|mattina}}")
        .replace("{{TP/Encabezado/Salvaje LPA|Al mediodía}}", "{{InteractiveMap/LPAdiv|giorno}}")
        .replace("{{TP/Encabezado/Salvaje LPA|Por la tarde}}", "{{InteractiveMap/LPAdiv|sera}}")
        .replace("{{TP/Encabezado/Salvaje LPA|Por la noche}}", "{{InteractiveMap/LPAdiv|notte}}")
        .replace("{{TP/Encabezado/Salvaje LPA|En árboles (todo el día)}}", "{{InteractiveMap/LPAdiv|alberi}}")
        .replace("{{TP/Encabezado/Salvaje LPA|En rocas (todo el día)}}", "{{InteractiveMap/LPAdiv|rocce}}")
        .replace("{{TP/Encabezado/Salvaje LPA|En distorsiones (todo el día)}}", "{{InteractiveMap/LPAdiv|distorsioni}}")
        .replace(/\{\{TP\/Encabezado\/Salvaje LPA\|[^}]+\}\}/g, "AAAAAAAAAAAAAAAAAAAAAAA")
        // Principal rows
        // Done before because the general processing introduces a %
        .replace(/\{\{TP\/Entrada LPA\|[^}]*\|principal\s*=\s*1\s*(?:\|[^}]*}}|}})/g, function(row) {
            // Assumption: no template calls with params inside a row
            const args = row.split("|");
            return args.map(x => x.includes("%") ? "{{yes}}" : (x === "-" ? "{{no}}" : x)).join("|");
        })
        // All rows
        .replace(/\{\{TP\/Entrada LPA\|/g, "{{InteractiveMap/LPArow|")
        .replace(/(\{\{InteractiveMap\/LPArow\|[^}|]*\|[^}|]*\|)([\d\/]+)(\|[^}]*}}|}})/g, function(_, pref, param, suff) {
            let perc;
            if (param.includes("/")) {
                const tmp = param.split("/").map(x => parseInt(x))
                perc = (100 * tmp[0] / tmp[1]).toLocaleString('it-IT',{minimumFractionDigits:0, maximumFractionDigits:1});
            }
            else { // is 0
                perc = "0";
            }
            return pref + perc + "%" + suff;
        })
        .replace(/\|Último = Sí/g, "")
        ;
};

if (utils.updateMenu) { utils.updateMenu() } ;
}(utils || { macros: {} }));