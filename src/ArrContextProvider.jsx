
import React, { createContext, useState } from 'react'


const ArrContext = createContext()
const ArrContextProvider = (data) => {
    const [fav, setfav] = useState([])
    const list = [{
        id: 1,
        name: "Janani",
        Favourite: false
    },
    {
        id: 2,
        name: "Srimathi",
        Favourite: false
    },
    {
        id: 3,
        name: "Mohan",
        Favourite: false

    },
    {
        id: 4,
        name: "Hemavardhan",
        Favourite: false

    },
    {
        id: 5,
        name: "Gobinath",
        Favourite: false

    },
    {
        id: 6,
        name: "Jinumithran",
        Favourite: false

    }]

    return (
        <div>
            <ArrContext.Provider value={{ list,fav, setfav }}>
                {data.children}
            </ArrContext.Provider>

        </div>
    )
}

export default ArrContextProvider
export { ArrContext }