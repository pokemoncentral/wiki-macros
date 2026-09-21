"use strict";

/**
 * Macro per tradurre le pagine di Bulbapedia
 * "List of <espansione> solo battles in Pokémon TCG Pocket",
 * cioe' gli elenchi delle lotte con CPU di GCC Pocket, incluse le squadre
 * (mazzi) usate dalla CPU.
 *
 * Uso: incollare nella casella il wikitesto della pagina inglese e scegliere
 * "Traduci lotte con CPU GCC Pocket". Il risultato e' pronto da incollare su
 * PCW (titolo a parte: va creato spostando/creando la pagina italiana).
 *
 * Le tabelle di sostituzione (espansioni, carte, effetti) sono in fondo al
 * file e sono state ricavate confrontando i setlist di PCW con quelli di
 * Bulbapedia.
 */
(function (utils) {
  const macros = utils.macros;

  /* ------------------------------------------------------------ tabelle */

  // espansioni: nome inglese -> nome italiano (senza "(GCC Pocket)")
  const SETS = {
    "Celestial Guardians": "Guardiani Astrali",
    "Crimson Blaze": "Fiamme Cremisi",
    "Deluxe Pack: ex": "Busta Deluxe ex",
    "Eevee Grove": "Il Bosco di Eevee",
    "Everyday Wonders": "Giorni Giocondi",
    "Extradimensional Crisis": "Crisi Ultradimensionale",
    "Fantastical Parade": "Parata Fantasmagorica",
    "Genetic Apex": "Geni Supremi",
    "Mega Rising": "Mega Ascesa",
    "Mega Shine": "Mega Splendore",
    "Mythical Island": "L'Isola Misteriosa",
    "Paldean Wonders": "Meraviglie di Paldea",
    "Paradox Drive": "Assalto dei Paradossi",
    "Promo-A": "Promo-A",
    "Promo-B": "Promo-B",
    "Pulsing Aura": "Aura Pulsante",
    "Ruler of the Skies": "Sovrano dei Cieli",
    "Secluded Springs": "Sorgenti Recondite",
    "Shining Revelry": "Tripudio Splendente",
    "Space-Time Smackdown": "Scontro Spaziotemporale",
    "Team Rocket's Ambition": "I Loschi Piani del Team Rocket",
    "Triumphant Light": "Luce Trionfale",
    "Wisdom of Sea and Sky": "La Via del Cielo e del Mare",
  };

  // carte il cui nome italiano differisce da quello inglese
  const CARDS = {
    Acerola: "Malpi",
    Adaman: "Damon",
    "Aerodactyl ex": "Aerodactyl-ex",
    "Alolan Diglett": "Diglett di Alola",
    "Alolan Dugtrio": "Dugtrio di Alola",
    "Alolan Dugtrio ex": "Dugtrio di Alola-ex",
    "Alolan Exeggutor": "Exeggutor di Alola",
    "Alolan Geodude": "Geodude di Alola",
    "Alolan Golem": "Golem di Alola",
    "Alolan Graveler": "Graveler di Alola",
    "Alolan Grimer": "Grimer di Alola",
    "Alolan Marowak": "Marowak di Alola",
    "Alolan Meowth": "Meowth di Alola",
    "Alolan Muk": "Muk di Alola",
    "Alolan Muk ex": "Muk di Alola-ex",
    "Alolan Ninetales": "Ninetales di Alola",
    "Alolan Ninetales ex": "Ninetales di Alola-ex",
    "Alolan Persian": "Persian di Alola",
    "Alolan Raichu": "Raichu di Alola",
    "Alolan Raichu ex": "Raichu di Alola-ex",
    "Alolan Raticate": "Raticate di Alola",
    "Alolan Rattata": "Rattata di Alola",
    "Alolan Sandshrew": "Sandshrew di Alola",
    "Alolan Sandslash": "Sandslash di Alola",
    "Alolan Vulpix": "Vulpix di Alola",
    "Ancient Booster Energy Capsule": "Capsula energetica Tempo Passato",
    Arcade: "Centro Giochi",
    "Arcanine ex": "Arcanine-ex",
    "Arceus ex": "Arceus-ex",
    "Arena of Antiquity": "Arena Antica",
    "Armarouge ex": "Armarouge-ex",
    "Armor Fossil": "Fossilscudo",
    "Articuno ex": "Articuno-ex",
    Arven: "Pepe",
    "Beast Wall": "Ultramuro",
    Beastite: "Pietra Ultracreatura",
    "Beedrill ex": "Beedrill-ex",
    "Bellibolt ex": "Bellibolt-ex",
    "Bibarel ex": "Bibarel-ex",
    "Big Air Balloon": "Palloncino Gigante",
    "Big Malasada": "Malasada maxi",
    "Blacephalon ex": "Blacephalon-ex",
    "Blastoise ex": "Blastoise-ex",
    "Blissey ex": "Blissey-ex",
    Blue: "Blu",
    "Bounded Field": "Campo Delimitato",
    "Brute Bonnet": "Fungofurioso",
    "Budding Expeditioner": "Esploratore in Erba",
    "Buzzwole ex": "Buzzwole-ex",
    Cabbie: "Tassista",
    "Castform Rainy Form": "Castform Forma Pioggia",
    "Castform Snowy Form": "Castform Forma Nuvola di Neve",
    "Castform Sunny Form": "Castform Forma Sole",
    "Celebi ex": "Celebi-ex",
    "Celestic Town Elder": "Anziana di Memoride",
    "Ceruledge ex": "Ceruledge-ex",
    "Charizard ex": "Charizard-ex",
    Cheren: "Komor",
    "Chien-Pao ex": "Chien-Pao-ex",
    "Claw Fossil": "Fossilunghia",
    "Clear Veil": "Velo Trasparente",
    Clemont: "Lem",
    "Clemont's Backpack": "Zaino di Lem",
    Copycat: "Copiona",
    "Cornerstone Mask Ogerpon": "Ogerpon Maschera Fondamenta",
    "Corviknight ex": "Corviknight-ex",
    "Cover Fossil": "Fossiltappo",
    "Crabominable ex": "Crabominable-ex",
    "Cresselia ex": "Cresselia-ex",
    "Crobat ex": "Crobat-ex",
    "Crustle ex": "Crustle-ex",
    Cynthia: "Camilla",
    "Dark Pendant": "Pendente Oscuro",
    "Darkrai ex": "Darkrai-ex",
    Dawn: "Lucinda",
    "Dawn Wings Necrozma": "Necrozma Ali dell'Aurora",
    "Deceptive Needle": "Lancetta Infida",
    "Decidueye ex": "Decidueye-ex",
    "Dedenne ex": "Dedenne-ex",
    "Dhelmise ex": "Dhelmise-ex",
    "Dialga ex": "Dialga-ex",
    "Dome Fossil": "Domofossile",
    "Donphan ex": "Donphan-ex",
    "Dragalge ex": "Dragalge-ex",
    "Dragonite ex": "Dragonite-ex",
    Drayden: "Aristide",
    "Dusk Mane Necrozma": "Necrozma Criniera del Vespro",
    "Eevee Bag": "Borsa Eevee",
    "Eevee ex": "Eevee-ex",
    "Electric Generator": "Generatore di Elettricità",
    "Electrical Cord": "Prolunga",
    "Elegant Cape": "Mantello Elegante",
    "Elemental Switch": "Scambio Elementale",
    Elesa: "Camelia",
    "Entei ex": "Entei-ex",
    "Espeon ex": "Espeon-ex",
    "Exeggutor ex": "Exeggutor-ex",
    "Fan Rotom": "Rotom Vortice",
    Fantina: "Fannie",
    "Field Blower": "Spazzacampo",
    Fisher: "Pescatore",
    "Fishing Net": "Rete da Pesca",
    "Flame Patch": "Distintivo Fiamma",
    "Flareon ex": "Flareon-ex",
    "Flutter Mane": "Crinealato",
    "Flutter Mane ex": "Crinealato-ex",
    "Flygon ex": "Flygon-ex",
    "Fragrant Forest": "Foresta Profumata",
    "Frost Rotom": "Rotom Gelo",
    "Future Booster Energy Capsule": "Capsula energetica Tempo Futuro",
    "Galarian Corsola": "Corsola di Galar",
    "Galarian Cursola": "Cursola di Galar",
    "Galarian Linoone": "Linoone di Galar",
    "Galarian Meowth": "Meowth di Galar",
    "Galarian Mr. Mime": "Mr. Mime di Galar",
    "Galarian Mr. Rime": "Mr. Rime di Galar",
    "Galarian Obstagoon": "Obstagoon di Galar",
    "Galarian Perrserker": "Perrserker di Galar",
    "Galarian Ponyta": "Ponyta di Galar",
    "Galarian Rapidash": "Rapidash di Galar",
    "Galarian Stunfisk": "Stunfisk di Galar",
    "Galarian Zigzagoon": "Zigzagoon di Galar",
    "Gallade ex": "Gallade-ex",
    "Garchomp ex": "Garchomp-ex",
    "Gengar ex": "Gengar-ex",
    "Gholdengo ex": "Gholdengo-ex",
    "Giant Cape": "Mantello Gigante",
    "Gigalith ex": "Gigalith-ex",
    "Giratina ex": "Giratina-ex",
    "Glaceon ex": "Glaceon-ex",
    Gladion: "Iridio",
    "Gouging Fire": "Vampeaguzze",
    "Great Tusk": "Grandizanne",
    "Greninja ex": "Greninja-ex",
    Guzma: "Guzman",
    "Guzzlord ex": "Guzzlord-ex",
    "Gyarados ex": "Gyarados-ex",
    "Hand Scope": "Mirino Manuale",
    "Hearthflame Mask Ogerpon": "Ogerpon Maschera Focolare",
    "Heat Rotom": "Rotom Calore",
    "Heavy Helmet": "Casco Pesante",
    "Helix Fossil": "Helixfossile",
    Hiker: "Montanaro",
    "Hiking Trail": "Percorso Escursionistico",
    "Hisuian Basculegion": "Basculegion di Hisui",
    "Hisuian Basculin": "Basculin di Hisui",
    "Hisuian Goodra": "Goodra di Hisui",
    "Hisuian Lilligant": "Lilligant di Hisui",
    "Hisuian Sliggoo": "Sliggoo di Hisui",
    "Hisuian Zoroark ex": "Zoroark di Hisui-ex",
    "Hisuian Zorua": "Zorua di Hisui",
    "Hitmonchan ex": "Hitmonchan-ex",
    "Hitting Hammer": "Martello Debilitante",
    "Ho-Oh ex": "Ho-Oh-ex",
    "Hoopa ex": "Hoopa-ex",
    Ilima: "Liam",
    "Incineroar ex": "Incineroar-ex",
    "Indeedee ex": "Indeedee-ex",
    "Infernape ex": "Infernape-ex",
    "Inflatable Boat": "Canotto Gonfiabile",
    Iono: "Kissara",
    Irida: "Perula",
    "Iron Boulder": "Massoferreo",
    "Iron Bundle": "Saccoferreo",
    "Iron Bundle ex": "Saccoferreo-ex",
    "Iron Crown": "Capoferreo",
    "Iron Hands": "Manoferrea",
    "Iron Jugulis": "Colloferreo",
    "Iron Leaves": "Fogliaferrea",
    "Iron Moth": "Falenaferrea",
    "Iron Thorns": "Spineferree",
    "Iron Treads": "Solcoferreo",
    "Iron Valiant": "Eroeferreo",
    "Jaw Fossil": "Fossilmascella",
    "Jolteon ex": "Jolteon-ex",
    Juggler: "Giocoliere",
    "Jumpluff ex": "Jumpluff-ex",
    Kiawe: "Kawe",
    "Kid's Room": "Cameretta",
    "Kingdra ex": "Kingdra-ex",
    "Koraidon ex": "Koraidon-ex",
    Korrina: "Ornella",
    Lana: "Suiren",
    "Lanturn ex": "Lanturn-ex",
    "Lapras ex": "Lapras-ex",
    "Leaf Cape": "Mantello Silvestre",
    "Leafeon ex": "Leafeon-ex",
    Leftovers: "Avanzi",
    "Lickilicky ex": "Lickilicky-ex",
    Lillie: "Lylia",
    Lisia: "Orthilla",
    Looker: "Bellocchio",
    "Lucario ex": "Lucario-ex",
    "Lucky Egg": "Fortunuovo",
    "Lucky Ice Pop": "Ghiacciolo della Fortuna",
    "Lucky Mittens": "Fortunguanti",
    "Lugia ex": "Lugia-ex",
    "Lum Berry": "Baccaprugna",
    "Lunala ex": "Lunala-ex",
    Lusamine: "Samina",
    "Lycanroc ex": "Lycanroc-ex",
    Lyra: "Cetra",
    "Machamp ex": "Machamp-ex",
    "Magnezone ex": "Magnezone-ex",
    Maintenance: "Manutenzione",
    Mallow: "Ibis",
    Marlon: "Ciprian",
    "Marowak ex": "Marowak-ex",
    Mars: "Martes",
    May: "Vera",
    "Mega Absol ex": "Mega Absol-ex",
    "Mega Altaria ex": "Mega Altaria-ex",
    "Mega Ampharos ex": "Mega Ampharos-ex",
    "Mega Audino ex": "Mega Audino-ex",
    "Mega Blastoise ex": "Mega Blastoise-ex",
    "Mega Blaziken ex": "Mega Blaziken-ex",
    "Mega Camerupt ex": "Mega Camerupt-ex",
    "Mega Charizard X ex": "Mega Charizard X-ex",
    "Mega Charizard Y ex": "Mega Charizard Y-ex",
    "Mega Diancie ex": "Mega Diancie-ex",
    "Mega Gallade ex": "Mega Gallade-ex",
    "Mega Gardevoir ex": "Mega Gardevoir-ex",
    "Mega Gengar ex": "Mega Gengar-ex",
    "Mega Gyarados ex": "Mega Gyarados-ex",
    "Mega Heracross ex": "Mega Heracross-ex",
    "Mega Houndoom ex": "Mega Houndoom-ex",
    "Mega Kangaskhan ex": "Mega Kangaskhan-ex",
    "Mega Latios ex": "Mega Latios-ex",
    "Mega Lopunny ex": "Mega Lopunny-ex",
    "Mega Lucario ex": "Mega Lucario-ex",
    "Mega Manectric ex": "Mega Manectric-ex",
    "Mega Mawile ex": "Mega Mawile-ex",
    "Mega Medicham ex": "Mega Medicham-ex",
    "Mega Metagross ex": "Mega Metagross-ex",
    "Mega Pidgeot ex": "Mega Pidgeot-ex",
    "Mega Pinsir ex": "Mega Pinsir-ex",
    "Mega Rayquaza ex": "Mega Rayquaza-ex",
    "Mega Sableye ex": "Mega Sableye-ex",
    "Mega Sceptile ex": "Mega Sceptile-ex",
    "Mega Scizor ex": "Mega Scizor-ex",
    "Mega Sharpedo ex": "Mega Sharpedo-ex",
    "Mega Slowbro ex": "Mega Slowbro-ex",
    "Mega Steelix ex": "Mega Steelix-ex",
    "Mega Swampert ex": "Mega Swampert-ex",
    "Mega Venusaur ex": "Mega Venusaur-ex",
    "Melmetal ex": "Melmetal-ex",
    "Memory Light": "Luce della Memoria",
    "Meowscarada ex": "Meowscarada-ex",
    Mesagoza: "Mesapoli",
    "Metal Core Barrier": "Barriera Metallica",
    "Mew ex": "Mew-ex",
    "Mewtwo ex": "Mewtwo-ex",
    "Milotic ex": "Milotic-ex",
    "Mimikyu ex": "Mimikyu-ex",
    "Miraidon ex": "Miraidon-ex",
    "Mismagius ex": "Mismagius-ex",
    "Moltres ex": "Moltres-ex",
    Morty: "Angelo",
    "Mow Rotom": "Rotom Taglio",
    "Mythical Slab": "Pietra Misteriosa",
    "Nasty Notice": "Avviso Molesto",
    Nemona: "Nemi",
    "Old Amber": "Ambra Antica",
    "Order Pad": "Schermo Ordini",
    "Origin Forme Dialga": "Dialga Forma Originale",
    "Origin Forme Palkia": "Palkia Forma Originale",
    "Pachirisu ex": "Pachirisu-ex",
    "Paldean Clodsire": "Clodsire di Paldea",
    "Paldean Clodsire ex": "Clodsire di Paldea-ex",
    "Paldean Tauros": "Tauros di Paldea",
    "Paldean Wooper": "Wooper di Paldea",
    "Palkia ex": "Palkia-ex",
    "Parasol Lady": "Ombrellina",
    "Passimian ex": "Passimian-ex",
    "Peculiar Plaza": "Piazza Arcana",
    "Pidgeot ex": "Pidgeot-ex",
    Piers: "Ginepro",
    "Pikachu ex": "Pikachu-ex",
    "Plume Fossil": "Fossilpiuma",
    "Poison Barb": "Velenaculeo",
    "Pokémon Center Lady": "Addetta del Centro Pokémon",
    "Pokémon Communication": "Comunicazione Pokémon",
    "Pokémon Flute": "Pokéflauto",
    "Poliwrath ex": "Poliwrath-ex",
    Potion: "Pozione",
    "Prank Spinner": "Ruota della Sfortuna",
    "Primarina ex": "Primarina-ex",
    "Probopass ex": "Probopass-ex",
    "Professor Sada": "Prof.ssa Olim",
    "Professor Turo": "Professor Turum",
    "Professor's Research": "Ricerca Accademica",
    "Protective Poncho": "Poncho Protettivo",
    Psychic: "Sensitivo",
    "Puppy-Loving Girl": "Amante dei Cuccioli",
    "Quick-Grow Extract": "Fialetta di Fertilizzante",
    "Raging Bolt": "Furiatonante",
    "Raichu ex": "Raichu-ex",
    "Raikou ex": "Raikou-ex",
    "Rainbow Cave": "Caverna Arcobaleno",
    "Rapid Strike Urshifu": "Urshifu Stile Pluricolpo",
    "Rapidash ex": "Rapidash-ex",
    "Rare Candy": "Caramella Rara",
    "Rayquaza ex": "Rayquaza-ex",
    Red: "Rosso",
    "Red Card": "Cartelrosso",
    Repel: "Repellente",
    "Rescue Scarf": "Sciarpa Salvagente",
    "Roaring Moon": "Lunaruggente",
    "Rocky Helmet": "Bitorzolelmo",
    "Root Fossil": "Radifossile",
    "Rotom Dex": "Pokédex Rotom",
    "Rotom ex": "Rotom-ex",
    "Sail Fossil": "Fossilpinna",
    "Sandy Shocks": "Peldisabbia",
    "Scream Tail": "Codaurlante",
    "Shuckle ex": "Shuckle-ex",
    Sightseer: "Vacanziera",
    Silver: "Argento",
    "Single Strike Urshifu": "Urshifu Stile Singolcolpo",
    "Sitrus Berry": "Baccacedro",
    "Skarmory ex": "Skarmory-ex",
    "Skull Fossil": "Fossilcranio",
    Skyla: "Anemone",
    "Slither Wing": "Alirasenti",
    "Small Balloon": "Piccolo Palloncino",
    "Snorlax ex": "Snorlax-ex",
    "Solgaleo ex": "Solgaleo-ex",
    "Soothing Shore": "Litorale Confortante",
    Sophocles: "Chrys",
    "Squirt Bottle": "Annaffiatoio",
    "Starmie ex": "Starmie-ex",
    "Starting Plains": "Pianura degli Esordi",
    "Steel Apron": "Corazza Metallica",
    "Suicune ex": "Suicune-ex",
    "Swanna ex": "Swanna-ex",
    "Sylveon ex": "Sylveon-ex",
    "Tapu Koko ex": "Tapu Koko-ex",
    "Tauros ex": "Tauros-ex",
    "Teal Mask Ogerpon": "Ogerpon Maschera Turchese",
    "Teal Mask Ogerpon ex": "Ogerpon Maschera Turchese-ex",
    "Team Galactic Grunt": "Recluta del Team Galassia",
    "Team Rocket Grunt": "Recluta del Team Rocket",
    "Team Rocket's Arbok": "Arbok del Team Rocket",
    "Team Rocket's Articuno ex": "Articuno-ex del Team Rocket",
    "Team Rocket's Boss": "Capo Team Rocket",
    "Team Rocket's Drowzee": "Drowzee del Team Rocket",
    "Team Rocket's Ekans": "Ekans del Team Rocket",
    "Team Rocket's Electrode": "Electrode del Team Rocket",
    "Team Rocket's Goo-zooka": "Sparacolla del Team Rocket",
    "Team Rocket's Grimer": "Grimer del Team Rocket",
    "Team Rocket's Houndoom": "Houndoom del Team Rocket",
    "Team Rocket's Houndour": "Houndour del Team Rocket",
    "Team Rocket's Hypno": "Hypno del Team Rocket",
    "Team Rocket's Kecleon": "Kecleon del Team Rocket",
    "Team Rocket's Koffing": "Koffing del Team Rocket",
    "Team Rocket's Lapras": "Lapras del Team Rocket",
    "Team Rocket's Magmar": "Magmar del Team Rocket",
    "Team Rocket's Master Plan": "Grande Piano del Team Rocket",
    "Team Rocket's Meowth": "Meowth del Team Rocket",
    "Team Rocket's Mewtwo": "Mewtwo del Team Rocket",
    "Team Rocket's Moltres ex": "Moltres-ex del Team Rocket",
    "Team Rocket's Mr. Mime": "Mr. Mime del Team Rocket",
    "Team Rocket's Muk": "Muk del Team Rocket",
    "Team Rocket's Persian": "Persian del Team Rocket",
    "Team Rocket's Pincurchin": "Pincurchin del Team Rocket",
    "Team Rocket's Raticate ex": "Raticate-ex del Team Rocket",
    "Team Rocket's Rattata": "Rattata del Team Rocket",
    "Team Rocket's Researcher": "Ricercatrice del Team Rocket",
    "Team Rocket's Scyther": "Scyther del Team Rocket",
    "Team Rocket's Slowking ex": "Slowking-ex del Team Rocket",
    "Team Rocket's Slowpoke": "Slowpoke del Team Rocket",
    "Team Rocket's Sneasel": "Sneasel del Team Rocket",
    "Team Rocket's Thieving Machine": "Ladrobot del Team Rocket",
    "Team Rocket's Tinkatink": "Tinkatink del Team Rocket",
    "Team Rocket's Tinkaton": "Tinkaton del Team Rocket",
    "Team Rocket's Tinkatuff": "Tinkatuff del Team Rocket",
    "Team Rocket's Voltorb": "Voltorb del Team Rocket",
    "Team Rocket's Weezing ex": "Weezing-ex del Team Rocket",
    "Team Rocket's Wobbuffet": "Wobbuffet del Team Rocket",
    "Team Rocket's Zapdos ex": "Zapdos-ex del Team Rocket",
    "Team Star Grunt": "Recluta del Team Star",
    "Terapagos ex": "Terapagos-ex",
    "Tinkaton ex": "Tinkaton-ex",
    "Toxtricity ex": "Toxtricity-ex",
    "Training Area": "Campo di Allenamento",
    "Traveling Merchant": "Venditrice Itinerante",
    "Type: Null": "Tipo Zero",
    "Typhlosion ex": "Typhlosion-ex",
    "Ultra Necrozma ex": "UltraNecrozma-ex",
    "Umbreon ex": "Umbreon-ex",
    "Vaporeon ex": "Vaporeon-ex",
    "Venusaur ex": "Venusaur-ex",
    "Vespiquen ex": "Vespiquen-ex",
    Volkner: "Corrado",
    "Wailord ex": "Wailord-ex",
    "Walking Wake": "Acquecrespe",
    Wallace: "Adriano",
    Wally: "Lino",
    "Wash Rotom": "Rotom Lavaggio",
    "Weavile ex": "Weavile-ex",
    "Wellspring Mask Ogerpon": "Ogerpon Maschera Pozzo",
    "Whimsicott ex": "Whimsicott-ex",
    Whitney: "Chiara",
    "Wigglytuff ex": "Wigglytuff-ex",
    Will: "Pino",
    "Wishiwashi ex": "Wishiwashi-ex",
    "Wugtrio ex": "Wugtrio-ex",
    "X Speed": "Velocità X",
    "Yanmega ex": "Yanmega-ex",
    "Zapdos ex": "Zapdos-ex",
    "Zoroark ex": "Zoroark-ex",
    "Zygarde ex": "Zygarde-ex",
  };

  // effetti (flair): "Nome inglese|cosmetic|battle" -> nome italiano
  const EFFECTS = {
    "Big Rings (Blue)|lotta": "Cerchi rotanti blu",
    "Big Rings (Light Blue)|lotta": "Cerchi rotanti blu",
    "Big Rings (Purple)|lotta": "Cerchi rotanti viola",
    "Big Rings (Yellow)|lotta": "Cerchi rotanti gialli",
    "Big Rings (Yellow-Green)|lotta": "Cerchi rotanti giallo-verdi",
    "Bubbles (Light Blue)|decorazione": "Bolle azzurre",
    "Bubbles (Light Blue)|lotta": "Bolle azzurre",
    "Bursts (Blue)|decorazione": "Scoppi blu",
    "Bursts (Orange)|decorazione": "Scoppi arancioni",
    "Bursts (Orange)|lotta": "Scoppi arancioni",
    "Bursts (Purple)|decorazione": "Scoppi viola",
    "Bursts (Purple)|lotta": "Scoppi viola",
    "Circles (Light Blue)|lotta": "Cerchi azzurri",
    "Circles (Yellow)|lotta": "Cerchi gialli",
    "Clovers|lotta": "Quadrifogli",
    "Darkness Energy|decorazione": "Energia Oscurità",
    "Diamonds (Orange)|battle": "Rombi arancioni",
    "Diamonds (Orange)|cosmetic": "Rombi arancioni",
    "Diamonds (Orange)|decorazione": "Rombi arancioni",
    "Diamonds (Orange)|lotta": "Rombi arancioni",
    "Digital Squares (Orange)|lotta": "Quadrati digitali arancioni",
    "Feathers (Gray)|lotta": "Piume grigie",
    "Feathers (Orange)|decorazione": "Piume arancioni",
    "Feathers (Orange)|lotta": "Piume arancioni",
    "Feathers (White)|lotta": "Piume bianche",
    "Fighting Energy|decorazione": "Energia Lotta",
    "Fire Energy|decorazione": "Energia Fuoco",
    "Flame Trail (Orange)|decorazione": "Scie di fuoco arancioni",
    "Flames (Light Blue)|lotta": "Vampe azzurre",
    "Flames (Orange)|lotta": "Vampe arancioni",
    "Flowers (Orange)|lotta": "Fiori arancioni",
    "Flowers (Pink)|lotta": "Fiori rosa",
    "Flowers (Purple)|lotta": "Fiori viola",
    "Foliage|lotta": "Foglie",
    "Gale (Yellow-Green)|decorazione": "Folate di vento giallo-verdi",
    "Glowing Ring (Purple)|lotta": "Anello di luce viola",
    "Glowing Ring (Yellow)|lotta": "Anello di luce giallo",
    "Glowing Ring (Yellow-Green)|lotta": "Anello di luce giallo-verde",
    "Grass Energy|decorazione": "Energia Erba",
    "Heart Outlines (Light Blue)|lotta": "Cuori azzurri",
    "Heart Outlines (Pink)|decorazione": "Cuori rosa",
    "Heart Outlines (Pink)|lotta": "Cuori rosa",
    "Lightning Energy|decorazione": "Energia Lampo",
    "Lightning Surge (Light Blue)|decorazione": "Saette azzurre",
    "Lightning Surge (Light Blue)|lotta": "Saette azzurre",
    "Lightning Surge (Yellow)|decorazione": "Saette gialle",
    "Lightning Surge (Yellow)|lotta": "Saette gialle",
    "Linked Sparkles|decorazione": "Luccichio della simbiosi",
    "Linked Sparkles|lotta": "Luccichio della simbiosi",
    "Mega Evolution|decorazione": "Megaevoluzione",
    "Metal Energy|decorazione": "Energia Metallo",
    "Mini Triangles (Blue)|lotta": "Triangolini blu",
    "Mini Triangles (Gray)|lotta": "Triangolini grigi",
    "Mini Triangles (Light Blue)|decorazione": "Triangolini blu",
    "Music Notes (Pink)|decorazione": "Note musicali rosa",
    "Petals (Red)|decorazione": "Petali rossi",
    "Petals (Red)|lotta": "Petali rossi",
    "Petals (White)|lotta": "Petali bianchi",
    "Pikachu Silhouettes|lotta": "Silhouette Pikachu",
    "Poké Ball|decorazione": "Poké Ball",
    "Poké Ball|lotta": "Poké Ball",
    "Puffs (Gray)|lotta": "Nuvole di polvere grigie",
    "Puffs (White)|lotta": "Nuvole di polvere bianche",
    "Ripples (Light Blue)|decorazione": "Increspature azzurre",
    "Ripples (Navy Blue)|decorazione": "Increspature blu marino",
    "Ripples (Purple)|decorazione": "Increspature viola",
    "Rounded Squares (Blue)|lotta": "Quadrati smussati blu",
    "Rounded Squares (Brown)|lotta": "Quadrati smussati marroni",
    "Small Hearts (Blue)|decorazione": "Cuoricini blu",
    "Small Hearts (Blue)|lotta": "Cuoricini blu",
    "Small Hearts (Pink)|lotta": "Cuoricini rosa",
    "Small Hexagons (Brown)|lotta": "Esagoni piccoli marroni",
    "Small Hexagons (Gray)|lotta": "Esagoni piccoli grigi",
    "Small Hexagons (Light Blue)|lotta": "Esagoni piccoli azzurri",
    "Small Rocks (Brown)|lotta": "Pietre marroni",
    "Small Stars (Gray)|lotta": "Stelline grigie",
    "Small Stars (Yellow)|decorazione": "Stelline gialle",
    "Small Stars (Yellow)|lotta": "Stelline gialle",
    "Snowflakes|lotta": "Fiocchi di neve",
    "Sparkles (Gold)|decorazione": "Luccichio dorato",
    "Spinning Rings (Blue)|lotta": "Cerchi vorticanti azzurri",
    "Spinning Rings (Yellow)|lotta": "Cerchi vorticanti gialli",
    "Star Outlines (Light Blue)|lotta": "Stelle azzurre",
    "Star Outlines (Purple)|lotta": "Stelle viola",
    "Star Outlines (Yellow)|decorazione": "Stelle gialle",
    "Star Outlines (Yellow)|lotta": "Stelle gialle",
    "Stars Outline (Yellow)|decorazione": "Stelle gialle",
    "Sunshine Sparkles (Light Blue)|lotta": "Luccichio solare azzurro",
    "Sunshine Sparkles (Yellow)|lotta": "Luccichio solare giallo",
    "Sword Flash (Green)|lotta": "Fendenti di luce verdi",
    "Sword Flash (Light Blue)|lotta": "Fendenti di luce azzurri",
    "Sword Flash (Orange)|lotta": "Fendenti di luce arancioni",
    "Sword Flash (Purple)|lotta": "Fendenti di luce viola",
    "Sword Flash (Yellow)|lotta": "Fendenti di luce gialli",
    "Tiny Twinkles (Blue)|decorazione": "Luci soffuse blu",
    "Tiny Twinkles (Blue)|lotta": "Scintillio blu",
    "Tiny Twinkles (Purple)|lotta": "Scintillio viola",
    "Tiny Twinkles (Yellow)|lotta": "Scintillio giallo",
    "Tiny Twinkles (Yellow-Green)|lotta": "Scintillio giallo-verde",
    "Twinkles (Blue)|decorazione": "Luci soffuse blu",
    "Twinkles (Gold)|decorazione": "Luci soffuse dorate",
    "Twinkles (Purple)|decorazione": "Luci soffuse viola",
    "Ultra Beast|decorazione": "Ultracreatura",
    "Ultra Beast|lotta": "Ultracreatura",
    "Water Energy|decorazione": "Energia Acqua",
  };

  const TYPES = {
    Grass: "Erba",
    Fire: "Fuoco",
    Water: "Acqua",
    Lightning: "Lampo",
    Psychic: "Psico",
    Fighting: "Lotta",
    Darkness: "Oscurità",
    Metal: "Metallo",
    Dragon: "Drago",
    Colorless: "Incolore",
    Item: "Strumento",
    Supporter: "Aiuto",
    "Pokémon Tool": "Oggetto Pokémon",
    Stadium: "Stadio",
  };

  const RARITIES = {
    Diamond: "Diamante",
    Star: "Stella",
    Crown: "Corona",
    Shiny: "Cromatico",
  };

  const MONTHS = {
    January: "gennaio",
    February: "febbraio",
    March: "marzo",
    April: "aprile",
    May: "maggio",
    June: "giugno",
    July: "luglio",
    August: "agosto",
    September: "settembre",
    October: "ottobre",
    November: "novembre",
    December: "dicembre",
  };

  // i nomi senza " ex" si ricavano da quelli con " ex"
  for (const k of Object.keys(CARDS)) {
    if (/ ex$/.test(k) && !(k.slice(0, -3) in CARDS)) {
      CARDS[k.slice(0, -3)] = /-ex$/.test(CARDS[k])
        ? CARDS[k].slice(0, -3)
        : CARDS[k];
    }
  }

  const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const CARD_RES = Object.keys(CARDS)
    .sort((a, b) => b.length - a.length)
    .map((k) => [
      new RegExp("(?<![\\w'])" + escapeRe(k) + "(?![\\w'])", "g"),
      CARDS[k],
    ]);

  const TYPES_RE = Object.keys(TYPES)
    .sort((a, b) => b.length - a.length)
    .map(escapeRe)
    .join("|");

  /* ----------------------------------------------------------- funzioni */

  const setIt = (name) => SETS[name.trim()] || name.trim();

  function cardIt(name) {
    name = name.trim();
    if (CARDS[name]) return CARDS[name];
    const m = /^(.*) ex$/.exec(name);
    if (m) return (CARDS[m[1]] || m[1]) + "-ex";
    return name;
  }

  /**
   * Nomi italiani in cui "-ex" non e' in fondo, come "Raticate-ex del Team
   * Rocket": vanno spezzati nel nome base e nel resto del nome, da mostrare
   * dopo l'icona ex.
   */
  function exSplit(it) {
    const m = /^(.+?)-ex(\s+\S.*)$/.exec(it);
    return m ? [m[1], m[2].trim()] : null;
  }

  function cardItDeep(text) {
    // link a una carta specifica: "Lycanroc (Celestial Guardians 100)"
    text = text.replace(
      /\(([A-Za-z'’: -]+) (\d+)\)/g,
      (m, set, n) => `(${setIt(set)} ${n})`,
    );
    for (const [re, it] of CARD_RES) text = text.replace(re, it);
    text = text.replace(
      /(?<![\w-])([A-Z][\w.'’♀♂-]*(?: [\w.'’♀♂-]+)?) ex(?![\w-])/g,
      "$1-ex",
    );
    return text.replace(/ & /g, " e ");
  }

  function itDate(s) {
    return s.replace(
      new RegExp(
        "\\b(" + Object.keys(MONTHS).join("|") + ") (\\d{1,2}), (\\d{4})",
        "g",
      ),
      (m, month, day, year) => `${day} ${MONTHS[month]} ${year}`,
    );
  }

  function effectTmpl(en, kind) {
    const it = EFFECTS[`${en}|${kind}`] || EFFECTS[`${en}|lotta`] || en;
    return `{{GCCPocketItem|${it} (${kind})|${it} (${kind})|type=Effetto}}`;
  }

  /** Normalizza gli apostrofi tipografici usati da Bulbapedia. */
  function normApos(str) {
    return str.replace(/[\u2018\u2019]/g, "'");
  }

  /* ------------------------------------------------------- regole varie */

  function removeBanners(str) {
    return str
      .replace(/^\{\{TOC ?right\}\}\s*\n?/gm, "")
      .replace(/^\{\{DoubleProjectTag\|[^\n]*\}\}\s*\n?/gm, "");
  }

  function intro(str) {
    const re =
      /The following battles related to the \{\{TCGP\|([^}|]+)\}\} expansion are available to \[\[Pokémon Trading Card Game Pocket\]\] players\.(?:\n+All battles were added to the game alongside the .+? expansion on (.+?)\.)?/;
    return str.replace(re, (m, set, date) => {
      let out = `Le seguenti lotte sono relative all'espansione {{GCCP|${setIt(
        set,
      )}}} del {{GCClink|pocket}}`;
      if (date) {
        const d = date
          .replace(/ worldwide/, " in tutto il mondo")
          .replace(/\((.+?) in New Zealand\)/, "(il $1 in Nuova Zelanda)");
        out += " e sono state rese disponibili il " + itDate(d);
      }
      return out + ".";
    });
  }

  function rules(str) {
    return str
      .replace(
        /The following battle rules are in effect for all battles\w*:/,
        "Tutte le lotte hanno le seguenti regole:",
      )
      .replace(/\* '''Rule (\d+):''' /g, "* '''Regola $1''': ")
      .replace(/Maximum of 50 turns/, "Massimo 50 turni")
      .replace(/3 points to win/, "Vittoria con 3 punti")
      .replace(/No time limit per turn/, "Nessun limite di tempo per turno");
  }

  function headings(str) {
    return str
      .replace(
        /^==\s*Beginner step-up battles\s*==\s*$/gm,
        "==Lotta per gradi - Principiante==",
      )
      .replace(
        /^==\s*Intermediate step-up battles\s*==\s*$/gm,
        "==Lotta per gradi - Intermedio==",
      )
      .replace(
        /^==\s*Advanced step-up battles\s*==\s*$/gm,
        "==Lotta per gradi - Avanzato==",
      )
      .replace(
        /^==\s*Expert (?:solo|step-up) battles\s*==\s*$/gm,
        "==Lotta con CPU pro==",
      )
      .replace(
        /All opponents use the following accessories in battle:/g,
        "Tutti i mazzi utilizzano i seguenti accessori:",
      );
  }

  /** Nome del mazzo: Bulbapedia a volte sposta o duplica la parola "Deck". */
  function deckName(name) {
    return cardItDeep(name.replace(/\s*\bDeck\b\s*/g, " ").trim());
  }

  function deckTitles(str) {
    str = str.replace(
      /^===\s*(.+?) Deck \((.+?)\)\s*===\s*$/gm,
      (m, name, set) => `=== Mazzo ${deckName(name)} (${setIt(set)}) ===`,
    );
    str = str.replace(
      /\{\{main\|(.+?) Deck \((.+?)\)\}\}/g,
      (m, name, set) =>
        `{{principale|Mazzo ${deckName(name)} (${setIt(set)})}}`,
    );
    str = str.replace(
      /\|title=(.+?) Deck \((.+?)\)\}\}/g,
      (m, name, set) => `|title=Mazzo ${deckName(name)} (${setIt(set)})}}`,
    );
    // casi in cui Bulbapedia omette la parola "Deck"
    str = str.replace(
      /\|title=(?!Mazzo)(.+?) \(([^()]+)\)\}\}/g,
      (m, name, set) => `|title=Mazzo ${deckName(name)} (${setIt(set)})}}`,
    );
    return str;
  }

  /**
   * Traduce una singola frase sugli effetti (flair), o null se non lo e'.
   * Forme gestite: "X has the Y ...", "The X card has the Y ...",
   * "The X cards have the Y ...", "Both X (cards) have the Y ...",
   * "Both X cards and Y have the Y ...", "X and Y both have the Z ...",
   * "X and Y cards have the Z ...", "X cards have the Y and Z ... flairs".
   */
  function flairSentence(sent) {
    const m =
      /^(.*?) (has|have) the (.+?) (cosmetic|battle) (?:\[\[)?flair(?:\]\])?s?\.$/.exec(
        sent,
      );
    if (!m) return null;
    const kind = m[4] === "battle" ? "lotta" : "decorazione";

    // soggetto: "Both X cards and Y", "X and Y both", "The X cards", "X card ex"
    let subj = m[1];
    const both = /^Both /.test(subj);
    subj = subj.replace(/^Both /, "").replace(/^The /, "");
    let names;
    let mm = /^(.+?) cards? and (.+)$/.exec(subj);
    if (mm) names = [mm[1], mm[2]];
    else if ((mm = /^(.+?) and (.+?)(?: both)?$/.exec(subj)))
      names = [mm[1], mm[2]];
    else names = [subj];
    const plural = m[2] === "have" || / cards\b/.test(subj);
    names = names.map((n) =>
      cardItDeep(
        n
          .replace(/\s*\bcards?\s*$/, "")
          .replace(/\s*\bcard\b\s*/g, " ")
          .replace(/\s{2,}/g, " ")
          .trim(),
      ),
    );

    // effetti: "Y", oppure "Y and Z" quando la carta ne ha due
    const effects = m[3]
      .replace(/\s{2,}/g, " ")
      .split(/ and /)
      .map((e) => effectTmpl(e.trim(), kind));

    if (names.length === 2) {
      if (both && / cards? and /.test(subj))
        return `Entrambe le carte di ${names[0]} e quella di ${names[1]} hanno l'effetto ${effects[0]}.`;
      if (both)
        return `Entrambe le carte di ${names[0]} e ${names[1]} hanno l'effetto ${effects[0]}.`;
      return `Le carte di ${names[0]} e ${names[1]} hanno entrambe l'effetto ${effects[0]}.`;
    }
    if (effects.length === 2)
      return `Una carta di ${names[0]} ha l'effetto ${effects[0]} e l'altra l'effetto ${effects[1]}.`;
    if (plural)
      return `Entrambe le carte di ${names[0]} hanno l'effetto ${effects[0]}.`;
    return `La carta di ${names[0]} ha l'effetto ${effects[0]}.`;
  }

  function flairs(str) {
    return str
      .split("\n")
      .map((line) => {
        if (line.indexOf("flair") < 0) return line;
        const parts = line.split(/(?<!Mr\.)(?<!Lt\.)\.\s+/);
        const out = [];
        parts.forEach((part, i) => {
          let sent = part.trim();
          if (!sent) return;
          if (i < parts.length - 1 && !/\.$/.test(sent)) sent += ".";
          out.push(flairSentence(sent) || sent);
        });
        return out.join(" ");
      })
      .join("\n");
  }

  function deckList(str) {
    str = str.replace(
      /(\{\{TCGPocketDeckList\/Header[^\n]*\}\}\n)((?:\{\{TCGPocketDeckList\/Entry[^\n]*\}\}\n)+)\{\{TCGPocketDeckList\/Footer[^\n]*\}\}/g,
      (m, header, entries) => {
        const lines = entries.replace(/\n+$/, "").split("\n");
        lines[lines.length - 1] = lines[lines.length - 1].replace(
          /\}\}$/,
          "|lastcard=yes}}",
        );
        return (
          '<div class="flex flex-row flex-wrap">\n' +
          '<div class="max-width-xl-50 min-width-sm-100" style="padding: 0.1em;">\n' +
          header +
          lines.join("\n") +
          "\n|}</div>"
        );
      },
    );
    return str.replace(
      /(\{\{TCGPocketBattleTasks\|[^\n]*\n.*?\n\}\})(?!<\/div>)/gs,
      "$1</div>",
    );
  }

  /** Numero di un item: Bulbapedia separa le migliaia con la virgola, PCW col punto. */
  function itemNum(value) {
    return value.replace(/,/g, ".");
  }

  function items(str) {
    return str
      .replace(
        /\{\{TCGPocketItem\|Poké Ball\|Poké Ball \(coin\)\|type=Coin\}\}/g,
        "{{GCCPocketItem|Poké Ball|Poké Ball (moneta)|type=Moneta}}",
      )
      .replace(
        /\{\{TCGPocketItem\|Special Set 0?(\d+)\|Special Set 0?\d+ \(coin\)\|type=Coin\}\}/g,
        "{{GCCPocketItem|Set speciale $1|Set speciale $1 (moneta)|type=Moneta}}",
      )
      .replace(
        /\{\{TCGPocketItem\|Sleeve Special Set 0?(\d+)\|Special Set 0?\d+ \(card sleeve\)\}\}/g,
        "{{GCCPocketItem|Mini Set speciale $1|Set speciale $1 (bustine protettive)|type=Bustina protettiva}}",
      )
      .replace(
        /\{\{TCGPocketItem\|Playmat Special Set 0?(\d+)\|Special Set 0?\d+ \(playmat\)\}\}/g,
        "{{GCCPocketItem|Mini Set speciale $1|Set speciale $1 (tabellone)|type=Tabellone}}",
      )
      .replace(
        /\{\{TCGPocketItem\|EXP\|(?:type=Icon\|)?num=(\d+)\}\}/g,
        "{{GCCPocketItem||Punti Esperienza|num=$1|type=EXP}}",
      )
      .replace(
        /\{\{TCGPocketItem\|Pack Hourglass\|num=([\d.,]+)\}\}/g,
        (m, n) =>
          `{{GCCPocketItem|Clessidra buste|num=${itemNum(n)}|type=Clessidra}}`,
      )
      .replace(
        /\{\{TCGPocketItem\|Wonder Hourglass\|num=([\d.,]+)\}\}/g,
        (m, n) =>
          `{{GCCPocketItem|Clessidra misteriosa|num=${itemNum(
            n,
          )}|type=Clessidra}}`,
      )
      .replace(
        /\{\{TCGPocketItem\|Trade Hourglass\|num=([\d.,]+)\}\}/g,
        (m, n) =>
          `{{GCCPocketItem|Clessidra scambio|num=${itemNum(
            n,
          )}|type=Clessidra}}`,
      )
      .replace(
        /\{\{TCGPocketItem\|Shinedust\|num=([\d.,]+)\}\}/g,
        (m, n) => `{{GCCPocketItem|Sabbialuce|num=${itemNum(n)}}}`,
      )
      .replace(
        /\{\{TCGPocketItem\|Shop Ticket\|num=([\d.,]+)\}\}/g,
        (m, n) =>
          `{{GCCPocketItem|Buono negozio|num=${itemNum(n)}|type=Buono}}`,
      );
  }

  const MISSION_RULES = [
    [
      /Knock [Oo]ut your opponent['’]s Active Pokémon (\d+) times? with an attack from a (?:\{\{ct\|([^}]+)\}\}|([A-Za-z]+)-type) Pokémon/g,
      (m, n, tmpl, plain) =>
        `Metti KO il Pokémon attivo avversario ${
          n === "1" ? "una volta" : n + " volte"
        } con un attacco di un Pokémon {{ct|${
          TYPES[tmpl || plain] || tmpl || plain
        }}}.`,
    ],
    [
      /Put (\d+) Basic Pokémon into play/g,
      (m, n) => `Metti in gioco ${n} Pokémon Base.`,
    ],
    [
      /Put a Stage 1 Pokémon into play/g,
      () => "Metti in gioco un Pokémon di Fase 1.",
    ],
    [
      /Win this battle by turn (\d+)/g,
      (m, n) => `Vinci la lotta entro il turno ${n}.`,
    ],
    [
      /Win this battle without your opponent getting any points/g,
      () => "Vinci la lotta senza far ottenere punti al tuo avversario.",
    ],
    [
      /Do (\d+) or more damage in total (?:to|your) (?:your )?opponent['’]s Pokémon with one attack/g,
      (m, n) =>
        `Infliggi almeno ${n} danni totali ai Pokémon dell'avversario con un unico attacco.`,
    ],
    [
      /Deal ([\d,]+) or more damage/g,
      (m, n) => `Infliggi almeno ${n.replace(/,/g, ".")} danni.`,
    ],
    [/Get (\d+) or more points/g, (m, n) => `Ottieni almeno ${n} punti.`],
    [
      /Make your opponent['’]s Pokémon Poisoned (\d+) times?/g,
      () => "Lascia un Pokémon avversario avvelenato una volta.",
    ],
    [
      /Win this battle without any (?:\{\{TCGP\|Pokémon ex\}\}|Pokémon ex) included in your deck/g,
      () => "Vinci la lotta con un mazzo privo di Pokémon-ex.",
    ],
    [
      /Win this battle without any (?:\{\{TCGP\|Trainer card\}\}s|Trainer cards)(?: included in your deck)?/g,
      () => "Vinci la lotta con un mazzo privo di carte Allenatore.",
    ],
    [
      // Bulbapedia a volte scrive "withot"
      /Win this battle witho?u?t any (?:\{\{TCGP\|Stadium card\}\}s|Stadium cards)(?: included in your deck)?/g,
      () => "Vinci la lotta con un mazzo privo di carte Stadio.",
    ],
    [
      /Win this battle with 1 or more (?:\{\{TCGP\|Mega Evolution Pokémon ex\}\}|Mega Evolution Pokémon ex) included in your deck/g,
      () =>
        "Vinci la lotta con un mazzo che contiene almeno un Pokémon-ex Megaevoluzione.",
    ],
    [
      /Win this battle with (\d+) or more (?:\{\{TCGP\|([^}]+)\}\}|([A-Za-z'’.: -]+?)) cards included in your deck/g,
      (m, n, tmpl, plain) =>
        `Vinci con un mazzo con almeno ${n} carte dell'espansione {{GCCP|${setIt(
          tmpl || plain,
        )}}}.`,
    ],
    [
      /Win this battle with a deck whose Pokémon are only (?:\{\{ct\|([^}]+)\}\}|([A-Za-z]+)[- ]?type)/g,
      (m, tmpl, plain) =>
        `Vinci la lotta usando un mazzo che contiene solo Pokémon di {{ct|${
          TYPES[tmpl || plain] || tmpl || plain
        }}}.`,
    ],
    [
      /Win this battle with a deck where all the Pokémon cards are of \{\{rar\/TCGP\|Diamond\|1\}\}, \{\{rar\/TCGP\|Diamond\|2\}\}, and\/or \{\{rar\/TCGP\|Diamond\|3\}\} rarity/g,
      () =>
        "Vinci la lotta usando un mazzo in cui tutti i Pokémon sono di rarità {{rar|Diamante 1}}, {{rar|Diamante 2}} e/o {{rar|Diamante 3}}.",
    ],
  ];

  function missions(str) {
    for (const [re, rep] of MISSION_RULES) str = str.replace(re, rep);
    return str
      .replace(
        /\{\{TCGPocketMission\/Entry\|mission=/g,
        "{{GCCPocketMission/Entry|task=",
      )
      .replace(
        /\{\{GCCPocketMission\/Entry\|mission=/g,
        "{{GCCPocketMission/Entry|task=",
      )
      .replace(/\|lastitem=yes/g, "");
  }

  function templates(str) {
    // icona Mega Evolution ex: Bulbapedia ha sia {{TCGP Icon|Mega ex}} sia {{mega ex}}
    return str
      .replace(/\{\{TCGP Icon\|Mega ex\}\}/g, "{{ex|mega pocket}}")
      .replace(/\{\{[Mm]ega ex\}\}/g, "{{ex|mega pocket}}")
      .replace(/\{\{TCGP Icon\|ex\}\}/g, "{{ex|pocket}}")
      .replace(/\{\{rar\/TCGP\|Diamond\|(\d)\}\}/g, "{{rar|Diamante $1}}")
      .replace(/\{\{ct\|([^}]+)\}\}/g, (m, t) => `{{ct|${TYPES[t] || t}}}`)
      .replace(
        /<small><b>\[Professor Oak\]<\/b><\/small>/g,
        "<small>''[Professor Oak]''</small>",
      )
      .replace(
        /<small>\[Professor Oak\]<\/small>/g,
        "<small>''[Professor Oak]''</small>",
      )
      .replace(/\{\{TCGPocketDeckList\/Header/g, "{{GCCPocketDeckList/Header")
      .replace(/\{\{TCGPocketDeckList\/Entry/g, "{{GCCPocketDeckList/Entry")
      .replace(/\{\{TCGPocketBattleTasks/g, "{{GCCPocketBattleTasks");
  }

  function cards(str) {
    return str.replace(
      /\{\{TCG ID\|([^|}]+)\|([^|}]+)\|(\d+)(\|[^|}]*)?\}\}(\{\{ex\|[^}]*\}\})?/g,
      (m, set, name, num, disp, icon) => {
        const s = setIt(set);
        const card = cardIt(name);
        const it = disp ? cardIt(disp.slice(1)) : "";
        // "Raticate-ex del Team Rocket" va spezzato attorno all'icona ex,
        // cosi' il resto del nome resta visibile (e cliccabile).
        const split = it && icon ? exSplit(it) : null;
        if (split)
          return (
            `{{GCC ID|${s}|${card}|${num}|${split[0]}}${icon}` +
            ` {{GCC ID|${s}|${card}|${num}|${split[1]}}}`
          );
        const display = disp ? "|" + it : "";
        return `{{GCC ID|${s}|${card}|${num}${display}}}${icon || ""}`;
      },
    );
  }

  function typesAndRarities(str) {
    str = str.replace(
      new RegExp(
        "(\\{\\{(?:TCGPocket|GCCPocket)DeckList/Header\\|type=)([A-Za-z]+)",
        "g",
      ),
      (m, p, t) => p + (TYPES[t] || t),
    );
    str = str.replace(
      new RegExp(
        "(\\{\\{(?:TCGPocket|GCCPocket)BattleTasks\\|type=)([A-Za-z]+)",
        "g",
      ),
      (m, p, t) => p + (TYPES[t] || t),
    );
    // tipo della carta (terzo parametro di DeckList/Entry)
    str = str.replace(
      new RegExp(
        "(\\{\\{(?:TCGPocket|GCCPocket)DeckList/Entry\\|\\d+\\|.*?)\\|(" +
          TYPES_RE +
          ")(?=\\||\\})",
        "g",
      ),
      (m, p, t) => p + "|" + TYPES[t],
    );
    return str.replace(
      /rarity=(Diamond|Star|Crown|Shiny)/g,
      (m, r) => "rarity=" + RARITIES[r],
    );
  }

  function footer(str) {
    // il titolo inglese si ricava dal nome inglese dell'espansione
    const cat = /\[\[Category:([^\]|]+) \(TCG Pocket\)\|\*\*\*\]\]/.exec(str);
    const it = /^\[\[it:[^\]]+\]\]\s*$/m.exec(str);
    if (cat) {
      const en = `[[en:List of ${cat[1]} solo battles in Pokémon TCG Pocket]]`;
      if (it)
        str =
          str.slice(0, it.index) +
          str.slice(it.index + it[0].length).replace(/^\n+/, "");
      str = str.replace(/^\[\[de:[^\]]+\]\]\s*$/m, (m) => m + "\n" + en);
    }
    return str.replace(
      /\[\[Category:([^\]|]+) \(TCG Pocket\)\|\*\*\*\]\]\n\[\[Category:Pokémon TCG Pocket solo battles\|[^\]]*\]\]/,
      (m, set) => {
        const s = setIt(set);
        return `[[Categoria:${s} (GCC Pocket)]]\n[[Categoria:Lotte con CPU (GCC Pocket)|${s[0].toUpperCase()}]]`;
      },
    );
  }

  /* ------------------------------------------------ pagine intere dei mazzi */

  /** Icona dei Pokémon-ex nel wikitesto di PCW. */
  const EX_ICON = "{{ex|pocket}}";

  /** Parametri di un template, uno per riga. */
  function params(body) {
    const out = {};
    body.replace(/^\|\s*([\w ]+?)\s*=\s*([^\n]*)$/gm, (m, k, v) => {
      out[k] = v.trim();
      return m;
    });
    return out;
  }

  /** Carte citate in un testo, con eventuale nome mostrato e icona ex. */
  function cardRefs(text) {
    const out = [];
    (text || "").replace(
      /\{\{TCG ID\|([^|}]+)\|([^|}]+)\|(\d+)(?:\|([^|}]*))?\}\}(\{\{(?:TCGP Icon|ex)\|[^}]*\}\})?/g,
      (m, set, name, num, disp, icon) => {
        out.push({ set, name, num, disp, icon });
        return m;
      },
    );
    return out;
  }

  /**
   * Tipi di energia dell'elenco |types=, che Bulbapedia scrive a volte con
   * {{e|...}} e a volte con {{ct|...}}.
   */
  const TYPES_ANY = /\{\{(?:e|ct)\|([^}]+)\}\}/g;

  function energyTypes(text) {
    const out = [];
    (text || "").replace(TYPES_ANY, (m, t) => {
      out.push(TYPES[t] || t);
      return m;
    });
    return out;
  }

  /** Lo stesso elenco, ma come testo tradotto e con il template giusto. */
  function energyText(text) {
    return (text || "").replace(
      TYPES_ANY,
      (m, t) => "{{e|" + (TYPES[t] || t) + "}}",
    );
  }

  /** Nome del file immagine di una carta chiave: "NomeSet123.png". */
  const imageFile = ({ set, name, num }) =>
    (cardIt(name) + setIt(set) + num).replace(/[ .'’]/g, "") + ".png";

  /**
   * Riferimento a una carta nel wikitesto di PCW. Per i Pokémon-ex il nome
   * mostrato (senza "-ex") precede l'icona, come nelle pagine dei mazzi.
   */
  function cardRef({ set, name, num, disp, icon }) {
    const s = setIt(set);
    const card = cardIt(name);
    if (disp)
      return `{{GCC ID|${s}|${card}|${num}|${cardIt(disp)}}}${icon || ""}`;
    const split = exSplit(card);
    if (split)
      return (
        `{{GCC ID|${s}|${card}|${num}|${split[0]}}}${EX_ICON}` +
        ` {{GCC ID|${s}|${card}|${num}|${split[1]}}}`
      );
    if (/-ex$/.test(card))
      return `{{GCC ID|${s}|${card}|${num}|${card.slice(0, -3)}}}${EX_ICON}`;
    return `{{GCC ID|${s}|${card}|${num}}}${icon || ""}`;
  }

  /** Didascalia dell'infobox: le carte chiave del mazzo. */
  function deckCaption(cards) {
    const list = cards
      .map(cardRef)
      .join(", ")
      .replace(/, ([^,]*)$/, " e $1");
    const kind =
      cards.length === 1
        ? "la carta chiave del mazzo"
        : "le carte chiave del mazzo";
    return `${list}, ${kind}`;
  }

  /** Titolo italiano del mazzo, ricavato dal nome nella langtable. */
  function deckTitle(str) {
    const m = /\|it=([^\n]*)/.exec(str);
    return m ? m[1].trim().replace(/\s*\([^()]*\)\s*$/, "") : "";
  }

  /** Nome di una persona citata nell'introduzione, in link. */
  function linkedIt(text) {
    return text
      .replace(
        /\[\[([^|\]]+)(\|[^\]]*)?\]\]/,
        (m, name, alias) => `[[${cardIt(name)}${alias || ""}]]`,
      )
      .replace(/\{\{ga\|([^}]+)\}\}/, (m, name) => `[[${cardIt(name)}]]`);
  }

  /** Seconda frase dell'introduzione: su cosa si basa il mazzo. */
  function deckFocus(intro) {
    const m = /It focuses on ([\s\S]*?) Pokémon\./.exec(intro);
    if (!m) return "";
    const items = m[1]
      .replace(/,\s*and\s+/g, " and ")
      .split(/\s+and\s+/)
      .map((s) => s.split(/,\s*/))
      .reduce((a, b) => a.concat(b), [])
      .map((s) => s.trim())
      .filter(Boolean);
    const types = items.filter((i) => /^\{\{ct\|/.test(i));
    const others = items.filter((i) => !/^\{\{ct\|/.test(i)).map(linkedIt);
    const list = types.join(", ").replace(/, ([^,]*)$/, " e $1");
    if (!others.length) return `Si basa su Pokémon di ${list}.`;
    return `Si basa su ${others.join(", ")} e Pokémon di ${list}.`;
  }

  /**
   * Introduzione della pagina. La riga sulle lotte con CPU presente su
   * Bulbapedia non viene riportata, come nelle pagine di PCW.
   */
  function deckIntro(intro, title, set) {
    const first =
      /The '''.*?''' is a \[\[deck\]\] in \[\[Pokémon Trading Card Game Pocket\]\] that was added to the game alongside the \{\{TCGP\|[^}]+\}\} expansion\./;
    if (!first.test(intro)) return intro;
    const out = [
      `Il '''${title}''' è un mazzo a tema del {{GCClink|pocket}} aggiunto`,
      `insieme all'espansione {{GCCP|${set}}}.`,
    ].join(" ");
    const focus = deckFocus(intro);
    return focus ? `${out}\n${focus}` : out;
  }

  /** Infobox {{DeckInfobox}} a partire da {{TCGPocketDeckInfobox}}. */
  function deckInfobox(info, cards, types, title) {
    const lines = ["{{DeckInfobox", `|title=${title}`];
    if (types[0]) lines.push(`|type=${types[0]}`);
    if (types[1]) lines.push(`|type2=${types[1]}`);
    cards.forEach((c, i) =>
      lines.push(`|image${i ? i + 1 : ""}=${imageFile(c)}`),
    );
    lines.push(`|caption=${deckCaption(cards)}`);
    lines.push(`|expansion={{GCCP|${setIt(info.setname)}}}`);
    lines.push(`|release=${itDate(info.release || "")}`);
    lines.push(`|types=${energyText(info.types)}`);
    lines.push("}}");
    return lines.join("\n");
  }

  /** Sezione "Ottenere il mazzo": testo fisso, tranne casi particolari. */
  function deckObtaining(text, n) {
    if (
      !/Players can obtain and use the[\s\S]*?Collect all 20 cards in the deck to obtain/.test(
        text,
      )
    )
      return text.replace(/^== Obtaining the deck ==/, "==Ottenere il mazzo==");
    return [
      "==Ottenere il mazzo==",
      "Il mazzo si può ottenere e usare completando una delle due [[Missione (GCC Pocket)|missioni mazzo]]:",
      `* Ottenere ${
        n === 1 ? "la carta chiave" : "le carte chiave"
      } e ricevere il mazzo a nolo (utilizzabile solo per 10 lotte).`,
      "* Creare il mazzo dopo aver collezionato tutte le 20 carte incluse nell'elenco.",
    ].join("\n");
  }

  /** Sezione "Elenco carte nel mazzo" con la tabella chiusa da |}. */
  function deckListPage(text, types) {
    const entries = [];
    text.replace(/^\{\{TCGPocketDeckList\/Entry\|[^\n]*$/gm, (m) => {
      entries.push(m);
      return m;
    });
    const rows = entries.map((line, i) => {
      const pars = [];
      if (i === 0) pars.push("firstcard");
      if (i === entries.length - 1) pars.push("lastcard");
      if (!pars.length) return line;
      return line.replace(
        /\s*\}\}$/,
        "|" + pars.map((p) => p + "=yes").join("|") + "}}",
      );
    });
    const header =
      "{{GCCPocketDeckList/Header|type=" +
      types[0] +
      (types[1] ? "|type2=" + types[1] : "") +
      "}}";
    return [
      "==Elenco carte nel mazzo==",
      "L'elenco indica le rarità mostrate nel mazzo a nolo. Per costruire il mazzo, ogni carta può essere sostituita da un'altra versione della stessa.",
      "",
      header,
    ]
      .concat(rows, ["|}"])
      .join("\n");
  }

  /**
   * Sezione "In altre lingue": la riga italiana diventa quella inglese, il
   * resto lo fa la macro "Traduci langtable".
   */
  function deckLangtable(text, info, types) {
    const block = /\{\{langtable[\s\S]*?\n\}\}/.exec(text);
    if (!block) return "";
    let lt = block[0]
      .replace(
        /\{\{langtable[^\n]*\n/,
        "{{langtable|" +
          types
            .slice(0, 2)
            .map((t, i) => (i ? "type2=" : "type=") + t.toLowerCase() + "_gcc")
            .join("|") +
          "\n",
      )
      .replace(/^\|it=[^\n]*\n/m, `|en=${info.deckname} (${info.setname})\n`);
    if (macros.langtable) lt = macros.langtable(lt);
    return `==In altre lingue==\n${lt}`;
  }

  /** Interwiki di una pagina, senza quello italiano. */
  function interwiki(str) {
    const links = {};
    str.replace(/^\[\[([a-z_]+):([^\]]*)\]\]\s*$/gm, (m, code, value) => {
      if (code !== "it") links[code] = value.trim();
      return m;
    });
    return links;
  }

  /**
   * Categoria e interwiki in fondo alla pagina; quello inglese e' il titolo
   * della pagina di Bulbapedia.
   */
  function deckFooter(body, set, links) {
    const interwiki = Object.keys(links)
      .sort()
      .map((c) => `[[${c}:${links[c]}]]`)
      .join("\n");
    return (
      body
        .replace(/\{\{DoubleProjectTag[^\n]*\}\}\n?/g, "")
        .replace(/\n+$/, "") +
      `\n\n[[Categoria:Mazzi a tema ${set}]]\n\n${interwiki}\n`
    );
  }

  /** Contenuto di una sezione "== Titolo ==", fino alla sezione successiva. */
  function section(str, name) {
    const m = new RegExp(
      "^== " +
        name +
        " ==\\n([\\s\\S]*?)(?=\\n== |\\n\\{\\{DoubleProjectTag|$(?![\\s\\S]))",
      "m",
    ).exec(str);
    return m ? m[1] : "";
  }

  /**
   * Traduce una pagina intera di un mazzo di Bulbapedia ("X Deck (Set)"):
   * infobox, introduzione, sezioni, tabella, langtable, categoria e
   * interwiki. Se il testo non e' una pagina di mazzo resta invariato.
   */
  function deckPage(str) {
    const box = /\{\{TCGPocketDeckInfobox\n([\s\S]*?)\n\}\}/.exec(str);
    if (!box) return str;
    const info = params(box[1]);
    const title = deckTitle(str) || "Mazzo " + deckName(info.deckname);
    const cards = cardRefs(info.caption);
    const types = energyTypes(info.types);
    const set = setIt(info.setname);
    const rest = str.slice(box.index + box[0].length);
    const intro = /^([\s\S]*?)(?=\n== Obtaining the deck ==)/.exec(rest);
    const links = interwiki(str);
    links.en = `${info.deckname} (${info.setname})`;
    return deckFooter(
      [
        deckInfobox(info, cards, types, title) +
          "\n" +
          (intro ? deckIntro(intro[1].trim(), title, set) : ""),
        deckObtaining(section(str, "Obtaining the deck"), cards.length),
        deckListPage(section(str, "Deck list"), types),
        deckLangtable(str, info, types),
      ]
        .filter(Boolean)
        .join("\n\n"),
      set,
      links,
    );
  }

  /* -------------------------------------------------------- macro finale */

  function translate(str) {
    str = normApos(str);
    return [
      removeBanners,
      intro,
      rules,
      headings,
      deckTitles,
      flairs,
      deckList,
      items,
      missions,
      templates,
      cards,
      typesAndRarities,
      footer,
    ].reduce((s, f) => f(s), str);
  }

  macros["lotte con CPU GCC Pocket"] = translate;

  /**
   * Traduce una pagina di mazzo di Bulbapedia, intera oppure una singola
   * sezione "=== ... Deck (...) ===" (titolo, effetto della carta principale,
   * elenco mazzo e obiettivi).
   */
  macros["mazzo GCC Pocket"] = function (str) {
    str = normApos(str);
    return [
      deckPage,
      deckTitles,
      flairs,
      deckList,
      items,
      missions,
      templates,
      cards,
      typesAndRarities,
    ].reduce((s, f) => f(s), str);
  };

  if (utils.updateMenu) {
    utils.updateMenu();
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { translate, SETS, CARDS, EFFECTS, TYPES };
  }
})(typeof utils === "undefined" ? { macros: {} } : utils);
