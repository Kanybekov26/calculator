import { createContext, useState } from "react";


export const  culculatorContext = createContext()


 export const ContextProvaider = ({children}) => {
  const [background,setBackground] = useState("white")

   const color = {
    background,
    setBackground,
   }
    return <culculatorContext.Provider value={color}>{children}</culculatorContext.Provider>
}