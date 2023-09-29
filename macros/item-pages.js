"use strict";
/**
 * Macros to help translate item pages
 */

/**
 * Taken a template that on Bulba is table, closed by |}, replaces header, adds
 * footer and apply a function to content.
 *
 * Named args because they are many optional.
 *
 * @param {string} str the string to work on
 * @param {object} args named arguments
 * @param {string} args.template name of the template to replace. Equivalent to
 *                setting args.head = <args.template>/head, args.foot_replace =
 *                {{<args.template>/footer}}, and not setting args.head_replace
 * @param {string} args.head header of the template to look for
 * @param {string} args.head_reaplace a string to replace args.head with. If
 *                  not given, the head is left untouched
 * @param {string} args.foot_replace the footer to add
 * @param {number} args.closing_num the number of closing |} to expect
 * @param {boolean} args.global whether to replace all occurences of the
 *                      template or not
 * @param {function} args.transl_content a function that translate the content
 *                      of the template
 * @returns {string} the modified string
 */
function tabular_template(str, args) {
  args.head = args.head || "{{" + args.template + "/head";
  args.head_replace = args.head_replace || args.head;
  args.foot_replace = args.foot_replace || "{{" + args.template + "/footer}}";
  args.closing_num = args.closing_num || 1;
  args.global = args.global || false;
  args.transl_content = args.transl_content || ((s) => s);

  const begin = str.indexOf(args.head);
  if (begin == -1) {
    return str;
  }
  const firstend = str.indexOf("|}", begin);
  let _end = firstend;
  for (let _ = 1; _ < args.closing_num; ++_) {
    _end = str.indexOf("|}", _end + 2);
  }
  const end = _end;
  const templ = args.transl_content(
    str.substring(begin + args.head.length, firstend),
  );

  // Iterate if needed because of global
  const head =
    str.substring(0, begin) + args.head_replace + templ + args.foot_replace;
  const tail = str.substring(end + 2);
  return head + (args.global ? tabular_template(tail, args) : tail);
}

/**
 * Translate section names
 * @param {string} str the string to work on
 */
function sezioni(str) {
  return (
    str
      .replace(/==In the core series games==/, "==Nella serie principale==")
      // .replace(/==In the core series giochi==/, "==Nella serie principale==")
      .replace(/===Price===/g, "===Prezzo===")
      .replace(/===Effect===/g, "===Effetti===")
      .replace(/====Held item====/g, "====Strumento tenuto====")
      .replace(/===Description===/g, "===Descrizione===")
      .replace(/===Acquisition===/g, "===Ottenimento===")
      .replace(/==In spin-off games==/g, "==Negli spin-off==")
      .replace(
        /===Pokémon Mystery Dungeon series===/g,
        "===Serie Pokémon Mystery Dungeon===",
      )
      .replace(/===Appearance===/g, "===Aspetto===")
      .replace(/==In the GCC==/g, "==Nel GCC==")
      .replace(/==Trivia==/g, "==Curiosità==")
      .replace(/==In other languages==/g, "==In altre lingue==")
  );
}

