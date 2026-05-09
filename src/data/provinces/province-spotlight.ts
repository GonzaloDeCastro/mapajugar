import type { ProvinceSlug } from "@/types/province";

/**
 * Textos para la ficha lateral (debajo del SVG). Población: referencia censo 2022 INDEC (redondeada).
 */
export const PROVINCE_SPOTLIGHT: Record<ProvinceSlug, string> = {
  "buenos-aires": `La provincia de Buenos Aires es el corazón demográfico y económico del país: concentra la mayor parte de la población nacional y una red urbana que orbita alrededor del puerto y la industria. Su historia colonial y republicana está ligada al cereal, la ganadería y la inmigración que poblaron la Pampa húmeda y la costa.

Habitan en la provincia alrededor de 17,5 millones de personas (censo 2022), la cifra más alta de Argentina.

Es conocida por Mar del Plata y la costa atlántica, el delta y el río Paraná, la tradición agrícola-ganadera y una cultura fuerte en deporte, radio y gastronomía que se proyecta a todo el país.`,

  catamarca: `Catamarca articula una historia antigua —pueblos originarios, camino incaico y minería— con el desarrollo de valles calchaquíes y la Puna. Fue una de las primeras gobernaciones coloniales del actual territorio argentino.

Vive allí cerca de 430.000 habitantes.

Se la reconoce por paisajes de altura, viñedos en los valles, el turismo de montaña y sitios como el Campo de Piedra Pómez o la Ruta de los Seismiles, además de una identidad cultural del noroeste bien marcada.`,

  chaco: `El Chaco fue escenario de campañas militares del siglo XIX y de la expansión del ferrocarril y el algodón; hoy combina ciudades medias, monte nativo y humedales. Resistencia creció como centro regional con fuerte impronta artística.

Su población ronda el 1,1 millón de habitantes.

Es importante por el Parque Nacional El Impenetrable, la biodiversidad del Chaco húmedo, la producción agropecuaria y el turismo de naturaleza y escultura urbana.`,

  chubut: `Chubut integra la colonización galesa del valle inferior, la explotación de la lana y el petróleo, y el crecimiento de Comodoro Rivadavia como polo energético patagónico. La costa atlántica y la cordillera conviven en una misma provincia.

Habitan unos 600.000 habitantes.

Es mundialmente asociada a Península Valdés y las ballenas francas australes, a la estepa y a los bosques de los Alerces; combina turismo natural, energía y tradición patagónica.`,

  cordoba: `Córdoba fue centro virreinal, luego “la Docta” por su universidad fundada en 1613 y motor cultural del interior. El ferrocarril y la industria consolidaron a la capital como segunda urbe del país.

Cuenta con casi 3,9 millones de habitantes.

Es famosa por las Sierras Grandes, el turismo estudiantil y serrano, la música cuartetera y una gastronomía propia; el legado jesuítico en las estancias y misiones es Patrimonio de la Humanidad.`,

  corrientes: `Corrientes, sobre el Paraná, fue clave en el trazado colonial y en las guerras con Paraguay; su cultura mezcla tradiciones guaraníes y litoraleñas. La navegación y el yerbatal definieron buena parte de su economía.

Viven allí más de 1,1 millones de personas.

Destaca por los Esteros del Iberá —uno de los grandes humedales de Sudamérica—, el carnaval y la música chamamé, patrimonio cultural de la humanidad.`,

  "entre-rios": `Entre Ríos, entre Paraná y Uruguay, fue tierra de frontera, colonias y ferrocarril; Concordia y Concepción del Uruguay concentran historia republicana y vitivinícola. El modelo agroexportador pampeano se expresa en campos y puertos fluviales.

Su población supera el 1,4 millón de habitantes.

Es conocida por el turismo termal, el delta entrerriano, los citrícolas y ciudades como Paraná y Concordia, con fuerte vínculo con el río y los humedales.`,

  formosa: `Formosa, en el noreste, tuvo presencia misionera y militar y hoy es puerta al Chaco húmedo y a la cuenca del Paraguay. La ciudad capital creció como administración y servicios en una región de bañados y monte.

Habitan cerca de 610.000 personas.

Se la identifica con la Reserva Laguna Oca, el Río Pilcomayo, pueblos originarios y una biodiversidad de selva en galería y pastizales que atrae observación de aves y naturaleza.`,

  jujuy: `Jujuy reúne Quebrada de Humahuaca —Patrimonio Mundial—, Puna y Yungas: un corredor andino milenario de caravanas y culturas altiplánicas. La minería y el turismo complementan economías agrícolas en valles.

Su población es de alrededor de 810.000 habitantes.

Es célebre por el Carnaval de Humahuaca, la Quebrada, las Salinas Grandes y el contraste entre el altiplano y la selva de montaña en pocos kilómetros.`,

  "la-pampa": `La Pampa se organizó en torno al pastizal y el ferrocarril; Santa Rosa capitalizó funciones administrativas en una provincia eminentemente agrícola-ganadera. Su nombre evoca la inmensidad pampeana.

Viven unos 370.000 habitantes en una superficie muy amplia, con baja densidad.

Es conocida por la estepa, los campos de cultivo y ganadería, parques como Lihué Calel y el imaginario literario de la llanura.`,

  "la-rioja": `La Rioja articula valles cuyanos, historia de la Independencia —con Chilecito y el cablecarril minero— y una cordillera que la vincula a la Ruta 40. El vino y el olivo marcan su perfil productivo.

Cuenta con cerca de 380.000 habitantes.

Es famosa por Talampaya —Patrimonio Natural de la Humanidad junto a Ischigualasto en San Juan vecino—, la Cuesta de Miranda y paisajes de montaña y semidesierto.`,

  mendoza: `Mendoza fue reorganizada tras el terremoto de 1861 y se convirtió en capital del vino y del riego andino. San Martín cruzó los Andes desde estos valles hacia Chile.

Supera los 2,2 millones de habitantes.

Es sinónimo de Malbec, alta montaña y Aconcagua; el turismo enológico, el ski y la cultura del oasis la hacen una de las provincias más visitadas del país.`,

  misiones: `Misiones conserva el legado de las reducciones jesuítico-guaraníes —Patrimonio Mundial— y el bosque de la Selva Misionera. El yerbatal y la madera sostuvieron su desarrollo; Posadas es el centro provincial.

Habitan más de 1,2 millones de personas.

Es mundialmente conocida por las Cataratas del Iguazú —maravilla natural— y por la biodiversidad subtropical que la distingue del resto de Argentina.`,

  neuquen: `Neuquén creció con el petróleo, el gas y la fruticultura del Alto Valle; la cordillera aporta turismo y energía hidráulica. Pueblos mapuche y la estepa marcan su diversidad cultural.

Su población ronda los 730.000 habitantes.

Es reconocida por el Nahuel Huapi, Villa La Angostura, el bolsón petrolero y el paisaje de lagos y volcanes que comparte con la Patagonia andina.`,

  "rio-negro": `Río Negro une el Alto Valle frutícola, la meseta de la estepa y la cordillera. Bariloche y la “patagonia andina” son íconos del turismo nacional desde el siglo XX.

Viven cerca de 760.000 habitantes.

Combina producción de peras y manzanas, ciudades como Viedma (capital legislativa en parte de la historia provincial) y General Roca, y el turismo de montaña y lagos que la hace emblemática.`,

  salta: `Salta, “la Linda”, fue centro colonial y lealista durante las guerras de independencia; su arquitectura y cultura andina son referencia del NOA. El tren a las nubes simboliza el ingenio en la Puna.

Cuenta con más de 1,4 millones de habitantes.

Es famosa por Cafayate, las Quebradas, la Puna salteña y una identidad folclórica y religiosa muy visible en festividades y gastronomía.`,

  "san-juan": `San Juan combina desierto, oasis y cordillera; Ischigualasto y Barreal hablan de geología y astronomía. El sismo de 1944 marcó la reconstrucción de la capital moderna.

Habitan alrededor de 820.000 personas.

Es conocida por el Valle de la Luna, el vino y el sol, el turismo de aventura y el paisaje montañoso que la conecta con Chile por pasos altos.`,

  "san-luis": `San Luis articula sierras centrales y llanuras pampeanas; su capital fue diseñada con trazado racional en el siglo XIX. La educación y el turismo serrano ganaron peso en décadas recientes.

Su población es de unos 540.000 habitantes.

Destaca por Potrero de los Funes, Merlo, parques nacionales y un ritmo de vida asociado a naturaleza y deporte al aire libre.`,

  "santa-cruz": `Santa Cruz es la provincia más austral continental; el descubrimiento de petróleo en Cerro Dragón y el turismo en glaciares transformaron su perfil. El Chaltén y El Calafate son centros globales de trekking y hielos.

Viven cerca de 330.000 habitantes en un territorio enorme y poco denso.

Es mundialmente conocida por el Glaciar Perito Moreno, el Fitz Roy y la Patagonia austral; también por la custodia del Canal Beagle en el imaginario nacional.`,

  "santa-fe": `Santa Fe fue corazón del litoral agroindustrial: Rosario, el puerto del Paraná y el Monumento a la Bandera simbolizan comercio y memoria nacional. La provincia articula Pampa húmeda y humedales.

Supera los 3,5 millones de habitantes, uno de los totales más altos del país.

Es conocida por Rosario, Santa Fe capital, el río, la industria y el agro, y por un legado histórico ligado a la Confederación y a la organización del Estado moderno.`,

  "santiago-del-estero": `Santiago del Estero es la ciudad más antigua fundada por españoles en lo que hoy es Argentina (1553). La provincia combina Chaco seco, monte y tradiciones criollas y originarias.

Ronda el 1 millón de habitantes.

Es famosa por el folklore, las termas de Río Hondo —destino terapéutico y turístico— y una identidad del norte interior muy arraigada.`,

  "tierra-del-fuego": `La provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur incluye la isla grande y reclamos sobre Malvinas y Antártida en la ley argentina. Ushuaia es la ciudad más austral del país y creció con presidio, naval y turismo.

Habitan unos 190.000 habitantes en la porción efectivamente urbanizada de la isla.

Es conocida como “fin del mundo”, por el Canal Beagle, los bosques magallánicos y el turismo antártico y de montaña.`,

  tucuman: `Tucumán fue escenario del Congreso de 1816 y es llamada “Jardín de la República” por el verdor de sus valles. El azúcar marcó su economía y su historia social durante el siglo XX.

Cuenta con casi 1,7 millones de habitantes.

Es célebre por la Casa Histórica, el cerro San Javier, las yungas tucumanas y una cultura gastronómica y musical del NOA muy difundida.`,

  "ciudad-autonoma-buenos-aires": `La Ciudad Autónoma de Buenos Aires fue dos veces capital del Virreinato y es hoy capital federal: puerto, finanzas, cultura y política en una misma metrópoli. El trazado y el riachuelo cuentan siglos de transformación.

Viven allí más de 3,1 millones de habitantes (censo 2022); el Gran Buenos Aires suma varios millones más en la provincia vecina.

Es conocida mundialmente por el tango, el teatro, las librerías, la arquitectura ecléctica y la vida urbana intensa a orillas del Río de la Plata.`,

  "islas-malvinas": `Las Islas Malvinas fueron habitadas por población gaucha y luego ocupadas militarmente por el Reino Unido en el siglo XIX; la guerra de 1982 reafirmó en Argentina el reclamo de soberanía, respaldado por resoluciones de Naciones Unidas.

La población residente es de unos tres mil habitantes, dedicada principalmente a la cría ovina y servicios locales.

Son conocidas por su historia militar y política, la biodiversidad marina y subantártica, y por ocupar un lugar central en la política exterior y la identidad nacional argentina.`,
};
