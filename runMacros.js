var macros = {}

macros.tipi = function(str) {

	// Tipi

	str = str.replace(/grass/g, 'erba').replace(/Grass/g, 'Erba');
	str = str.replace(/Water/g, 'Acqua').replace(/water/g, 'acqua');
	str = str.replace(/Fire/g, 'Fuoco').replace(/fire/g, 'fuoco');
	str = str.replace(/Flying/g, 'Volante').replace(/flying/g, 'volante');
	str = str.replace(/Fighting/g, 'Lotta').replace(/fighting/g, 'lotta');
	str = str.replace(/Ground/g, 'Terra').replace(/ground/g, 'terra');
	str = str.replace(/Dark/g, 'Buio').replace(/dark/g, 'buio');
	str = str.replace(/Dragon/g, 'Drago').replace(/dragon/g, 'drago');
	str = str.replace(/Rock/g, 'Roccia').replace(/rock/g, 'roccia');
	str = str.replace(/Poison/g, 'Veleno').replace(/poison/g, 'veleno');
	str = str.replace(/Ghost/g, 'Spettro').replace(/ghost/g, 'spettro');
	str = str.replace(/Psychic/g, 'Psico').replace(/psychic/g, 'psico');
	str = str.replace(/Electric/g, 'Elettro').replace(/electric/g, 'elettro');
	str = str.replace(/Steel/g, 'Acciaio').replace(/steel/g, 'acciaio');
	str = str.replace(/Normal/g, 'Normale').replace(/normal/g, 'normale');
	str = str.replace(/Bug/g, 'Coleottero').replace(/bug/g, 'coleottero');
	str = str.replace(/Fairy/g, 'Folletto').replace(/fairy/g, 'folletto');
	str = str.replace(/Unknown/g, 'Sconosciuto').replace(/unknown/g, 'sconosciuto');

	// Ghiaccio va trattato a parte, visto che '-ice-' si trova spesso in giro

	str = str.replace(/ice color/g, 'ghiaccio color');
	str = str.replace(/\|[\s\n]*[Ii]ce[\s\n]*\|[Ii]ce[\s\n]*\|/g, '|Ghiaccio|Ghiaccio|');
	str = str.replace(/\|[\s\n]*[Ii]ce[\n\s]*\|/g, '|Ghiaccio|');
	str = str.replace(/=[\s\n]*[Ii]ce[\s\n]*\|/g, '=Ghiaccio|');
	str = str.replace(/=[\s\n]*[Ii]ce[\s\n]*\}/g, '=Ghiaccio}');
	str = str.replace(/\|[\s\n]*[Ii]ce[\s\n]*\}/g, '|Ghiaccio}');
	str = str.replace(/\{[\s\n]*[Ii]ce[\s\n]*\|/g, '{Ghiaccio|');

	// Categorie danno

	str = str.replace(/Special/g, 'Speciale').replace(/special/g, 'speciale');
	str = str.replace(/Status/g, 'Stato').replace(/status/g, 'stato');
	str = str.replace(/Physical/g, 'Fisico').replace(/physical/g, 'fisico');

	// Correzione errori

	str = str.replace(/Voloing/g, 'Volante').replace(/voloing/g, 'volante');
	str = str.replace(/backterra/g, 'background');
	str = str.replace(/Clefolletto/g, 'Clefairy');
	str = str.replace(/Scattercoleottero/g, 'Scatterbug');
	str = str.replace(/Regiroccia/g, 'Regirock');
	str = str.replace(/Buiorai/g, 'Darkrai');
	str = str.replace(/Acciaioix/g, 'Steelix');
	str = str.replace(/Regiacciaio/g, 'Registeel');
	str = str.replace(/Solroccia/g, 'Solrock');
	str = str.replace(/Dragoair/g, 'Dragonair');
	str = str.replace(/Dragoite/g, 'Dragonite');
	str = str.replace(/Erbaospesso/gi, 'Grassospesso');
	str = str.replace(/[Pp]sichico\|[Ff]isico/g, 'Psico|Fisico');
	str = str.replace(/[Pp]sichico\|[Ss]peciale/g, 'Psico|Speciale');
	str = str.replace(/[Pp]sichico\|[Ss]tato/g, 'Psico|Stato');
	str = str.replace(/specialee/g, 'speciale').replace(/Specialee/g, 'Speciale');
	str = str.replace(/Normalee/g, 'Normale').replace(/normalee/g, 'normale');
	str = str.replace(/Gale of [Bb]uioness/gi, 'Tempesta Oscura');
	str = str.replace(/colore\s*\|?\s*(.+?)\s*\|?\s*buio\s*\}\}/gi,
		'colore | $1 | dark }}');
	return str;
};

