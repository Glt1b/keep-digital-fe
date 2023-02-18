import { createContext, useState } from "react";

export const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
  const [details, setDetails] = useState({
    "active_sections": [],
    "text_about": "",
    "image_about": "",
    "gallery": [],
});


  return (
    <DetailsContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};
