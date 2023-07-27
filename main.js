'use strict';
/**
 * Main js entry point.
 *
 * Since scripts loading is asyncronous, files can be loaded in any
 * order. This means that files that define functions can't assume
 * any specific file is already loaded, included this one.
 * The idea to handle this is the following: there is one implicit global
 * array, passed to every file, that contains all macros. All files
 * just push their macros to this array, then try to call a callback
 * defined in this file thatactually updates the HTML and so on. If this
 * is not defined, they just skip this step. Moreover this file, after
 * defining such callback also calls it once, to ensure all macros in
 * array are correctly loaded in the page.
 *
 * I'm positive this solution works in any loading order, but since
 * I don't have fine-grained concurrency control I'm not completely sure.
 */

// actually I've a global object utils, with an array macros
(function(utils) {
    /**
     * Preparazione alla traduzione; elimina i template p
     * e formatta i character references in modo che non
     * siano interpretati dai browser
     */
    utils.opening = function(str) {
        return str
            .replace(/\{\{p\|(.+?)\}\}/g, '[[$1]]')
            .replace(/&(\w+);/g, '&amp;$1;');
    };

    /**
     * Completamento della traduzione: sostituisce i
     * newline con breakline per farli interpretare
     * dai browser, limitando a due il numero di
     * quelli consecutivi
     */
    utils.tooutput = function(str) {
        return str
            .replace(/\n{2,}/g, '<br /><br />')
            .replace(/\n/g, '<br />');
    };

    /**
     * Traduzione verso clipboard: sostituisce (alcune) html entities con i
     * rispettivi caratteri.
     */
    utils.toclipboard = function(str) {
        return str
            .replace(/&agrave;/g, "à")
            .replace(/&ugrave;/g, "ù")
            .replace(/&egrave;/g, "è")
            .replace(/&eacute;/g, "é")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&igrave;/g, 'ì')
            // This must be last
            .replace(/&amp;/g, "&")
        ;
    }

    /**
     * Runs a macro
     */
    utils.runMacro = function() {
        // Recupero della macro selezionata
        let macro = utils.menu.selectedOptions[0].value;

        // Applicazione della macro
        const result = utils.macros[macro](utils.opening(utils.textarea.value));
        utils.output.innerHTML = utils.tooutput(result);

        // Copia del risultato
        navigator.clipboard.writeText(utils.toclipboard(result)).then(
            () => {
                utils.copyresult.textContent = "Copiato con successo!";
                if (utils.classList) {
                    utils.classList.remove("text-red");
                }
            },
            () => {
                utils.copyresult.textContent = "Copia fallita :(";
                utils.classList.add("text-red");
            },
        );
    };

    document.getElementsByTagName('button')[0].onclick = utils.runMacro;

    /**
     * Creazione delle entries del menu sulla base
     * delle funzione di replacing precedentemente definite
     */
    utils.updateMenu = function() {
        // Clear menu options before adding them again
        while (utils.menu.options.length > 0) {
            utils.menu.remove(utils.menu.options.length - 1);
        }
        for (const k in utils.macros) {
            const option = document.createElement('option');
            option.setAttribute('value', k);
            option.appendChild(document.createTextNode('Traduci ' + k));
            utils.menu.appendChild(option);
        }
    };

    utils.menu = document.getElementsByTagName('select')[0];
    utils.output = document.getElementById('output');
    utils.textarea = document.getElementsByTagName('textarea')[0];
    utils.copyresult = document.getElementById('copy-result');

    utils.updateMenu();

    return utils;
}(utils || { macros: {} }));
