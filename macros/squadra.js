"use strict";
/**
 * Template squadra-related macros
 */

(function (utils) {
  const macros = utils.macros;

  macros.squadra = function (str) {
    // Traduzioni preliminari: tipi, mosse, giochi,
    // colori, abilita'
    // Gli strumenti sono tradotti con battleHeld == true

    str = macros.strumenti(str, true);
    str = macros["abilita'"](str);
    str = macros.mosse(str);
    str = macros.forme(str, true);
    str = macros.giochi(str, false);
    str = macros.colori(str);
    str = macros.tipi(str);

    // Traduzione squadra specifica

    str = str
      .replace(/gender=maschio/gi, "gender=male")
      .replace(/gender=femmina/gi, "gender=female")
      .replace(/type([1-2])?=[Pp]sichico/gi, "type$1=Psico")
      .replace(/\{\{Party\/[Ff]ooter\}\}/gi, "&lt;/div&gt;\n|}{{-}}")
      .replace(/\{\{Party\//gi, "{{#invoke: Party | ")
      .replace(/Battle Point\|BP/gi, "Punti Lotta|PL")
      .replace(/\s*style="margin:\s*auto?"\s*\|/gi, "")
      .replace(
        /\{\{#invoke:\s*colore\s*\|\s*(.+?)\s*\|?\s*(light|dark|normale)?\s*\}\}/gi,
        "$1 $2",
      )
      .replace(/\|{{Pok.mon\/([1-7])/gi, "{{Pok&eacute;mon|gen=$1")
      .replace(
        /{{Party\/Div ?\| ?color={{.+? color ?.*?}}}}/gi,
        "{{#invoke: Party | Div}}",
      )

      // Forme di Alola
      .replace(/\|form=\-Alola/gi, "|form=A")

      // replace dei giochi
      .replace(/\|game=SM/gi, "|game=SL");

    //correzione dello sprite
    var game = new RegExp("\\|game=(.+?)\\n").exec(str)[1];
    return str.replace(/\|sprite=(VS.*?\.png)/gi, "|sprite=" + game + " $1");
  };

  macros["party in squadra"] = function (str) {
    str = str
      .replace(/{{#invoke: Party \| Single/gi, "{{Squadra")
      .replace(/(\|\s*name=){{colore\|000\|([^}]*)}}/gi, "$1$2")
      .replace(/(\|\s*name=){{colore2\|000\|([^}]*)}}/gi, "$1[[$2]]")
      .replace(/(\|\s*prize=){{pdollar}}([ \d]*)/gi, "$1$2{{Pdollar}}")
      .replace(/<\/div>\s*\n\|\}\s*\{\{\-\}\}/gi, "}}")
      .replace(/(\|\s*location=)([^\n]*)/gi, "$1[[$2]]")
      .replace(/}}(?:&amp;nbsp;)*/gi, "}}")
      .replace(/{{#invoke:\s*Party\s*\|\s*Div\s*\|[^}]*}}\s*/gi, "");

    // This part here works only in isolation, ie. if str only contains a
    // single party invocation, and is in general quite fragile
    str = str
      // This subst isn't global so to remove only the closing }} of Party
      .replace(/}}(\n{{Pok.mon\|)/, "$1");

    let count = 1;
    let incRep = function (match, beginning, gen_bad, gen_good) {
      const res =
        "\n|pokemon" +
        count.toString() +
        "=" +
        beginning +
        (gen_bad ? "|gen=" + gen_bad : gen_good);
      ++count;
      return res;
    };
    str = str.replace(/\n({{Pok.mon)(?:\/(\d+)|(\|gen=\d+))/gi, incRep);

    return str;
  };

  // Lol life sure is funny
  macros["squadra in party"] = function (str) {
    return str
      .replace(
        /\{\{#invoke: ?Squadra ?\| ?Single/gi,
        "{{#invoke: Party | Single",
      )
      .replace(
        /\{\{#invoke: ?Squadra ?\| ?Div ?\| ?color ?= ?[^\}]*}}/gi,
        "{{#invoke: Party | Div}}",
      )
      .replace(/\n\|}\n\|}/gi, "\n&lt;/div&gt;\n|}")
      .replace(/\n\|{{Pok.mon/gi, "\n{{Pok&eacute;mon");
  };

  if (utils.updateMenu) {
    utils.updateMenu();
  }
})(utils || { macros: {} });
