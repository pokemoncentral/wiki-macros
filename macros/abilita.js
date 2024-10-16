"use strict";
/**
 * "abilità" macro, that translates move names
 */

(function (utils) {
  const macros = utils.macros;

  macros["abilita'"] = function (str) {
    return (
      str
        .replace(/\bAdaptability\b/g, "Adattabilit&agrave;")
        .replace(/\bAftermath\b/g, "Scoppio")
        .replace(/\bAir Lock\b/g, "Riparo")
        .replace(/\bAnger Point\b/g, "Grancollera")
        .replace(/\bAnticipation\b/g, "Presagio")
        .replace(/\bArena Trap\b/g, "Trappoarena")
        .replace(/\bBad Dreams\b/g, "Sogniamari")
        .replace(/\bBattle Armor\b/g, "Lottascudo")
        .replace(/\bTurboblaze\b/g, "Piroturbina")
        .replace(/\bBlaze\b/g, "Aiutofuoco")
        .replace(/\bChlorophyll\b/g, "Clorofilla")
        .replace(/\bClear Body\b/g, "Corpochiaro")
        .replace(/\bCloud Nine\b/g, "Antimeteo")
        .replace(/\bColor Change\b/g, "Cambiacolore")
        .replace(/\bCompoundeyes\b/g, "Insettocchi")
        .replace(/\bCompound Eyes\b/g, "Insettocchi")
        .replace(/\bCute Charm\b/g, "Incantevole")
        .replace(/\bDamp\b/g, "Umidit&agrave;")
        .replace(/\bDownload\b/g, "Download")
        .replace(/\bDrizzle\b/g, "Piovischio")
        .replace(/\bDrought\b/g, "Siccit&agrave;")
        .replace(/\bDry Skin\b/g, "Pellearsa")
        .replace(/\bEarly Bird\b/g, "Sveglialampo")
        .replace(/\bEffect Spore\b/g, "Spargispora")
        .replace(/\bFilter\b/g, "Filtro")
        .replace(/\bFlame Body\b/g, "Corpodifuoco")
        .replace(/\bFlash Fire\b/g, "Fuocardore")
        .replace(/\bFlower Gift\b/g, "Regalfiore")
        .replace(/\bForecast\b/g, "Previsioni")
        .replace(/\bForewarn\b/g, "Premonizione")
        .replace(/\bFrisk\b/g, "Indagine")
        .replace(/\bGluttony\b/g, "Voracit&agrave;")
        .replace(/\bGuts\b/g, "Dentistretti")
        .replace(/\bHeatproof\b/g, "Antifuoco")
        .replace(/\bHoney Gather\b/g, "Mielincetta")
        .replace(/\bHuge Power\b/g, "Macroforza")
        .replace(/\bHustle\b/g, "Tuttafretta")
        .replace(/\bHydration\b/g, "Idratazione")
        .replace(/\bHyper Cutter\b/g, "Ipertaglio")
        .replace(/\bIce Body\b/g, "Corpogelo")
        .replace(/\bIlluminate\b/g, "Risplendi")
        .replace(/\bImmunity\b/g, "Immunit&agrave;")
        .replace(/\bInner Focus\b/g, "Forza Interiore")
        .replace(/\bInsomnia\b/g, "Insonnia")
        .replace(/\bIntimidate\b/g, "Prepotenza")
        .replace(/\bIron Fist\b/g, "Ferropugno")
        .replace(/\bKeen Eye\b/g, "Sguardofermo")
        .replace(/\bKlutz\b/g, "Impaccio")
        .replace(/\bLeaf Guard\b/g, "Fogliamanto")
        .replace(/\bLevitate\b/g, "Levitazione")
        .replace(/\bLightningrod\b/g, "Parafulmine")
        .replace(/\bLightning Rod\b/g, "Parafulmine")
        .replace(/\bLimber\b/g, "Scioltezza")
        .replace(/\bLiquid Ooze\b/g, "Melma")
        .replace(/\bMagic Guard\b/g, "Magicscudo")
        .replace(/\bMagma Armor\b/g, "Magmascudo")
        .replace(/\bMagnet Pull\b/g, "Magnetismo")
        .replace(/\bMarvel Scale\b/g, "Pelledura")
        .replace(/\bMinus\b/g, "Meno")
        .replace(/\bMold Breaker\b/g, "Rompiforma")
        .replace(/\bMotor Drive\b/g, "Elettrorapid")
        .replace(/\bMultitype\b/g, "Multitipo")
        .replace(/\bNatural Cure\b/g, "Alternacura")
        .replace(/\bNo Guard\b/g, "Nullodifesa")
        .replace(/\bNormalize\b/g, "Normalit&agrave;")
        .replace(/\bOblivious\b/g, "Indifferenza")
        .replace(/\bOvergrow\b/g, "Erbaiuto")
        .replace(/\bOwn Tempo\b/g, "Mente Locale")
        .replace(/\bPickup\b/g, "Raccolta")
        .replace(/\bPlus\b/g, "Pi&ugrave;")
        .replace(/\bPoison Heal\b/g, "Velencura")
        .replace(/\bPoison Point\b/g, "Velenopunte")
        .replace(/\bPressure\b/g, "Pressione")
        .replace(/\bPure [Pp]ower\b/g, "Forzapura")
        .replace(/\bQuick Feet\b/g, "Piedisvelti")
        .replace(/\bRain Dish\b/g, "Copripioggia")
        .replace(/\bReckless\b/g, "Temerariet&agrave;")
        .replace(/\bRivalry\b/g, "Antagonismo")
        .replace(/\bRock Head\b/g, "Testadura")
        .replace(/\bRough Skin\b/g, "Cartavetro")
        .replace(/\bRun Away\b/g, "Fugafacile")
        .replace(/\bSand Stream\b/g, "Sabbiafiume")
        .replace(/\bSand Veil\b/g, "Sabbiavelo")
        .replace(/\bScrappy\b/g, "Nervisaldi")
        .replace(/\bSerene Grace\b/g, "Leggiadro")
        .replace(/\bShadow Tag\b/g, "Pedinombra")
        .replace(/\bShed Skin\b/g, "Muta")
        .replace(/\bShell Armor\b/g, "Guscioscudo")
        .replace(/\bShield Dust\b/g, "Polvoscudo")
        .replace(/\bSimple\b/g, "Disinvoltura")
        .replace(/\bSkill Link\b/g, "Abillegame")
        .replace(/\bSlow Start\b/g, "Lentoinizio")
        .replace(/\bSniper\b/g, "Cecchino")
        .replace(/\bSnow Cloak\b/g, "Mantelneve")
        .replace(/\bSnow Warning\b/g, "Scendineve")
        .replace(/\bSolar Power\b/g, "Solarpotere")
        .replace(/\bSolid Rock\b/g, "Solidroccia")
        .replace(/\bSoundproof\b/g, "Antisuono")
        .replace(/\bSpeed Boost\b/g, "Acceleratore")
        .replace(/\bStall\b/g, "Rallentatore")
        .replace(/\bStatic\b/g, "Statico")
        .replace(/\bSteadfast\b/g, "Cuordeciso")
        .replace(/\bStench\b/g, "Tanfo")
        .replace(/\bSticky Hold\b/g, "Antifurto")
        .replace(/\bStorm Drain\b/g, "Acquascolo")
        .replace(/\bSturdy\b/g, "Vigore")
        .replace(/\bSuction Cups\b/g, "Ventose")
        .replace(/\bSuper Luck\b/g, "Supersorte")
        .replace(/\bSwarm\b/g, "Aiutinsetto")
        .replace(/\bSwift Swim\b/g, "Nuotovelox")
        .replace(/\bSynchronize\b/g, "Sincronismo")
        .replace(/\bTangled Feet\b/g, "Intricopiedi")
        .replace(/\bTechnician\b/g, "Tecnico")
        .replace(/\bThick Fat\b/g, "Grassospesso")
        .replace(/\bTinted Lens\b/g, "Lentifum&eacute;")
        .replace(/\bTorrent\b/g, "Acquaiuto")
        .replace(/\bTrace\b/g, "Traccia")
        .replace(/\bTruant\b/g, "Pigrone")
        .replace(/\bUnaware\b/g, "Imprudenza")
        .replace(/\bUnburden\b/g, "Agiltecnica")
        .replace(/\bVitalspirit\b/g, "Spiritovivo")
        .replace(/\bVital Spirit\b/g, "Spiritovivo")
        .replace(/\bVolt Absorb\b/g, "Assorbivolt")
        .replace(/\bWater Absorb\b/g, "Assorbacqua")
        .replace(/\bWater Veil\b/g, "Idrovelo")
        .replace(/\bWhite Smoke\b/g, "Fumochiaro")
        .replace(/\bWonder Guard\b/g, "Magidifesa")
        .replace(/\bPickpocket\b/g, "Arraffalesto")
        .replace(/\bSheer Force\b/g, "Forzabruta")
        .replace(/\bContrary\b/g, "Inversione")
        .replace(/\bUnnerve\b/g, "Agitazione")
        .replace(/\bDefiant\b/g, "Agonismo")
        .replace(/\bDefeatist\b/g, "Sconforto")
        .replace(/\bCursed Body\b/g, "Corpofunesto")
        .replace(/\bHealer\b/g, "Curacuore")
        .replace(/\bFriend Guard\b/g, "Amicoscudo")
        .replace(/\bWeak Armor\b/g, "Sottilguscio")
        .replace(/\bHeavy Metal\b/g, "Metalpesante")
        .replace(/\bLight Metal\b/g, "Metalleggero")
        .replace(/\bMultiscale\b/g, "Multisquame")
        .replace(/\bToxic Boost\b/g, "Velenimpeto")
        .replace(/\bFlare Boost\b/g, "Bruciaimpeto")
        .replace(/\bHarvest\b/g, "Coglibacche")
        .replace(/\bTelepathy\b/g, "Telepatia")
        .replace(/\bMoody\b/g, "Altalena")
        .replace(/\bOvercoat\b/g, "Copricapo")
        .replace(/\bPoison Touch\b/g, "Velentocco")
        .replace(/\bRegenerator\b/g, "Rigenergia")
        .replace(/\bBig Pecks\b/g, "Pettinfuori")
        .replace(/\bSand Rush\b/g, "Remasabbia")
        .replace(/\bWonder Skin\b/g, "Splendicute")
        .replace(/\bAnalytic\b/g, "Ponderazione")
        .replace(/\bIllusion\b/g, "Illusione")
        .replace(/\bImposter\b/g, "Sosia")
        .replace(/\bInfiltrator\b/g, "Intrapasso")
        .replace(/\bMummy\b/g, "Mummia")
        .replace(/\bMoxie\b/g, "Arroganza")
        .replace(/\bJustified\b/g, "Giustizia")
        .replace(/\bRattled\b/g, "Paura")
        .replace(/\bMagic Bounce\b/g, "Magispecchio")
        .replace(/\bSap Sipper\b/g, "Mangiaerba")
        .replace(/\bPrankster\b/g, "Burla")
        .replace(/\bSand Force\b/g, "Silicoforza")
        .replace(/\bIron Barbs\b/g, "Spineferrate")
        .replace(/\bZen Mode\b/g, "Stato Zen")
        .replace(/\bVictory Star\b/g, "Vittorstella")
        .replace(/\bTeravolt\b/g, "Teravolt")
        .replace(/\bAerilate\b/g, "Pellecielo")
        .replace(/\bAroma Veil\b/g, "Aromavelo")
        .replace(/\bAura Break\b/g, "Frangiaura")
        .replace(/\bBulletproof\b/g, "Antiproiettile")
        .replace(/\bCheek Pouch\b/g, "Guancegonfie")
        .replace(/\bCompetitive\b/g, "Tenacia")
        .replace(/\bDark Aura\b/g, "Auratetra")
        .replace(/\bFairy Aura\b/g, "Aurafolletto")
        .replace(/\bFlower Veil\b/g, "Fiorvelo")
        .replace(/\bFur Coat\b/g, "Foltopelo")
        .replace(/\bGale Wings\b/g, "Aliraffica")
        .replace(/\bGooey\b/g, "Viscosit&agrave;")
        .replace(/\bGrass Pelt\b/g, "Peloderba")
        .replace(/\bMagician\b/g, "Prestigiatore")
        .replace(/\bMega Launcher\b/g, "Megalancio")
        .replace(/\bParental Bond\b/g, "Amorefiliale")
        .replace(/\bPixilate\b/g, "Pellefolletto")
        .replace(/\bProtean\b/g, "Mutatipo")
        .replace(/\bRefrigerate\b/g, "Pellegelo")
        .replace(/\bStance Change\b/g, "Accendilotta")
        .replace(/\bStrong Jaw\b/g, "Ferromascella")
        .replace(/\bSweet Veil\b/g, "Dolcevelo")
        .replace(/\bSymbiosis\b/g, "Simbiosi")
        .replace(/\bTough Claws\b/g, "Unghiedure")
        .replace(/\bPrimordial Sea\b/g, "Mare Primordiale")
        .replace(/\bDesolate Land\b/g, "Terra Estrema")
        .replace(/\bDelta Stream\b/g, "Flusso Delta")
        .replace(/\bStamina\b/g, "Sopportazione")
        .replace(/\bWimp Out\b/g, "Fuggifuggi")
        .replace(/\bEmergency Exit\b/g, "Passoindietro")
        .replace(/\bWater Compaction\b/g, "Idrorinforzo")
        .replace(/\bMerciless\b/g, "Spietatezza")
        .replace(/\bShields Down\b/g, "Scudosoglia")
        .replace(/\bStakeout\b/g, "Sorveglianza")
        .replace(/\bWater Bubble\b/g, "Bolladacqua")
        .replace(/\bSteelworker\b/g, "Tempracciaio")
        .replace(/\bBerserk\b/g, "Furore")
        .replace(/\bSlush Rush\b/g, "Spalaneve")
        .replace(/\bLong Reach\b/g, "Distacco")
        .replace(/\bLiquid Voice\b/g, "Idrovoce")
        .replace(/\bTriage\b/g, "Primacura")
        .replace(/\bGalvanize\b/g, "Pellelettro")
        .replace(/\bSurge Surfer\b/g, "Codasurf")
        .replace(/\bSchooling\b/g, "Banco")
        .replace(/\bDisguise\b/g, "Fantasmanto")
        .replace(/\bBattle Bond\b/g, "Morfosintonia")
        .replace(/\bPower Construct\b/g, "Sciamefusione")
        .replace(/\bCorrosion\b/g, "Corrosione")
        .replace(/\bComatose\b/g, "Sonno Assoluto")
        .replace(/\bQueenly Majesty\b/g, "Regalità")
        .replace(/\bInnards Out\b/g, "Espellinterno")
        .replace(/\bDancer\b/g, "Sincrodanza")
        .replace(/\bBattery\b/g, "Batteria")
        .replace(/\bFluffy\b/g, "Morbidone")
        .replace(/\bDazzling\b/g, "Corposgargiante")
        .replace(/\bSoul\-Heart\b/g, "Cuoreanima")
        .replace(/\bTangling Hair\b/g, "Boccolidoro")
        .replace(/\bReceiver\b/g, "Ricezione")
        .replace(/\bPower of Alchemy\b/g, "Forza Chimica")
        .replace(/\bBeast Boost\b/g, "Ultraboost")
        .replace(/\bRKS System\b/g, "Sistema Primevo")
        .replace(/\bElectric Surge\b/g, "Elettrogenesi")
        .replace(/\bPsychic Surge\b/g, "Psicogenesi")
        .replace(/\bMisty Surge\b/g, "Nebbiogenesi")
        .replace(/\bGrassy Surge\b/g, "Erbogenesi")
        .replace(/\bFull Metal Body\b/g, "Metalprotezione")
        .replace(/\bShadow Shield\b/g, "Spettroguardia")
        .replace(/\bPrism Armor\b/g, "Scudoprisma")
        .replace(/\bNeuroforce\b/g, "Cerebroforza")
        // gen 8
        .replace(/\bIntrepid Sword\b/g, "Spada Indomita")
        .replace(/\bDauntless Shield\b/g, "Scudo Saldo")
        .replace(/\bLibero\b/g, "Libero")
        .replace(/\bBall Fetch\b/g, "Raccattapalle")
        .replace(/\bCotton Down\b/g, "Lanugine")
        .replace(/\bPropeller Tail\b/g, "Elicopinna")
        .replace(/\bMirror Armor\b/g, "Blindospecchio")
        .replace(/\bGulp Missile\b/g, "Inghiottimissile")
        .replace(/\bStalwart\b/g, "Volontà di Ferro")
        .replace(/\bSteam Engine\b/g, "Vapormacchina")
        // .replace(/\bPunk Rock\b/g, 'Punk Rock')
        .replace(/\bSand Spit\b/g, "Sputasabbia")
        .replace(/\bIce Scales\b/g, "Geloscaglie")
        .replace(/\bRipen\b/g, "Maturazione")
        .replace(/\bIce Face\b/g, "Gelofaccia")
        .replace(/\bPower Spot\b/g, "Fonte Energetica")
        .replace(/\bMimicry\b/g, "Mimetismo")
        .replace(/\bScreen Cleaner\b/g, "Annullabarriere")
        .replace(/\bSteely Spirit\b/g, "Spiritoferreo")
        .replace(/\bPerish Body\b/g, "Ultimotocco")
        .replace(/\bWandering Spirit\b/g, "Anima Errante")
        .replace(/\bGorilla Tactics\b/g, "Vigorilla")
        .replace(/\bNeutralizing Gas\b/g, "Gas Reagente")
        .replace(/\bPastel Veil\b/g, "Pastelvelo")
        .replace(/\bHunger Switch\b/g, "Pancialterna")
        .replace(/\bQuick Draw\b/g, "Colpolesto")
        .replace(/\bCurious Medicine\b/g, "Stranofarmaco")
        .replace(/\bUnseen Fist\b/g, "Pugni Invisibili")
        .replace(/\bDragon?['’]s Maw\b/g, "Dragomascelle")
        .replace(/\bChilling Neigh\b/g, "Nitrito Bianco")
        .replace(/\bGrim Neigh\b/g, "Nitrito Nero")
        .replace(/\bAs One\b/g, "Sintonia Equina")
        // gen 9
        .replace(/\bLingering Aroma\b/g, "Odore Tenace")
        .replace(/\bSeed Sower\b/g, "Spargisemi")
        .replace(/\bThermal Exchange\b/g, "Termoscambio")
        .replace(/\bAnger Shell\b/g, "Iraguscio")
        .replace(/\bPurifying Salt\b/g, "Sale Purificante")
        .replace(/\bWell-Baked Body\b/g, "Bentostato")
        .replace(/\bWind Rider\b/g, "Vento Propizio")
        .replace(/\bGuard Dog\b/g, "Cane da Guardia")
        .replace(/\bRocky Payload\b/g, "Portamassi")
        .replace(/\bWind Power\b/g, "Energia Eolica")
        .replace(/\bZero to Hero\b/g, "Supercambio")
        .replace(/\bCommander\b/g, "Torre di Comando")
        .replace(/\bElectromorphosis\b/g, "Convertivolt")
        .replace(/\bProtosynthesis\b/g, "Paleoattivazione")
        .replace(/\bQuark Drive\b/g, "Carica Quark")
        .replace(/\bGood as Gold\b/g, "Corpo Aureo")
        .replace(/\bVessel of Ruin\b/g, "Vaso Nefasto")
        .replace(/\bSword of Ruin\b/g, "Spada Nefasta")
        .replace(/\bTablets of Ruin\b/g, "Amuleto Nefasto")
        .replace(/\bBeads of Ruin\b/g, "Monile Nefasto")
        .replace(/\bOrichalcum Pulse\b/g, "Ritmo d'Oricalco")
        .replace(/\bHadron Engine\b/g, "Motore Adronico")
        .replace(/\bOpportunist\b/g, "Scrocco")
        .replace(/\bCud Chew\b/g, "Ruminante")
        .replace(/\bSharpness\b/g, "Affilama")
        .replace(/\bSupreme Overlord\b/g, "Generale Supremo")
        .replace(/\bCostar\b/g, "Coprotagonismo")
        .replace(/\bToxic Debris\b/g, "Mantossina")
        .replace(/\bArmor Tail\b/g, "Codarmatura")
        .replace(/\bEarth Eater\b/g, "Mangiaterra")
        .replace(/\bMycelium Might\b/g, "Micoforza")
        .replace(/\bHospitality\b/g, "Ospitalità")
        .replace(/\bMind's Eye\b/g, "Occhio Interiore")
        .replace(/\bEmbody Aspect\b/g, "Albergamemorie")
        .replace(/\bToxic Chain\b/g, "Catena Tossica")
        .replace(/\bSupersweet Syrup\b/g, "Sciroppo Sublime")
        .replace(/\bTera Shift\b/g, "Teramorfosi")
        .replace(/\bTera Shell\b/g, "Teraguscio")
        .replace(/\bTeraform Zero\b/g, "Zeroformazione")
        .replace(/\bPoison Puppeteer\b/g, "Malia Tossica")

        // Correzioni errori
        .replace(/\bCorposgargiante Gleam\b/g, "Magibrillio")
        .replace(/\bDisinvoltura Beam\b/g, "Ondisinvolta")
      // .replace(/\bAcuPressione\b/g, 'Acupressione')
    );
  };

  if (utils.updateMenu) {
    utils.updateMenu();
  }
})(utils || { macros: {} });
