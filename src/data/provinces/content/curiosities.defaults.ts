import type { ProvinceContentItem, ProvinceSlug } from "@/types/province";

export const DEFAULT_CURIOSITIES_BY_PROVINCE: Record<
  ProvinceSlug,
  ProvinceContentItem[]
> = {
  "buenos-aires": [
    {
      name: "La Vuelta de Obligado y la soberanía",
      image: "",
      description:
        "En San Pedro, en 1845, se libró la batalla de la Vuelta de Obligado. Aunque fue una derrota militar, quedó como símbolo de la defensa de la soberanía nacional.",
    },
    {
      name: "Un territorio de frontera histórica",
      image: "",
      description:
        "Durante gran parte del siglo XIX, la provincia fue escenario de fortines y avances de frontera. Esa historia explica muchos pueblos surgidos alrededor de estaciones, postas y caminos.",
    },
  ],
  catamarca: [
    {
      name: "Fiambalá y la ruta andina",
      image: "",
      description:
        "Catamarca fue histórica vía de comunicación con el Alto Perú y Chile por pasos cordilleranos. La región de Fiambalá conserva esa memoria de tránsito andino.",
    },
    {
      name: "Valle y devoción mariana",
      image: "",
      description:
        "La devoción a la Virgen del Valle forma parte de la identidad catamarqueña y atrae peregrinaciones de todo el país desde hace generaciones.",
    },
  ],
  chaco: [
    {
      name: "Resistencia, museo a cielo abierto",
      image: "",
      description:
        "La capital chaqueña es conocida por su gran cantidad de esculturas en el espacio público. Esa apuesta cultural la volvió una ciudad singular en América Latina.",
    },
    {
      name: "El monte chaqueño, clave histórica",
      image: "",
      description:
        "El Gran Chaco fue durante siglos un territorio de enorme diversidad cultural indígena. Su historia no se entiende sin los pueblos qom, wichí y moqoit, entre otros.",
    },
  ],
  chubut: [
    {
      name: "Colonización galesa en el valle",
      image: "",
      description:
        "Desde 1865, colonos galeses se asentaron en el valle del río Chubut y dejaron huella en la arquitectura, las capillas y la tradición del té galés.",
    },
    {
      name: "Patagonia de dos mundos",
      image: "",
      description:
        "Chubut reúne estepa, cordillera y costa atlántica. Esa combinación la convirtió en una provincia clave para estudios de fauna marina y ambientes áridos.",
    },
  ],
  cordoba: [
    {
      name: "Universidad histórica",
      image: "",
      description:
        "Córdoba alberga una de las universidades más antiguas de América del Sur. Su vida estudiantil marcó debates políticos y culturales desde la colonia hasta hoy.",
    },
    {
      name: "La Reforma Universitaria de 1918",
      image: "",
      description:
        "El movimiento reformista nacido en Córdoba transformó la educación superior en toda América Latina, con ideas de autonomía y cogobierno estudiantil.",
    },
  ],
  corrientes: [
    {
      name: "Herencia guaraní viva",
      image: "",
      description:
        "El guaraní sigue presente en palabras, música y costumbres correntinas. Es una de las provincias donde esa raíz cultural se mantiene con más fuerza.",
    },
    {
      name: "Iberá y la recuperación de fauna",
      image: "",
      description:
        "Los Esteros del Iberá son ejemplo de restauración ambiental: allí se impulsaron programas de reintroducción de especies emblemáticas.",
    },
  ],
  "entre-rios": [
    {
      name: "Capital de la Confederación",
      image: "",
      description:
        "Paraná fue capital de la Confederación Argentina entre 1854 y 1861. En esa etapa se organizaron instituciones fundamentales del país.",
    },
    {
      name: "Palacio San José y Urquiza",
      image: "",
      description:
        "La residencia de Justo José de Urquiza es una pieza clave para entender la política argentina del siglo XIX y la construcción del Estado nacional.",
    },
  ],
  formosa: [
    {
      name: "Ríos y pueblos originarios",
      image: "",
      description:
        "La historia formoseña está profundamente ligada al Pilcomayo, al Bermejo y a comunidades indígenas con saberes adaptados al monte y al agua.",
    },
    {
      name: "Bañado La Estrella",
      image: "",
      description:
        "Es uno de los humedales más grandes de Argentina y cambia su paisaje según las crecidas, creando escenarios naturales de enorme riqueza.",
    },
  ],
  jujuy: [
    {
      name: "Quebrada de Humahuaca milenaria",
      image: "",
      description:
        "La Quebrada fue corredor humano y comercial por más de diez mil años. Es un paisaje cultural donde conviven memoria indígena, colonial y republicana.",
    },
    {
      name: "Belgrano y la Bandera en Jujuy",
      image: "",
      description:
        "En 1813, Manuel Belgrano hizo bendecir y jurar la Bandera Nacional en territorio jujeño, un episodio central de la historia independentista.",
    },
  ],
  "la-pampa": [
    {
      name: "El caldén, árbol emblema",
      image: "",
      description:
        "La Pampa protege una ecorregión singular de bosques de caldén, una especie adaptada al clima semiarido que forma paisajes únicos en el país.",
    },
    {
      name: "Cruce de rutas históricas",
      image: "",
      description:
        "Por su ubicación central, el territorio pampeano fue zona de paso en campañas militares, arrierías y redes comerciales entre Cuyo, Buenos Aires y la Patagonia.",
    },
  ],
  "la-rioja": [
    {
      name: "Tierra de caudillos federales",
      image: "",
      description:
        "La Rioja es inseparable de la figura de Facundo Quiroga y del federalismo del siglo XIX, etapa clave para entender las guerras civiles argentinas.",
    },
    {
      name: "Talampaya y el tiempo profundo",
      image: "",
      description:
        "Sus paisajes geológicos muestran millones de años de historia terrestre y fósiles fundamentales para estudiar eras antiguas del planeta.",
    },
  ],
  mendoza: [
    {
      name: "Cuna del Ejército de los Andes",
      image: "",
      description:
        "En Mendoza, San Martín organizó el Ejército de los Andes antes del cruce cordillerano de 1817, una de las campañas más trascendentes de América.",
    },
    {
      name: "Oasis construidos por acequias",
      image: "",
      description:
        "La provincia desarrolló un sistema de riego histórico para transformar áreas áridas en oasis productivos. Esa ingeniería del agua es parte de su identidad.",
    },
  ],
  misiones: [
    {
      name: "Las Misiones Jesuíticas",
      image: "",
      description:
        "San Ignacio Miní y otros sitios recuerdan la experiencia jesuítico-guaraní de los siglos XVII y XVIII, un capítulo central del noreste colonial.",
    },
    {
      name: "La selva y la yerba mate",
      image: "",
      description:
        "Misiones concentra una gran parte de la producción yerbatera argentina, vinculada a una tradición regional que combina saberes guaraníes e inmigrantes.",
    },
  ],
  neuquen: [
    {
      name: "Territorio mapuche y cordillerano",
      image: "",
      description:
        "La historia neuquina está atravesada por la presencia mapuche, la trashumancia y una geografía de valles, lagos y volcanes.",
    },
    {
      name: "Vaca Muerta y energía",
      image: "",
      description:
        "Neuquén ocupa hoy un lugar estratégico en la matriz energética argentina por el desarrollo de Vaca Muerta, con impacto económico nacional.",
    },
  ],
  "rio-negro": [
    {
      name: "Alto Valle frutícola",
      image: "",
      description:
        "El Alto Valle de Río Negro se consolidó con obras de riego y migraciones internas y externas, convirtiéndose en polo productor de peras y manzanas.",
    },
    {
      name: "Costa atlántica y paleontología",
      image: "",
      description:
        "Su litoral y mesetas son escenario de hallazgos paleontológicos y de una fauna marina que atrae investigación y turismo de naturaleza.",
    },
  ],
  salta: [
    {
      name: "Güemes y la guerra de independencia",
      image: "",
      description:
        "La figura de Martín Miguel de Güemes y sus milicias gauchas es central para comprender la defensa del norte durante la independencia.",
    },
    {
      name: "Un mosaico de paisajes",
      image: "",
      description:
        "En una misma provincia conviven yungas, valles, quebradas y puna. Esa diversidad convirtió a Salta en un gran corredor histórico y cultural andino.",
    },
  ],
  "san-juan": [
    {
      name: "Sarmiento y la educación",
      image: "",
      description:
        "San Juan es la tierra natal de Domingo F. Sarmiento, figura clave en la expansión del sistema educativo argentino del siglo XIX.",
    },
    {
      name: "Ischigualasto y fósiles únicos",
      image: "",
      description:
        "El Valle de la Luna sanjuanino preserva registros paleontológicos de enorme valor para estudiar los primeros dinosaurios.",
    },
  ],
  "san-luis": [
    {
      name: "Posta de caminos interiores",
      image: "",
      description:
        "San Luis fue históricamente zona de paso entre Cuyo, Córdoba y el litoral, con rutas que unían economías regionales.",
    },
    {
      name: "Paisaje de sierras y salinas",
      image: "",
      description:
        "La combinación de serranías, llanuras y salinas le dio a la provincia una identidad geográfica singular dentro del centro argentino.",
    },
  ],
  "santa-cruz": [
    {
      name: "Hielos continentales",
      image: "",
      description:
        "Santa Cruz forma parte del gran sistema de hielos patagónicos, una de las mayores reservas de agua dulce del planeta fuera de las zonas polares.",
    },
    {
      name: "Cueva de las Manos",
      image: "",
      description:
        "Las pinturas rupestres del río Pinturas, con miles de años de antigüedad, son testimonio excepcional de los primeros pobladores de la región.",
    },
  ],
  "santa-fe": [
    {
      name: "Cuna de la Bandera",
      image: "",
      description:
        "En Rosario, Manuel Belgrano izó por primera vez la bandera argentina en 1812, hecho recordado en el Monumento Nacional a la Bandera.",
    },
    {
      name: "Puerto, ríos e inmigración",
      image: "",
      description:
        "Santa Fe creció con fuerza por su red fluvial y ferroviaria. La inmigración europea dejó huellas profundas en colonias agrícolas y ciudades.",
    },
  ],
  "santiago-del-estero": [
    {
      name: "Madre de ciudades",
      image: "",
      description:
        "Santiago del Estero, fundada en 1553, es una de las ciudades más antiguas del actual territorio argentino y por eso recibe ese título histórico.",
    },
    {
      name: "Quichua santiagueño",
      image: "",
      description:
        "La provincia conserva una fuerte tradición lingüística: el quichua santiagueño sigue vivo en numerosas comunidades.",
    },
  ],
  "tierra-del-fuego": [
    {
      name: "Fin del mundo habitado",
      image: "",
      description:
        "Ushuaia es reconocida internacionalmente como la ciudad más austral del mundo, puerta de entrada a expediciones antárticas.",
    },
    {
      name: "Historia selk'nam y yámana",
      image: "",
      description:
        "El territorio fueguino conserva memoria de pueblos originarios como selk'nam y yámana, fundamentales para comprender la historia del extremo sur.",
    },
  ],
  tucuman: [
    {
      name: "La Casa de la Independencia",
      image: "",
      description:
        "En San Miguel de Tucumán se declaró la independencia argentina en 1816. La Casa Histórica es uno de los sitios más significativos del país.",
    },
    {
      name: "Industria azucarera",
      image: "",
      description:
        "La historia económica tucumana estuvo fuertemente ligada a ingenios azucareros, que marcaron su desarrollo social y urbano.",
    },
  ],
  "ciudad-autonoma-buenos-aires": [
    {
      name: "Plaza de Mayo y vida política",
      image: "",
      description:
        "La Plaza de Mayo fue y es escenario de episodios decisivos de la historia argentina: revoluciones, celebraciones populares y reclamos sociales.",
    },
    {
      name: "Puerto e inmigración masiva",
      image: "",
      description:
        "Entre fines del siglo XIX y comienzos del XX, la ciudad recibió grandes corrientes migratorias que transformaron su cultura, su lengua y su arquitectura.",
    },
  ],
  "islas-malvinas": [
    {
      name: "Atlántico Sur estratégico",
      image: "",
      description:
        "Las islas están ubicadas en una zona clave del Atlántico Sur por su proyección marítima, pesquera y geopolítica.",
    },
    {
      name: "Memoria de 1982",
      image: "",
      description:
        "La guerra de 1982 dejó una marca profunda en la historia argentina reciente. Las Malvinas siguen siendo una causa de memoria y soberanía.",
    },
  ],
};

