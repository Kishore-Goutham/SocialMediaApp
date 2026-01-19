import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import { dataContext } from '../Context/DataContext'
import Postcard from '../Components/Postcard'
import Footer from '../Components/Footer'


function Home() {
   
  let{fusers} = useContext(dataContext);

  let allUsers = fusers.map((user,key)=>{
    return <Postcard key={key} title={user.title} id={user.id} post={user.post.slice(0,10)+"...."} time={user.time}/>
  })
  
  return (
    <div style={{display:"flex",flexDirection:"column",height:"100vh"}}>
      <Navbar/>
       {fusers.length? <div style={{flexGrow:1}} > {allUsers} </div> :<h1 style={{flexGrow:1,marginTop:"50px",textAlign:"center"}}>list is Empty</h1>}  
       <Footer/> 
    </div>
  )
}

export default Home