macros.mosse = function(str) {

	// Mosse

	str = str.replace(/Absorb/gi, 'Assorbimento');
    str = str.replace(/Acid Spray/g, 'Acidobomba');
    str = str.replace(/Acid Armor/gi, 'Scudo Acido');
    str = str.replace(/Gastro Acid/gi, 'Gastroacido');
    str = str.replace(/Acid/gi, 'Acido');
    str = str.replace(/Acupressure/gi, 'Acupressione');
    str = str.replace(/Aerial Ace/gi, 'Aeroassalto');
    str = str.replace(/Aeroblast/gi, 'Aerocolpo');
    str = str.replace(/Agility/gi, 'Agilit&agrave;');
    str = str.replace(/Air Cutter/gi, 'Aerasoio');
    str = str.replace(/Air Slash/gi, 'Eterelama');
    str = str.replace(/Amnesia/gi, 'Amnesia');
    str = str.replace(/Ancient\s?power/gi, 'Forzantica');
    str = str.replace(/Aqua Jet/gi, 'Acquagetto');
    str = str.replace(/Aqua Ring/gi, 'Acquanello');
    str = str.replace(/Aqua Tail/gi, 'Idrondata');
    str = str.replace(/Arm Thrust/gi, 'Sberletese');
    str = str.replace(/Aromatherapy/gi, 'Aromaterapia');
    str = str.replace(/Assist/gi, 'Assistente');
    str = str.replace(/Assurance/gi, 'Garanzia');
    str = str.replace(/Astonish/gi, 'Sgomento');
    str = str.replace(/Attack Order/gi, 'Comandourto');
    str = str.replace(/Attract/gi, 'Attrazione');
    str = str.replace(/Aura Sphere/gi, 'Forzasfera');
    str = str.replace(/Aurora Beam/gi, 'Raggiaurora');
    str = str.replace(/Avalanche/gi, 'Slavina');
    str = str.replace(/Barrage/gi, 'Attacco Pioggia');
    str = str.replace(/Barrier/gi, 'Barriera');
    str = str.replace(/Baton Pass/gi, 'Staffetta');
    str = str.replace(/Beat Up/gi, 'Picchiaduro');
    str = str.replace(/Belly Drum/gi, 'Panciamburo');
    str = str.replace(/Bide/gi, 'Pazienza');
    str = str.replace(/Bind/gi, 'Legatutto');
    str = str.replace(/Bug Bite/gi, 'Coleomorso');
    str = str.replace(/Bite/gi, 'Morso');
    str = str.replace(/Blast Burn/gi, 'Incendio');
    str = str.replace(/Blaze Kick/gi, 'Calciardente');
    str = str.replace(/Petal Blizzard/g, 'Fiortempesta');
    str = str.replace(/Blizzard/gi, 'Bora');
    str = str.replace(/Heal Block/gi, 'Anticura');
    str = str.replace(/Mat Block/g, 'Ribaltappeto');
    str = str.replace(/Block/gi, 'Blocco');
    str = str.replace(/Body Slam/gi, 'Corposcontro');
    str = str.replace(/Bone Club/gi, 'Ossoclava');
    str = str.replace(/Bone Rush/gi, 'Ossoraffica');
    str = str.replace(/Bonemerang/gi, 'Ossomerang');
    str = str.replace(/Bounce/gi, 'Rimbalzo');
    str = str.replace(/Brave Bird/gi, 'Baldeali');
    str = str.replace(/Brick Break/gi, 'Breccia');
    str = str.replace(/Brine/gi, 'Acquadisale');
    str = str.replace(/Bubble\s?beam/gi, 'Bollaraggio');
    str = str.replace(/Bubble/gi, 'Bolla');
    str = str.replace(/Bug Buzz/gi, 'Ronzio');
    str = str.replace(/Bulk Up/gi, 'Granfisico');
    str = str.replace(/Bullet Punch/gi, 'Pugnoscarica');
    str = str.replace(/Bullet Seed/gi, 'Semitraglia');
    str = str.replace(/Calm Mind/gi, 'Calmamente');
    str = str.replace(/Camouflage/gi, 'Camuffamento');
    str = str.replace(/Captivate/gi, 'Incanto');
    str = str.replace(/Charge Beam/gi, 'Raggioscossa');
    str = str.replace(/Discharge/gi, 'Scarica');
    str = str.replace(/Flame Charge/g, 'Nitrocarica');
    str = str.replace(/Head Charge/g, 'Ricciolata');
    str = str.replace(/Parabolic Charge/g, 'Caricaparabola');
    str = str.replace(/Wild Charge/g, 'Sprizzalampo');
    str = str.replace(/Charge/gi, 'Sottocarica');
    str = str.replace(/Charm/gi, 'Fascino');
    str = str.replace(/Chatter/gi, 'Schiamazzo');
    str = str.replace(/Clamp/gi, 'Tenaglia');
    str = str.replace(/Close Combat/gi, 'Zuffa');
    str = str.replace(/Comet Punch/gi, 'Cometapugno');
    str = str.replace(/Confuse Ray/gi, 'Stordiraggio');
    str = str.replace(/Confusion/gi, 'Confusione');
    str = str.replace(/Constrict/gi, 'Limitazione');
    str = str.replace(/Conversion/gi, 'Conversione');
    str = str.replace(/Conversione 2/gi, 'Conversione2');
    str = str.replace(/Copycat/gi, 'Copione');
    str = str.replace(/Cosmic Power/gi, 'Cosmoforza');
    str = str.replace(/Cotton Spore/gi, 'Cottonspora');
    str = str.replace(/Counter/gi, 'Contrattacco');
    str = str.replace(/Covet/gi, 'Supplica');
    str = str.replace(/Crabhammer/gi, 'Martellata');
    str = str.replace(/Cross Chop/gi, 'Incrocolpo');
    str = str.replace(/Cross Poison/gi, 'Velenocroce');
    str = str.replace(/Crunch/gi, 'Sgranocchio');
    str = str.replace(/Crush Claw/gi, 'Tritartigli');
    str = str.replace(/Crush Grip/gi, 'Sbriciolmano');
    str = str.replace(/Forest's Curse/g, 'Boscomalocchio');
    str = str.replace(/Curse/gi, 'Maledizione');
    str = str.replace(/Fury Cutter/gi, 'Tagliofuria');
    str = str.replace(/Psycho Cut/gi, 'Psicotaglio');
    str = str.replace(/Sky Uppercut/gi, 'Stramontante');
    str = str.replace(/Cut/gi, 'Taglio');
    str = str.replace(/Dark Pulse/gi, 'Neropulsar');
    str = str.replace(/Dark Void/gi, 'Vuototetro');
    str = str.replace(/Defense Curl/gi, 'Ricciolscudo');
    str = str.replace(/Defend Order/gi, 'Comandoscudo');
    str = str.replace(/Defog/gi, 'Scacciabruma');
    str = str.replace(/Destiny Bond/gi, 'Destinobbligato');
    str = str.replace(/Detect/gi, 'Individua');
    str = str.replace(/Dig/gi, 'Fossa');
    str = str.replace(/Disable/gi, 'Inibitore');
    str = str.replace(/Dive/gi, 'Sub');
    str = str.replace(/Dizzy Punch/gi, 'Stordipugno');
    str = str.replace(/Doom Desire/gi, 'Obbliderio');
    str = str.replace(/Double Hit/gi, 'Doppiosmash');
    str = str.replace(/Double Kick/gi, 'Doppiocalcio');
    str = str.replace(/Double Team/gi, 'Doppioteam');
    str = str.replace(/Double-edge/gi, 'Sdoppiatore');
    str = str.replace(/Double\s?slap/gi, 'Doppiasberla');
    str = str.replace(/Draco Meteor/gi, 'Dragobolide');
    str = str.replace(/Dragon Claw/gi, 'Dragartigli');
    str = str.replace(/Dragon Dance/gi, 'Dragodanza');
    str = str.replace(/Dragon Pulse/gi, 'Dragopulsar');
    str = str.replace(/Dragon Rage/gi, 'Ira di Drago');
    str = str.replace(/Dragon Rush/gi, 'Dragofuria');
    str = str.replace(/Dragon\s?breath/gi, 'Dragospiro');
    str = str.replace(/Drain Punch/gi, 'Assorbipugno');
    str = str.replace(/Dream Eater/gi, 'Mangiasogni');
    str = str.replace(/Drill Peck/gi, 'Perforbecco');
    str = str.replace(/Dynamic\s?punch/gi, 'Dinamipugno');
    str = str.replace(/Earth Power/gi, 'Geoforza');
    str = str.replace(/Earthquake/gi, 'Terremoto');
    str = str.replace(/Egg Bomb/gi, 'Uovobomba');
    str = str.replace(/Embargo/gi, 'Divieto');
    str = str.replace(/Ember/gi, 'Braciere');
    str = str.replace(/Encore/gi, 'Ripeti');
    str = str.replace(/Endeavor/gi, 'Rimonta');
    str = str.replace(/Endure/gi, 'Resistenza');
    str = str.replace(/Energy Ball/gi, 'Energipalla');
    str = str.replace(/Eruption/gi, 'Eruzione');
    str = str.replace(/Explosion/gi, 'Esplosione');
    str = str.replace(/Extrasensory/gi, 'Extrasenso');
    str = str.replace(/Extreme\s?speed/gi, 'Extrarapido');
    str = str.replace(/Facade/gi, 'Facciata');
    str = str.replace(/F[ae]int Attack/gi, 'Finta');
    str = str.replace(/Fake Out/gi, 'Bruciapelo');
    str = str.replace(/Fake Tears/gi, 'Falselacrime');
    str = str.replace(/False Swipe/gi, 'Falsofinale');
    str = str.replace(/Feather\s?dance/gi, 'Danzadipiume');
    str = str.replace(/Feint/gi, 'Fintoattacco');
    str = str.replace(/Fire Blast/gi, 'Fuocobomba');
    str = str.replace(/Fire Fang/gi, 'Rogodenti');
    str = str.replace(/Fire Punch/gi, 'Fuocopugno');
    str = str.replace(/Fire Spin/gi, 'Turbofuoco');
    str = str.replace(/Fissure/gi, 'Abisso');
    str = str.replace(/Flail/gi, 'Flagello');
    str = str.replace(/Flame Wheel/gi, 'Ruotafuoco');
    str = str.replace(/Flamethrower/gi, 'Lanciafiamme');
    str = str.replace(/Flare Blitz/gi, 'Fuococarica');
	str = str.replace(/Flash/gi, 'Flash');
    str = str.replace(/Flash Cannon/gi, 'Cannonflash');
    str = str.replace(/Flatter/gi, 'Adulazione');
    str = str.replace(/Fling/gi, 'Lancio');
    str = str.replace(/Flying Press/g, 'Schiacciatuffo');
    str = str.replace(/Fly/gi, 'Volo');
    str = str.replace(/Focus Blast/gi, 'Focalcolpo');
    str = str.replace(/Focus Energy/gi, 'Focalenergia');
    str = str.replace(/Focus Punch/gi, 'Centripugno');
    str = str.replace(/Follow Me/gi, 'Sonoqui');
    str = str.replace(/Force Palm/gi, 'Palmoforza');
    str = str.replace(/Foresight/gi, 'Preveggenza');
    str = str.replace(/Frenzy Plant/gi, 'Radicalbero');
    str = str.replace(/Frustration/gi, 'Frustrazione');
    str = str.replace(/Fury Attack/gi, 'Furia');
    str = str.replace(/Fury Swipes/gi, 'Sfuriate');
    str = str.replace(/Future Sight/gi, 'Divinazione');
    str = str.replace(/Giga Drain/gi, 'Gigassorbimento');
    str = str.replace(/Giga Impact/gi, 'Gigaimpatto');
    str = str.replace(/Glare/gi, 'Sguardo Feroce');
    str = str.replace(/Grass Knot/gi, 'Laccioerboso');
    str = str.replace(/Grass\s?whistle/gi, 'Meloderba');
    str = str.replace(/Gravity/gi, 'Gravit&agrave;');
    str = str.replace(/Growl/gi, 'Ruggito');
    str = str.replace(/Growth/g, 'Crescita');
    str = str.replace(/Grudge/gi, 'Rancore');
    str = str.replace(/Guard Swap/gi, 'Barattoscudo');
    str = str.replace(/Guillotine/gi, 'Ghigliottina');
    str = str.replace(/Gunk Shot/gi, 'Sporcolancio');
    str = str.replace(/Gust/gi, 'Raffica');
    str = str.replace(/Gyro Ball/gi, 'Vortexpalla');
    str = str.replace(/Hail/gi, 'Grandine');
    str = str.replace(/Hammer Arm/gi, 'Martelpugno');
    str = str.replace(/Harden/gi, 'Rafforzatore');
    str = str.replace(/Haze/gi, 'Nube');
    str = str.replace(/Head Smash/gi, 'Zuccata');
    str = str.replace(/Zen Headbutt/gi, 'Cozzata Zen');
    str = str.replace(/Headbutt/gi, 'Bottintesta');
    str = str.replace(/Heal Bell/gi, 'Rintoccasana');
    str = str.replace(/Heal Order/gi, 'Comandocura');
    str = str.replace(/Healing Wish/gi, 'Curardore');
    str = str.replace(/Heart Swap/gi, 'Cuorbaratto');
    str = str.replace(/Heat Wave/gi, 'Ondacalda');
    str = str.replace(/Heavy Slam/g, 'Pesobomba');
    str = str.replace(/Helping Hand/gi, 'Altruismo');
    str = str.replace(/(Hi|High) Jump Kick/gi, 'Calcinvolo');
    str = str.replace(/Hidden Power/gi, 'Introforza');
    str = str.replace(/Hone Claws/g, 'Unghiaguzze');
    str = str.replace(/Horn Attack/gi, 'Incornata');
    str = str.replace(/Horn Drill/gi, 'Perforcorno');
    str = str.replace(/Howl/gi, 'Gridodilotta');
    str = str.replace(/Hydro Cannon/gi, 'Idrocannone');
    str = str.replace(/Hydro Pump/gi, 'Idropompa');
    str = str.replace(/Hyper Beam/gi, 'Iper Raggio');
    str = str.replace(/Hyper Fang/gi, 'Iperzanna');
    str = str.replace(/Hyper Voice/gi, 'Granvoce');
    str = str.replace(/Hypnosis/gi, 'Ipnosi');
    str = str.replace(/Ice Ball/gi, 'Palla Gelo');
    str = str.replace(/Ice Beam/gi, 'Geloraggio');
    str = str.replace(/Ice Fang/gi, 'Gelodenti');
    str = str.replace(/Ice Punch/gi, 'Gelopugno');
    str = str.replace(/Ice Shard/gi, 'Geloscheggia');
    str = str.replace(/Icicle Spear/gi, 'Gelolancia');
    str = str.replace(/Icy Wind/gi, 'Ventogelato');
    str = str.replace(/Imprison/gi, 'Esclusiva');
    str = str.replace(/Ingrain/gi, 'Radicamento');
    str = str.replace(/Ion Deluge/gi, 'Pioggiaplasma');
    str = str.replace(/Iron Defense/gi, 'Ferroscudo');
    str = str.replace(/Iron Head/gi, 'Metaltestata');
    str = str.replace(/Iron Tail/gi, 'Codacciaio');
    str = str.replace(/Judgment/gi, 'Giudizio');
    str = str.replace(/Jump Kick/gi, 'Calciosalto');
    str = str.replace(/Karate Chop/gi, 'Colpokarate');
    str = str.replace(/Telekinesis/g, 'Telecinesi');
    str = str.replace(/Kinesis/gi, 'Cin&egrave;si');
    str = str.replace(/Knock Off/gi, 'Privazione');
    str = str.replace(/Last Resort/gi, 'Ultimascelta');
    str = str.replace(/Lava Plume/gi, 'Lavasbuffo');
    str = str.replace(/Leaf Blade/gi, 'Fendifoglia');
    str = str.replace(/Leaf Storm/gi, 'Verdebufera');
    str = str.replace(/Leech Life/gi, 'Sanguisuga');
    str = str.replace(/Leech Seed/gi, 'Parassiseme');
    str = str.replace(/Leer/gi, 'Fulmisguardo');
    str = str.replace(/Lick/gi, 'Leccata');
    str = str.replace(/Light Screen/gi, 'Schermoluce');
    str = str.replace(/Lock-on/gi, 'Localizza');
    str = str.replace(/Lovely Kiss/gi, 'Demonbacio');
    str = str.replace(/Low Kick/gi, 'Colpo Basso');
    str = str.replace(/Lucky Chant/gi, 'Fortuncanto');
    str = str.replace(/Lunar Dance/gi, 'Lunardanza');
    str = str.replace(/Luster Purge/gi, 'Abbagliante');
    str = str.replace(/Mach Punch/gi, 'Pugnorapido');
    str = str.replace(/Magic Coat/gi, 'Magivelo');
    str = str.replace(/Magical Leaf/gi, 'Fogliamagica');
    str = str.replace(/Magma Storm/gi, 'Magmaclisma');
    str = str.replace(/Magnet Bomb/gi, 'Bombagnete');
    str = str.replace(/Magnet Rise/gi, 'Magnetascesa');
    str = str.replace(/Magnitude/gi, 'Magnitudo');
    str = str.replace(/Me First/gi, 'Precedenza');
    str = str.replace(/Mean Look/gi, 'Malosguardo');
    str = str.replace(/Meditate/gi, 'Meditazione');
    str = str.replace(/Mega Drain/gi, 'Megassorbimento');
    str = str.replace(/Mega Kick/gi, 'Megacalcio');
    str = str.replace(/Mega Punch/gi, 'Megapugno');
    str = str.replace(/Megahorn/gi, 'Megacorno');
    str = str.replace(/Memento/gi, 'Memento');
    str = str.replace(/Metal Burst/gi, 'Metalscoppio');
    str = str.replace(/Metal Claw/gi, 'Ferrartigli');
    str = str.replace(/Metal Sound/gi, 'Ferrostrido');
    str = str.replace(/Meteor Mash/gi, 'Meteorpugno');
    str = str.replace(/Metronome/gi, 'Metronomo');
    str = str.replace(/Milk Drink/gi, 'Buonlatte');
    str = str.replace(/Mimic/gi, 'Mimica');
    str = str.replace(/Mind Reader/gi, 'Leggimente');
    str = str.replace(/Minimize/gi, 'Minimizzato');
    str = str.replace(/Miracle Eye/gi, 'Miracolvista');
    str = str.replace(/Mirror Coat/gi, 'Specchiovelo');
    str = str.replace(/Mirror Move/gi, 'Speculmossa');
    str = str.replace(/Mirror Shot/gi, 'Cristalcolpo');
    str = str.replace(/Mist Ball/gi, 'Foschisfera');
    str = str.replace(/Misty Terrain/g, 'Campo Nebbioso');
	str = str.replace(/Aromatic Mist/g, 'Nebularoma');
    str = str.replace(/Mist/gi, 'Nebbia');
    str = str.replace(/Moonlight/gi, 'Lucelunare');
    str = str.replace(/Morning Sun/gi, 'Mattindoro');
    str = str.replace(/Mud Bomb/gi, 'Pantanobomba');
    str = str.replace(/Mud Shot/gi, 'Colpodifango');
    str = str.replace(/Mud Sport/gi, 'Fangata');
    str = str.replace(/Mud-slap/gi, 'Fangosberla');
    str = str.replace(/Muddy Water/gi, 'Fanghiglia');
    str = str.replace(/Nasty Plot/gi, 'Congiura');
    str = str.replace(/Natural Gift/gi, 'Dononaturale');
    str = str.replace(/Nature Power/gi, 'Naturforza');
    str = str.replace(/Needle Arm/gi, 'Pugnospine');
    str = str.replace(/Night Shade/gi, 'Ombra Notturna');
    str = str.replace(/Night Slash/gi, 'Nottesferza');
    str = str.replace(/Nightmare/gi, 'Incubo');
    str = str.replace(/Octazooka/gi, 'Octazooka');
    str = str.replace(/Odor Sleuth/gi, 'Segugio');
    str = str.replace(/Ominous Wind/gi, 'Funestovento');
    str = str.replace(/Outrage/gi, 'Oltraggio');
    str = str.replace(/Overheat/gi, 'Vampata');
    str = str.replace(/Pain Split/gi, 'Malcomune');
    str = str.replace(/Pay Day/gi, 'Giornopaga');
    str = str.replace(/Payback/gi, 'Rivincita');
    str = str.replace(/Peck/gi, 'Beccata');
    str = str.replace(/Perish Song/gi, 'Ultimocanto');
    str = str.replace(/Petal Dance/gi, 'Petalodanza');
    str = str.replace(/Pin Missile/gi, 'Missilspillo');
    str = str.replace(/Pluck/gi, 'Spennata');
    str = str.replace(/Poison Fang/gi, 'Velenodenti');
    str = str.replace(/Poison Gas/gi, 'Velenogas');
    str = str.replace(/Poison Jab/gi, 'Velenpuntura');
    str = str.replace(/Poison Sting/gi, 'Velenospina');
    str = str.replace(/Poison Tail/gi, 'Velenocoda');
    str = str.replace(/Poison\s?powder/gi, 'Velenpolvere');
    str = str.replace(/Pound/gi, 'Botta');
    str = str.replace(/Powder Snow/gi, 'Polneve');
    str = str.replace(/Power Gem/gi, 'Gemmoforza');
    str = str.replace(/Power Swap/gi, 'Barattoforza');
    str = str.replace(/Power Whip/gi, 'Vigorcolpo');
    str = str.replace(/Present/gi, 'Regalino');
    str = str.replace(/Protect/gi, 'Protezione');
    str = str.replace(/Psybeam/gi, 'Psicoraggio');
    str = str.replace(/Psych Up/gi, 'Psicamis&ugrave;');
    str = str.replace(/Psychic/gi, 'Psichico');
    str = str.replace(/Psycho Boost/gi, 'Psicoslancio');
    str = str.replace(/Psycho Shift/gi, 'Psicotrasfer');
    str = str.replace(/Psyshock/g, 'Psicoshock');
    str = str.replace(/Psywave/gi, 'Psiconda');
    str = str.replace(/Punishment/gi, 'Punizione');
    str = str.replace(/Pursuit/gi, 'Inseguimento');
    str = str.replace(/Quick Attack/gi, 'Attacco Rapido');
    str = str.replace(/Rage Powder/g, 'Polverabbia');
    str = str.replace(/Rage/gi, 'Ira');
    str = str.replace(/Rain Dance/gi, 'Pioggiadanza');
    str = str.replace(/Rapid Spin/gi, 'Rapigiro');
    str = str.replace(/Razor Leaf/gi, 'Foglielama');
    str = str.replace(/Razor Wind/gi, 'Ventagliente');
    str = str.replace(/Recover/gi, 'Ripresa');
    str = str.replace(/Recycle/gi, 'Riciclo');
    str = str.replace(/Reflect Type/g, 'Riflettipo');
    str = str.replace(/Reflect/gi, 'Riflesso');
    str = str.replace(/Refresh/gi, 'Rinfrescata');
    str = str.replace(/Rest/gi, 'Riposo');
    str = str.replace(/Heart Stamp/g, 'Cuorestampo');
    str = str.replace(/Return/gi, 'Ritorno');
    str = str.replace(/Revenge/gi, 'Vendetta');
    str = str.replace(/Reversal/gi, 'Contropiede');
    str = str.replace(/Roar Of Time/gi, 'Fragortempo');
    str = str.replace(/Uproar/gi, 'Baraonda');
	str = str.replace(/Noble Roar/g, 'Urlo');
    str = str.replace(/Roar/gi, 'Boato');
    str = str.replace(/Rock Blast/gi, 'Cadutamassi');
    str = str.replace(/Rock Climb/gi, 'Scalaroccia');
    str = str.replace(/Rock Polish/gi, 'Lucidatura');
    str = str.replace(/Rock Slide/gi, 'Frana');
    str = str.replace(/Rock Smash/gi, 'Spaccaroccia');
    str = str.replace(/Rock Throw/gi, 'Sassata');
    str = str.replace(/Rock Tomb/gi, 'Rocciotomba');
    str = str.replace(/Rock Wrecker/gi, 'Devastomasso');
    str = str.replace(/Role Play/gi, 'Giocodiruolo');
    str = str.replace(/Rolling Kick/gi, 'Calciorullo');
    str = str.replace(/Rollout/gi, 'Rotolamento');
    str = str.replace(/Roost/gi, 'Trespolo');
    str = str.replace(/Sacred Fire/gi, 'Magifuoco');
    str = str.replace(/Safeguard/gi, 'Salvaguardia');
    str = str.replace(/Sand Tomb/gi, 'Sabbiotomba');
    str = str.replace(/Sand[-\s]attack/gi, 'Turbosabbia');
    str = str.replace(/Sandstorm/gi, 'Terrempesta');
    str = str.replace(/Scary Face/gi, 'Visotruce');
    str = str.replace(/Scratch/gi, 'Graffio');
    str = str.replace(/Screech/gi, 'Stridio');
    str = str.replace(/Secret Power/gi, 'Forzasegreta');
    str = str.replace(/Seed Bomb/gi, 'Semebomba');
    str = str.replace(/Seed Flare/gi, 'Infuriaseme');
    str = str.replace(/Seismic Toss/gi, 'Movimento Sismico');
    str = str.replace(/Self-?destruct/gi, 'Autodistruzione');
    str = str.replace(/Shadow Ball/gi, 'Palla Ombra');
    str = str.replace(/Shadow Claw/gi, 'Ombrartigli');
    str = str.replace(/Shadow Force/gi, 'Oscurotuffo');
    str = str.replace(/Shadow Punch/gi, 'Pugnodombra');
    str = str.replace(/Shadow Sneak/gi, 'Furtivombra');
    str = str.replace(/Sharpen/gi, 'Affilatore');
    str = str.replace(/Sheer Cold/gi, 'Purogelo');
    str = str.replace(/Shock Wave/gi, 'Ondashock');
    str = str.replace(/Signal Beam/gi, 'Segnoraggio');
    str = str.replace(/Silver Wind/gi, 'Ventargenteo');
    str = str.replace(/Sing/gi, 'Canto');
    str = str.replace(/Sketch/gi, 'Schizzo');
    str = str.replace(/Skill Swap/gi, 'Baratto');
    str = str.replace(/Skull Bash/gi, 'Capocciata');
    str = str.replace(/Sky Attack/gi, 'Aeroattacco');
    str = str.replace(/Slack Off/gi, 'Pigro');
    str = str.replace(/Slam/gi, 'Schianto');
    str = str.replace(/Slash/gi, 'Lacerazione');
    str = str.replace(/Sleep Powder/gi, 'Sonnifero');
    str = str.replace(/Sleep Talk/gi, 'Sonnolalia');
    str = str.replace(/Sludge Bomb/gi, 'Fangobomba');
    str = str.replace(/Sludge Wave/g, 'Fangonda');
    str = str.replace(/Sludge/gi, 'Fango');
    str = str.replace(/Smelling\s?salts?/gi, 'Maniereforti');
    str = str.replace(/Smokescreen/gi, 'Muro di Fumo');
    str = str.replace(/Snatch/gi, 'Scippo');
    str = str.replace(/Snore/gi, 'Russare');
    str = str.replace(/Soft-?boiled/gi, 'Covauova');
    str = str.replace(/Solar\s?beam/gi, 'Solarraggio');
    str = str.replace(/Sonic\s?boom/gi, 'Sonicboom');
    str = str.replace(/Spacial Rend/gi, 'Fendispazio');
    str = str.replace(/Spark/gi, 'Scintilla');
    str = str.replace(/Spider Web/gi, 'Ragnatela');
    str = str.replace(/Spike Cannon/gi, 'Sparalance');
    str = str.replace(/Toxic Spikes/gi, 'Fielepunte');
    str = str.replace(/Spikes/gi, 'Punte');
    str = str.replace(/Spit Up/gi, 'Sfoghenergia');
    str = str.replace(/Spite/gi, 'Dispetto');
    str = str.replace(/Stun Spore/gi, 'Paralizzante');
    str = str.replace(/Spore/gi, 'Spora');
    str = str.replace(/Stealth Rock/gi, 'Levitoroccia');
    str = str.replace(/Steel Wing/gi, 'Alacciaio');
    str = str.replace(/Stockpile/gi, 'Accumulo');
    str = str.replace(/Stomp/gi, 'Pestone');
    str = str.replace(/Stone Edge/gi, 'Pietrataglio');
    str = str.replace(/Strength/gi, 'Forza');
    str = str.replace(/String Shot/gi, 'Millebave');
    str = str.replace(/Struggle Bug/g, 'Entomoblocco');
    str = str.replace(/Struggle/gi, 'Scontro');
    str = str.replace(/Submission/gi, 'Sottomissione');
    str = str.replace(/Substitute/gi, 'Sostituto');
    str = str.replace(/Sucker Punch/gi, 'Sbigoattacco');
    str = str.replace(/Sunny Day/gi, 'Giornodisole');
    str = str.replace(/Super Fang/gi, 'Superzanna');
    str = str.replace(/Superpower/gi, 'Troppoforte');
    str = str.replace(/Supersonic/gi, 'Supersuono');
    str = str.replace(/Surf/gi, 'Surf');
    str = str.replace(/Swagger/gi, 'Bullo');
    str = str.replace(/Swallow/gi, 'Introenergia');
    str = str.replace(/Sweet Kiss/gi, 'Dolcebacio');
    str = str.replace(/Sweet Scent/gi, 'Profumino');
    str = str.replace(/Swift/gi, 'Comete');
    str = str.replace(/Switcheroo/gi, 'Rapidscambio');
    str = str.replace(/Swords Dance/gi, 'Danzaspada');
    str = str.replace(/Synthesis/gi, 'Sintesi');
    str = str.replace(/Volt Tackle/gi, 'Locomovolt');
    str = str.replace(/Tackle/gi, 'Azione');
    str = str.replace(/Tail Glow/gi, 'Codadiluce');
    str = str.replace(/Tail Whip/gi, 'Colpocoda');
    str = str.replace(/Tailwind/gi, 'Ventoincoda');
    str = str.replace(/Take Down/gi, 'Riduttore');
    str = str.replace(/Taunt/gi, 'Provocazione');
    str = str.replace(/Teeter Dance/gi, 'Strampadanza');
    str = str.replace(/Teleport/gi, 'Teletrasporto');
    str = str.replace(/Thief/gi, 'Furto');
    str = str.replace(/Thrash/gi, 'Colpo');
    str = str.replace(/Thunder Fang/gi, 'Fulmindenti');
    str = str.replace(/Thunder Wave/gi, 'Tuononda');
    str = str.replace(/Thunderbolt/gi, 'Fulmine');
    str = str.replace(/Thunder\s?punch/gi, 'Tuonopugno');
    str = str.replace(/Thunder\s?shock/gi, 'Tuonoshock');
    str = str.replace(/Thunder/gi, 'Tuono');
    str = str.replace(/Tickle/gi, 'Solletico');
    str = str.replace(/Torment/gi, 'Attaccalite');
    str = str.replace(/Toxic/gi, 'Tossina');
    str = str.replace(/Transform/gi, 'Trasformazione');
    str = str.replace(/Tri Attack/gi, 'Tripletta');
	str = str.replace(/Power Trick/gi, 'Ingannoforza');
    str = str.replace(/Trick Room/gi, 'Distortozona');
	str = str.replace(/Trick-or-Treat/g, 'Halloween');
    str = str.replace(/Trick/gi, 'Raggiro');
    str = str.replace(/Triple Kick/gi, 'Triplocalcio');
    str = str.replace(/Trump Card/gi, 'Asso');
    str = str.replace(/Twineedle/gi, 'Doppio Ago');
    str = str.replace(/Twister/gi, 'Tornado');
    str = str.replace(/U-turn/gi, 'Retromarcia');
    str = str.replace(/Vacuum Wave/gi, 'Vuotonda');
    str = str.replace(/Vice\s?grip/gi, 'Presa');
    str = str.replace(/Vine Whip/gi, 'Frustata');
    str = str.replace(/Vital Throw/gi, 'Vitaltiro');
    str = str.replace(/Wake-up Slap/gi, 'Svegliopacca');
    str = str.replace(/Water Gun/gi, 'Pistolacqua');
    str = str.replace(/Water Pulse/gi, 'Idropulsar');
    str = str.replace(/Water Sport/gi, 'Docciascudo');
    str = str.replace(/Water Spout/gi, 'Zampillo');
    str = str.replace(/Waterfall/gi, 'Cascata');
    str = str.replace(/Weather Ball/gi, 'Palla Clima');
    str = str.replace(/Wide Guard/g, 'Bodyguard');
    str = str.replace(/Whirlpool/gi, 'Mulinello');
    str = str.replace(/Whirlwind/gi, 'Turbine');
    str = str.replace(/Will-O-Wisp/gi, 'Fuocofatuo');
    str = str.replace(/Wing Attack/gi, "Attacco d'Ala");
    str = str.replace(/Wish/gi, 'Desiderio');
    str = str.replace(/Withdraw/gi, 'Ritirata');
    str = str.replace(/Wood Hammer/gi, 'Mazzuolegno');
    str = str.replace(/Worry Seed/gi, 'Affannoseme');
    str = str.replace(/Wrap/gi, 'Avvolgibotta');
    str = str.replace(/Wring Out/gi, 'Strizzata');
    str = str.replace(/X-scissor/gi, 'Forbice X');
    str = str.replace(/Yawn/gi, 'Sbadiglio');
    str = str.replace(/Zap Cannon/gi, 'Falcecannone');
    str = str.replace(/Guard Split/g, 'Paridifesa');
    str = str.replace(/Power Split/g, 'Pariattacco');
    str = str.replace(/Wonder Room/g, 'Mirabilzona');
    str = str.replace(/Venoshock/g, 'Velenoshock');
    str = str.replace(/Autotomize/g, 'Sganciapesi');
    str = str.replace(/Magic Room/g, 'Magicozona');
    str = str.replace(/Smack Down/g, 'Abbattimento');
    str = str.replace(/Storm Throw/g, 'Tempestretta');
    str = str.replace(/Flame Burst/g, 'Pirolancio');
    str = str.replace(/Quiver Dance/g, 'Eledanza');
    str = str.replace(/Synchronoise/g, 'Sincrumore');
    str = str.replace(/Electro Ball/g, 'Energisfera');
    str = str.replace(/Soak/g, 'Inondazione');
    str = str.replace(/Coil/g, 'Arrotola');
    str = str.replace(/Low Sweep/g, 'Calciobasso');
    str = str.replace(/Foul Play/g, 'Ripicca');
    str = str.replace(/Simple Beam/g, 'Ondisinvolta');
    str = str.replace(/Entrainment/g, 'Saltamicizia');
    str = str.replace(/After You/g, 'Cortesia');
    str = str.replace(/Round/g, 'Coro');
    str = str.replace(/Echoed Voice/g, 'Echeggiavoce');
    str = str.replace(/Chip Away/g, 'Insidia');
    str = str.replace(/Clear Smog/g, 'Pulifumo');
    str = str.replace(/Stored Power/g, 'Veicolaforza');
    str = str.replace(/Quick Guard/g, 'Anticipo');
    str = str.replace(/Ally Switch/g, 'Cambiaposto');
    str = str.replace(/Scald/g, 'Idrovampata');
    str = str.replace(/Shell Smash/g, 'Gettaguscio');
    str = str.replace(/Heal Pulse/g, 'Ondasana');
    str = str.replace(/Hex/g, 'Sciagura');
    str = str.replace(/Sky Drop/g, 'Cadutalibera');
    str = str.replace(/Shift Gear/g, 'Cambiomarcia');
    str = str.replace(/Circle Throw/g, 'Ribaltiro');
    str = str.replace(/Incinerate/g, 'Bruciatutto');
    str = str.replace(/Quash/g, 'Spintone');
    str = str.replace(/Acrobatics/g, 'Acrobazia');
    str = str.replace(/Retaliate/g, 'Nemesi');
    str = str.replace(/Final Gambit/g, 'Azzardo');
    str = str.replace(/Bestow/g, 'Cediregalo');
    str = str.replace(/Inferno/g, 'Marchiatura');
    str = str.replace(/Water Pledge/g, 'Acquapatto');
    str = str.replace(/Fire Pledge/g, 'Fiammapatto');
    str = str.replace(/Grass Pledge/g, 'Erbapatto');
    str = str.replace(/Volt Switch/g, 'Invertivolt');
    str = str.replace(/Bulldoze/g, 'Battiterra');
    str = str.replace(/Frost Breath/g, 'Alitogelido');
    str = str.replace(/Dragon Tail/g, 'Codadrago');
    str = str.replace(/Work Up/g, 'Cuordileone');
    str = str.replace(/Electroweb/g, 'Elettrotela');
    str = str.replace(/Drill Run/g, 'Giravvita');
    str = str.replace(/Dual Chop/g, 'Doppiocolpo');
    str = str.replace(/Horn Leech/g, 'Legnicorno');
    str = str.replace(/Sacred Sword/g, 'Spadasolenne');
    str = str.replace(/Razor Shell/g, 'Conchilama');
    str = str.replace(/Heat Crash/g, 'Marchiafuoco');
    str = str.replace(/Leaf Tornado/g, 'Vorticerba');
    str = str.replace(/Steamroller/g, 'Rulloduro');
    str = str.replace(/Cotton Guard/g, 'Cotonscudo');
    str = str.replace(/Night Daze/g, 'Urtoscuro');
    str = str.replace(/Psystrike/g, 'Psicobotta');
    str = str.replace(/Tail Slap/g, 'Spazzasberla');
    str = str.replace(/Hurricane/g, 'Tifone');
    str = str.replace(/Gear Grind/g, 'Ingracolpo');
    str = str.replace(/Searing Shot/g, 'Sparafuoco');
    str = str.replace(/Techno Blast/g, 'Tecnobotto');
    str = str.replace(/Relic Song/g, 'Cantoantico');
    str = str.replace(/Secret Sword/g, 'Spadamistica');
    str = str.replace(/Glaciate/g, 'Gelamondo');
    str = str.replace(/Bolt Strike/g, 'Lucesiluro');
    str = str.replace(/Blue Flare/g, 'Fuocoblu');
    str = str.replace(/Fiery Dance/g, 'Voldifuoco');
    str = str.replace(/Freeze Shock/g, 'Elettrogelo');
    str = str.replace(/Ice Burn/g, 'Vampagelida');
    str = str.replace(/Snarl/g, 'Urlorabbia');
    str = str.replace(/Icicle Crash/g, 'Scagliagelo');
    str = str.replace(/V-create/g, 'Generatore V');
    str = str.replace(/Fusion Flare/g, 'Incrofiamma');
    str = str.replace(/Fusion Bolt/g, 'Incrotuono');
    str = str.replace(/Baby-Doll Eyes/g, 'Occhioni Teneri');
    str = str.replace(/Boomburst/g, 'Ondaboato');
    str = str.replace(/Confide/g, 'Confidenza');
    str = str.replace(/Crafty Shield/g, 'Truccodifesa');
    str = str.replace(/Dazzling Gleam/g, 'Magibrillio');
    str = str.replace(/Disarming Voice/g, 'Incantavoce');
    str = str.replace(/Draining Kiss/g, 'Assorbibacio');
    str = str.replace(/Eerie Impulse/g, 'Elettromistero');
    str = str.replace(/Electric Terrain/g, 'Campo Elettrico');
    str = str.replace(/Electrify/g, 'Elettrocontagio');
    str = str.replace(/Fairy Lock/g, 'Blocco Fatato');
    str = str.replace(/Fairy Wind/g, 'Vento di Fata');
    str = str.replace(/Fell Stinger/g, 'Pungiglione');
    str = str.replace(/Flower Shield/g, 'Fiordifesa');
    str = str.replace(/Freeze-Dry/g, 'Liofilizzazione');
    str = str.replace(/Geomancy/g, 'Geocontrollo');
    str = str.replace(/Grassy Terrain/g, 'Campo Erboso');
    str = str.replace(/Infestation/g, 'Assillo');
    str = str.replace(/King's Shield/g, 'Scudo Reale');
    str = str.replace(/Land's Wrath/g, 'Forza Tellurica');
    str = str.replace(/Moonblast/g, 'Forza Lunare');
    str = str.replace(/Mystical Fire/g, 'Magifiamma');
    str = str.replace(/Nuzzle/g, 'Elettrococcola');
    str = str.replace(/Oblivion Wing/g, 'Ali del Fato');
    str = str.replace(/Parting Shot/g, 'Monito');
    str = str.replace(/Phantom Force/g, 'Spettrotuffo');
    str = str.replace(/Play Nice/g, 'Simpatia');
    str = str.replace(/Play Rough/g, 'Carineria');
    str = str.replace(/Powder/g, 'Pulviscoppio');
    str = str.replace(/Power-Up Punch/g, 'Crescipugno');
    str = str.replace(/Rototiller/g, 'Aracampo');
    str = str.replace(/Spiky Shield/g, 'Agodifesa');
    str = str.replace(/Sticky Web/g, 'Rete Vischiosa');
    str = str.replace(/Topsy-Turvy/g, 'Sottosopra');
    str = str.replace(/Venom Drench/g, 'Velenotrappola');
    str = str.replace(/Water Shuriken/g, 'Acqualame');
    str = str.replace(/Belch/g, 'Rutto');
    str = str.replace(/Hold Back/g, 'Riguardo');
	str = str.replace(/Diamond Storm/g, 'Diamantempesta');
	str = str.replace(/Celebrate/g, 'Auguri');
	str = str.replace(/Magnetic Flux/g, 'Controllo Polare');
	str = str.replace(/Happy Hour/g, 'Cuccagna');
	str = str.replace(/Hold Hands/g, 'Mano nella Mano');

    // Correzione errori

    str = str.replace(/Acidoobomba/g, 'Acidobomba');
    str = str.replace(/GastroAcidoo/g, 'Gastroacido');
    str = str.replace(/SbaFossalio/g, 'Sbadiglio');
    str = str.replace(/DrudFossaon/g, 'Druddigon');
    str = str.replace(/Fascinoander/g, 'Charmander');
    str = str.replace(/Fascinoeleon/g, 'Charmeleon');
    str = str.replace(/SandLacerazione/g, 'Sandslash');
    str = str.replace(/AegiLacerazione/g, 'Aegislash');
    str = str.replace(/Fossalett/g, 'Diglett');
    str = str.replace(/Leccataitung/g, 'Lickitung');
    str = str.replace(/BeautiVolo/g, 'Beautifly');
    str = str.replace(/Vologon/g, 'Flygon');
    str = str.replace(/Tenagliaerl/g, 'Clamperl');
    str = str.replace(/GaMorso/g, 'Gabite');
    str = str.replace(/Tossinaroak/g, 'Toxicroak');
    str = str.replace(/LeccataiLeccatay/g, 'LickiLicky');
    str = str.replace(/Taglioe/gi, 'Grazia');
    str = str.replace(/Ruggitoithe/g, 'Growlithe');
    str = str.replace(/Voloing/g, 'Flying');
    str = str.replace(/ZoBoatok/gi, 'Zoroark');
    str = str.replace(/Confusionee/gi, 'Confusione');
    str = str.replace(/Acidoo/gi, 'Acido');
    str = str.replace(/Mimicaa/gi, 'Mimica');
    str = str.replace(/Cantole/gi, 'Single');
    str = str.replace(/Water Assorbimento/gi, 'Water Absorb');
    str = str.replace(/Fossagersby/gi, 'Diggersby');
    str = str.replace(/PyBoato/gi, 'Pyroar');
	str = str.replace(/Effect Spora/gi, 'Effect Spore');
	str = str.replace(/Comete Swim/gi, 'Swift Swim');
	str = str.replace(/Hyper Taglioter/gi, 'Hyper Cutter');
	str = str.replace(/Maledizioned Body/gi, 'Cursed Body');
	str = str.replace(/Volt Assorbimento/gi, 'Volt Absorb');
	str = str.replace(/Assorbimento Bulb/gi, 'Absorb Bulb');
	str = str.replace(/psichico color/gi, 'psico color');
	return str;
};

macros["abilita'"] = function(str) {

	// Abilità

	str = str.replace(/Adaptability/gi, 'Adattabilit&agrave;');
	str = str.replace(/Aftermath/gi, 'Scoppio');
	str = str.replace(/Air Lock/gi, 'Riparo');
	str = str.replace(/Anger Point/gi, 'Grancollera');
	str = str.replace(/Anticipation/gi, 'Presagio');
	str = str.replace(/Arena Trap/gi, 'Trappoarena');
	str = str.replace(/Bad Dreams/gi, 'Sogniamari');
	str = str.replace(/Battle Armor/gi, 'Lottascudo');
	str = str.replace(/Turboblaze/gi, 'Piroturbina');
	str = str.replace(/Blaze/gi, 'Aiutofuoco');
	str = str.replace(/Chlorophyll/gi, 'Clorofilla');
	str = str.replace(/Clear Body/gi, 'Corpochiaro');
	str = str.replace(/Cloud Nine/gi, 'Antimeteo');
	str = str.replace(/Color Change/gi, 'Cambiacolore');
	str = str.replace(/Compoundeyes/gi, 'Insettocchi');
	str = str.replace(/Cute Charm/gi, 'Incantevole');
	str = str.replace(/Damp/gi, 'Umidit&agrave;');
	str = str.replace(/Download/gi, 'Download');
	str = str.replace(/Drizzle/gi, 'Piovischio');
	str = str.replace(/Drought/gi, 'Siccit&agrave;');
	str = str.replace(/Dry Skin/gi, 'Pellearsa');
	str = str.replace(/Early Bird/gi, 'Sveglialampo');
	str = str.replace(/Effect Spore/gi, 'Spargispora');
	str = str.replace(/Filter/gi, 'Filtro');
	str = str.replace(/Flame Body/gi, 'Corpodifuoco');
	str = str.replace(/Flash Fire/gi, 'Fuocardore');
	str = str.replace(/Flower Gift/gi, 'Regalfiore');
	str = str.replace(/Forecast/gi, 'Previsioni');
	str = str.replace(/Forewarn/gi, 'Premonizione');
	str = str.replace(/Frisk/gi, 'Indagine');
	str = str.replace(/Gluttony/gi, 'Voracit&agrave;');
	str = str.replace(/Guts/gi, 'Dentistretti');
	str = str.replace(/Heatproof/gi, 'Antifuoco');
	str = str.replace(/Honey Gather/gi, 'Mielincetta');
	str = str.replace(/Huge Power/gi, 'Macroforza');
	str = str.replace(/Hustle/gi, 'Tuttafretta');
	str = str.replace(/Hydration/gi, 'Idratazione');
	str = str.replace(/Hyper Cutter/gi, 'Ipertaglio');
	str = str.replace(/Ice Body/gi, 'Corpogelo');
	str = str.replace(/Illuminate/gi, 'Risplendi');
	str = str.replace(/Immunity/gi, 'Immunit&agrave;');
	str = str.replace(/Inner Focus/gi, 'Fuocodentro');
	str = str.replace(/Insomnia/gi, 'Insonnia');
	str = str.replace(/Intimidate/gi, 'Prepotenza');
	str = str.replace(/Iron Fist/gi, 'Ferropugno');
	str = str.replace(/Keen Eye/gi, 'Sguardofermo');
	str = str.replace(/Klutz/gi, 'Impaccio');
	str = str.replace(/Leaf Guard/gi, 'Fogliamanto');
	str = str.replace(/Levitate/gi, 'Levitazione');
	str = str.replace(/Lightningrod/gi, 'Parafulmine');
	str = str.replace(/Limber/gi, 'Scioltezza');
	str = str.replace(/Liquid Ooze/gi, 'Melma');
	str = str.replace(/Magic Guard/gi, 'Magicscudo');
	str = str.replace(/Magma Armor/gi, 'Magmascudo');
	str = str.replace(/Magnet Pull/gi, 'Magnetismo');
	str = str.replace(/Marvel Scale/gi, 'Pelledura');
	str = str.replace(/Minus/gi, 'Meno');
	str = str.replace(/Mold Breaker/gi, 'Rompiforma');
	str = str.replace(/Motor Drive/gi, 'Elettrorapid');
	str = str.replace(/Multitype/gi, 'Multitipo');
	str = str.replace(/Natural Cure/gi, 'Alternacura');
	str = str.replace(/No Guard/gi, 'Nullodifesa');
	str = str.replace(/Normalize/gi, 'Normalit&agrave;');
	str = str.replace(/Oblivious/gi, 'Indifferenza');
	str = str.replace(/Overgrow/gi, 'Erbaiuto');
	str = str.replace(/Own Tempo/gi, 'Mentelocale');
	str = str.replace(/Pickup/gi, 'Raccolta');
	str = str.replace(/Plus/gi, 'Pi&ugrave;');
	str = str.replace(/Poison Heal/gi, 'Velencura');
	str = str.replace(/Poison Point/gi, 'Velenopunto');
	str = str.replace(/Pressure/gi, 'Pressione');
	str = str.replace(/Pure power/gi, 'Forzapura');
	str = str.replace(/Quick Feet/gi, 'Piedisvelti');
	str = str.replace(/Rain Dish/gi, 'Copripioggia');
	str = str.replace(/Reckless/gi, 'Temerariet&agrave;');
	str = str.replace(/Rivalry/gi, 'Antagonismo');
	str = str.replace(/Rock Head/gi, 'Testadura');
	str = str.replace(/Rough Skin/gi, 'Cartavetro');
	str = str.replace(/Run Away/gi, 'Fugafacile');
	str = str.replace(/Sand Stream/gi, 'Sabbiafiume');
	str = str.replace(/Sand Veil/gi, 'Sabbiavelo');
	str = str.replace(/Scrappy/gi, 'Nervisaldi');
	str = str.replace(/Serene Grace/gi, 'Leggiadro');
	str = str.replace(/Shadow Tag/gi, 'Pedinombra');
	str = str.replace(/Shed Skin/gi, 'Muta');
	str = str.replace(/Shell Armor/gi, 'Guscioscudo');
	str = str.replace(/Shield Dust/gi, 'Polvoscudo');
	str = str.replace(/Simple/gi, 'Disinvoltura');
	str = str.replace(/Skill Link/gi, 'Abillegame');
	str = str.replace(/Slow Start/gi, 'Lentoinizio');
	str = str.replace(/Sniper/gi, 'Cecchino');
	str = str.replace(/Snow Cloak/gi, 'Mantelneve');
	str = str.replace(/Snow Warning/gi, 'Scendineve');
	str = str.replace(/Solar Power/gi, 'Solarpotere');
	str = str.replace(/Solid Rock/gi, 'Solidroccia');
	str = str.replace(/Soundproof/gi, 'Antisuono');
	str = str.replace(/Speed Boost/gi, 'Acceleratore');
	str = str.replace(/Stall/gi, 'Rallentatore');
	str = str.replace(/Static/gi, 'Statico');
	str = str.replace(/Steadfast/gi, 'Cuordeciso');
	str = str.replace(/Stench/gi, 'Tanfo');
	str = str.replace(/Sticky Hold/gi, 'Antifurto');
	str = str.replace(/Storm Drain/gi, 'Acquascolo');
	str = str.replace(/Sturdy/gi, 'Vigore');
	str = str.replace(/Suction Cups/gi, 'Ventose');
	str = str.replace(/Super Luck/gi, 'Supersorte');
	str = str.replace(/Swarm/gi, 'Aiutinsetto');
	str = str.replace(/Swift Swim/gi, 'Nuotovelox');
	str = str.replace(/Synchronize/gi, 'Sincronismo');
	str = str.replace(/Tangled Feet/gi, 'Intricopiedi');
	str = str.replace(/Technician/gi, 'Tecnico');
	str = str.replace(/Thick Fat/gi, 'Grassospesso');
	str = str.replace(/Tinted Lens/gi, 'Lentifum&eacute;');
	str = str.replace(/Torrent/gi, 'Acquaiuto');
	str = str.replace(/Trace/gi, 'Traccia');
	str = str.replace(/Truant/gi, 'Pigrone');
	str = str.replace(/Unaware/gi, 'Imprudenza');
	str = str.replace(/Unburden/gi, 'Agiltecnica');
	str = str.replace(/Vitalspirit/gi, 'Spiritovivo');
	str = str.replace(/Volt Absorb/gi, 'Assorbivolt');
	str = str.replace(/Water Absorb/gi, 'Assorbacqua');
	str = str.replace(/Water Veil/gi, 'Idrovelo');
	str = str.replace(/White Smoke/gi, 'Fumochiaro');
	str = str.replace(/Wonder Guard/gi, 'Magidifesa');
	str = str.replace(/Pickpocket/gi, 'Arraffalesto');
	str = str.replace(/Sheer Force/gi, 'Forzabruta');
	str = str.replace(/Contrary/gi, 'Inversione');
	str = str.replace(/Unnerve/gi, 'Agitazione');
	str = str.replace(/Defiant/gi, 'Agonismo');
	str = str.replace(/Defeatist/gi, 'Sconforto');
	str = str.replace(/Cursed Body/gi, 'Corpofunesto');
	str = str.replace(/Healer/gi, 'Curacuore');
	str = str.replace(/Friend Guard/gi, 'Amicoscudo');
	str = str.replace(/Weak Armor/gi, 'Sottilguscio');
	str = str.replace(/Heavy Metal/gi, 'Metalpesante');
	str = str.replace(/Light Metal/gi, 'Metalleggero');
	str = str.replace(/Multiscale/gi, 'Multisquame');
	str = str.replace(/Toxic Boost/gi, 'Velenimpeto');
	str = str.replace(/Flare Boost/gi, 'Bruciaimpeto');
	str = str.replace(/Harvest/gi, 'Coglibacche');
	str = str.replace(/Telepathy/gi, 'Telepatia');
	str = str.replace(/Moody/gi, 'Altalena');
	str = str.replace(/Overcoat/gi, 'Copricapo');
	str = str.replace(/Poison Touch/gi, 'Velentocco');
	str = str.replace(/Regenerator/gi, 'Rigenergia');
	str = str.replace(/Big Pecks/gi, 'Pettinfuori');
	str = str.replace(/Sand Rush/gi, 'Remasabbia');
	str = str.replace(/Wonder Skin/gi, 'Splendicute');
	str = str.replace(/Analytic/gi, 'Ponderazione');
	str = str.replace(/Illusion/gi, 'Illusione');
	str = str.replace(/Imposter/gi, 'Sosia');
	str = str.replace(/Infiltrator/gi, 'Intrapasso');
	str = str.replace(/Mummy/gi, 'Mummia');
	str = str.replace(/Moxie/gi, 'Arroganza');
	str = str.replace(/Justified/gi, 'Giustizia');
	str = str.replace(/Rattled/gi, 'Paura');
	str = str.replace(/Magic Bounce/gi, 'Magispecchio');
	str = str.replace(/Sap Sipper/gi, 'Mangiaerba');
	str = str.replace(/Prankster/gi, 'Burla');
	str = str.replace(/Sand Force/gi, 'Silicoforza');
	str = str.replace(/Iron Barbs/gi, 'Spineferrate');
	str = str.replace(/Zen Mode/gi, 'Stato Zen');
	str = str.replace(/Victory Star/gi, 'Vittorstella');
	str = str.replace(/Teravolt/gi, 'Teravolt');
	str = str.replace(/Aerilate/gi, 'Pellecielo');
	str = str.replace(/Aroma Veil/gi, 'Aromavelo');
	str = str.replace(/Aura Break/gi, 'Frangiaura');
	str = str.replace(/Bulletproof/gi, 'Antiproiettile');
	str = str.replace(/Cheek Pouch/gi, 'Guancegonfie');
	str = str.replace(/Competitive/gi, 'Tenacia');
	str = str.replace(/Dark Aura/gi, 'Auratetra');
	str = str.replace(/Fairy Aura/gi, 'Aurafolletto');
	str = str.replace(/Flower Veil/gi, 'Fiorvelo');
	str = str.replace(/Fur Coat/gi, 'Foltopelo');
	str = str.replace(/Gale Wings/gi, 'Aliraffica');
	str = str.replace(/Gooey/gi, 'Viscosit&agrave;');
	str = str.replace(/Grass Pelt/gi, 'Peloderba');
	str = str.replace(/Magician/gi, 'Prestigiatore');
	str = str.replace(/Mega Launcher/gi, 'Megalancio');
	str = str.replace(/Parental Bond/gi, 'Amorefiliale');
	str = str.replace(/Pixilate/gi, 'Pellefolletto');
	str = str.replace(/Protean/gi, 'Mutatipo');
	str = str.replace(/Refrigerate/gi, 'Pellegelo');
	str = str.replace(/Stance Change/gi, 'Accendilotta');
	str = str.replace(/Strong Jaw/gi, 'Ferromascella');
	str = str.replace(/Sweet Veil/gi, 'Dolcevelo');
	str = str.replace(/Symbiosis/gi, 'Simbiosi');
	str = str.replace(/Tough Claws/gi, 'Unghiedure');
	return str;
};

macros.gare = function(str) {

	// Statistiche gara

	str = str.replace(/Tough/gi, 'Grinta');
	str = str.replace(/Cool/gi, 'Classe');
	str = str.replace(/(Smart|Clever)/gi, 'Acume');
	str = str.replace(/Beaut(y|iful)/gi, 'Bellezza');
	str = str.replace(/Cute/gi, 'Grazia');

	// Errori

	str = str.replace(/TentaClasse/g, 'Tentacool');
	str = str.replace(/ExeggGrazia/g, 'Exeggcute');
	return str;
};

/*

L'argomento battleHeld, con default false, indica se
devono essere tradotti solo gli strumenti tenuti
in lotta

*/

macros.strumenti = function(str, battleHeld) {
	battleHeld = battleHeld || false;
	if (!battleHeld) {

		// Pietre evolutive

		str = str.replace(/Sun Stone/gi, 'Pietrasolare');
		str = str.replace(/Moon Stone/gi, 'Pietralunare');
		str = str.replace(/Fire Stone/gi, 'Pietrafocaia');
		str = str.replace(/Thunder Stone/gi, 'Pietratuono');
		str = str.replace(/Water Stone/gi, 'Pietraidrica');
		str = str.replace(/Leaf Stone/gi, 'Pietrafoglia');
		str = str.replace(/Shiny Stone/gi, 'Pietrabrillo');
		str = str.replace(/Dusk Stone/gi, 'Neropietra');
		str = str.replace(/Dawn Stone/gi, 'Pietralbore');
		str = str.replace(/Oval Stone/gi, 'Pietraovale');

		// Strumenti da vendere

		str = str.replace(/Tiny Mushroom/gi, 'Piccolo Fungo');
		str = str.replace(/Big Mushroom/gi, 'Grande Fungo');
		str = str.replace(/Pearl/gi, 'Perla');
		str = str.replace(/Big Pearl/gi, 'Grande Perla');
		str = str.replace(/Stardust/gi, 'Polvostella');
		str = str.replace(/Star Piece/gi, 'Pezzo Stella');
		str = str.replace(/Gold Leaf/gi, 'Fogliadoro');
		str = str.replace(/Silver Leaf/gi, 'Fogliargento');
		str = str.replace(/Brick Piece/gi, 'Mattoncino');
		str = str.replace(/Nugget/gi, 'Pepita');
		str = str.replace(/Heart Scale/gi, 'Squama Cuore');
		str = str.replace(/Rare Bone/gi, 'Ossopesso');
		str = str.replace(/Pretty Wing/gi, 'Piumabella');
		str = str.replace(/Balm Mushroom/gi, 'Profumfungo');
		str = str.replace(/Big Nugget/gi, 'Granpepita');
		str = str.replace(/Pearl String/gi, 'Trittiperla');
		str = str.replace(/Comet Shard/gi, 'Pezzo Cometa');
		str = str.replace(/Relic Copper/gi, 'Soldantico');
		str = str.replace(/Relic Silver/gi, 'Ducatantico');
		str = str.replace(/Relic Gold/gi, 'Doblonantico');
		str = str.replace(/Relic Vase/gi, 'Vasantico');
		str = str.replace(/Relic Band/gi, 'Bracciantico');
		str = str.replace(/Relic Statue/gi, 'Statuantica');
		str = str.replace(/Relic Crown/gi, 'Coronantica');

		// Rimedi

		str = str.replace(/Max Potion/gi, 'Pozione Max');
		str = str.replace(/Hyper Potion/gi, 'Iperpozione');
		str = str.replace(/Super Potion/gi, 'Superpozione');
		str = str.replace(/Potion/gi, 'Pozione');
		str = str.replace(/Antidote/gi, 'Antidoto');
		str = str.replace(/Burn Heal/gi, 'Antiscottatura');
		str = str.replace(/Ice Heal/gi, 'Antigelo');
		str = str.replace(/Awakening/gi, 'Sveglia');
		str = str.replace(/Parlyze Heal/gi, 'Antiparalisi');
		str = str.replace(/Full Restore/gi, 'Ricarica Totale');
		str = str.replace(/Full Heal/gi, 'Cura Totale');
		str = str.replace(/Revive/gi, 'Revitalizzante');
		str = str.replace(/Max Revive/gi, 'Revitalizzante Max');
		str = str.replace(/Fresh Water/gi, 'Acqua Fresca');
		str = str.replace(/Soda Pop/gi, 'Gazzosa');
		str = str.replace(/Lemonade/gi, 'Lemonsucco');
		str = str.replace(/Ether/gi, 'Etere');
		str = str.replace(/Max Ether/gi, 'Etere Max');
		str = str.replace(/Elixir/gi, 'Elisir');
		str = str.replace(/Max Elixir/gi, 'Elisir Max');
		str = str.replace(/Moomoo Milk/gi, 'Latte Mumu');
		str = str.replace(/Energy Powder/gi, 'Polvenergia');
		str = str.replace(/Energy Root/gi, 'Radicenergia');
		str = str.replace(/Heal Powder/gi, 'Polvocura');
		str = str.replace(/Revival Herb/gi, 'Vitalerba');
		str = str.replace(/Sacred Ash/gi, 'Magicenere');
		str = str.replace(/Rage Candy Bar/gi, 'Iramella');
		str = str.replace(/Lava Cookie/gi, 'Lavottino');
		str = str.replace(/Berry Juice/gi, 'Succo di Bacca');
		str = str.replace(/HP Up/gi, 'PS-Su');
		str = str.replace(/Protein/gi, 'Proteina');
		str = str.replace(/Iron/gi, 'Ferro');
		str = str.replace(/Carbos/gi, 'Carburante');
		str = str.replace(/Calcium/gi, 'Calcio');
		str = str.replace(/Rare Candy/gi, 'Caramella Rara');
		str = str.replace(/PP Up/gi, 'PP-Su');
		str = str.replace(/Zinc/gi, 'Zinco');
		str = str.replace(/PP Max/gi, 'PP-Max');
		str = str.replace(/Sweet Heart/gi, 'Dolcecuore');
		str = str.replace(/Health Wing/gi, 'Piumsalute');
		str = str.replace(/Muscle Wing/gi, 'Piumpotenza');
		str = str.replace(/Resist Wing/gi, 'Piumtutela');
		str = str.replace(/Genius Wing/gi, 'Piumingegno');
		str = str.replace(/Clever Wing/gi, 'Piumintuito');
		str = str.replace(/Swift Wing/gi, 'Piumreazione');
		str = str.replace(/Casteliacone/gi, 'Conostropoli');
		str = str.replace(/Lumiose Galette/gi, 'Pan di Lumi');

		// Balls

		str = str.replace(/Poké Ball/gi, 'Pok&eacute; Ball');
		str = str.replace(/Great Ball/gi, 'Mega Ball');
		str = str.replace(/Ultra Ball/gi, 'Ultra Ball');
		str = str.replace(/Master Ball/gi, 'Master Ball');
		str = str.replace(/Safari Ball/gi, 'Safari Ball');
		str = str.replace(/Heavy Ball/gi, 'Peso Ball');
		str = str.replace(/Level Ball/gi, 'Level Ball');
		str = str.replace(/Lure Ball/gi, 'Esca Ball');
		str = str.replace(/Fast Ball/gi, 'Rapid Ball');
		str = str.replace(/Friend Ball/gi, 'Friend Ball');
		str = str.replace(/Moon Ball/gi, 'Luna Ball');
		str = str.replace(/Love Ball/gi, 'Love Ball');
		str = str.replace(/Sport Ball/gi, 'Gara Ball');
		str = str.replace(/Net Ball/gi, 'Rete Ball');
		str = str.replace(/Dive Ball/gi, 'Sub Ball');
		str = str.replace(/Nest Ball/gi, 'Minor Ball');
		str = str.replace(/Repeat Ball/gi, 'Bis Ball');
		str = str.replace(/Timer Ball/gi, 'Timer Ball');
		str = str.replace(/Luxury Ball/gi, 'Chich Ball');
		str = str.replace(/Premier Ball/gi, 'Premier Ball');
		str = str.replace(/Heal Ball/gi, 'Cura Ball');
		str = str.replace(/Dusk Ball/gi, 'Scuro Ball');
		str = str.replace(/Quick Ball/gi, 'Velox Ball');
		str = str.replace(/Park Ball/gi, 'Parco Ball');
		str = str.replace(/Cherish Ball/gi, 'Pregio Ball');
		str = str.replace(/Dream Ball/gi, 'Dream Ball');

		// Messaggi - Gen II

		str = str.replace(/Flower Mail/gi, 'Messaggio Fiore');
		str = str.replace(/Surf Mail/gi, 'Mess. Surf');
		str = str.replace(/Litebluemail/gi, 'Mess. Azzurro');
		str = str.replace(/Portraitmail/gi, 'Mess. Ritratto');
		str = str.replace(/Lovely Mail/gi, 'Mess. Dolce');
		str = str.replace(/Eon Mail/gi, 'Mess. Eon');
		str = str.replace(/Morph Mail/gi, 'Mess. Morph');
		str = str.replace(/Bluesky Mail/gi, 'Mess. Cielo');
		str = str.replace(/Music Mail/gi, 'Mess. Musica');
		str = str.replace(/Mirage Mail/gi, 'Mess. Visione');

		// Messaggi - Gen III

		str = str.replace(/Orange Mail/gi, 'Mess. Agrume');
		str = str.replace(/Harbor Mail/gi, 'Mess. Porto');
		str = str.replace(/Glitter Mail/gi, 'Mess. Luci');
		str = str.replace(/Mech Mail/gi, 'Mess. Tecno');
		str = str.replace(/Wood Mail/gi, 'Mess. Bosco');
		str = str.replace(/Wave Mail/gi, 'Mess. Onda');
		str = str.replace(/Bead Mail/gi, 'Mess. Perle');
		str = str.replace(/Shadow Mail/gi, 'Mess. Ombra');
		str = str.replace(/Tropic Mail/gi, 'Mess. Tropic');
		str = str.replace(/Dream Mail/gi, 'Mess. Sogno');
		str = str.replace(/Fab Mail/gi, 'Mess. Fab');
		str = str.replace(/Retro Mail/gi, 'Mess. Retro');

		// Messaggi - Gen IV

		str = str.replace(/Grass Mail/gi, 'Mess. Erba');
		str = str.replace(/Flame Mail/gi, 'Mess. Fiamma');
		str = str.replace(/Bubble Mail/gi, 'Mess. Bolla');
		str = str.replace(/Bloom Mail/gi, 'Mess. Petalo');
		str = str.replace(/Tunnel Mail/gi, 'Mess. Tunnel');
		str = str.replace(/Steel Mail/gi, 'Mess. Lega');
		str = str.replace(/Heart Mail/gi, 'Mess. Cuore');
		str = str.replace(/Snow Mail/gi, 'Mess. Neve');
		str = str.replace(/Space Mail/gi, 'Mess. Spazio');
		str = str.replace(/Air Mail/gi, 'Mess.  Aereo');
		str = str.replace(/Mosaic Mail/gi, 'Mess.  Iride');
		str = str.replace(/Brick Mail/gi, 'Mess. Muro');

		// Messaggi - Gen V

		str = str.replace(/Greet Mail/gi, 'Mess. Inizio');
		str = str.replace(/Favored Mail/gi, 'Mess. TVB');
		str = str.replace(/RSVP Mail/gi, 'Mess. Invito');
		str = str.replace(/Thanks Mail/gi, 'Mess. Grazie');
		str = str.replace(/Inquiry Mail/gi, 'Mess. Chiedi');
		str = str.replace(/Like Mail/gi, 'Mess. Sugg.');
		str = str.replace(/Reply Mail/gi, 'Mess. Risp.');
		str = str.replace(/BridgeMail S/gi, 'Mess. Frec.');
		str = str.replace(/BridgeMail D/gi, 'Mess. Libec.');
		str = str.replace(/BridgeMail T/gi, 'Mess. Prop.');
		str = str.replace(/BridgeMail V/gi, 'Mess. Vill.');
		str = str.replace(/BridgeMail M/gi, 'Mess. Merav.');

		// Strumenti lotta

		str = str.replace(/Guard Spec./gi, 'Superguardia');
		str = str.replace(/Dire Hit/gi, 'Supercolpo');
		str = str.replace(/X Attack/gi, 'Attacco X');
		str = str.replace(/X Defend/gi, 'Difesa X');
		str = str.replace(/X Speed/gi, 'Velocit&agrave; X');
		str = str.replace(/X Accuracy/gi, 'Precisione X');
		str = str.replace(/X Special/gi, 'Special X');
		str = str.replace(/X Sp\. Def/gi, 'Dif. Sp. X');
		str = str.replace(/Poké Doll/gi, 'Pokébambola');
		str = str.replace(/Fluffy Tail/gi, 'Coda Skitty');
		str = str.replace(/Blue Flute/gi, 'Flauto Blu');
		str = str.replace(/Yellow Flute/gi, 'Flauto Giallo');
		str = str.replace(/Red Flute/gi, 'Flauto Rosso');
		str = str.replace(/Poké Toy/gi, 'Pok&eacute;gingillo');
		str = str.replace(/Ability Urge/gi, 'Chiamabilit&agrave;');
		str = str.replace(/Item Drop/gi, 'Lascioggetto');
		str = str.replace(/Item Urge/gi, 'Chiamoggetto');
		str = str.replace(/Reset Urge/gi, 'Ripristino');

		// Strumenti base - Gen I

		str = str.replace(/Coin Case/gi, 'Salvadanaio');
		str = str.replace(/Itemfinder/gi, 'Detector');
		str = str.replace(/Old Rod/gi, 'Amo Vecchio');
		str = str.replace(/Good Rod/gi, 'Amo Buono');
		str = str.replace(/Super Rod/gi, 'Super Amo');
		str = str.replace(/S\.S\. Ticket/gi, 'Biglietto Nave');
		str = str.replace(/Oak's Parcel/gi, 'Pacco Oak');
		str = str.replace(/Poké Flute/gi, 'Pok&eacute;flauto');
		str = str.replace(/Secret Key/gi, 'Chiave Segreta');
		str = str.replace(/Bike Voucher/gi, 'Buono Bici');
		str = str.replace(/Gold Teeth/gi, 'Denti d’Oro');
		str = str.replace(/Card Key/gi, 'Apriporta');
		str = str.replace(/Lift Key/gi, 'Chiave Ascensore');
		str = str.replace(/Silph Scope/gi, 'Spettrosonda');
		str = str.replace(/Bicycle/gi, 'Bicicletta');
		str = str.replace(/Town Map/gi, 'Mappa');

		// Strumenti base - Gen II

		str = str.replace(/GS Ball/gi, 'GS Ball');
		str = str.replace(/Egg Ticket/gi, 'Bigl. Uovo');
		str = str.replace(/Clear Bell/gi, 'Campana Chiara');
		str = str.replace(/Blue Card/gi, 'Carta Blu');
		str = str.replace(/SquirtBottle/gi, 'Annaffiatoio');
		str = str.replace(/Red Scale/gi, 'Squama Rossa');
		str = str.replace(/Lost Item/gi, 'Strumento Perso');
		str = str.replace(/Pass/gi, 'Superpass');
		str = str.replace(/Machine Part/gi, 'Pezzo macch.');
		str = str.replace(/Silver Wing/gi, 'Aladargento');
		str = str.replace(/Rainbow Wing/gi, "Ala d'Iride");
		str = str.replace(/Mystery Egg/gi, 'Uovo Mistero');
		str = str.replace(/SecretPotion/gi, 'Poz. Segreta');

		// Strumenti base - Gen III

		str = str.replace(/Mach Bike/gi, 'Bici Corsa');
		str = str.replace(/Wailmer Pail/gi, 'Vaso Wailmer');
		str = str.replace(/Devon Goods/gi, 'Merce Devon');
		str = str.replace(/Soot Sack/gi, 'Sacco Cenere');
		str = str.replace(/Basement Key/gi, 'Chiave Sotterraneo');
		str = str.replace(/Acro Bike/gi, 'Bici Cross');
		str = str.replace(/Pokéblock Case/gi, 'Porta Pok&eacute;melle');
		str = str.replace(/Letter/gi, 'Lettera');
		str = str.replace(/Eon Ticket/gi, 'Biglietto Eone');
		str = str.replace(/Red Orb/gi, 'Sfera Rossa');
		str = str.replace(/Blue Orb/gi, 'Sfera Blu');
		str = str.replace(/Scanner/gi, 'Scanner');
		str = str.replace(/Go\-Goggles/gi, 'Occhialoni');
		str = str.replace(/Meteorite/gi, 'Meteorite');
		str = str.replace(/Rm\. (\d) Key/gi, 'Chiave stanza $1');
		str = str.replace(/Storage Key/gi, 'L.');
		str = str.replace(/Devon Scope/gi, 'Devonscopio');
		str = str.replace(/Vs\. Seeker/gi, 'Cercasfide');
		str = str.replace(/Fame Checker/gi, 'Pok&eacute;VIP');
		str = str.replace(/TM Case/gi, 'Porta MT-MN');
		str = str.replace(/Berry Pouch/gi, 'Porta Bacche');
		str = str.replace(/Teachy TV/gi, 'Pok&eacute; TV');
		str = str.replace(/Rainbow Pass/gi, 'Sette Pass');
		str = str.replace(/Tea/gi, 'T&egrave;');
		str = str.replace(/MysticTicket/gi, 'Biglietto Mistero');
		str = str.replace(/AuroraTicket/gi, 'Biglietto Aurora');
		str = str.replace(/Powder Jar/gi, 'Portafarina');
		str = str.replace(/Ruby/gi, 'Rubino');
		str = str.replace(/Sapphire/gi, 'Zaffiro');
		str = str.replace(/Magma Emblem/gi, 'Stemma Magma');
		str = str.replace(/Old Sea Map/gi, 'Mappa Stinta');

		// Strumenti base - Gen IV

		str = str.replace(/Explorer Kit/gi, 'Esplorokit');
		str = str.replace(/Poké Radar/gi, 'Pok&eacute; Radar');
		str = str.replace(/Point Card/gi, 'Scheda Punti');
		str = str.replace(/Journal/gi, 'Agenda');
		str = str.replace(/Seal Case/gi, 'Portabolli');
		str = str.replace(/Fashion Case/gi, 'Scatola Chic');
		str = str.replace(/Pal Pad/gi, 'Blocco Amici');
		str = str.replace(/Works Key/gi, 'Turbinchiave');
		str = str.replace(/Old Charm/gi, 'Arcamuleto');
		str = str.replace(/Galactic Key/gi, 'Galachiave');
		str = str.replace(/Sprayduck/gi, 'Sprayduck');
		str = str.replace(/Poffin Case/gi, 'Portapoffin');
		str = str.replace(/Suite Key/gi, 'Chiave Suite');
		str = str.replace(/Oak's Letter/gi, 'Lettera di Oak');
		str = str.replace(/Lunar Wing/gi, 'Ala Lunare');
		str = str.replace(/Member Card/gi, 'Scheda Soci');
		str = str.replace(/Parcel/gi, 'Pacco');
		str = str.replace(/Vs\. Recorder/gi, 'Registradati');
		str = str.replace(/Gracidea/gi, 'Gracidea');
		str = str.replace(/Apricorn Box/gi, 'Ghicobox');
		str = str.replace(/Unown Report/gi, 'UnownBloc');
		str = str.replace(/Berry Pots/gi, 'Piantabacche');
		str = str.replace(/Dowsing MCHN/gi, 'Ricerca Strum.');
		str = str.replace(/GB Sounds/gi, 'Lettore GB');
		str = str.replace(/Tidal Bell/gi, 'Camp. Onda');
		str = str.replace(/Data Card/gi, 'Scheda Dati');
		str = str.replace(/Jade Orb/gi, 'Sfera Verde');
		str = str.replace(/Enigma Stone/gi, 'Misticristal');

		// Strumenti base - Gen V

		str = str.replace(/Liberty Pass/gi, 'Liberticket');
		str = str.replace(/Prop Case/gi, 'Portagadget');
		str = str.replace(/Dragon Skull/gi, 'Teschio');
		str = str.replace(/Light Stone/gi, 'Chiarolite');
		str = str.replace(/Dark Stone/gi, 'Scurolite');
		str = str.replace(/Xtransceiver/gi, 'Interpok&eacute;');
		str = str.replace(/Gram (\d)/gi, 'Missiva $1');
		str = str.replace(/Colress MCHN/gi, 'Acrocongegno');
		str = str.replace(/DNA Splicers/gi, 'Cuneo DNA');
		str = str.replace(/Dropped Item/gi, 'Oggetto Perso');
		str = str.replace(/Grubby Hanky/gi, 'Pezza Sporca');
		str = str.replace(/Medal Box/gi, 'Box Premi');
		str = str.replace(/Oval Charm/gi, 'Ovamuleto');
		str = str.replace(/Permit/gi, 'Permesso');
		str = str.replace(/Plasma Card/gi, 'Carta Plasma');
		str = str.replace(/Reveal Glass/gi, 'Verispecchio');
		str = str.replace(/Shiny Charm/gi, 'Cromamuleto');
		str = str.replace(/Magma Stone/gi, 'Magmapietra');

		// Strumenti base - Gen VI

		str = str.replace(/Adventure Rules/gi, 'Guida Avventura');
		str = str.replace(/Elevator Key/gi, 'Chiave ascensore');
		str = str.replace(/Holo Caster/gi, 'Holovox');
		str = str.replace(/Honor of Kalos/gi, 'Emblema di Kalos');
		str = str.replace(/Intriguing Stone/gi, 'Sasso suggestivo');
		str = str.replace(/Lens Case/gi, 'Portalenti');
		str = str.replace(/Looker Ticket/gi, 'Carta Bellocchio');
		str = str.replace(/Mega Ring/gi, 'Megacerchio');
		str = str.replace(/Power Plant Pass/gi, 'Pass Centrale');
		str = str.replace(/Prof's Letter/gi, 'Lettera del Prof');
		str = str.replace(/Roller Skates/gi, 'Pattini');
		str = str.replace(/Sprinklotad/gi, 'Irrigalotad');
		str = str.replace(/TMV Pass/gi, 'Pass TMV');

		// Ghicocche

		str = str.replace(/Red Apricorn/gi, 'Ghicocca Rsa');
		str = str.replace(/Blu Apricorn/gi, 'Ghicocca Blu');
		str = str.replace(/Ylw Apricorn/gi, 'Ghicocca Gia');
		str = str.replace(/Grn Apricorn/gi, 'Ghicocca Ver');
		str = str.replace(/Wht Apricorn/gi, 'Ghicocca Bln');
		str = str.replace(/Blk Apricorn/gi, 'Ghicocca Nra');
		str = str.replace(/Pnk Apricorn/gi, 'Ghicocca Ros');

		// Altri strumenti

		str = str.replace(/Super Repel/gi, 'Superrepellente');
		str = str.replace(/Max Repel/gi, 'Repellente Max');
		str = str.replace(/Repel/gi, 'Repellente');
		str = str.replace(/Escape Rope/gi, 'Fune di Fuga');
		str = str.replace(/Black Flute/gi, 'Flauto Nero');
		str = str.replace(/White Flute/gi, 'Flauto Bianco');
		str = str.replace(/Shoal Salt/gi, 'Sale Ondoso');
		str = str.replace(/Shoal Shell/gi, 'Gusciondoso');
		str = str.replace(/Red Shard/gi, 'Coccio Rosso');
		str = str.replace(/Blue Shard/gi, 'Coccio Blu');
		str = str.replace(/Yellow Shard/gi, 'Coccio Giallo');
		str = str.replace(/Green Shard/gi, 'Coccio Verde');
		str = str.replace(/Exp. Share/gi, 'Condividi Esp.');
		str = str.replace(/Normal Box/gi, 'Scat. Normale');
		str = str.replace(/Gorgeous Box/gi, 'Scat. Lusso');
		str = str.replace(/SlowpokeTail/gi, 'CodaSlowpoke');
		str = str.replace(/Honey/gi, 'Miele');
		str = str.replace(/Growth Mulch/gi, 'Fertilrapido');
		str = str.replace(/Damp Mulch/gi, 'Fertilidro');
		str = str.replace(/Stable Mulch/gi, 'Fertilsaldo');
		str = str.replace(/Gooey Mulch/gi, 'Fertilcolla');
		str = str.replace(/Root Fossil/gi, 'Radifossile');
		str = str.replace(/Claw Fossil/gi, 'Fossilunghia');
		str = str.replace(/Helix Fossil/gi, 'Helixfossile');
		str = str.replace(/Dome Fossil/gi, 'Domofossile');
		str = str.replace(/Old Amber/gi, 'Ambra Antica');
		str = str.replace(/Armor Fossil/gi, 'Fossilscudo');
		str = str.replace(/Skull Fossil/gi, 'Fossilcranio');
		str = str.replace(/Odd Keystone/gi, 'Roccianima');
		str = str.replace(/Cover Fossil/gi, 'Fossiltappo');
		str = str.replace(/Plume Fossil/gi, 'Fossilpiuma');
		str = str.replace(/Pass Orb/gi, 'Passabilia');
		str = str.replace(/Jaw Fossil/gi, 'Fossilmascella');
		str = str.replace(/Sail Fossil/gi, 'Fossilpinna');
		str = str.replace(/Amaze Mulch/gi, 'Fertilprodigio');
		str = str.replace(/Boost Mulch/gi, 'Fertilcopioso');
		str = str.replace(/Surprise Mulch/gi, 'Fertilsorpresa');
		str = str.replace(/Rich Mulch/gi, 'Fertilflorido');
		str = str.replace(/Discount Coupon/gi, 'Buono sconto');
		str = str.replace(/Strange Souvenir/gi, 'Strano ninnolo');
		str = str.replace(/Ability Capsule/gi, 'Capsula abilit&agrave;');

		// Varie ed eventuali

		str = str.replace(/\[\[TM/gi, '[[MT');
		str = str.replace(/\[\[HM/gi, '[[MN');
		str = str.replace(/\{\{DL\|([\w-\s]+)\|([\w\s]+)\}\}/gi, '[[$1#$2|$2]]');
		str = str.replace(/Evolution-inducing held item/gi, 'Oggetti tenuti che provocano Evoluzione');
	}

	// Strumenti tenuti - Gen II

	str = str.replace(/Bright Powder/gi, 'Luminpolvere');
	str = str.replace(/Quick Claw/gi, 'Rapidartigli');
	str = str.replace(/King's Rock/gi, 'Roccia di Re');
	str = str.replace(/Silver Powder/gi, 'Argenpolvere');
	str = str.replace(/Amulet Coin/gi, 'Monetamuleto');
	str = str.replace(/Cleanse Tag/gi, 'Velopuro');
	str = str.replace(/Smoke Ball/gi, 'Palla Fumo');
	str = str.replace(/Everstone/gi, 'Pietrastante');
	str = str.replace(/Focus Band/gi, 'Bandana');
	str = str.replace(/Focus Sash/gi, 'Focalnastro');
	str = str.replace(/Lucky Egg/gi, 'Fortunuovo');
	str = str.replace(/Scope Lens/gi, 'Mirino');
	str = str.replace(/Metal Coat/gi, 'Metalcoperta');
	str = str.replace(/Leftovers/gi, 'Avanzi');
	str = str.replace(/Dragon Scale/gi, 'Squama Drago');
	str = str.replace(/Light Ball/gi, 'Elettropalla');
	str = str.replace(/Soft Sand/gi, 'Sabbiasoffice');
	str = str.replace(/Hard Stone/gi, 'Pietradura');
	str = str.replace(/Miracle Seed/gi, 'Miracolseme');
	str = str.replace(/Black Glasses/gi, 'Occhialineri');
	str = str.replace(/Black Belt/gi, 'Cinturanera');
	str = str.replace(/Magnet/gi, 'Calamita');
	str = str.replace(/Mystic Water/gi, 'Acquamagica');
	str = str.replace(/Sharp Beak/gi, 'Beccaffilato');
	str = str.replace(/Poison Barb/gi, 'Velenago');
	str = str.replace(/Never\-Melt Ice/gi, 'Gelomai');
	str = str.replace(/Spell Tag/gi, 'Spettrotarga');
	str = str.replace(/Twisted Spoon/gi, 'Cucchiaiotorto');
	str = str.replace(/Charcoal/gi, 'Carbonella');
	str = str.replace(/Dragon Fang/gi, 'Dentedidrago');
	str = str.replace(/Pink Bow/gi, 'Fiocco Rosa');
	str = str.replace(/Polkadot Bow/gi, 'Fiocco Pois');
	str = str.replace(/Up-Grade/gi, 'Upgrade');
	str = str.replace(/Lucky Punch/gi, 'Fortunpugno');
	str = str.replace(/Metal Powder/gi, 'Metalpolvere');
	str = str.replace(/Thick Club/gi, 'Ossospesso');
	str = str.replace(/Stick/gi, 'Gambo');
	str = str.replace(/Berserk Gene/gi, 'Gene Furioso');

	// Strumenti tenuti - Gen III

	str = str.replace(/White Herb/gi, 'Erbachiara');
	str = str.replace(/Macho Brace/gi, 'Crescicappa');
	str = str.replace(/Soothe Bell/gi, 'Calmanella');
	str = str.replace(/Mental Herb/gi, 'Mentalerba');
	str = str.replace(/Choice Band/gi, 'Bendascelta');
	str = str.replace(/Soul Dew/gi, 'Cuorugiada');
	str = str.replace(/Deep Sea Tooth/gi, 'Denteabissi');
	str = str.replace(/Deep Sea Scale/gi, 'Squamabissi');
	str = str.replace(/Silk Scarf/gi, 'Sciarpa Seta');
	str = str.replace(/Shell Bell/gi, 'Conchinella');
	str = str.replace(/Sea Incense/gi, 'Marearoma');
	str = str.replace(/Lax Incense/gi, 'Distraroma');
	str = str.replace(/Red Scarf/gi, 'Fascia Rossa');
	str = str.replace(/Blue Scarf/gi, 'Fascia Blu');
	str = str.replace(/Pink Scarf/gi, 'Fascia Rosa');
	str = str.replace(/Green Scarf/gi, 'Fascia Verde');
	str = str.replace(/Yellow Scarf/gi, 'Fascia Gialla');

	// Strumenti tenuti - Gen IV

	str = str.replace(/Flame Plate/gi, 'Lastrarogo');
	str = str.replace(/Splash Plate/gi, 'Lastraidro');
	str = str.replace(/Zap Plate/gi, 'Lastrasaetta');
	str = str.replace(/Meadow Plate/gi, 'Lastraprato');
	str = str.replace(/Icicle Plate/gi, 'Lastragelo');
	str = str.replace(/Fist Plate/gi, 'Lastrapugno');
	str = str.replace(/Toxic Plate/gi, 'Lastrafiele');
	str = str.replace(/Earth Plate/gi, 'Lastrageo');
	str = str.replace(/Sky Plate/gi, 'Lastracielo');
	str = str.replace(/Mind Plate/gi, 'Lastamente');
	str = str.replace(/Insect Plate/gi, 'Lastrabaco');
	str = str.replace(/Stone Plate/gi, 'Lastrapietra');
	str = str.replace(/Spooky Plate/gi, 'Lastratetra');
	str = str.replace(/Draco Plate/gi, 'Lastradrakon');
	str = str.replace(/Dread Plate/gi, 'Lastratimore');
	str = str.replace(/Iron Plate/gi, 'Lastraferro');
	str = str.replace(/Odd Incense/gi, 'Bizzoaroma');
	str = str.replace(/Rock Incense/gi, 'Roccioaroma');
	str = str.replace(/Full Incense/gi, 'Gonfioaroma');
	str = str.replace(/Wave Incense/gi, 'Ondaroma');
	str = str.replace(/Rose Incense/gi, 'Rosaroma');
	str = str.replace(/Luck Incense/gi, 'Fortunaroma');
	str = str.replace(/Pure Incense/gi, 'Puroaroma');
	str = str.replace(/Protector/gi, 'Copertura');
	str = str.replace(/Electirizer/gi, 'Elettritore');
	str = str.replace(/Magmarizer/gi, 'Magmatore');
	str = str.replace(/Dubious Disc/gi, 'Dubbiodisco');
	str = str.replace(/Reaper Cloth/gi, 'Terrorpanno');
	str = str.replace(/Razor Claw/gi, 'Affilartigli');
	str = str.replace(/Razor Fang/gi, 'Affilodente');
	str = str.replace(/Adamant Orb/gi, 'Adamasfera');
	str = str.replace(/Lustrous Orb/gi, 'Splendisfera');
	str = str.replace(/Griseous Orb/gi, 'Grigiosfera');
	str = str.replace(/Wide Lens/gi, 'Grandelente');
	str = str.replace(/Muscle Band/gi, 'Muscolbanda');
	str = str.replace(/Wise Glasses/gi, 'Saviocchiali');
	str = str.replace(/Expert Belt/gi, 'Abilcintura');
	str = str.replace(/Light Clay/gi, 'Creta Luce');
	str = str.replace(/Life Orb/gi, 'Assorbisfera');
	str = str.replace(/Power Herb/gi, 'Vigorerba');
	str = str.replace(/Toxic Orb/gi, 'Tossicsfera');
	str = str.replace(/Flame Orb/gi, 'Fiammosfera');
	str = str.replace(/Quick Powder/gi, 'Velopolvere');
	str = str.replace(/Zoom Lens/gi, 'Zoomlente');
	str = str.replace(/Metronome/gi, 'Plessimetro');
	str = str.replace(/Iron Ball/gi, 'Ferropalla');
	str = str.replace(/Lagging Tail/gi, 'Rallentocoda');
	str = str.replace(/Destiny Knot/gi, 'Destincomune');
	str = str.replace(/Black Sludge/gi, 'Fangopece');
	str = str.replace(/Icy Rock/gi, 'Rocciafredda');
	str = str.replace(/Smooth Rock/gi, 'Roccialiscia');
	str = str.replace(/Heat Rock/gi, 'Rocciacalda');
	str = str.replace(/Damp Rock/gi, 'Rocciaumida');
	str = str.replace(/Grip Claw/gi, 'Presartigli');
	str = str.replace(/Choice Scarf/gi, 'Stolascelta');
	str = str.replace(/Sticky Barb/gi, 'Vischiopunta');
	str = str.replace(/Power Bracer/gi, 'Vigorcerchio');
	str = str.replace(/Power Belt/gi, 'Vigorfascia');
	str = str.replace(/Power Lens/gi, 'Vigorlente');
	str = str.replace(/Power Band/gi, 'Vigorbanda');
	str = str.replace(/Power Ankle/gi, 'Vigorgliera');
	str = str.replace(/Power Weight/gi, 'Vigorpeso');
	str = str.replace(/Shed Shell/gi, 'Disfoguscio');
	str = str.replace(/Big Root/gi, 'Granradice');
	str = str.replace(/Choice Specs/gi, 'Lentiscelta');

	// Strumenti tenuti - Gen V

	str = str.replace(/Douse Drive/gi, 'Idromodulo');
	str = str.replace(/Shock Drive/gi, 'Voltmodulo');
	str = str.replace(/Burn Drive/gi, 'Piromodulo');
	str = str.replace(/Chill Drive/gi, 'Gelomodulo');
	str = str.replace(/Prism Scale/gi, 'Squama Bella');
	str = str.replace(/Eviolite/gi, 'Evolcondensa');
	str = str.replace(/Float Stone/gi, 'Pietralieve');
	str = str.replace(/Rocky Helmet/gi, 'Bitorzolelmo');
	str = str.replace(/Air Balloon/gi, 'Palloncino');
	str = str.replace(/Red Card/gi, 'Cartelrosso');
	str = str.replace(/Ring Target/gi, 'Facilsaglio');
	str = str.replace(/Binding Band/gi, 'Legafascia');
	str = str.replace(/Absorb Bulb/gi, 'Bulbo');
	str = str.replace(/Cell Battery/gi, 'Ricaripila ');
	str = str.replace(/Eject Button/gi, 'Pulsantefuga');
	str = str.replace(/Fire Gem/gi, 'Bijoufuoco');
	str = str.replace(/Water Gem/gi, 'Bijouacqua');
	str = str.replace(/Electric Gem/gi, 'Bijouelettro');
	str = str.replace(/Grass Gem/gi, 'Bijouerba');
	str = str.replace(/Ice Gem/gi, 'Bijoughiac.');
	str = str.replace(/Fighting Gem/gi, 'Bijoulotta');
	str = str.replace(/Poison Gem/gi, 'Bijouveleno');
	str = str.replace(/Ground Gem/gi, 'Bijouterra');
	str = str.replace(/Flying Gem/gi, 'Bijouvolante');
	str = str.replace(/Psychic Gem/gi, 'Bijoupsico');
	str = str.replace(/Bug Gem/gi, 'Bijoucoleot.');
	str = str.replace(/Rock Gem/gi, 'Bijouroccia');
	str = str.replace(/Ghost Gem/gi, 'Bijouspettro');
	str = str.replace(/Dragon Gem/gi, 'Bijoudrago');
	str = str.replace(/Dark Gem/gi, 'Bijoubuio');
	str = str.replace(/Steel Gem/gi, 'Bijouacciaio');
	str = str.replace(/Normal Gem/gi, 'Bijounormale');

	// Strumenti tenuti - Gen VI

	str = str.replace(/Whipped Dream/gi, 'Dolcespuma');
	str = str.replace(/Sachet/gi, 'Bustina Aromi');
	str = str.replace(/Pixie Plate/gi, 'Lastraspiritello');
	str = str.replace(/Luminous Moss/gi, 'Muschioluce');
	str = str.replace(/Snowball/gi, 'Palla di Neve');
	str = str.replace(/Assault Vest/gi, 'Corpetto Assalto');
	str = str.replace(/Safety Goggles/gi, 'Visierantisabbia');
	str = str.replace(/Weakness Policy/gi, 'Vulneropolizza');

	// Bacche - Gen II - no template

	str = str.replace(/Gold Berry/gi, 'Bacca Oro');
	str = str.replace(/PSNCureBerry/gi, 'Baccantiveleno');
	str = str.replace(/PRZCureBerry/gi, 'Baccantiparalisi');
	str = str.replace(/Mint Berry/gi, 'Bacca Menta');
	str = str.replace(/Burnt Berry/gi, 'Bacca Bruciata');
	str = str.replace(/Ice Berry/gi, 'Bacca Ghiaccio');
	str = str.replace(/Bitter Berry/gi, 'Bacca Amara');
	str = str.replace(/MysteryBerry/gi, 'Bacca Misteriosa');
	str = str.replace(/MiracleBerry/gi, 'Bacca Miracolosa');

	// Bacche - Gen II - con template

	str = str.replace(/\{\{b\|Berry\}\}/gi, '[[Bacca]]');
	str = str.replace(/\{\{b\|Gold\}\}/gi, '[[Bacca Oro]]');
	str = str.replace(/\{\{b\|Mint\}\}/gi, '[[Bacca Menta]]');
	str = str.replace(/\{\{b\|Burnt\}\}/gi, '[[Bacca Bruciata]]');
	str = str.replace(/\{\{b\|Ice\}\}/gi, '[[Bacca Ghiaccio]]');
	str = str.replace(/\{\{b\|Bitter\}\}/gi, '[[Bacca Amara]]');

	// Bacche - Gen III - no template

	str = str.replace(/Cheri Berry/gi, 'Baccaliegia');
	str = str.replace(/Chesto Berry/gi, 'Baccastagna');
	str = str.replace(/Pecha Berry/gi, 'Baccapesca');
	str = str.replace(/Rawst Berry/gi, 'Baccafrago');
	str = str.replace(/Aspear Berry/gi, 'Baccaperina');
	str = str.replace(/Leppa Berry/gi, 'Baccamela');
	str = str.replace(/Oran Berry/gi, 'Baccarancia');
	str = str.replace(/Persim Berry/gi, 'Baccaki');
	str = str.replace(/Lum Berry/gi, 'Baccaprugna');
	str = str.replace(/Sitrus Berry/gi, 'Baccacedro');
	str = str.replace(/Figy Berry/gi, 'Baccafico');
	str = str.replace(/Wiki Berry/gi, 'Baccaprugna');
	str = str.replace(/Mago Berry/gi, 'Baccamango');
	str = str.replace(/Aguav Berry/gi, 'Baccaguava');
	str = str.replace(/Iapapa Berry/gi, 'Baccapaia');
	str = str.replace(/Razz Berry/gi, 'Baccalampon');
	str = str.replace(/Bluk Berry/gi, 'Baccamora');
	str = str.replace(/Nanab Berry/gi, 'Baccabana');
	str = str.replace(/Wepear Berry/gi, 'Baccapera');
	str = str.replace(/Pinap Berry/gi, 'Baccananas');
	str = str.replace(/Pomeg Berry/gi, 'Baccagrana');
	str = str.replace(/Kelpsy Berry/gi, 'Baccalga');
	str = str.replace(/Qualot Berry/gi, 'Baccaloquat');
	str = str.replace(/Hondew Berry/gi, 'Baccamelon');
	str = str.replace(/Grepa Berry/gi, 'Baccauva');
	str = str.replace(/Tamato Berry/gi, 'Baccamodoro');
	str = str.replace(/Cornn Berry/gi, 'Baccavena');
	str = str.replace(/Magost Berry/gi, 'Baccagostan');
	str = str.replace(/Rabuta Berry/gi, 'Baccambutan');
	str = str.replace(/Nomel Berry/gi, 'Baccalemon');
	str = str.replace(/Spelon Berry/gi, 'Baccamelos');
	str = str.replace(/Pamtre Berry/gi, 'Baccapalma');
	str = str.replace(/Watmel Berry/gi, 'Baccacomero');
	str = str.replace(/Durin Berry/gi, 'Baccadurian');
	str = str.replace(/Belue Berry/gi, 'Baccartillo');
	str = str.replace(/Liechi Berry/gi, 'Baccalici');
	str = str.replace(/Ganlon Berry/gi, 'Baccalongan');
	str = str.replace(/Salac Berry/gi, 'Baccasalak');
	str = str.replace(/Petaya Berry/gi, 'Baccapitaya');
	str = str.replace(/Apicot Berry/gi, 'Baccacocca');
	str = str.replace(/Lansat Berry/gi, 'Baccalangsa');
	str = str.replace(/Starf Berry/gi, 'Baccambola');
	str = str.replace(/Enigma Berry/gi, 'Baccaenigma');

	// Bacche - Gen III - con template

	str = str.replace(/\{\{b\|Cheri\}\}/gi, '[[Baccaliegia]]');
	str = str.replace(/\{\{b\|Chesto\}\}/gi, '[[Baccastagna]]');
	str = str.replace(/\{\{b\|Pecha\}\}/gi, '[[Baccapesca]]');
	str = str.replace(/\{\{b\|Rawst\}\}/gi, '[[Baccafrago]]');
	str = str.replace(/\{\{b\|Aspear\}\}/gi, '[[Baccaperina]]');
	str = str.replace(/\{\{b\|Leppa\}\}/gi, '[[Baccamela]]');
	str = str.replace(/\{\{b\|Oran\}\}/gi, '[[Baccarancia]]');
	str = str.replace(/\{\{b\|Persim\}\}/gi, '[[Baccaki]]');
	str = str.replace(/\{\{b\|Lum\}\}/gi, '[[Baccaprugna]]');
	str = str.replace(/\{\{b\|Sitrus\}\}/gi, '[[Baccacedro]]');
	str = str.replace(/\{\{b\|Figy\}\}/gi, '[[Baccafico]]');
	str = str.replace(/\{\{b\|Wiki\}\}/gi, '[[Baccaprugna]]');
	str = str.replace(/\{\{b\|Mago\}\}/gi, '[[Baccamango]]');
	str = str.replace(/\{\{b\|Aguav\}\}/gi, '[[Baccaguava]]');
	str = str.replace(/\{\{b\|Iapapa\}\}/gi, '[[Baccapaia]]');
	str = str.replace(/\{\{b\|Razz\}\}/gi, '[[Baccalampon]]');
	str = str.replace(/\{\{b\|Bluk\}\}/gi, '[[Baccamora]]');
	str = str.replace(/\{\{b\|Nanab\}\}/gi, '[[Baccabana]]');
	str = str.replace(/\{\{b\|Wepear\}\}/gi, '[[Baccapera]]');
	str = str.replace(/\{\{b\|Pinap\}\}/gi, '[[Baccananas]]');
	str = str.replace(/\{\{b\|Pomeg\}\}/gi, '[[Baccagrana]]');
	str = str.replace(/\{\{b\|Kelpsy\}\}/gi, '[[Baccalga]]');
	str = str.replace(/\{\{b\|Qualot\}\}/gi, '[[Baccaloquat]]');
	str = str.replace(/\{\{b\|Hondew\}\}/gi, '[[Baccamelon]]');
	str = str.replace(/\{\{b\|Grepa\}\}/gi, '[[Baccauva]]');
	str = str.replace(/\{\{b\|Tamato\}\}/gi, '[[Baccamodoro]]');
	str = str.replace(/\{\{b\|Cornn\}\}/gi, '[[Baccavena]]');
	str = str.replace(/\{\{b\|Magost\}\}/gi, '[[Baccagostan]]');
	str = str.replace(/\{\{b\|Rabuta\}\}/gi, '[[Baccambutan]]');
	str = str.replace(/\{\{b\|Nomel\}\}/gi, '[[Baccalemon]]');
	str = str.replace(/\{\{b\|Spelon\}\}/gi, '[[Baccamelos]]');
	str = str.replace(/\{\{b\|Pamtre\}\}/gi, '[[Baccapalma]]');
	str = str.replace(/\{\{b\|Watmel\}\}/gi, '[[Baccacomero]]');
	str = str.replace(/\{\{b\|Durin\}\}/gi, '[[Baccadurian]]');
	str = str.replace(/\{\{b\|Belue\}\}/gi, '[[Baccartillo]]');
	str = str.replace(/\{\{b\|Liechi\}\}/gi, '[[Baccalici]]');
	str = str.replace(/\{\{b\|Ganlon\}\}/gi, '[[Baccalongan]]');
	str = str.replace(/\{\{b\|Salac\}\}/gi, '[[Baccasalak]]');
	str = str.replace(/\{\{b\|Petaya\}\}/gi, '[[Baccapitaya]]');
	str = str.replace(/\{\{b\|Apicot\}\}/gi, '[[Baccacocca]]');
	str = str.replace(/\{\{b\|Lansat\}\}/gi, '[[Baccalangsa]]');
	str = str.replace(/\{\{b\|Starf\}\}/gi, '[[Baccambola]]');
	str = str.replace(/\{\{b\|Enigma\}\}/gi, '[[Baccaenigma]]');


	// Bacche - Gen IV - no template

	str = str.replace(/Occa Berry/gi, 'Baccacao');
	str = str.replace(/Passho Berry/gi, 'Baccapasflo');
	str = str.replace(/Wacan Berry/gi, 'Baccaparmen');
	str = str.replace(/Rindo Berry/gi, 'Baccarindo');
	str = str.replace(/Yache Berry/gi, 'Baccamoya');
	str = str.replace(/Chople Berry/gi, 'Baccarosmel');
	str = str.replace(/Kebia Berry/gi, 'Baccakebia');
	str = str.replace(/Shuca Berry/gi, 'Baccanaca');
	str = str.replace(/Coba Berry/gi, 'Baccababa');
	str = str.replace(/Payapa Berry/gi, 'Baccapayapa');
	str = str.replace(/Tanga Berry/gi, 'Baccaitan');
	str = str.replace(/Charti Berry/gi, 'Baccaciofo');
	str = str.replace(/Kasib Berry/gi, 'Baccacitrus');
	str = str.replace(/Haban Berry/gi, 'Baccahaban');
	str = str.replace(/Colbur Berry/gi, 'Baccaxan');
	str = str.replace(/Babiri Berry/gi, 'Baccababiri');
	str = str.replace(/Chilan Berry/gi, 'Baccacinlan');
	str = str.replace(/Micle Berry/gi, 'Baccaracolo');
	str = str.replace(/Custap Berry/gi, 'Baccacrela');
	str = str.replace(/Jaboca Berry/gi, 'Baccajaba');
	str = str.replace(/Rowap Berry/gi, 'Baccaroam');

	// Bacche - Gen IV - con template

	str = str.replace(/\{\{b\|Occa\}\}/gi, '[[Baccacao]]');
	str = str.replace(/\{\{b\|Passho\}\}/gi, '[[Baccapasflo]]');
	str = str.replace(/\{\{b\|Wacan\}\}/gi, '[[Baccaparmen]]');
	str = str.replace(/\{\{b\|Rindo\}\}/gi, '[[Baccarindo]]');
	str = str.replace(/\{\{b\|Yache\}\}/gi, '[[Baccamoya]]');
	str = str.replace(/\{\{b\|Chople\}\}/gi, '[[Baccarosmel]]');
	str = str.replace(/\{\{b\|Kebia\}\}/gi, '[[Baccakebia]]');
	str = str.replace(/\{\{b\|Shuca\}\}/gi, '[[Baccanaca]]');
	str = str.replace(/\{\{b\|Coba\}\}/gi, '[[Baccababa]]');
	str = str.replace(/\{\{b\|Payapa\}\}/gi, '[[Baccapayapa]]');
	str = str.replace(/\{\{b\|Tanga\}\}/gi, '[[Baccaitan]]');
	str = str.replace(/\{\{b\|Charti\}\}/gi, '[[Baccaciofo]]');
	str = str.replace(/\{\{b\|Kasib\}\}/gi, '[[Baccacitrus]]');
	str = str.replace(/\{\{b\|Haban\}\}/gi, '[[Baccahaban]]');
	str = str.replace(/\{\{b\|Colbur\}\}/gi, '[[Baccaxan]]');
	str = str.replace(/\{\{b\|Babiri\}\}/gi, '[[Baccababiri]]');
	str = str.replace(/\{\{b\|Chilan\}\}/gi, '[[Baccacinlan]]');
	str = str.replace(/\{\{b\|Micle\}\}/gi, '[[Baccaracolo]]');
	str = str.replace(/\{\{b\|Custap\}\}/gi, '[[Baccacrela]]');
	str = str.replace(/\{\{b\|Jaboca\}\}/gi, '[[Baccajaba]]');
	str = str.replace(/\{\{b\|Rowap\}\}/gi, '[[Baccaroam]]');

	// Bacche - Gen VI - no template

	str = str.replace(/Roseli Berry/gi, 'Baccarcad&egrave;');
	str = str.replace(/Kee Berry/gi, 'Baccalighia');
	str = str.replace(/Maranga Berry/gi, 'Baccapane');

	// Bacche - Gen VI - template

	str = str.replace(/\{\{b\|Roseli\}\}/gi, '[[Baccarcad&egrave;]]');
	str = str.replace(/\{\{b\|Kee\}\}/gi, '[[Baccalighia]]');
	str = str.replace(/\{\{b\|Maranga\}\}/gi, '[[Baccapane]]');

	// Megapietre

	str = str.replace(/Abomasite/gi, 'Abomasnowite');
	str = str.replace(/Alakazite/gi, 'Alakazamite');
	str = str.replace(/Blastoisinite/gi, 'Blastoisite');
	str = str.replace(/Heracronite/gi, 'Heracrossite');
	str = str.replace(/Houndoominite/gi, 'Houndoomite');
	str = str.replace(/Lucarionite/gi, 'Lucarite');
	str = str.replace(/Manectite/gi, 'Manectricite');
	str = str.replace(/Mewtwonite X/gi, 'Mewtwoite X');
	str = str.replace(/Mewtwonite Y/gi, 'Mewtwoite Y');
	str = str.replace(/Sablenite/gi, 'Sableyite');
	str = str.replace(/Altarianite/gi, 'Altarite');
	str = str.replace(/Sharpedonite/gi, 'Sharpedite');
	str = str.replace(/Slowbronite/gi, 'Slowbroite');
	str = str.replace(/Glalitite/gi, 'Glalite');

	// Correzione errori

	str = str.replace(/Calamitaon/gi, 'Magneton');
	str = str.replace(/Calamita Pull/gi, 'Magnetismo');
	str = str.replace(/Calamitaismo/gi, 'Magnetismo');
	str = str.replace(/Gamboy Hold/gi, 'Sticky Hold');
	return str;
};

macros.generazioni = function(str) {
	var ordinals = {1 : 'prima', 2 : 'seconda',
		3 : 'terza', 4 : 'quarta', 5 : 'quinta',
		6 : 'sesta', I : 'prima', II : 'seconda',
		III : 'terza', IV : 'quarta', V : 'quinta', VI: 'sesta'};
	str = str.replace(/gen ([1-6IV]+)/gi, function(str, gen) {
		return ordinals[gen] + ' generazione';
	});
	return str;
};

/*

Il secondo argomento deve essere true per far sì che vengano
tradotti HeartGold e SoulSilver in Oro HeartGold e Argento
SoulSilver

*/

macros.giochi = function(str, transHGSS) {
	transHGSS = transHGSS == null || transHGSS;

	// Eccezioni per i colori

	str = str.replace(/firered color/gi, 'rossofuoco color');
	str = str.replace(/leafgreen color/gi, 'verdefoglia color');
	str = str.replace(/black2 color/gi, 'nero2 color');
	str = str.replace(/white2 color/gi, 'bianco2 color');

	if (transHGSS) {
		str = str.replace(/SoulSilver/g, 'Argento SoulSilver');
		str = str.replace(/HeartGold/g, 'Oro HeartGold');

		// Correzione errori

		str = str.replace(/Argento Argento SoulSilver/g, 'Argento SoulSilver');
		str = str.replace(/Oro Oro HeartGold/g, 'Oro HeartGold');
	}

	// Traduzione nomi giochi

	str = str.replace(/FireRed/gi, 'Rosso Fuoco');
	str = str.replace(/LeafGreen/gi, 'Verde Foglia');
	str = str.replace(/Alpha Sapphire/gi, 'Zaffiro Alpha');
	str = str.replace(/Omega Ruby/gi, 'Rubino Omega');
	str = str.replace(/\bGold\b/gi, 'Oro');
	str = str.replace(/\bSilver\b/gi, 'Argento');
	str = str.replace(/\bRed\b/gi, 'Rosso');
	str = str.replace(/\bBlue\b/gi, 'Blu');
	str = str.replace(/\bGreen\b/gi, 'Verde');
	str = str.replace(/Crystal/gi, 'Cristallo');
	str = str.replace(/Yellow/gi, 'Giallo');
	str = str.replace(/\bRuby\b/gi, 'Rubino');
	str = str.replace(/Sapphire/gi, 'Zaffiro');
	str = str.replace(/Emerald/gi, 'Smeraldo');
	str = str.replace(/Diamond/gi, 'Diamante');
	str = str.replace(/\bPearl\b/gi, 'Perla');
	str = str.replace(/Platinum/gi, 'Platino');
	str = str.replace(/\bBlack\b/gi, 'Nero');
	str = str.replace(/\bWhite\b/gi, 'Bianco');

	// Traduzione sigle dei giochi

	str = str.replace(/\bRG_/g, 'RV_');
	str = str.replace(/\bRG\b/g, 'RV');
	str = str.replace(/\bRGB_/g, 'RVB_');
	str = str.replace(/\bRGB\b/g, 'RVB');
	str = str.replace(/\bRGBY_/g, 'RVBG_');
	str = str.replace(/\bRGBY\b/g, 'RVBG');
	str = str.replace(/\bY\b/g, 'G');
	str = str.replace(/\bY_/g, 'G_');
	str = str.replace(/\bGS_/g, 'OA_');
	str = str.replace(/\bGS\b/g, 'OA');
	str = str.replace(/\bGSC_/g, 'OAC_');
	str = str.replace(/\bGSC\b/g, 'OAC');
	str = str.replace(/\bRu?Sa?_/g, 'RZ_');
	str = str.replace(/\bRu?Sa?\b/g, 'RZ');
	str = str.replace(/\bSa_/g, 'Z_');
	str = str.replace(/\bSa\b/g, 'Z');
	str = str.replace(/\bRSE_/g, 'RZS_');
	str = str.replace(/\bRSE\b/g, 'RZS');
	str = str.replace(/\bRE_/g, 'RS_');
	str = str.replace(/\bRE\b/g, 'RS');
	str = str.replace(/\bSE_/g, 'ZS_');
	str = str.replace(/\bSE\b/g, 'ZS');
	str = str.replace(/\bE_/g, 'S_');
	str = str.replace(/\bE\b/g, 'S');
	str = str.replace(/\bFR?LG?_/g, 'RFVF_');
	str = str.replace(/\bFR?LG?\b/g, 'RFVF');
	str = str.replace(/\bHS_/g, 'HGSS_');
	str = str.replace(/\bHS\b/g, 'HGSS');
	str = str.replace(/\bBW_/g, 'NB_');
	str = str.replace(/\bBW\b/g, 'NB');
	str = str.replace(/\bB2W2_/g, 'N2B2_');
	str = str.replace(/\bB2W2\b/g, 'N2B2');
	str = str.replace(/\bBl_/g, 'N_');
	str = str.replace(/\bBl\b/g, 'N');
	str = str.replace(/\bW_/g, 'Bi_');
	str = str.replace(/\bW\b/g, 'Bi');
	str = str.replace(/\bB2_/g, 'N2_');
	str = str.replace(/\bB2\b/g, 'N2');
	str = str.replace(/\bW2_/g, 'B2_');
	str = str.replace(/\bW2\b/g, 'B2');
	str = str.replace(/\bBWB2W2_/g, 'NBN2B2_');
	str = str.replace(/\bBWB2W2\b/g, 'NBN2B2');
	str = str.replace(/\by_/g, 'Y_');
	str = str.replace(/\by\b/g, 'Y');
	str = str.replace(/\bOR_/g, 'RO_');
	str = str.replace(/\bOR\b/g, 'RO');
	str = str.replace(/\bAS_/g, 'ZA_');
	str = str.replace(/\bAS\b/g, 'ZA');
	str = str.replace(/\bORAS_/g, 'ROZA_');
	str = str.replace(/\bORAS\b/g, 'ROZA');
	str = str.replace(/([\|=]\n?)Pokémon Stadium(\n?[\|=])/g, '$1St$2');
	str = str.replace(/([\|=]\n?)Pokémon Stadium 2(\n?[\|=])/g, '$1St2$2');

	// Correzione errori

	str = str.replace(/Diamante\s?Storm/gi, 'Diamantempesta');

	return str;
};

macros.colori = function(str) {
	str = str.replace(/color buio/gi, 'color dark');
	var matches = /\{\{([\s\w]+) color\s?[dark|light]?\}\}/gi.exec(str);
	str = str.replace(/\{\{([\s\w]+) color\s?((dark|light))?\}\}/gi,
		'{{#invoke: colore | $1 | $2 }}');
	str = str.replace(/(\{\{#invoke: colore \| .+? )\|\s*\}\}/gi, '$1| normale }}');
	if (matches && matches.length)
		for (var k = 1; k < matches.length; ++k)
			str = str.replace(matches[k], matches[k].replace(/\s/g, '_'));
	return str;
};

/*

L'argomento useful, con default false, se a true indica
che saranno tradotte solo le forme rilevanti

*/

macros.forme = function(str, useful) {
	useful = useful || false;
	if (!useful) {

		// Traduzione dei nomi che identificano le forme

		str = str.replace(/(\w+) (Forme?|Mode)/gi, 'Forma $1');
		str = str.replace(/(\w+) Cloak/gi, 'Manto $1');
		str = str.replace(/(\w+) Sea/gi, 'Mare $1');
		str = str.replace(/(\w+) Pattern/gi, 'Motivo $1');
		str = str.replace(/(\w+) Flower/gi, 'Fiore $1');
		str = str.replace(/(\w+) Trim/gi, 'Taglio $1');
		str = str.replace(/Size/gi, '');
		str = str.replace(/Standard Mode/gi, 'Forma Normalit&agrave;');
		str = str.replace(/Zen Mode/gi, 'Forma Zen');
		str = str.replace(/(\w+) Mode/gi, 'Modo $1');

		// Traduzione dei nomi estesi delle forme

		str = str.replace(/(Normal|Neutral)/gi, 'Normale');
		str = str.replace(/Plant/gi, 'Pianta');
		str = str.replace(/Overcast/gi, 'Nuvola');
		str = str.replace(/West/gi, 'Ovest');
		str = str.replace(/Altered/gi, 'Alterata');
		str = str.replace(/Land/gi, 'Terra');
		str = str.replace(/Red-Striped/gi, 'Linearossa');
		str = str.replace(/Spring/gi, 'Primavera');
		str = str.replace(/Incarnate/gi, 'Incarnazione');
		str = str.replace(/Ordinary/gi, 'Ordinaria');
		str = str.replace(/Aria Forme/gi, 'Forma Canto');
		str = str.replace(/Red/gi, 'Rosso');
		str = str.replace(/Natural Form/gi, 'Nessun Taglio');
		str = str.replace(/Flower/gi, 'Fiore');
		str = str.replace(/Shield/gi, 'Scudo');
		str = str.replace(/Average/gi, 'Normale');
		str = str.replace(/\bexclamation\b/gi, 'esclamativo');
		str = str.replace(/\bquestion\b/gi, 'interrogativo');
		str = str.replace(/\beast\b/gi, 'est');
		str = str.replace(/\bsummer\b/gi, 'estate');
		str = str.replace(/\bautumn\b/gi, 'autunno');
		str = str.replace(/\bwinter\b/gi, 'inverno');
		str = str.replace(/\bactive\b/gi, 'attivo');
		str = str.replace(/\barchipelago\b/gi, 'arcipelago');
		str = str.replace(/\bcontinental\b/gi, 'continentale');
		str = str.replace(/\belegant\b/gi, 'eleganza');
		str = str.replace(/\bgarden\b/gi, 'prato');
		str = str.replace(/\bicy\s?snow\b/gi, 'nevi perenni');
		str = str.replace(/\bhigh\s?plains\b/gi, 'deserto');
		str = str.replace(/\bjungle\b/gi, 'giungla');
		str = str.replace(/\bmarine\b/gi, 'marino');
		str = str.replace(/\bmeadow\b/gi, 'giardinfiore');
		str = str.replace(/\bmodern\b/gi, 'trendy');
		str = str.replace(/\bmonsoon\b/gi, 'pluviale');
		str = str.replace(/\bocean\b/gi, 'oceanico');
		str = str.replace(/\bpolar\b/gi, 'nordico');
		str = str.replace(/\briver\b/gi, 'fluviale');
		str = str.replace(/\bsandstorm\b/gi, 'sabbia');
		str = str.replace(/\bsavannah\b/gi, 'savana');
		str = str.replace(/\bsun\b/gi, 'solare');
		str = str.replace(/\btundra\b/gi, 'manto di neve');
		str = str.replace(/\bfancy\b/gi, 'sbarazzino');
		str = str.replace(/\bpokeball\b/gi, 'pok&eacute; ball');
		str = str.replace(/\borange\b/gi, 'arancione');
		str = str.replace(/\byellow\b/gi, 'giallo');
		str = str.replace(/\bblue\b/gi, 'blu');
		str = str.replace(/\bheart\b/gi, 'cuore');
		str = str.replace(/\bdiamond\b/gi, 'diamante');
		str = str.replace(/\bstar\b/gi, 'stella');
		str = str.replace(/\b(la)?\s?reine\b/gi, 'regina');
		str = str.replace(/\bgentildonna\b/gi, 'matron');
		str = str.replace(/\bdebutante\b/gi, 'signorina');
		str = str.replace(/\bdandy\b/gi, 'gentiluomo');

		// Traduzione delle sigle. Solo se accompagnate da ndex,
		// poiché forme diverse condividono le stesse sigle

		str = str.replace(/666Arc/g, '666A');
		str = str.replace(/666Con/g, '666C');
		str = str.replace(/666Ele/g, '666E');
		str = str.replace(/666Gar/g, '666Pr');
		str = str.replace(/666Icy/g, '666Ne');
		str = str.replace(/666Hig/g, '666D');
		str = str.replace(/666Jun/g, '666Gu');
		str = str.replace(/666Mar/g, '666Mr');
		str = str.replace(/666Mod/g, '666T');
		str = str.replace(/666Mon/g, '666Pl');
		str = str.replace(/666Oce/g, '666O');
		str = str.replace(/666Pol/g, '666No');
		str = str.replace(/666Riv/g, '666F');
		str = str.replace(/666San/g, '666Sb');
		str = str.replace(/666Sav/g, '666Sv');
		str = str.replace(/666Sun/g, '666So');
		str = str.replace(/666Tun/g, '666Mn');
		str = str.replace(/666Fan/g, '666Sr');
		str = str.replace(/666Pok/g, '666Po');
		str = str.replace(/201EX/g, '201PE');
		str = str.replace(/201QU/g, '201PD');
		str = str.replace(/58(5|6)S/g, '58$1E');
		str = str.replace(/58(5|6)W/g, '58$1I');
		str = str.replace(/6(69|70|71)O/g, '6$1A');
		str = str.replace(/6(69|70|71)B/g, '6$1Bl');
		str = str.replace(/6(69|70|71)Y/g, '6$1G');
		str = str.replace(/6(69|70|71)W/g, '6$1Bi');
		str = str.replace(/676De/g, '676Si');
		str = str.replace(/676Di/g, '676D');
		str = str.replace(/676He/g, '676C');
		str = str.replace(/676Ka/g, '676K');
		str	 = str.replace(/676La/g, '676R');
		str = str.replace(/676Ma/g, '676Gd');
		str = str.replace(/676Ph/g, '676F');
		str = str.replace(/676Da/g, '676Gu');
	}

	// Traduzione dei nomi estesi delle forme

	str = str.replace(/\bsunny\b/gi, 'sole');
	str = str.replace(/\brain\b/gi, 'pioggia');
	str = str.replace(/\bsnowy\b/gi, 'neve');
	str = str.replace(/\battack\b/gi, 'attacco');
	str = str.replace(/\bdefense\b/gi, 'difesa');
	str = str.replace(/\bspeed\b/gi, 'velocit&agrave;');
	str = str.replace(/\bsandy\b/gi, 'sabbia');
	str = str.replace(/\btrash\b/gi, 'scarti');
	str = str.replace(/\bheat\b/gi, 'calore');
	str = str.replace(/\bwash\b/gi, 'lavaggio');
	str = str.replace(/\bfrost\b/gi, 'gelo');
	str = str.replace(/\bfan\b/gi, 'vortice');
	str = str.replace(/\bmow\b/gi, 'taglio');
	str = str.replace(/\borigin\b/gi, 'originale');
	str = str.replace(/\bsky\b/gi, 'cielo');
	str = str.replace(/\bblue-?striped\b/gi, 'lineablu');
	str = str.replace(/\bdaruma\b/gi, 'zen');
	str = str.replace(/\btherian\b/gi, 'totem');
	str = str.replace(/\bblack\b/gi, 'nero');
	str = str.replace(/\bwhite\b/gi, 'bianco');
	str = str.replace(/\bresolute\b/gi, 'risoluta');
	str = str.replace(/\bstep\b/gi, 'danza');
	str = str.replace(/\bmale\b/gi, 'maschio');
	str = str.replace(/\bfemale\b/gi, 'femmina');
	str = str.replace(/\bblade\b/gi, 'spada');
	str = str.replace(/\bsmall\b/gi, 'mini');
	str = str.replace(/\blarge\b/gi, 'grande');
	str = str.replace(/\bsuper\b/gi, 'maxi');

	// Traduzione delle sigle. Solo se accompagnate da ndex,
	// poiché forme diverse condividono le stesse sigle

	str = str.replace(/479L/g, '479T');
	str = str.replace(/479W/g, '479L');
	str = str.replace(/479O/g, '479C');
	str = str.replace(/479F/g, '479V');
	str = str.replace(/479R/g, '479G');
	str = str.replace(/646B/g, '646N');
	str = str.replace(/646W/g, '646B');
	str = str.replace(/41(2|3)G/g, '41$1Sa');
	str = str.replace(/41(2|3)S/g, '41$1Sc');
	str = str.replace(/648P/g, '648D');
	str = str.replace(/386S/g, '386V');
	str = str.replace(/351R/g, '351P');
	str = str.replace(/351H/g, '351N');
/*	str = str.replace(/710/g, '701L');
	str = str.replace(/710/g, '701S');
	str = str.replace(/710/g, '701XL');
	str = str.replace(/711/g, '701L');
	str = str.replace(/711/g, '701S');
	str = str.replace(/711/g, '701XL');*/
	str = str.replace(/681B/g, '681S');
	str = str.replace(/492S/g, '492C');
	return str;
};

macros.intestazioni = function(str) {
	str = str.replace(/TM(\d{2,3})/g, 'MT$1');
	str = str.replace(/HM(\d{2,3})/g, 'MN$1');
	str = str.replace(/==[Ll]earnset==/g, '==Mosse apprese==');
	str = str.replace(/==\[\[Dream World\]\]\-only moves==/g, '==Mosse esclusive del {{pkmn|Dream World}}==');
	str = str.replace(/==\{\{pkmn\|Dream World\}\}\-only moves==/g, '==Mosse esclusive del {{pkmn|Dream World}}==');
	str = str.replace(/==By \[\[[Ll]evel\|leveling up\]\]==/g, '==Aumentando di [[livello]]==');
	str = str.replace(/==By \[\[TM\]\]\/\[\[HM\]\]==/g, '==Tramite [[MT]]/[[MN]]==');
	str = str.replace(/==By \[\[TM\]\]==/g, '==Tramite [[MT]]==');
	str = str.replace(/==By \[\[HM\]\]==/g, '==Tramite [[MN]]==');
	str = str.replace(/==By \{\{pkmn\|breeding\}\}==/g, '==Tramite [[Accoppiamento Pok&eacute;mon|accoppiamento]]==');
	str = str.replace(/==By \[\[[Mm]ove [Tt]utor(\|tutoring)?\]\]==/g, "==Dall'[[Insegnamosse]]==");
	str = str.replace(/==By \{\{pkmn2\|event\}\}s==/g, '==Tramite [[Evento Pok&eacute;mon|eventi]]==');
	str = str.replace(/==Special moves==/g, '==Mosse speciali==');
	str = str.replace(/==By a prior \[\[evolution\]\]==/g, '==Tramite [[evoluzione|evoluzioni]] precedenti==');
	str = str.replace(/==\{\{Trading Card Game\}\}\-only moves==/g, '==Mosse apprese solamente nel [[Gioco di Carte Collezionabili Pok&eacute;mon|GCC]]==');
	return str;
};

macros['strumenti lotta'] = function(str) {
	return macros.strumenti(str, true);
};

macros['forme rilevanti'] = function(str) { return macros.forme(str, true); };

macros['Aree Dream World'] = function(str) {
	str = str.replace(/\{\{[Dd]wa\|(.+?)\}\}/g, '[[$1]]');
	str = str.replace(/Pleasant Forest/g, 'Boschetto');
	str = str.replace(/Windswept Sky/g, 'Settimo Cielo');
	str = str.replace(/Sparkling Sea/g, 'Mar Brillante');
	str = str.replace(/Spooky Manor/g, 'Maniero Antico');
	str = str.replace(/Rugged Mountain/g, 'Monte Spigolo');
	str = str.replace(/Icy Cave/g, 'Grotta Refrigerio');
	str = str.replace(/Pokémon Café Forest/g, 'Foresta Pok&eacute;mon Caf&eacute;');
	str = str.replace(/Dream Park/g, 'Parco Incanto');
	return str;
};

macros['Aree Pokewalker'] = function(str) {
	str = str.replace(/\{\{[Pp]w\|(.+?)\}\}/g, '[[$1]]');
	str = str.replace(/Refreshing Field/g, 'Piana Tranquilla');
	str = str.replace(/Noisy Forest/g, 'Bosco Cicaleccio');
	str = str.replace(/Rugged Road/g, 'Sent. Impervio');
	str = str.replace(/Beautiful Beach/g, 'Spiaggia Amena');
	str = str.replace(/Suburban Area/g, 'Z. Residenziale');
	str = str.replace(/Dim Cave/g, 'Caverna Penombra');
	str = str.replace(/Blue Lake/g, 'Lago Turchese');
	str = str.replace(/Town Outskirts/g, 'Periferia');
	str = str.replace(/Hoenn Field/g, 'Piana di Hoenn');
	str = str.replace(/Warm Beach/g, 'Spiag. Caliente');
	str = str.replace(/Volcano Path/g, 'Sentiero Focoso');
	str = str.replace(/Treehouse/g, 'Silvania');
	str = str.replace(/Scary Cave/g, 'Grotta Terrore');
	str = str.replace(/Sinnoh Field/g, 'Piana di Sinnoh');
	str = str.replace(/Icy Mountain Rd./g, 'Dirupo Glaciale');
	str = str.replace(/Big Forest/g, 'Grande Foresta');
	str = str.replace(/White Lake/g, 'Lago Bruma');
	str = str.replace(/Stormy Beach/g, 'Costa Tempestosa');
	str = str.replace(/Resort/g, 'Riviera');
	str = str.replace(/Quiet Cave/g, 'Grotta Pacifica');
	str = str.replace(/Beyond the Sea/g, 'Oltremare');
	str = str.replace(/Night Sky's Edge/g, 'Confinecielo');
	str = str.replace(/Yellow Forest/g, 'Bosco Giallo');
	str = str.replace(/Rally/g, 'Evento');
	str = str.replace(/Sightseeing/g, 'A spasso');
	str = str.replace(/Winner's Path/g, 'Via dei Campioni');
	str = str.replace(/Amity Meadow/g, 'Campo Concordia');
	return str;
};

macros.learnlist = function(str) {

	// Traduzione mosse, tipi, gare, intestazioni, sigle giochi

	str = macros.mosse(str);
	str = macros.gare(str);
	str = macros.tipi(str);
	str = macros.intestazioni(str);
	str = macros.giochi(str, false);

	// Traduzione learnlist vero e proprio

	// Entry: traduzione numeri romani --> cifre arabe

	str = str.replace(/\{\{learnlist\/([^V\|]+)([VI]+)/g, function(str, method, roman) {
		var numbers = {I: '1', II: '2', III: '3', IV: '4', V: '5', VI: '6'};
		return '{{learnlist/' + method + numbers[roman]; });

	// Headers in doppio formato:
	// 		- {{learnlist/<method>h/<genheader>|<type1>|<type2>|<genpoke>|etc}} e
	// 		- {{learnlist/<method>h|<type1>|<type2>|<genheader>|<genpoke>|etc}}

	str = str.replace(/\{\{[Ll]earnlist\/(\w+)h\|(.+)\|([1-6])\|([1-6])\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$2|$3|$4}}<br>{{#invoke: Render | entry | learnlist/entry$3.$1 |');
	str = str.replace(/\{\{[Ll]earnlist\/(\w+)h\/([1-6])\|(.+)\|([1-6])\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$3|$2|$4}}<br>{{#invoke: Render | entry | learnlist/entry$2.$1 |');

	// Entry: MT e MN, Mini Sprite, N/A, Start, sup XY ORAS, eliminazione tt

	str = str.replace(/\{\{[Ll]earnlist\/tm([1-6])\|TM/g, '{{learnlist/tm$1|MT');
	str = str.replace(/\{\{[Ll]earnlist\/tm([1-6])\|HM/g, '{{learnlist/tm$1|MN');
	str = str.replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}/g, '#$1#');
	str = str.replace(/N\/A/g, 'Assente');
	str = str.replace(/Start/g, 'Inizio');
	str = str.replace(/\{\{sup\/6\|(XY|ROZA)\}\}/g, '$1');
	str = str.replace(/\{\{tt\|.+\|(.+?)\}\}/g, '$1');

	// Entry: traduzioni generiche

	str = str.replace(/\{\{[lL]earnlist\/(\w+)([1-6])\|(.+)\|?\}\}/g,
		function(str, method, gen, args) {

			// Raddoppiamento livelli se non lo sono già

			if (gen > 4 && method == 'level' &&
				args.search(/^(Inizio|Assente|\d{1,3})\|(Inizio|Assente|\d{1,3})\|/) == -1)
				return '[[&euro;' + args.replace(/^(Inizio|\d{1,3})\|/, '$1|$1|')
					+ '&pound;]]|';
			return '[[&euro;' + args + '&pound;]]|';
		});

	// Sostituzione del livello 1 con Inizio

	str = str.replace(/&euro;1\|/g, '&euro;Inizio|');
	str = str.replace(/&euro;(Inizio|Assente|\d{1,3})\|1\|/g, '&euro;$1|Inizio|');

	// Footer in doppio formato:
	// 		- {{learnlist/<method>f/<footergen>|etc}}
	// 		- {{learnlist/<method>f|etc}}

	str = str.replace(/\{\{[lL]earnlist\/(\w+)f\/([1-6])\|(.+)\|([1-6])(.*?)\}\}/g,
		function(str, method, genf, args, genp, otherArgs) {
			return '}}<br>{{#invoke: learnlist/hf | ' + method + 'f|' + args + '|' + genf
				+ '|' + genp + (otherArgs.search('xy=') == -1 ? otherArgs : '') + '}}';
		});
	str = str.replace(/\{\{[lL]earnlist\/(\w+)f(.+?)\}\}/g, '}}<br>{{#invoke: learnlist/hf | $1f$2}}');

	// Footer: inserimento della generazione dl footer se non presente, assumendo la sesta

	str = str.replace(/\{\{#invoke: learnlist\/hf \| (\w+)f([^1-6]+)\|([1-6])\}\}/gi, '{{#invoke: learnlist/hf | $1f$2|6|$3}}');

	// Entry: traduzione null

	str = str.replace(/\{\{[lL]earnlist\/(\w+)(\d)null\}\}\n?\}\}/g, '{{#invoke: learnlist/entry$2 | $1null}}');

	// Traduzione psichico|psichico in header e footer

	// str = str.replace(/€(.+)[Pp]sichico\|[Pp]sichico\|(.+)£/g, '€$1Psichico|Psico$2£');

	str = str.replace(/[Ll]earnlist(.+)\|[Pp]sichico\|[Pp]sichico(.+)\}\}/g,
		'learnlist$1|Psico|Psico$2}}');
	str = str.replace(/[Ll]earnlist(.+)\|[Pp]sichico(.+)\}\}/g, 'learnlist$1|Psico$2}}');

	// Eliminazione chiamata al modulo Render per gli entry null

	str = str.replace(/\{\{#invoke: Render \| entry \| learnlist\/entry\d\.\w+ \|\n(\{\{.+null\}\})/g, '$1');

	// Eliminazione del parametro STAB e form e aggiustamenti sintattici

	str = str.replace(/STAB=/g, '').replace(/form=[^\|£]+\|?(.*?)£/g, '$1£');
	str = str.replace(/\}\}&pound;\]\]/g, '&pound;]]}}');
	str = str.replace(/\|?\n?\}\}\|?/g, '}}');
	return str;
};

macros.movelist = function(str) {

	// Traduzione tipi e intestazioni

	str = macros.intestazioni(str);
	str = macros.forme(str, true);
	str = macros.tipi(str);

	// Traduzione movelist vero e proprio

	str = str.replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}/g, '#$1#');
	str = str.replace(/\|([Xyesno]+)\|B2W2=([Xyesno]+)\|([Xyn])/g,
		'|$1|$2|$3');
	str = str.replace(/\|([Xyesno]+)\|B2W2=([Xyesno]+)\|([Snf])/g,
		'|$2|$1|$3');
	str = str.replace(/\|([Xyesno]+)\|B2W2=([Xyesno]+)£/g, '|$2|$1$');
	str = str.replace(/\|\{\{tt\|(.+?)\|XY\}\}<br>\{\{tt\|(.+?)\|ORAS\}\}/g,
		'|$1|ORAS=$2');
	str = str.replace(/\{\{Moveheader\/tutor\|(.+?)\}\}/gi,
		'{{#invoke: Movelist/hf | tutorh | $1}}');
	str = str.replace(/\{\{[Mm]oveheader\/tutor\/([1-6])\|([yesno\|]+)\}\}\n\{\{[Mm]oveentry\/tutor/gi,
		'{{#invoke: Movelist/hf | tutor$1 | $2}}<br>{{#invoke: Render | entry | Movelist/entry.tutor |<br>{{Moveentry/tutor');
	str = str.replace(/\{\{[Mm]oveheader\/tutor\/([1-6])\|([yesno\|]+)\}\}/gi,
		'{{#invoke: Movelist/hf | tutor$1 | $2}}');
	str = str.replace(/\{\{[Mm]oveentry\/[Tt]utor\|(.+)\|?\}\}/g,
		'[[&euro;$1&pound;]]|');
	str = str.replace(/\{\{[Mm]oveheader\/(\w+)\|(\w+)\|([1-6])\|?(.*?)\}\}/g,
		'{{#invoke: Movelist/hf | $1h |$2|$3|$4}}<br>{{#invoke: Render | entry | Movelist/entry.$1 |');
	str = str.replace(/\{\{[Mm]ovefooter(\/[Tt]utor)?\|(\w+?)(\|[1-6])?\}\}/g,
		'}}<br>{{#invoke: Movelist/hf | footer | $2}}<br>');
	str = str.replace(/\{\{[Mm]oveentry\/\w+([1-6])\|(.+)\|?\}\}/g,
		'[[&euro;$1|$2&pound;]]|');
	str = str.replace(/\{\{[Mm]oveentry\|(.+)\|?\}\}/g,
		'[[&euro;$1&pound;]]|');
	str = str.replace(/\{\{[Mm]oveentryspeciale\|(.+)\|?\}\}/g,
		'[[&euro;$1&pound;]]|');
	str = str.replace(/\{\{(maschio|femmina)&pound;\]\]\}\}/gi,
		'|form=$1&pound;]]}}');
	str = str.replace(/\{\{(maschio|femmina)\}\}&pound;\]\]/gi,
		'|form=$1&pound;]]');
	str = str.replace(/\}\}&pound;\]\]/g, '&pound;]]}}');
	str = str.replace(/\|?\n?\}\}\n?\|?/g, '}}');

	// Traduzioni delle note del breed più ricorrenti

	str = str.replace(/Breed from TM or Move Tutor/gi,
		'I padri devono aver appreso la mossa tramite MT o Insegnamosse');
	str = str.replace(/chain breed(ing)?/gi, 'Catena di accoppiamenti');
	str = str.replace(/breed from (Gen [1-6IV]+) TM( in \w+)?/gi,
		function(str, gen, game) {
			return 'I padri devono aver appreso la mossa tramite MT nella '
				+ macros.generazioni(gen) + (game ? macros.giochi(game, true)
				: '');
	});

	return str;
};

macros.squadra = function(str) {

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

	str = str.replace(/gender=maschio/gi, "gender=male");
	str = str.replace(/gender=femmina/gi, "gender=female");
	str = str.replace(/type([1-2])?=[Pp]sichico/gi, "type$1=Psico");
	str = str.replace(/\{\{[Pp]arty\/[Ff]ooter\}\}/gi,
		'|}<br>|}&lt;br style="clear: left;"&gt;');
	str = str.replace(/\{\{[Pp]arty\|/gi, '{{#invoke: Squadra | squadra |');
	str = str.replace(/\{\{[Pp]arty\//gi, '{{#invoke: Squadra | ');
	str = str.replace(/Battle Point\|BP/gi, 'Punti Lotta|PL');
	str = str.replace(/\s*style="margin:\s*auto;?"\s*\|/gi, '');
	str = str.replace(/\{\{#invoke:\s*colore\s*\|\s*(.+?)\s*\|?\s*(light|dark|normale)?\s*\}\}/gi, '$1 $2');
	return str;
};

/*

Preparazione alla traduzione; elimina i template p
e formatta i character references in modo che non
siano interpretati dai browser

*/

var opening = function(str) {
	return str.replace(/\{\{p\|(.+)\}\}/g, '[[$1]]')
		.replace(/&(\w+);/g, '&amp;$1;');
};

/*

Completamento della traduzione: sostituisce i
newline con breakline per farli interpretare
dai browser

*/

var ending = function(str) {
	return str.replace(/\n+/g, '<br>');
};

var runMacro = function() {

	// Recupero della macro selezionata

	var macro = document.getElementsByTagName('select')[0];
	macro = macro.options[macro.selectedIndex].value;

	// Applicazione della macro

	var text = document.getElementsByTagName('textarea')[0].value;
	var output = document.getElementById('output');
	text = opening(text);
	text = macros[macro](text);
	output.innerHTML = ending(text);

	// Selezione del testo

	if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(output);
        range.select();
    }
    else if (window.getSelection) {
        var selection = window.getSelection();
        if (selection.setBaseAndExtent) {
            selection.setBaseAndExtent(text, 0, text, 1);
        }
        else {
            var range = document.createRange();
            range.selectNodeContents(output);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
};

document.getElementsByTagName('button')[0].onclick = runMacro;

/*

Creazione delle entries del menu sulla base
delle funzione di replacing precedentemente definite

*/

var menu = document.getElementsByTagName('select')[0];
for (var k in macros) {
	var option = document.createElement('option');
	option.setAttribute('value', k);
	option.appendChild(document.createTextNode('Traduci ' + k));
	menu.appendChild(option);
}
