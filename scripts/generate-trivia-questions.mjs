/**
 * Genera preguntas de trivia desde el contenido por provincia.
 * Uso: node scripts/generate-trivia-questions.mjs
 */
import { writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

import { DEFAULT_ANIMALS_BY_PROVINCE } from "../src/data/provinces/content/animals.defaults.ts";
import { DEFAULT_PLANTS_BY_PROVINCE } from "../src/data/provinces/content/plants.defaults.ts";
import { DEFAULT_FOODS_BY_PROVINCE } from "../src/data/provinces/content/foods.defaults.ts";
import { DEFAULT_TOURISM_BY_PROVINCE } from "../src/data/provinces/content/tourism.defaults.ts";
import { DEFAULT_CURIOSITIES_BY_PROVINCE } from "../src/data/provinces/content/curiosities.defaults.ts";

const PROVINCE_NAMES = {
  "buenos-aires": "Buenos Aires",
  catamarca: "Catamarca",
  chaco: "Chaco",
  chubut: "Chubut",
  cordoba: "Córdoba",
  corrientes: "Corrientes",
  "entre-rios": "Entre Ríos",
  formosa: "Formosa",
  jujuy: "Jujuy",
  "la-pampa": "La Pampa",
  "la-rioja": "La Rioja",
  mendoza: "Mendoza",
  misiones: "Misiones",
  neuquen: "Neuquén",
  "rio-negro": "Río Negro",
  salta: "Salta",
  "san-juan": "San Juan",
  "san-luis": "San Luis",
  "santa-cruz": "Santa Cruz",
  "santa-fe": "Santa Fe",
  "santiago-del-estero": "Santiago del Estero",
  "tierra-del-fuego": "Tierra del Fuego",
  tucuman: "Tucumán",
  "ciudad-autonoma-buenos-aires": "Ciudad Autónoma de Buenos Aires",
  "islas-malvinas": "Islas Malvinas",
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(pool, correct, count = 3) {
  const others = shuffle(pool.filter((x) => x !== correct));
  return others.slice(0, count);
}

function withChoices(correct, distractors) {
  const all = shuffle([correct, ...distractors.slice(0, 3)]);
  const correctIndex = all.indexOf(correct);
  if (correctIndex < 0 || all.length < 4) return null;
  return { choices: all, correctIndex };
}

function id(parts) {
  return createHash("md5").update(parts.join("|")).digest("hex").slice(0, 12);
}

const allNames = Object.values(PROVINCE_NAMES);
const questions = [];

for (const [slug, name] of Object.entries(PROVINCE_NAMES)) {
  for (const animal of DEFAULT_ANIMALS_BY_PROVINCE[slug] ?? []) {
    const built = withChoices(name, pickDistractors(allNames, name));
    if (!built) continue;
    questions.push({
      id: id(["fauna-prov", slug, animal.name]),
      provinceSlug: slug,
      category: "fauna",
      prompt: `¿En qué provincia vive el ${animal.name}?`,
      choices: built.choices,
      correctIndex: built.correctIndex,
      explanation: `El ${animal.name} es parte de la fauna de ${name}.`,
    });
  }

  for (const plant of DEFAULT_PLANTS_BY_PROVINCE[slug] ?? []) {
    const built = withChoices(name, pickDistractors(allNames, name));
    if (!built) continue;
    questions.push({
      id: id(["flora-prov", slug, plant.name]),
      provinceSlug: slug,
      category: "flora",
      prompt: `¿En qué provincia crece el ${plant.name}?`,
      choices: built.choices,
      correctIndex: built.correctIndex,
      explanation: `El ${plant.name} es flora representativa de ${name}.`,
    });
  }

  const localAnimals = (DEFAULT_ANIMALS_BY_PROVINCE[slug] ?? []).map((a) => a.name);
  if (localAnimals.length >= 4) {
    for (const animal of localAnimals) {
      const built = withChoices(animal, pickDistractors(localAnimals, animal));
      if (!built) continue;
      questions.push({
        id: id(["fauna-which", slug, animal]),
        provinceSlug: slug,
        category: "fauna",
        prompt: `¿Cuál de estos animales es de ${name}?`,
        choices: built.choices,
        correctIndex: built.correctIndex,
      });
    }
  }

  for (const food of DEFAULT_FOODS_BY_PROVINCE[slug] ?? []) {
    const built = withChoices(name, pickDistractors(allNames, name));
    if (!built) continue;
    questions.push({
      id: id(["food-prov", slug, food.name]),
      provinceSlug: slug,
      category: "food",
      prompt: `¿En qué provincia es típico el plato "${food.name}"?`,
      choices: built.choices,
      correctIndex: built.correctIndex,
    });
  }

  for (const spot of DEFAULT_TOURISM_BY_PROVINCE[slug] ?? []) {
    const built = withChoices(name, pickDistractors(allNames, name));
    if (!built) continue;
    questions.push({
      id: id(["tourism-prov", slug, spot.name]),
      provinceSlug: slug,
      category: "tourism",
      prompt: `¿En qué provincia está ${spot.name}?`,
      choices: built.choices,
      correctIndex: built.correctIndex,
    });
  }

  for (const fact of DEFAULT_CURIOSITIES_BY_PROVINCE[slug] ?? []) {
    const short = fact.name.length > 60 ? `${fact.name.slice(0, 57)}…` : fact.name;
    const built = withChoices(name, pickDistractors(allNames, name));
    if (!built) continue;
    questions.push({
      id: id(["history-prov", slug, fact.name]),
      provinceSlug: slug,
      category: "history",
      prompt: `¿A qué provincia corresponde este hecho histórico: "${short}"?`,
      choices: built.choices,
      correctIndex: built.correctIndex,
    });
  }
}

const unique = new Map();
for (const q of questions) unique.set(q.id, q);
const finalList = [...unique.values()];

const out = `/** Generado por scripts/generate-trivia-questions.mjs — no editar a mano. */
import type { TriviaQuestion } from "@/lib/trivia/types";

export const TRIVIA_QUESTIONS: TriviaQuestion[] = ${JSON.stringify(finalList, null, 2)};
`;

writeFileSync("src/data/trivia/trivia-questions.generated.ts", out, "utf8");
console.log(`OK: ${finalList.length} preguntas → src/data/trivia/trivia-questions.generated.ts`);
