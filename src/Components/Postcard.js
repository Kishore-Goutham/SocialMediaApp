import React from 'react'
import { useNavigate } from 'react-router-dom'

function Postcard(props) {

  let navigate = useNavigate();
  return (
    <div className='postcard' onClick={()=> navigate(`/post/${props.id}`)} >
      <div>
        <h2>{props.title}</h2>
        <p style={{marginTop:"4px"}}>{props.time}</p>
        <h3 style={{fontSize:"22px",fontWeight:"500",marginTop:"7px"}}>{props.post}</h3>
      </div>
    </div>
  )
}

export default Postcard