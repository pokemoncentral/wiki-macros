"use strict";
/**
 * macro to translate list of moves available in gen something
 */

(function (utils) {
  const macros = utils.macros;

  macros["mosse disponibili"] = function (str) {
    // Finds the generation
    const match = str.match(/\{\{gameabbrev(\d)/);
    if (match === null) {
      window.alert(
        `Generation not found: make sure to include the header with the {{gameabbrev}} in the code.`,
      );
      return "";
    }
    const gen = parseInt(match[1]);
    console.log(gen);

    const gendata = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      ["SL", "USUL", "LGPE"], // gen 7
      ["SpSc", "DLPS", "LPA"], // gen 8
      ["SV"], // gen 9
    ];
    const abbrs = gendata[gen]
      .map((abbr, i) => `abbr${i + 1}=${abbr}`)
      .join("|");

    const rows = str.split("|-");
    // This slice(3) is so bad lol
    const new_rows = rows.slice(3).map((r) => {
      if (r === "") {
        return;
      }
      const cells = r
        .split("\n|")
        .slice(1)
        .map((c) => c.trim());
      const move = macros.mosse(cells[1].match(/{{m\|(.*)}}/)[1]);
      const type = macros.tipi(cells[1].match(/{{typetable\|(.*)}}/)[1]);
      const category = macros.tipi(cells[1].match(/{{statustable\|(.*)}}/)[1]);
      const prefix = `\n{{MoveAvailability/row|${abbrs}|${cells[0]}|${move}|${type}|${category}|${cells[2]}|${cells[3]}|${cells[4]}|`;
      const local_abbrs = cells
        .slice(5)
        .map((c) => {
          switch (c) {
            case "{{yes}}":
              return "yes";
            case "{{no}}":
              return "no";
            case "":
              return "";
            default:
              return "AAAAAAA";
          }
        })
        .join("|");
      return prefix + local_abbrs + "}}";
    });

    return new_rows.join("");
  };

  if (utils.updateMenu) {
    utils.updateMenu();
  }
})(utils || { macros: {} });
