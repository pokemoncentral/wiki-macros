"use strict";
/**
 * Basic, uncategorized macros that are small enough to be packed
 * in a single file
 */

(function (utils) {
  const macros = utils.macros;

  macros.tipi = function (str) {
    return (
      str
        .replace(/\bgrass\b/g, "erba")
        .replace(/\bGrass\b/g, "Erba")
        .replace(/\bWater\b/g, "Acqua")
        .replace(/\bwater\b/g, "acqua")
        .replace(/\bFire\b/g, "Fuoco")
        .replace(/\bfire\b/g, "fuoco")
        .replace(/\bFlying\b/g, "Volante")
        .replace(/\bflying\b/g, "volante")
        .replace(/\bFighting\b/g, "Lotta")
        .replace(/\bfighting\b/g, "lotta")
        .replace(/\bGround\b/g, "Terra")
        .replace(/\bground\b/g, "terra")
        .replace(/\bDark\b/g, "Buio")
        .replace(/\bdark\b/g, "buio")
        .replace(/\bDragon\b/g, "Drago")
        .replace(/\bdragon\b/g, "drago")
        .replace(/\bRock\b/g, "Roccia")
        .replace(/\brock\b/g, "roccia")
        .replace(/\bPoison\b/g, "Veleno")
        .replace(/\bpoison\b/g, "veleno")
        .replace(/\bGhost\b/g, "Spettro")
        .replace(/\bghost\b/g, "spettro")
        .replace(/\bPsychic\b/g, "Psico")
        .replace(/\bpsychic\b/g, "psico")
        .replace(/\bElectric\b/g, "Elettro")
        .replace(/\belectric\b/g, "elettro")
        .replace(/\bSteel\b/g, "Acciaio")
        .replace(/\bsteel\b/g, "acciaio")
        .replace(/\bNormal\b/g, "Normale")
        .replace(/\bnormal\b/g, "normale")
        .replace(/\bBug\b/g, "Coleottero")
        .replace(/\bbug\b/g, "coleottero")
        .replace(/\bFairy\b/g, "Folletto")
        .replace(/\bfairy\b/g, "folletto")
        .replace(/\bUnknown\b/g, "Sconosciuto")
        .replace(/\bunknown\b/g, "sconosciuto")
        .replace(/\bShadow\b/g, "Ombra")
        .replace(/\bshadow\b/g, "ombra")
        .replace(/\bIce\b/g, "Ghiaccio")
        .replace(/\bice\b/g, "ghiaccio")

        // Categorie danno
        .replace(/\bSpecial\b/g, "Speciale")
        .replace(/\bspecial\b/g, "speciale")
        .replace(/\bStatus\b/g, "Stato")
        .replace(/\bstatus\b/g, "stato")
        .replace(/\bPhysical\b/g, "Fisico")
        .replace(/\bphysical\b/g, "fisico")

        // Correzione errori
        .replace(/Voloing/g, "Volante")
        .replace(/voloing/g, "volante")
        .replace(/[Pp]sichico\|[Ff]isico/g, "Psico|Fisico")
        .replace(/[Pp]sichico\|[Ss]peciale/g, "Psico|Speciale")
        .replace(/[Pp]sichico\|[Ss]tato/g, "Psico|Stato")
        .replace(/\bPunk Roccia\b/g, "Punk Rock")
        .replace(
          /colore\s*\|?\s*(.+?)\s*\|?\s*buio\s*\}\}/gi,
          "colore | $1 | dark }}",
        )
    );
  };

  macros["nomi Pokémon"] = function (str) {
    return str
      .replace(/\bType: Null\b/g, "Tipo Zero")
      .replace(/\bGreat Tusk\b/g, "Grandizanne")
      .replace(/\bBrute Bonnet\b/g, "Fungofurioso")
      .replace(/\bSandy Shocks\b/g, "Peldisabbia")
      .replace(/\bScream Tail\b/g, "Codaurlante")
      .replace(/\bFlutter Mane\b/g, "Crinealato")
      .replace(/\bSlither Wing\b/g, "Alirasenti")
      .replace(/\bRoaring Moon\b/g, "Lunaruggente")
      .replace(/\bIron Treads\b/g, "Solcoferreo")
      .replace(/\bIron Moth\b/g, "Falenaferrea")
      .replace(/\bIron Hands\b/g, "Manoferrea")
      .replace(/\bIron Jugulis\b/g, "Colloferreo")
      .replace(/\bIron Thorns\b/g, "Spineferree")
      .replace(/\bIron Bundle\b/g, "Saccoferreo")
      .replace(/\bIron Valiant\b/g, "Eroeferreo")
      .replace(/\bWalking Wake\b/g, "Acquecrespe")
      .replace(/\bIron Leaves\b/g, "Fogliaferrea")
      .replace(/\bRaging Bolt\b/g, "Furiatonante")
      .replace(/\bIron Crown\b/g, "Capoferreo")
      .replace(/\bGouging Fire\b/g, "Vampeaguzze")
      .replace(/\bIron Boulder\b/g, "Massoferreo");
  };

  macros.gare = function (str) {
    // Statistiche gara

    return str
      .replace(/\bTough\b/gi, "Grinta")
      .replace(/\bCool\b/gi, "Classe")
      .replace(/\b(Smart|Clever)\b/gi, "Acume")
      .replace(/\bBeaut(y|iful)\b/gi, "Bellezza")
      .replace(/\bCute\b/gi, "Grazia");

    // Correzione errori
  };

  macros.generazioni = function (str, lastConj) {
    lastConj = lastConj || "e";

    var ordinals = {
      1: "prima",
      2: "seconda",
      3: "terza",
      4: "quarta",
      5: "quinta",
      6: "sesta",
      7: "settima",
      8: "ottava",
      9: "nona",
      10: "decima",
      I: "prima",
      II: "seconda",
      III: "terza",
      IV: "quarta",
      V: "quinta",
      VI: "sesta",
      VII: "settima",
      VIII: "ottava",
      IX: "nona",
      X: "decima",
    };

    return str.replace(
      /gen(eration)? ([1-7IV]+[-/1-6IV]*)+/gi,
      function (str, placeholder, gens) {
        gens = gens.match(/[1-7IV]+/gi);
        for (var k = 0; k < gens.length; ++k) gens[k] = ordinals[gens[k]];
        if (gens.length == 1) return gens[0] + " generazione";
        var lastGen = gens.pop();
        return (
          gens.join(", ") + " " + lastConj + " " + lastGen + " generazione"
        );
      },
    );
  };

  /*

Il secondo argomento deve essere true per far sì che vengano
tradotti HeartGold e SoulSilver in Oro HeartGold e Argento
SoulSilver

*/
  macros.giochi = function (str, transHGSS) {
    transHGSS = transHGSS == null || transHGSS;

    // Eccezioni per i colori

    str = str
      .replace(/firered color/gi, "rossofuoco color")
      .replace(/leafgreen color/gi, "verdefoglia color")
      .replace(/black2 color/gi, "nero2 color")
      .replace(/white2 color/gi, "bianco2 color");

    if (transHGSS) {
      str = str
        .replace(/SoulSilver/g, "Argento SoulSilver")
        .replace(/HeartGold/g, "Oro HeartGold")

        // Correzione errori

        .replace(/Argento Argento SoulSilver/g, "Argento SoulSilver")
        .replace(/Oro Oro HeartGold/g, "Oro HeartGold");
    }

    // Traduzione nomi giochi

    return (
      str
        .replace(/FireRed/gi, "Rosso Fuoco")
        .replace(/LeafGreen/gi, "Verde Foglia")
        .replace(/Alpha Sapphire/gi, "Zaffiro Alpha")
        .replace(/Omega Ruby/gi, "Rubino Omega")
        .replace(/\bGold\b/gi, "Oro")
        .replace(/\bSilver\b/gi, "Argento")
        .replace(/\bRed\b/gi, "Rosso")
        .replace(/\bBlue\b/gi, "Blu")
        .replace(/\bGreen\b/gi, "Verde")
        .replace(/Crystal/gi, "Cristallo")
        .replace(/Yellow/gi, "Giallo")
        .replace(/\bRuby\b/gi, "Rubino")
        .replace(/Sapphire/gi, "Zaffiro")
        .replace(/Emerald/gi, "Smeraldo")
        .replace(/Diamond/gi, "Diamante")
        .replace(/\bPearl\b/gi, "Perla")
        .replace(/Platinum/gi, "Platino")
        .replace(/\bBlack\b/gi, "Nero")
        .replace(/\bWhite\b/gi, "Bianco")

        // Traduzione sigle dei giochi

        .replace(/\bRG_/g, "RV_")
        .replace(/\bRG\b/g, "RV")
        .replace(/\bRGB_/g, "RVB_")
        .replace(/\bRGB\b/g, "RVB")
        .replace(/\bRGBY_/g, "RVBG_")
        .replace(/\bRGBY\b/g, "RVBG")
        .replace(/\bY\b/g, "G")
        .replace(/\bY_/g, "G_")
        .replace(/\bGS_/g, "OA_")
        .replace(/\bGS\b/g, "OA")
        .replace(/\bGSC_/g, "OAC_")
        .replace(/\bGSC\b/g, "OAC")
        .replace(/\bRu?Sa?_/g, "RZ_")
        .replace(/\bRu?Sa?\b/g, "RZ")
        .replace(/\bSa_/g, "Z_")
        .replace(/\bSa\b/g, "Z")
        .replace(/\bRSE_/g, "RZS_")
        .replace(/\bRSE\b/g, "RZS")
        .replace(/\bRE_/g, "RS_")
        .replace(/\bRE\b/g, "RS")
        .replace(/\bSE_/g, "ZS_")
        .replace(/\bSE\b/g, "ZS")
        .replace(/\bE_/g, "S_")
        .replace(/\bE\b/g, "S")
        .replace(/\bFR?LG?_/g, "RFVF_")
        .replace(/\bFR?LG?\b/g, "RFVF")
        .replace(/\bHS_/g, "HGSS_")
        .replace(/\bHS\b/g, "HGSS")
        .replace(/\bBW_/g, "NB_")
        .replace(/\bBW\b/g, "NB")
        .replace(/\bB2W2_/g, "N2B2_")
        .replace(/\bB2W2\b/g, "N2B2")
        .replace(/\bBl_/g, "N_")
        .replace(/\bBl\b/g, "N")
        .replace(/\bW_/g, "Bi_")
        .replace(/\bW\b/g, "Bi")
        .replace(/\bB2_/g, "N2_")
        .replace(/\bB2\b/g, "N2")
        .replace(/\bW2_/g, "B2_")
        .replace(/\bW2\b/g, "B2")
        .replace(/\bBWB2W2_/g, "NBN2B2_")
        .replace(/\bBWB2W2\b/g, "NBN2B2")
        .replace(/\by_/g, "Y_")
        .replace(/\by\b/g, "Y")
        .replace(/\bOR_/g, "RO_")
        .replace(/\bOR\b/g, "RO")
        .replace(/\bAS_/g, "ZA_")
        .replace(/\bAS\b/g, "ZA")
        .replace(/\bORAS_/g, "ROZA_")
        .replace(/\bORAS\b/g, "ROZA")
        .replace(/\bXYORAS_/g, "XYROZA_")
        .replace(/\bXYORAS\b/g, "XYROZA")
        .replace(/([\|=]\n?)Pokémon Stadium(\n?[\|=])/g, "$1St$2")
        .replace(/([\|=]\n?)Pokémon Stadium 2(\n?[\|=])/g, "$1St2$2")
        .replace(/\bSM_/g, "SL_")
        .replace(/\bSM\b/g, "SL")
        .replace(/\bUSUM_/g, "USUL_")
        .replace(/\bUSUM\b/g, "USUL")
        .replace(/\bSMUSUM_/g, "SLUSUL_")
        .replace(/\bSMUSUM\b/g, "SLUSUL")
        .replace(/\bSwSh_/g, "SpSc_")
        .replace(/\bSwSh\b/g, "SpSc")
        .replace(/\bLA\b/g, "LPA")

        // Correzione errori

        .replace(/Diamante\s?Storm/gi, "Diamantempesta")
    );
  };

  macros.colori = function (str) {
    str = str
      .replace(/color buio/gi, "color dark")
      .replace(
        /\{\{([\s\wé]+) color\s?((dark|light))?\}\}/gi,
        (_, color, shade) => {
          color = color
            .replace(/\s/g, "_")
            // Fixing some colors which don't want the _
            .replace(/Poké_Ball/i, "Poké Ball");
          return `{{#invoke: colore | ${color} | ${shade} }}`;
        },
      )
      .replace(/(\{\{#invoke: colore \| .+? )\|\s*\}\}/gi, "$1| normale }}");
    return str;
  };

  macros["nature"] = function (str) {
    return (
      str
        .replace(/\bHardy\b/g, "Ardita")
        .replace(/\bLonely\b/g, "Schiva")
        .replace(/\bBrave\b/g, "Audace")
        .replace(/\bAdamant\b/g, "Decisa")
        .replace(/\bNaughty\b/g, "Birbona")
        .replace(/\bBold\b/g, "Sicura")
        // .replace(/\bDocile\b/g, 'Docile')
        .replace(/\bRelaxed\b/g, "Placida")
        .replace(/\bImpish\b/g, "Scaltra")
        .replace(/\bLax\b/g, "Fiacca")
        .replace(/\bTimid\b/g, "Timida")
        .replace(/\bHasty\b/g, "Lesta")
        .replace(/\bSerious\b/g, "Seria")
        .replace(/\bJolly\b/g, "Allegra")
        .replace(/\bNaive\b/g, "Ingenua")
        .replace(/\bModest\b/g, "Modesta")
        .replace(/\bMild\b/g, "Mite")
        .replace(/\bQuiet\b/g, "Quieta")
        .replace(/\bBashful\b/g, "Ritrosa")
        .replace(/\bRash\b/g, "Ardente")
        .replace(/\bCalm\b/g, "Calma")
        .replace(/\bGentle\b/g, "Gentile")
        .replace(/\bSassy\b/g, "Vivace")
        .replace(/\bCareful\b/g, "Cauta")
        .replace(/\bQuirky\b/g, "Furba")

        // Correzione errori
        .replace(/Audace Bird/g, "Brave Bird")
        .replace(/Decisa Orb/g, "Adamant Orb")
        .replace(/Fiacca Incense/g, "Lax Incense")
        .replace(/Calma Mind/g, "Calm Mind")
    );
  };

  macros.date = function (str) {
    return str
      .replace(/\bJanuary (\d+), (\d+)/g, "$1 gennaio $2")
      .replace(/\bFebruary (\d+), (\d+)/g, "$1 febbraio $2")
      .replace(/\bMarch (\d+), (\d+)/g, "$1 marzo $2")
      .replace(/\bApril (\d+), (\d+)/g, "$1 aprile $2")
      .replace(/\bMay (\d+), (\d+)/g, "$1 maggio $2")
      .replace(/\bJune (\d+), (\d+)/g, "$1 giugno $2")
      .replace(/\bJuly (\d+), (\d+)/g, "$1 luglio $2")
      .replace(/\bAugust (\d+), (\d+)/g, "$1 agosto $2")
      .replace(/\bSeptember (\d+), (\d+)/g, "$1 settembre $2")
      .replace(/\bOctober (\d+), (\d+)/g, "$1 ottobre $2")
      .replace(/\bNovember (\d+), (\d+)/g, "$1 novembre $2")
      .replace(/\bDecember (\d+), (\d+)/g, "$1 dicembre $2");
  };

  if (utils.updateMenu) {
    utils.updateMenu();
  }
})(utils || { macros: {} });
