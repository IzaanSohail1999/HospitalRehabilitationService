import React, { createContext } from "react";

export const HospitalContext = createContext();

export default function HospitalProvider({ children }) {
    
    const [Hash, setHash] = useState('')

    const HelloMessage = async() => {
        console.log("Hello Message");
    } 

    return(
        <HospitalContext.Provider
        value={{
            HelloMessage,
            setHash, 
            Hash
        }}>
            {children}
        </HospitalContext.Provider>
    )
}