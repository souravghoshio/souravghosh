"use client";

import { useCallback, useEffect, useRef } from "react";

export function useClickSound() {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  const playClick = useCallback(() => {
    if (typeof window === "undefined") return;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }

    const ctx = audioContextRef.current;

    // Some browsers suspend AudioContext until user interaction.
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(900, ctx.currentTime);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      ctx.currentTime + 0.05
    );

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.05);
  }, []);

  return { playClick };
}