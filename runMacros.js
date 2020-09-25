var macros = {}

macros.tipi = function(str) {

	// Tipi

	return str.replace(/grass/g, 'erba').replace(/Grass/g, 'Erba')
		.replace(/Water/g, 'Acqua').replace(/water/g, 'acqua')
		.replace(/Fire/g, 'Fuoco').replace(/fire/g, 'fuoco')
		.replace(/Flying/g, 'Volante').replace(/flying/g, 'volante')
		.replace(/Fighting/g, 'Lotta').replace(/fighting/g, 'lotta')
		.replace(/Ground/g, 'Terra').replace(/ground/g, 'terra')
		.replace(/Dark/g, 'Buio').replace(/dark/g, 'buio')
		.replace(/Dragon/g, 'Drago').replace(/dragon/g, 'drago')
		.replace(/Rock/g, 'Roccia').replace(/rock/g, 'roccia')
		.replace(/Poison/g, 'Veleno').replace(/poison/g, 'veleno')
		.replace(/Ghost/g, 'Spettro').replace(/ghost/g, 'spettro')
		.replace(/Psychic/g, 'Psico').replace(/psychic/g, 'psico')
		.replace(/Electric/g, 'Elettro').replace(/electric/g, 'elettro')
		.replace(/Steel/g, 'Acciaio').replace(/steel/g, 'acciaio')
		.replace(/Normal/g, 'Normale').replace(/normal/g, 'normale')
		.replace(/Bug/g, 'Coleottero').replace(/bug/g, 'coleottero')
		.replace(/Fairy/g, 'Folletto').replace(/fairy/g, 'folletto')
		.replace(/Unknown/g, 'Sconosciuto').replace(/unknown/g, 'sconosciuto')
		.replace(/Shadow/g, 'Ombra').replace(/shadow/g, 'ombra')

	// Ghiaccio va trattato a parte, visto che '-ice-' si trova spesso in giro

		.replace(/ice color/g, 'ghiaccio color')
		.replace(/\|[\s\n]*[Ii]ce[\s\n]*\|[Ii]ce[\s\n]*\|/g, '|Ghiaccio|Ghiaccio|')
		.replace(/\|[\s\n]*[Ii]ce[\n\s]*\|/g, '|Ghiaccio|')
		.replace(/=[\s\n]*[Ii]ce[\s\n]*\|/g, '=Ghiaccio|')
		.replace(/=[\s\n]*[Ii]ce[\s\n]*\}/g, '=Ghiaccio}')
		.replace(/\|[\s\n]*[Ii]ce[\s\n]*\}/g, '|Ghiaccio}')
		.replace(/\{[\s\n]*[Ii]ce[\s\n]*\|/g, '{Ghiaccio|')

	// Categorie danno

		.replace(/Special/g, 'Speciale').replace(/special/g, 'speciale')
		.replace(/Status/g, 'Stato').replace(/status/g, 'stato')
		.replace(/Physical/g, 'Fisico').replace(/physical/g, 'fisico')

	// Correzione errori

		.replace(/Voloing/g, 'Volante').replace(/voloing/g, 'volante')
		.replace(/backterra/g, 'background')
		.replace(/Clefolletto/g, 'Clefairy')
		.replace(/Scattercoleottero/g, 'Scatterbug')
		.replace(/Charjacoleottero/g, 'Charjabug')
		.replace(/Regiroccia/g, 'Regirock')
		.replace(/Buiorai/g, 'Darkrai')
		.replace(/Acciaioix/g, 'Steelix')
		.replace(/Regiacciaio/g, 'Registeel')
		.replace(/Solroccia/g, 'Solrock')
		.replace(/Dragoair/g, 'Dragonair')
		.replace(/Dragoite/g, 'Dragonite')
		.replace(/Dynadragoe/g, 'Dynadragone')
		.replace(/Charjacoleottero/g, 'Charjabug')
		.replace(/Rocciaruff/g, 'Rockruff')
		.replace(/Erbaospesso/gi, 'Grassospesso')
		.replace(/[Pp]sichico\|[Ff]isico/g, 'Psico|Fisico')
		.replace(/[Pp]sichico\|[Ss]peciale/g, 'Psico|Speciale')
		.replace(/[Pp]sichico\|[Ss]tato/g, 'Psico|Stato')
		.replace(/specialee/g, 'speciale').replace(/Specialee/g, 'Speciale')
		.replace(/Normalee/g, 'Normale').replace(/normalee/g, 'normale')
		.replace(/Gale of [Bb]uioness/gi, 'Tempesta Oscura')
		.replace(/colore\s*\|?\s*(.+?)\s*\|?\s*buio\s*\}\}/gi,
				'colore | $1 | dark }}')

  // Errori dei Cristalli Z

		.replace(/Coleotteroinium Z/gi, 'Insectium Z')
		.replace(/Buioinium Z/gi, 'Obscurium Z')
		.replace(/Dragoium Z/gi, 'Draconium Z')
		.replace(/Spettroium Z/gi, 'Spectrium Z')
		.replace(/Erbaium Z/gi, 'Herbium Z')
		.replace(/Terraium Z/gi, 'Terrium Z')
		.replace(/Normaleium Z/gi, 'Normium Z')
		.replace(/Velenoium Z/gi, 'Venenium Z')
		.replace(/Rocciaium Z/gi, 'Petrium Z')
		.replace(/Acciaioium Z/gi, 'Metallium Z')
		.replace(/Acquaium Z/gi, 'Idrium Z')
};

