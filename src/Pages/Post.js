import React, { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import { format } from 'date-fns';
import { dataContext } from '../Context/DataContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

function Post() {

  let navigate = useNavigate()

  let [user,setUser] = useState({})
  
  let {users, setUsers} = useContext(dataContext)

  function handleChange(e){
    let value = e.target.value;
    let key = e.target.id;
    let id = users.length? users.length+1 : 1
    setUser({...user,id,[key]:value})
  }

  function handleSubmit(event){
     event.preventDefault()
    if(user.title && user.post){
    let date = format(new Date(), 'MMMM dd, yyyy pp');
    let newUser = {...user,time:date}
    setUsers([...users,newUser])
    setUser({})
    navigate("/")
    }
  }

  
  return (
    <div style={{display:"flex",flexDirection:"column",height:"100vh"}}>
      <Navbar/>

      <div className='postbody' style={{flexGrow:1}}>

      <h1>New Post</h1>

      <form onSubmit={handleSubmit}>

        <div>
        <label htmlFor='title'>Title:</label><br/>
        <input id='title' type='text' onChange={handleChange}/>
        </div>

        <div style={{marginTop:'10px'}}>
        <label htmlFor='post'>Post:</label><br/>
        <input id='post' type='text' onChange={handleChange}/>
        </div>
        <button type='submit' className='submit'>Submit</button>
        
      </form>
      </div>
     
       <Footer/>
    </div>
  )
}

export default Post