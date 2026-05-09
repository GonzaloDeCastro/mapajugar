/**
 * Texto único por especie (misma descripción en todas las provincias).
 * Claves en minúsculas y sin distinguir mayúsculas al buscar.
 */
const CANONICAL: Record<string, string> = {
  hornero:
    "Ave paseriforme que construye el nido de barro en forma de horno, de ahí su nombre. Se alimenta principalmente de insectos y artrópodos en el suelo. Es adaptable a ciudades, parques y campos abiertos; en Argentina es ave nacional.",

  "ciervo de los pantanos":
    "Cérvido de gran porte ligado a humedales, bañados y costas de ríos con vegetación palustre. Los machos desarrollan astas palmeadas y ramificadas. Está amenazado por la pérdida y fragmentación de su hábitat; en varias regiones cuenta con protección y monitoreo.",

  "mara patagónica":
    "Roedor grande de patas y orejas largas, emparentado con los conejillos de indias. Vive en colonias en estepas y matorrales semiáridos; corre con zancadas rápidas y se alimenta de pastos y hierbas. Es típico del oeste y la Patagonia extraandina.",

  vicuña:
    "Camélido silvestre de talla mediana, el más pequeño entre los parientes sudamericanos de la llama. Habita la Puna y ambientes altoandinos secos; produce una fibra muy fina y valiosa. Vive en manadas y está adaptado a bajas presiones de oxígeno.",

  "aguará guazú":
    "Cánido alto de patas largas, también llamado lobo de crin; no es un ‘lobo’ ni un zorro clásico. Habita pastizales, cerrados y bordes de bosque; se alimenta de frutos, pequeños vertebrados y carroña. Es el cánido más grande de Sudamérica.",

  "tatú carreta":
    "Armadillo de gran tamaño con caparazón oscuro y fuerte; excava madrigueras y consume insectos, larvas y termitas. Es de hábitos principalmente nocturnos. Está clasificado en peligro por caza y destrucción de hábitat en el Chaco y regiones vecinas.",

  huemul:
    "Ciervo nativo de montaña y bosques andino-patagónicos, de patas cortas y cuerpo robusto. Es herbívoro y se desplaza en laderas escarpadas. Se encuentra en situación crítica de conservación; el avistaje responsable respeta áreas protegidas y normas locales.",

  "ballena franca austral":
    "Ballena barbada sin aleta dorsal, con callosidades características en la cabeza y mandíbulas curvadas. Se reproduce y alimenta frente a costas patagónicas; en temporada es objeto de avistaje regulado. Es un ícono de la conservación marina en Argentina.",

  "cóndor andino":
    "Ave carroñera de enorme envergadura que aprovecha corrientes térmicas para planear sobre la cordillera. Cumple un rol ecológico clave al reciclar nutrientes. Habita zonas altas y escarpadas; en varias provincias es símbolo de los Andes y está protegida por ley.",

  puma:
    "Felino solitario y territorial, el mayor depredador nativo de mamíferos en buena parte del país. Habita desde bosques montanos hasta matorrales y estepas; caza principalmente en crepúsculo y noche. También se lo conoce como león americano o cougar.",

  carpincho:
    "El roedor viviente más grande del mundo; vive en grupos junto a ríos, lagunas y bañados. Es excelente nadador y se sumerge para escapar de depredadores. Se alimenta de pastos y vegetación acuática; es clave en humedales del litoral y el centro del país.",

  "yacaré overo":
    "Crocodilio del género Caiman, común en lagunas, esteros y cursos lentos del norte y el litoral. Termorregula abriendo la boca y toma sol en orillas. Es carnívoro; los ejemplares jóvenes son presa de aves y otros depredadores hasta alcanzar tamaño adulto.",

  yacaré:
    "Crocodilio del género Caiman, común en lagunas, esteros y cursos lentos del norte y el litoral. Termorregula abriendo la boca y toma sol en orillas. Es carnívoro; los ejemplares jóvenes son presa de aves y otros depredadores hasta alcanzar tamaño adulto.",

  "lobito de río":
    "Mustélido semiacuático de cuerpo alargado y cola musculosa; se alimenta sobre todo de peces. Prefiere ríos y arroyos con agua clara y vegetación ribereña. Es escurridizo y suele verse poco a pesar de ser relativamente común donde el hábitat se conserva.",

  "lagarto overo":
    "Gran lagarto teíido de cuerpo fuerte y cola larga; es omnívoro y activo con temperaturas cálidas. Habita el Chaco, el noreste y ambientes abiertos con buen sol. Es importante para el control de insectos y pequeños vertebrados en su ecosistema.",

  "oso hormiguero":
    "Mamífero con hocico alargado y lengua pegajosa para lamer hormigas y termitas. Tiene garras fuertes para abrir nidos; vive en bosques y matorrales del Chaco y regiones vecinas. Es principalmente arborícola y de actividad diurna o crepuscular.",

  llama:
    "Camélido domesticado en los Andes desde hace milenios; se usa para carga, carne y fibra. Es herbívoro, resistente al frío y a la altura. En el NOA convive con comunidades rurales y pastoreo en la Puna y valles altoandinos.",

  ñandú:
    "Avestruz sudamericana grande, incapaz de volar pero veloz al correr. Los machos pueden cuidar nidos con huevos de varias hembras. Habita pastizales, campos abiertos y matorrales; es omnívora y consume plantas, frutos e invertebrados.",

  guanaco:
    "Camélido silvestre de pelaje lanoso y cuello largo; vive en manadas en estepas, sierras y ambientes semiáridos. Es herbívoro y muy adaptado a pendientes y viento patagónico. Históricamente fue clave para pueblos originarios y sigue siendo símbolo de la fauna austral.",

  yaguareté:
    "Felino de mayor tamaño en América; cuerpo musculoso, mandíbulas poderosas y manchas rosetas. Habita selvas y bosques húmedos; nada y trepa bien. Es depredador tope en la red trófica y está amenazado por la deforestación y el conflicto con ganadería.",

  "mono carayá":
    "Primate con cola prensil y fuerte vocalización en grupo, por eso se lo llama aullador negro. Vive en el dosel de la selva misionera y áreas vecinas; es folívoro y frugívoro. Pasa mucho tiempo quieto digiriendo hojas de baja calidad nutricional.",

  "zorro gris patagónico":
    "Cánido de tamaño mediano, orejas grandes y pelaje grisáceo; es oportunista y come roedores, frutos, insectos y carroña. Habita desde la Patagonia hasta el centro del país en matorrales y estepas. Es principalmente crepuscular y nocturno.",

  "zorro gris":
    "Cánido de tamaño mediano, orejas grandes y pelaje grisáceo; es oportunista y come roedores, frutos, insectos y carroña. Habita desde la Patagonia hasta el centro del país en matorrales y estepas. Es principalmente crepuscular y nocturno.",

  pudú:
    "Cérvido muy pequeño, de patas cortas y astas simples en el macho; vive en sotobosque denso de bosques templados y fríos. Es solitario y sigiloso, se alimenta de brotes y pastos bajo cubierta vegetal. Es una de las especies de ciervo más pequeñas del planeta.",

  tapir:
    "Herbívoro grande con hocico móvil en forma de trompa corta; habita yungas y selvas húmedas del noroeste. Es dispersor de semillas y necesita corredores de bosque. Es principalmente nocturno y pasa buena parte del tiempo cerca de cursos de agua.",

  "peludo argentino":
    "Armadillo de seis bandas móviles en el dorso; de tamaño mediano y hábitos crepusculares o nocturnos. Excava madrigueras y se alimenta de insectos y otros invertebrados. Es frecuente en pastizales, campos y bordes de monte del centro del país.",

  "pecarí de collar":
    "Suido nativo de hocico corto y collar claro en el cuello; vive en manadas en monte, espinal y bosques secos. Es omnívoro y se desplaza ruidosamente al buscar alimento. Es presa de pumas y jaguares donde ambos coexisten.",

  "tatú mulita":
    "Armadillo de nueve bandas y tamaño modesto; habita suelos blandos del Chaco y áreas vecinas. Excava y consume insectos y larvas. Es más común que el tatú carreta y se lo cruza con frecuencia en rutas rurales al anochecer.",

  "pingüino fueguino":
    "Pingüino de tamaño medio que forma colonias en costas y islotes del sur; nada con agilidad y se alimenta de peces y calamares en el mar. Migra en invierno hacia aguas más templadas. En Tierra del Fuego es uno de los íconos del avistaje costero.",

  "pingüino de penacho amarillo":
    "Pingüino subantártico con penachos amarillos llamativos sobre los ojos; anida en colonias ruidosas en islas rocosas. Se alimenta en el mar de krill, peces y calamares. Frecuente en ambientes fríos del Atlántico sur y asociado a islas oceánicas.",

  cauquén:
    "Ave anseriforme robusta, emparentada con gansos y patos; habita pastizales húmedos, turberas y costas del sur. Es principalmente herbívora y forma bandadas estacionales. En Tierra del Fuego y Patagonia es parte típica del paisaje de estepa y humedales.",

  "tucán grande":
    "Ave frugívora de pico muy grande y colorido; vive en el dosel de selvas y bosques húmedos. Traga frutos enteros y contribuye a dispersar semillas. En el NOA se asocia a yungas y selvas pedemontanas de montaña.",

  benteveo:
    "Tiránido de cresta y pecho amarillo; defiende su territorio con llamadas fuertes (‘benteveo’). Come insectos y pequeños vertebrados. Es muy común en plazas, jardines y reservas urbanas con algo de arbolado.",

  "albatros de ceja negra":
    "Albatros de mediano tamaño con marcada ceja oscura alrededor del ojo; planea durante horas sobre el mar abierto. Se alimenta de calamares, peces y carroña marina. Cría en colonias en islas subantárticas y recorre vastas áreas oceánicas.",
};

export function getCanonicalAnimalDescription(name: string): string | undefined {
  const key = name.trim().toLowerCase();
  return CANONICAL[key];
}
