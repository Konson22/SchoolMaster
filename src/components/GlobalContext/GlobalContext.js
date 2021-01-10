import React, { useState, useEffect, createContext } from 'react'

export const GlobalContext = createContext()

export const DataProvider = props => {
    const [students, setStudents] = useState({
        status:false,
        data:null,
        error:false
    })
    const [stuffs, setStuffs] = useState({
        status:false,
        data:null,
        error:false
    })
    const [expernse, setExpernse] = useState({
        status:false,
        data:null,
        error:false
    })
  
    useEffect(()=> {
        fetch('/students').then(res => res.json()).then(data => setStudents({
            status:true,
            data:data,
            error:false
        }))
    }, [])
    useEffect(()=> {
        fetch('/stuffs').then(res => res.json()).then(data => setStuffs({
            status:true,
            data:data,
            error:false
        }))
    }, [])
    useEffect(()=> {
        fetch('/expernses').then(res => res.json()).then(data => setExpernse({
            status:true,
            data:data,
            error:false
        }))
    }, [])

    const rawData = {students, stuffs, expernse};


    return (
        <GlobalContext.Provider value={rawData}>
            {props.children}
        </GlobalContext.Provider>
    )
}
