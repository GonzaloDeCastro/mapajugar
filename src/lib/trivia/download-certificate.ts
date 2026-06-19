import { withBasePath } from "@/lib/routing/base-path";
import type { TriviaReward } from "@/data/trivia/reward-manifest";
import type { TriviaPlayer } from "@/lib/trivia/types";

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`No se pudo cargar ${src}`));
    img.src = src;
  });
}

export async function downloadTriviaCertificate(
  player: TriviaPlayer,
  reward: TriviaReward,
): Promise<void> {
  const width = 900;
  const height = 1200;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#e8f4fc");
  gradient.addColorStop(1, "#fff8e7");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#156f94";
  ctx.font = "bold 52px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("¡Ganaste!", width / 2, 100);

  ctx.fillStyle = "#1a2e3b";
  ctx.font = "bold 40px sans-serif";
  ctx.fillText(player.name, width / 2, 170);

  ctx.font = "28px sans-serif";
  ctx.fillStyle = "#4a6572";
  ctx.fillText(`${player.score} punto${player.score === 1 ? "" : "s"} en Mapa Jugar`, width / 2, 220);

  try {
    const img = await loadImage(withBasePath(reward.svgPath));
    const max = 420;
    const scale = Math.min(max / img.width, max / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    ctx.drawImage(img, (width - w) / 2, 280, w, h);
  } catch {
    ctx.font = "80px serif";
    ctx.fillText("🏆", width / 2, 500);
  }

  ctx.fillStyle = "#156f94";
  ctx.font = "bold 32px sans-serif";
  ctx.fillText(reward.label, width / 2, 780);

  ctx.fillStyle = "#4a6572";
  ctx.font = "22px sans-serif";
  ctx.fillText("Explorá Argentina con Mapa Jugar", width / 2, 860);

  ctx.strokeStyle = "#f9a825";
  ctx.lineWidth = 12;
  ctx.strokeRect(24, 24, width - 48, height - 48);

  const link = document.createElement("a");
  link.download = `mapa-jugar-${player.name.replace(/\s+/g, "-").toLowerCase()}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}
