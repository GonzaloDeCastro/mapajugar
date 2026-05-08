import type { ProvinceContentItem, ProvinceSlug } from "@/types/province";

/**
 * Fauna autóctona base por provincia.
 * Si luego querés agregar imágenes locales, podés completar `image`.
 */
export const DEFAULT_ANIMALS_BY_PROVINCE: Record<
  ProvinceSlug,
  ProvinceContentItem[]
> = {
  "buenos-aires": [
    {
      name: "Hornero",
      image: "/images/animals/hornero-buenos-aires.webp",
      description: "Ave nativa muy común en ambientes urbanos y rurales.",
    },
    {
      name: "Ciervo de los pantanos",
      image: "",
      description:
        "Cérvido de humedales del delta y sectores ribereños bonaerenses.",
    },
  ],
  catamarca: [
    {
      name: "Mara patagónica",
      image: "/images/animals/mara-rio-negro-catamarca.webp",
      description: "Roedor de ambientes áridos y abiertos del oeste argentino.",
    },
    {
      name: "Vicuña",
      image: "",
      description: "Camélido andino típico de la Puna de altura.",
    },
  ],
  chaco: [
    {
      name: "Aguará guazú",
      image: "/images/animals/aguara-chaco.webp",
      description: "El cánido más grande de Sudamérica, de pastizales y esteros.",
    },
    {
      name: "Tatú carreta",
      image: "",
      description: "Armadillo chaqueño de gran tamaño y hábitos nocturnos.",
    },
  ],
  chubut: [
    {
      name: "Huemul",
      image: "/images/animals/huemul-chubut.webp",
      description: "Ciervo andino patagónico, especie emblemática de conservación.",
    },
    {
      name: "Ballena franca austral",
      image: "/images/animals/Ballena-Aluminium-y-su-cr-chubut.webp",
      description: "Cetáceo icónico de la costa atlántica patagónica.",
    },
  ],
  cordoba: [
    {
      name: "Cóndor andino",
      image: "",
      description: "Ave de gran envergadura presente en zonas altas serranas.",
    },
    {
      name: "Puma",
      image: "",
      description: "Felino nativo de áreas serranas y de monte.",
    },
  ],
  corrientes: [
    {
      name: "Carpincho",
      image: "/images/animals/carpincho-entre-rios.webp",
      description: "Mamífero semiacuático representativo de esteros y lagunas.",
    },
    {
      name: "Yacaré overo",
      image: "",
      description: "Reptil típico de humedales del litoral.",
    },
  ],
  "entre-rios": [
    {
      name: "Carpincho",
      image: "/images/animals/carpincho-entre-rios.webp",
      description: "Roedor semiacuático habitual de ríos y bañados.",
    },
    {
      name: "Lobito de río",
      image: "",
      description: "Mustélido asociado a cursos de agua limpios.",
    },
  ],
  formosa: [
    {
      name: "Lagarto overo",
      image: "/images/animals/lagarto-overo-formosa.webp",
      description: "Gran reptil nativo de ambientes cálidos del norte.",
    },
    {
      name: "Oso hormiguero",
      image: "",
      description: "Mamífero insectívoro característico del Gran Chaco.",
    },
  ],
  jujuy: [
    {
      name: "Llama",
      image: "/images/animals/llama-jujuy.webp",
      description: "Camélido andino de gran importancia cultural y productiva.",
    },
    {
      name: "Vicuña",
      image: "",
      description: "Camélido silvestre de altura en la Puna jujeña.",
    },
  ],
  "la-pampa": [
    {
      name: "Puma",
      image: "/images/animals/puma-argentino-la-pampa.webp",
      description: "Predador tope en ambientes de pastizal y monte.",
    },
    {
      name: "Ñandú",
      image: "",
      description: "Ave corredora típica de llanuras abiertas.",
    },
  ],
  "la-rioja": [
    {
      name: "Ñandú",
      image: "/images/animals/niandu-la-rioja.webp",
      description: "Ave corredora adaptada a ambientes secos y abiertos.",
    },
    {
      name: "Guanaco",
      image: "",
      description: "Camélido silvestre presente en zonas áridas del oeste.",
    },
  ],
  mendoza: [
    {
      name: "Cóndor andino",
      image: "/images/animals/condor-andino-mendoza.webp",
      description: "Ave emblema de los Andes mendocinos.",
    },
    {
      name: "Guanaco",
      image: "",
      description: "Camélido nativo de estepas y piedemonte andino.",
    },
  ],
  misiones: [
    {
      name: "Yaguareté",
      image: "/images/animals/yaguarete.webp",
      description: "Felino más grande de América, símbolo de la selva misionera.",
    },
    {
      name: "Mono carayá",
      image: "/images/animals/mono-caraya-misiones.webp",
      description: "Primate de bosques subtropicales del noreste.",
    },
  ],
  neuquen: [
    {
      name: "Zorro gris patagónico",
      image: "/images/animals/Zorro-gris-neuquen.webp",
      description: "Mamífero adaptable de estepa y precordillera.",
    },
    {
      name: "Pudú",
      image: "",
      description: "Ciervo pequeño de bosques andino-patagónicos.",
    },
  ],
  "rio-negro": [
    {
      name: "Mara patagónica",
      image: "/images/animals/mara-rio-negro-catamarca.webp",
      description: "Roedor característico de la estepa del norte patagónico.",
    },
    {
      name: "Guanaco",
      image: "",
      description: "Camélido frecuente en mesetas y valles áridos.",
    },
  ],
  salta: [
    {
      name: "Tapir",
      image: "/images/animals/tapir-salta.webp",
      description: "Herbívoro de gran tamaño de selvas de montaña y yungas.",
    },
    {
      name: "Vicuña",
      image: "/images/animals/vicuna-argentina-salta.webp",
      description: "Camélido silvestre de ambientes altos y secos.",
    },
  ],
  "san-juan": [
    {
      name: "Guanaco",
      image: "",
      description: "Camélido de ambientes áridos precordilleranos.",
    },
    {
      name: "Mara patagónica",
      image: "",
      description: "Roedor de zonas abiertas y secas de Cuyo.",
    },
  ],
  "san-luis": [
    {
      name: "Peludo argentino",
      image: "/images/animals/peludo-argentino-san-luis.webp",
      description: "Armadillo pequeño de hábitos crepusculares y nocturnos.",
    },
    {
      name: "Zorro gris",
      image: "",
      description: "Canino nativo de sierras y llanuras semiáridas.",
    },
  ],
  "santa-cruz": [
    {
      name: "Pudú",
      image: "/images/animals/Pudu-Argentina-santa-cruz.webp",
      description: "Ciervo pequeño de bosques fríos del sur.",
    },
    {
      name: "Guanaco",
      image: "",
      description: "Camélido muy representativo de la estepa santacruceña.",
    },
  ],
  "santa-fe": [
    {
      name: "Yacaré",
      image: "/images/animals/yacare-santa-fe.webp",
      description: "Reptil nativo de lagunas y humedales litoraleños.",
    },
    {
      name: "Carpincho",
      image: "",
      description: "Mamífero semiacuático abundante en ambientes ribereños.",
    },
  ],
  "santiago-del-estero": [
    {
      name: "Pecarí de collar",
      image: "",
      description: "Mamífero chaqueño que habita montes secos y espinales.",
    },
    {
      name: "Tatú mulita",
      image: "",
      description: "Armadillo frecuente en suelos blandos del Chaco seco.",
    },
  ],
  "tierra-del-fuego": [
    {
      name: "Pingüino fueguino",
      image: "/images/animals/pinguino-tierra-del-fuego.webp",
      description: "Ave marina adaptada a aguas frías del sur austral.",
    },
    {
      name: "Cauquén",
      image: "",
      description: "Ave migratoria característica de ambientes fueguinos.",
    },
  ],
  tucuman: [
    {
      name: "Tucán grande",
      image: "/images/animals/Tucán-Grande-tucuman.webp",
      description: "Ave colorida típica de selvas pedemontanas.",
    },
    {
      name: "Tapir",
      image: "",
      description: "Mamífero nativo de yungas y selvas del noroeste.",
    },
  ],
  "ciudad-autonoma-buenos-aires": [
    {
      name: "Hornero",
      image: "",
      description: "Ave nacional presente en parques y arbolado urbano.",
    },
    {
      name: "Benteveo",
      image: "",
      description: "Ave urbana común en plazas y reservas costeras.",
    },
  ],
  "islas-malvinas": [
    {
      name: "Pingüino de penacho amarillo",
      image: "",
      description: "Ave marina subantártica frecuente en costas malvinenses.",
    },
    {
      name: "Albatros de ceja negra",
      image: "",
      description: "Gran ave oceánica asociada a ambientes fríos australes.",
    },
  ],
};

