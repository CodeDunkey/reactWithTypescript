import { createContext, useContext, useState } from "react";

type Theme = "light"|"dark"|"system"; //A union

const ThemeContext = createContext<Theme>("system");

const useGetTheme = ()=> useContext(ThemeContext);



let list: [number, string, boolean] = [1, "b", true] // A tuple
console.log("list: ", list)


export default function ContentFunction (){
    const [theme, setTheme] = useState<Theme>('light')

    return(
        <ThemeContext.Provider value={theme}>
            <MyComponent />
        </ThemeContext.Provider>
    )

    function MyComponent(){
        const theme = useGetTheme();

        return(
            <div>
                <p>Current theme: {theme}</p>
            </div>
        )
    }
}