import { useState, useEffect, useCallback } from "react";

export function useMode() {
  const [mode, setModeState] = useState(() => {
    if (typeof window === "undefined") return "easy";
    const params = new URLSearchParams(window.location.search);
    return params.get("mode") === "tech" ? "tech" : "easy";
  });

  useEffect(() => {
    const url = new URL(window.location);
    if (mode === "tech") {
      url.searchParams.set("mode", "tech");
    } else {
      url.searchParams.delete("mode");
    }
    window.history.replaceState({}, "", url);
  }, [mode]);

  const setMode = useCallback((newMode) => {
    setModeState(newMode);
  }, []);

  const isTech = mode === "tech";

  return { mode, setMode, isTech };
}
