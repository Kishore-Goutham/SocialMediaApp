import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dataContext } from '../Context/DataContext';
import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';



function Editpost() {
    

   let navigate = useNavigate();

     let data = useParams()
    let {id} = data; 
    

    let{users,setUsers} = useContext(dataContext)
    let[editUser,setEdituser] = useState({title:"",post:""})

   
    // or data.id we just destructured here it comes as objects like {id:1}

    useEffect(()=>{
       let user = users.filter((item)=>{
        return item.id==id;
       })
       setEdituser({...user[0]})
    },[])


    function handleChange(e){
       let value= e.target.value;
       let key = e.target.id;
       setEdituser({...editUser,[key]:value})
    }

    function handleSave(id){
       let editeduser = users.map((item)=>{
         if(item.id===id){
          return editUser
         }else{
         return item
         }
       })
       setUsers(editeduser);
       navigate("/")
    }
    
  return (
    <div style={{display:"flex",flexDirection:"column",height:"100vh"}}>
        <Navbar/>
        <div className="body" style={{flexGrow:1}}>
        <div style={{marginTop:"50px",marginLeft:"50px"}}>
        <label htmlFor='title'>Title:</label><br/>
        <input id='title' value={editUser.title} type='text' onChange={handleChange}/>
        </div>

        <div style={{marginTop:'10px',marginLeft:"50px"}}>
        <label htmlFor='post'>Post:</label><br/>
        <input id='post' value={editUser.post} type='text' onChange={handleChange}/>
        </div>
        <button onClick={()=>handleSave(id)}  className='save'>Save</button>
        </div>
        <Footer/>
    </div>
  )
}

export default Editpost