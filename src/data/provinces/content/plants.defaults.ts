import type { ProvinceContentItem, ProvinceSlug } from "@/types/province";

/**
 * Flora inicial por provincia.
 * Imágenes locales en `public/images/plants/`; respaldo remoto en `plant-images.ts`.
 */
export const DEFAULT_PLANTS_BY_PROVINCE: Record<
  ProvinceSlug,
  ProvinceContentItem[]
> = {
  "buenos-aires": [
    {
      name: "Cortadera pampeana",
      image: "/images/plants/Cortadera pampeana.webp",
      description:
        "Gramínea nativa de pastizales húmedos y bordes de bañados de la llanura pampeana.",
    },
    {
      name: "Sombra de toro",
      image: "/images/plants/Sombra de toro.webp",
      description:
        "Arbusto espinoso típico del espinal pampeano, usado históricamente como reparo natural para el ganado.",
    },
    {
      name: "Sarandí colorado",
      image: "/images/plants/Sarandí colorado.webp",
      description:
        "Arbusto ribereño muy común en orillas de lagunas y arroyos bonaerenses.",
    },
  ],
  catamarca: [
    {
      name: "Cardón",
      image: "/images/plants/Cardón.webp",
      description:
        "Cactus columnar típico de ambientes áridos de altura, adaptado a gran amplitud térmica.",
    },
    {
      name: "Chañar",
      image: "/images/plants/Chañar.webp",
      description:
        "Árbol del monte árido cuyano y del noroeste, con flores amarillas y frutos dulces aprovechados desde tiempos prehispánicos.",
    },
    {
      name: "Pichana o tola",
      image: "/images/plants/Pichana o tola.webp",
      description:
        "Arbusto de la Puna usado tradicionalmente como combustible y protección de suelos en altura.",
    },
  ],
  chaco: [
    {
      name: "Quebracho colorado chaqueño",
      image: "/images/plants/Quebracho colorado chaqueño.webp",
      description:
        "Árbol emblemático del monte chaqueño, de madera muy dura y gran valor ecológico.",
    },
    {
      name: "Quebracho blanco",
      image: "/images/plants/Quebracho blanco.webp",
      description:
        "Especie clave del Chaco, con corteza clara y gran importancia en la estructura del bosque.",
    },
    {
      name: "Palma carandilla",
      image: "/images/plants/Palma carandilla.webp",
      description:
        "Palmera típica de palmares chaqueños, refugio de aves y fauna asociada a ambientes cálidos.",
    },
  ],
  chubut: [
    {
      name: "Coirón patagónico",
      image: "/images/plants/Coirón patagónico.webp",
      description:
        "Pasto dominante de la estepa, clave para la cobertura del suelo en zonas ventosas.",
    },
    {
      name: "Calafate",
      image: "/images/plants/Calafate.webp",
      description:
        "Arbusto espinoso con frutos azulados, muy conocido por leyendas y usos culinarios patagónicos.",
    },
    {
      name: "Maitén",
      image: "/images/plants/Maitén.webp",
      description:
        "Árbol de porte medio presente en bosques andino-patagónicos, valorado como especie de sombra en campos y chacras.",
    },
  ],
  cordoba: [
    {
      name: "Molle de beber",
      image: "/images/plants/Molle de beber.webp",
      description:
        "Árbol nativo serrano, frecuente en quebradas y laderas del centro del país.",
    },
    {
      name: "Espinillo",
      image: "/images/plants/Espinillo.webp",
      description:
        "Árbol pequeño de flores amarillas muy perfumadas, representativo del espinal serrano.",
    },
    {
      name: "Peperina serrana",
      image: "/images/plants/Peperina serrana.webp",
      description:
        "Hierba aromática típica de sierras cordobesas, asociada a infusiones y tradiciones locales.",
    },
  ],
  corrientes: [
    {
      name: "Irupé",
      image: "/images/plants/Irupé.webp",
      description:
        "Planta acuática de grandes hojas flotantes, característica de lagunas y esteros del litoral.",
    },
    {
      name: "Camalote",
      image: "/images/plants/Camalote.webp",
      description:
        "Planta flotante que forma andariveles verdes en ríos y lagunas, hábitat para insectos, peces y aves.",
    },
    {
      name: "Lapacho negro",
      image: "/images/plants/Lapacho negro.webp",
      description:
        "Árbol nativo de flores rosadas o violetas que florece espectacularmente a fines del verano.",
    },
  ],
  "entre-rios": [
    {
      name: "Sauce criollo",
      image: "/images/plants/Sauce criollo.webp",
      description:
        "Árbol ribereño típico de márgenes de ríos y arroyos del sistema Paraná-Uruguay.",
    },
    {
      name: "Timbó",
      image: "/images/plants/Timbó.webp",
      description:
        "Árbol grande de follaje denso, muy frecuente en selvas en galería a orillas de cursos de agua.",
    },
    {
      name: "Espinillo del río",
      image: "/images/plants/Espinillo.webp",
      description:
        "Subarbusto nativo usado a menudo para leña y como refugio para aves en orillas y bañados.",
    },
  ],
  formosa: [
    {
      name: "Palo santo",
      image: "/images/plants/Palo santo.webp",
      description:
        "Especie chaqueña adaptada a climas cálidos y secos, de gran importancia para el bosque nativo.",
    },
    {
      name: "Caranday",
      image: "/images/plants/Caranday.webp",
      description:
        "Palmera nativa que forma palmares característicos en sectores del Chaco húmedo.",
    },
    {
      name: "Guayacán",
      image: "/images/plants/Guayacán.webp",
      description:
        "Árbol de madera muy dura y flores llamativas, parte del bosque chaqueño formoseño.",
    },
  ],
  jujuy: [
    {
      name: "Queñoa",
      image: "/images/plants/Queñoa.webp",
      description:
        "Árbol andino de altura resistente al frío, presente en sectores de Puna y prepuna.",
    },
    {
      name: "Tola de Puna",
      image: "/images/plants/Tola de Puna.webp",
      description:
        "Arbusto almohadillado muy adaptado a la alta radiación y al viento fuerte de altura.",
    },
    {
      name: "Cebil",
      image: "/images/plants/Cebil.webp",
      description:
        "Árbol de las yungas jujeñas, protagonista de bosques montanos húmedos del noroeste.",
    },
  ],
  "la-pampa": [
    {
      name: "Caldén",
      image: "/images/plants/Caldén.webp",
      description:
        "Árbol característico del espinal pampeano, formando bosques abiertos en el centro del país.",
    },
    {
      name: "Jarilla pampeana",
      image: "/images/plants/Jarilla pampeana.webp",
      description:
        "Arbusto aromático que resiste sequías y heladas, común en el oeste pampeano.",
    },
    {
      name: "Olivo de burro",
      image: "/images/plants/Olivo de burro.webp",
      description:
        "Arbusto nativo de follaje plateado, presente en ambientes semiáridos del centro del país.",
    },
  ],
  "la-rioja": [
    {
      name: "Jarilla",
      image: "/images/plants/Jarilla.webp",
      description:
        "Arbusto dominante de zonas áridas y pedregosas del oeste argentino.",
    },
    {
      name: "Retortuño",
      image: "/images/plants/Retortuño.webp",
      description:
        "Arbusto espinoso muy resistente a la sequía, típico de serranías y piedemonte riojano.",
    },
    {
      name: "Algarrobo blanco",
      image: "/images/plants/Algarrobo blanco.webp",
      description:
        "Árbol que brinda sombra y frutos comestibles, presente en valles y zonas de monte de la región.",
    },
  ],
  mendoza: [
    {
      name: "Ajarilla",
      image: "/images/plants/Ajarilla.webp",
      description:
        "Arbusto nativo de ambientes áridos andinos, adaptado a suelos secos y alta insolación.",
    },
    {
      name: "Jarilla resinosas",
      image: "/images/plants/Jarilla resinosas.webp",
      description:
        "Conjunto de arbustos resinosos muy frecuentes en el Monte mendocino, adaptados al viento y la escasez de agua.",
    },
    {
      name: "Chañar mendocino",
      image: "/images/plants/Chañar mendocino.webp",
      description:
        "Árbol nativo de zonas áridas, con frutos dulces utilizados en preparaciones tradicionales.",
    },
  ],
  misiones: [
    {
      name: "Palmito misionero",
      image: "/images/plants/Palmito misionero.webp",
      description:
        "Palmera nativa de la selva paranaense, asociada a ambientes húmedos subtropicales.",
    },
    {
      name: "Lapacho rosado",
      image: "/images/plants/Lapacho rosado.webp",
      description:
        "Árbol de flores rosadas intensas que marcan el fin del verano en muchos paisajes misioneros.",
    },
    {
      name: "Araucaria misionera",
      image: "/images/plants/Araucaria misionera.webp",
      description:
        "Conífera nativa de Misiones y Brasil, parte del dosel alto de la selva paranaense.",
    },
  ],
  neuquen: [
    {
      name: "Pehuén (araucaria)",
      image: "/images/plants/Pehuén (araucaria).webp",
      description:
        "Conífera nativa andina, símbolo de los bosques de altura del norte patagónico.",
    },
    {
      name: "Ñire",
      image: "/images/plants/Ñire.webp",
      description:
        "Especie de lenga enano o arbustivo que coloniza laderas frías y expuestas en la cordillera neuquina.",
    },
    {
      name: "Maitén cordillerano",
      image: "/images/plants/Maitén-cordillerano.webp",
      description:
        "Árbol de copa ligera que acompaña cursos de agua y laderas húmedas en la región.",
    },
  ],
  "rio-negro": [
    {
      name: "Neneo",
      image: "/images/plants/Neneo austral.webp",
      description:
        "Arbusto típico de la estepa patagónica, resistente al viento y la baja humedad.",
    },
    {
      name: "Molle patagónico",
      image: "/images/plants/Molle patagónico.webp",
      description:
        "Arbusto aromático de follaje denso que brinda refugio a aves y pequeños mamíferos.",
    },
    {
      name: "Coihue andino",
      image: "/images/plants/Coihue andino.webp",
      description:
        "Árbol dominante de bosques húmedos en la franja cordillerana rionegrina.",
    },
  ],
  salta: [
    {
      name: "Yuchán",
      image: "/images/plants/Yuchán.webp",
      description:
        "Árbol de tronco ensanchado común en áreas secas del noroeste, adaptado a sequías estacionales.",
    },
    {
      name: "Palo borracho rosado",
      image: "/images/plants/Palo borracho rosado.webp",
      description:
        "Pariente cercano del yuchán, con espectaculares flores rosadas y tronco botellón.",
    },
    {
      name: "Tipa blanca",
      image: "/images/plants/Tipa blanca.webp",
      description:
        "Árbol de gran porte típico de las yungas salteñas, con follaje denso y sombra generosa.",
    },
  ],
  "san-juan": [
    {
      name: "Retamo",
      image: "/images/plants/Retamo.webp",
      description:
        "Arbusto nativo de zonas áridas cuyanas, muy presente en laderas y piedemonte.",
    },
    {
      name: "Jarilla sanjuanina",
      image: "/images/plants/Jarilla sanjuanina.webp",
      description:
        "Arbusto aromático que domina amplias superficies de monte árido provincial.",
    },
    {
      name: "Algarrobo negro",
      image: "/images/plants/Algarrobo negro.webp",
      description:
        "Árbol clave para suelos áridos, con frutos aprovechados históricamente por comunidades locales.",
    },
  ],
  "san-luis": [
    {
      name: "Algarrobo dulce",
      image: "/images/plants/algarrobodulce.webp",
      description:
        "Árbol del espinal y monte abierto, de gran importancia para fauna y comunidades locales.",
    },
    {
      name: "Espinillo puntano",
      image: "/images/plants/Espinillo.webp",
      description:
        "Árbol pequeño de flores amarillas que integra el paisaje de sierras y llanuras sanluiseñas.",
    },
    {
      name: "Quebracho blanco serrano",
      image: "/images/plants/Quebracho blanco.webp",
      description:
        "Especie que aparece en transiciones entre monte y espinal en el centro del país.",
    },
  ],
  "santa-cruz": [
    {
      name: "Mata negra",
      image: "/images/plants/Mata negra.webp",
      description:
        "Arbusto patagónico frecuente en estepa fría, adaptado a heladas y viento intenso.",
    },
    {
      name: "Coirón fueguino",
      image: "/images/plants/Coirón fueguino.webp",
      description:
        "Pasto duro que forma matas compactas y resiste nevadas y vientos australes.",
    },
    {
      name: "Neneo austral",
      image: "/images/plants/Neneo austral.webp",
      description:
        "Arbusto bajo muy resistente que protege el suelo y sirve de refugio a la fauna.",
    },
  ],
  "santa-fe": [
    {
      name: "Ceibo",
      image: "/images/plants/Ceibo.avif",
      description:
        "Árbol ribereño de flores rojas, habitual en humedales y márgenes fluviales del litoral.",
    },
    {
      name: "Sarandí blanco",
      image: "/images/plants/Sarandí blanco.webp",
      description:
        "Arbusto típico de orillas de lagunas y ríos, asociado a aves acuáticas y anfibios.",
    },
    {
      name: "Timbó litoraleño",
      image: "/images/plants/Timbó litoraleño.webp",
      description:
        "Árbol grande de sombra amplia, integrante característico de selvas en galería del Paraná.",
    },
  ],
  "santiago-del-estero": [
    {
      name: "Itín",
      image: "/images/plants/Itín.webp",
      description:
        "Especie nativa del bosque chaqueño seco, adaptada a altas temperaturas.",
    },
    {
      name: "Vinal",
      image: "/images/plants/Vinal.webp",
      description:
        "Árbol espinoso que se adapta a suelos salinos y ambientes muy secos del Chaco santiagueño.",
    },
    {
      name: "Quebracho colorado santiagueño",
      image: "/images/plants/Quebracho colorado santiagueño.webp",
      description:
        "Árbol robusto cuya madera fue muy explotada en la región, hoy protegido en varias áreas.",
    },
  ],
  "tierra-del-fuego": [
    {
      name: "Lenga fueguina",
      image: "/images/plants/Lenga fueguina.webp",
      description:
        "Árbol característico de bosques subantárticos del extremo sur argentino.",
    },
    {
      name: "Guindo o coihue magallánico",
      image: "/images/plants/Guindo o coihue magallánico.webp",
      description:
        "Árbol de bosques fríos y húmedos, con follaje denso que forma verdaderos techos verdes.",
    },
    {
      name: "Canelo fueguino",
      image: "/images/plants/Canelo fueguino.webp",
      description:
        "Árbol sagrado para pueblos originarios australes, asociado a ambientes muy húmedos y fríos.",
    },
  ],
  tucuman: [
    {
      name: "Aliso del cerro",
      image: "/images/plants/Aliso del cerro.webp",
      description:
        "Árbol de yungas montanas, importante para la regulación hídrica de cuencas serranas.",
    },
    {
      name: "Lapacho amarillo",
      image: "/images/plants/Lapacho amarillo.webp",
      description:
        "Árbol de vistosa floración amarilla, muy presente en bordes de selva y zonas de transición.",
    },
    {
      name: "Horco molle",
      image: "/images/plants/Horco molle.webp",
      description:
        "Árbol típico de las yungas tucumanas, parte del mosaico de especies de selva montana.",
    },
  ],
  "ciudad-autonoma-buenos-aires": [
    {
      name: "Tala ribereño",
      image: "/images/plants/Tala ribereño.webp",
      description:
        "Árbol nativo del área pampeana y ribereña, representativo de la vegetación originaria local.",
    },
    {
      name: "Espinillo de la ribera",
      image: "/images/plants/Espinillo.webp",
      description:
        "Pequeño árbol nativo que sobrevive en reservas urbanas y barrancas del Río de la Plata.",
    },
    {
      name: "Sauce criollo costero",
      image: "/images/plants/Sauce criollo.webp",
      description:
        "Árbol propio de humedales ribereños, hoy conservado en espacios verdes y reservas ecológicas.",
    },
  ],
  "islas-malvinas": [
    {
      name: "Pasto tussac",
      image: "/images/plants/Pasto tussac.webp",
      description:
        "Gramínea típica de ambientes costeros subantárticos, clave para refugio de fauna marina.",
    },
    {
      name: "Festuca fueguina",
      image: "/images/plants/Festuca fueguina.webp",
      description:
        "Pasto duro de climas fríos y ventosos que tapiza grandes extensiones de llanuras.",
    },
    {
      name: "Matas almohadilladas",
      image: "/images/plants/Matas almohadilladas.webp",
      description:
        "Conjunto de pequeñas plantas en cojín adaptadas a suelos pobres, bajas temperaturas y vientos constantes.",
    },
  ],
};

