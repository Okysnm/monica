import { createContext, useState } from "react";

export const UbicacionesContext = createContext({
  locations: [],
  setLocations: () => {}
})

export const UbicacionesProvider = ({ children }) => {
  const [ubicaciones, setUbicaciones] = useState([]);
  const value = { ubicaciones, setUbicaciones };

  return <UbicacionesContext.Provider value={value}>{children}</UbicacionesContext.Provider>;
}