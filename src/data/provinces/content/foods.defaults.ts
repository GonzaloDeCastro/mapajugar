import type { ProvinceContentItem, ProvinceSlug } from "@/types/province";

/**
 * Comidas iniciales por provincia.
 * La imagen queda en placeholder (string vacío) hasta cargar assets locales.
 */
export const DEFAULT_FOODS_BY_PROVINCE: Record<
  ProvinceSlug,
  ProvinceContentItem[]
> = {
  "buenos-aires": [
    {
      name: "Asado bonaerense",
      image: "",
      description:
        "Cortes de novillo a la parrilla o al asador: asado de tira, vacío, entraña, matambre y achuras (chorizo, morcilla, chinchulines, riñones). Sal gruesa, fuego de brasas y acompañamiento de chimichurri, ensalada mixta o provoleta.",
    },
    {
      name: "Milanesa a la napolitana",
      image: "",
      description:
        "Filetes de peceto o nalga empanados (huevo y pan rallado), fritos y cubiertos con salsa de tomate, jamón cocido y abundante muzarella gratinada al horno. Plato fuerte de bodegones y casas de comida de la provincia y el conurbano.",
    },
    {
      name: "Dulce de leche",
      image: "",
      description:
        "Leche y azúcar reducidas a fuego lento hasta lograr color tostado y textura untuosa. Base de alfajores, facturas, postre vigilante y rellenos de pan dulce en la repostería bonaerense.",
    },
  ],
  catamarca: [
    {
      name: "Empanadas catamarqueñas",
      image: "",
      description:
        "Relleno de carne picada a cuchillo con papa en cubos, huevo duro, comino, pimentón dulce y a veces ají; repulgue en caracol o trenzado. Se hornean en horno de barro o de casa hasta dorar la grasa de la pella.",
    },
    {
      name: "Locro del noroeste",
      image: "",
      description:
        "Guiso espeso de maíz blanco partido, porotos, zapallo, patitas y mondongo, chorizo colorado y cuero; condimentado con comino, pimentón y ají. Plato central del 25 de Mayo y reuniones familiares en el NOA.",
    },
    {
      name: "Tamales",
      image: "",
      description:
        "Masa de harina de maíz con grasa y caldo, rellena de carne de cerdo o res con cebolla y especias, envuelta en chalas de choclo y cocida al vapor o hervida en puchero.",
    },
  ],
  chaco: [
    {
      name: "Chipá",
      image: "",
      description:
        "Bollitos de almidón de mandioca, queso duro rallado, leche y huevo; horneados hasta inflarse con corteza dorada y miga elástica. Salen de las hornallas en desayunos, meriendas y después del mate.",
    },
    {
      name: "Pacú a la parrilla",
      image: "",
      description:
        "Filetes del gran pez del Paraná y afluentes, marinados con limón, ajo y perejil, cocidos sobre la parrilla o el disco. Carne blanca firme, a menudo servida con ensalada o mandioca hervida.",
    },
    {
      name: "Mandioca hervida",
      image: "",
      description:
        "Raíz de yuca cocida en agua con sal hasta ablandar; se parte en trozos y se unta con queso fresco o se come junto al asado y el chipá como guarnición del litoral y el NEA.",
    },
  ],
  chubut: [
    {
      name: "Cordero patagónico",
      image: "",
      description:
        "Cordero lechal entero al asador con cuero (‘a la cruz’ o en parrilla baja), sal gruesa y fuego lento durante varias horas. La piel queda crocante y la carne rosada, aroma típico de la estepa y la cordillera chubutense.",
    },
    {
      name: "Torta galesa",
      image: "",
      description:
        "Pastel en capas de bizcochuelo con frutos secos, nueces, pasas de uva y frutas abrillantadas, embebido en licor o coñac. Legado de la colonia galesa en el valle inferior del Chubut (Gaiman, Trelew, Rawson).",
    },
    {
      name: "Trucha de río",
      image: "",
      description:
        "Trucha arcoíris o fontinalis de ríos y arroyos cordilleranos; filetes a la plancha con limón y perejil, a la manteca con almendras o al horno. Pesca con devolución en muchos códigos locales.",
    },
  ],
  cordoba: [
    {
      name: "Cabrito serrano",
      image: "",
      description:
        "Cabrito lechal abierto al asador o al horno de barro, con adobo de ajo, romero, sal y a veces vino blanco. Plato de festejos en el Calamuchita, Traslasierra y pueblos de las Sierras Grandes.",
    },
    {
      name: "Choripán cordobés",
      image: "",
      description:
        "Chorizo criollo partido al medio (‘al V’) en pan francés crocante, con chimichurri, salsa criolla o mayonesa casera. Clásico de ferias, recitales y canchas; en Córdoba capital suele acompañarse con ‘vacio’ o morcilla en los puestos.",
    },
    {
      name: "Alfajor cordobés",
      image: "",
      description:
        "Dos tapas de masa blanda tipo bizcochuelo rellenas de abundante dulce de leche y bañadas en chocolate semi amargo; a menudo con nueces o coco. Versión emblemática de la ruta turística serrana.",
    },
  ],
  corrientes: [
    {
      name: "Mbaipy",
      image: "",
      description:
        "Puré espeso de choclo molido cocido con leche, queso cremoso y a veces cebolla; puede ser dulce (con azúcar y canela) o más salado. Herencia guaraní muy arraigada en la cocina correntina.",
    },
    {
      name: "Sopa correntina",
      image: "",
      description:
        "Torta húmeda salada de harina de maíz, queso fresco, huevo, leche y cebolla, sin levadura, horneada hasta formar costra dorada. Pariente cercana de la sopa paraguaya, muy servida en almuerzos de campo.",
    },
    {
      name: "Dorado a la parrilla",
      image: "",
      description:
        "Dorado (Salminus brasiliensis) entero o en filetes con piel a la parrilla, limón y aceite; carne rosada y firme. Pescado símbolo del Paraná y los esteros, acompañado de mandioca o ensalada.",
    },
  ],
  "entre-rios": [
    {
      name: "Pescados del Paraná y el Uruguay",
      image: "",
      description:
        "Surubí, pacú, boga y otras especies en filetes fritos, rebozados, al horno con verduras o en chupín con vino blanco y pimentón. La cocina entrerriana gira alrededor de lo que entra fresco de ambos ríos.",
    },
    {
      name: "Empanadas de pescado",
      image: "",
      description:
        "Tapas de masa casera rellenas con surubí o pacú desmenuzado, morrón, cebolla, pimentón y a veces aceitunas; horneadas o fritas según la familia. Variante muy difundida en ciudades ribereñas.",
    },
    {
      name: "Asado con cuero",
      image: "",
      description:
        "Costillar o medio animal con piel hacia el fuego, clavado en cruces o atado a la parrilla, con sal gruesa y cocción lenta a leña. Técnica de campo y fiestas patronales en la provincia.",
    },
  ],
  formosa: [
    {
      name: "Sopa paraguaya",
      image: "",
      description:
        "Mezcla espesa de harina de maíz, queso fresco, leche, huevo y cebolla asada, horneada en asadera como un pan de choclo salado; porción cuadrada dorada, no es caldo a pesar del nombre.",
    },
    {
      name: "Pacú al horno",
      image: "",
      description:
        "Pacú entero o en rodajas gruesas con limón, tomate, morrón y papas alrededor; horneado tapado para conservar jugos. Plato fuerte de pesca del río Paraguay y afluentes formoseños.",
    },
    {
      name: "Chipá cuerito",
      image: "",
      description:
        "Chipá de almidón y queso al que se le suman trozos de cuero o grasa de cerdo crocante, o bien se envuelve en tripa grasa antes del horno. Variante más contundente del chipá del Chaco y el noreste.",
    },
  ],
  jujuy: [
    {
      name: "Humita en chala",
      image: "",
      description:
        "Choclo rallado salteado con cebolla, morrón, queso y especias, envuelto en hojas de choclo y atado con tiras de chala; cocido al vapor o hervido. Presencia fuerte en carnavales y ferias de la Quebrada.",
    },
    {
      name: "Tamales jujeños",
      image: "",
      description:
        "Masa gruesa de maíz con relleno de carne de cabra o cerdo, cebolla, comino y ají molido, armado en chala y cocido largo en agua con hierbas. Sabor más intenso que el tamal pampeano.",
    },
    {
      name: "Calapurca",
      image: "",
      description:
        "Sopa de altura con zapallo, choclo, papas y carne de llama o vaca; tradicionalmente se introduce una piedra al rojo vivo en la olla para mantener el hervor (técnica precolombina aún nombrada en festividades).",
    },
  ],
  "la-pampa": [
    {
      name: "Asado criollo pampeano",
      image: "",
      description:
        "Parrillada donde no faltan achuras (chinchulines, riñones, mollejas), chorizo y morcilla antes de los cortes principales; fuego de quebracho o mezquite y ritual de sobremesa larga en estancias y pueblos.",
    },
    {
      name: "Chivito al asador",
      image: "",
      description:
        "Cabrito joven desollado y abierto en cruz sobre brasas bajas, untado con salmuera o limón; cocción lenta hasta que la piel queda tirabuzón. Plato de campo en ferias ganaderas y reuniones rurales pampeanas.",
    },
    {
      name: "Torta frita",
      image: "",
      description:
        "Discos de harina, grasa, sal y polvo leudante, estirados y fritos en manteca o grasa; inflan al contacto y se comen calientes con mate cocido o té. Merienda clásica después del trabajo en el campo.",
    },
  ],
  "la-rioja": [
    {
      name: "Chanfaina riojana",
      image: "",
      description:
        "Guiso de arroz con menudencias: hígado, bofe, criadilla y sangre cocida, cebolla, morrón y pimentón; textura cremosa y sabor profundo. Se sirve en olla o cazuela en invierno y fiestas familiares.",
    },
    {
      name: "Empanadas riojanas",
      image: "",
      description:
        "Relleno de matambre y/o carne picada con mucha cebolla, comino, pimentón y aceitunas; masa fina y repulgue marcado. Se distinguen por el equilibrio entre carne y condimentos del monte riojano.",
    },
    {
      name: "Locro riojano",
      image: "",
      description:
        "Versión local con maíz partido, zapallo, porotos, chorizo colorado y a veces mondongo; menos caldoso que un guiso común, más bien espeso para comer con cuchara. Plato de mayo y domingos.",
    },
  ],
  mendoza: [
    {
      name: "Tortitas mendocinas",
      image: "",
      description:
        "Masitas de harina, huevo, leche, azúcar y manteca, fritas en manteca clarificada y espolvoreadas con azúcar negra o común. Desayuno dulce típico de panaderías de Mendoza capital y oasis.",
    },
    {
      name: "Chivo a la llama",
      image: "",
      description:
        "Cabrito o chivo de cordillera cocido a fuego muy bajo, a veces entre piedras calientes o rescoldo, con hierbas aromáticas; carne oscura y ahumada. Asociado a festividades en zonas altas del sur mendocino.",
    },
    {
      name: "Empanadas mendocinas",
      image: "",
      description:
        "Carne picada con cebolla blanca abundante, morrón, pimentón, comino, aceitunas y uvas pasas; horneadas en horno de barro hasta que la masa queda quebradiza. Forma de media luna y tamaño mediano.",
    },
  ],
  misiones: [
    {
      name: "Reviro",
      image: "",
      description:
        "Masa de harina de trigo con grasa (manteca o aceite) y líquido, cortada en trozos irregulares y frita o cocida; puede mezclarse con queso o servirse con tuco. Plato humilde muy presente en el día a día misionero.",
    },
    {
      name: "Chipá misionero",
      image: "",
      description:
        "Pan de almidón fino de mandioca, queso duro y huevo; se hornea en forma de rosquillas pequeñas o bolitas. Aroma característico en panaderías de Posadas, Oberá y rutas de la selva.",
    },
    {
      name: "Mbejú",
      image: "",
      description:
        "Torta sin levadura de almidón de mandioca, queso fresco rallado, manteca y anís, cocida en la plancha o el horno hasta formar capas crocantes por fuera. Base de la cocina guaraní-paraguaya en Misiones.",
    },
  ],
  neuquen: [
    {
      name: "Chivito neuquino",
      image: "",
      description:
        "Cabrito patagónico al asador o al horno de barro, con sal gruesa y hierbas; carne magra por el pastoreo de estepa. Plato de encuentros en Junín de los Andes, Aluminé y ferias cordilleranas.",
    },
    {
      name: "Trucha patagónica",
      image: "",
      description:
        "Truchas de lagos y ríos como Nahuel Huapi, Aluminé o Traful; filetes al papillote con limón y hierbas, o ahumados en casas de té de montaña. Textura fina y sabor limpio de agua fría.",
    },
    {
      name: "Torta frita patagónica",
      image: "",
      description:
        "Igual base que en el resto del país pero consumida con mate cocido en climas más fríos; a veces más gruesa para acompañar dulce casero de frutos rojos de valle.",
    },
  ],
  "rio-negro": [
    {
      name: "Trucha patagónica",
      image: "",
      description:
        "Ejemplares del Limay, Collón Curá o lagos andinos; preparación simple a la plancha con aceite de oliva y limón, o escabeche. Pesca deportiva regulada en muchos tramos.",
    },
    {
      name: "Cordero al asador",
      image: "",
      description:
        "Cordero entero o mediano en asador vertical, piel salada y fuego de leña de estepa; ritual en estancias del Alto Valle y la meseta rionegrina.",
    },
    {
      name: "Frutas del valle",
      image: "",
      description:
        "Peras (Williams, Packham), manzanas (Red Delicious, Granny Smith) y duraznos del Alto Valle y Valle Medio; consumo fresco, jugos, conservas, sidra y dulce de membrillo artesanal.",
    },
  ],
  salta: [
    {
      name: "Empanadas salteñas",
      image: "",
      description:
        "Relleno jugoso de carne a cuchillo con cebolla, pimentón, comino, huevo duro, papa en cubos y a veces ají; tapa fina y repulgue ‘de rosca’. Se hornean en barro o bandeja hasta chorrear caldito.",
    },
    {
      name: "Tamales salteños",
      image: "",
      description:
        "Masa de maíz con manteca de carne, relleno de carne y cebolla con ají colorado, envuelto en chala de choclo; cocción prolongada en puchero. Más húmedos y rojizos que los del litoral.",
    },
    {
      name: "Humita",
      image: "",
      description:
        "En Salta suele prepararse en cazuela: choclo rallado cocido con leche, queso y cebolla hasta formar crema espesa (humita en olla), además de la versión en chala en fechas festivas.",
    },
  ],
  "san-juan": [
    {
      name: "Punta de espalda",
      image: "",
      description:
        "Corte del cuarto delantero del novillo (zona de paleta/espalda), marinado o salado y cocido a la parrilla en trozos gruesos; textura fibrosa que pide cocción al punto o tres cuartos.",
    },
    {
      name: "Tomaticán",
      image: "",
      description:
        "Tomates pelados y picados salteados con cebolla, a veces zapallito, y huevos revueltos al final; guiso rápido de verano cuyano que se acompaña con pan casero.",
    },
    {
      name: "Sopaipillas",
      image: "",
      description:
        "Masa con zapallo amarillo cocido, harina, grasa y sal, estirada y frita en discos; se comen calientes con miel de caña, chancaca derretida o mostaza.",
    },
  ],
  "san-luis": [
    {
      name: "Chivito puntano",
      image: "",
      description:
        "Cabrito de las sierras de San Luis (Comechingones) al asador, con adobo simple de ajo y hierbas; carne aromática de pastoreo serrano. Plato de ferias de Villa de Merlo y pueblos de las sierras.",
    },
    {
      name: "Empanadas puntanas",
      image: "",
      description:
        "Carne picada con mucha cebolla, comino, pimentón y grasa de pella; algunas versiones llevan papa o huevo. Horneadas con masa quebradiza y repulgue apretado.",
    },
    {
      name: "Carbonada",
      image: "",
      description:
        "Guiso de carne, choclo, zapallo, arroz y chorizo colorado; en San Luis también se cocina ‘en zapallo’: el relleno va dentro de un zapallo entero horneado como olla comestible.",
    },
  ],
  "santa-cruz": [
    {
      name: "Cazuela de mariscos",
      image: "",
      description:
        "Olla con centolla, mejillón, almejas, calamares y a veces pescado blanco, en caldo con vino blanco, pimentón y crema o tomate; plato de puertos como Ría Gallegos o costa atlántica.",
    },
    {
      name: "Cordero santacruceño",
      image: "",
      description:
        "Cordero patagónico de crías livianas, asado lento con cuero o en parrilla baja; sabor suave por pasturas de la estepa austral y viento frío.",
    },
    {
      name: "Centolla patagónica",
      image: "",
      description:
        "Centolla del Atlántico sur cocida en agua con sal, partida y servida con mayonesa, limón o mantequilla clarificada; temporada regulada. Ícono gastronómico de Santa Cruz.",
    },
  ],
  "santa-fe": [
    {
      name: "Dorado a la parrilla",
      image: "",
      description:
        "Dorado del Paraná y delta, entero escamado o en supremas, con piel a la llama y limón; textura firme. Clásico de costaneras rosarinas y pueblos ribereños.",
    },
    {
      name: "Surubí al horno",
      image: "",
      description:
        "Surubí en filetes o trozos con papas panaderas, morrón, cebolla y vino blanco; horneado tapado para no secar la carne blanca. Plato de río muy pedido en el litoral central.",
    },
    {
      name: "Empanada santafesina",
      image: "",
      description:
        "Relleno de carne molida con mucha grasa de pella, cebolla blanca en abundancia, morrón verde y pimentón; masa fina y repulgue característico. Difiere de la salteña en el caldo y el perfil de grasa.",
    },
  ],
  "santiago-del-estero": [
    {
      name: "Locro santiagueño",
      image: "",
      description:
        "Maíz blanco partido con zapallo, porotos, carne de vaca y cerdo, chorizo colorado, patitas y mondongo; condimentado con comino y pimentón. Textura muy espesa, casi ‘para parar el mate’.",
    },
    {
      name: "Empanadas santiagueñas",
      image: "",
      description:
        "Mucha cebolla cocida (‘cebollera’), carne picada, comino, grasa y a veces papa; horneadas hasta que la tapa se dora y el interior queda húmedo. Se acompañan con salsa picante casera.",
    },
    {
      name: "Rosquete santiagueño",
      image: "",
      description:
        "Rosca o bollo dulce con harina, grasa, huevo y anís, bañado en almíbar o miel; versión frita en carnavales (‘hojuelas’). Panaderías de La Banda y Santiago capital.",
    },
  ],
  "tierra-del-fuego": [
    {
      name: "Centolla fueguina",
      image: "",
      description:
        "Centolla del canal Beagle y costas australes; cocida al agua, fría o tibia, con limón y aceite. Temporada corta y precio alto, plato obligado en Ushuaia.",
    },
    {
      name: "Merluza negra",
      image: "",
      description:
        "Merluza negra (Dissostichus eleginoides), pescado de aguas profundas; filetes firmes a la plancha, milanesa o al horno con limón. Captura regulada por cuotas internacionales.",
    },
    {
      name: "Cordero fueguino",
      image: "",
      description:
        "Cordero de hatos pequeños en isla Grande; asado lento con leña de lenga o coihue, sabor ahumado marcado. Menos conocido que el patagónico continental pero muy local.",
    },
  ],
  tucuman: [
    {
      name: "Sánguche de milanesa",
      image: "",
      description:
        "Milanesa de nalga o peceto grande, empanada y frita, en pan francés con tomate, lechuga, huevo frito y mayonesa; a veces jamón y queso. Ícono del centro de San Miguel de Tucumán y bares de estudiantes.",
    },
    {
      name: "Empanadas tucumanas",
      image: "",
      description:
        "Cocidas al horno de barro, relleno jugoso de carne a cuchillo, cebolla, comino, pimentón y matambre en cubos; repulgue fino. Competencia sana con las salteñas en ferias gastronómicas.",
    },
    {
      name: "Humita tucumana",
      image: "",
      description:
        "Choclo rallado con cebolla, queso fresco y crema, reducido en cacerola hasta espesar, o envuelto en chala en fechas de celebración. Dulzor natural del maíz del valle tucumano.",
    },
  ],
  "ciudad-autonoma-buenos-aires": [
    {
      name: "Pizza porteña",
      image: "",
      description:
        "Masa mediana o al molde, borde crocante, capa generosa de salsa y muzarella que forma ‘hilos’ al cortar; estilo de pizzerías históricas (Guerrín, Banchero, El Cuartito).",
    },
    {
      name: "Fugazzeta rellena",
      image: "",
      description:
        "Masa de pizza rellena entre dos capas con jamón y muzarella, cubierta de cebolla confitada y queso gratinado; nació en pizzerías del centro y Villa Crespo.",
    },
    {
      name: "Helado artesanal",
      image: "",
      description:
        "Alta leche y crema, sabores clásicos (dulce de leche granizado, tramontana, sambayón) y frutas; porción en copa o dos bochas en wafer. Cultura de heladerías de barrio y cadena porteña.",
    },
  ],
  "islas-malvinas": [
    {
      name: "Pescado frito con papas",
      image: "",
      description:
        "Filetes de merluza u otras especies locales rebozados o empanados, fritos y servidos con papas tipo ‘chips’; herencia de la cocina británica en el archipiélago.",
    },
    {
      name: "Merluza y mariscos locales",
      image: "",
      description:
        "Preparaciones con merluza austral, abadejo o mariscos de aguas frías del Atlántico sur: al horno, en guiso o pescado ‘smokie’ (ahumado) en desayunos camperos.",
    },
    {
      name: "Cordero isleño",
      image: "",
      description:
        "Cordero de pastoreo en pastizales de clima oceánico frío; asado al horno dominical con papas asadas y verduras de raíz, similar al ‘Sunday roast’ británico adaptado al sur.",
    },
  ],
};
