import { ReactNode, createContext, useContext } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    
}

const ShoppingCartContext = createContext({})


export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    return(
        <ShoppingCartContext.Provider value={{children}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export function ShoppingCart(){
    return(
        useContext(ShoppingCartContext)
    )
}

