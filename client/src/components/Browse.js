import React, { useEffect } from 'react'
import Header from './Header'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Browse = () => {
 
  const user  = useSelector((Store) => Store.app.user)

  const navigate = useNavigate()

  useEffect(()=>{
    if(!user){
      navigate("/")
    }
  })

 
  return (
    <div>
    <Header/>
dddd
    </div>
  )
}

export default Browse