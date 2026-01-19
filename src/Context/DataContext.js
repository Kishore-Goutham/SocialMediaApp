import React, { createContext, useState } from 'react'


export let dataContext = createContext()

function DataContext({children}) {

    let [users,setUsers] = useState([])
    let[fusers,setFusers]= useState([])

  return (
   <div>
    <dataContext.Provider value={{users,setUsers,fusers,setFusers}}>
       {children}
    </dataContext.Provider>
   </div>
  )
}

export default DataContext