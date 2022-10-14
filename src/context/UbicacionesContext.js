import { createContext, useState } from "react";

export const UbicacionesContext = createContext({
  locations: [],
  setLocations: () => {}
})

export const UbicacionesProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const value = { locations, setLocations };

  return <UbicacionesContext.Provider value={value}>{children}</UbicacionesContext.Provider>;
}