import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import Navbar from '../Components/Navbar';

function Postid() {
  
  let navigate = useNavigate()

  let {users ,setUsers} = useContext(dataContext)
    let {id:i} = useParams();
    let id = Number(i)
    

    let editUser = users.filter((user)=>{
      return user.id===id
    })

    function handleDelete(id){
       let deleteuser = users.filter((user)=>{
        return user.id!==id
       })
       setUsers(deleteuser)
       navigate("/")
    }
   
  return (
    <div>
      <Navbar/>
     {editUser.map((item ,key)=>{
      return <div className='postid' key={key} >
      <div>
        <h2>{item.title}</h2>
        <p style={{marginTop:"4px"}}>{item.time}</p>
        <h3 style={{fontSize:"22px",fontWeight:"500",marginTop:"7px"}}>{item.post}</h3>
      </div>
      <div className='postcard__btns'>
        <button className='edit' onClick={()=> navigate(`/editpost/${id}`)}>Edit</button>
        <button className='del' onClick={()=>handleDelete(id)}>Delete</button>
      </div>
    </div>
     })}
      </div>
  )
}

export default Postid