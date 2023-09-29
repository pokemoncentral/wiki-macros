"use strict";
/**
 * learnlists and movelists-related macro
 *
 * Since new learnlists and movelists are handled automagically
 * there should be no need to update this file
 */

(function (utils) {
  const macros = utils.macros;

  macros.intestazioni = function (str, type) {
    var customTrans = {
      learnset: {
        learnlist: "==Mosse apprese==",
        movelist: "==Apprendimento==",
      },
    };

    var tmHeading =
      str.indexOf("h/7") == -1
        ? "==Tramite [[MT]]/[[MN]]=="
        : "==Tramite [[MT]]==";

    return str
      .replace(/TM(\d{2,3})/g, "MT$1")
      .replace(/HM(\d{2,3})/g, "MN$1")
      .replace(/==[Ll]earnset==/g, customTrans.learnset[type])
      .replace(
        /==\[\[Dream World\]\]\-only moves==/g,
        "==Mosse esclusive del {{pkmn|Dream World}}==",
      )
      .replace(
        /==\{\{pkmn\|Dream World\}\}\-only moves==/g,
        "==Mosse esclusive del {{pkmn|Dream World}}==",
      )
      .replace(
        /==By \[\[[Ll]evel\|leveling up\]\]==/g,
        "==Aumentando di [[livello]]==",
      )
      .replace(/==By \[\[TM\]\]\/\[\[HM\]\]==/g, tmHeading)
      .replace(/==By \[\[TM\]\]==/g, "==Tramite [[MT]]==")
      .replace(/==By \[\[HM\]\]==/g, "==Tramite [[MN]]==")
      .replace(
        /==By \{\{pkmn\|breeding\}\}==/g,
        "==Tramite [[Accoppiamento Pok&eacute;mon|accoppiamento]]==",
      )
      .replace(
        /==By \[\[[Mm]ove [Tt]utor(\|tutoring)?\]\]==/g,
        "==Dall'[[Insegnamosse]]==",
      )
      .replace(
        /==By \{\{pkmn2\|event\}\}s==/g,
        "==Tramite [[Evento Pok&eacute;mon|eventi]]==",
      )
      .replace(/==Speciale? moves?==/g, "==Mosse speciali==")
      .replace(
        /==By a prior \[\[evolution\]\]==/g,
        "==Tramite [[evoluzione|evoluzioni]] precedenti==",
      )
      .replace(
        /==\{\{Trading Card Game\}\}\-only moves==/g,
        "==Mosse apprese solamente nel [[Gioco di Carte Collezionabili Pok&eacute;mon|GCC]]==",
      );
  };

  macros.learnlist = function (str) {
    // Traduzione mosse, tipi, gare, intestazioni, sigle giochi

    str = macros.mosse(str);
    str = macros.gare(str);
    str = macros.tipi(str);
    str = macros.intestazioni(str, "learnlist");
    str = macros.giochi(str, false);

    // Traduzione learnlist vero e proprio

    // Entry: traduzione numeri romani --> cifre arabe

    return (
      str
        .replace(
          /\{\{learnlist\/([^V\|]+)([VI]+)/g,
          function (str, method, roman) {
            var numbers = {
              I: "1",
              II: "2",
              III: "3",
              IV: "4",
              V: "5",
              VI: "6",
              VII: "7",
              VIII: "8",
            };
            return "{{learnlist/" + method + numbers[roman];
          },
        )

        // Headers in doppio formato:
        // 		- {{learnlist/<method>h/<genheader>|<type1>|<type2>|<genpoke>|etc}} e
        // 		- {{learnlist/<method>h|<type1>|<type2>|<genheader>|<genpoke>|etc}}

        .replace(
          /\{\{[Ll]earnlist\/(\w+)h\|(.+)\|(\d)\|(\d)\|?.*?\}\}/g,
          "{{#invoke: learnlist/hf | $1h|$2|$3|$4}}<br>{{#invoke: Render | entry | learnlist/entry$3.$1 |",
        )
        .replace(
          /\{\{[Ll]earnlist\/(\w+)h\/(\d)\|(.+)\|(\d)\|?.*?\}\}/g,
          "{{#invoke: learnlist/hf | $1h|$3|$2|$4}}<br>{{#invoke: Render | entry | learnlist/entry$2.$1 |",
        )

        /*
		Entry: inserimento di un carattere di rimando al footer
		per le mosse imparate all'evoluzione.
	*/
        .replace(/\{\{tt\|\*\|.+evolving\}\}/g, "&amp;#x2670;")

        // Entry: MT e MN, Mini Sprite, N/A, Start, sup XY ORAS, fixing Evo., eliminazione tt

        .replace(/\{\{[Ll]earnlist\/tm(\d)\|TM/g, "{{learnlist/tm$1|MT")
        .replace(/\{\{[Ll]earnlist\/tm(\d)\|HM/g, "{{learnlist/tm$1|MN")
        .replace(/\{\{[Ll]earnlist\/tr\|TR/g, "{{learnlist/tm1|DT")
        .replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}(?:<br\/?>)?/g, "#$1#")
        .replace(/N\/A/g, "Assente")
        .replace(/Start/g, "Inizio")
        .replace(/\{\{sup\/6\|(XY|ROZA)\}\}/g, "$1")
        .replace(/\{\{tt\|[Ee]vo\.?\|[^|}]*\}\}|Evo\.?/g, "Evo")
        .replace(/\{\{tt\|.+\|(.+?)\}\}/g, "$1")

        // Entry: traduzioni generiche

        .replace(
          /\{\{[lL]earnlist\/(\w+)(\d)\|(.+)\|?\}\}/g,
          function (str, method, gen, args) {
            // Raddoppiamento livelli se non lo sono già
            /*if (gen > 4 && method == 'level' &&
				args.search(/^(Inizio|Assente|\d{1,3})\|(Inizio|Assente|\d{1,3})\|/) == -1)
				return '[[&euro;' + args.replace(/^(Inizio|\d{1,3})\|/, '$1|$1|')
					+ '&pound;]]|';*/

            return "[[&euro;" + args + "&pound;]]|";
          },
        )

        // Sostituzione del livello 1 con Inizio

        .replace(/&euro;1\|/g, "&euro;Inizio|")
        .replace(/&euro;(Inizio|Assente|\d{1,3})\|1\|/g, "&euro;$1|Inizio|")

        // Footer in doppio formato:
        // 		- {{learnlist/<method>f/<footergen>|etc}}
        // 		- {{learnlist/<method>f|etc}}

        .replace(
          /\{\{[lL]earnlist\/(\w+)f\/(\d)\|(.+)\|(\d)(.*?)\}\}/g,
          function (str, method, genf, args, genp, otherArgs) {
            return (
              "}}<br>{{#invoke: learnlist/hf | " +
              method +
              "f|" +
              args +
              "|" +
              genf +
              "|" +
              genp +
              (otherArgs.search("xy=") == -1 ? otherArgs : "") +
              "}}"
            );
          },
        )
        .replace(
          /\{\{[lL]earnlist\/(\w+)f(.+?)\}\}/g,
          "}}<br>{{#invoke: learnlist/hf | $1f$2}}",
        )

        // Footer: inserimento della generazione del footer se non presente, assumendo la settima

        .replace(
          /\{\{#invoke: learnlist\/hf \| (\w+)f([^0-9]+)\|(\d)\}\}/gi,
          "{{#invoke: learnlist/hf | $1f$2|8|$3}}",
        )

        // Entry: traduzione null

        .replace(
          /\{\{[lL]earnlist\/(\w+)(\d)null\}\}\n?\}\}/g,
          "{{#invoke: learnlist/entry$2 | $1null}}",
        )

        // Traduzione psichico|psichico in header e footer

        // str = str.replace(/€(.+)[Pp]sichico\|[Pp]sichico\|(.+)£/g, '€$1Psichico|Psico$2£');

        .replace(
          /[Ll]earnlist(.+)\|[Pp]sichico\|[Pp]sichico(.+)\}\}/g,
          "learnlist$1|Psico|Psico$2}}",
        )
        .replace(
          /[Ll]earnlist(.+)\|[Pp]sichico(.+)\}\}/g,
          "learnlist$1|Psico$2}}",
        )

        // Eliminazione chiamata al modulo Render per gli entry null

        .replace(
          /\{\{#invoke: Render \| entry \| learnlist\/entry\d\.\w+ \|\n(\{\{.+null\}\})/g,
          "$1",
        )

        // Eliminazione del parametro STAB e form e aggiustamenti sintattici

        .replace(/STAB=/g, "")
        .replace(/form=[^\|£]+\|?(.*?)£/g, "$1£")
        .replace(/\}\}&pound;\]\]/g, "&pound;]]}}")
        .replace(/\|?\n?\}\}\|?/g, "}}")
        .replace(/STAB prior to (Gen [0-9IV]+)/gi, function (str, gen) {
          return "Gode di STAB prima della " + macros.generazioni(gen);
        })

        // Eliminazione dei dati della mossa, recuperati in automatico dal modulo

        .replace(
          /[^\|]*\|(Fisico|Stato|Speciale)\|[^\|]*\|[^\|]*\|[^\|&]*\|?/g,
          "",
        )

        // Sorting parameters according to our module
        .replace(
          /\[\[\&euro;(\w*)\|([^|]*)\|?([^|]*)?\|?('*)?\&pound;\]\](\||\})/g,
          function (str, level, move, notes = "", stab = "", close) {
            return (
              "[[&euro;" +
              move +
              "|" +
              stab +
              "|" +
              notes +
              "|" +
              level +
              "&pound;]]" +
              close
            );
          },
        )
    );
  };

  macros["learnlist settima"] = function (str) {
    // Traduzione mosse, tipi, gare, intestazioni, sigle giochi

    str = macros.mosse(str);
    str = macros.gare(str);
    str = macros.tipi(str);
    str = macros.intestazioni(str, "learnlist");
    str = macros.giochi(str, false);

    // Traduzione learnlist vero e proprio

    // Entry: traduzione numeri romani --> cifre arabe

    return (
      str
        .replace(
          /\{\{learnlist\/([^V\|]+)([VI]+)/g,
          function (str, method, roman) {
            var numbers = {
              I: "1",
              II: "2",
              III: "3",
              IV: "4",
              V: "5",
              VI: "6",
              VII: "7",
            };
            return "{{learnlist/" + method + numbers[roman];
          },
        )

        // Headers in doppio formato:
        // 		- {{learnlist/<method>h/<genheader>|<type1>|<type2>|<genpoke>|etc}} e
        // 		- {{learnlist/<method>h|<type1>|<type2>|<genheader>|<genpoke>|etc}}

        .replace(
          /\{\{[Ll]earnlist\/(\w+)h\|(.+)\|([1-7])\|([1-7])\|?.*?\}\}/g,
          "{{#invoke: learnlist/hf | $1h|$2|$3|$4}}<br>{{#invoke: Render | entry | learnlist/entry$3.$1 |",
        )
        .replace(
          /\{\{[Ll]earnlist\/(\w+)h\/([1-7])\|(.+)\|([1-7])\|?.*?\}\}/g,
          "{{#invoke: learnlist/hf | $1h|$3|$2|$4}}<br>{{#invoke: Render | entry | learnlist/entry$2.$1 |",
        )

        /*
		Entry: inserimento di un carattere di rimando al footer
		per le mosse imparate all'evoluzione.
	*/
        .replace(/\{\{tt\|\*\|.+evolving\}\}/g, "&amp;#x2670;")

        // Entry: MT e MN, Mini Sprite, N/A, Start, sup XY ORAS, eliminazione tt

        .replace(/\{\{[Ll]earnlist\/tm([1-7])\|TM/g, "{{learnlist/tm$1|MT")
        .replace(/\{\{[Ll]earnlist\/tm([1-7])\|HM/g, "{{learnlist/tm$1|MN")
        .replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}(?:<br\/?>)?/g, "#$1#")
        .replace(/N\/A/g, "Assente")
        .replace(/Start/g, "Inizio")
        .replace(/\{\{sup\/6\|(XY|ROZA)\}\}/g, "$1")
        .replace(/\{\{tt\|[Ee]vo\.?\|[^|}]*\}\}|Evo\.?/g, "Evo")
        .replace(/\{\{tt\|.+\|(.+?)\}\}/g, "$1")

        // Entry: traduzioni generiche

        .replace(
          /\{\{[lL]earnlist\/(\w+)([1-7])\|(.+)\|?\}\}/g,
          function (str, method, gen, args) {
            // Raddoppiamento livelli se non lo sono già
            if (
              gen > 4 &&
              method == "level" &&
              args.search(
                /^(Inizio|Assente|Evo|Evoluzione|\d{1,3})\|(Inizio|Assente|Evo|Evoluzione|\d{1,3})\|/,
              ) == -1
            )
              return (
                "[[&euro;" +
                args.replace(/^(Inizio|Evo|Evoluzione|\d{1,3})\|/, "$1|$1|") +
                "&pound;]]|"
              );

            return "[[&euro;" + args + "&pound;]]|";
          },
        )

        // Sostituzione del livello 1 con Inizio

        .replace(/&euro;1\|/g, "&euro;Inizio|")
        .replace(/&euro;(Inizio|Assente|\d{1,3})\|1\|/g, "&euro;$1|Inizio|")

        // Footer in doppio formato:
        // 		- {{learnlist/<method>f/<footergen>|etc}}
        // 		- {{learnlist/<method>f|etc}}

        .replace(
          /\{\{[lL]earnlist\/(\w+)f\/([1-7])\|(.+)\|([1-7])(.*?)\}\}/g,
          function (str, method, genf, args, genp, otherArgs) {
            return (
              "}}<br>{{#invoke: learnlist/hf | " +
              method +
              "f|" +
              args +
              "|" +
              genf +
              "|" +
              genp +
              (otherArgs.search("xy=") == -1 ? otherArgs : "") +
              "}}"
            );
          },
        )
        .replace(
          /\{\{[lL]earnlist\/(\w+)f(.+?)\}\}/g,
          "}}<br>{{#invoke: learnlist/hf | $1f$2}}",
        )

        // Footer: inserimento della generazione del footer se non presente, assumendo la settima

        .replace(
          /\{\{#invoke: learnlist\/hf \| (\w+)f([^1-7]+)\|([1-7])\}\}/gi,
          "{{#invoke: learnlist/hf | $1f$2|7|$3}}",
        )

        // Entry: traduzione null

        .replace(
          /\{\{[lL]earnlist\/(\w+)(\d)null\}\}\n?\}\}/g,
          "{{#invoke: learnlist/entry$2 | $1null}}",
        )

        // Traduzione psichico|psichico in header e footer

        // str = str.replace(/€(.+)[Pp]sichico\|[Pp]sichico\|(.+)£/g, '€$1Psichico|Psico$2£');

        .replace(
          /[Ll]earnlist(.+)\|[Pp]sichico\|[Pp]sichico(.+)\}\}/g,
          "learnlist$1|Psico|Psico$2}}",
        )
        .replace(
          /[Ll]earnlist(.+)\|[Pp]sichico(.+)\}\}/g,
          "learnlist$1|Psico$2}}",
        )

        // Eliminazione chiamata al modulo Render per gli entry null

        .replace(
          /\{\{#invoke: Render \| entry \| learnlist\/entry\d\.\w+ \|\n(\{\{.+null\}\})/g,
          "$1",
        )

        // Eliminazione del parametro STAB e form e aggiustamenti sintattici

        .replace(/STAB=/g, "")
        .replace(/form=[^\|£]+\|?(.*?)£/g, "$1£")
        .replace(/\}\}&pound;\]\]/g, "&pound;]]}}")
        .replace(/\|?\n?\}\}\|?/g, "}}")
        .replace(/STAB prior to (Gen [1-7IV]+)/gi, function (str, gen) {
          return "Gode di STAB prima della " + macros.generazioni(gen);
        })

        // Eliminazione dei dati della mossa, recuperati in automatico dal modulo

        .replace(
          /[^\|]*\|(Fisico|Stato|Speciale)\|[^\|]*\|[^\|]*\|[^\|&]*\|?/g,
          "",
        )
    );
  };

  macros["learnlist sesta"] = function (str) {
    // Traduzione mosse, tipi, gare, intestazioni, sigle giochi

    str = macros.mosse(str);
    str = macros.gare(str);
    str = macros.tipi(str);
    str = macros.intestazioni(str, "learnlist");
    str = macros.giochi(str, false);

    // Traduzione learnlist vero e proprio

    // Entry: traduzione numeri romani --> cifre arabe

    return (
      str
        .replace(
          /\{\{learnlist\/([^V\|]+)([VI]+)/g,
          function (str, method, roman) {
            var numbers = {
              I: "1",
              II: "2",
              III: "3",
              IV: "4",
              V: "5",
              VI: "6",
            };
            return "{{learnlist/" + method + numbers[roman];
          },
        )

        // Headers in doppio formato:
        // 		- {{learnlist/<method>h/<genheader>|<type1>|<type2>|<genpoke>|etc}} e
        // 		- {{learnlist/<method>h|<type1>|<type2>|<genheader>|<genpoke>|etc}}

        .replace(
          /\{\{[Ll]earnlist\/(\w+)h\|(.+)\|([1-6])\|([1-6])\|?.*?\}\}/g,
          "{{#invoke: learnlist/hf | $1h|$2|$3|$4}}<br>{{#invoke: Render | entry | learnlist/entry$3.$1 |",
        )
        .replace(
          /\{\{[Ll]earnlist\/(\w+)h\/([1-6])\|(.+)\|([1-6])\|?.*?\}\}/g,
          "{{#invoke: learnlist/hf | $1h|$3|$2|$4}}<br>{{#invoke: Render | entry | learnlist/entry$2.$1 |",
        )

        // Entry: MT e MN, Mini Sprite, N/A, Start, sup XY ORAS, eliminazione tt

        .replace(/\{\{[Ll]earnlist\/tm([1-6])\|TM/g, "{{learnlist/tm$1|MT")
        .replace(/\{\{[Ll]earnlist\/tm([1-6])\|HM/g, "{{learnlist/tm$1|MN")
        .replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}/g, "#$1#")
        .replace(/N\/A/g, "Assente")
        .replace(/Start/g, "Inizio")
        .replace(/\{\{sup\/6\|(XY|ROZA)\}\}/g, "$1")
        .replace(/\{\{tt\|.+\|(.+?)\}\}/g, "$1")

        // Entry: traduzioni generiche

        .replace(
          /\{\{[lL]earnlist\/(\w+)([1-6])\|(.+)\|?\}\}/g,
          function (str, method, gen, args) {
            // Raddoppiamento livelli se non lo sono già

            if (
              gen > 4 &&
              method == "level" &&
              args.search(
                /^(Inizio|Assente|\d{1,3})\|(Inizio|Assente|\d{1,3})\|/,
              ) == -1
            )
              return (
                "[[&euro;" +
                args.replace(/^(Inizio|\d{1,3})\|/, "$1|$1|") +
                "&pound;]]|"
              );
            return "[[&euro;" + args + "&pound;]]|";
          },
        )

        // Sostituzione del livello 1 con Inizio

        .replace(/&euro;1\|/g, "&euro;Inizio|")
        .replace(/&euro;(Inizio|Assente|\d{1,3})\|1\|/g, "&euro;$1|Inizio|")

        // Footer in doppio formato:
        // 		- {{learnlist/<method>f/<footergen>|etc}}
        // 		- {{learnlist/<method>f|etc}}

        .replace(
          /\{\{[lL]earnlist\/(\w+)f\/([1-6])\|(.+)\|([1-6])(.*?)\}\}/g,
          function (str, method, genf, args, genp, otherArgs) {
            return (
              "}}<br>{{#invoke: learnlist/hf | " +
              method +
              "f|" +
              args +
              "|" +
              genf +
              "|" +
              genp +
              (otherArgs.search("xy=") == -1 ? otherArgs : "") +
              "}}"
            );
          },
        )
        .replace(
          /\{\{[lL]earnlist\/(\w+)f(.+?)\}\}/g,
          "}}<br>{{#invoke: learnlist/hf | $1f$2}}",
        )

        // Footer: inserimento della generazione dl footer se non presente, assumendo la sesta

        .replace(
          /\{\{#invoke: learnlist\/hf \| (\w+)f([^1-6]+)\|([1-6])\}\}/gi,
          "{{#invoke: learnlist/hf | $1f$2|6|$3}}",
        )

        // Entry: traduzione null

        .replace(
          /\{\{[lL]earnlist\/(\w+)(\d)null\}\}\n?\}\}/g,
          "{{#invoke: learnlist/entry$2 | $1null}}",
        )

        // Traduzione psichico|psichico in header e footer

        // str = str.replace(/€(.+)[Pp]sichico\|[Pp]sichico\|(.+)£/g, '€$1Psichico|Psico$2£');

        .replace(
          /[Ll]earnlist(.+)\|[Pp]sichico\|[Pp]sichico(.+)\}\}/g,
          "learnlist$1|Psico|Psico$2}}",
        )
        .replace(
          /[Ll]earnlist(.+)\|[Pp]sichico(.+)\}\}/g,
          "learnlist$1|Psico$2}}",
        )

        // Eliminazione chiamata al modulo Render per gli entry null

        .replace(
          /\{\{#invoke: Render \| entry \| learnlist\/entry\d\.\w+ \|\n(\{\{.+null\}\})/g,
          "$1",
        )

        // Eliminazione del parametro STAB e form e aggiustamenti sintattici

        .replace(/STAB=/g, "")
        .replace(/form=[^\|£]+\|?(.*?)£/g, "$1£")
        .replace(/\}\}&pound;\]\]/g, "&pound;]]}}")
        .replace(/\|?\n?\}\}\|?/g, "}}")
        .replace(/STAB prior to (Gen [1-6IV]+)/gi, function (str, gen) {
          return "Gode di STAB prima della " + macros.generazioni(gen);
        })
    );
  };

  if (utils.updateMenu) {
    utils.updateMenu();
  }
})(utils || { macros: {} });
