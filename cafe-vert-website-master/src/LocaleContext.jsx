import React from "react";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";
export const locales = { fr, ar };

export const LocaleContext = React.createContext([locales , ()=>{}]);