macros.mosse = function(str) {

	// Mosse

	return str.replace(/Absorb/gi, 'Assorbimento')
		.replace(/Acid Spray/g, 'Acidobomba')
		.replace(/Acid Armor/gi, 'Scudo Acido')
		.replace(/Gastro Acid/gi, 'Gastroacido')
		.replace(/Acid/gi, 'Acido')
		.replace(/Acupressure/gi, 'Acupressione')
		.replace(/Aerial Ace/gi, 'Aeroassalto')
		.replace(/Aeroblast/gi, 'Aerocolpo')
		.replace(/Agility/gi, 'Agilit&agrave')
		.replace(/Air Cutter/gi, 'Aerasoio')
		.replace(/Air Slash/gi, 'Eterelama')
		.replace(/Amnesia/gi, 'Amnesia')
		.replace(/Ancient\s?power/gi, 'Forzantica')
		.replace(/Aqua Jet/gi, 'Acquagetto')
		.replace(/Aqua Ring/gi, 'Acquanello')
		.replace(/Aqua Tail/gi, 'Idrondata')
		.replace(/Arm Thrust/gi, 'Sberletese')
		.replace(/Aromatherapy/gi, 'Aromaterapia')
		.replace(/Assist/gi, 'Assistente')
		.replace(/Assurance/gi, 'Garanzia')
		.replace(/Astonish/gi, 'Sgomento')
		.replace(/Attack Order/gi, 'Comandourto')
		.replace(/Attract/gi, 'Attrazione')
		.replace(/Aura Sphere/gi, 'Forzasfera')
		.replace(/Aurora Beam/gi, 'Raggiaurora')
		.replace(/Avalanche/gi, 'Slavina')
		.replace(/Barrage/gi, 'Attacco Pioggia')
		.replace(/Barrier/gi, 'Barriera')
		.replace(/Baton Pass/gi, 'Staffetta')
		.replace(/Beat Up/gi, 'Picchiaduro')
		.replace(/Belly Drum/gi, 'Panciamburo')
		.replace(/Bide/gi, 'Pazienza')
		.replace(/Bind/gi, 'Legatutto')
		.replace(/Bug Bite/gi, 'Coleomorso')
		.replace(/Bite/gi, 'Morso')
		.replace(/Blast Burn/gi, 'Incendio')
		.replace(/Blaze Kick/gi, 'Calciardente')
		.replace(/Petal Blizzard/g, 'Fiortempesta')
		.replace(/Blizzard/gi, 'Bora')
		.replace(/Heal Block/gi, 'Anticura')
		.replace(/Mat Block/g, 'Ribaltappeto')
		.replace(/Block/gi, 'Blocco')
		.replace(/Body Slam/gi, 'Corposcontro')
		.replace(/Bone Club/gi, 'Ossoclava')
		.replace(/Bone Rush/gi, 'Ossoraffica')
		.replace(/Bonemerang/gi, 'Ossomerang')
		.replace(/Bounce/gi, 'Rimbalzo')
		.replace(/Brave Bird/gi, 'Baldeali')
		.replace(/Brick Break/gi, 'Breccia')
		.replace(/Brine/gi, 'Acquadisale')
		.replace(/Bubble\s?beam/gi, 'Bollaraggio')
		.replace(/Bubble/gi, 'Bolla')
		.replace(/Bug Buzz/gi, 'Ronzio')
		.replace(/Bulk Up/gi, 'Granfisico')
		.replace(/Bullet Punch/gi, 'Pugnoscarica')
		.replace(/Bullet Seed/gi, 'Semitraglia')
		.replace(/Calm Mind/gi, 'Calmamente')
		.replace(/Camouflage/gi, 'Camuffamento')
		.replace(/Captivate/gi, 'Incanto')
		.replace(/Charge Beam/gi, 'Raggioscossa')
		.replace(/Discharge/gi, 'Scarica')
		.replace(/Flame Charge/g, 'Nitrocarica')
		.replace(/Head Charge/g, 'Ricciolata')
		.replace(/Parabolic Charge/g, 'Caricaparabola')
		.replace(/Wild Charge/g, 'Sprizzalampo')
		.replace(/Charge/gi, 'Sottocarica')
		.replace(/Charm/gi, 'Fascino')
		.replace(/Chatter/gi, 'Schiamazzo')
		.replace(/Clamp/gi, 'Tenaglia')
		.replace(/Close Combat/gi, 'Zuffa')
		.replace(/Comet Punch/gi, 'Cometapugno')
		.replace(/Confuse Ray/gi, 'Stordiraggio')
		.replace(/Confusion/gi, 'Confusione')
		.replace(/Constrict/gi, 'Limitazione')
		.replace(/Conversion/gi, 'Conversione')
		.replace(/Conversione 2/gi, 'Conversione2')
		.replace(/Copycat/gi, 'Copione')
		.replace(/Cosmic Power/gi, 'Cosmoforza')
		.replace(/Cotton Spore/gi, 'Cottonspora')
		.replace(/Counter/gi, 'Contrattacco')
		.replace(/Covet/gi, 'Supplica')
		.replace(/Crabhammer/gi, 'Martellata')
		.replace(/Cross Chop/gi, 'Incrocolpo')
		.replace(/Cross Poison/gi, 'Velenocroce')
		.replace(/Crunch/gi, 'Sgranocchio')
		.replace(/Crush Claw/gi, 'Tritartigli')
		.replace(/Crush Grip/gi, 'Sbriciolmano')
		.replace(/Forest['’]s Curse/g, 'Boscomalocchio')
		.replace(/FoRiposo['’]s Curse/g, 'Boscomalocchio')
		.replace(/FoRiposo['’]s Maledizione/g, 'Boscomalocchio')
		.replace(/Curse/gi, 'Maledizione')
		.replace(/Fury Cutter/gi, 'Tagliofuria')
		.replace(/Psycho Cut/gi, 'Psicotaglio')
		.replace(/Sky Uppercut/gi, 'Stramontante')
		.replace(/Cut/gi, 'Taglio')
		.replace(/Dark Pulse/gi, 'Neropulsar')
		.replace(/Dark Void/gi, 'Vuototetro')
		.replace(/Defense Curl/gi, 'Ricciolscudo')
		.replace(/Defend Order/gi, 'Comandoscudo')
		.replace(/Defog/gi, 'Scacciabruma')
		.replace(/Destiny Bond/gi, 'Destinobbligato')
		.replace(/Detect/gi, 'Individua')
		.replace(/Dig/gi, 'Fossa')
		.replace(/Disable/gi, 'Inibitore')
		.replace(/Dive/gi, 'Sub')
		.replace(/Dizzy Punch/gi, 'Stordipugno')
		.replace(/Doom Desire/gi, 'Obbliderio')
		.replace(/Double Hit/gi, 'Doppiosmash')
		.replace(/Double Kick/gi, 'Doppiocalcio')
		.replace(/Double Team/gi, 'Doppioteam')
		.replace(/Double-edge/gi, 'Sdoppiatore')
		.replace(/Double\s?slap/gi, 'Doppiasberla')
		.replace(/Draco Meteor/gi, 'Dragobolide')
		.replace(/Dragon Claw/gi, 'Dragartigli')
		.replace(/Dragon Dance/gi, 'Dragodanza')
		.replace(/Dragon Pulse/gi, 'Dragopulsar')
		.replace(/Dragon Rage/gi, 'Ira di Drago')
		.replace(/Dragon Rush/gi, 'Dragofuria')
		.replace(/Dragon\s?breath/gi, 'Dragospiro')
		.replace(/Drain Punch/gi, 'Assorbipugno')
		.replace(/Dream Eater/gi, 'Mangiasogni')
		.replace(/Drill Peck/gi, 'Perforbecco')
		.replace(/Dynamic\s?punch/gi, 'Dinamipugno')
		.replace(/Earth Power/gi, 'Geoforza')
		.replace(/Earthquake/gi, 'Terremoto')
		.replace(/Egg Bomb/gi, 'Uovobomba')
		.replace(/Embargo/gi, 'Divieto')
		.replace(/Ember/gi, 'Braciere')
		.replace(/Encore/gi, 'Ripeti')
		.replace(/Endeavor/gi, 'Rimonta')
		.replace(/Endure/gi, 'Resistenza')
		.replace(/Energy Ball/gi, 'Energipalla')
		.replace(/Steam Eruption/g, 'Vaporscoppio')
		.replace(/Eruption/gi, 'Eruzione')
		.replace(/Explosion/gi, 'Esplosione')
		.replace(/Extrasensory/gi, 'Extrasenso')
		.replace(/Extreme\s?speed/gi, 'Extrarapido')
		.replace(/Facade/gi, 'Facciata')
		.replace(/F[ae]int Attack/gi, 'Finta')
		.replace(/Fake Out/gi, 'Bruciapelo')
		.replace(/Fake Tears/gi, 'Falselacrime')
		.replace(/False Swipe/gi, 'Falsofinale')
		.replace(/Feather\s?dance/gi, 'Danzadipiume')
		.replace(/Feint/gi, 'Fintoattacco')
		.replace(/Fire Blast/gi, 'Fuocobomba')
		.replace(/Fire Fang/gi, 'Rogodenti')
		.replace(/Fire Punch/gi, 'Fuocopugno')
		.replace(/Fire Spin/gi, 'Turbofuoco')
		.replace(/Fissure/gi, 'Abisso')
		.replace(/Flail/gi, 'Flagello')
		.replace(/Flame Wheel/gi, 'Ruotafuoco')
		.replace(/Flamethrower/gi, 'Lanciafiamme')
		.replace(/Flare Blitz/gi, 'Fuococarica')
		.replace(/Flash/gi, 'Flash')
		.replace(/Flash Cannon/gi, 'Cannonflash')
		.replace(/Flatter/gi, 'Adulazione')
		.replace(/Fling/gi, 'Lancio')
		.replace(/Flying Press/g, 'Schiacciatuffo')
		.replace(/Fly/gi, 'Volo')
		.replace(/Focus Blast/gi, 'Focalcolpo')
		.replace(/Focus Energy/gi, 'Focalenergia')
		.replace(/Focus Punch/gi, 'Centripugno')
		.replace(/Follow Me/gi, 'Sonoqui')
		.replace(/Force Palm/gi, 'Palmoforza')
		.replace(/Foresight/gi, 'Preveggenza')
		.replace(/Frenzy Plant/gi, 'Radicalbero')
		.replace(/Frustration/gi, 'Frustrazione')
		.replace(/Fury Attack/gi, 'Furia')
		.replace(/Fury Swipes/gi, 'Sfuriate')
		.replace(/Future Sight/gi, 'Divinazione')
		.replace(/Giga Drain/gi, 'Gigassorbimento')
		.replace(/Giga Impact/gi, 'Gigaimpatto')
		.replace(/Glare/gi, 'Sguardo Feroce')
		.replace(/Grass Knot/gi, 'Laccioerboso')
		.replace(/Grass\s?whistle/gi, 'Meloderba')
		.replace(/Gravity/gi, 'Gravit&agrave')
		.replace(/Growl/gi, 'Ruggito')
		.replace(/Growth/g, 'Crescita')
		.replace(/Grudge/gi, 'Rancore')
		.replace(/Guard Swap/gi, 'Barattoscudo')
		.replace(/Guillotine/gi, 'Ghigliottina')
		.replace(/Gunk Shot/gi, 'Sporcolancio')
		.replace(/Gust/gi, 'Raffica')
		.replace(/Gyro Ball/gi, 'Vortexpalla')
		.replace(/Hail/gi, 'Grandine')
		.replace(/Hammer Arm/gi, 'Martelpugno')
		.replace(/Harden/gi, 'Rafforzatore')
		.replace(/Haze/gi, 'Nube')
		.replace(/Head Smash/gi, 'Zuccata')
		.replace(/Zen Headbutt/gi, 'Cozzata Zen')
		.replace(/Headbutt/gi, 'Bottintesta')
		.replace(/Heal Bell/gi, 'Rintoccasana')
		.replace(/Heal Order/gi, 'Comandocura')
		.replace(/Healing Wish/gi, 'Curardore')
		.replace(/Heart Swap/gi, 'Cuorbaratto')
		.replace(/Heat Wave/gi, 'Ondacalda')
		.replace(/Heavy Slam/g, 'Pesobomba')
		.replace(/Helping Hand/gi, 'Altruismo')
		.replace(/(Hi|High) Jump Kick/gi, 'Calcinvolo')
		.replace(/Hidden Power/gi, 'Introforza')
		.replace(/Hone Claws/g, 'Unghiaguzze')
		.replace(/Horn Attack/gi, 'Incornata')
		.replace(/Horn Drill/gi, 'Perforcorno')
		.replace(/Howl/gi, 'Gridodilotta')
		.replace(/Hydro Cannon/gi, 'Idrocannone')
		.replace(/Hydro Pump/gi, 'Idropompa')
		.replace(/Hyper Beam/gi, 'Iper Raggio')
		.replace(/Hyper Fang/gi, 'Iperzanna')
		.replace(/Hyper Voice/gi, 'Granvoce')
		.replace(/Hypnosis/gi, 'Ipnosi')
		.replace(/Ice Ball/gi, 'Palla Gelo')
		.replace(/Ice Beam/gi, 'Geloraggio')
		.replace(/Ice Fang/gi, 'Gelodenti')
		.replace(/Ice Punch/gi, 'Gelopugno')
		.replace(/Ice Shard/gi, 'Geloscheggia')
		.replace(/Icicle Spear/gi, 'Gelolancia')
		.replace(/Icy Wind/gi, 'Ventogelato')
		.replace(/Imprison/gi, 'Esclusiva')
		.replace(/Ingrain/gi, 'Radicamento')
		.replace(/Ion Deluge/gi, 'Pioggiaplasma')
		.replace(/Iron Defense/gi, 'Ferroscudo')
		.replace(/Iron Head/gi, 'Metaltestata')
		.replace(/Iron Tail/gi, 'Codacciaio')
		.replace(/Judgment/gi, 'Giudizio')
		.replace(/Jump Kick/gi, 'Calciosalto')
		.replace(/Karate Chop/gi, 'Colpokarate')
		.replace(/Telekinesis/g, 'Telecinesi')
		.replace(/Kinesis/gi, 'Cin&egravesi')
		.replace(/Knock Off/gi, 'Privazione')
		.replace(/Last Resort/gi, 'Ultimascelta')
		.replace(/Lava Plume/gi, 'Lavasbuffo')
		.replace(/Leaf Blade/gi, 'Fendifoglia')
		.replace(/Leaf Storm/gi, 'Verdebufera')
		.replace(/Leech Life/gi, 'Sanguisuga')
		.replace(/Leech Seed/gi, 'Parassiseme')
		.replace(/Leer/gi, 'Fulmisguardo')
		.replace(/Lick/gi, 'Leccata')
		.replace(/Light Screen/gi, 'Schermoluce')
		.replace(/Lock-on/gi, 'Localizza')
		.replace(/Lovely Kiss/gi, 'Demonbacio')
		.replace(/Low Kick/gi, 'Colpo Basso')
		.replace(/Lucky Chant/gi, 'Fortuncanto')
		.replace(/Lunar Dance/gi, 'Lunardanza')
		.replace(/Luster Purge/gi, 'Abbagliante')
		.replace(/Mach Punch/gi, 'Pugnorapido')
		.replace(/Magic Coat/gi, 'Magivelo')
		.replace(/Magical Leaf/gi, 'Fogliamagica')
		.replace(/Magma Storm/gi, 'Magmaclisma')
		.replace(/Magnet Bomb/gi, 'Bombagnete')
		.replace(/Magnet Rise/gi, 'Magnetascesa')
		.replace(/Magnitude/gi, 'Magnitudo')
		.replace(/Me First/gi, 'Precedenza')
		.replace(/Mean Look/gi, 'Malosguardo')
		.replace(/Meditate/gi, 'Meditazione')
		.replace(/Mega Drain/gi, 'Megassorbimento')
		.replace(/Mega Kick/gi, 'Megacalcio')
		.replace(/Mega Punch/gi, 'Megapugno')
		.replace(/Megahorn/gi, 'Megacorno')
		.replace(/Memento/gi, 'Memento')
		.replace(/Metal Burst/gi, 'Metalscoppio')
		.replace(/Metal Claw/gi, 'Ferrartigli')
		.replace(/Metal Sound/gi, 'Ferrostrido')
		.replace(/Meteor Mash/gi, 'Meteorpugno')
		.replace(/Metronome/gi, 'Metronomo')
		.replace(/Milk Drink/gi, 'Buonlatte')
		.replace(/Mimic/gi, 'Mimica')
		.replace(/Mind Reader/gi, 'Leggimente')
		.replace(/Minimize/gi, 'Minimizzato')
		.replace(/Miracle Eye/gi, 'Miracolvista')
		.replace(/Mirror Coat/gi, 'Specchiovelo')
		.replace(/Mirror Move/gi, 'Speculmossa')
		.replace(/Mirror Shot/gi, 'Cristalcolpo')
		.replace(/Mist Ball/gi, 'Foschisfera')
		.replace(/Misty Terrain/g, 'Campo Nebbioso')
		.replace(/Aromatic Mist/g, 'Nebularoma')
		.replace(/Mist/gi, 'Nebbia')
		.replace(/Moonlight/gi, 'Lucelunare')
		.replace(/Morning Sun/gi, 'Mattindoro')
		.replace(/Mud Bomb/gi, 'Pantanobomba')
		.replace(/Mud Shot/gi, 'Colpodifango')
		.replace(/Mud Sport/gi, 'Fangata')
		.replace(/Mud-slap/gi, 'Fangosberla')
		.replace(/Muddy Water/gi, 'Fanghiglia')
		.replace(/Nasty Plot/gi, 'Congiura')
		.replace(/Natural Gift/gi, 'Dononaturale')
		.replace(/Nature Power/gi, 'Naturforza')
		.replace(/Needle Arm/gi, 'Pugnospine')
		.replace(/Night Shade/gi, 'Ombra Notturna')
		.replace(/Night Slash/gi, 'Nottesferza')
		.replace(/Nightmare/gi, 'Incubo')
		.replace(/Octazooka/gi, 'Octazooka')
		.replace(/Odor Sleuth/gi, 'Segugio')
		.replace(/Ominous Wind/gi, 'Funestovento')
		.replace(/Outrage/gi, 'Oltraggio')
		.replace(/Overheat/gi, 'Vampata')
		.replace(/Pain Split/gi, 'Malcomune')
		.replace(/Pay Day/gi, 'Giornopaga')
		.replace(/Payback/gi, 'Rivincita')
		.replace(/Peck/gi, 'Beccata')
		.replace(/Perish Song/gi, 'Ultimocanto')
		.replace(/Petal Dance/gi, 'Petalodanza')
		.replace(/Pin Missile/gi, 'Missilspillo')
		.replace(/Pluck/gi, 'Spennata')
		.replace(/Poison Fang/gi, 'Velenodenti')
		.replace(/Poison Gas/gi, 'Velenogas')
		.replace(/Poison Jab/gi, 'Velenpuntura')
		.replace(/Poison Sting/gi, 'Velenospina')
		.replace(/Poison Tail/gi, 'Velenocoda')
		.replace(/Poison\s?powder/gi, 'Velenpolvere')
		.replace(/Pound/gi, 'Botta')
		.replace(/Powder Snow/gi, 'Polneve')
		.replace(/Power Gem/gi, 'Gemmoforza')
		.replace(/Power Swap/gi, 'Barattoforza')
		.replace(/Power Whip/gi, 'Vigorcolpo')
		.replace(/Present/gi, 'Regalino')
		.replace(/Protect/gi, 'Protezione')
		.replace(/Psybeam/gi, 'Psicoraggio')
		.replace(/Psych Up/gi, 'Psicamis&ugrave')
		.replace(/Psychic/gi, 'Psichico')
		.replace(/Psycho Boost/gi, 'Psicoslancio')
		.replace(/Psycho Shift/gi, 'Psicotrasfer')
		.replace(/Psyshock/g, 'Psicoshock')
		.replace(/Psywave/gi, 'Psiconda')
		.replace(/Punishment/gi, 'Punizione')
		.replace(/Pursuit/gi, 'Inseguimento')
		.replace(/Quick Attack/gi, 'Attacco Rapido')
		.replace(/Rage Powder/g, 'Polverabbia')
		.replace(/Rage/gi, 'Ira')
		.replace(/Rain Dance/gi, 'Pioggiadanza')
		.replace(/Rapid Spin/gi, 'Rapigiro')
		.replace(/Razor Leaf/gi, 'Foglielama')
		.replace(/Razor Wind/gi, 'Ventagliente')
		.replace(/Recover/gi, 'Ripresa')
		.replace(/Recycle/gi, 'Riciclo')
		.replace(/Reflect Type/g, 'Riflettipo')
		.replace(/Reflect/gi, 'Riflesso')
		.replace(/Refresh/gi, 'Rinfrescata')
		.replace(/Rest/gi, 'Riposo')
		.replace(/Heart Stamp/g, 'Cuorestampo')
		.replace(/Return/gi, 'Ritorno')
		.replace(/Revenge/gi, 'Vendetta')
		.replace(/Reversal/gi, 'Contropiede')
		.replace(/Roar Of Time/gi, 'Fragortempo')
		.replace(/Uproar/gi, 'Baraonda')
		.replace(/Noble Roar/g, 'Urlo')
		.replace(/Roar/gi, 'Boato')
		.replace(/Rock Blast/gi, 'Cadutamassi')
		.replace(/Rock Climb/gi, 'Scalaroccia')
		.replace(/Rock Polish/gi, 'Lucidatura')
		.replace(/Rock Slide/gi, 'Frana')
		.replace(/Rock Smash/gi, 'Spaccaroccia')
		.replace(/Rock Throw/gi, 'Sassata')
		.replace(/Rock Tomb/gi, 'Rocciotomba')
		.replace(/Rock Wrecker/gi, 'Devastomasso')
		.replace(/Role Play/gi, 'Giocodiruolo')
		.replace(/Rolling Kick/gi, 'Calciorullo')
		.replace(/Rollout/gi, 'Rotolamento')
		.replace(/Roost/gi, 'Trespolo')
		.replace(/Sacred Fire/gi, 'Magifuoco')
		.replace(/Safeguard/gi, 'Salvaguardia')
		.replace(/Sand Tomb/gi, 'Sabbiotomba')
		.replace(/Sand[-\s]attack/gi, 'Turbosabbia')
		.replace(/Sandstorm/gi, 'Terrempesta')
		.replace(/Scary Face/gi, 'Visotruce')
		.replace(/Scratch/gi, 'Graffio')
		.replace(/Screech/gi, 'Stridio')
		.replace(/Secret Power/gi, 'Forzasegreta')
		.replace(/Seed Bomb/gi, 'Semebomba')
		.replace(/Seed Flare/gi, 'Infuriaseme')
		.replace(/Seismic Toss/gi, 'Movimento Sismico')
		.replace(/Self-?destruct/gi, 'Autodistruzione')
		.replace(/Shadow Ball/gi, 'Palla Ombra')
		.replace(/Shadow Claw/gi, 'Ombrartigli')
		.replace(/Shadow Force/gi, 'Oscurotuffo')
		.replace(/Shadow Punch/gi, 'Pugnodombra')
		.replace(/Shadow Sneak/gi, 'Furtivombra')
		.replace(/Sharpen/gi, 'Affilatore')
		.replace(/Sheer Cold/gi, 'Purogelo')
		.replace(/Shock Wave/gi, 'Ondashock')
		.replace(/Signal Beam/gi, 'Segnoraggio')
		.replace(/Silver Wind/gi, 'Ventargenteo')
		.replace(/Sing/gi, 'Canto')
		.replace(/Sketch/gi, 'Schizzo')
		.replace(/Skill Swap/gi, 'Baratto')
		.replace(/Skull Bash/gi, 'Capocciata')
		.replace(/Sky Attack/gi, 'Aeroattacco')
		.replace(/Slack Off/gi, 'Pigro')
		.replace(/Slam/gi, 'Schianto')
		.replace(/Slash/gi, 'Lacerazione')
		.replace(/Sleep Powder/gi, 'Sonnifero')
		.replace(/Sleep Talk/gi, 'Sonnolalia')
		.replace(/Sludge Bomb/gi, 'Fangobomba')
		.replace(/Sludge Wave/g, 'Fangonda')
		.replace(/Sludge/gi, 'Fango')
		.replace(/Smelling\s?salts?/gi, 'Maniereforti')
		.replace(/Smokescreen/gi, 'Muro di Fumo')
		.replace(/Snatch/gi, 'Scippo')
		.replace(/Snore/gi, 'Russare')
		.replace(/Soft-?boiled/gi, 'Covauova')
		.replace(/Solar\s?beam/gi, 'Solarraggio')
		.replace(/Sonic\s?boom/gi, 'Sonicboom')
		.replace(/Spacial Rend/gi, 'Fendispazio')
		.replace(/Spark/gi, 'Scintilla')
		.replace(/Spider Web/gi, 'Ragnatela')
		.replace(/Spike Cannon/gi, 'Sparalance')
		.replace(/Toxic Spikes/gi, 'Fielepunte')
		.replace(/Spikes/gi, 'Punte')
		.replace(/Spit Up/gi, 'Sfoghenergia')
		.replace(/Spite/gi, 'Dispetto')
		.replace(/Stun Spore/gi, 'Paralizzante')
		.replace(/Spore/gi, 'Spora')
		.replace(/Stealth Rock/gi, 'Levitoroccia')
		.replace(/Steel Wing/gi, 'Alacciaio')
		.replace(/Stockpile/gi, 'Accumulo')
		.replace(/Stomp/gi, 'Pestone')
		.replace(/Stone Edge/gi, 'Pietrataglio')
		.replace(/Strength/gi, 'Forza')
		.replace(/String Shot/gi, 'Millebave')
		.replace(/Struggle Bug/g, 'Entomoblocco')
		.replace(/Struggle/gi, 'Scontro')
		.replace(/Submission/gi, 'Sottomissione')
		.replace(/Substitute/gi, 'Sostituto')
		.replace(/Sucker Punch/gi, 'Sbigoattacco')
		.replace(/Sunny Day/gi, 'Giornodisole')
		.replace(/Super Fang/gi, 'Superzanna')
		.replace(/Superpower/gi, 'Troppoforte')
		.replace(/Supersonic/gi, 'Supersuono')
		.replace(/Surf/gi, 'Surf')
		.replace(/Swagger/gi, 'Bullo')
		.replace(/Swallow/gi, 'Introenergia')
		.replace(/Sweet Kiss/gi, 'Dolcebacio')
		.replace(/Sweet Scent/gi, 'Profumino')
		.replace(/Swift/gi, 'Comete')
		.replace(/Switcheroo/gi, 'Rapidscambio')
		.replace(/Swords Dance/gi, 'Danzaspada')
		.replace(/Synthesis/gi, 'Sintesi')
		.replace(/Volt Tackle/gi, 'Locomovolt')
		.replace(/Tackle/gi, 'Azione')
		.replace(/Tail Glow/gi, 'Codadiluce')
		.replace(/Tail Whip/gi, 'Colpocoda')
		.replace(/Tailwind/gi, 'Ventoincoda')
		.replace(/Take Down/gi, 'Riduttore')
		.replace(/Taunt/gi, 'Provocazione')
		.replace(/Teeter Dance/gi, 'Strampadanza')
		.replace(/Teleport/gi, 'Teletrasporto')
		.replace(/Thief/gi, 'Furto')
		.replace(/Thrash/gi, 'Colpo')
		.replace(/Thunder Fang/gi, 'Fulmindenti')
		.replace(/Thunder Wave/gi, 'Tuononda')
		.replace(/Thunderbolt/gi, 'Fulmine')
		.replace(/Thunder\s?punch/gi, 'Tuonopugno')
		.replace(/Thunder\s?shock/gi, 'Tuonoshock')
		.replace(/Thunder/gi, 'Tuono')
		.replace(/Tickle/gi, 'Solletico')
		.replace(/Torment/gi, 'Attaccalite')
		.replace(/Toxic/gi, 'Tossina')
		.replace(/Transform/gi, 'Trasformazione')
		.replace(/Tri Attack/gi, 'Tripletta')
		.replace(/Power Trick/gi, 'Ingannoforza')
		.replace(/Trick Room/gi, 'Distortozona')
		.replace(/Trick-or-Treat/g, 'Halloween')
		.replace(/Trick/gi, 'Raggiro')
		.replace(/Triple Kick/gi, 'Triplocalcio')
		.replace(/Trump Card/gi, 'Asso')
		.replace(/Twineedle/gi, 'Doppio Ago')
		.replace(/Twister/gi, 'Tornado')
		.replace(/U-turn/gi, 'Retromarcia')
		.replace(/Vacuum Wave/gi, 'Vuotonda')
		.replace(/Vi[cs]e\s?grip/gi, 'Presa')
		.replace(/Vine Whip/gi, 'Frustata')
		.replace(/Vital Throw/gi, 'Vitaltiro')
		.replace(/Wake-up Slap/gi, 'Svegliopacca')
		.replace(/Water Gun/gi, 'Pistolacqua')
		.replace(/Water Pulse/gi, 'Idropulsar')
		.replace(/Water Sport/gi, 'Docciascudo')
		.replace(/Water Spout/gi, 'Zampillo')
		.replace(/Waterfall/gi, 'Cascata')
		.replace(/Weather Ball/gi, 'Palla Clima')
		.replace(/Wide Guard/g, 'Bodyguard')
		.replace(/Whirlpool/gi, 'Mulinello')
		.replace(/Whirlwind/gi, 'Turbine')
		.replace(/Will-O-Wisp/gi, 'Fuocofatuo')
		.replace(/Wing Attack/gi, "Attacco d'Ala")
		.replace(/Wish/gi, 'Desiderio')
		.replace(/Withdraw/gi, 'Ritirata')
		.replace(/Wood Hammer/gi, 'Mazzuolegno')
		.replace(/Worry Seed/gi, 'Affannoseme')
		.replace(/Wrap/gi, 'Avvolgibotta')
		.replace(/Wring Out/gi, 'Strizzata')
		.replace(/X-scissor/gi, 'Forbice X')
		.replace(/Yawn/gi, 'Sbadiglio')
		.replace(/Zap Cannon/gi, 'Falcecannone')
		.replace(/Guard Split/g, 'Paridifesa')
		.replace(/Power Split/g, 'Pariattacco')
		.replace(/Wonder Room/g, 'Mirabilzona')
		.replace(/Venoshock/g, 'Velenoshock')
		.replace(/Autotomize/g, 'Sganciapesi')
		.replace(/Magic Room/g, 'Magicozona')
		.replace(/Smack Down/g, 'Abbattimento')
		.replace(/Storm Throw/g, 'Tempestretta')
		.replace(/Flame Burst/g, 'Pirolancio')
		.replace(/Quiver Dance/g, 'Eledanza')
		.replace(/Synchronoise/g, 'Sincrumore')
		.replace(/Electro Ball/g, 'Energisfera')
		.replace(/Soak/g, 'Inondazione')
		.replace(/Coil/g, 'Arrotola')
		.replace(/Low Sweep/g, 'Calciobasso')
		.replace(/Foul Play/g, 'Ripicca')
		.replace(/Simple Beam/g, 'Ondisinvolta')
		.replace(/Entrainment/g, 'Saltamicizia')
		.replace(/After You/g, 'Cortesia')
		.replace(/Round/g, 'Coro')
		.replace(/Echoed Voice/g, 'Echeggiavoce')
		.replace(/Chip Away/g, 'Insidia')
		.replace(/Clear Smog/g, 'Pulifumo')
		.replace(/Stored Power/g, 'Veicolaforza')
		.replace(/Quick Guard/g, 'Anticipo')
		.replace(/Ally Switch/g, 'Cambiaposto')
		.replace(/Scald/g, 'Idrovampata')
		.replace(/Shell Smash/g, 'Gettaguscio')
		.replace(/Heal Pulse/g, 'Ondasana')
		.replace(/Hex/g, 'Sciagura')
		.replace(/Sky Drop/g, 'Cadutalibera')
		.replace(/Shift Gear/g, 'Cambiomarcia')
		.replace(/Circle Throw/g, 'Ribaltiro')
		.replace(/Incinerate/g, 'Bruciatutto')
		.replace(/Quash/g, 'Spintone')
		.replace(/Acrobatics/g, 'Acrobazia')
		.replace(/Retaliate/g, 'Nemesi')
		.replace(/Final Gambit/g, 'Azzardo')
		.replace(/Bestow/g, 'Cediregalo')
		.replace(/Inferno/g, 'Marchiatura')
		.replace(/Water Pledge/g, 'Acquapatto')
		.replace(/Fire Pledge/g, 'Fiammapatto')
		.replace(/Grass Pledge/g, 'Erbapatto')
		.replace(/Volt Switch/g, 'Invertivolt')
		.replace(/Bulldoze/g, 'Battiterra')
		.replace(/Frost Breath/g, 'Alitogelido')
		.replace(/Dragon Tail/g, 'Codadrago')
		.replace(/Work Up/g, 'Cuordileone')
		.replace(/Electroweb/g, 'Elettrotela')
		.replace(/Drill Run/g, 'Giravvita')
		.replace(/Dual Chop/g, 'Doppiocolpo')
		.replace(/Horn Leech/g, 'Legnicorno')
		.replace(/Sacred Sword/g, 'Spadasolenne')
		.replace(/Razor Shell/g, 'Conchilama')
		.replace(/Heat Crash/g, 'Marchiafuoco')
		.replace(/Leaf Tornado/g, 'Vorticerba')
		.replace(/Steamroller/g, 'Rulloduro')
		.replace(/Cotton Guard/g, 'Cotonscudo')
		.replace(/Night Daze/g, 'Urtoscuro')
		.replace(/Psystrike/g, 'Psicobotta')
		.replace(/Tail Slap/g, 'Spazzasberla')
		.replace(/Hurricane/g, 'Tifone')
		.replace(/Gear Grind/g, 'Ingracolpo')
		.replace(/Searing Shot/g, 'Sparafuoco')
		.replace(/Techno Blast/g, 'Tecnobotto')
		.replace(/Relic Song/g, 'Cantoantico')
		.replace(/Secret Sword/g, 'Spadamistica')
		.replace(/Glaciate/g, 'Gelamondo')
		.replace(/Bolt Strike/g, 'Lucesiluro')
		.replace(/Blue Flare/g, 'Fuocoblu')
		.replace(/Fiery Dance/g, 'Voldifuoco')
		.replace(/Freeze Shock/g, 'Elettrogelo')
		.replace(/Ice Burn/g, 'Vampagelida')
		.replace(/Snarl/g, 'Urlorabbia')
		.replace(/Icicle Crash/g, 'Scagliagelo')
		.replace(/V-create/g, 'Generatore V')
		.replace(/Fusion Flare/g, 'Incrofiamma')
		.replace(/Fusion Bolt/g, 'Incrotuono')
		.replace(/Baby-Doll Eyes/g, 'Occhioni Teneri')
		.replace(/Boomburst/g, 'Ondaboato')
		.replace(/Confide/g, 'Confidenza')
		.replace(/Crafty Shield/g, 'Truccodifesa')
		.replace(/Dazzling Gleam/g, 'Magibrillio')
		.replace(/Disarming Voice/g, 'Incantavoce')
		.replace(/Draining Kiss/g, 'Assorbibacio')
		.replace(/Eerie Impulse/g, 'Elettromistero')
		.replace(/Electric Terrain/g, 'Campo Elettrico')
		.replace(/Electrify/g, 'Elettrocontagio')
		.replace(/Fairy Lock/g, 'Blocco Fatato')
		.replace(/Fairy Wind/g, 'Vento di Fata')
		.replace(/Fell Stinger/g, 'Pungiglione')
		.replace(/Flower Shield/g, 'Fiordifesa')
		.replace(/Freeze-Dry/g, 'Liofilizzazione')
		.replace(/Geomancy/g, 'Geocontrollo')
		.replace(/Grassy Terrain/g, 'Campo Erboso')
		.replace(/Infestation/g, 'Assillo')
		.replace(/King['’’]s Shield/g, 'Scudo Reale')
		.replace(/Land['’]s Wrath/g, 'Forza Tellurica')
		.replace(/Moonblast/g, 'Forza Lunare')
		.replace(/Mystical Fire/g, 'Magifiamma')
		.replace(/Nuzzle/g, 'Elettrococcola')
		.replace(/Oblivion Wing/g, 'Ali del Fato')
		.replace(/Parting Shot/g, 'Monito')
		.replace(/Phantom Force/g, 'Spettrotuffo')
		.replace(/Play Nice/g, 'Simpatia')
		.replace(/Play Rough/g, 'Carineria')
		.replace(/Powder/g, 'Pulviscoppio')
		.replace(/Power-Up Punch/g, 'Crescipugno')
		.replace(/Rototiller/g, 'Aracampo')
		.replace(/Spiky Shield/g, 'Agodifesa')
		.replace(/Sticky Web/g, 'Rete Vischiosa')
		.replace(/Topsy-Turvy/g, 'Sottosopra')
		.replace(/Venom Drench/g, 'Velenotrappola')
		.replace(/Water Shuriken/g, 'Acqualame')
		.replace(/Belch/g, 'Rutto')
		.replace(/Hold Back/g, 'Riguardo')
		.replace(/Diamond Storm/g, 'Diamantempesta')
		.replace(/Celebrate/g, 'Auguri')
		.replace(/Magnetic Flux/g, 'Controllo Polare')
		.replace(/Happy Hour/g, 'Cuccagna')
		.replace(/Hold Hands/g, 'Mano nella Mano')
	    .replace(/Hyperspace Hole/g, 'Forodimensionale')
	    .replace(/Thousand Arrows/g, 'Mille Frecce')
	    .replace(/Thousand Waves/g, 'Mille Onde')
	    .replace(/Light of Ruin/g, 'Luce Nefasta')
	    .replace(/Origin Pulse/g, 'Primopulsar')
	    .replace(/Precipice Blades/g, 'Spade Telluriche')
	    .replace(/Dragon Ascent/g, 'Ascesa del Drago')
	    .replace(/Hyperspace Fury/g, 'Urtodimensionale')
	    .replace(/Breakneck Blitz/g, 'Carica Travolgente')
	    .replace(/All-Out Pummeling/g, 'Iperscarica Furiosa')
	    .replace(/Supersonic Skystrike/g, 'Picchiata Devastante')
	    .replace(/Acid Downpour/g, 'Acidiluvio Corrosivo')
	    .replace(/Tectonic Rage/g, 'Furore della Terra')
	    .replace(/Continental Crush/g, 'Gigamacigno Polverizzante')
	    .replace(/Savage Spin-Out/g, 'Bozzolo Fatale')
	    .replace(/Never-Ending Nightmare/g, 'Abbraccio Spettrale')
	    .replace(/Corkscrew Crash/g, 'Spirale Perforante')
	    .replace(/Inferno Overdrive/g, 'Fiammobomba Detonante')
	    .replace(/Hydro Vortex/g, 'Idrovortice Abissale')
	    .replace(/Bloom Doom/g, 'Floriscoppio Sfolgorante')
	    .replace(/Gigavolt Havoc/g, 'Gigascarica Folgorante')
	    .replace(/Shattered Psyche/g, 'Impatto Psicocinetico')
	    .replace(/Subzero Slammer/g, 'Criodistruzione Polare')
	    .replace(/Devastating Drake/g, 'Dragoschianto Finale')
	    .replace(/Black Hole Eclipse/g, 'Buco Nero del Non Ritorno')
	    .replace(/Twinkle Tackle/g, 'Astroimpatto Fatato')
	    .replace(/Catastropika/g, 'Super Pikaboom')
	    .replace(/Shore Up/g, 'Sabbiaccumulo')
	    .replace(/First Impression/g, 'Schermaglia')
	    .replace(/Baneful Bunker/g, 'Fortino')
	    .replace(/Spirit Shackle/g, "Cucitura d'Ombra")
	    .replace(/Darkest Lariat/g, 'Braccioteso')
	    .replace(/Sparkling Aria/g, 'Canto Effimero')
	    .replace(/Ice Hammer/g, 'Martelgelo')
	    .replace(/Floral Healing/g, 'Cura Floreale')
	    .replace(/High Horsepower/g, 'Forza Equina')
	    .replace(/Strength Sap/g, 'Assorbiforza')
	    .replace(/Solar Blade/g, 'Lama Solare')
	    .replace(/Leafage/g, 'Fogliame')
	    .replace(/Spotlight/g, 'Riflettore')
	    .replace(/Toxic Thread/g, 'Velenotela')
	    .replace(/Laser Focus/g, 'Concentrazione')
	    .replace(/Gear Up/g, 'Marciainpi&ugrave;')
	    .replace(/Throat Chop/g, 'Colpo Infernale')
	    .replace(/Pollen Puff/g, 'Sferapolline')
	    .replace(/Anchor Shot/g, "Colpo d'Ancora")
	    .replace(/Psychic Terrain/g, 'Campo Psichico')
	    .replace(/Lunge/g, 'Assalto')
	    .replace(/Fire Lash/g, 'Frusta di Fuoco')
	    .replace(/Power Trip/g, 'Tracotanza')
	    .replace(/Burn Up/g, 'Ultima Fiamma')
	    .replace(/Speed Swap/g, 'Velociscambio')
	    .replace(/Smart Strike/g, 'Sottilcorno')
	    .replace(/Purify/g, 'Purificazione')
	    .replace(/Revelation Dance/g, 'Mutadanza')
	    .replace(/Core Enforcer/g, 'Nucleocastigo')
	    .replace(/Trop Kick/g, 'Tropicalcio')
	    .replace(/Instruct/g, 'Imposizione')
	    .replace(/Beak Blast/g, 'Cannonbecco')
	    .replace(/Clanging Scales/g, 'Clamorsquame')
	    .replace(/Dragon Hammer/g, 'Marteldrago')
	    .replace(/Brutal Swing/g, 'Vorticolpo')
	    .replace(/Aurora Veil/g, 'Velaurora')
	    .replace(/Sinister Arrow Raid/g, 'Dardoassalto Spettrale')
	    .replace(/Malicious Moonsault/g, 'Iperschianto delle Tenebre')
	    .replace(/Oceanic Operetta/g, 'Sinfonia del Mare')
	    .replace(/Guardian of Alola/g, 'Collera del Guardiano')
	    .replace(/Soul-Stealing 7-Star Strike/g, 'Colpo Eptastellare Rubanima')
	    .replace(/Stoked Sparksurfer/g, 'Elettrosurf Folgorante')
	    .replace(/Pulverizing Pancake/g, 'Adesso Faccio sul Serio')
	    .replace(/Extreme Evoboost/g, 'Potenziamento Eevolutivo')
	    .replace(/Genesis Supernova/g, 'Supernova delle Origini')
	    .replace(/Shell Trap/g, 'Gusciotrappola')
	    .replace(/Fleur Cannon/g, 'Cannonfiore')
	    .replace(/Psychic Fangs/g, 'Psicozanna')
	    .replace(/Stomping Tantrum/g, 'Battipiedi')
	    .replace(/Shadow Bone/g, 'Ossotetro')
	    .replace(/Accelerock/g, 'Rocciarapida')
	    .replace(/Liquidation/g, 'Idrobreccia')
	    .replace(/Prismatic Laser/g, 'Prismalaser')
	    .replace(/Spectral Thief/g, 'Ombrafurto')
	    .replace(/Sunsteel Strike/g, 'Astrocarica')
	    .replace(/Moongeist Beam/g, "Raggio d'Ombra")
	    .replace(/Tearful Look/g, 'Occhionilucidi')
	    .replace(/Zing Zap/g, 'Elettropizzico')
	    .replace(/Nature's Madness/g, 'Ira della Natura')
	    .replace(/Multi-Attack/g, 'Multiattacco')
	    .replace(/10,000,000 Volt Thunderbolt/g, 'Iperfulmine')
	    .replace(/Mind Blown/g, 'Sbalorditesta')
	    .replace(/Photon Geyser/g, 'Geyser Fotonico')
	    .replace(/Plasma Fists/g, 'Pugni Plasma')
	    .replace(/Double Iron Bash/g, 'Pugni Corazzati')
		.replace(/Clangorous Soulblaze/g, 'Dracofonia Divampante')
		.replace(/Splintered Stormshards/g, 'Litotempesta Radiale')
		.replace(/Let's Snuggle Forever/g, 'Dolcesacco di Botte')
		.replace(/Menacing Moonraze Maelstrom/g, 'Deflagrazione Lunare')
		.replace(/Searing Sunraze Smashh/g, 'Supercollisione Solare')
		.replace(/Light That Burns the Sky/g, 'Fotodistruzione Apocalittica')

		.replace(/Floaty Fall/g, 'Piombaflap')
		.replace(/Pika Papow/g, 'Pikasaetta')
		.replace(/Surfasplash/g, 'Splishy Splash')
		.replace(/Zippy Zap/g, 'Sprintaboom')
		.replace(/Bouncy Bubble/g, 'Bollaslurp')
		.replace(/Buzzy Buzz/g, 'Elettrozap')
		.replace(/Sizzly Slide/g, 'Fiammabam')
		.replace(/Glitzy Glow/g, 'Auraswoosh')
		.replace(/Baddy Bad/g, 'Zona Buiabuia')
		.replace(/Sappy Seed/g, 'Bombafrush')
		.replace(/Freezy Frost/g, 'Scricchiagelo')
		.replace(/Sparkly Swirl/g, 'Sbrilluccibufera')
		.replace(/Veevee Volley/g, 'Eeveempatto')

		.replace(/Max Guard/g, 'Dynabarriera')
        .replace(/Dynamax Cannon/g, 'Cannone Dynamax')
        .replace(/Snipe Shot/g, 'Tiromirato')
        .replace(/Jaw Lock/g, 'Morsostretto')
        .replace(/Stuff Cheeks/g, 'Riempiguance')
        .replace(/No Retreat/g, 'Spalle al Muro')
        .replace(/Tar Shot/g, 'Colpocatrame')
        .replace(/Magic Powder/g, 'Magipolvere')
        .replace(/Magic Pulviscoppio/g, 'Magipolvere')
        .replace(/Dragon Darts/g, 'Dragofrecce')
        .replace(/Teatime/g, 'Ora del T&egrave;')
        .replace(/Octolock/g, 'Tentacolock')
        .replace(/Bolt Beak/g, 'Beccoshock')
        .replace(/Fishious Rend/g, 'Branchiomorso')
        .replace(/Court Change/g, 'Cambiocampo')
        .replace(/Max Flare/g, 'Dynafiammata')
        .replace(/Max Flutterby/g, 'Dynainsetto')
        .replace(/Max Lightning/g, 'Dynasaetta')
        .replace(/Max Strike/g, 'Dynattacco')
        .replace(/Max Knuckle/g, 'Dynapugno')
        .replace(/Max Phantasm/g, 'Dynavuoto')
        .replace(/Max Hailstorm/g, 'Dynagelo')
        .replace(/Max Grandinestorm/g, 'Dynagelo')
        .replace(/Max Ooze/g, 'Dynacorrosione')
        .replace(/Max Geyser/g, 'Dynaflusso')
        .replace(/Max Airstream/g, 'Dynajet')
        .replace(/Max Starfall/g, 'Dynafata')
        .replace(/Max Wyrmwind/g, 'Dynadragone')
        .replace(/Max Mindstorm/g, 'Dynapsiche')
        .replace(/Max Rockfall/g, 'Dynamacigno')
        .replace(/Max Quake/g, 'Dynasisma')
        .replace(/Max Darkness/g, 'Dynatenebre')
        .replace(/Max Overgrowth/g, 'Dynaflora')
        .replace(/Max Steelspike/g, 'Dynametallo')
        .replace(/Clangorous Soul/g, 'Dracofonia')
        .replace(/Body Press/g, 'Schiacciacorpo')
        .replace(/Decorate/g, 'Decorazione')
        .replace(/Drum Beating/g, 'Tamburattacco')
        .replace(/Snap Trap/g, 'Tagliola')
        .replace(/Pyro Ball/g, 'Palla Infuocata')
        .replace(/Behemoth Blade/g, 'Taglio Maestoso')
        .replace(/Behemoth Bash/g, 'Colpo Maestoso')
        .replace(/Aura Wheel/g, 'Ruota d\'Aura')
        .replace(/Breaking Swipe/g, 'Vastoimpatto')
        .replace(/Branch Poke/g, 'Ramostoccata')
        .replace(/Overdrive/g, 'Overdrive')
        .replace(/Apple Acido/g, 'Acido Malico')
        .replace(/Apple Acid/g, 'Acido Malico')
        .replace(/Grav Apple/g, 'Forza G')
        .replace(/Spirit Break/g, 'Frantumanima')
        .replace(/Strange Steam/g, 'Vapore Incantato')
        .replace(/Life Dew/g, 'Goccia Vitale')
        .replace(/Obstruct/g, 'Sbarramento')
        .replace(/False Surrender/g, 'Supplicolpo')
        .replace(/Meteor Assault/g, 'Sfolgorassalto')
        .replace(/Eternabeam/g, 'Raggio Infinito')
        .replace(/Steel Beam/g, 'Raggio d\'Acciaio')
        .replace(/Expanding Force/g, 'Vastenergia')
        .replace(/Steel Roller/g, 'Ferrorullo')
        .replace(/Scale Shot/g, 'Squamacolpo')
        .replace(/Meteor Beam/g, 'Raggiometeora')
        .replace(/Shell Side Arm/g, 'Armaguscio')
        .replace(/Misty Explosion/g, 'Nebbioscoppio')
        .replace(/Nebbiay Esplosione/g, 'Nebbioscoppio')
        .replace(/Grassy Glide/g, 'Erboscivolata')
        .replace(/Rising Voltage/g, 'Elettroimpennata')
        .replace(/RiCanto Voltage/g, 'Elettroimpennata')
        .replace(/Terrain Pulse/g, 'Campopulsar')
        .replace(/Skitter Smack/g, 'Strisciacolpo')
        .replace(/Burning Jealousy/g, 'Fiamminvidia')
        .replace(/Lash Out/g, 'Sfogarabbia')
        .replace(/Poltergeist/g, 'Poltergeist')
        .replace(/Corrosive Gas/g, 'Gas Corrosivo')
        .replace(/Coaching/g, 'Coaching')
        .replace(/Flip Turn/g, 'Virata')
        .replace(/Triple Axel/g, 'Triplo Axel')
        .replace(/Dual Wingbeat/g, 'Doppia Ala')
        .replace(/Scorching Sands/g, 'Sabbiardente')
        .replace(/Jungle Healing/g, 'Giunglacura')
        .replace(/Wicked Blow/g, 'Pugnotenebra')
        .replace(/Surging Strikes/g, 'Idroraffica')

        .replace(/G-Max Vine Lash/g, 'Gigasferzata')
        .replace(/G-Max Wildfire/g, 'Gigavampa')
        .replace(/G-Max Cannonade/g, 'Gigacannonata')
        .replace(/G-Max Befuddle/g, 'Gigastupore')
        .replace(/G-Max Volt Crash/g, 'Gigapikafolgori')
        .replace(/G-Max Gold Rush/g, 'Gigamonete')
		.replace(/G-Max Chi Strike/g, 'Gigapugnointuito')
		.replace(/G-Max Terror/g, 'Gigaillusione')
		.replace(/G-Max Foam Burst/g, 'Gigaschiuma')
		.replace(/G-Max Resonance/g, 'Gigamelodia')
		.replace(/G-Max Cuddle/g, 'Gigabbraccio')
		.replace(/G-Max Replenish/g, 'Gigarinnovamento')
		.replace(/G-Max Malodor/g, 'Gigafetore')
		.replace(/G-Max Meltdown/g, 'Gigaliquefazione')
		.replace(/G-Max Drum Solo/g, 'Gigarullio')
		.replace(/G-Max Fireball/g, 'Gigafiammopalla')
		.replace(/G-Max Hydrosnipe/g, 'Gigasparomirato')
		.replace(/G-Max Wind Rage/g, 'Gigaciclone')
		.replace(/G-Max Gravitas/g, 'Gigagravitoforza')
		.replace(/G-Max Stonesurge/g, 'Gigarocciagetto')
		.replace(/G-Max Volcalith/g, 'Gigalapilli')
		.replace(/G-Max Tartness/g, 'Gigattaccoacido')
		.replace(/G-Max Sweetness/g, 'Gigambrosia')
		.replace(/G-Max Sandblast/g, 'Gigavortisabbia')
		.replace(/G-Max Stun Shock/g, 'Gigatoxiscossa')
		.replace(/G-Max Centiferno/g, 'Gigamillefiamme')
		.replace(/G-Max Smite/g, 'Gigacastigo')
		.replace(/G-Max Snooze/g, 'Gigatorpore')
		.replace(/G-Max Finale/g, 'Gigagranfinale')
		.replace(/G-Max Steelsurge/g, 'Gigaferroaculei')
		.replace(/G-Max Depletion/g, 'Gigalogoramento')
		.replace(/G-Max One Blow/g, 'Gigasingolcolpo')
		.replace(/G-Max Rapid Flow/g, 'Gigapluricolpo')

	// Mosse ombra

		.replace(/Shadow Blast/g, 'Ombrolame')
		.replace(/Shadow Blitz/g, 'Ombrattacco')
		.replace(/Shadow Bolt/g, 'Fulminombra')
		.replace(/Shadow Break/g, 'Ombrospinta')
		.replace(/Shadow Chill/g, 'Gelodombra')
		.replace(/Shadow Down/g, 'Declinoscuro')
		.replace(/Shadow End/g, 'Fineoscuro')
		.replace(/Shadow Fire/g, 'Fuocoscuro')
		.replace(/Shadow Half/g, 'Iraoscura')
		.replace(/Shadow Mist/g, 'Nebbiascura')
		.replace(/Shadow Panic/g, 'Ombrapanico')
		.replace(/Shadow Rave/g, 'Ombrolancia')
		.replace(/Shadow Rush/g, 'Ombroraffica')
		.replace(/Shadow Shed/g, 'Ombrannulla')
		.replace(/Shadow Sky/g, 'Cieloscuro')
		.replace(/Shadow Storm/g, 'Turbinombra')
		.replace(/Shadow Wave/g, 'Ondascura')

    // Correzione errori

		.replace(/Acidoobomba/g, 'Acidobomba')
		.replace(/GastroAcidoo/g, 'Gastroacido')
		.replace(/SbaFossalio/g, 'Sbadiglio')
		.replace(/DrudFossaon/g, 'Druddigon')
		.replace(/Fascinoander/g, 'Charmander')
		.replace(/Fascinoeleon/g, 'Charmeleon')
		.replace(/SandLacerazione/g, 'Sandslash')
		.replace(/AegiLacerazione/g, 'Aegislash')
		.replace(/Fossalett/g, 'Diglett')
		.replace(/Leccataitung/g, 'Lickitung')
		.replace(/BeautiVolo/g, 'Beautifly')
		.replace(/Vologon/g, 'Flygon')
		.replace(/Tenagliaerl/g, 'Clamperl')
		.replace(/GaMorso/g, 'Gabite')
		.replace(/Tossinaroak/g, 'Toxicroak')
		.replace(/LeccataiLeccatay/g, 'Lickilicky')
		.replace(/IncineBoato/g, 'Incineroar')
		.replace(/TaglioieVolo/g, 'Cutiefly')
		.replace(/ExeggGrazia/g, 'Exeggcute')
		.replace(/Desiderioiwashi/g, 'Wishiwashi')
		.replace(/Taglioe/gi, 'Grazia')
		.replace(/Ruggitoithe/g, 'Growlithe')
		.replace(/Voloing/g, 'Flying')
		.replace(/ZoBoatok/gi, 'Zoroark')
		.replace(/Confusionee/gi, 'Confusione')
		.replace(/Acidoo/gi, 'Acido')
		.replace(/Mimicaa/gi, 'Mimica')
		.replace(/Cantole/gi, 'Single')
		.replace(/Water Assorbimento/gi, 'Water Absorb')
		.replace(/Fossagersby/gi, 'Diggersby')
		.replace(/PyBoato/gi, 'Pyroar')
		.replace(/Effect Spora/gi, 'Effect Spore')
		.replace(/Comete Swim/gi, 'Swift Swim')
		.replace(/Hyper Taglioter/gi, 'Hyper Cutter')
		.replace(/Maledizioned Body/gi, 'Cursed Body')
		.replace(/Volt Assorbimento/gi, 'Volt Absorb')
		.replace(/Assorbimento Bulb/gi, 'Absorb Bulb')
		.replace(/psichico color/gi, 'psico color')
    .replace(/Psichico Terrain/gi, 'Campo Psichico')
    .replace(/Scintillaling Aria/g, 'Canto Effimero')
    .replace(/Psichico Fangs/gi, 'Psicozanna')
    .replace(/Pestoneing Tantrum/g, 'Battipiedi')

    // Correzioni Mosse Z

    .replace(/Supersuono Skystrike/g, 'Picchiata Devastante')
    .replace(/Acido Downpour/g, 'Acidiluvio Corrosivo')
    .replace(/Tectonic Ira/g, 'Furore della Terra')
    .replace(/Never-Ending Incubo/g, 'Abbraccio Spettrale')
    .replace(/Marchiatura Overdrive/g, 'Fiammobomba Detonante')
    .replace(/Subzero Schiantomer/g, 'Criodistruzione Polare')
    .replace(/Twinkle Azione/g, 'Astroimpatto Fatato')
    .replace(/Forza Sap/g, 'Assorbiforza')
    .replace(/Tossina Thread/g, 'Velenotela')
    .replace(/Stoked ScintillaSurfer/g, 'Elettrosurf Folgorante')
    .replace(/Spectral Furto/g, 'Ombrafurto')
    .replace(/10,000,000 Volt Fulmine/g, 'Iperfulmine')
};

macros["abilita'"] = function(str) {

	// Abilità

	return str.replace(/Adaptability/gi, 'Adattabilit&agrave')
		.replace(/Aftermath/gi, 'Scoppio')
		.replace(/Air Lock/gi, 'Riparo')
		.replace(/Anger Point/gi, 'Grancollera')
		.replace(/Anticipation/gi, 'Presagio')
		.replace(/Arena Trap/gi, 'Trappoarena')
		.replace(/Bad Dreams/gi, 'Sogniamari')
		.replace(/Battle Armor/gi, 'Lottascudo')
		.replace(/Turboblaze/gi, 'Piroturbina')
		.replace(/Blaze/gi, 'Aiutofuoco')
		.replace(/Chlorophyll/gi, 'Clorofilla')
		.replace(/Clear Body/gi, 'Corpochiaro')
		.replace(/Cloud Nine/gi, 'Antimeteo')
		.replace(/Color Change/gi, 'Cambiacolore')
		.replace(/Compoundeyes/gi, 'Insettocchi')
		.replace(/Compound Eyes/gi, 'Insettocchi')
		.replace(/Cute Charm/gi, 'Incantevole')
		.replace(/Damp/gi, 'Umidit&agrave')
		.replace(/Download/gi, 'Download')
		.replace(/Drizzle/gi, 'Piovischio')
		.replace(/Drought/gi, 'Siccit&agrave')
		.replace(/Dry Skin/gi, 'Pellearsa')
		.replace(/Early Bird/gi, 'Sveglialampo')
		.replace(/Effect Spore/gi, 'Spargispora')
		.replace(/Filter/gi, 'Filtro')
		.replace(/Flame Body/gi, 'Corpodifuoco')
		.replace(/Flash Fire/gi, 'Fuocardore')
		.replace(/Flower Gift/gi, 'Regalfiore')
		.replace(/Forecast/gi, 'Previsioni')
		.replace(/Forewarn/gi, 'Premonizione')
		.replace(/Frisk/gi, 'Indagine')
		.replace(/Gluttony/gi, 'Voracit&agrave')
		.replace(/Guts/gi, 'Dentistretti')
		.replace(/Heatproof/gi, 'Antifuoco')
		.replace(/Honey Gather/gi, 'Mielincetta')
		.replace(/Huge Power/gi, 'Macroforza')
		.replace(/Hustle/gi, 'Tuttafretta')
		.replace(/Hydration/gi, 'Idratazione')
		.replace(/Hyper Cutter/gi, 'Ipertaglio')
		.replace(/Ice Body/gi, 'Corpogelo')
		.replace(/Illuminate/gi, 'Risplendi')
		.replace(/Immunity/gi, 'Immunit&agrave')
		.replace(/Inner Focus/gi, 'Fuocodentro')
		.replace(/Insomnia/gi, 'Insonnia')
		.replace(/Intimidate/gi, 'Prepotenza')
		.replace(/Iron Fist/gi, 'Ferropugno')
		.replace(/Keen Eye/gi, 'Sguardofermo')
		.replace(/Klutz/gi, 'Impaccio')
		.replace(/Leaf Guard/gi, 'Fogliamanto')
		.replace(/Levitate/gi, 'Levitazione')
		.replace(/Lightningrod/gi, 'Parafulmine')
		.replace(/Lightning Rod/gi, 'Parafulmine')
		.replace(/Limber/gi, 'Scioltezza')
		.replace(/Liquid Ooze/gi, 'Melma')
		.replace(/Magic Guard/gi, 'Magicscudo')
		.replace(/Magma Armor/gi, 'Magmascudo')
		.replace(/Magnet Pull/gi, 'Magnetismo')
		.replace(/Marvel Scale/gi, 'Pelledura')
		.replace(/Minus/gi, 'Meno')
		.replace(/Mold Breaker/gi, 'Rompiforma')
		.replace(/Motor Drive/gi, 'Elettrorapid')
		.replace(/Multitype/gi, 'Multitipo')
		.replace(/Natural Cure/gi, 'Alternacura')
		.replace(/No Guard/gi, 'Nullodifesa')
		.replace(/Normalize/gi, 'Normalit&agrave')
		.replace(/Oblivious/gi, 'Indifferenza')
		.replace(/Overgrow/gi, 'Erbaiuto')
		.replace(/Own Tempo/gi, 'Mente Locale')
		.replace(/Pickup/gi, 'Raccolta')
		.replace(/Plus/gi, 'Pi&ugrave')
		.replace(/Poison Heal/gi, 'Velencura')
		.replace(/Poison Point/gi, 'Velenopunto')
		.replace(/Pressure/gi, 'Pressione')
		.replace(/Pure power/gi, 'Forzapura')
		.replace(/Quick Feet/gi, 'Piedisvelti')
		.replace(/Rain Dish/gi, 'Copripioggia')
		.replace(/Reckless/gi, 'Temerariet&agrave')
		.replace(/Rivalry/gi, 'Antagonismo')
		.replace(/Rock Head/gi, 'Testadura')
		.replace(/Rough Skin/gi, 'Cartavetro')
		.replace(/Run Away/gi, 'Fugafacile')
		.replace(/Sand Stream/gi, 'Sabbiafiume')
		.replace(/Sand Veil/gi, 'Sabbiavelo')
		.replace(/Scrappy/gi, 'Nervisaldi')
		.replace(/Serene Grace/gi, 'Leggiadro')
		.replace(/Shadow Tag/gi, 'Pedinombra')
		.replace(/Shed Skin/gi, 'Muta')
		.replace(/Shell Armor/gi, 'Guscioscudo')
		.replace(/Shield Dust/gi, 'Polvoscudo')
		.replace(/Simple/gi, 'Disinvoltura')
		.replace(/Skill Link/gi, 'Abillegame')
		.replace(/Slow Start/gi, 'Lentoinizio')
		.replace(/Sniper/gi, 'Cecchino')
		.replace(/Snow Cloak/gi, 'Mantelneve')
		.replace(/Snow Warning/gi, 'Scendineve')
		.replace(/Solar Power/gi, 'Solarpotere')
		.replace(/Solid Rock/gi, 'Solidroccia')
		.replace(/Soundproof/gi, 'Antisuono')
		.replace(/Speed Boost/gi, 'Acceleratore')
		.replace(/Stall/gi, 'Rallentatore')
		.replace(/Static/gi, 'Statico')
		.replace(/Steadfast/gi, 'Cuordeciso')
		.replace(/Stench/gi, 'Tanfo')
		.replace(/Sticky Hold/gi, 'Antifurto')
		.replace(/Storm Drain/gi, 'Acquascolo')
		.replace(/Sturdy/gi, 'Vigore')
		.replace(/Suction Cups/gi, 'Ventose')
		.replace(/Super Luck/gi, 'Supersorte')
		.replace(/Swarm/gi, 'Aiutinsetto')
		.replace(/Swift Swim/gi, 'Nuotovelox')
		.replace(/Synchronize/gi, 'Sincronismo')
		.replace(/Tangled Feet/gi, 'Intricopiedi')
		.replace(/Technician/gi, 'Tecnico')
		.replace(/Thick Fat/gi, 'Grassospesso')
		.replace(/Tinted Lens/gi, 'Lentifum&eacute')
		.replace(/Torrent/gi, 'Acquaiuto')
		.replace(/Trace/gi, 'Traccia')
		.replace(/Truant/gi, 'Pigrone')
		.replace(/Unaware/gi, 'Imprudenza')
		.replace(/Unburden/gi, 'Agiltecnica')
		.replace(/Vitalspirit/gi, 'Spiritovivo')
		.replace(/Volt Absorb/gi, 'Assorbivolt')
		.replace(/Water Absorb/gi, 'Assorbacqua')
		.replace(/Water Veil/gi, 'Idrovelo')
		.replace(/White Smoke/gi, 'Fumochiaro')
		.replace(/Wonder Guard/gi, 'Magidifesa')
		.replace(/Pickpocket/gi, 'Arraffalesto')
		.replace(/Sheer Force/gi, 'Forzabruta')
		.replace(/Contrary/gi, 'Inversione')
		.replace(/Unnerve/gi, 'Agitazione')
		.replace(/Defiant/gi, 'Agonismo')
		.replace(/Defeatist/gi, 'Sconforto')
		.replace(/Cursed Body/gi, 'Corpofunesto')
		.replace(/Healer/gi, 'Curacuore')
		.replace(/Friend Guard/gi, 'Amicoscudo')
		.replace(/Weak Armor/gi, 'Sottilguscio')
		.replace(/Heavy Metal/gi, 'Metalpesante')
		.replace(/Light Metal/gi, 'Metalleggero')
		.replace(/Multiscale/gi, 'Multisquame')
		.replace(/Toxic Boost/gi, 'Velenimpeto')
		.replace(/Flare Boost/gi, 'Bruciaimpeto')
		.replace(/Harvest/gi, 'Coglibacche')
		.replace(/Telepathy/gi, 'Telepatia')
		.replace(/Moody/gi, 'Altalena')
		.replace(/Overcoat/gi, 'Copricapo')
		.replace(/Poison Touch/gi, 'Velentocco')
		.replace(/Regenerator/gi, 'Rigenergia')
		.replace(/Big Pecks/gi, 'Pettinfuori')
		.replace(/Sand Rush/gi, 'Remasabbia')
		.replace(/Wonder Skin/gi, 'Splendicute')
		.replace(/Analytic/gi, 'Ponderazione')
		.replace(/Illusion/gi, 'Illusione')
		.replace(/Imposter/gi, 'Sosia')
		.replace(/Infiltrator/gi, 'Intrapasso')
		.replace(/Mummy/gi, 'Mummia')
		.replace(/Moxie/gi, 'Arroganza')
		.replace(/Justified/gi, 'Giustizia')
		.replace(/Rattled/gi, 'Paura')
		.replace(/Magic Bounce/gi, 'Magispecchio')
		.replace(/Sap Sipper/gi, 'Mangiaerba')
		.replace(/Prankster/gi, 'Burla')
		.replace(/Sand Force/gi, 'Silicoforza')
		.replace(/Iron Barbs/gi, 'Spineferrate')
		.replace(/Zen Mode/gi, 'Stato Zen')
		.replace(/Victory Star/gi, 'Vittorstella')
		.replace(/Teravolt/gi, 'Teravolt')
		.replace(/Aerilate/gi, 'Pellecielo')
		.replace(/Aroma Veil/gi, 'Aromavelo')
		.replace(/Aura Break/gi, 'Frangiaura')
		.replace(/Bulletproof/gi, 'Antiproiettile')
		.replace(/Cheek Pouch/gi, 'Guancegonfie')
		.replace(/Competitive/gi, 'Tenacia')
		.replace(/Dark Aura/gi, 'Auratetra')
		.replace(/Fairy Aura/gi, 'Aurafolletto')
		.replace(/Flower Veil/gi, 'Fiorvelo')
		.replace(/Fur Coat/gi, 'Foltopelo')
		.replace(/Gale Wings/gi, 'Aliraffica')
		.replace(/Gooey/gi, 'Viscosit&agrave')
		.replace(/Grass Pelt/gi, 'Peloderba')
		.replace(/Magician/gi, 'Prestigiatore')
		.replace(/Mega Launcher/gi, 'Megalancio')
		.replace(/Parental Bond/gi, 'Amorefiliale')
		.replace(/Pixilate/gi, 'Pellefolletto')
		.replace(/Protean/gi, 'Mutatipo')
		.replace(/Refrigerate/gi, 'Pellegelo')
		.replace(/Stance Change/gi, 'Accendilotta')
		.replace(/Strong Jaw/gi, 'Ferromascella')
		.replace(/Sweet Veil/gi, 'Dolcevelo')
		.replace(/Symbiosis/gi, 'Simbiosi')
		.replace(/Tough Claws/gi, 'Unghiedure')
    .replace(/Primordial Sea/g, 'Mare Primordiale')
    .replace(/Desolate Land/g, 'Terra Estrema')
    .replace(/Delta Stream/g, 'Flusso Delta')
    .replace(/Stamina/g, 'Sopportazione')
    .replace(/Wimp Out/g, 'Fuggifuggi')
    .replace(/Emergency Exit/g, 'Passoindietro')
    .replace(/Water Compaction/g, 'Idrorinforzo')
    .replace(/Merciless/g, 'Spietatezza')
    .replace(/Shields Down/g, 'Scudosoglia')
    .replace(/Stakeout/g, 'Sorveglianza')
    .replace(/Water Bubble/g, 'Bolladacqua')
    .replace(/Steelworker/g, 'Tempracciaio')
    .replace(/Berserk/g, 'Furore')
    .replace(/Slush Rush/g, 'Spalaneve')
    .replace(/Long Reach/g, 'Distacco')
    .replace(/Liquid Voice/g, 'Idrovoce')
    .replace(/Triage/g, 'Primacura')
    .replace(/Galvanize/g, 'Pellelettro')
    .replace(/Surge Surfer/g, 'Codasurf')
    .replace(/Schooling/g, 'Banco')
    .replace(/Disguise/g, 'Fantasmanto')
    .replace(/Battle Bond/g, 'Morfosintonia')
    .replace(/Power Construct/g, 'Sciamefusione')
    .replace(/Corrosion/g, 'Corrosione')
    .replace(/Comatose/g, 'Sonno Assoluto')
    .replace(/Queenly Majesty/g, 'Regalità')
    .replace(/Innards Out/g, 'Espellinterno')
    .replace(/Dancer/g, 'Sincrodanza')
    .replace(/Battery/g, 'Batteria')
    .replace(/Fluffy/g, 'Morbidone')
    .replace(/Dazzling/g, 'Corposgargiante')
    .replace(/Soul-Heart/g, 'Cuoreanima')
    .replace(/Tangling Hair/g, 'Boccolidoro')
    .replace(/Receiver/g, 'Ricezione')
    .replace(/Power of Alchemy/g, 'Forza Chimica')
    .replace(/Beast Boost/g, 'Ultraboost')
    .replace(/RKS System/g, 'Sistema Primevo')
    .replace(/Electric Surge/g, 'Elettrogenesi')
    .replace(/Psychic Surge/g, 'Psicogenesi')
    .replace(/Misty Surge/g, 'Nebbiogenesi')
    .replace(/Grassy Surge/g, 'Erbogenesi')
    .replace(/Full Metal Body/g, 'Metalprotezione')
    .replace(/Shadow Shield/g, 'Spettroguardia')
    .replace(/Prism Armor/g, 'Scudoprisma')
    .replace(/Neuroforce/g, 'Cerebroforza')
    .replace(/Intrepid Sword/g, 'Spada Indomita')
    .replace(/Dauntless Shield/g, 'Scudo Saldo')
    .replace(/Libero/g, 'Libero')
    .replace(/Ball Fetch/g, 'Raccattapalle')
    .replace(/Cotton Down/g, 'Lanugine')
    .replace(/Propeller Tail/g, 'Elicopinna')
    .replace(/Mirror Armor/g, 'Blindospecchio')
    .replace(/Gulp Missile/g, 'Inghiottimissile')
    .replace(/Stalwart/g, 'Volontà di Ferro')
    .replace(/Steam Engine/g, 'Vapormacchina')
    .replace(/Punk Rock/g, 'Punk Rock')
    .replace(/Sand Spit/g, 'Sputasabbia')
    .replace(/Ice Scales/g, 'Geloscaglie')
    .replace(/Ripen/g, 'Maturazione')
    .replace(/Ice Face/g, 'Gelofaccia')
    .replace(/Power Spot/g, 'Fonte Energetica')
    .replace(/Mimicry/g, 'Mimetismo')
    .replace(/Screen Cleaner/g, 'Annullabarriere')
    .replace(/Steely Spirit/g, 'Spiritoferreo')
    .replace(/Perish Body/g, 'Ultimotocco')
    .replace(/Wandering Spirit/g, 'Anima Errante')
    .replace(/Gorilla Tactics/g, 'Vigorilla')
    .replace(/Neutralizing Gas/g, 'Gas Reagente')
    .replace(/Pastel Veil/g, 'Pastelvelo')
    .replace(/Hunger Switch/g, 'Pancialterna')

    // Correzioni errori
    .replace(/Corposgargiante Gleam/gi, 'Magibrillio')
    .replace(/AcuPressione/g, 'Acupressione')
};

macros.gare = function(str) {

	// Statistiche gara

	return str.replace(/Tough/gi, 'Grinta')
		.replace(/Cool/gi, 'Classe')
		.replace(/(Smart|Clever)/gi, 'Acume')
		.replace(/Beaut(y|iful)/gi, 'Bellezza')
		.replace(/Cute/gi, 'Grazia')

	// Correzione errori

		.replace(/TentaClasse/g, 'Tentacool')
		.replace(/ExeggGrazia/g, 'Exeggcute');
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

		str = str.replace(/Sun Stone/gi, 'Pietrasolare')
			.replace(/Moon Stone/gi, 'Pietralunare')
			.replace(/Fire Stone/gi, 'Pietrafocaia')
			.replace(/Thunder Stone/gi, 'Pietratuono')
			.replace(/Water Stone/gi, 'Pietraidrica')
			.replace(/Leaf Stone/gi, 'Pietrafoglia')
			.replace(/Shiny Stone/gi, 'Pietrabrillo')
			.replace(/Dusk Stone/gi, 'Neropietra')
			.replace(/Dawn Stone/gi, 'Pietralbore')
			.replace(/Oval Stone/gi, 'Pietraovale')

		// Strumenti da vendere

			.replace(/Tiny Mushroom/gi, 'Piccolo Fungo')
			.replace(/Big Mushroom/gi, 'Grande Fungo')
			.replace(/Big Pearl/gi, 'Grande Perla')
			.replace(/Pearl String/gi, 'Trittiperla')
			.replace(/Pearl/gi, 'Perla')
			.replace(/Stardust/gi, 'Polvostella')
			.replace(/Star Piece/gi, 'Pezzo Stella')
			.replace(/Gold Leaf/gi, 'Fogliadoro')
			.replace(/Silver Leaf/gi, 'Fogliargento')
			.replace(/Brick Piece/gi, 'Mattoncino')
			.replace(/Nugget/gi, 'Pepita')
			.replace(/Heart Scale/gi, 'Squama Cuore')
			.replace(/Rare Bone/gi, 'Ossopesso')
			.replace(/Pretty Wing/gi, 'Piumabella')
			.replace(/Balm Mushroom/gi, 'Profumfungo')
			.replace(/Big Nugget/gi, 'Granpepita')
			.replace(/Comet Shard/gi, 'Pezzo Cometa')
			.replace(/Relic Copper/gi, 'Soldantico')
			.replace(/Relic Silver/gi, 'Ducatantico')
			.replace(/Relic Gold/gi, 'Doblonantico')
			.replace(/Relic Vase/gi, 'Vasantico')
			.replace(/Relic Band/gi, 'Bracciantico')
			.replace(/Relic Statue/gi, 'Statuantica')
			.replace(/Relic Crown/gi, 'Coronantica')

		// Rimedi

			.replace(/Max Potion/gi, 'Pozione Max')
			.replace(/Hyper Potion/gi, 'Iperpozione')
			.replace(/Super Potion/gi, 'Superpozione')
			.replace(/Potion/gi, 'Pozione')
			.replace(/Antidote/gi, 'Antidoto')
			.replace(/Burn Heal/gi, 'Antiscottatura')
			.replace(/Ice Heal/gi, 'Antigelo')
			.replace(/Awakening/gi, 'Sveglia')
			.replace(/Parlyze Heal/gi, 'Antiparalisi')
			.replace(/Full Restore/gi, 'Ricarica Totale')
			.replace(/Full Heal/gi, 'Cura Totale')
			.replace(/Revive/gi, 'Revitalizzante')
			.replace(/Max Revive/gi, 'Revitalizzante Max')
			.replace(/Fresh Water/gi, 'Acqua Fresca')
			.replace(/Soda Pop/gi, 'Gassosa')
			.replace(/Lemonade/gi, 'Lemonsucco')
			.replace(/Ether/gi, 'Etere')
			.replace(/Max Ether/gi, 'Etere Max')
			.replace(/Elixir/gi, 'Elisir')
			.replace(/Max Elixir/gi, 'Elisir Max')
			.replace(/Moomoo Milk/gi, 'Latte Mumu')
			.replace(/Energy Powder/gi, 'Polvenergia')
			.replace(/Energy Root/gi, 'Radicenergia')
			.replace(/Heal Powder/gi, 'Polvocura')
			.replace(/Revival Herb/gi, 'Vitalerba')
			.replace(/Sacred Ash/gi, 'Magicenere')
			.replace(/Rage Candy Bar/gi, 'Iramella')
			.replace(/Lava Cookie/gi, 'Lavottino')
			.replace(/Berry Juice/gi, 'Succo di Bacca')
			.replace(/HP Up/gi, 'PS-Su')
			.replace(/Protein/gi, 'Proteina')
			.replace(/Iron/gi, 'Ferro')
			.replace(/Carbos/gi, 'Carburante')
			.replace(/Calcium/gi, 'Calcio')
			.replace(/Rare Candy/gi, 'Caramella Rara')
			.replace(/PP Up/gi, 'PP-Su')
			.replace(/Zinc/gi, 'Zinco')
			.replace(/PP Max/gi, 'PP-Max')
			.replace(/Sweet Heart/gi, 'Dolcecuore')
			.replace(/Health Wing/gi, 'Piumsalute')
			.replace(/Muscle Wing/gi, 'Piumpotenza')
			.replace(/Resist Wing/gi, 'Piumtutela')
			.replace(/Genius Wing/gi, 'Piumingegno')
			.replace(/Clever Wing/gi, 'Piumintuito')
			.replace(/Swift Wing/gi, 'Piumreazione')
			.replace(/Casteliacone/gi, 'Conostropoli')
			.replace(/Lumiose Galette/gi, 'Pan di Lumi')

		// Balls

			.replace(/Poké Ball/gi, 'Pok&eacute Ball')
			.replace(/Great Ball/gi, 'Mega Ball')
			.replace(/Ultra Ball/gi, 'Ultra Ball')
			.replace(/Master Ball/gi, 'Master Ball')
			.replace(/Safari Ball/gi, 'Safari Ball')
			.replace(/Heavy Ball/gi, 'Peso Ball')
			.replace(/Level Ball/gi, 'Level Ball')
			.replace(/Lure Ball/gi, 'Esca Ball')
			.replace(/Fast Ball/gi, 'Rapid Ball')
			.replace(/Friend Ball/gi, 'Friend Ball')
			.replace(/Moon Ball/gi, 'Luna Ball')
			.replace(/Love Ball/gi, 'Love Ball')
			.replace(/Sport Ball/gi, 'Gara Ball')
			.replace(/Net Ball/gi, 'Rete Ball')
			.replace(/Dive Ball/gi, 'Sub Ball')
			.replace(/Nest Ball/gi, 'Minor Ball')
			.replace(/Repeat Ball/gi, 'Bis Ball')
			.replace(/Timer Ball/gi, 'Timer Ball')
			.replace(/Luxury Ball/gi, 'Chich Ball')
			.replace(/Premier Ball/gi, 'Premier Ball')
			.replace(/Heal Ball/gi, 'Cura Ball')
			.replace(/Dusk Ball/gi, 'Scuro Ball')
			.replace(/Quick Ball/gi, 'Velox Ball')
			.replace(/Park Ball/gi, 'Parco Ball')
			.replace(/Cherish Ball/gi, 'Pregio Ball')
			.replace(/Dream Ball/gi, 'Dream Ball')

		// Messaggi - Gen II

			.replace(/Flower Mail/gi, 'Messaggio Fiore')
			.replace(/Surf Mail/gi, 'Mess. Surf')
			.replace(/Litebluemail/gi, 'Mess. Azzurro')
			.replace(/Portraitmail/gi, 'Mess. Ritratto')
			.replace(/Lovely Mail/gi, 'Mess. Dolce')
			.replace(/Eon Mail/gi, 'Mess. Eon')
			.replace(/Morph Mail/gi, 'Mess. Morph')
			.replace(/Bluesky Mail/gi, 'Mess. Cielo')
			.replace(/Music Mail/gi, 'Mess. Musica')
			.replace(/Mirage Mail/gi, 'Mess. Visione')

		// Messaggi - Gen III

			.replace(/Orange Mail/gi, 'Mess. Agrume')
			.replace(/Harbor Mail/gi, 'Mess. Porto')
			.replace(/Glitter Mail/gi, 'Mess. Luci')
			.replace(/Mech Mail/gi, 'Mess. Tecno')
			.replace(/Wood Mail/gi, 'Mess. Bosco')
			.replace(/Wave Mail/gi, 'Mess. Onda')
			.replace(/Bead Mail/gi, 'Mess. Perle')
			.replace(/Shadow Mail/gi, 'Mess. Ombra')
			.replace(/Tropic Mail/gi, 'Mess. Tropic')
			.replace(/Dream Mail/gi, 'Mess. Sogno')
			.replace(/Fab Mail/gi, 'Mess. Fab')
			.replace(/Retro Mail/gi, 'Mess. Retro')

		// Messaggi - Gen IV

			.replace(/Grass Mail/gi, 'Mess. Erba')
			.replace(/Flame Mail/gi, 'Mess. Fiamma')
			.replace(/Bubble Mail/gi, 'Mess. Bolla')
			.replace(/Bloom Mail/gi, 'Mess. Petalo')
			.replace(/Tunnel Mail/gi, 'Mess. Tunnel')
			.replace(/Steel Mail/gi, 'Mess. Lega')
			.replace(/Heart Mail/gi, 'Mess. Cuore')
			.replace(/Snow Mail/gi, 'Mess. Neve')
			.replace(/Space Mail/gi, 'Mess. Spazio')
			.replace(/Air Mail/gi, 'Mess.  Aereo')
			.replace(/Mosaic Mail/gi, 'Mess.  Iride')
			.replace(/Brick Mail/gi, 'Mess. Muro')

		// Messaggi - Gen V

			.replace(/Greet Mail/gi, 'Mess. Inizio')
			.replace(/Favored Mail/gi, 'Mess. TVB')
			.replace(/RSVP Mail/gi, 'Mess. Invito')
			.replace(/Thanks Mail/gi, 'Mess. Grazie')
			.replace(/Inquiry Mail/gi, 'Mess. Chiedi')
			.replace(/Like Mail/gi, 'Mess. Sugg.')
			.replace(/Reply Mail/gi, 'Mess. Risp.')
			.replace(/BridgeMail S/gi, 'Mess. Frec.')
			.replace(/BridgeMail D/gi, 'Mess. Libec.')
			.replace(/BridgeMail T/gi, 'Mess. Prop.')
			.replace(/BridgeMail V/gi, 'Mess. Vill.')
			.replace(/BridgeMail M/gi, 'Mess. Merav.')

		// Strumenti lotta

			.replace(/Guard Spec./gi, 'Superguardia')
			.replace(/Dire Hit/gi, 'Supercolpo')
			.replace(/X Attack/gi, 'Attacco X')
			.replace(/X Defend/gi, 'Difesa X')
			.replace(/X Speed/gi, 'Velocit&agrave X')
			.replace(/X Accuracy/gi, 'Precisione X')
			.replace(/X Special/gi, 'Special X')
			.replace(/X Sp\. Def/gi, 'Dif. Sp. X')
			.replace(/Poké Doll/gi, 'Pokébambola')
			.replace(/Fluffy Tail/gi, 'Coda Skitty')
			.replace(/Blue Flute/gi, 'Flauto Blu')
			.replace(/Yellow Flute/gi, 'Flauto Giallo')
			.replace(/Red Flute/gi, 'Flauto Rosso')
			.replace(/Poké Toy/gi, 'Pok&eacutegingillo')
			.replace(/Ability Urge/gi, 'Chiamabilit&agrave')
			.replace(/Item Drop/gi, 'Lascioggetto')
			.replace(/Item Urge/gi, 'Chiamoggetto')
			.replace(/Reset Urge/gi, 'Ripristino')

		// Strumenti base - Gen I

			.replace(/Coin Case/gi, 'Salvadanaio')
			.replace(/Itemfinder/gi, 'Detector')
			.replace(/Old Rod/gi, 'Amo Vecchio')
			.replace(/Good Rod/gi, 'Amo Buono')
			.replace(/Super Rod/gi, 'Super Amo')
			.replace(/S\.S\. Ticket/gi, 'Biglietto Nave')
			.replace(/Oak's Parcel/gi, 'Pacco Oak')
			.replace(/Poké Flute/gi, 'Pok&eacuteflauto')
			.replace(/Secret Key/gi, 'Chiave Segreta')
			.replace(/Bike Voucher/gi, 'Buono Bici')
			.replace(/Gold Teeth/gi, 'Denti d’Oro')
			.replace(/Card Key/gi, 'Apriporta')
			.replace(/Lift Key/gi, 'Chiave Ascensore')
			.replace(/Silph Scope/gi, 'Spettrosonda')
			.replace(/Bicycle/gi, 'Bicicletta')
			.replace(/Town Map/gi, 'Mappa')

		// Strumenti base - Gen II

			.replace(/GS Ball/gi, 'GS Ball')
			.replace(/Egg Ticket/gi, 'Bigl. Uovo')
			.replace(/Clear Bell/gi, 'Campana Chiara')
			.replace(/Blue Card/gi, 'Carta Blu')
			.replace(/SquirtBottle/gi, 'Annaffiatoio')
			.replace(/Red Scale/gi, 'Squama Rossa')
			.replace(/Lost Item/gi, 'Strumento Perso')
			.replace(/Pass/gi, 'Superpass')
			.replace(/Machine Part/gi, 'Pezzo macch.')
			.replace(/Silver Wing/gi, 'Aladargento')
			.replace(/Rainbow Wing/gi, "Ala d'Iride")
			.replace(/Mystery Egg/gi, 'Uovo Mistero')
			.replace(/SecretPotion/gi, 'Poz. Segreta')

		// Strumenti base - Gen III

			.replace(/Mach Bike/gi, 'Bici Corsa')
			.replace(/Wailmer Pail/gi, 'Vaso Wailmer')
			.replace(/Devon Goods/gi, 'Merce Devon')
			.replace(/Soot Sack/gi, 'Sacco Cenere')
			.replace(/Basement Key/gi, 'Chiave Sotterraneo')
			.replace(/Acro Bike/gi, 'Bici Cross')
			.replace(/Pokéblock Case/gi, 'Porta Pok&eacutemelle')
			.replace(/Letter/gi, 'Lettera')
			.replace(/Eon Ticket/gi, 'Biglietto Eone')
			.replace(/Red Orb/gi, 'Sfera Rossa')
			.replace(/Blue Orb/gi, 'Sfera Blu')
			.replace(/Scanner/gi, 'Scanner')
			.replace(/Go\-Goggles/gi, 'Occhialoni')
			.replace(/Meteorite/gi, 'Meteorite')
			.replace(/Rm\. (\d) Key/gi, 'Chiave stanza $1')
			.replace(/Storage Key/gi, 'L.')
			.replace(/Devon Scope/gi, 'Devonscopio')
			.replace(/Vs\. Seeker/gi, 'Cercasfide')
			.replace(/Fame Checker/gi, 'Pok&eacuteVIP')
			.replace(/TM Case/gi, 'Porta MT-MN')
			.replace(/Berry Pouch/gi, 'Porta Bacche')
			.replace(/Teachy TV/gi, 'Pok&eacute TV')
			.replace(/Rainbow Pass/gi, 'Sette Pass')
			.replace(/Tea/gi, 'T&egrave')
			.replace(/MysticTicket/gi, 'Biglietto Mistero')
			.replace(/AuroraTicket/gi, 'Biglietto Aurora')
			.replace(/Powder Jar/gi, 'Portafarina')
			.replace(/Ruby/gi, 'Rubino')
			.replace(/Sapphire/gi, 'Zaffiro')
			.replace(/Magma Emblem/gi, 'Stemma Magma')
			.replace(/Old Sea Map/gi, 'Mappa Stinta')

		// Strumenti base - Gen IV

			.replace(/Explorer Kit/gi, 'Esplorokit')
			.replace(/Poké Radar/gi, 'Pok&eacute Radar')
			.replace(/Point Card/gi, 'Scheda Punti')
			.replace(/Journal/gi, 'Agenda')
			.replace(/Seal Case/gi, 'Portabolli')
			.replace(/Fashion Case/gi, 'Scatola Chic')
			.replace(/Pal Pad/gi, 'Blocco Amici')
			.replace(/Works Key/gi, 'Turbinchiave')
			.replace(/Old Charm/gi, 'Arcamuleto')
			.replace(/Galactic Key/gi, 'Galachiave')
			.replace(/Sprayduck/gi, 'Sprayduck')
			.replace(/Poffin Case/gi, 'Portapoffin')
			.replace(/Suite Key/gi, 'Chiave Suite')
			.replace(/Oak's Letter/gi, 'Lettera di Oak')
			.replace(/Lunar Wing/gi, 'Ala Lunare')
			.replace(/Member Card/gi, 'Scheda Soci')
			.replace(/Parcel/gi, 'Pacco')
			.replace(/Vs\. Recorder/gi, 'Registradati')
			.replace(/Gracidea/gi, 'Gracidea')
			.replace(/Apricorn Box/gi, 'Ghicobox')
			.replace(/Unown Report/gi, 'UnownBloc')
			.replace(/Berry Pots/gi, 'Piantabacche')
			.replace(/Dowsing MCHN/gi, 'Ricerca Strum.')
			.replace(/GB Sounds/gi, 'Lettore GB')
			.replace(/Tidal Bell/gi, 'Camp. Onda')
			.replace(/Data Card/gi, 'Scheda Dati')
			.replace(/Jade Orb/gi, 'Sfera Verde')
			.replace(/Enigma Stone/gi, 'Misticristal')

		// Strumenti base - Gen V

			.replace(/Liberty Pass/gi, 'Liberticket')
			.replace(/Prop Case/gi, 'Portagadget')
			.replace(/Dragon Skull/gi, 'Teschio')
			.replace(/Light Stone/gi, 'Chiarolite')
			.replace(/Dark Stone/gi, 'Scurolite')
			.replace(/Xtransceiver/gi, 'Interpok&eacute')
			.replace(/Gram (\d)/gi, 'Missiva $1')
			.replace(/Colress MCHN/gi, 'Acrocongegno')
			.replace(/DNA Splicers/gi, 'Cuneo DNA')
			.replace(/Dropped Item/gi, 'Oggetto Perso')
			.replace(/Grubby Hanky/gi, 'Pezza Sporca')
			.replace(/Medal Box/gi, 'Box Premi')
			.replace(/Oval Charm/gi, 'Ovamuleto')
			.replace(/Permit/gi, 'Permesso')
			.replace(/Plasma Card/gi, 'Carta Plasma')
			.replace(/Reveal Glass/gi, 'Verispecchio')
			.replace(/Shiny Charm/gi, 'Cromamuleto')
			.replace(/Magma Stone/gi, 'Magmapietra')

		// Strumenti base - Gen VI

			.replace(/Adventure Rules/gi, 'Guida Avventura')
			.replace(/Elevator Key/gi, 'Chiave ascensore')
			.replace(/Holo Caster/gi, 'Holovox')
			.replace(/Honor of Kalos/gi, 'Emblema di Kalos')
			.replace(/Intriguing Stone/gi, 'Sasso suggestivo')
			.replace(/Lens Case/gi, 'Portalenti')
			.replace(/Looker Ticket/gi, 'Carta Bellocchio')
			.replace(/Mega Ring/gi, 'Megacerchio')
			.replace(/Power Plant Pass/gi, 'Pass Centrale')
			.replace(/Prof's Letter/gi, 'Lettera del Prof')
			.replace(/Roller Skates/gi, 'Pattini')
			.replace(/Sprinklotad/gi, 'Irrigalotad')
			.replace(/TMV Pass/gi, 'Pass TMV')

		// Ghicocche

			.replace(/Red Apricorn/gi, 'Ghicocca Rsa')
			.replace(/Blu Apricorn/gi, 'Ghicocca Blu')
			.replace(/Ylw Apricorn/gi, 'Ghicocca Gia')
			.replace(/Grn Apricorn/gi, 'Ghicocca Ver')
			.replace(/Wht Apricorn/gi, 'Ghicocca Bln')
			.replace(/Blk Apricorn/gi, 'Ghicocca Nra')
			.replace(/Pnk Apricorn/gi, 'Ghicocca Ros')

		// Altri strumenti

			.replace(/Super Repel/gi, 'Superrepellente')
			.replace(/Max Repel/gi, 'Repellente Max')
			.replace(/Repel/gi, 'Repellente')
			.replace(/Escape Rope/gi, 'Fune di Fuga')
			.replace(/Black Flute/gi, 'Flauto Nero')
			.replace(/White Flute/gi, 'Flauto Bianco')
			.replace(/Shoal Salt/gi, 'Sale Ondoso')
			.replace(/Shoal Shell/gi, 'Gusciondoso')
			.replace(/Red Shard/gi, 'Coccio Rosso')
			.replace(/Blue Shard/gi, 'Coccio Blu')
			.replace(/Yellow Shard/gi, 'Coccio Giallo')
			.replace(/Green Shard/gi, 'Coccio Verde')
			.replace(/Exp. Share/gi, 'Condividi Esp.')
			.replace(/Normal Box/gi, 'Scat. Normale')
			.replace(/Gorgeous Box/gi, 'Scat. Lusso')
			.replace(/SlowpokeTail/gi, 'CodaSlowpoke')
			.replace(/Honey/gi, 'Miele')
			.replace(/Growth Mulch/gi, 'Fertilrapido')
			.replace(/Damp Mulch/gi, 'Fertilidro')
			.replace(/Stable Mulch/gi, 'Fertilsaldo')
			.replace(/Gooey Mulch/gi, 'Fertilcolla')
			.replace(/Root Fossil/gi, 'Radifossile')
			.replace(/Claw Fossil/gi, 'Fossilunghia')
			.replace(/Helix Fossil/gi, 'Helixfossile')
			.replace(/Dome Fossil/gi, 'Domofossile')
			.replace(/Old Amber/gi, 'Ambra Antica')
			.replace(/Armor Fossil/gi, 'Fossilscudo')
			.replace(/Skull Fossil/gi, 'Fossilcranio')
			.replace(/Odd Keystone/gi, 'Roccianima')
			.replace(/Cover Fossil/gi, 'Fossiltappo')
			.replace(/Plume Fossil/gi, 'Fossilpiuma')
			.replace(/Pass Orb/gi, 'Passabilia')
			.replace(/Jaw Fossil/gi, 'Fossilmascella')
			.replace(/Sail Fossil/gi, 'Fossilpinna')
			.replace(/Amaze Mulch/gi, 'Fertilprodigio')
			.replace(/Boost Mulch/gi, 'Fertilcopioso')
			.replace(/Surprise Mulch/gi, 'Fertilsorpresa')
			.replace(/Rich Mulch/gi, 'Fertilflorido')
			.replace(/Discount Coupon/gi, 'Buono sconto')
			.replace(/Strange Souvenir/gi, 'Strano ninnolo')
			.replace(/Ability Capsule/gi, 'Capsula Abilit&agrave')
			.replace(/Joy Scent/gi, 'Olio di Pino')
			.replace(/Excite Scent/gi, 'Olio di Rosa')
			.replace(/Vivid Scent/gi, 'Olio Sublime')
			.replace(/Colognes Case/gi, 'Portaoli')
			.replace(/Colognes/gi, 'Oli')

		// Varie ed eventuali

			.replace(/\[\[TM/gi, '[[MT')
			.replace(/\[\[HM/gi, '[[MN')
			.replace(/\{\{DL\|([\w-\s]+)\|([\w\s]+)\}\}/gi, '[[$1#$2|$2]]')
			.replace(/Evolution-inducing held item/gi, 'Oggetti tenuti che provocano Evoluzione');
	}

	// Strumenti tenuti - Gen II

	return str.replace(/Bright Powder/gi, 'Luminpolvere')
		.replace(/Quick Claw/gi, 'Rapidartigli')
		.replace(/King's Rock/gi, 'Roccia di Re')
		.replace(/Silver Powder/gi, 'Argenpolvere')
		.replace(/Amulet Coin/gi, 'Monetamuleto')
		.replace(/Cleanse Tag/gi, 'Velopuro')
		.replace(/Smoke Ball/gi, 'Palla Fumo')
		.replace(/Everstone/gi, 'Pietrastante')
		.replace(/Focus Band/gi, 'Bandana')
		.replace(/Focus Sash/gi, 'Focalnastro')
		.replace(/Lucky Egg/gi, 'Fortunuovo')
		.replace(/Scope Lens/gi, 'Mirino')
		.replace(/Metal Coat/gi, 'Metalcoperta')
		.replace(/Leftovers/gi, 'Avanzi')
		.replace(/Dragon Scale/gi, 'Squama Drago')
		.replace(/Light Ball/gi, 'Elettropalla')
		.replace(/Soft Sand/gi, 'Sabbiasoffice')
		.replace(/Hard Stone/gi, 'Pietradura')
		.replace(/Miracle Seed/gi, 'Miracolseme')
		.replace(/Black Glasses/gi, 'Occhialineri')
		.replace(/Black Belt/gi, 'Cinturanera')
		.replace(/Magnet/gi, 'Calamita')
		.replace(/Mystic Water/gi, 'Acquamagica')
		.replace(/Sharp Beak/gi, 'Beccaffilato')
		.replace(/Poison Barb/gi, 'Velenago')
		.replace(/Never\-Melt Ice/gi, 'Gelomai')
		.replace(/Spell Tag/gi, 'Spettrotarga')
		.replace(/Twisted Spoon/gi, 'Cucchiaiotorto')
		.replace(/Charcoal/gi, 'Carbonella')
		.replace(/Dragon Fang/gi, 'Dentedidrago')
		.replace(/Pink Bow/gi, 'Fiocco Rosa')
		.replace(/Polkadot Bow/gi, 'Fiocco Pois')
		.replace(/Up-Grade/gi, 'Upgrade')
		.replace(/Lucky Punch/gi, 'Fortunpugno')
		.replace(/Metal Powder/gi, 'Metalpolvere')
		.replace(/Thick Club/gi, 'Ossospesso')
		.replace(/Stick/gi, 'Gambo')
		.replace(/Berserk Gene/gi, 'Gene Furioso')

	// Strumenti tenuti - Gen III

		.replace(/White Herb/gi, 'Erbachiara')
		.replace(/Macho Brace/gi, 'Crescicappa')
		.replace(/Soothe Bell/gi, 'Calmanella')
		.replace(/Mental Herb/gi, 'Mentalerba')
		.replace(/Choice Band/gi, 'Bendascelta')
		.replace(/Soul Dew/gi, 'Cuorugiada')
		.replace(/Deep Sea Tooth/gi, 'Denteabissi')
		.replace(/Deep Sea Scale/gi, 'Squamabissi')
		.replace(/Silk Scarf/gi, 'Sciarpa Seta')
		.replace(/Shell Bell/gi, 'Conchinella')
		.replace(/Sea Incense/gi, 'Marearoma')
		.replace(/Lax Incense/gi, 'Distraroma')
		.replace(/Red Scarf/gi, 'Fascia Rossa')
		.replace(/Blue Scarf/gi, 'Fascia Blu')
		.replace(/Pink Scarf/gi, 'Fascia Rosa')
		.replace(/Green Scarf/gi, 'Fascia Verde')
		.replace(/Yellow Scarf/gi, 'Fascia Gialla')

	// Strumenti tenuti - Gen IV

		.replace(/Flame Plate/gi, 'Lastrarogo')
		.replace(/Splash Plate/gi, 'Lastraidro')
		.replace(/Zap Plate/gi, 'Lastrasaetta')
		.replace(/Meadow Plate/gi, 'Lastraprato')
		.replace(/Icicle Plate/gi, 'Lastragelo')
		.replace(/Fist Plate/gi, 'Lastrapugno')
		.replace(/Toxic Plate/gi, 'Lastrafiele')
		.replace(/Earth Plate/gi, 'Lastrageo')
		.replace(/Sky Plate/gi, 'Lastracielo')
		.replace(/Mind Plate/gi, 'Lastamente')
		.replace(/Insect Plate/gi, 'Lastrabaco')
		.replace(/Stone Plate/gi, 'Lastrapietra')
		.replace(/Spooky Plate/gi, 'Lastratetra')
		.replace(/Draco Plate/gi, 'Lastradrakon')
		.replace(/Dread Plate/gi, 'Lastratimore')
		.replace(/Iron Plate/gi, 'Lastraferro')
		.replace(/Odd Incense/gi, 'Bizzoaroma')
		.replace(/Rock Incense/gi, 'Roccioaroma')
		.replace(/Full Incense/gi, 'Gonfioaroma')
		.replace(/Wave Incense/gi, 'Ondaroma')
		.replace(/Rose Incense/gi, 'Rosaroma')
		.replace(/Luck Incense/gi, 'Fortunaroma')
		.replace(/Pure Incense/gi, 'Puroaroma')
		.replace(/Protector/gi, 'Copertura')
		.replace(/Electirizer/gi, 'Elettritore')
		.replace(/Magmarizer/gi, 'Magmatore')
		.replace(/Dubious Disc/gi, 'Dubbiodisco')
		.replace(/Reaper Cloth/gi, 'Terrorpanno')
		.replace(/Razor Claw/gi, 'Affilartigli')
		.replace(/Razor Fang/gi, 'Affilodente')
		.replace(/Adamant Orb/gi, 'Adamasfera')
		.replace(/Lustrous Orb/gi, 'Splendisfera')
		.replace(/Griseous Orb/gi, 'Grigiosfera')
		.replace(/Wide Lens/gi, 'Grandelente')
		.replace(/Muscle Band/gi, 'Muscolbanda')
		.replace(/Wise Glasses/gi, 'Saviocchiali')
		.replace(/Expert Belt/gi, 'Abilcintura')
		.replace(/Light Clay/gi, 'Creta Luce')
		.replace(/Life Orb/gi, 'Assorbisfera')
		.replace(/Power Herb/gi, 'Vigorerba')
		.replace(/Toxic Orb/gi, 'Tossicsfera')
		.replace(/Flame Orb/gi, 'Fiammosfera')
		.replace(/Quick Powder/gi, 'Velopolvere')
		.replace(/Zoom Lens/gi, 'Zoomlente')
		.replace(/Metronome/gi, 'Plessimetro')
		.replace(/Iron Ball/gi, 'Ferropalla')
		.replace(/Lagging Tail/gi, 'Rallentocoda')
		.replace(/Destiny Knot/gi, 'Destincomune')
		.replace(/Black Sludge/gi, 'Fangopece')
		.replace(/Icy Rock/gi, 'Rocciafredda')
		.replace(/Smooth Rock/gi, 'Roccialiscia')
		.replace(/Heat Rock/gi, 'Rocciacalda')
		.replace(/Damp Rock/gi, 'Rocciaumida')
		.replace(/Grip Claw/gi, 'Presartigli')
		.replace(/Choice Scarf/gi, 'Stolascelta')
		.replace(/Sticky Barb/gi, 'Vischiopunta')
		.replace(/Power Bracer/gi, 'Vigorcerchio')
		.replace(/Power Belt/gi, 'Vigorfascia')
		.replace(/Power Lens/gi, 'Vigorlente')
		.replace(/Power Band/gi, 'Vigorbanda')
		.replace(/Power Ankle/gi, 'Vigorgliera')
		.replace(/Power Weight/gi, 'Vigorpeso')
		.replace(/Shed Shell/gi, 'Disfoguscio')
		.replace(/Big Root/gi, 'Granradice')
		.replace(/Choice Specs/gi, 'Lentiscelta')

	// Strumenti tenuti - Gen V

		.replace(/Douse Drive/gi, 'Idromodulo')
		.replace(/Shock Drive/gi, 'Voltmodulo')
		.replace(/Burn Drive/gi, 'Piromodulo')
		.replace(/Chill Drive/gi, 'Gelomodulo')
		.replace(/Prism Scale/gi, 'Squama Bella')
		.replace(/Eviolite/gi, 'Evolcondensa')
		.replace(/Float Stone/gi, 'Pietralieve')
		.replace(/Rocky Helmet/gi, 'Bitorzolelmo')
		.replace(/Air Balloon/gi, 'Palloncino')
		.replace(/Red Card/gi, 'Cartelrosso')
		.replace(/Ring Target/gi, 'Facilsaglio')
		.replace(/Binding Band/gi, 'Legafascia')
		.replace(/Absorb Bulb/gi, 'Bulbo')
		.replace(/Cell Battery/gi, 'Ricaripila')
		.replace(/Eject Button/gi, 'Pulsantefuga')
		.replace(/Fire Gem/gi, 'Bijoufuoco')
		.replace(/Water Gem/gi, 'Bijouacqua')
		.replace(/Electric Gem/gi, 'Bijouelettro')
		.replace(/Grass Gem/gi, 'Bijouerba')
		.replace(/Ice Gem/gi, 'Bijoughiac.')
		.replace(/Fighting Gem/gi, 'Bijoulotta')
		.replace(/Poison Gem/gi, 'Bijouveleno')
		.replace(/Ground Gem/gi, 'Bijouterra')
		.replace(/Flying Gem/gi, 'Bijouvolante')
		.replace(/Psychic Gem/gi, 'Bijoupsico')
		.replace(/Bug Gem/gi, 'Bijoucoleot.')
		.replace(/Rock Gem/gi, 'Bijouroccia')
		.replace(/Ghost Gem/gi, 'Bijouspettro')
		.replace(/Dragon Gem/gi, 'Bijoudrago')
		.replace(/Dark Gem/gi, 'Bijoubuio')
		.replace(/Steel Gem/gi, 'Bijouacciaio')
		.replace(/Normal Gem/gi, 'Bijounormale')

	// Strumenti tenuti - Gen VI

		.replace(/Whipped Dream/gi, 'Dolcespuma')
		.replace(/Sachet/gi, 'Bustina Aromi')
		.replace(/Pixie Plate/gi, 'Lastraspiritello')
		.replace(/Luminous Moss/gi, 'Muschioluce')
		.replace(/Snowball/gi, 'Palla di Neve')
		.replace(/Assault Vest/gi, 'Corpetto Assalto')
		.replace(/Safety Goggles/gi, 'Visierantisabbia')
		.replace(/Weakness Policy/gi, 'Vulneropolizza')

	// Bacche - Gen II - no template

		.replace(/Gold Berry/gi, 'Bacca Oro')
		.replace(/PSNCureBerry/gi, 'Baccantiveleno')
		.replace(/PRZCureBerry/gi, 'Baccantiparalisi')
		.replace(/Mint Berry/gi, 'Bacca Menta')
		.replace(/Burnt Berry/gi, 'Bacca Bruciata')
		.replace(/Ice Berry/gi, 'Bacca Ghiaccio')
		.replace(/Bitter Berry/gi, 'Bacca Amara')
		.replace(/MysteryBerry/gi, 'Bacca Misteriosa')
		.replace(/MiracleBerry/gi, 'Bacca Miracolosa')

	// Bacche - Gen II - con template

		.replace(/\{\{b\|Berry\}\}/gi, '[[Bacca]]')
		.replace(/\{\{b\|Gold\}\}/gi, '[[Bacca Oro]]')
		.replace(/\{\{b\|Mint\}\}/gi, '[[Bacca Menta]]')
		.replace(/\{\{b\|Burnt\}\}/gi, '[[Bacca Bruciata]]')
		.replace(/\{\{b\|Ice\}\}/gi, '[[Bacca Ghiaccio]]')
		.replace(/\{\{b\|Bitter\}\}/gi, '[[Bacca Amara]]')

	// Bacche - Gen III - no template

		.replace(/Cheri Berry/gi, 'Baccaliegia')
		.replace(/Chesto Berry/gi, 'Baccastagna')
		.replace(/Pecha Berry/gi, 'Baccapesca')
		.replace(/Rawst Berry/gi, 'Baccafrago')
		.replace(/Aspear Berry/gi, 'Baccaperina')
		.replace(/Leppa Berry/gi, 'Baccamela')
		.replace(/Oran Berry/gi, 'Baccarancia')
		.replace(/Persim Berry/gi, 'Baccaki')
		.replace(/Lum Berry/gi, 'Baccaprugna')
		.replace(/Sitrus Berry/gi, 'Baccacedro')
		.replace(/Figy Berry/gi, 'Baccafico')
		.replace(/Wiki Berry/gi, 'Baccaprugna')
		.replace(/Mago Berry/gi, 'Baccamango')
		.replace(/Aguav Berry/gi, 'Baccaguava')
		.replace(/Iapapa Berry/gi, 'Baccapaia')
		.replace(/Razz Berry/gi, 'Baccalampon')
		.replace(/Bluk Berry/gi, 'Baccamora')
		.replace(/Nanab Berry/gi, 'Baccabana')
		.replace(/Wepear Berry/gi, 'Baccapera')
		.replace(/Pinap Berry/gi, 'Baccananas')
		.replace(/Pomeg Berry/gi, 'Baccagrana')
		.replace(/Kelpsy Berry/gi, 'Baccalga')
		.replace(/Qualot Berry/gi, 'Baccaloquat')
		.replace(/Hondew Berry/gi, 'Baccamelon')
		.replace(/Grepa Berry/gi, 'Baccauva')
		.replace(/Tamato Berry/gi, 'Baccamodoro')
		.replace(/Cornn Berry/gi, 'Baccavena')
		.replace(/Magost Berry/gi, 'Baccagostan')
		.replace(/Rabuta Berry/gi, 'Baccambutan')
		.replace(/Nomel Berry/gi, 'Baccalemon')
		.replace(/Spelon Berry/gi, 'Baccamelos')
		.replace(/Pamtre Berry/gi, 'Baccapalma')
		.replace(/Watmel Berry/gi, 'Baccacomero')
		.replace(/Durin Berry/gi, 'Baccadurian')
		.replace(/Belue Berry/gi, 'Baccartillo')
		.replace(/Liechi Berry/gi, 'Baccalici')
		.replace(/Ganlon Berry/gi, 'Baccalongan')
		.replace(/Salac Berry/gi, 'Baccasalak')
		.replace(/Petaya Berry/gi, 'Baccapitaya')
		.replace(/Apicot Berry/gi, 'Baccacocca')
		.replace(/Lansat Berry/gi, 'Baccalangsa')
		.replace(/Starf Berry/gi, 'Baccambola')
		.replace(/Enigma Berry/gi, 'Baccaenigma')

	// Bacche - Gen III - con template

		.replace(/\{\{b\|Cheri\}\}/gi, '[[Baccaliegia]]')
		.replace(/\{\{b\|Chesto\}\}/gi, '[[Baccastagna]]')
		.replace(/\{\{b\|Pecha\}\}/gi, '[[Baccapesca]]')
		.replace(/\{\{b\|Rawst\}\}/gi, '[[Baccafrago]]')
		.replace(/\{\{b\|Aspear\}\}/gi, '[[Baccaperina]]')
		.replace(/\{\{b\|Leppa\}\}/gi, '[[Baccamela]]')
		.replace(/\{\{b\|Oran\}\}/gi, '[[Baccarancia]]')
		.replace(/\{\{b\|Persim\}\}/gi, '[[Baccaki]]')
		.replace(/\{\{b\|Lum\}\}/gi, '[[Baccaprugna]]')
		.replace(/\{\{b\|Sitrus\}\}/gi, '[[Baccacedro]]')
		.replace(/\{\{b\|Figy\}\}/gi, '[[Baccafico]]')
		.replace(/\{\{b\|Wiki\}\}/gi, '[[Baccaprugna]]')
		.replace(/\{\{b\|Mago\}\}/gi, '[[Baccamango]]')
		.replace(/\{\{b\|Aguav\}\}/gi, '[[Baccaguava]]')
		.replace(/\{\{b\|Iapapa\}\}/gi, '[[Baccapaia]]')
		.replace(/\{\{b\|Razz\}\}/gi, '[[Baccalampon]]')
		.replace(/\{\{b\|Bluk\}\}/gi, '[[Baccamora]]')
		.replace(/\{\{b\|Nanab\}\}/gi, '[[Baccabana]]')
		.replace(/\{\{b\|Wepear\}\}/gi, '[[Baccapera]]')
		.replace(/\{\{b\|Pinap\}\}/gi, '[[Baccananas]]')
		.replace(/\{\{b\|Pomeg\}\}/gi, '[[Baccagrana]]')
		.replace(/\{\{b\|Kelpsy\}\}/gi, '[[Baccalga]]')
		.replace(/\{\{b\|Qualot\}\}/gi, '[[Baccaloquat]]')
		.replace(/\{\{b\|Hondew\}\}/gi, '[[Baccamelon]]')
		.replace(/\{\{b\|Grepa\}\}/gi, '[[Baccauva]]')
		.replace(/\{\{b\|Tamato\}\}/gi, '[[Baccamodoro]]')
		.replace(/\{\{b\|Cornn\}\}/gi, '[[Baccavena]]')
		.replace(/\{\{b\|Magost\}\}/gi, '[[Baccagostan]]')
		.replace(/\{\{b\|Rabuta\}\}/gi, '[[Baccambutan]]')
		.replace(/\{\{b\|Nomel\}\}/gi, '[[Baccalemon]]')
		.replace(/\{\{b\|Spelon\}\}/gi, '[[Baccamelos]]')
		.replace(/\{\{b\|Pamtre\}\}/gi, '[[Baccapalma]]')
		.replace(/\{\{b\|Watmel\}\}/gi, '[[Baccacomero]]')
		.replace(/\{\{b\|Durin\}\}/gi, '[[Baccadurian]]')
		.replace(/\{\{b\|Belue\}\}/gi, '[[Baccartillo]]')
		.replace(/\{\{b\|Liechi\}\}/gi, '[[Baccalici]]')
		.replace(/\{\{b\|Ganlon\}\}/gi, '[[Baccalongan]]')
		.replace(/\{\{b\|Salac\}\}/gi, '[[Baccasalak]]')
		.replace(/\{\{b\|Petaya\}\}/gi, '[[Baccapitaya]]')
		.replace(/\{\{b\|Apicot\}\}/gi, '[[Baccacocca]]')
		.replace(/\{\{b\|Lansat\}\}/gi, '[[Baccalangsa]]')
		.replace(/\{\{b\|Starf\}\}/gi, '[[Baccambola]]')
		.replace(/\{\{b\|Enigma\}\}/gi, '[[Baccaenigma]]')


	// Bacche - Gen IV - no template

		.replace(/Occa Berry/gi, 'Baccacao')
		.replace(/Passho Berry/gi, 'Baccapasflo')
		.replace(/Wacan Berry/gi, 'Baccaparmen')
		.replace(/Rindo Berry/gi, 'Baccarindo')
		.replace(/Yache Berry/gi, 'Baccamoya')
		.replace(/Chople Berry/gi, 'Baccarosmel')
		.replace(/Kebia Berry/gi, 'Baccakebia')
		.replace(/Shuca Berry/gi, 'Baccanaca')
		.replace(/Coba Berry/gi, 'Baccababa')
		.replace(/Payapa Berry/gi, 'Baccapayapa')
		.replace(/Tanga Berry/gi, 'Baccaitan')
		.replace(/Charti Berry/gi, 'Baccaciofo')
		.replace(/Kasib Berry/gi, 'Baccacitrus')
		.replace(/Haban Berry/gi, 'Baccahaban')
		.replace(/Colbur Berry/gi, 'Baccaxan')
		.replace(/Babiri Berry/gi, 'Baccababiri')
		.replace(/Chilan Berry/gi, 'Baccacinlan')
		.replace(/Micle Berry/gi, 'Baccaracolo')
		.replace(/Custap Berry/gi, 'Baccacrela')
		.replace(/Jaboca Berry/gi, 'Baccajaba')
		.replace(/Rowap Berry/gi, 'Baccaroam')

	// Bacche - Gen IV - con template

		.replace(/\{\{b\|Occa\}\}/gi, '[[Baccacao]]')
		.replace(/\{\{b\|Passho\}\}/gi, '[[Baccapasflo]]')
		.replace(/\{\{b\|Wacan\}\}/gi, '[[Baccaparmen]]')
		.replace(/\{\{b\|Rindo\}\}/gi, '[[Baccarindo]]')
		.replace(/\{\{b\|Yache\}\}/gi, '[[Baccamoya]]')
		.replace(/\{\{b\|Chople\}\}/gi, '[[Baccarosmel]]')
		.replace(/\{\{b\|Kebia\}\}/gi, '[[Baccakebia]]')
		.replace(/\{\{b\|Shuca\}\}/gi, '[[Baccanaca]]')
		.replace(/\{\{b\|Coba\}\}/gi, '[[Baccababa]]')
		.replace(/\{\{b\|Payapa\}\}/gi, '[[Baccapayapa]]')
		.replace(/\{\{b\|Tanga\}\}/gi, '[[Baccaitan]]')
		.replace(/\{\{b\|Charti\}\}/gi, '[[Baccaciofo]]')
		.replace(/\{\{b\|Kasib\}\}/gi, '[[Baccacitrus]]')
		.replace(/\{\{b\|Haban\}\}/gi, '[[Baccahaban]]')
		.replace(/\{\{b\|Colbur\}\}/gi, '[[Baccaxan]]')
		.replace(/\{\{b\|Babiri\}\}/gi, '[[Baccababiri]]')
		.replace(/\{\{b\|Chilan\}\}/gi, '[[Baccacinlan]]')
		.replace(/\{\{b\|Micle\}\}/gi, '[[Baccaracolo]]')
		.replace(/\{\{b\|Custap\}\}/gi, '[[Baccacrela]]')
		.replace(/\{\{b\|Jaboca\}\}/gi, '[[Baccajaba]]')
		.replace(/\{\{b\|Rowap\}\}/gi, '[[Baccaroam]]')

	// Bacche - Gen VI - no template

		.replace(/Roseli Berry/gi, 'Baccarcad&egrave')
		.replace(/Kee Berry/gi, 'Baccalighia')
		.replace(/Maranga Berry/gi, 'Baccapane')

	// Bacche - Gen VI - template

		.replace(/\{\{b\|Roseli\}\}/gi, '[[Baccarcad&egrave]]')
		.replace(/\{\{b\|Kee\}\}/gi, '[[Baccalighia]]')
		.replace(/\{\{b\|Maranga\}\}/gi, '[[Baccapane]]')

	// Megapietre

		.replace(/Abomasite/gi, 'Abomasnowite')
		.replace(/Alakazite/gi, 'Alakazamite')
		.replace(/Blastoisinite/gi, 'Blastoisite')
		.replace(/Heracronite/gi, 'Heracrossite')
		.replace(/Houndoominite/gi, 'Houndoomite')
		.replace(/Lucarionite/gi, 'Lucarite')
		.replace(/Manectite/gi, 'Manectricite')
		.replace(/Mewtwonite X/gi, 'Mewtwoite X')
		.replace(/Mewtwonite Y/gi, 'Mewtwoite Y')
		.replace(/Sablenite/gi, 'Sableyite')
		.replace(/Altarianite/gi, 'Altarite')
		.replace(/Sharpedonite/gi, 'Sharpedite')
		.replace(/Slowbronite/gi, 'Slowbroite')
		.replace(/Glalitite/gi, 'Glalite')

  // Cristalli Z

		.replace(/Buginium Z/gi, 'Insectium Z')
		.replace(/Darkinium Z/gi, 'Obscurium Z')
		.replace(/Dragonium Z/gi, 'Draconium Z')
		.replace(/Electrium Z/gi, 'Electrium Z')
		.replace(/Fairium Z/gi, 'Follectium Z')
		.replace(/Fightinium Z/gi, 'Luctium Z')
		.replace(/Firium Z/gi, 'Pirium Z')
		.replace(/Flyinium Z/gi, 'Volantium Z')
		.replace(/Ghostium Z/gi, 'Spectrium Z')
		.replace(/Grassium Z/gi, 'Herbium Z')
		.replace(/Groundium Z/gi, 'Terrium Z')
		.replace(/Icium Z/gi, 'Glacium Z')
		.replace(/Normalium Z/gi, 'Normium Z')
		.replace(/Poisonium Z/gi, 'Venenium Z')
		.replace(/Psychium Z/gi, 'Psichium Z')
		.replace(/Rockium Z/gi, 'Petrium Z')
		.replace(/Steelium Z/gi, 'Metallium Z')
		.replace(/Waterium Z/gi, 'Idrium Z')
		.replace(/Pikanium Z/gi, 'Pikacium Z')
		//.replace(/Pikashunium Z/gi, '')
		.replace(/Aloraichium Z/gi, 'Aloraicium Z')
		.replace(/Eevium Z/gi, 'Eevium Z')
		.replace(/Snorlium Z/gi, 'Snorlactium Z')
		//.replace(/Mewnium Z/gi, '')
		.replace(/Decidium Z/gi, 'Deciduenium Z')
		.replace(/Incinium Z/gi, 'Incineronium Z')
		.replace(/Primarium Z/gi, 'Primarinium Z')
		.replace(/Tapunium Z/gi, 'Tapium Z')
		//.replace(/Marshadium Z/gi, '')

	// Correzione errori

		.replace(/Calamitaon/gi, 'Magneton')
		.replace(/Calamita Pull/gi, 'Magnetismo')
		.replace(/Calamitaismo/gi, 'Magnetismo')
		.replace(/Gamboy Hold/gi, 'Sticky Hold');
};

macros.generazioni = function(str, lastConj) {
	lastConj = lastConj || 'e';

	var ordinals = {1 : 'prima', 2 : 'seconda',
		3 : 'terza', 4 : 'quarta', 5 : 'quinta',
		6 : 'sesta', I : 'prima', II : 'seconda',
		III : 'terza', IV : 'quarta', V : 'quinta', VI: 'sesta'};

	return str.replace(/gen(eration)? ([1-7IV]+[-/1-6IV]*)+/gi,
		function(str, placeholder, gens) {
			gens = gens.match(/[1-7IV]+/gi);
			for (var k = 0; k < gens.length; ++k)
				gens[k] = ordinals[gens[k]];
			if (gens.length == 1)
				return gens[0] + ' generazione';
			var lastGen = gens.pop();
			return gens.join(', ') + ' ' + lastConj + ' '
				+ lastGen + ' generazione';
	});
};

/*

Il secondo argomento deve essere true per far sì che vengano
tradotti HeartGold e SoulSilver in Oro HeartGold e Argento
SoulSilver

*/

macros.giochi = function(str, transHGSS) {
	transHGSS = transHGSS == null || transHGSS;

	// Eccezioni per i colori

	str = str.replace(/firered color/gi, 'rossofuoco color')
		.replace(/leafgreen color/gi, 'verdefoglia color')
		.replace(/black2 color/gi, 'nero2 color')
		.replace(/white2 color/gi, 'bianco2 color');

	if (transHGSS) {
		str = str.replace(/SoulSilver/g, 'Argento SoulSilver')
			.replace(/HeartGold/g, 'Oro HeartGold')

		// Correzione errori

			.replace(/Argento Argento SoulSilver/g, 'Argento SoulSilver')
			.replace(/Oro Oro HeartGold/g, 'Oro HeartGold');
	}

	// Traduzione nomi giochi

	return str.replace(/FireRed/gi, 'Rosso Fuoco')
		.replace(/LeafGreen/gi, 'Verde Foglia')
		.replace(/Alpha Sapphire/gi, 'Zaffiro Alpha')
		.replace(/Omega Ruby/gi, 'Rubino Omega')
		.replace(/\bGold\b/gi, 'Oro')
		.replace(/\bSilver\b/gi, 'Argento')
		.replace(/\bRed\b/gi, 'Rosso')
		.replace(/\bBlue\b/gi, 'Blu')
		.replace(/\bGreen\b/gi, 'Verde')
		.replace(/Crystal/gi, 'Cristallo')
		.replace(/Yellow/gi, 'Giallo')
		.replace(/\bRuby\b/gi, 'Rubino')
		.replace(/Sapphire/gi, 'Zaffiro')
		.replace(/Emerald/gi, 'Smeraldo')
		.replace(/Diamond/gi, 'Diamante')
		.replace(/\bPearl\b/gi, 'Perla')
		.replace(/Platinum/gi, 'Platino')
		.replace(/\bBlack\b/gi, 'Nero')
		.replace(/\bWhite\b/gi, 'Bianco')

	// Traduzione sigle dei giochi

		.replace(/\bRG_/g, 'RV_')
		.replace(/\bRG\b/g, 'RV')
		.replace(/\bRGB_/g, 'RVB_')
		.replace(/\bRGB\b/g, 'RVB')
		.replace(/\bRGBY_/g, 'RVBG_')
		.replace(/\bRGBY\b/g, 'RVBG')
		.replace(/\bY\b/g, 'G')
		.replace(/\bY_/g, 'G_')
		.replace(/\bGS_/g, 'OA_')
		.replace(/\bGS\b/g, 'OA')
		.replace(/\bGSC_/g, 'OAC_')
		.replace(/\bGSC\b/g, 'OAC')
		.replace(/\bRu?Sa?_/g, 'RZ_')
		.replace(/\bRu?Sa?\b/g, 'RZ')
		.replace(/\bSa_/g, 'Z_')
		.replace(/\bSa\b/g, 'Z')
		.replace(/\bRSE_/g, 'RZS_')
		.replace(/\bRSE\b/g, 'RZS')
		.replace(/\bRE_/g, 'RS_')
		.replace(/\bRE\b/g, 'RS')
		.replace(/\bSE_/g, 'ZS_')
		.replace(/\bSE\b/g, 'ZS')
		.replace(/\bE_/g, 'S_')
		.replace(/\bE\b/g, 'S')
		.replace(/\bFR?LG?_/g, 'RFVF_')
		.replace(/\bFR?LG?\b/g, 'RFVF')
		.replace(/\bHS_/g, 'HGSS_')
		.replace(/\bHS\b/g, 'HGSS')
		.replace(/\bBW_/g, 'NB_')
		.replace(/\bBW\b/g, 'NB')
		.replace(/\bB2W2_/g, 'N2B2_')
		.replace(/\bB2W2\b/g, 'N2B2')
		.replace(/\bBl_/g, 'N_')
		.replace(/\bBl\b/g, 'N')
		.replace(/\bW_/g, 'Bi_')
		.replace(/\bW\b/g, 'Bi')
		.replace(/\bB2_/g, 'N2_')
		.replace(/\bB2\b/g, 'N2')
		.replace(/\bW2_/g, 'B2_')
		.replace(/\bW2\b/g, 'B2')
		.replace(/\bBWB2W2_/g, 'NBN2B2_')
		.replace(/\bBWB2W2\b/g, 'NBN2B2')
		.replace(/\by_/g, 'Y_')
		.replace(/\by\b/g, 'Y')
		.replace(/\bOR_/g, 'RO_')
		.replace(/\bOR\b/g, 'RO')
		.replace(/\bAS_/g, 'ZA_')
		.replace(/\bAS\b/g, 'ZA')
		.replace(/\bORAS_/g, 'ROZA_')
		.replace(/\bORAS\b/g, 'ROZA')
		.replace(/([\|=]\n?)Pokémon Stadium(\n?[\|=])/g, '$1St$2')
		.replace(/([\|=]\n?)Pokémon Stadium 2(\n?[\|=])/g, '$1St2$2')

	// Correzione errori

		.replace(/Diamante\s?Storm/gi, 'Diamantempesta');
};

macros.colori = function(str) {
	str = str.replace(/color buio/gi, 'color dark');
	var matches = /\{\{([\s\w]+) color\s?[dark|light]?\}\}/gi.exec(str);
	str = str.replace(/\{\{([\s\w]+) color\s?((dark|light))?\}\}/gi,
		'{{#invoke: colore | $1 | $2 }}')
		.replace(/(\{\{#invoke: colore \| .+? )\|\s*\}\}/gi, '$1| normale }}');
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

		str = str.replace(/(\w+) (Forme?|Mode)/gi, 'Forma $1')
			.replace(/(\w+) Cloak/gi, 'Manto $1')
			.replace(/(\w+) Sea/gi, 'Mare $1')
			.replace(/(\w+) Pattern/gi, 'Motivo $1')
			.replace(/(\w+) Flower/gi, 'Fiore $1')
			.replace(/(\w+) Trim/gi, 'Taglio $1')
			.replace(/Size/gi, '')
			.replace(/Standard Mode/gi, 'Forma Normalit&agrave')
			.replace(/Zen Mode/gi, 'Forma Zen')
			.replace(/(\w+) Mode/gi, 'Modo $1')

		// Traduzione dei nomi estesi delle forme

			.replace(/(Normal|Neutral)/gi, 'Normale')
			.replace(/Plant/gi, 'Pianta')
			.replace(/Overcast/gi, 'Nuvola')
			.replace(/West/gi, 'Ovest')
			.replace(/Altered/gi, 'Alterata')
			.replace(/Land/gi, 'Terra')
			.replace(/Red-Striped/gi, 'Linearossa')
			.replace(/Spring/gi, 'Primavera')
			.replace(/Incarnate/gi, 'Incarnazione')
			.replace(/Ordinary/gi, 'Ordinaria')
			.replace(/Aria Forme/gi, 'Forma Canto')
			.replace(/Red/gi, 'Rosso')
			.replace(/Natural Form/gi, 'Nessun Taglio')
			.replace(/Flower/gi, 'Fiore')
			.replace(/Shield/gi, 'Scudo')
			.replace(/Average/gi, 'Normale')
			.replace(/\bexclamation\b/gi, 'esclamativo')
			.replace(/\bquestion\b/gi, 'interrogativo')
			.replace(/\beast\b/gi, 'est')
			.replace(/\bsummer\b/gi, 'estate')
			.replace(/\bautumn\b/gi, 'autunno')
			.replace(/\bwinter\b/gi, 'inverno')
			.replace(/\bactive\b/gi, 'attivo')
			.replace(/\barchipelago\b/gi, 'arcipelago')
			.replace(/\bcontinental\b/gi, 'continentale')
			.replace(/\belegant\b/gi, 'eleganza')
			.replace(/\bgarden\b/gi, 'prato')
			.replace(/\bicy\s?snow\b/gi, 'nevi perenni')
			.replace(/\bhigh\s?plains\b/gi, 'deserto')
			.replace(/\bjungle\b/gi, 'giungla')
			.replace(/\bmarine\b/gi, 'marino')
			.replace(/\bmeadow\b/gi, 'giardinfiore')
			.replace(/\bmodern\b/gi, 'trendy')
			.replace(/\bmonsoon\b/gi, 'pluviale')
			.replace(/\bocean\b/gi, 'oceanico')
			.replace(/\bpolar\b/gi, 'nordico')
			.replace(/\briver\b/gi, 'fluviale')
			.replace(/\bsandstorm\b/gi, 'sabbia')
			.replace(/\bsavannah\b/gi, 'savana')
			.replace(/\bsun\b/gi, 'solare')
			.replace(/\btundra\b/gi, 'manto di neve')
			.replace(/\bfancy\b/gi, 'sbarazzino')
			.replace(/\bpokeball\b/gi, 'pok&eacute ball')
			.replace(/\borange\b/gi, 'arancione')
			.replace(/\byellow\b/gi, 'giallo')
			.replace(/\bblue\b/gi, 'blu')
			.replace(/\bheart\b/gi, 'cuore')
			.replace(/\bdiamond\b/gi, 'diamante')
			.replace(/\bstar\b/gi, 'stella')
			.replace(/\b(la)?\s?reine\b/gi, 'regina')
			.replace(/\bgentildonna\b/gi, 'matron')
			.replace(/\bdebutante\b/gi, 'signorina')
			.replace(/\bdandy\b/gi, 'gentiluomo')

		// Traduzione delle sigle. Solo se accompagnate da ndex,
		// poiché forme diverse condividono le stesse sigle

			.replace(/666Arc/g, '666A')
			.replace(/666Con/g, '666C')
			.replace(/666Ele/g, '666E')
			.replace(/666Gar/g, '666Pr')
			.replace(/666Icy/g, '666Ne')
			.replace(/666Hig/g, '666D')
			.replace(/666Jun/g, '666Gu')
			.replace(/666Mar/g, '666Mr')
			.replace(/666Mod/g, '666T')
			.replace(/666Mon/g, '666Pl')
			.replace(/666Oce/g, '666O')
			.replace(/666Pol/g, '666No')
			.replace(/666Riv/g, '666F')
			.replace(/666San/g, '666Sb')
			.replace(/666Sav/g, '666Sv')
			.replace(/666Sun/g, '666So')
			.replace(/666Tun/g, '666Mn')
			.replace(/666Fan/g, '666Sr')
			.replace(/666Pok/g, '666Po')
			.replace(/201EX/g, '201PE')
			.replace(/201QU/g, '201PD')
			.replace(/58(5|6)S/g, '58$1E')
			.replace(/58(5|6)W/g, '58$1I')
			.replace(/6(69|70|71)O/g, '6$1A')
			.replace(/6(69|70|71)B/g, '6$1Bl')
			.replace(/6(69|70|71)Y/g, '6$1G')
			.replace(/6(69|70|71)W/g, '6$1Bi')
			.replace(/676De/g, '676Si')
			.replace(/676Di/g, '676D')
			.replace(/676He/g, '676C')
			.replace(/676Ka/g, '676K')
			.replace(/676La/g, '676R')
			.replace(/676Ma/g, '676Gd')
			.replace(/676Ph/g, '676F')
			.replace(/676Da/g, '676Gu');
	}

	// Traduzione dei nomi estesi delle forme

	return str.replace(/\bsunny\b/gi, 'sole')
		.replace(/\brain\b/gi, 'pioggia')
		.replace(/\bsnowy\b/gi, 'neve')
		.replace(/\battack\b/gi, 'attacco')
		.replace(/\bdefense\b/gi, 'difesa')
		.replace(/\bspeed\b/gi, 'velocit&agrave')
		.replace(/\bsandy\b/gi, 'sabbia')
		.replace(/\btrash\b/gi, 'scarti')
		.replace(/\bheat\b/gi, 'calore')
		.replace(/\bwash\b/gi, 'lavaggio')
		.replace(/\bfrost\b/gi, 'gelo')
		.replace(/\bfan\b/gi, 'vortice')
		.replace(/\bmow\b/gi, 'taglio')
		.replace(/\borigin\b/gi, 'originale')
		.replace(/\bsky\b/gi, 'cielo')
		.replace(/\bblue-?striped\b/gi, 'lineablu')
		.replace(/\bdaruma\b/gi, 'zen')
		.replace(/\btherian\b/gi, 'totem')
		.replace(/\bblack\b/gi, 'nero')
		.replace(/\bwhite\b/gi, 'bianco')
		.replace(/\bresolute\b/gi, 'risoluta')
		.replace(/\bstep\b/gi, 'danza')
		.replace(/\bmale\b/gi, 'maschio')
		.replace(/\bfemale\b/gi, 'femmina')
		.replace(/\bblade\b/gi, 'spada')
		.replace(/\bsmall\b/gi, 'mini')
		.replace(/\blarge\b/gi, 'grande')
		.replace(/\bsuper\b/gi, 'maxi')
		.replace(/\bconfined\b/gi, 'vincolato')
		.replace(/\bunbound\b/gi, 'libero')

	// Traduzione delle sigle. Solo se accompagnate da ndex,
	// poiché forme diverse condividono le stesse sigle

		.replace(/479L/g, '479T')
		.replace(/479W/g, '479L')
		.replace(/479O/g, '479C')
		.replace(/479F/g, '479V')
		.replace(/479R/g, '479G')
		.replace(/646B/g, '646N')
		.replace(/646W/g, '646B')
		.replace(/41(2|3)G/g, '41$1Sa')
		.replace(/41(2|3)S/g, '41$1Sc')
		.replace(/648P/g, '648D')
		.replace(/386S/g, '386V')
		.replace(/351R/g, '351P')
		.replace(/351H/g, '351N')
		.replace(/710_0/g, '710L')
		.replace(/710_1/g, '710S')
		.replace(/710_2/g, '710XL')
		.replace(/711_0/g, '711L')
		.replace(/711_1/g, '711S')
		.replace(/711_2/g, '711XL')
		.replace(/681B/g, '681S')
		.replace(/492S/g, '492C')
		.replace(/720U/g, '720L')
		.replace(/745Mn/g, '745N')
		.replace(/745D/g, '745C')
		.replace(/800DM/g, '800V')
		.replace(/800DW/g, '800A');
};

macros.intestazioni = function(str, type) {
	var customTrans = {
		learnset: {
			learnlist: '==Mosse apprese==',
			movelist: '==Apprendimento=='
		}
	};

	var tmHeading = str.indexOf('h/7') == -1
		? '==Tramite [[MT]]/[[MN]]=='
		: '==Tramite [[MT]]==';

	return str.replace(/TM(\d{2,3})/g, 'MT$1')
		.replace(/HM(\d{2,3})/g, 'MN$1')
		.replace(/==[Ll]earnset==/g, customTrans.learnset[type])
		.replace(/==\[\[Dream World\]\]\-only moves==/g, '==Mosse esclusive del {{pkmn|Dream World}}==')
		.replace(/==\{\{pkmn\|Dream World\}\}\-only moves==/g, '==Mosse esclusive del {{pkmn|Dream World}}==')
		.replace(/==By \[\[[Ll]evel\|leveling up\]\]==/g, '==Aumentando di [[livello]]==')
		.replace(/==By \[\[TM\]\]\/\[\[HM\]\]==/g, tmHeading)
		.replace(/==By \[\[TM\]\]==/g, '==Tramite [[MT]]==')
		.replace(/==By \[\[HM\]\]==/g, '==Tramite [[MN]]==')
		.replace(/==By \{\{pkmn\|breeding\}\}==/g, '==Tramite [[Accoppiamento Pok&eacutemon|accoppiamento]]==')
		.replace(/==By \[\[[Mm]ove [Tt]utor(\|tutoring)?\]\]==/g, "==Dall'[[Insegnamosse]]==")
		.replace(/==By \{\{pkmn2\|event\}\}s==/g, '==Tramite [[Evento Pok&eacutemon|eventi]]==')
		.replace(/==Speciale? moves?==/g, '==Mosse speciali==')
		.replace(/==By a prior \[\[evolution\]\]==/g, '==Tramite [[evoluzione|evoluzioni]] precedenti==')
		.replace(/==\{\{Trading Card Game\}\}\-only moves==/g, '==Mosse apprese solamente nel [[Gioco di Carte Collezionabili Pok&eacutemon|GCC]]==');
};

macros['Terre Selvagge'] = function(str) {
	// Terre Selvagge
	return str.replace(/Meetup Spot/gi, 'Piazzale Adunanza')
		.replace(/Rolling Fields/gi, 'Pianura Serena')
		.replace(/Dappled Grove/gi, 'Boschetto Ombraluce')
		.replace(/Watchtower Ruins/gi, 'Torre Diroccata')
		.replace(/East Lake Axewell/gi, 'Lago Axew (est)')
		.replace(/West Lake Axewell/gi, 'Lago Axew (ovest)')
		.replace(/Axew's Eye/gi, 'Occhio del Lago Axew')
		.replace(/South Lake Miloch/gi, 'Lago Milotic (sud)')
		.replace(/North Lake Miloch/gi, 'Lago Milotic (nord)')
		.replace(/Giant's Seat/gi, 'Sedia del Gigante')
		.replace(/Motostoke Riverbank/gi, 'Fiume di Steamington')
		.replace(/Bridge Field/gi, 'Piana dei Ponti')
		.replace(/Stony Wilderness/gi, 'Landa delle Pietre')
		.replace(/Dusty Bowl/gi, 'Conca delle Sabbie')
		.replace(/Giant's Mirror/gi, 'Specchio del Gigante')
		.replace(/Hammerlocke Hills/gi, 'Colle Knuckleburgh')
		.replace(/Giant's Cap/gi, 'Berretto del Gigante')
		.replace(/Lake of Outrage/gi, 'Lago Dragofuria')

		// Correzione errori

		// Ancora nessuno
};

macros['strumenti lotta'] = function(str) {
	return macros.strumenti(str, true);
};

macros['forme rilevanti'] = function(str) { return macros.forme(str, true); };

macros['Aree Dream World'] = function(str) {
	return str.replace(/\{\{[Dd]wa\|(.+?)\}\}/g, '[[$1]]')
		.replace(/Pleasant Forest/g, 'Boschetto')
		.replace(/Windswept Sky/g, 'Settimo Cielo')
		.replace(/Sparkling Sea/g, 'Mar Brillante')
		.replace(/Spooky Manor/g, 'Maniero Antico')
		.replace(/Rugged Mountain/g, 'Monte Spigolo')
		.replace(/Icy Cave/g, 'Grotta Refrigerio')
		.replace(/Pokémon Café Forest/g, 'Foresta Pok&eacutemon Caf&eacute')
		.replace(/Dream Park/g, 'Parco Incanto');
};

macros['Aree Pokewalker'] = function(str) {
	return str.replace(/\{\{[Pp]w\|(.+?)\}\}/g, '[[$1]]')
		.replace(/Refreshing Field/g, 'Piana Tranquilla')
		.replace(/Noisy Forest/g, 'Bosco Cicaleccio')
		.replace(/Rugged Road/g, 'Sent. Impervio')
		.replace(/Beautiful Beach/g, 'Spiaggia Amena')
		.replace(/Suburban Area/g, 'Z. Residenziale')
		.replace(/Dim Cave/g, 'Caverna Penombra')
		.replace(/Blue Lake/g, 'Lago Turchese')
		.replace(/Town Outskirts/g, 'Periferia')
		.replace(/Hoenn Field/g, 'Piana di Hoenn')
		.replace(/Warm Beach/g, 'Spiag. Caliente')
		.replace(/Volcano Path/g, 'Sentiero Focoso')
		.replace(/Treehouse/g, 'Silvania')
		.replace(/Scary Cave/g, 'Grotta Terrore')
		.replace(/Sinnoh Field/g, 'Piana di Sinnoh')
		.replace(/Icy Mountain Rd./g, 'Dirupo Glaciale')
		.replace(/Big Forest/g, 'Grande Foresta')
		.replace(/White Lake/g, 'Lago Bruma')
		.replace(/Stormy Beach/g, 'Costa Tempestosa')
		.replace(/Resort/g, 'Riviera')
		.replace(/Quiet Cave/g, 'Grotta Pacifica')
		.replace(/Beyond the Sea/g, 'Oltremare')
		.replace(/Night Sky's Edge/g, 'Confinecielo')
		.replace(/Yellow Forest/g, 'Bosco Giallo')
		.replace(/Rally/g, 'Evento')
		.replace(/Sightseeing/g, 'A spasso')
		.replace(/Winner's Path/g, 'Via dei Campioni')
		.replace(/Amity Meadow/g, 'Campo Concordia');
};

macros.learnlist = function(str) {

	// Traduzione mosse, tipi, gare, intestazioni, sigle giochi

	str = macros.mosse(str);
	str = macros.gare(str);
	str = macros.tipi(str);
	str = macros.intestazioni(str, 'learnlist');
	str = macros.giochi(str, false);

	// Traduzione learnlist vero e proprio

	// Entry: traduzione numeri romani --> cifre arabe

	return str.replace(/\{\{learnlist\/([^V\|]+)([VI]+)/g, function(str, method, roman) {
		var numbers = {I: '1', II: '2', III: '3', IV: '4', V: '5', VI: '6', VII: '7', VIII: '8'};
		return '{{learnlist/' + method + numbers[roman]; })

	// Headers in doppio formato:
	// 		- {{learnlist/<method>h/<genheader>|<type1>|<type2>|<genpoke>|etc}} e
	// 		- {{learnlist/<method>h|<type1>|<type2>|<genheader>|<genpoke>|etc}}

		.replace(/\{\{[Ll]earnlist\/(\w+)h\|(.+)\|(\d)\|(\d)\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$2|$3|$4}}<br>{{#invoke: Render | entry | learnlist/entry$3.$1 |')
		.replace(/\{\{[Ll]earnlist\/(\w+)h\/(\d)\|(.+)\|(\d)\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$3|$2|$4}}<br>{{#invoke: Render | entry | learnlist/entry$2.$1 |')

	/*
		Entry: inserimento di un carattere di rimando al footer
		per le mosse imparate all'evoluzione.
	*/
		.replace(/\{\{tt\|\*\|.+evolving\}\}/g, '&amp;#x2670;')


	// Entry: MT e MN, Mini Sprite, N/A, Start, sup XY ORAS, fixing Evo., eliminazione tt

		.replace(/\{\{[Ll]earnlist\/tm(\d)\|TM/g, '{{learnlist/tm$1|MT')
		.replace(/\{\{[Ll]earnlist\/tm(\d)\|HM/g, '{{learnlist/tm$1|MN')
		.replace(/\{\{[Ll]earnlist\/tr\|TR/g, '{{learnlist/tm1|DT')
		.replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}(?:<br\/?>)?/g, '#$1#')
		.replace(/N\/A/g, 'Assente')
		.replace(/Start/g, 'Inizio')
		.replace(/\{\{sup\/6\|(XY|ROZA)\}\}/g, '$1')
		.replace(/\{\{tt\|[Ee]vo\.?\|[^|}]*\}\}|Evo\.?/g, "Evo")
		.replace(/\{\{tt\|.+\|(.+?)\}\}/g, '$1')

	// Entry: traduzioni generiche

		.replace(/\{\{[lL]earnlist\/(\w+)(\d)\|(.+)\|?\}\}/g,
		function(str, method, gen, args) {

			// Raddoppiamento livelli se non lo sono già
			/*if (gen > 4 && method == 'level' &&
				args.search(/^(Inizio|Assente|\d{1,3})\|(Inizio|Assente|\d{1,3})\|/) == -1)
				return '[[&euro;' + args.replace(/^(Inizio|\d{1,3})\|/, '$1|$1|')
					+ '&pound;]]|';*/

			return '[[&euro;' + args + '&pound;]]|';
		})

	// Sostituzione del livello 1 con Inizio

		.replace(/&euro;1\|/g, '&euro;Inizio|')
		.replace(/&euro;(Inizio|Assente|\d{1,3})\|1\|/g, '&euro;$1|Inizio|')

	// Footer in doppio formato:
	// 		- {{learnlist/<method>f/<footergen>|etc}}
	// 		- {{learnlist/<method>f|etc}}

		.replace(/\{\{[lL]earnlist\/(\w+)f\/(\d)\|(.+)\|(\d)(.*?)\}\}/g,
		function(str, method, genf, args, genp, otherArgs) {
			return '}}<br>{{#invoke: learnlist/hf | ' + method + 'f|' + args + '|' + genf
				+ '|' + genp + (otherArgs.search('xy=') == -1 ? otherArgs : '') + '}}';
		})
		.replace(/\{\{[lL]earnlist\/(\w+)f(.+?)\}\}/g, '}}<br>{{#invoke: learnlist/hf | $1f$2}}')

	// Footer: inserimento della generazione del footer se non presente, assumendo la settima

		.replace(/\{\{#invoke: learnlist\/hf \| (\w+)f([^0-9]+)\|(\d)\}\}/gi, '{{#invoke: learnlist/hf | $1f$2|8|$3}}')

	// Entry: traduzione null

		.replace(/\{\{[lL]earnlist\/(\w+)(\d)null\}\}\n?\}\}/g, '{{#invoke: learnlist/entry$2 | $1null}}')

	// Traduzione psichico|psichico in header e footer

	// str = str.replace(/€(.+)[Pp]sichico\|[Pp]sichico\|(.+)£/g, '€$1Psichico|Psico$2£');

		.replace(/[Ll]earnlist(.+)\|[Pp]sichico\|[Pp]sichico(.+)\}\}/g,
		'learnlist$1|Psico|Psico$2}}')
		.replace(/[Ll]earnlist(.+)\|[Pp]sichico(.+)\}\}/g, 'learnlist$1|Psico$2}}')

	// Eliminazione chiamata al modulo Render per gli entry null

		.replace(/\{\{#invoke: Render \| entry \| learnlist\/entry\d\.\w+ \|\n(\{\{.+null\}\})/g, '$1')

	// Eliminazione del parametro STAB e form e aggiustamenti sintattici

		.replace(/STAB=/g, '')
		.replace(/form=[^\|£]+\|?(.*?)£/g, '$1£')
		.replace(/\}\}&pound;\]\]/g, '&pound;]]}}')
		.replace(/\|?\n?\}\}\|?/g, '}}')
		.replace(/STAB prior to (Gen [0-9IV]+)/gi, function(str, gen) {
			return 'Gode di STAB prima della ' + macros.generazioni(gen);
		})

	// Eliminazione dei dati della mossa, recuperati in automatico dal modulo

		.replace(/[^\|]*\|(Fisico|Stato|Speciale)\|[^\|]*\|[^\|]*\|[^\|&]*\|?/g, '')

    // Sorting parameters according to our module
		.replace(/\[\[\&euro;(\w*)\|([^|]*)\|?([^|]*)?\|?('*)?\&pound;\]\](\||\})/g, function(str, level, move, notes = "", stab = "", close) {
            return "[[&euro;" + move + '|' + stab + '|' + notes + '|' + level + "&pound;]]" + close;
        });

};

macros["learnlist settima"] = function(str) {

	// Traduzione mosse, tipi, gare, intestazioni, sigle giochi

	str = macros.mosse(str);
	str = macros.gare(str);
	str = macros.tipi(str);
	str = macros.intestazioni(str, 'learnlist');
	str = macros.giochi(str, false);

	// Traduzione learnlist vero e proprio

	// Entry: traduzione numeri romani --> cifre arabe

	return str.replace(/\{\{learnlist\/([^V\|]+)([VI]+)/g, function(str, method, roman) {
		var numbers = {I: '1', II: '2', III: '3', IV: '4', V: '5', VI: '6', VII: '7'};
		return '{{learnlist/' + method + numbers[roman]; })

	// Headers in doppio formato:
	// 		- {{learnlist/<method>h/<genheader>|<type1>|<type2>|<genpoke>|etc}} e
	// 		- {{learnlist/<method>h|<type1>|<type2>|<genheader>|<genpoke>|etc}}

		.replace(/\{\{[Ll]earnlist\/(\w+)h\|(.+)\|([1-7])\|([1-7])\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$2|$3|$4}}<br>{{#invoke: Render | entry | learnlist/entry$3.$1 |')
		.replace(/\{\{[Ll]earnlist\/(\w+)h\/([1-7])\|(.+)\|([1-7])\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$3|$2|$4}}<br>{{#invoke: Render | entry | learnlist/entry$2.$1 |')

	/*
		Entry: inserimento di un carattere di rimando al footer
		per le mosse imparate all'evoluzione.
	*/
		.replace(/\{\{tt\|\*\|.+evolving\}\}/g, '&amp;#x2670;')


	// Entry: MT e MN, Mini Sprite, N/A, Start, sup XY ORAS, eliminazione tt

		.replace(/\{\{[Ll]earnlist\/tm([1-7])\|TM/g, '{{learnlist/tm$1|MT')
		.replace(/\{\{[Ll]earnlist\/tm([1-7])\|HM/g, '{{learnlist/tm$1|MN')
		.replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}(?:<br\/?>)?/g, '#$1#')
		.replace(/N\/A/g, 'Assente')
		.replace(/Start/g, 'Inizio')
		.replace(/\{\{sup\/6\|(XY|ROZA)\}\}/g, '$1')
		.replace(/\{\{tt\|[Ee]vo\.?\|[^|}]*\}\}|Evo\.?/g, "Evo")
		.replace(/\{\{tt\|.+\|(.+?)\}\}/g, '$1')

	// Entry: traduzioni generiche

		.replace(/\{\{[lL]earnlist\/(\w+)([1-7])\|(.+)\|?\}\}/g,
		function(str, method, gen, args) {

			// Raddoppiamento livelli se non lo sono già
			if (gen > 4 && method == 'level' &&
				args.search(/^(Inizio|Assente|Evo|Evoluzione|\d{1,3})\|(Inizio|Assente|Evo|Evoluzione|\d{1,3})\|/) == -1)
				return '[[&euro;' + args.replace(/^(Inizio|Evo|Evoluzione|\d{1,3})\|/, '$1|$1|')
					+ '&pound;]]|';

			return '[[&euro;' + args + '&pound;]]|';
		})

	// Sostituzione del livello 1 con Inizio

		.replace(/&euro;1\|/g, '&euro;Inizio|')
		.replace(/&euro;(Inizio|Assente|\d{1,3})\|1\|/g, '&euro;$1|Inizio|')

	// Footer in doppio formato:
	// 		- {{learnlist/<method>f/<footergen>|etc}}
	// 		- {{learnlist/<method>f|etc}}

		.replace(/\{\{[lL]earnlist\/(\w+)f\/([1-7])\|(.+)\|([1-7])(.*?)\}\}/g,
		function(str, method, genf, args, genp, otherArgs) {
			return '}}<br>{{#invoke: learnlist/hf | ' + method + 'f|' + args + '|' + genf
				+ '|' + genp + (otherArgs.search('xy=') == -1 ? otherArgs : '') + '}}';
		})
		.replace(/\{\{[lL]earnlist\/(\w+)f(.+?)\}\}/g, '}}<br>{{#invoke: learnlist/hf | $1f$2}}')

	// Footer: inserimento della generazione del footer se non presente, assumendo la settima

		.replace(/\{\{#invoke: learnlist\/hf \| (\w+)f([^1-7]+)\|([1-7])\}\}/gi, '{{#invoke: learnlist/hf | $1f$2|7|$3}}')

	// Entry: traduzione null

		.replace(/\{\{[lL]earnlist\/(\w+)(\d)null\}\}\n?\}\}/g, '{{#invoke: learnlist/entry$2 | $1null}}')

	// Traduzione psichico|psichico in header e footer

	// str = str.replace(/€(.+)[Pp]sichico\|[Pp]sichico\|(.+)£/g, '€$1Psichico|Psico$2£');

		.replace(/[Ll]earnlist(.+)\|[Pp]sichico\|[Pp]sichico(.+)\}\}/g,
		'learnlist$1|Psico|Psico$2}}')
		.replace(/[Ll]earnlist(.+)\|[Pp]sichico(.+)\}\}/g, 'learnlist$1|Psico$2}}')

	// Eliminazione chiamata al modulo Render per gli entry null

		.replace(/\{\{#invoke: Render \| entry \| learnlist\/entry\d\.\w+ \|\n(\{\{.+null\}\})/g, '$1')

	// Eliminazione del parametro STAB e form e aggiustamenti sintattici

		.replace(/STAB=/g, '')
		.replace(/form=[^\|£]+\|?(.*?)£/g, '$1£')
		.replace(/\}\}&pound;\]\]/g, '&pound;]]}}')
		.replace(/\|?\n?\}\}\|?/g, '}}')
		.replace(/STAB prior to (Gen [1-7IV]+)/gi, function(str, gen) {
			return 'Gode di STAB prima della ' + macros.generazioni(gen);
		})

	// Eliminazione dei dati della mossa, recuperati in automatico dal modulo

		.replace(/[^\|]*\|(Fisico|Stato|Speciale)\|[^\|]*\|[^\|]*\|[^\|&]*\|?/g, '');
};

macros['learnlist sesta'] = function(str) {

	// Traduzione mosse, tipi, gare, intestazioni, sigle giochi

	str = macros.mosse(str);
	str = macros.gare(str);
	str = macros.tipi(str);
	str = macros.intestazioni(str, 'learnlist');
	str = macros.giochi(str, false);

	// Traduzione learnlist vero e proprio

	// Entry: traduzione numeri romani --> cifre arabe

	return str.replace(/\{\{learnlist\/([^V\|]+)([VI]+)/g, function(str, method, roman) {
		var numbers = {I: '1', II: '2', III: '3', IV: '4', V: '5', VI: '6'};
		return '{{learnlist/' + method + numbers[roman]; })

	// Headers in doppio formato:
	// 		- {{learnlist/<method>h/<genheader>|<type1>|<type2>|<genpoke>|etc}} e
	// 		- {{learnlist/<method>h|<type1>|<type2>|<genheader>|<genpoke>|etc}}

		.replace(/\{\{[Ll]earnlist\/(\w+)h\|(.+)\|([1-6])\|([1-6])\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$2|$3|$4}}<br>{{#invoke: Render | entry | learnlist/entry$3.$1 |')
		.replace(/\{\{[Ll]earnlist\/(\w+)h\/([1-6])\|(.+)\|([1-6])\|?.*?\}\}/g, '{{#invoke: learnlist/hf | $1h|$3|$2|$4}}<br>{{#invoke: Render | entry | learnlist/entry$2.$1 |')

	// Entry: MT e MN, Mini Sprite, N/A, Start, sup XY ORAS, eliminazione tt

		.replace(/\{\{[Ll]earnlist\/tm([1-6])\|TM/g, '{{learnlist/tm$1|MT')
		.replace(/\{\{[Ll]earnlist\/tm([1-6])\|HM/g, '{{learnlist/tm$1|MN')
		.replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}/g, '#$1#')
		.replace(/N\/A/g, 'Assente')
		.replace(/Start/g, 'Inizio')
		.replace(/\{\{sup\/6\|(XY|ROZA)\}\}/g, '$1')
		.replace(/\{\{tt\|.+\|(.+?)\}\}/g, '$1')

	// Entry: traduzioni generiche

		.replace(/\{\{[lL]earnlist\/(\w+)([1-6])\|(.+)\|?\}\}/g,
		function(str, method, gen, args) {

			// Raddoppiamento livelli se non lo sono già

			if (gen > 4 && method == 'level' &&
				args.search(/^(Inizio|Assente|\d{1,3})\|(Inizio|Assente|\d{1,3})\|/) == -1)
				return '[[&euro;' + args.replace(/^(Inizio|\d{1,3})\|/, '$1|$1|')
					+ '&pound;]]|';
			return '[[&euro;' + args + '&pound;]]|';
		})

	// Sostituzione del livello 1 con Inizio

		.replace(/&euro;1\|/g, '&euro;Inizio|')
		.replace(/&euro;(Inizio|Assente|\d{1,3})\|1\|/g, '&euro;$1|Inizio|')

	// Footer in doppio formato:
	// 		- {{learnlist/<method>f/<footergen>|etc}}
	// 		- {{learnlist/<method>f|etc}}

		.replace(/\{\{[lL]earnlist\/(\w+)f\/([1-6])\|(.+)\|([1-6])(.*?)\}\}/g,
		function(str, method, genf, args, genp, otherArgs) {
			return '}}<br>{{#invoke: learnlist/hf | ' + method + 'f|' + args + '|' + genf
				+ '|' + genp + (otherArgs.search('xy=') == -1 ? otherArgs : '') + '}}';
		})
		.replace(/\{\{[lL]earnlist\/(\w+)f(.+?)\}\}/g, '}}<br>{{#invoke: learnlist/hf | $1f$2}}')

	// Footer: inserimento della generazione dl footer se non presente, assumendo la sesta

		.replace(/\{\{#invoke: learnlist\/hf \| (\w+)f([^1-6]+)\|([1-6])\}\}/gi, '{{#invoke: learnlist/hf | $1f$2|6|$3}}')

	// Entry: traduzione null

		.replace(/\{\{[lL]earnlist\/(\w+)(\d)null\}\}\n?\}\}/g, '{{#invoke: learnlist/entry$2 | $1null}}')

	// Traduzione psichico|psichico in header e footer

	// str = str.replace(/€(.+)[Pp]sichico\|[Pp]sichico\|(.+)£/g, '€$1Psichico|Psico$2£');

		.replace(/[Ll]earnlist(.+)\|[Pp]sichico\|[Pp]sichico(.+)\}\}/g,
		'learnlist$1|Psico|Psico$2}}')
		.replace(/[Ll]earnlist(.+)\|[Pp]sichico(.+)\}\}/g, 'learnlist$1|Psico$2}}')

	// Eliminazione chiamata al modulo Render per gli entry null

		.replace(/\{\{#invoke: Render \| entry \| learnlist\/entry\d\.\w+ \|\n(\{\{.+null\}\})/g, '$1')

	// Eliminazione del parametro STAB e form e aggiustamenti sintattici

		.replace(/STAB=/g, '')
		.replace(/form=[^\|£]+\|?(.*?)£/g, '$1£')
		.replace(/\}\}&pound;\]\]/g, '&pound;]]}}')
		.replace(/\|?\n?\}\}\|?/g, '}}')
		.replace(/STAB prior to (Gen [1-6IV]+)/gi, function(str, gen) {
			return 'Gode di STAB prima della ' + macros.generazioni(gen);
		});
};

macros.movelist = function(str) {
	var generation;

	// Giochi senza parametro
	var games = ['RB', 'RGB', 'GS', 'RS', 'RSE', 'DP', 'DPPt', 'BW', 'XY', 'SM'];
	// Corrispondente parametro
	var otherGames = ['Y', 'Y', 'C', 'E', 'FRLG', 'PtHGSS', 'HGSS', 'B2W2', 'ORAS', 'USUM'];

	// Traduzione tipi e intestazioni
	str = macros.forme(str, true);
	str = macros.tipi(str);
	str = macros.intestazioni(str, 'movelist');

	// Traduzione movelist vero e proprio
	return str.replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}/g, '#$1#')
		.replace(/\|\{\{tt\|(.+?)\|XY\}\}(<br>)?/g, '|$1|')
		.replace(/\{\{tt\|(.+?)\|ORAS\}\}/g, 'ORAS=$1')
		.replace(/\{\{[Mm]ovehead\/(\w+)\|(\w+)\|([0-9]+)(\|[^\}]*)?\}\}/g, function(str, kind, tipo, gen, tm){
			generation = gen;
			return '{{#invoke: Movelist/hf | ' + kind + 'h |' + tipo + '|' + gen + (tm ? tm : '') +'}}<br>{{#invoke: Render | entry | Movelist/entry.' + kind + ' |'
		})
		.replace(/\{\{[Mm]ovefoot(\/[Tt]utor)?\|(\w+?)(\|[0-9])?\}\}/g,
		'}}<br>{{#invoke: Movelist/hf | footer | $2}}<br>')
		.replace(/\{\{[Mm]oveentry\/[0-9]\|(.+)\}\}/g, function(str, data){
			// Traduce i parametri vuoti in no
			data = data.replace(/\|(?=\|)/g, '|no')
				.replace(/\|$/g, '|no')

			// Toglie nome, i type, numero di GU e i due GU
				.replace(/\|type2? ?\= ?\w+/g, '')
				.replace(/^([0-9a-zA-Z]+)\|([\w \-'.:]+[^|])\|[12]\|([\w \-]+)\|([\w \-]+)\|/g, '$1|')

			// Toglie i sup e li mette come parametri
			// Per LGPE lo scrivo a mano, e va eseguito prima perché l'altro rompe la sostituzione
				.replace(/\|([^}|]+){{sup\/7\|SM}}{{sup\/7\|USUM}}<br>([\d ,]+){{sup\/7\|PE}}/g, '|$1|LGPE=$2')
				.replace(/\|([^\}\|]+)\{\{sup\/\d\|(\w+)\}\}(<br>([\d ,]+)\{\{sup\/\d\|(\w+)\}\})?/g, function(str, lvl, game, _, lvl2 = 'no', game2){
					// se il primo gioco è ok mette il doppio parametro
					var otherGame = otherGames[games.indexOf(game)];
					if (otherGame)
						return '|' + lvl + '|' + otherGame + '=' + lvl2;
					else
						return '|no|' + game + '=' + lvl;
				})

			// Replace vari
				.replace(/\{\{tt\|Evo\.\|Learned upon evolving\}\}/g, 'Evo')
				.replace(/\|$/g, '')
				.replace(new RegExp(String.fromCharCode(10004), 'g'), 'yes')

			//console.log('[[€' + generation + '|' + data + '£]]|');
			return '[[&euro;' + generation + '|' + data + '&pound;]]|'
		})
		.replace(/\{\{[Mm]oveentry\|(.+)\|?\}\}/g,
		'[[&euro;$1&pound;]]|')
		.replace(/\{\{[Mm]oveentryspecial\|(.+)\|?\}\}/g,
		'[[&euro;$1&pound;]]|')
		.replace(/\{\{(maschio|femmina)&pound;\]\]\}\}/gi,
		'|form=$1&pound;]]}}')
		.replace(/\{\{(maschio|femmina)\}\}&pound;\]\]/gi,
		'|form=$1&pound;]]')
		.replace(/\}\}&pound;\]\]/g, '&pound;]]}}')
		.replace(/\|?\n?\}\}\n?\|?/g, '}}')
		.replace(/STAB prior to (Gen [1-7IV]+)/gi, function(str, gen) {
			return 'Gode di STAB prima della ' + macros.generazioni(gen);
		})

	// Traduzioni delle note del breed più ricorrenti

		.replace(/Breed from (Gen [1-7IV]+[-/1-6IV]* )?TM( in \w+)?/gi,
			function(str, gen, game) {
				gen = gen ? 'nella ' + macros.generazioni(gen, 'o') : '';
				game = game ? macros.giochi(game) : '';
				return 'I padri devono aver appreso la mossa tramite MT ' + gen + game;
		})
		.replace(/(Breed from|or) (Gen [1-7IV]+[-/1-6IV]* )?Move Tutor/gi,
			function(str, prefix, gen) {
				prefix = prefix == 'or' ? 'o' : 'I padri devono aver appreso la mossa tramite';
				gen = gen ? 'nella ' + macros.generazioni(gen, 'o') : '';
				return prefix + ' Insegnamosse ' + gen;
		})
		.replace(/chain breed(ing)?/gi, 'Catena di accoppiamenti')
		.replace(/Breed through Sketch in (\w+)/gi, function(str, game) {
			var replace = macros.generazioni(game);
			if (replace == game)
				replace = 'in ' + macros.giochi(game);
			else
				replace = 'nella ' + replace;
			return 'Il padre deve averla copiata con Schizzo ' + replace;
		});
};

macros['movelist tutor'] = function(str) {
	// Crea un array che contiene le celle da mostrare e non sulla base dell'header
	// {'cristallo', 'rossofuoco', 'smeraldo', 'xd', 'diamante', 'platino', 'heartgold', 'nero', 'nero2', 'x', 'rubinoomega', 'sole', 'ultrasole', 'lgpikachu', 'spada', 'isolaarmatura', 'landacorona' }
	var cells = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
	// posizione nell'array del primo parametro corrispondente alla generazione dell'indice. Il primo è -1 perché l'array è 0-based, l'ultimo serve per fare (headers[gen+1]-headers[gen])
	var headers = [-1, 0, 0, 1, 4, 7, 9, 11, 14, cells.lenght];
	// Cerca gli header che corrispondono ai vari giochi. Se non li torva viene utilizzato il default "non mostrare"
	// Bisogna sostituire subito il tick con yes perché su Bulba lo usano a caso
	str = str.replace(new RegExp(String.fromCharCode(10004), 'g'), 'yes')
		.replace(/\{\{[Mm]ovehead\/tutor\/([1-8])([yesno\|]*)\}\}/gi, function (match, gen, yesnos) {
		// Se la generazione ha un solo gioco su Bulba non c'è parametro, lo mostra e basta
		if (headers[gen + 1] - headers[gen] === 1){
			cells[headers[gen]] = '<replace>';
		}
		else {
			var splitted = yesnos.split('|');
			splitted.shift();
			for (i = 0; i < splitted.length; ++i)
				if (splitted[i] === 'yes')
					cells[headers[gen] + i] = '<replace>';
		}
		return '{{#invoke: Movelist/hf | tutor' + gen + ' ' + yesnos + '}}';
	});


	// Traduzione tipi e intestazioni
	str = macros.forme(str, true);
	str = macros.tipi(str);
	str = macros.intestazioni(str, 'movelist');

	// Traduzione movelist vero e proprio
	return str.replace(/\{\{MSP?\|([\w\d]+)\|(.+?)\}\}/g, '#$1#')
		.replace(/\|\{\{tt\|(.+?)\|XY\}\}(<br>)?/g, '|$1|')
		.replace(/\{\{Movehead\/tutor\|(.+?)\}\}/gi,
		'{{#invoke: Movelist/hf | tutorh | $1}}')
		.replace(/(\{\{\#invoke\: Movelist\/hf \| tutor[1-8] [^\}]*?\}\})\n\{\{[Mm]oveentry/gi,
		'$1<br>{{#invoke: Render | render | Modulo:Movelist/entry | tutor | //<br>{{Moveentry')
		//~ .replace(/\{\{[Mm]ovehead\/tutor\/([1-7])([yesno\|]*)\}\}/gi,
		//~ '{{#invoke: Movelist/hf | tutor$1 $2}}')
		.replace(/\{\{[Mm]ovefoot(\/[Tt]utor)?\|(\w+?)(\|\d)?\}\}/g,
		'}}<br>{{#invoke: Movelist/hf | footer}}<br>')
		.replace(/\{\{[Mm]oveentry\/\d\|(.+)\}\}/g, function(str, data){
			var ndex;
			// Se c'è lo stab se lo salva
			var stab = data.match(/\|STAB=(\'{0,3})/i);
			stab = stab ? ( '|STAB <- ' + stab[1]) : '';
			// Traduce i parametri vuoti in no
			data = data.replace(/\|(?=\|)/g, '|no')
				.replace(/\|$/g, '|no')

			// Toglie nome, i type, numero di GU e i due GU
				.replace(/\|type2? ?\= ?\w+/g, '')
				.replace(/^([0-9a-zA-Z]+)\|([\w \-'.:]+[^|])\|[12]\|([\w \-]+)\|([\w \-]+)\|/g, function(str, num){
					ndex = num + '|';
					return '';
				})

			// Replace vari
				.replace(/\|$/g, '')

			// Crea la nuova stringa dei tutor: sostituisce i <replace> in cells.join('|') con i parametri che trova in data
			var values = cells.join('|');
			('|' + data).replace(/\|(yes|no)/gi, function(match, p1) {
				values = values.replace('<replace>', p1);
				return '';
			});

			return '|' + ndex + values + stab + '| //';
		})
		.replace(/\{\{[Mm]oveentry\|(.+)\|?\}\}/g,
		'|$1| //')
		.replace(/\{\{[Mm]oveentryspecial\|(.+)\|?\}\}/g,
		'|$1| //')
		.replace(/\{\{(maschio|femmina)\}\}\| \/\//gi,
		'|form=$1| //')
		.replace(/\}\}\| \/\//g, '| //}}')
		.replace(/\|?\n?\}\}\n?\|?/g, '}}')
		.replace(/STAB prior to (Gen [1-7IV]+)/gi, function(str, gen) {
			return 'Gode di STAB prima della ' + macros.generazioni(gen);
		})
		.replace('{{#invoke: Movelist/hf | tutor2 }}', '{{#invoke: Movelist/hf | tutor2 |yes}}');
};

macros['movelist breed cinesi'] = function(str) {
	str = str.replace(/\{\{[Mm]SP\|([\dA]*)\|[^}]*\}\}/g, '#$1#')
	str = str.replace(/\|((?:[#\d]|{{sup\/\d\|\w*}})*)(?=\|)/gi, function(match, list){
			var res = /{{sup\/\d\|(\w*)}}/i.exec(match);
			if (!res)
				return match;
			return '|' + list.replace(/#\d\d\d#{{sup\/\d\|\w*}}/gi, '') + '|' + res[1] + '=' + list.replace(/{{sup\/\d\|\w*}}/gi, '');
		});

	return str.replace(/\|alt\=/gi, '|STAB=')
		.replace(/\{\{Movelist\/breed\/gen(\d)\|([\w\d]+)\|.*?\|.*?\|.*?\|([^}]*)\}\}/g, '[[&euro;$1|$2|$3&pound;]]|')
		.replace(/\|(?=\|)/g, '|no')
		.replace(/\u8FDE\u9501\u9057\u4F20/g, 'Catena di accoppiamenti')
		.replace(/\u7B2C\u4E8C\u4E16\u4EE3\u901A\u8FC7\u7B2C\u4E00\u4E16\u4EE3\u7684\u62DB\u5F0F\u5B66\u4E60\u5668\u9057\u4F20/g, 'In seconda generazione il padre deve aver appreso la mossa nei giochi di prima generazione tramite MT')
};

macros['table in langtable'] = function(str) {
	str = str.replace(/{\|[^\n]*style=\"[^\n]*background: ?#(?:{{([\w\s]*) color[\w\s]*}}|{{locationcolor\/\w*\|(\w*))[^\n]*border:[^{]*#(?:{{([\w\s]*) color[\w\s]*}}|{{locationcolor\/\w*\|(\w*))[^\n]*\n(?:\|\-[^\n]*\n)?\![^\n]*Language\n\![^\n]*Name(?:\n\![^\n]*Origin)?/i,
			function (match, t1, t2, t3, t4){
				t1 = t1 || t2;
				t3 = t3 || t4;
				return '{{langtable|type=' + t1 + (t1 === t3 ? '' : '|type2=' + t3)
			})
		.replace('|}', '}}')

	// Copia le righe con più nomi in uno
	while (/\|\-[^\n]*\n\|([\w\s]*)(?:, ?| ?<br> ?)((?:[\w\s,]|<br>)*)\n\|([^\n]*)\n(\|[^-][^\n]*\n)?/g.test(str))
		str = str.replace(/\|\-[^\n]*\n\|([\w\s]*)(?:, ?| ?<br> ?)((?:[\w\s,]|<br>)*)\n\|([^\n]*)\n(\|[^-][^\n]*\n)?/gi, '|-\n|$1\n|$3\n$4|-\n|$2\n|$3\n$4');

	var languages = [['Japanese', 'ja'], ['English', 'en'], ['French', 'fr'], ['German', 'de'], ['Spanish', 'es'], ['Korean', 'ko'], ['Vietnamese', 'vi'],
		['Chinese.*Mandarin[^\\n]*', 'zh_cmn'], ['Chinese.*Cantonese[^\\n]*', 'zh_yue'], ['Italian', 'it'], ['Brazilian Portuguese', 'pt_br'], ['Portuguese', 'pt'],
		['Russian', 'ru'], ['European Spanish', 'es_eu']];
	// Riga semplice, senza rowspan
	for (l in languages)
		str = str.replace(new RegExp('\\|\\-[^\\n]*\\n\\| ?' + languages[l][0] + ' ?\\n\\|([^\\n]*)\\n(?:\\|([^-][^\\n]*)\\n)?', 'i'), function(match, value, meaning) {
			return '|-\n|' + languages[l][1] + '=' + value.replace(/^[ \t][ \t]*/, '') + (meaning ? '|' + languages[l][1] + 'meaning=' + meaning.replace(/^[ \t][ \t]*/, '') + '\n' : '\n');
		});

	return macros.langtable(str.replace(/\|\-\n/g, ''));
}

macros.langtable = function(str) {
	var count = false;
	var rep = function(){
		count = !count;
		if (count)
			return "&lt;div&gt;";
		else
			return "&lt;/div&gt;";
	}

	str = macros.giochi(macros.colori(str));

	str = str.replace(/(<br>|\n)/g, function(match){
			if (match == '<br>')
				return rep();
			else if (match ==  '\n' && count)
				return rep() + '\n';
			else
				return '\n';
		})
		.replace(/''\{\{tt\|([^\|]*)\|[^\|]*\}\}''/gi, "''$1''")
		.replace(/\{\{tt\|\*\|([^\|]*)\}\}/gi, '($1)')

		// se il colore è lo stesso ma in due varianti diverse, indipendentemente da queste usa il parametro type
		.replace(/\|color=\{\{\#invoke\: colore \| ([\w\s\d]*) \| (?:normale|dark|light) \}\}\n?\|bordercolor=\{\{\#invoke\: colore \| \1 \| (?:normale|dark|light) \}\}/gi, '|type=$1')

		.replace(/\{\{Other languages\|/gi, "{{langtable|")
		.replace('TCG', 'GCC')
		.replace(/\[?\[?The Official Pok.mon Handbook\]?\]?/gi, 'Il grande libro ufficiale dei Pok&eacute;mon')
		.replace(/Games/gi, 'giochi')
		.replace(/Pre-Gen VII Media/gi, 'media precedenti alla settima generazione')
		.replace(/Same as (?:its |his |hers )?English name/gi, 'Uguale al nome inglese')
		.replace(/Same as (?:its |his |hers )?Japanese name/gi, 'Uguale al nome giapponese')
		.replace(/Transliteration of (?:its |his |hers )?Japanese name/gi, 'Traslitterazione del nome giapponese')
		.replace(/Transcription of (?:its |his |hers )?English name/gi, 'Trascrizione del nome inglese')
		// Do those two replace really make sense?
		.replace(/Transliteration of (?:its |his |hers )?English name/gi, 'Traslitterazione del nome inglese')
		.replace(/Transcription of (?:its |his |hers )?Japanese name/gi, 'Trascrizione del nome giapponese')

	str = macros.tipi(str);

	// prova ad aggiungere i template delle lingue
	var languages = [['zh_yue', 'yue'], ['zh_cmn', 'cmn'], ['ja', 'j'], ['ko', 'k'], ['el', 'gr'], ['gr', 'gr'], ['hi', 'hi'], ['th', 'th'], ['bg', 'bg'], ['he', 'he'], ['ru', 'ru'], ['sr', 'sr']];
	var regexNonstandardChar = /([^\s\n\u0020-\u017E\u200B\u2714\u01C4-\u0233\u1E00-\u1EFF]+)/g;

	for (lang in languages){
		str = str.replace(new RegExp('\\|' + languages[lang][0] + ' ?=([^|]*)(\\||})'), function(match, data, closing){
				return '|' + languages[lang][0] + '=' +
					data.replace(regexNonstandardChar, '{{' + languages[lang][1] + '|$1}}').replace(/^\s\s*/, '')
					+ closing;
			})
			.replace(new RegExp('\\|' + languages[lang][0] + 'meaning ?=([^|]*)(\\||})'), function(match, data, closing){
				console.log('meaning di', languages[lang][0]);
				return '|' + languages[lang][0] + 'meaning=' +
					data.replace(regexNonstandardChar, '{{' + languages[lang][1] + '|$1}}').replace(/^[ \t][ \t]*/, '')
					+ closing;
			})

		// Unifies calls space-separated
			.replace(new RegExp('{{' + languages[lang][1] + '\\|([^}]*)}}(\\s*){{' + languages[lang][1] + '\\|([^}]*)}}'),
				'{{' + languages[lang][1] + '|$1$2$3}}'
			);
	}

	return str;
}

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

	str = str.replace(/gender=maschio/gi, "gender=male")
		.replace(/gender=femmina/gi, "gender=female")
		.replace(/type([1-2])?=[Pp]sichico/gi, "type$1=Psico")
		.replace(/\{\{Party\/[Ff]ooter\}\}/gi,
		'&lt;/div&gt;\n|}{{-}}')
		.replace(/\{\{Party\//gi, '{{#invoke: Party | ')
		.replace(/Battle Point\|BP/gi, 'Punti Lotta|PL')
		.replace(/\s*style="margin:\s*auto?"\s*\|/gi, '')
		.replace(/\{\{#invoke:\s*colore\s*\|\s*(.+?)\s*\|?\s*(light|dark|normale)?\s*\}\}/gi, '$1 $2')
		.replace(/\|{{Pok.mon\/([1-7])/gi, '{{Pok&eacute;mon|gen=$1')
		.replace(/{{Party\/Div ?\| ?color={{.+? color ?.*?}}}}/gi, '{{#invoke: Party | Div}}')

	// Forme di Alola
		.replace(/\|form=\-Alola/gi, '|form=A')

	// replace dei giochi
		.replace(/\|game=SM/gi, '|game=SL')

	//correzione dello sprite
	var game = new RegExp('\\|game=(.+?)\\n').exec(str)[1];
	return str.replace(/\|sprite=(VS.*?\.png)/gi, '|sprite=' + game + ' $1')
};

macros['squadra in party'] = function(str) {

  return str.replace(/\{\{#invoke: ?Squadra ?\| ?Single/gi, "{{#invoke: Party | Single")
    .replace(/\{\{#invoke: ?Squadra ?\| ?Div ?\| ?color ?= ?[^\}]*}}/gi, "{{#invoke: Party | Div}}")
    .replace(/\n\|}\n\|}/gi, "\n&lt;/div&gt;\n|}")
    .replace(/\n\|{{Pok.mon/gi, "\n{{Pok&eacute;mon")
};

macros['classi allenatore VI'] = function(str) {
	return str.replace(/Pokémon Breeder/gi, 'Allevapokémon')
		.replace(/Bird Keeper/gi, 'Avicoltore')
		.replace(/Beauty/gi, 'Bellezza')
		.replace(/Kindler/gi, 'Brandifuoco')
		.replace(/Youngster/gi, 'Bullo')
		.replace(/Camper/gi, 'Campeggiatore')
		.replace(/Collector/gi, 'Cerca Pokémon')
		.replace(/Guitarist/gi, 'Chitarrista')
		.replace(/Tuber/gi, 'Ciambellino e Ciambellina')
		.replace(/Black Belt/gi, 'Cinturanera')
		.replace(/Battle Girl/gi, 'Combat Girl')
		.replace(/Old Couple/gi, 'Coppiarzilla')
		.replace(/Young Couple/gi, 'Coppietta')
		.replace(/Dragon Tamer/gi, 'Domadraghi')
		.replace(/Brains & Brawn/gi, 'Duo Braccio e Mente')
		.replace(/Rich Boy/gi, 'Elegantone')
		.replace(/Ace Duo/gi, 'Fantaduo')
		.replace(/Ace Trainer/gi, 'Fantallenatore e Fantallenatrice')
		.replace(/Sis and Bro/gi, 'Fratellini')
		.replace(/Twins/gi, 'Gemelle')
		.replace(/Monsieur/gi, 'Gentiluomo')
		.replace(/Backpacker/gi, 'Giramondo')
		.replace(/Bug Maniac/gi, 'Insettologo')
		.replace(/Sailor/gi, 'Marinaio')
		.replace(/Hiker/gi, 'Montanaro')
		.replace(/Swimmer/gi, 'Nuotatore e Nuotatrice')
		.replace(/Parasol Lady/gi, 'Ombrellina')
		.replace(/Fisherman/gi, 'Pescatore')
		.replace(/Free Diver/gi, 'Pescatrice di Perle')
		.replace(/Picnicker/gi, 'Picnic Girl')
		.replace(/Bug Catcher/gi, 'Pigliamosche')
		.replace(/PokéFan/gi, 'Pokéfan')
		.replace(/Poké Maniac/gi, 'Pokéfanatico')
		.replace(/Aroma Lady/gi, 'Profumina')
		.replace(/Lass/gi, 'Pupa')
		.replace(/Fairy Tale Girl/gi, 'Ragazza delle fiabe')
		.replace(/Team Aqua Grunt/gi, 'Recluta Team Idro')
		.replace(/Team Magma Grunt/gi, 'Recluta Team Magma')
		.replace(/Interviewers/gi, 'Reporter')
		.replace(/Ruin Maniac/gi, 'Scoprirovine')
		.replace(/Teammates/gi, 'Senior & Junior')
		.replace(/Psychic/gi, 'Sensitivo')
		.replace(/Myterious Sisters/gi, 'Sorelle Mistero')
		.replace(/Expert/gi, 'Specialista')
		.replace(/Hex Maniac/gi, 'Streghetta')
		.replace(/School Kid/gi, 'Studente e Studentessa')
		.replace(/Scuba Diver/gi, 'Sub')
		.replace(/Street Thug/gi, 'Tipaccio')
		.replace(/Delinquent/gi, 'Tipaccia')
		.replace(/Triathlete/gi, 'Triatleta');
}

macros['classi allenatore'] = macros['classi allenatore VI'];

macros['trainerlist ROZA'] = function(str) {
	str = macros['strumenti lotta'](str);
	str = macros['classi allenatore VI'](str);

	// Traduzione dei template
	return str.replace(/\{\{trainer([a-z]+)\|/gi, '{{Trainerlist/$1|')
	// sprite names
		.replace(/\|VS([a-zé\s]+)\.png/gi, '|ROZA VS$1.png')
		.replace(/ ?oras ?/gi, '')
	//rematches
		.replace(/After acquiring the \{\{badge\|([a-z]+)\}\}/gi, 'Dopo aver ottenuto la {{medaglia|$1}}')
		.replace(/After entering the \[\[Hall of Fame\]\]/g, "Dopo essere entrati nella [[Sala d'onore]]")
	//per sistemare la visualizzazione html
		.replace(/é/g, '&eacute;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
}

macros['spindata'] = function(str) {
	str = macros.mosse(str);
	str = macros.areeAmico(str);
	str = macros.tipi(str);

	return str
        // Generic spindata replacements
		.replace(/==Side game data==/gi, '==Dati spin-off==')
		.replace(/{{Spindata\/Head\|type=(\w*)((\|)type2=(\w*))?}}/gi, '{{Spindata/Head|$1$3$4}}')
		.replace(/\|}\s*$/, '&lt;/div&gt;')
		// .replace(/(?<![=}])\n(?!\|)/gi, '')
		.replace(/(?<![=}])\n/gi, '')
		.replace(/\|col=\d\|/gi, '|')
        // Move replacements corrections
		.replace(/\|Assistente=/gi, '|assist=')
		.replace(/\|speciale=/gi, '|special=')
        // Pinball
		.replace(/{{Spindata\/PinballRS\|/gi, '{{Spindata/PinballRZ|')
		.replace(/({{Spindata\/PinballRZ\|.*?\|)acquisition=Evolve(.*?}})/gi, '$1acquisition=Evoluzione$2')
		.replace(/({{Spindata\/PinballRZ\|.*?\|)acquisition=Catch(.*?}})/gi, '$1acquisition=Cattura$2')
        // Trozei (Link in Italian)
		.replace(/{{Spindata\/Trozei\|/gi, '{{Spindata/Link|')
		.replace(/({{Spindata\/Link\|.*?\|)rarity=Rare(.*?}})/gi, '$1rarity=Raro$2')
		.replace(/({{Spindata\/Link\|.*?\|)rarity=Common(.*?}})/gi, '$1rarity=Comune$2')
        // MDRB
		.replace(/({{Spindata\/MDRB\|.*?\|)rate=Evolve(.*?}})/gi, '$1rate=Evoluzione$2')
		.replace(/({{Spindata\/MDRB.*?)\|P[\dL]=[^|}]*/gi, '$1')
		.replace(/({{Spindata\/MDRB.*?)\|P[\dL]=[^|}]*/gi, '$1') // Pls fix this shit
		.replace(/({{Spindata\/MDRB.*?)\|P[\dL]=[^|}]*/gi, '$1')
		.replace(/({{Spindata\/MDRB.*?)\|P[\dL]=[^|}]*(.*?}})/gi, '$1$2')
        // TODO: add a macro to translate friend areas
        // MDTOC
		.replace(/{{Spindata\/MDTDS\|/gi, '{{Spindata/MDTOC|')
		.replace(/({{Spindata\/MDTOC\|.*?\|)IQ=(.*?}})/gi, '$1QI=$2')
        // Rangers
		.replace(/{{Spindata\/Ranger SoA\|/gi, '{{Spindata/RangerOsA|')
		.replace(/{{Spindata\/Ranger GS\|/gi, '{{Spindata/RangerTL|')
		.replace(/({{Spindata\/Ranger.*?\|)MinEXP(=.*?}})/gi, '$1minEXP$2')
		.replace(/({{Spindata\/Ranger.*?\|)MaxEXP(=.*?}})/gi, '$1maxEXP$2')
		.replace(/({{Spindata\/Ranger(?:|OsA|TL)\|.*?\|)field(p?)=Burn(.*?}})/gi, '$1field$2=Fuoco$3')
		.replace(/({{Spindata\/Ranger\|.*?\|)field=Cross(.*?}})/gi, '$1field=Valico$2')
		.replace(/({{Spindata\/Ranger(?:|OsA|TL)\|.*?\|)field(p?)=Crush(.*?}})/gi, '$1field$2=Distruzione$3')
		.replace(/({{Spindata\/Ranger(?:|OsA|TL)\|.*?\|)field(p?)=Cut(.*?}})/gi, '$1field$2=Taglio$3')
		.replace(/({{Spindata\/Ranger\|.*?\|)field=Flash(.*?}})/gi, '$1field=Flash$2')
		.replace(/({{Spindata\/Ranger\|.*?\|)field=Gust(.*?}})/gi, '$1field=Raffica$2')
		.replace(/({{Spindata\/Ranger(?:|OsA|TL)\|.*?\|)field(p?)=Recharge(.*?}})/gi, '$1field$2=Ricarica$3')
		.replace(/({{Spindata\/Ranger(?:|OsA|TL)\|.*?\|)field(p?)=Soak(.*?}})/gi, '$1field$2=Spruzzo$3')
		.replace(/({{Spindata\/Ranger(?:|OsA|TL)\|.*?\|)field(p?)=Tackle(.*?}})/gi, '$1field$2=Azione$3')
		.replace(/({{Spindata\/Ranger(?:OsA|TL)\|.*?\|)field(p?)=Electrify(.*?}})/gi, '$1field$2=Elettricit&agrave$3')
		.replace(/({{Spindata\/Ranger(?:OsA|TL)\|.*?\|)field(p?)=Psy Power(.*?}})/gi, '$1field$2=Potere Psico$3')
		.replace(/({{Spindata\/Ranger(?:OsA|TL)\|.*?\|)field(p?)=Teleport(.*?}})/gi, '$1field$2=Teletrasporto$3')
		.replace(/({{Spindata\/Ranger(?:OsA|TL)\|.*?\|)assist(p?)=Recharge(.*?}})/gi, '$1assist$2=Ricarica$3')
		.replace(/({{Spindata\/Ranger\|.*?\|)assist=Discharge(.*?}})/gi, '$1assist=Shock$2')
        // SuperRumble
		.replace(/{{Spindata\/RumbleBlast\|/gi, '{{Spindata/SuperRumble|')
        // Conquest
        // TODO: fix the move (should be the link to the Italian name with the English name text)
        // Link Battle
		.replace(/{{Spindata\/Battle Trozei\|/gi, '{{Spindata/Link Battle|')
		// .replace(/{{Spindata\/Battle Trozei\|type=(\w*)\|ndex=(\d*)\|power=(\d)\}\}/gi, '{{Spindata/Link Battle|ndex=$3|width-xl=50|width-sm=100|type=$2|power=$4|skill=|skilldesc=}}')
        // Shuffle
		.replace(/({{Spindata\/Link\|.*?\|)swapper=Swap(.*?}})/gi, '$1swapper=Sostituzione$2')
		// Remove the type parameter (here to use our template names)
        // TODO: do I really want to?
		.replace(/({{Spindata\/(?:Link(?! Battle)|MDRB|MDTOC|Ranger|RangerOsA|RangerTL).*?)\|type=\w*(.*?}})/gi, '$1$2')
		.replace(/\|\-/g, '');
}

macros.areeAmico = function(str){
	return str
    	// first undo to use right names afterwards
		.replace(/FoRiposo/g, 'Forest')
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
		.replace(/Voloaway FoRiposo/g, "Foresta Elevata");
}

macros.dungeonItems = function(str){
  // special case: "{{DungeonItem|*|Apple" -> "{{DungeonItem|*|Cibo (Mystery Dungeon)"
  str = str
    .replace(/{{DungeonItem\|([^\|]*?)\|Apple/g, "{{DungeonItem|$1|Cibo (Mystery Dungeon)|sprite=Mela Sprite ZainoMD")
    .replace(/{{DungeonItem\|Apple\|/g, "{{DungeonItem|Mela|Cibo (Mystery Dungeon)|sprite=Mela Sprite ZainoMD|")

    .replace(/{{DungeonItem\/f\|.*?}}/g, "|}");

  // item replacement
  return str
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

    .replace(/\|sprite=MDZaino ([a-zA-Z\- ]*?) Sprite/g, "|sprite=$1 Sprite ZainoMD")

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
    .replace(/\{\{DungeonItem\|Combinatore\|3/gi, "{{DungeonItem|Combinatore|Mosse combinate|sprite=Combinatore Sprite ZainoMD|3")
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
}

macros.dungeonTraps = function(str){
  return str
    .replace(/Seal Trap/gi, 'Sigillotrappola')
    .replace(/Chestnut Trap/gi, 'Castagnotrappola')
    .replace(/Gust Trap/gi, 'Rafficotrappola')
    .replace(/Slow Trap/gi, 'Rallentotrappola')
    .replace(/Spin Trap/gi, 'Storditrappola')
    .replace(/Selfdestruct Trap/gi, 'Scoppiotrappola')
    .replace(/Sticky Trap/gi, 'Viscidotrappola')
    .replace(/Grimy Trap/gi, 'Grimertrappola')
    .replace(/Warp Trap/gi, 'Teletrappola')
    .replace(/Poison Trap/gi, 'Velenotrappola')
    .replace(/PP-Zero Trap/gi, 'Trappola Zero PP')
    .replace(/Random Trap/gi, 'Casotrappola')
    .replace(/Grudge Trap/gi, 'Rancortrappola')
    .replace(/Toxic Spikes/gi, 'Fielepunte')
    .replace(/Mud Trap/gi, 'Fangotrappola')
    .replace(/Explosion Trap/gi, 'Boomtrappola')
    .replace(/Spiked Tile/gi, 'Mattopunte')
    .replace(/Stealth Rock/gi, 'Levitoroccia')
    .replace(/Pokémon Trap/gi, 'Pokétrappola')
    .replace(/Slumber Trap/gi, 'Sonnotrappola')
    .replace(/Summon Trap/gi, 'Profumotrappola')
    .replace(/Trip Trap/gi, 'Inciampotrappola')
}

macros.dungeon = function(str){

	str = str.replace(/MD Time/gi, 'md tempo')
		.replace(/MD Darkness/gi, "md oscurità")
		.replace(/MD Sky/gi, "md cielo")
		.replace(/MD Red/gi, "md rosso")
		.replace(/MD Blue/gi, "md blu")

	str = macros.colori(str)

	str = str
		.replace(/\{\{Dungeon infobox/gi, "{{InfoboxDungeon")
		.replace(/recruitable=Yes/gi, "recruitable=Sì")
		.replace(/traps=Yes/gi, "traps=Sì")
		.replace(/monsterhouses=Yes/gi, "monsterhouses=Sì")
		.replace(/rest=Yes/gi, "rest=Sì")
		.replace(/money=Allowed/gi, "money=Presente")
		.replace(/items=Allowed/gi, "items=48")
		.replace(/items=Current/gi, "items=Limite attuale della Borsa")
		.replace(/items=Current limit in Bag\./gi, "items=Limite attuale della Borsa")
		.replace(/startlevel=Current/gi, "startlevel=Corrente")
		.replace(/teamsize=Current/gi, "teamsize=Corrente")
		.replace(/teamsize=Up to 3/gi, "teamsize=Corrente")
		.replace(/maintype=Various/gi, "maintype=Vari")
		.replace(/boss=None/gi, "boss=Nessuno")
		.replace(/game=sky/gi, "game=cielo")
		.replace(/\{\{tt\|\*\|These Pok.mon are found and recruited via Connection Orb\.\}\}/gi, "")
		.replace(/\{\{tt\|\*\|These Pok.mon are found and recruited via Connection Orb after completing the missions for them\.\}\}/gi, "")

		.replace(/\{\{DoubleProjectTag\|Locations\|Sidegames\}\}/gi, "")
		.replace(/\{\{PMD2 locations\}\}/gi, "{{Zone PMD2}}")
		.replace(/\{\{PMD locations\}\}/gi, "{{Zone PMD}}")
		.replace(/\{\{PSMD locations.?\}\}/gi, "{{Zone PSMD}}")
		.replace(/\{\{Incomplete\|needs=/gi, "{{incompleto|necessita=")
		.replace(/\{\{Incomplete\}\}/gi, "{{incompleto}}")
		.replace(/\[\[Category:Pok.mon Mystery Dungeon 2 locations\]\]/gi, "[[Categoria:Zone Pokémon Mystery Dungeon 2]]")
		.replace(/\[\[Category:Pok.mon Mystery Dungeon: Explorers of Sky locations\]\]/gi, "[[Categoria:Zone Pokémon Mystery Dungeon: Esploratori del Cielo]]")
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
		.replace(/\[\[Category:Pok.mon Mystery Dungeon locations\]\]/gi, "[[Categoria:Zone Pokémon Mystery Dungeon]]")
		.replace(/\{\{mdloc\/f\|(.*?)\|These Pok.mon are recruited through the (?:\[\[)?Connection Orb(?:\]\])? rather than fighting them\.\}\}/g, "{{mdloc/f|$1|super=yes}}")
		.replace(/\{\{mdloc\/f\|(.*?)\|These Pok.mon are recruited immediately after fulfilling certain requests on the Connection Orb\.\}\}/g, "{{mdloc/f|$1|super=yes}}")

	if (str.indexOf("{{Zone PSMD}}") === -1)
		str = str.replace(/\[\[Category:Pok.mon Super Mystery Dungeon locations\]\]/g, "[[Categoria:Zone Pokémon Super Mystery Dungeon]]")
	else
		str = str.replace(/\[\[Category:Pok.mon Super Mystery Dungeon locations\]\]/g, "")

	// add langtable if not found
	if (str.search(/\{\{langtable/gi) === -1) {
		str = str.replace("{{Zone PSMD}}", "==In altre lingue==\n{{langtable|type="
			+ (/\{\{mdloc\/h\|(.*?)(?:\|.*)?\}\}/gi).exec(str)[1]
			+ "|type2="
			+ (/\{\{mdloc\/h(?:\|.*?)?\|(.*)\}\}/gi).exec(str)[1]
			+ "\n|de="
			+ (/\[\[de:(.*?)\]\]/gi).exec(str)[1] + "\n}}\n\n{{-}}\n{{Zone PSMD}}\n")
	}

	// add japanese name to langtable
	str = str
		.replace(/\{\{langtable(.*?)\n/gi, "{{langtable$1\n|ja={{j|"
			+ (/\|jname=(.*?)\n/gi).exec(str)[1]
			+ "}}\n");

	// changeName
	// look for Italian name in the langtable to use it as a default for the box
	var nameIta;
	if (str.indexOf("{{langtable") !== -1){
		nameIta = (/\|it\=([^\|]*)\|/gi).exec(str)
		if (nameIta)
			nameIta = nameIta[1].trim()
	}
	nameIta = prompt("Inserisci il nome del dungeon in italiano", nameIta);
	if (nameIta){
		var nameEng = (/\|name=(.*?)\n\|/i).exec(str)[1];
		str = str.replace(new RegExp(nameEng, 'g'), nameIta)

		// add the english interwiki link
		if (str.search(/\[\[de:/g) === -1)
			str += "\n[[en:" + nameEng + "]]";
		else
			str = str.replace(/(\[\[de:.*?\]\])/g, "$1" + "\n[[en:" + nameEng + "]]");

		// edit "In altre lingue" section
		if (str.indexOf("{{langtable") !== -1){
			if (str.indexOf("|it=") === -1)
				str = str.replace(/\{\{langtable(.*?)\n/gi, "{{langtable$1\n|en=" + nameEng + "\n");
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

	return str
	//per sistemare la visualizzazione html
		.replace(/é/g, '&eacute;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/ì/g, '&igrave;');
}

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
dai browser, limitando a due il numero di
quelli consecutivi

*/

var ending = function(str) {
	return str.replace(/\n{2,}/g, '<br /><br />')
		.replace(/\n/g, '<br />');
};

var runMacro = function() {

	// Recupero della macro selezionata

	var macro = menu.options[menu.selectedIndex].value;

	// Applicazione della macro

	output.innerHTML = ending(macros[macro](opening(textarea.value)));

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

/*

Assegnamenti di variabili contenenti oggetti DOM

*/

var output = document.getElementById('output');
var textarea = document.getElementsByTagName('textarea')[0];