(function (utils) {
  const macros = utils.macros;

  macros["pagine strumenti"] = function (str) {
    return macros.langtable(
      macros["Aree Pokewalker"](
        macros["Aree Dream World"](macros.tasche(sezioni(itemtemplates(str)))),
      ),
    );
  };

  const ordinals = {
    I: "1",
    II: "2",
    III: "3",
    IV: "4",
    V: "5",
    VI: "6",
    VII: "7",
    VIII: "8",
    IX: "9",
  };

  function itemtemplates(str) {
    // ItemInfobox
    str = tabular_template(str, {
      head: "{{ItemInfobox/head",
      head_replace: "{{ItemInfobox",
      foot_replace: "}}",
      transl_content: function (content) {
        // Find name in the langtable
        // const name = (/\[\[it:([^\]]*)\]\]/).exec(str)[1];
        const nameregexres = /\|\s*it=([^|]+?)\s*\|/.exec(str);
        let name = "NOME NON TROVATO";
        if (nameregexres === null) {
          window.alert(
            "Non ho trovato il nome dello strumento. Uso il valore speciale '" +
              name +
              "'",
          );
        } else {
          name = nameregexres[1];
        }
        return (
          content
            .replace(
              /\|name=([^|]+)\|/,
              "|name=" + name + "\n|engname=$1|engtrans=\n|",
            )
            .replace(/\|art=([^|]+)/, "")
            .replace(/\|sprite2=([^|]+)/, "")
            .replace(/\|caption=([^|]+)\|/, "|desc=$1|")
            .replace(/\|jtrans=([^|]+)\|/, "|jrom=\n|jtrans=$1|")
            .replace(/\|gen=([IVX]+)\n?(\||})/, function (_, genord, closing) {
              return "|gen=" + ordinals[genord] + "\n" + closing;
            })
            .replace(/\|colorscheme=[^|}]+\n?(\||})/, "$1")
            .replace(/\|fling=[a-zA-Z]+\n?(\||})/, "$1")
            // bag rows
            .replace(
              /{{ItemInfobox\/BagRow(?:Bottom)?\|([IVX]+)\|([a-zA-Zé0-9- ]+)(?:\|[^}]*)?}}/g,
              function (_, genord, pocket) {
                return "|bag" + ordinals[genord] + "=" + macros.tasche(pocket);
              },
            )
            // fling
            .replace(
              /{{ItemInfobox\/Fling\|(\d+)\|colorscheme=[^}]*}}/,
              "|fling=$1",
            )
            // Remove the }} closing the ItemInfobox/head
            .replace("}}\n", "")
        );
      },
    });
    // ItemPrice
    str = tabular_template(str, {
      template: "ItemPrice",
      closing_num: 2,
      global: true,
      transl_content: function (content) {
        return (
          content
            .replace(/N\/A/g, "-")
            // .replace(/\b({{ItemPrice\|\b.*?)\|}\s*\|}/, "$1{{ItemPrice/footer}}")
            .replace(/{{ItemPrice\|/g, "{{ItemPrice/row|")
            .replace(/\|{{PDollar}}([\d,.]+)(\||})/g, "|$1$2")
            // twice because the pipes around may be shared
            .replace(/\|{{PDollar}}([\d,.]+)(\||})/g, "|$1$2")
        );
      },
    });
    // ItemDescription
    str = tabular_template(str, {
      head: "{{movedesc|",
      head_replace: "{{ItemDescription/head|",
      foot_replace: "{{ItemDescription/footer}}",
      closing_num: 2,
      global: true,
      transl_content: function (content) {
        return content.replace(/{{movedescentry\|/g, "{{ItemDescription/row|");
      },
    });
    // ItemAvailability
    str = tabular_template(str, {
      template: "ItemAvailability",
      closing_num: 2,
      global: true,
      transl_content: function (content) {
        let newtempl = content.split("\n")[0] + "\n";
        // Each row should be transformed in one template call
        for (const row of content.split("|-").slice(1)) {
          let cells = ("\n" + row)
            .split("\n|")
            .slice(1)
            .map((s) => (s.trim() === "" ? "-" : s.trim()));
          console.assert(cells.length == 3);
          // Update first cell
          // Actually only bothers with IoA because other are taken care
          // of by the generic gameabbr replacement
          cells[0] = cells[0].replace(
            /'''{{color2\|\s*{{[^}]*}}\s*\|\s*The Isle of Armor\s*\|\s*IoA\s*}}'''/,
            "IA",
          );
          // Generic replacements for other cells
          // Old-school for loop because JS doesn't support me on this
          for (let i = 1; i < cells.length; ++i) {
            cells[i] = cells[i]
              .replace(/^''\[\[Trade\]\]''$/g, "[[Scambio]]")
              .replace(/\[\[Cram\-o\-matic\]\]/g, "[[CramoBot]]")
              .replace(/Battle Maison/g, "Villa Lotta")
              .replace(/Battle Subway/g, "Metrò Lotta")
              // Held by
              .replace(/Held by/g, "Tenuto da")
              .replace(/held by/g, "tenuto da")
              .replace(
                /\((\d+)% chance each\)/g,
                "($1% di probabilità ciascuno)",
              )
              .replace(/\((\d+)% chance\)/g, "($1% di probabilità)");
          }

          newtempl += "{{ItemAvailability/row|" + cells.join("|") + "}}\n";
        }
        return newtempl;
      },
    });
    // Replacing gameabbrev templates with only Italian abbrevs
    str = str
      .replace(/{{gameabbrev(?:\d|ss)\|(\w+)}}/g, (_, g) => macros.giochi(g))
      // Different conventions: Bulba uses SpScIA, we use only IA
      .replace(/\|SpScIA\|/g, "|IA|")
      // Other generic replacements
      .replace(/\[\[Battle Point\|BP\]\]/g, "{{valuta|PL}}")
      .replace(/\[\[Poké Coupon\]\]s/g, "{{valuta|PC}}")
      .replace(/\[\[Coin\]\]s/g, "{{valuta|G}}")
      .replace(/ points/g, "{{valuta|Pts}}")
      // The English color is plural
      .replace(/\bPoké Balls\b/g, "Poké Ball")
      // digit separator from English , to Italian .
      .replace(/(\d),(\d)/g, "$1.$2");
    str = macros.tasche(str);

    return str;
  }

  macros.tasche = function (str) {
    return str
      .replace(/key items/gi, "Strumenti base")
      .replace(/other items/gi, "Strumenti")
      .replace(/items/gi, "Strumenti")
      .replace(/z-crystals/gi, "Cristalli Z")
      .replace(/ingredients/gi, "Ingredienti")
      .replace(/treasures/gi, "Tesori");
  };

  if (utils.updateMenu) {
    utils.updateMenu();
  }
})(utils || { macros: {} });
