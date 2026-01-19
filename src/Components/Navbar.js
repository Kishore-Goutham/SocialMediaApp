import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { dataContext } from '../Context/DataContext';
import { useEffect } from 'react';

function Navbar() {

  let{users,setFusers} = useContext(dataContext)
 
  let [search, setSearch] = useState("");
  
  useEffect(()=>{
     let finalusers = users.filter((item)=>{
       return  item.title.toLowerCase().includes(search)
   })
      setFusers(finalusers)
  },[search,users,setFusers])

  // setFusers useEffect dependency array la ethuku inga poten nu not sure and it serves no use tho.
 //  code works well already, terminal showed warning so add it thats it.

  
  return (
    <div className='nav'>
    <div className='nav__title'>
        <h1>Social Media App</h1>
    </div>
    <div className='nav__elements'>

        <input placeholder='Search with title...' onChange={(e)=> setSearch(e.target.value.toLowerCase())} ></input>
        <ul>
            <li><Link className='link' to={"/"}>Home</Link></li>
            <li><Link className='link' to={"/post"}>Post</Link></li>
            <li><Link className='link' to={"/about"}>About</Link></li>
        </ul>

    </div>
     
    </div>
  )
}

export default Navbar