import React,{createContext,useContext} from "react";

interface LoggedinContextProps{
    children: React.ReactNode
}

interface LoggedinContextValue{
    value:Boolean,
    setuser:(status:Boolean)=>void
}

const LoggedinContext = createContext<LoggedinContextValue | null>(null);

export const useLoggedinStatus = () => {
    return useContext(LoggedinContext);
}

export const LoggedinProvider: React.FC<LoggedinContextProps> = (props) => {
    const [user,setuser] = React.useState<Boolean>(false);
    return(
        <LoggedinContext.Provider value = {{
            value: user,
            setuser,
        }}>
            {props.children}
        </LoggedinContext.Provider>
    )
}