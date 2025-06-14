
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

interface ElfsightFormContextType {
  open: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const ElfsightFormContext = createContext<ElfsightFormContextType>({
  open: false,
  openForm: () => {},
  closeForm: () => {},
});

export function useElfsightForm() {
  return useContext(ElfsightFormContext);
}

const ELFSIGHT_APP_ID = "4ae4b665-d18d-434d-bf98-3c9f9bc376b1";

export const ElfsightFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  // Ensure the Elfsight script is loaded only ONCE per app
  useEffect(() => {
    if (typeof window !== "undefined" && !document.getElementById("elfsight-script")) {
      const script = document.createElement("script");
      script.id = "elfsight-script";
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openForm = useCallback(() => setOpen(true), []);
  const closeForm = useCallback(() => setOpen(false), []);

  return (
    <ElfsightFormContext.Provider value={{ open, openForm, closeForm }}>
      {children}
    </ElfsightFormContext.Provider>
  );
};
