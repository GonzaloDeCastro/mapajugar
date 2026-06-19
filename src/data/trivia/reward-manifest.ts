import type { ProvinceSlug } from "@/types/province";

export type TriviaReward = {
  speciesName: string;
  label: string;
  imagePath: string;
};

const AWARENESS_ANIMALS = {
  hornero: {
    speciesName: "Hornero",
    label: "El hornero, ave nacional",
    imagePath: "/images/awareness/animals/hornero.png",
  },
  guanaco: {
    speciesName: "Guanaco",
    label: "El guanaco andino",
    imagePath: "/images/awareness/animals/guanaco.png",
  },
  vizcacha: {
    speciesName: "Vizcacha",
    label: "La vizcacha de montaña",
    imagePath: "/images/awareness/animals/vizcacha.png",
  },
  yaguarete: {
    speciesName: "Yaguareté",
    label: "El yaguareté",
    imagePath: "/images/awareness/animals/yaguarete.png",
  },
  pinguino: {
    speciesName: "Pingüino de Magallanes",
    label: "El pingüino de Magallanes",
    imagePath: "/images/awareness/animals/pinguino-magallanes.png",
  },
  carpincho: {
    speciesName: "Carpincho",
    label: "El carpincho",
    imagePath: "/images/awareness/animals/carpincho.png",
  },
  yarara: {
    speciesName: "Yarará",
    label: "La yarará",
    imagePath: "/images/awareness/animals/yarara.png",
  },
  flamenco: {
    speciesName: "Flamenco austral",
    label: "El flamenco austral",
    imagePath: "/images/awareness/animals/flamenco-austral.png",
  },
  tatu: {
    speciesName: "Tatú carreta",
    label: "El tatú carreta",
    imagePath: "/images/awareness/animals/tatu-carreta.png",
  },
  nandu: {
    speciesName: "Ñandú",
    label: "El ñandú pampeano",
    imagePath: "/images/awareness/animals/nandu.png",
  },
  condor: {
    speciesName: "Cóndor andino",
    label: "El cóndor andino",
    imagePath: "/images/awareness/animals/condor-andino.png",
  },
  tucan: {
    speciesName: "Tucán grande",
    label: "El tucán grande",
    imagePath: "/images/awareness/animals/tucan-grande.png",
  },
  zorrino: {
    speciesName: "Zorrino",
    label: "El zorrino",
    imagePath: "/images/awareness/animals/zorrino.png",
  },
  pejerrey: {
    speciesName: "Pejerrey",
    label: "El pejerrey",
    imagePath: "/images/awareness/animals/pejerrey.png",
  },
  zorro: {
    speciesName: "Zorro pampeano",
    label: "El zorro pampeano",
    imagePath: "/images/awareness/animals/zorro-pampeano.png",
  },
  mara: {
    speciesName: "Mara",
    label: "La mara patagónica",
    imagePath: "/images/awareness/animals/mara.png",
  },
  lechucita: {
    speciesName: "Lechucita vizcachera",
    label: "La lechucita vizcachera",
    imagePath: "/images/awareness/animals/lechucita-vizcachera.png",
  },
  margay: {
    speciesName: "Margay",
    label: "El margay",
    imagePath: "/images/awareness/animals/margay.png",
  },
  comadreja: {
    speciesName: "Comadreja overa",
    label: "La comadreja overa",
    imagePath: "/images/awareness/animals/comadreja-overa.png",
  },
  paloma: {
    speciesName: "Paloma araucana",
    label: "La paloma araucana",
    imagePath: "/images/awareness/animals/paloma-araucana.png",
  },
  delfin: {
    speciesName: "Delfín franciscana",
    label: "El delfín franciscana",
    imagePath: "/images/awareness/animals/delfin-franciscana.png",
  },
  coati: {
    speciesName: "Coatí",
    label: "El coatí",
    imagePath: "/images/awareness/animals/coati.png",
  },
  rana: {
    speciesName: "Rana criolla",
    label: "La rana criolla",
    imagePath: "/images/awareness/animals/rana-criolla.png",
  },
} as const satisfies Record<string, TriviaReward>;

/** Premio descargable: ficha de fauna por provincia jugada. */
export const TRIVIA_REWARDS: Record<ProvinceSlug, TriviaReward> = {
  "buenos-aires": AWARENESS_ANIMALS.hornero,
  catamarca: AWARENESS_ANIMALS.guanaco,
  chaco: AWARENESS_ANIMALS.yaguarete,
  chubut: AWARENESS_ANIMALS.pinguino,
  cordoba: AWARENESS_ANIMALS.carpincho,
  corrientes: AWARENESS_ANIMALS.yarara,
  "entre-rios": AWARENESS_ANIMALS.flamenco,
  formosa: AWARENESS_ANIMALS.tatu,
  jujuy: AWARENESS_ANIMALS.vizcacha,
  "la-pampa": AWARENESS_ANIMALS.nandu,
  "la-rioja": AWARENESS_ANIMALS.guanaco,
  mendoza: AWARENESS_ANIMALS.condor,
  misiones: AWARENESS_ANIMALS.tucan,
  neuquen: AWARENESS_ANIMALS.zorrino,
  "rio-negro": AWARENESS_ANIMALS.pejerrey,
  salta: AWARENESS_ANIMALS.vizcacha,
  "san-juan": AWARENESS_ANIMALS.zorro,
  "san-luis": AWARENESS_ANIMALS.mara,
  "santa-cruz": AWARENESS_ANIMALS.pinguino,
  "santa-fe": AWARENESS_ANIMALS.pejerrey,
  "santiago-del-estero": AWARENESS_ANIMALS.lechucita,
  "tierra-del-fuego": AWARENESS_ANIMALS.pinguino,
  tucuman: AWARENESS_ANIMALS.margay,
  "ciudad-autonoma-buenos-aires": AWARENESS_ANIMALS.paloma,
  "islas-malvinas": AWARENESS_ANIMALS.pinguino,
};

export function pickRewardForProvinces(provinces: ProvinceSlug[]): TriviaReward {
  const slug = provinces[Math.floor(Math.random() * provinces.length)] ?? "buenos-aires";
  return TRIVIA_REWARDS[slug];
}
