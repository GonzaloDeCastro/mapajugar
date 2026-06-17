import type { ProvinceContentItem, ProvinceSlug } from "@/types/province";

/** Destinos turísticos base por provincia. Imágenes en `tourism-images.ts`. */
export const DEFAULT_TOURISM_BY_PROVINCE: Record<
  ProvinceSlug,
  ProvinceContentItem[]
> = {
  "buenos-aires": [
    {
      name: "Mar del Plata y Costa Atlántica",
      image: "",
      description: "Playas, paseo costero y una de las ciudades balnearias más visitadas del país.",
    },
    {
      name: "Sierra de la Ventana (Parque Provincial Ernesto Tornquist)",
      image: "",
      description: "Sierras, senderos y el Cerro Tres Picos en un parque de formaciones rocosas únicas.",
    },
    {
      name: "Delta del Paraná en Tigre",
      image: "",
      description: "Islas, arroyos y paseos en lancha por el delta del Paraná, a pocos kilómetros de la capital.",
    },
  ],
  "catamarca": [
    {
      name: "Campo de Piedra Pómez (Antofagasta de la Sierra)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Campo de Piedra Pómez. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Ruta de los Seismiles y Paso de San Francisco",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Ruta de los Seismiles y Paso de San Francisco. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Cuesta del Portezuelo y El Rodeo",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Cuesta del Portezuelo y El Rodeo. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "chaco": [
    {
      name: "Parque Nacional El Impenetrable",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional El Impenetrable. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Resistencia, Ciudad de las Esculturas",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Resistencia, Ciudad de las Esculturas. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Parque Nacional Chaco",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional Chaco. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "chubut": [
    {
      name: "Península Valdés",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Península Valdés. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Parque Nacional Los Alerces",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional Los Alerces. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Punta Tombo (reserva de pingüinos)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Punta Tombo. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "cordoba": [
    {
      name: "Valle de Calamuchita (Villa General Belgrano y La Cumbrecita)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Valle de Calamuchita. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Camino de las Altas Cumbres",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Camino de las Altas Cumbres. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Parque Nacional Quebrada del Condorito",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional Quebrada del Condorito. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "corrientes": [
    {
      name: "Esteros del Iberá",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Esteros del Iberá. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Costanera y casco histórico de la ciudad de Corrientes",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Costanera y casco histórico de la ciudad de Corrientes. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Parque Nacional Mburucuyá",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional Mburucuyá. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "entre-rios": [
    {
      name: "Parque Nacional El Palmar",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional El Palmar. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Termas de Federación",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Termas de Federación. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Palacio San José (Concepción del Uruguay)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Palacio San José. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "formosa": [
    {
      name: "Bañado La Estrella",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Bañado La Estrella. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Parque Nacional Río Pilcomayo",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional Río Pilcomayo. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Reserva de biosfera Laguna Oca (ciudad de Formosa)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Reserva de biosfera Laguna Oca. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "jujuy": [
    {
      name: "Purmamarca y Cerro de los Siete Colores",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Purmamarca y Cerro de los Siete Colores. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Quebrada de Humahuaca (Tilcara y Humahuaca)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Quebrada de Humahuaca. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Salinas Grandes y Cuesta de Lipán",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Salinas Grandes y Cuesta de Lipán. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "la-pampa": [
    {
      name: "Parque Nacional Lihué Calel",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional Lihué Calel. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Reserva Provincial Parque Luro",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Reserva Provincial Parque Luro. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Laguna de Utracán y área de Guatraché",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Laguna de Utracán y área de Guatraché. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "la-rioja": [
    {
      name: "Parque Nacional Talampaya",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional Talampaya. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Cuesta de Miranda",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Cuesta de Miranda. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Parque Nacional Laguna Brava",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional Laguna Brava. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "mendoza": [
    {
      name: "Parque Provincial Aconcagua",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Provincial Aconcagua. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Ruta del Vino en Luján de Cuyo y Valle de Uco",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Ruta del Vino en Luján de Cuyo y Valle de Uco. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Puente del Inca y Parque Provincial Cañón del Atuel",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Puente del Inca y Parque Provincial Cañón del Atuel. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "misiones": [
    {
      name: "Cataratas del Iguazú",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Cataratas del Iguazú. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Ruinas Jesuíticas de San Ignacio Miní",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Ruinas Jesuíticas de San Ignacio Miní. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Saltos del Moconá",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Saltos del Moconá. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "neuquen": [
    {
      name: "Villa La Angostura y Parque Nacional Nahuel Huapi",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Villa La Angostura y Parque Nacional Nahuel Huapi. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "San Martín de los Andes y Ruta de los Siete Lagos",
      image: "",
      description: "Lugar emblemático para conocer la provincia: San Martín de los Andes y Ruta de los Siete Lagos. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Volcán Lanín y Parque Nacional Lanín",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Volcán Lanín y Parque Nacional Lanín. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "rio-negro": [
    {
      name: "Bariloche y Circuito Chico",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Bariloche y Circuito Chico. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "El Bolsón y Lago Puelo (comarca andina)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: El Bolsón y Lago Puelo. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Las Grutas y costa del Golfo San Matías",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Las Grutas y costa del Golfo San Matías. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "salta": [
    {
      name: "Tren a las Nubes (San Antonio de los Cobres)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Tren a las Nubes. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Cafayate y Quebrada de las Conchas",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Cafayate y Quebrada de las Conchas. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Cachi y Parque Nacional Los Cardones",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Cachi y Parque Nacional Los Cardones. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "san-juan": [
    {
      name: "Parque Provincial Ischigualasto (Valle de la Luna)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Provincial Ischigualasto. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Dique Cuesta del Viento (Rodeo)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Dique Cuesta del Viento. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Parque Nacional El Leoncito (Barreal)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional El Leoncito. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "san-luis": [
    {
      name: "Parque Nacional Sierra de las Quijadas",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional Sierra de las Quijadas. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Potrero de los Funes",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Potrero de los Funes. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Merlo y Reserva Florofaunística de Rincón del Este",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Merlo y Reserva Florofaunística de Rincón del Este. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "santa-cruz": [
    {
      name: "Glaciar Perito Moreno (Parque Nacional Los Glaciares)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Glaciar Perito Moreno. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "El Chaltén y senderos del Fitz Roy",
      image: "",
      description: "Lugar emblemático para conocer la provincia: El Chaltén y senderos del Fitz Roy. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Cueva de las Manos (río Pinturas)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Cueva de las Manos. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "santa-fe": [
    {
      name: "Monumento Nacional a la Bandera (Rosario)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Monumento Nacional a la Bandera. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Parque de la Independencia (Rosario)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque de la Independencia. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Puente Colgante y Costanera de Santa Fe capital",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Puente Colgante y Costanera de Santa Fe capital. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "santiago-del-estero": [
    {
      name: "Termas de Río Hondo",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Termas de Río Hondo. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Dique Frontal de Río Hondo",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Dique Frontal de Río Hondo. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Parque Nacional Copo",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional Copo. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "tierra-del-fuego": [
    {
      name: "Parque Nacional Tierra del Fuego",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Parque Nacional Tierra del Fuego. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Canal Beagle y Faro Les Eclaireurs",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Canal Beagle y Faro Les Eclaireurs. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Tren del Fin del Mundo (Ushuaia)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Tren del Fin del Mundo. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "tucuman": [
    {
      name: "Casa Histórica de la Independencia (San Miguel de Tucumán)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Casa Histórica de la Independencia. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Tafí del Valle y Dique La Angostura",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Tafí del Valle y Dique La Angostura. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Ruinas de Quilmes",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Ruinas de Quilmes. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "ciudad-autonoma-buenos-aires": [
    {
      name: "Caminito y barrio de La Boca",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Caminito y barrio de La Boca. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Plaza de Mayo y Catedral Metropolitana",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Plaza de Mayo y Catedral Metropolitana. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Teatro Colón y Recoleta",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Teatro Colón y Recoleta. Ideal para recorrer con tiempo y cámara.",
    },
  ],
  "islas-malvinas": [
    {
      name: "Puerto Argentino/Stanley y su frente costero",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Puerto Argentino/Stanley y su frente costero. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Cementerio de Darwin",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Cementerio de Darwin. Ideal para recorrer con tiempo y cámara.",
    },
    {
      name: "Voluntario Hill / Monte Longdon (sitios históricos)",
      image: "",
      description: "Lugar emblemático para conocer la provincia: Voluntario Hill / Monte Longdon. Ideal para recorrer con tiempo y cámara.",
    },
  ],
};
