"use strict";
/**
 * spin off-related macros
 */

(function (utils) {
  const macros = utils.macros;

  macros["spindata"] = function (str) {
    str = macros.mosse(str);
    str = macros.ShuffleAbil(str);
    str = macros.areeAmico(str);
    str = macros.tipi(str);

    return (
      str
        // Generic spindata replacements
        .replace(/==Side game data==/gi, "==Dati spin-off==")
        .replace(
          /{{Spindata\/Head\|type=(\w*)((\|)type2=(\w*))?}}/gi,
          "{{Spindata/Head|$1$3$4}}",
        )
        .replace(/\|}\s*$/, "&lt;/div&gt;")
        // .replace(/(?<![=}])\n(?!\|)/gi, '')
        .replace(/(?<![=}])\n/gi, "")
        .replace(/\|col=\d\|/gi, "|")
        // Move replacements corrections
        .replace(/\|Assistente=/gi, "|assist=")
        .replace(/\|speciale=/gi, "|special=")
        // Pinball
        .replace(/{{Spindata\/PinballRS\|/gi, "{{Spindata/PinballRZ|")
        .replace(
          /({{Spindata\/PinballRZ\|.*?\|)acquisition=Evolve(.*?}})/gi,
          "$1acquisition=Evoluzione$2",
        )
        .replace(
          /({{Spindata\/PinballRZ\|.*?\|)acquisition=Catch(.*?}})/gi,
          "$1acquisition=Cattura$2",
        )
        // Trozei (Link in Italian)
        .replace(/{{Spindata\/Trozei\|/gi, "{{Spindata/Link|")
        .replace(
          /({{Spindata\/Link\|.*?\|)rarity=Rare(.*?}})/gi,
          "$1rarity=Raro$2",
        )
        .replace(
          /({{Spindata\/Link\|.*?\|)rarity=Common(.*?}})/gi,
          "$1rarity=Comune$2",
        )
        // MDRB
        .replace(
          /({{Spindata\/MDRB\|.*?\|)rate=Evolve(.*?}})/gi,
          "$1rate=Evoluzione$2",
        )
        .replace(/({{Spindata\/MDRB.*?)\|P[\dL]=[^|}]*/gi, "$1")
        .replace(/({{Spindata\/MDRB.*?)\|P[\dL]=[^|}]*/gi, "$1") // Pls fix this shit
        .replace(/({{Spindata\/MDRB.*?)\|P[\dL]=[^|}]*/gi, "$1")
        .replace(/({{Spindata\/MDRB.*?)\|P[\dL]=[^|}]*(.*?}})/gi, "$1$2")
        // TODO: add a macro to translate friend areas
        // MDTOC
        .replace(/{{Spindata\/MDTDS\|/gi, "{{Spindata/MDTOC|")
        .replace(/({{Spindata\/MDTOC\|.*?\|)IQ=(.*?}})/gi, "$1QI=$2")
        // Rangers
        .replace(/{{Spindata\/Ranger SoA\|/gi, "{{Spindata/RangerOsA|")
        .replace(/{{Spindata\/Ranger GS\|/gi, "{{Spindata/RangerTL|")
        .replace(/({{Spindata\/Ranger.*?\|)MinEXP(=.*?}})/gi, "$1minEXP$2")
        .replace(/({{Spindata\/Ranger.*?\|)MaxEXP(=.*?}})/gi, "$1maxEXP$2")
        .replace(
          /({{Spindata\/Ranger(?:|OsA|TL)\|.*?\|)field(p?)=Burn(.*?}})/gi,
          "$1field$2=Fuoco$3",
        )
        .replace(
          /({{Spindata\/Ranger(?:|OsA|TL)\|.*?\|)field(p?)=Bruciatura(.*?}})/gi,
          "$1field$2=Fuoco$3",
        )
        .replace(
          /({{Spindata\/Ranger\|.*?\|)field=Cross(.*?}})/gi,
          "$1field=Valico$2",
        )
        .replace(
          /({{Spindata\/Ranger(?:|OsA|TL)\|.*?\|)field(p?)=Crush(.*?}})/gi,
          "$1field$2=Distruzione$3",
        )
        .replace(
          /({{Spindata\/Ranger(?:|OsA|TL)\|.*?\|)field(p?)=Cut(.*?}})/gi,
          "$1field$2=Taglio$3",
        )
        .replace(
          /({{Spindata\/Ranger\|.*?\|)field=Flash(.*?}})/gi,
          "$1field=Flash$2",
        )
        .replace(
          /({{Spindata\/Ranger\|.*?\|)field=Gust(.*?}})/gi,
          "$1field=Raffica$2",
        )
        .replace(
          /({{Spindata\/Ranger(?:|OsA|TL)\|.*?\|)field(p?)=Recharge(.*?}})/gi,
          "$1field$2=Ricarica$3",
        )
        .replace(
          /({{Spindata\/Ranger(?:|OsA|TL)\|.*?\|)field(p?)=Soak(.*?}})/gi,
          "$1field$2=Spruzzo$3",
        )
        .replace(
          /({{Spindata\/Ranger(?:|OsA|TL)\|.*?\|)field(p?)=Tackle(.*?}})/gi,
          "$1field$2=Azione$3",
        )
        .replace(
          /({{Spindata\/Ranger(?:OsA|TL)\|.*?\|)field(p?)=Electrify(.*?}})/gi,
          "$1field$2=Elettricit&agrave;$3",
        )
        .replace(
          /({{Spindata\/Ranger(?:OsA|TL)\|.*?\|)field(p?)=Psy Power(.*?}})/gi,
          "$1field$2=Potere Psico$3",
        )
        .replace(
          /({{Spindata\/Ranger(?:OsA|TL)\|.*?\|)field(p?)=Teleport(.*?}})/gi,
          "$1field$2=Teletrasporto$3",
        )
        .replace(
          /({{Spindata\/Ranger(?:OsA|TL)\|.*?\|)assist(p?)=Recharge(.*?}})/gi,
          "$1assist$2=Ricarica$3",
        )
        .replace(
          /({{Spindata\/Ranger\|.*?\|)assist=Discharge(.*?}})/gi,
          "$1assist=Shock$2",
        )
        // SuperRumble
        .replace(/{{Spindata\/RumbleBlast\|/gi, "{{Spindata/SuperRumble|")
        // Conquest
        // TODO: fix the move (should be the link to the Italian name with the English name text)
        // Link Battle
        .replace(/{{Spindata\/Battle Trozei\|/gi, "{{Spindata/Link Battle|")
        // .replace(/{{Spindata\/Battle Trozei\|type=(\w*)\|ndex=(\d*)\|power=(\d)\}\}/gi, '{{Spindata/Link Battle|ndex=$3|width-xl=50|width-sm=100|type=$2|power=$4|skill=|skilldesc=}}')
        // Shuffle
        .replace(/({{Spindata\/Shuffle.*?)\|skilldesc=[^|}]*(.*?}})/gi, "$1$2")
        // GO
        .replace(/{{m\|([^}]*)}}/gi, "[[$1]]")
        .replace(/({{Spindata\/GO.*?\|)candy(=.*?}})/gis, "$1candyname$2")
        // Remove the type parameter (here to use our template names)
        // TODO: do I really want to?
        .replace(
          /({{Spindata\/(?:Link(?! Battle)|MDRB|MDTOC|Ranger|RangerOsA|RangerTL).*?)\|type=\w*(.*?}})/gi,
          "$1$2",
        )
        .replace(/\|\-/g, "")
    );
  };

  macros.ShuffleAbil = function (str) {
    return (
      str
        .replace(/Opportunist/g, "Colpo di fortuna")
        .replace(/Heavy Hitter/g, "Superpugno")
        .replace(/Dragon Talon/g, "Artigli del Drago")
        .replace(/Power of 4/g, "Forza Quattro")
        .replace(/Power of 5/g, "Forza Cinque")
        .replace(/Last-Ditch Effort/g, "Ultima risorsa")
        .replace(/Hitting Streak/g, "Raffica")
        .replace(/Damage Streak/g, "Valanga")
        .replace(/Risk-Taker/g, "Alti e bassi")
        .replace(/Swarm/g, "Aiutinsetto")
        .replace(/Steely Resolve/g, "Cuore d'acciaio")
        .replace(/Pyre/g, "Ardore")
        .replace(/Dancing Dragons/g, "Combo del Drago")
        .replace(/Pummel/g, "Attacco poderoso")
        .replace(/Pixie Power/g, "Potere fatato")
        .replace(/Sinister Power/g, "Potere oscuro")
        .replace(/Crowd Control/g, "Attacco in gruppo")
        .replace(/Counterattack/g, "Contrattacco")
        .replace(/Vitality Drain/g, "Rodiforza")
        .replace(/Quake/g, "Scossone")
        .replace(/Swat/g, "Atterramento")
        .replace(/Brute Force/g, "Forza bruta")
        .replace(/Quirky/g, "Capriccio")
        .replace(/Quirky\+/g, "Supercapriccio")
        .replace(/Prank/g, "Burla")
        .replace(/Stabilize/g, "Demolizione")
        .replace(/Stabilize\+/g, "Superdemolizione")
        .replace(/Rock Break/g, "Frantumarocce")
        .replace(/Cloud Clear/g, "Spazzanubi")
        .replace(/Block Smash/g, "Abbattiblocco")
        .replace(/Eject/g, "Espulsione")
        .replace(/Barrier Bash/g, "Frangibarriera")
        .replace(/Swap/g, "Sostituzione")
        .replace(/Chill/g, "Brivido")
        .replace(/Astonish/g, "Sgomento")
        .replace(/Flap/g, "Battito d'ali")
        .replace(/Mind Zap/g, "Ripristino")
        .replace(/Burn/g, "Bruciatura")
        .replace(/Spookify/g, "Spavento")
        .replace(/Freeze/g, "Gelo")
        .replace(/Sleep Charm/g, "Sognidoro")
        .replace(/Paralyze/g, "Stop")
        .replace(/Mega Boost/g, "Megapotere")
        .replace(/Hyper Punch/g, "Iperpugno")
        .replace(/Power of 4\+/g, "Forza Quattro +")
        .replace(/Power of 5\+/g, "Forza Cinque +")
        .replace(/Crowd Power/g, "Attacco di squadra")
        .replace(/Double Normal/g, "Combo Normale")
        .replace(/Mega Boost\+/g, "Megapotere +")
        .replace(/Mega Boost\+\+/g, "Megapotere ++")
        .replace(/Stabilize\+\+/g, "Iperdemolizione")
        .replace(/Rock Break\+/g, "Frantumarocce +")
        .replace(/Rock Break\+\+/g, "Frantumarocce ++")
        .replace(/Cloud Clear\+/g, "Spazzanubi +")
        .replace(/Cloud Clear\+\+/g, "Spazzanubi ++")
        .replace(/Block Smash\+/g, "Abbattiblocco +")
        .replace(/Block Smash\+\+/g, "Abbattiblocco ++")
        .replace(/Eject\+/g, "Espulsione +")
        .replace(/Eject\+\+/g, "Espulsione ++")
        .replace(/Barrier Bash\+/g, "Frangibarriera +")
        .replace(/Barrier Bash\+\+/g, "Frangibarriera ++")
        .replace(/Swap\+/g, "Sostituzione +")
        .replace(/Swap\+\+/g, "Sostituzione ++")
        .replace(/Shock Attack/g, "Attacco shock")
        .replace(/Nosedive/g, "Picchiata")
        .replace(/Sky Blast/g, "Combo aerea")
        .replace(/Poisonous Mist/g, "Nebbia Velenosa")
        .replace(/Downpour/g, "Temporale")
        .replace(/Super Bolt/g, "Superscossa")
        .replace(/Cross Attack/g, "Attacco a croce")
        .replace(/L-Boost/g, "Attacco a L")
        .replace(/T-Boost/g, "Attacco a T")
        .replace(/Cheer/g, "Incoraggiamento")
        .replace(/Paralysis Combo/g, "Combo paralisi")
        .replace(/Sleep Combo/g, "Combo sonno")
        .replace(/Relentless/g, "Accanimento")
        .replace(/Poison Pact/g, "Combo Veleno")
        .replace(/Ice Dance/g, "Danza gelida")
        .replace(/Ground Forces/g, "Combo Terra")
        .replace(/Flash Mob/g, "Sincroattacco")
        .replace(/Poison/g, "Avvelenamento")
        .replace(/Toxic Stress/g, "Raffica tossica")
        .replace(/Psyburst/g, "Psicoesplosione")
        .replace(/Whirlpool/g, "Mulinello")
        .replace(/Constrict/g, "Groviglio")
        .replace(/Final Effort/g, "Colpo finale")
        .replace(/Dragon Sweep/g, "Coda di Drago")
        .replace(/Dragon Shriek/g, "Urlo del Drago")
        .replace(/Rockify/g, "Mutapietra")
        .replace(/Blockify/g, "Mutametallo")
        .replace(/Transform/g, "Metamorfosi")
        .replace(/Big Wave/g, "Big Wave")
        .replace(/Conduction/g, "Elettroconduzione")
        .replace(/Metal Combo/g, "Combo metallica")
        .replace(/Phantom Combo/g, "Combo spettrale")
        .replace(/Shadow Dance/g, "Danza tetra")
        .replace(/Typeless Combo/g, "Combo omnitipo")
        .replace(/Leaf Combo/g, "Combo Erba")
        .replace(/Rock Combo/g, "Combo Roccia")
        .replace(/Bug Combo/g, "Combo insetto")
        .replace(/Psychic Combo/g, "Combo Psico")
        .replace(/Cross Attack\+/g, "Attacco a croce +")
        .replace(/Three Force/g, "Forza Tre")
        .replace(/Full Power/g, "Massima potenza")
        .replace(/Demolish/g, "Devastazione")
        .replace(/Extinction/g, "Recisione")
        .replace(/Super Arrow/g, "Maxifreccia")
        .replace(/Super Tackle/g, "Maxiplaccaggio")
        .replace(/Super Voice/g, "Maxivoce")
        .replace(/Unity Power/g, "Sintonia fatale")
        .replace(/4 Up/g, "Forza Quattro ↑")
        .replace(/Beast Power/g, "Ultraforza")
        .replace(/Try Hard/g, "Faccio sul Serio")
        .replace(/Hyper Bolt/g, "Iperscossa")
        .replace(/Non Stop\+/g, "Valanga +")
        .replace(/Up, Up, Up/g, "Iperbole")
        .replace(/Hitting Streak\+/g, "Raffica +")
        .replace(/Big Eater/g, "Ingordigia")
        .replace(/Hyper Drain/g, "Prosciugaforza")
        .replace(/Absorb/g, "Assorbimento")
        .replace(/Counterattack\+/g, "Contrattacco +")
        .replace(/Crowd Control\+/g, "Attacco gruppo +")
        .replace(/Rock Shot/g, "Rimuovirocce")
        .replace(/Quirky\+\+/g, "Capriccio ++")
        .replace(/Blindside/g, "Agguato")
        .replace(/Cloud Shot/g, "Rimuovinubi")
        .replace(/Barrier Shot/g, "Rimuovibarriere")
        .replace(/Barrier Break/g, "Sbaragliabarriere")
        .replace(/Shot Out/g, "Rimuovinemici")
        .replace(/Eliminate/g, "Sbaraglianemici")
        .replace(/Block Off/g, "Sgominablocchi")
        .replace(/Destruction/g, "Distruttore")
        .replace(/Block Shot/g, "Rimuoviblocchi")
        .replace(/Freeze\+/g, "Gelo +")
        .replace(/Spookify\+/g, "Spavento +")
        .replace(/Fascinate/g, "Malia")
        .replace(/Shadow Shock/g, "Ombrashock")
        .replace(/Crushing Step/g, "Pestata")
        .replace(/Power Hug/g, "Abbraccio morsa")
        .replace(/Daunt/g, "Stordimento")
        .replace(/Nap Time/g, "Chiudigliocchi")
        .replace(/Paralyze\+/g, "Stop +")
        .replace(/Lightning/g, "Folgore")
        .replace(/Burn\+/g, "Bruciatura +")
        .replace(/Possession/g, "Possessione")
        .replace(/Calm Down/g, "Acquietamento")
        .replace(/Sand Sport/g, "Scagliasabbia")
        .replace(/Rockify\+/g, "Mutapietra +")
        .replace(/Super Cheer/g, "Incoraggiamento +")
        .replace(/Rock Shot α/g, "Rimuovirocce α")
        .replace(/Barrier Shot Ω/g, "Rimuovibarriere Ω")
        .replace(/Hide and Seek/g, "Nascondino")
        .replace(/Hammering Streak/g, "Staffetta")
        // Correzioni mosse
        .replace(/Contrattaccoattack/g, "Contrattacco")
        .replace(/Blocco Smash/g, "Abbattiblocco")
        .replace(/Barriera Bash/g, "Frangibarriera")
        .replace(/Sleep Fascino/g, "Sognidoro")
        .replace(/Blocco Smash\+/g, "Abbattiblocco +")
        .replace(/Blocco Smash\+\+/g, "Abbattiblocco ++")
        .replace(/Barriera Bash\+/g, "Frangibarriera +")
        .replace(/Barriera Bash\+\+/g, "Frangibarriera ++")
        .replace(/NoseSub/g, "Picchiata")
        .replace(/Poisonous Nebbia/g, "Nebbia Velenosa")
        .replace(/Tossina Stress/g, "Raffica tossica")
        .replace(/Limitazione/g, "Groviglio")
        .replace(/Bloccoify/g, "Mutametallo")
        .replace(/Trasformazione/g, "Metamorfosi")
        .replace(/Psichico Combo/g, "Combo Psico")
        .replace(/Super Azione/g, "Maxiplaccaggio")
        .replace(/Contrattaccoattack\+/g, "Contrattacco +")
        .replace(/Barriera Shot/g, "RimuoviBarrierae")
        .replace(/Barriera Break/g, "Sbaragliabarriere")
        .replace(/Blocco Off/g, "Sgominablocchi")
        .replace(/Blocco Shot/g, "Rimuoviblocchi")
        .replace(/Barriera Shot Ω/g, "Rimuovibarriere Ω")
    );
  };

  macros.areeAmico = function (str) {
    return (
      str
        // first undo to use right names afterwards
        .replace(/FoRiposo/g, "Forest")
        .replace(/Ravaged Field/g, "Campo Incolto")
        .replace(/Magnetic Quarry/g, "Cava Magnetica")
        .replace(/Thunder Crag/g, "Prato Tuono")
        .replace(/Turtleshell Pond/g, "Stagno Targuscio")
        .replace(/Ancient Relic/g, "Rudere Vetusto")
        .replace(/Aged Chamber A–N/g, "Sala Antica A-N")
        .replace(/Aged Chamber O–?/g, "Sala Antica O-?")
        .replace(/Shallow Beach/g, "Spiaggia Arenile")
        .replace(/Ice Floe Beach/g, "Spiaggia Fredda")
        .replace(/Scorched Plains/g, "Piana Infuocata")
        .replace(/Crater/g, "Cratere")
        .replace(/Volcanic Pit/g, "Fossa Vulcanica")
        .replace(/Rub-a-Dub River/g, "Fiume Rataplan")
        .replace(/Bountiful Sea/g, "Mare Generoso")
        .replace(/Serene Sea/g, "Mare Sereno")
        .replace(/Deepsea Current/g, "Corrente Abissi")
        .replace(/Tadpole Pond/g, "Stagno Girino")
        .replace(/Final Island/g, "Isola Estrema")
        .replace(/Withering Desert/g, "Deserto Fornace")
        .replace(/Mt\. Deepgreen/g, "Monte Verdescuro")
        .replace(/Mt\. Green/g, "Monte Verdescuro")
        .replace(/Mt\. Cleft/g, "Monte Crepaccio")
        .replace(/Mt\. Moonview/g, "Monte Brillaluna")
        .replace(/Mt\. Discipline/g, "Monte Disciplina")
        .replace(/Darkness Ridge/g, "Cresta Oscurità")
        .replace(/Rainbow Peak/g, "Picco Arcobaleno")
        .replace(/Jungle/g, "Giungla")
        .replace(/Mystic Lake/g, "Lago Mistico")
        .replace(/Waterfall Lake/g, "Lago Cascata")
        .replace(/Stratos Lookout/g, "Volta Nuvole")
        .replace(/Legendary Island/g, "Isola Leggenda")
        .replace(/Echo Cave/g, "Grotta Eco")
        .replace(/Dragon Cave/g, "Grotta Drago")
        .replace(/Boulder Cave/g, "Grotta Sasso")
        .replace(/Cryptic Cave/g, "Grotta Mistero")
        .replace(/Enclosed Island/g, "Isola Delimitata")
        .replace(/Mushroom Forest/g, "Foresta Fungo")
        .replace(/Evolution Forest/g, "Foresta Mutevole")
        .replace(/Healing Forest/g, "Foresta Florida")
        .replace(/Secretive Forest/g, "Foresta Segreta")
        .replace(/Gourd Swamp/g, "Palude Arachide")
        .replace(/Peanut Swamp/g, "Palude Arachide")
        .replace(/Poison Swamp/g, "Palude Veleno")
        .replace(/Decrepit Lab/g, "Laboratorio Cadente")
        .replace(/Power Plant/g, "Centrale Elettrica")
        .replace(/Mist-Rise Forest/g, "Foresta Vapore")
        .replace(/Stump Forest/g, "Foresta Vapore")
        .replace(/Flyaway Forest/g, "Foresta Elevata")
        .replace(/Overgrown Forest/g, "Foresta Frondosa")
        .replace(/Energetic Forest/g, "Foresta Energica")
        .replace(/Vibrant Forest/g, "Foresta Energica")
        .replace(/Treasure Sea/g, "Mare Tesoro")
        .replace(/Deepsea Floor/g, "Abissi Marini")
        .replace(/Seafloor Cave/g, "Grotta Abissi")
        .replace(/Southern Island/g, "Isola Sud")
        .replace(/Safari/g, "Safari")
        .replace(/Wild Plains/g, "Piana Brada")
        .replace(/Beau Plains/g, "Piana Incanto")
        .replace(/Sky-Blue Plains/g, "Piana Cieloterso")
        .replace(/Sacred Field/g, "Campo Divino")
        .replace(/Frigid Cavern/g, "Caverna Gelida")
        // Correct move errors
        .replace(/Tuono Crag/g, "Prato Tuono")
        .replace(/Cascata Lake/g, "Lago Cascata")
        .replace(/Nebbia-Rise Forest/g, "Foresta Vapore")
        .replace(/Voloaway FoRiposo/g, "Foresta Elevata")
    );
  };

  macros.dungeonItems = function (str) {
    // special case: "{{DungeonItem|*|Apple" -> "{{DungeonItem|*|Cibo (Mystery Dungeon)"
    str = str
      .replace(
        /{{DungeonItem\|([^\|]*?)\|Apple/g,
        "{{DungeonItem|$1|Cibo (Mystery Dungeon)|sprite=Mela Sprite ZainoMD",
      )
      .replace(
        /{{DungeonItem\|Apple\|/g,
        "{{DungeonItem|Mela|Cibo (Mystery Dungeon)|sprite=Mela Sprite ZainoMD|",
      )

      .replace(/{{DungeonItem\/f\|.*?}}/g, "|}");

    // item replacement
    return (
      str
        .replace(/sprite=Pok. currency/g, "sprite=Poké")
        .replace(/Throwing item/g, "Strumenti da lancio")
        .replace(/\|Seed/g, "|Semi")
        .replace(/Health drink/g, "Bevande salutari")
        .replace(/\|Apple/g, "|Mela")
        .replace(/Big Apple/gi, "Grandemela")
        /*
      ATTENZIONE: Grandemela ha cambiato nome
      Melagrande in terza gen
      Grandemela in quarta gen
    */
        .replace(/Huge Apple/gi, "Gigantomela")
        .replace(/Gummi/g, "Caramelle Gommose")
        .replace(/Glasses/g, "Lenti")
        .replace(/\|Wonder Orb/g, "|Sfere")
        .replace(/Scarf \(Mystery Dungeon\)/g, "Nastri")
        .replace(/\|Scarf/g, "|Nastri")
        .replace(/\|Berry/g, "")
        .replace(/TM/g, "MT")
        .replace(/\|Wand/g, "|Rami")
        .replace(/\|Looplet/g, "|Cerchi")
        .replace(/\|Emera/g, "|Litos")
        .replace(/\|sprite=MDBag/g, "|sprite=MDZaino")
        .replace(/\|sprite=MDZaino Scarf Sprite/g, "")
        .replace(/\|sprite=MDZaino Lenti Sprite/g, "")
        .replace(/\|sprite=MDZaino Stone Sprite/g, "")
        .replace(/\|sprite=MDZaino Seed Sprite/g, "")
        .replace(/\|sprite=MDZaino Bevande salutari Sprite/g, "")
        .replace(/\|sprite=MDZaino \a+ Berry Sprite/g, "")
        .replace(/\|sprite=MDZaino (\a+) Berry III Sprite/g, "")

        .replace(
          /\|sprite=MDZaino ([a-zA-Z\- ]*?) Sprite/g,
          "|sprite=$1 Sprite ZainoMD",
        )

        .replace(/Oran Berry/gi, "Baccarancia")
        .replace(/Pecha Berry/gi, "Baccapesca")
        .replace(/Cheri Berry/gi, "Baccaliegia")
        .replace(/Sitrus Berry/gi, "Baccacedro")
        .replace(/Rawst Berry/gi, "Baccafrago")
        .replace(/Chesto Berry/gi, "Baccastagna")

        .replace(/Sleep Seed/gi, "Semedormita")
        .replace(/Stun Seed/gi, "Pietriseme")
        .replace(/Blast Seed/gi, "Semefuoco")
        .replace(/Heal Seed/gi, "Semesalute")
        .replace(/Violent Seed/gi, "Semedormita")
        .replace(/X\-Eye Seed/gi, "Semestrabico")
        .replace(/Blinker Seed/gi, "Semetenebra")
        .replace(/Doom Seed/gi, "Semefato")
        .replace(/Eyedrop Seed/gi, "Semevista")
        .replace(/Quick Seed/gi, "Semesprint")
        .replace(/Hunger Seed/gi, "Semevorax")
        .replace(/Joy Seed/gi, "Gaudioseme")
        .replace(/Life Seed/gi, "Semevita")
        .replace(/Plain Seed/gi, "Semebase")
        .replace(/Tiny Reviver Seed/gi, "Revitalseme Mini")
        .replace(/Reviver Seed/gi, "Revitalseme")
        .replace(/Sleep Seed/gi, "Semedormita")
        .replace(/Stun Seed/gi, "Pietriseme")
        .replace(/Totter Seed/gi, "Stordiseme")
        .replace(/Warp Seed/gi, "Teleseme")
        .replace(/Dropeye Seed/gi, "Semesvista")
        .replace(/Pure Seed/gi, "Semepuro")
        .replace(/Reviser Seed/gi, "Revoltaseme")
        .replace(/Vanish Seed/gi, "Svaniseme")
        .replace(/Vile Seed/gi, "Semeturpe")
        .replace(/Via Seed/gi, "Semetorpe")
        .replace(/Violent Seed/gi, "Semeimpeto")
        .replace(/Dough Seed/gi, "Semedato")
        .replace(/Golden Seed/gi, "Seme d'Oro")
        .replace(/Slip Seed/gi, "Semedornita")
        .replace(/Encourage Seed/gi, "Incoraggiaseme")
        .replace(/Energy Seed/gi, "Semenergia")
        .replace(/Training Seed/gi, "Allenaseme")
        .replace(/Decoy Seed/gi, "Escaseme")
        .replace(/Ban Seed/gi, "Vietaseme")

        .replace(/Blue Gummi/gi, "Gommablu")
        .replace(/Blue Caramelle Gommose/gi, "Gommablu")
        .replace(/Pink Gummi/gi, "Gommarosea")
        .replace(/Pink Caramelle Gommose/gi, "Gommarosea")
        .replace(/Red Gummi/gi, "Gommarossa")
        .replace(/Red Caramelle Gommose/gi, "Gommarossa")
        .replace(/Yellow Gummi/gi, "Gommagialla")
        .replace(/Yellow Caramelle Gommose/gi, "Gommagialla")
        .replace(/White Gummi/gi, "Gommabianca")
        .replace(/White Caramelle Gommose/gi, "Gommabianca")
        .replace(/Grass Gummi/gi, "Gommaerba")
        .replace(/Grass Caramelle Gommose/gi, "Gommaerba")
        .replace(/Erba Gummi/gi, "Gommaerba")
        .replace(/Erba Caramelle Gommose/gi, "Gommaerba")
        .replace(/Orange Gummi/gi, "Gommarancia")
        .replace(/Orange Caramelle Gommose/gi, "Gommarancia")
        .replace(/Brown Gummi/gi, "Gommamarrone")
        .replace(/Brown Caramelle Gommose/gi, "Gommamarrone")
        .replace(/Black Gummi/gi, "Gommanera")
        .replace(/Black Caramelle Gommose/gi, "Gommanera")
        .replace(/Royal Gummi/gi, "Gommareale")
        .replace(/Royal Caramelle Gommose/gi, "Gommareale")
        .replace(/Silver Gummi/gi, "Gommargento")
        .replace(/Silver Caramelle Gommose/gi, "Gommargento")
        .replace(/Purple Gummi/gi, "Gommaviola")
        .replace(/Purple Caramelle Gommose/gi, "Gommaviola")
        .replace(/Gray Gummi/gi, "Gommagrigia")
        .replace(/Gray Caramelle Gommose/gi, "Gommagrigia")
        .replace(/Green Gummi/gi, "Gommaverde")
        .replace(/Green Caramelle Gommose/gi, "Gommaverde")
        .replace(/Gold Gummi/gi, "Gommadoro")
        .replace(/Gold Caramelle Gommose/gi, "Gommadoro")
        .replace(/Sky Gummi/gi, "Gommacielo")
        .replace(/Sky Caramelle Gommose/gi, "Gommacielo")
        .replace(/Clear Gummi/gi, "Gommachiara")
        .replace(/Clear Caramelle Gommose/gi, "Gommachiara")

        .replace(/Geo Pebble/gi, "Geosasso")
        .replace(/Gone Pebble/gi, "Geomasso")
        .replace(/Stick/gi, "Bastone")
        .replace(/Iron Thorn/gi, "Puntacciaio")
        .replace(/Silver Spike/gi, "Spinargento")
        .replace(/Gravelerock/gi, "Gravelroccia")
        .replace(/Rare Fossil/gi, "Fossile Raro")
        .replace(/Cacnea Spike/gi, "Spina Cacnea")
        .replace(/Corsola Twig/gi, "Ramo Corsola")
        .replace(/Gold Fang/gi, "Zannadoro")
        .replace(/Gold Thorn/gi, "Punta d'Oro")
        .replace(/Wooden Spike/gi, "Spinalbero")

        .replace(/Silence Orb/gi, "Ammutisfera")
        .replace(/Trapbust Orb/gi, "Annullosfera")
        .replace(/Rollcall Orb/gi, "Appellosfera")
        .replace(/Trawl Orb/gi, "Arraffasfera")
        .replace(/Pounce Orb/gi, "Balzosfera")
        .replace(/Foe\-Hold Orb/gi, "Bloccosfera")
        .replace(/Mug Orb/gi, "Carpisfera")
        .replace(/All\-Hit Orb/gi, "Colposfera")
        .replace(/Drought Orb/gi, "Drenosfera")
        .replace(/Evasion Orb/gi, "Eludisfera")
        .replace(/Decoy Orb/gi, "Escasfera")
        .replace(/Escape Orb/gi, "Evadisfera")
        .replace(/Longtoss Orb/gi, "Gettosfera")
        .replace(/Hail Orb/gi, "Grandinsfera")
        .replace(/Invisify Orb/gi, "Invisisfera")
        .replace(/Slow Orb/gi, "Lentosfera")
        .replace(/All\-Mach Orb/gi, "Lestosfera")
        .replace(/Luminous Orb/gi, "Lumisfera")
        .replace(/Transfer Orb/gi, "Metasfera")
        .replace(/Sizebust Orb/gi, "Molesfera")
        .replace(/Lob Orb/gi, "Parabolsfera")
        .replace(/Pierce Orb/gi, "Perforosfera")
        .replace(/Petrify Orb/gi, "Pietrisfera")
        .replace(/Rainy Orb/gi, "Pioggiasfera")
        .replace(/Radar Orb/gi, "Radarsfera")
        .replace(/Rebound Orb/gi, "Ribattisfera")
        .replace(/Identify Orb/gi, "Rilevasfera")
        .replace(/See\-Trap Orb/gi, "Rivelasfera")
        .replace(/Rocky Orb/gi, "Rocciosfera")
        .replace(/Sandy Orb/gi, "Sabbiasfera")
        .replace(/Stayaway Orb/gi, "Scacciasfera")
        .replace(/Switcher Orb/gi, "Scambiosfera")
        .replace(/Scanner Orb/gi, "Scannersfera")
        .replace(/Snatch Orb/gi, "Scipposfera")
        .replace(/Spurn Orb/gi, "Sdegnosfera")
        .replace(/Trapper Orb/gi, "Sferagguato")
        .replace(/One\-Room Orb/gi, "Sfera 1 Sala")
        .replace(/Two\-Edge Orb/gi, "Sferabilama")
        .replace(/One\-Shot Orb/gi, "Sferaistante")
        .replace(/Hurl Orb/gi, "Sferalancio")
        .replace(/Mobile Orb/gi, "Sferamobile")
        .replace(/Itemizer Orb/gi, "Sferaoggetto")
        .replace(/Shocker Orb/gi, "Sferapanico")
        .replace(/Stairs Orb/gi, "Sferascala")
        .replace(/Blowback Orb/gi, "Sferavolée")
        .replace(/Sunny Orb/gi, "Solesfera")
        .replace(/Fill\-In Orb/gi, "Solidosfera")
        .replace(/Slumber Orb/gi, "Sonnosfera")
        .replace(/Foe\-Seal Orb/gi, "Sostasfera")
        .replace(/Totter Orb/gi, "Stordisfera")
        .replace(/Warp Orb/gi, "Telesfera")
        .replace(/Cleanse Orb/gi, "Tergisfera")
        .replace(/Foe\-Fear Orb/gi, "Terrorsfera")
        .replace(/Quick Orb/gi, "Velocisfera")
        .replace(/Emera\-Up Orb/gi, "Incavosfera")
        .replace(/Litos\-Up Orb/gi, "Incavosfera")

        .replace(/Max Elixir/gi, "Elisir Max")
        .replace(/Elixir/gi, "Elisir")
        .replace(/Mix Elixir/gi, "Elisir Mix")
        .replace(/Protein/gi, "Proteina")
        .replace(/Iron/gi, "Ferro")
        .replace(/Calcium/gi, "Calcio")
        .replace(/Zinc/gi, "Zinco")
        .replace(/Nectar/gi, "Nettare")

        .replace(/Goggle Specs/gi, "Lentispesse")
        .replace(/Insomniscope/gi, "Vegliscopio")
        .replace(/Lockon Specs/gi, "Lentiprecise")
        .replace(/No\-Aim Scope/gi, "Guizzatore")
        .replace(/Scope Lens/gi, "Mirino")
        .replace(/Whiff Specs/gi, "Lentiopache")
        .replace(/X\-Ray Specs/gi, "Lenti X")
        .replace(/Y\-Ray Specs/gi, "Lenti Y")
        .replace(/Gaggle Specs/gi, "Lentismesse")

        .replace(/Warp Scarf/gi, "Televelo")
        .replace(/Defense Scarf/gi, "Velodifesa")
        .replace(/Def\. Scarf/gi, "Velodifesa")
        .replace(/Pecha Scarf/gi, "Velopesca")
        .replace(/Sneak Scarf/gi, "Velosvicolo")
        .replace(/Plain Ribbon/gi, "Galabase")
        .replace(/Gold Ribbon/gi, "Galadoro")
        .replace(/Heal Ribbon/gi, "Galasalute")
        .replace(/Joy Ribbon/gi, "Gaudiogala")
        .replace(/Persim Band/gi, "Nastrocaki")
        .replace(/Racket Band/gi, "Nastrodrin")
        .replace(/Power Band/gi, "Nastroforza")
        .replace(/Twist Band/gi, "Nastrogiro")
        .replace(/Weather Band/gi, "Nastrometeo")
        .replace(/Special Band/gi, "Nastrospex")
        .replace(/Zinco Band/gi, "Nastrozinco")
        .replace(/Zinc Band/gi, "Nastrozinco")
        .replace(/Stamina Band/gi, "Vigornastro")
        .replace(/No\-Stick Cap/gi, "Antiviscido")
        .replace(/No\-Slip Cap/gi, "Anziviscido")
        .replace(/Detect Band/gi, "Eludinastro")
        .replace(/Munch Belt/gi, "Cintamunch")
        .replace(/Bounce Band/gi, "Nastrobalzo")
        .replace(/Curve Band/gi, "Devianastro")
        .replace(/Diet Ribbon/gi, "Galalinea")
        .replace(/Dodge Scarf/gi, "Veloschivo")
        .replace(/Mobile Scarf/gi, "Velomobile")
        .replace(/Pass Scarf/gi, "Trasfervelo")
        .replace(/Patsy Band/gi, "Nastromira")
        .replace(/Pierce Band/gi, "Perfornastro")
        .replace(/Tight Belt/gi, "Cintastretta")
        .replace(/Trap Scarf/gi, "Trappovelo")

        .replace(/Wonder Chest/gi, "Fantascrigno")
        .replace(/Miracle Chest/gi, "Magiscrigno")
        .replace(/Gabite Scale/gi, "Gabitesquama")
        .replace(/Sky Gift/gi, "Dono Cielo")
        .replace(/IQ Booster/gi, "Turbo QI")
        .replace(/Key/gi, "Chiave")
        .replace(/Link Box/gi, "Combinatore")
        .replace(
          /\{\{DungeonItem\|Combinatore\|3/gi,
          "{{DungeonItem|Combinatore|Mosse combinate|sprite=Combinatore Sprite ZainoMD|3",
        )
        .replace(/Lost Loot/gi, "Tesorperduto")

        .replace(/King's Rock/gi, "Roccia di Re")

        .replace(/Cute Box/gi, "Tecacarina")
        .replace(/Dainty Box/gi, "Tecachic")
        .replace(/Deluxe Box/gi, "Tecalusso")
        .replace(/Glittery Box/gi, "Tecasfavillio")
        .replace(/Gorgeous Box/gi, "Tecabella")
        .replace(/Hard Box/gi, "Tecasolida")
        .replace(/Heavy Box/gi, "Tecapesante")
        .replace(/Light Box/gi, "Tecaleggera")
        .replace(/Nifty Box/gi, "Tecafine")
        .replace(/Pretty Box/gi, "Tecagraziosa")
        .replace(/Shiny Box/gi, "Tecabrillio")
        .replace(/Sinister Box/gi, "Tecatetra")

        .replace(/Beauty Scarf/gi, "Incantovelo")
        .replace(/Coronet Rock/gi, "Rocciacorona")
        .replace(/Frozen Rock/gi, "Rocciagelo")
        .replace(/Link Cable/gi, "Cavo Link")
        .replace(/Lunar Ribbon/gi, "Galaluna")
        .replace(/Mossy Rock/gi, "Rocciamusco")
        .replace(/Sun Ribbon/gi, "Galasole")

        .replace(/Surround Wand/gi, "Accerchiaramo")
        .replace(/Slumber Wand/gi, "Addormentaramo")
        .replace(/Confuse Wand/gi, "Confondiramo")
        .replace(/Petrify Wand/gi, "Pietrificaramo")
        .replace(/Slow Wand/gi, "Rallentaramo")
        .replace(/Switcher Wand/gi, "Ramo Cambiaposto")
        .replace(/Guiding Wand/gi, "Ramo Guida")
        .replace(/Truant Wand/gi, "Ramo Pigrone")
        .replace(/HP-Swap Wand/gi, "Ramo Scambia PS")
        .replace(/Quarter Wand/gi, "Ramo Smorzaforze")
        .replace(/Whirlwind Wand/gi, "Ramo Spazzavia")
        .replace(/Tunnel Wand/gi, "Ramo Tunnel")
        .replace(/Stayaway Wand/gi, "Scacciaramo")
        .replace(/Warp Wand/gi, "Teleramo")
        .replace(/Pounce Wand/gi, "Tufforamo")

        .replace(/Attack Looplet/gi, "Cerchio Attacco")
        .replace(/Focus Looplet/gi, "Focalcerchio")
        .replace(/Cover Looplet/gi, "Copricerchio")
        .replace(/Deflect Looplet/gi, "Trasfericerchio")
        .replace(/Gold Looplet/gi, "Cerchio d'Oro")
        .replace(/Defense Looplet/gi, "Cerchio Difesa")
        .replace(/Special Attack Looplet/gi, "Cerchio Att. Sp.")
        .replace(/Special Defense Looplet/gi, "Cerchio Dif. Sp.")
        .replace(/Joy Looplet/gi, "Cerchio Felicità")
        .replace(/Speed Looplet/gi, "Cerchio Velocità")
        .replace(/Healing Looplet/gi, "Curacerchio")
        .replace(/Prosper Looplet/gi, "Cerchio Vivapoké")
        .replace(/Focus Looplet/gi, "Focalcerchio")
        .replace(/Resilient Looplet/gi, "Stabilcerchio")
        .replace(/Wakeful Looplet/gi, "Cerchio Insonnia")
        .replace(/Persim Looplet/gi, "Cerchio Baccaki")
        .replace(/Lucky Looplet/gi, "Fortuncerchio")
        .replace(/Pecha Looplet/gi, "Cerchio Baccapesca")
        .replace(/Nonstick Looplet/gi, "Cerchio Antiviscido")
        .replace(/Weather Looplet/gi, "Meteocerchio")
        .replace(/Detect Looplet/gi, "Eludicerchio")
        .replace(/Alliance Looplet/gi, "Sincrocerchio")
        .replace(/Warp Looplet/gi, "Telecerchio")
        .replace(/Nullify Looplet/gi, "Cerchio Antiabilità")
        //.replace(/Excavation Looplet/gi, "Cerchio Tunnel")
        //.replace(/Unity Looplet/gi, "Curacerchio")
        //.replace(/Choice Looplet/gi, "Cerchio Blu")
        //.replace(/Fickle Looplet/gi, "Cerchio Tenebre")
        // Looplet va per ultimo, se no traduce i "Looplet" dei nomi di tutti gli altri Cerchi
        .replace(/Looplet/gi, "Cerchio")

        .replace(/Absorption/gi, "Assorbienergia")
        .replace(/Ally Revive/gi, "Aiutamici")
        .replace(/Anchor/gi, "Piedisaldi")
        .replace(/Big Ears/gi, "Orecchie Radar")
        .replace(/Big Recovery/gi, "Grandecura")
        .replace(/Burn Guard/gi, "Parascottatura")
        .replace(/Clairvoyance/gi, "Scanner")
        .replace(/Confusion Guard/gi, "Paraconfusione")
        .replace(/Elixir Search/gi, "Linea Vitale")
        .replace(/Emera Search/gi, "Cercalitos")
        .replace(/Go for Broke/gi, "Tutto per Tutto")
        //.replace(/Huge Meal/gi, "Azione")
        .replace(/Item Checker/gi, "Perspicacia")
        .replace(/Lucky Charm/gi, "Portafortuna")
        .replace(/Mobility/gi, "Mobilità")
        .replace(/Natural Recovery/gi, "Alternacura")
        .replace(/Paralysis Guard/gi, "Paraparalisi")
        .replace(/Petrify Power/gi, "Arrestapotere")
        //.replace(/Piercing Throw/gi, "Perforazione")
        .replace(/Poison Guard/gi, "Paraveleno")
        .replace(/PP Restore/gi, "Recupero PP")
        .replace(/Rain's Blessing/gi, "Pioggia Benefica")
        .replace(/Room Checker/gi, "Sensore Stanza")
        //.replace(/Self Control/gi, "Azione")
        .replace(/Sleep Guard/gi, "Parasonno")
        .replace(/Stair Locator/gi, "Vediscale")
        .replace(/Sun's Blessing/gi, "Sole Benefico")
        .replace(/Tiptoe/gi, "Punta di Piedi")
        .replace(/Treasure Hunter/gi, "Caccia al Tesoro")
        .replace(/Trap Proof/gi, "Saltatrappole")
        .replace(/Alliance Expert/gi, "Sincromaestria")
        .replace(/Better Odds/gi, "Momento Giusto")
        .replace(/Excessive Force/gi, "Grande Foga")
        .replace(/Lullaby/gi, "Ninnananna")
        .replace(/Power Boost X/gi, "Superpotenza X")
        .replace(/Super Critical/gi, "Superefficacia")
        .replace(/Type Bulldozer/gi, "Ignoratipo")
        .replace(/Wand Expert/gi, "Ramomaestria")
        .replace(/Berry Power/gi, "Baccapotere")
        .replace(/Explosion Guard/gi, "Paraesplosioni")
        .replace(/Guard Boost/gi, "Superprotezione")
        .replace(/Sleep Payback/gi, "Sonnovendetta")
        .replace(/Status Immunity/gi, "Previenistato")
        .replace(/Warp Payback/gi, "Sloggiavendetta")
        .replace(/Comeback/gi, "Voltabuona")
        .replace(/Dizzying Stare/gi, "Stordimento")
        .replace(/Power Boost Y/gi, "Superpotenza Y")
        .replace(/Training/gi, "Allenamento")
        .replace(/Tunnel/gi, "Scavamuri")
        .replace(/Whirlwind/gi, "Turbine")
        .replace(/Barrage Guard/gi, "Pararaffica")
        .replace(/Dizzying Payback/gi, "Stordivendetta")
        .replace(/Effect Boost/gi, "Effetti Aggiuntivi ↑")
        .replace(/Payback/gi, "Fiaccavendetta")
        .replace(/Resilient/gi, "Anticalo")
        .replace(/Toughness/gi, "Tempra")
        .replace(/Additional Action/gi, "Azione Bonus")
        .replace(/Barrage/gi, "Rafficattacco")
        .replace(/Clutch Performer/gi, "Asso nella Manica")
        .replace(/Distance Dodge/gi, "Lungavista")
        .replace(/Follow Through/gi, "Lungopasso")
        .replace(/Intimidator/gi, "Provocatore")
        .replace(/Misfortune Mirror/gi, "Sbagliovendetta")
        .replace(/Prolong/gi, "Prolungastato")
        .replace(/Status Mirror/gi, "Trasmettistato")
        .replace(/Tight Grip/gi, "Tienistretto")
        .replace(/Awakening/gi, "Supercarica")
    );
  };

  macros.dungeonTraps = function (str) {
    return str
      .replace(/Seal Trap/gi, "Sigillotrappola")
      .replace(/Chestnut Trap/gi, "Castagnotrappola")
      .replace(/Gust Trap/gi, "Rafficotrappola")
      .replace(/Slow Trap/gi, "Rallentotrappola")
      .replace(/Spin Trap/gi, "Storditrappola")
      .replace(/Selfdestruct Trap/gi, "Scoppiotrappola")
      .replace(/Sticky Trap/gi, "Viscidotrappola")
      .replace(/Grimy Trap/gi, "Grimertrappola")
      .replace(/Warp Trap/gi, "Teletrappola")
      .replace(/Poison Trap/gi, "Velenotrappola")
      .replace(/PP-Zero Trap/gi, "Trappola Zero PP")
      .replace(/Random Trap/gi, "Casotrappola")
      .replace(/Grudge Trap/gi, "Rancortrappola")
      .replace(/Toxic Spikes/gi, "Fielepunte")
      .replace(/Mud Trap/gi, "Fangotrappola")
      .replace(/Explosion Trap/gi, "Boomtrappola")
      .replace(/Spiked Tile/gi, "Mattopunte")
      .replace(/Stealth Rock/gi, "Levitoroccia")
      .replace(/Pokémon Trap/gi, "Pokétrappola")
      .replace(/Slumber Trap/gi, "Sonnotrappola")
      .replace(/Summon Trap/gi, "Profumotrappola")
      .replace(/Trip Trap/gi, "Inciampotrappola");
  };

  macros.dungeon = function (str) {
    str = str
      .replace(/MD Time/gi, "md tempo")
      .replace(/MD Darkness/gi, "md oscurità")
      .replace(/MD Sky/gi, "md cielo")
      .replace(/MD Red/gi, "md rosso")
      .replace(/MD Blue/gi, "md blu");

    str = macros.colori(str);

    str = str
      .replace(/\{\{Dungeon infobox/gi, "{{InfoboxDungeon")
      .replace(/recruitable=Yes/gi, "recruitable=Sì")
      .replace(/traps=Yes/gi, "traps=Sì")
      .replace(/monsterhouses=Yes/gi, "monsterhouses=Sì")
      .replace(/rest=Yes/gi, "rest=Sì")
      .replace(/money=Allowed/gi, "money=Presente")
      .replace(/items=Allowed/gi, "items=48")
      .replace(/items=Current/gi, "items=Limite attuale della Borsa")
      .replace(
        /items=Current limit in Bag\./gi,
        "items=Limite attuale della Borsa",
      )
      .replace(/startlevel=Current/gi, "startlevel=Corrente")
      .replace(/teamsize=Current/gi, "teamsize=Corrente")
      .replace(/teamsize=Up to 3/gi, "teamsize=Corrente")
      .replace(/maintype=Various/gi, "maintype=Vari")
      .replace(/boss=None/gi, "boss=Nessuno")
      .replace(/game=sky/gi, "game=cielo")
      .replace(
        /\{\{tt\|\*\|These Pok.mon are found and recruited via Connection Orb\.\}\}/gi,
        "",
      )
      .replace(
        /\{\{tt\|\*\|These Pok.mon are found and recruited via Connection Orb after completing the missions for them\.\}\}/gi,
        "",
      )

      .replace(/\{\{DoubleProjectTag\|Locations\|Sidegames\}\}/gi, "")
      .replace(/\{\{PMD2 locations\}\}/gi, "{{Zone PMD2}}")
      .replace(/\{\{PMD locations\}\}/gi, "{{Zone PMD}}")
      .replace(/\{\{PSMD locations.?\}\}/gi, "{{Zone PSMD}}")
      .replace(/\{\{Incomplete\|needs=/gi, "{{incompleto|necessita=")
      .replace(/\{\{Incomplete\}\}/gi, "{{incompleto}}")
      .replace(
        /\[\[Category:Pok.mon Mystery Dungeon 2 locations\]\]/gi,
        "[[Categoria:Zone Pokémon Mystery Dungeon 2]]",
      )
      .replace(
        /\[\[Category:Pok.mon Mystery Dungeon: Explorers of Sky locations\]\]/gi,
        "[[Categoria:Zone Pokémon Mystery Dungeon: Esploratori del Cielo]]",
      )
      .replace(/\[\[Category:Caves\]\]/gi, "[[Categoria:Grotte]]")
      .replace(/\[\[Category:Mountains\]\]/gi, "[[Categoria:Montagne]]")
      .replace(/\[\[Category:Beaches\]\]/gi, "[[Categoria:Spiagge]]")
      .replace(/\[\[Category:Forests\]\]/gi, "[[Categoria:Foreste]]")
      .replace(/\[\[Category:Plains\]\]/gi, "[[Categoria:Piane]]")
      .replace(/\[\[Category:Deserts\]\]/gi, "[[Categoria:Deserti]]")
      .replace(/\[\[Category:Ruins\]\]/gi, "[[Categoria:Rovine]]")
      .replace(/\[\[Category:Towers\]\]/gi, "[[Categoria:Torri]]")
      .replace(/\[\[Category:Islands\]\]/gi, "[[Categoria:Isole]]")
      .replace(/\[\[Category:Towers\]\]/gi, "[[Categoria:Torri]]")
      .replace(
        /\[\[Category:Pok.mon Mystery Dungeon locations\]\]/gi,
        "[[Categoria:Zone Pokémon Mystery Dungeon]]",
      )
      .replace(
        /\{\{mdloc\/f\|(.*?)\|These Pok.mon are recruited through the (?:\[\[)?Connection Orb(?:\]\])? rather than fighting them\.\}\}/g,
        "{{mdloc/f|$1|super=yes}}",
      )
      .replace(
        /\{\{mdloc\/f\|(.*?)\|These Pok.mon are recruited immediately after fulfilling certain requests on the Connection Orb\.\}\}/g,
        "{{mdloc/f|$1|super=yes}}",
      );

    if (str.indexOf("{{Zone PSMD}}") === -1)
      str = str.replace(
        /\[\[Category:Pok.mon Super Mystery Dungeon locations\]\]/g,
        "[[Categoria:Zone Pokémon Super Mystery Dungeon]]",
      );
    else
      str = str.replace(
        /\[\[Category:Pok.mon Super Mystery Dungeon locations\]\]/g,
        "",
      );

    // add langtable if not found
    if (str.search(/\{\{langtable/gi) === -1) {
      str = str.replace(
        "{{Zone PSMD}}",
        "==In altre lingue==\n{{langtable|type=" +
          /\{\{mdloc\/h\|(.*?)(?:\|.*)?\}\}/gi.exec(str)[1] +
          "|type2=" +
          /\{\{mdloc\/h(?:\|.*?)?\|(.*)\}\}/gi.exec(str)[1] +
          "\n|de=" +
          /\[\[de:(.*?)\]\]/gi.exec(str)[1] +
          "\n}}\n\n{{-}}\n{{Zone PSMD}}\n",
      );
    }

    // add japanese name to langtable
    str = str.replace(
      /\{\{langtable(.*?)\n/gi,
      "{{langtable$1\n|ja={{j|" + /\|jname=(.*?)\n/gi.exec(str)[1] + "}}\n",
    );

    // changeName
    // look for Italian name in the langtable to use it as a default for the box
    var nameIta;
    if (str.indexOf("{{langtable") !== -1) {
      nameIta = /\|it\=([^\|]*)\|/gi.exec(str);
      if (nameIta) nameIta = nameIta[1].trim();
    }
    nameIta = prompt("Inserisci il nome del dungeon in italiano", nameIta);
    if (nameIta) {
      var nameEng = /\|name=(.*?)\n\|/i.exec(str)[1];
      str = str.replace(new RegExp(nameEng, "g"), nameIta);

      // add the english interwiki link
      if (str.search(/\[\[de:/g) === -1) str += "\n[[en:" + nameEng + "]]";
      else
        str = str.replace(
          /(\[\[de:.*?\]\])/g,
          "$1" + "\n[[en:" + nameEng + "]]",
        );

      // edit "In altre lingue" section
      if (str.indexOf("{{langtable") !== -1) {
        if (str.indexOf("|it=") === -1)
          str = str.replace(
            /\{\{langtable(.*?)\n/gi,
            "{{langtable$1\n|en=" + nameEng + "\n",
          );
        else {
          str = str
            .replace("|it=" + nameIta + "\n", "|en=" + nameEng + "\n")
            .replace(/\|it=(.*?)\n\|/i, "|en=$1\n|");
        }
      }
    }

    str = str
      .replace(/B(\d+)/g, "$1")
      .replace(/(\d+)F/g, "$1")
      .replace(/B(\d+)F/g, "$1")

      .replace(/==pok.mon encountered==/gi, "==Pokémon==")
      .replace(/===request only===/gi, "==Solo missioni==")
      .replace(/==items==/gi, "==Strumenti==")
      .replace(/==Items found==/gi, "==Strumenti==")
      .replace(/==gallery==/gi, "==Galleria==")
      .replace(/==map==/gi, "==Descrizione del Dungeon==")
      .replace(/==in other languages==/gi, "==In altre lingue==")
      .replace(/==trivia==/gi, "==Curiosità==")
      .replace(/==In other language==/gi, "==In altre lingue==");

    str = macros.dungeonItems(str);
    str = macros.dungeonTraps(str);
    str = macros.tipi(str);

    str = str
      .replace(/<\/small>/g, "</span>")
      .replace(/<small>/g, '<span class="text-small">')
      .replace(/<\/big>/g, "</span>")
      .replace(/<big>/g, '<span class="text-big">');

    return (
      str
        //per sistemare la visualizzazione html
        .replace(/é/g, "&eacute;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/ì/g, "&igrave;")
    );
  };

  if (utils.updateMenu) {
    utils.updateMenu();
  }
})(utils || { macros: {} });
