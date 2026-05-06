"use client";

import { type RefObject, useCallback, useEffect, useState } from "react";

/**
 * Envuelve un elemento con la API Fullscreen del navegador (donde exista).
 * En muchos móviles no hay soporte completo; la ruta /mapa sigue siendo la mejor opción.
 */
export function useFullscreen(containerRef: RefObject<HTMLElement | null>) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onChange = () => {
      setActive(document.fullscreenElement === containerRef.current);
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, [containerRef]);

  const toggle = useCallback(async () => {
    const el = containerRef.current;
    if (!el) return;
    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      /* noop: permisos / iOS */
    }
  }, [containerRef]);

  const supported =
    typeof document !== "undefined" &&
    typeof document.documentElement.requestFullscreen === "function";

  return { active, toggle, supported };
}
