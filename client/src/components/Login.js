import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Loader } from '../utils/Loader'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { setLoading, setUser } from '../redux/UserSlice'
import Cookies from 'js-cookie'

const Login = () => {
  
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const isLoading = useSelector((store)=>store.app.loading)

  const [isLogin,setIsLogin] = useState(false)

  const [fullName , setFullName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')



const handleIsLogin = () => {
  setIsLogin(!isLogin)
}

const handelSubmit = async() => {
  
  dispatch(setLoading(true))

  const loginData = {
    email,
    password
  }

  const signupData = {
    fullName,
    email,
    password
  }

  if(isLogin){
    try {
      const response = await axios.post("http://localhost:4000/api/v1/login",loginData,{
        headers:{
        'Content-Type':'application/json',
      },
      withCredentials:true
      }) 

      if(response?.data?.success){
        toast.success(response?.data?.message)
     
    }

      

      dispatch(setUser(response.data.user))
      setFullName("")
      setEmail("")
      setPassword("")
      navigate("/browse")

      localStorage.setItem('userId',response?.data?.user?.fullName)

    } catch (error) {
      toast.error(error.response.data.message)
      setLoading(false)

    }finally{
      dispatch(setLoading(false))
    }
  }else{
    try {
      const response = await axios.post("http://localhost:4000/api/v1/register",signupData) 
      if(response.data.success){
        toast.success(response.data.message)
      } 
      setFullName("")
      setEmail("")
      setPassword("")
      setLoading(false)
      setIsLogin(true)

      
    } catch (error) {
      
      toast.error(error.response.data.message)

    }finally{
      dispatch(setLoading(false))
    }
  }
}

useEffect(()=>{
  if(localStorage.getItem('userId')){
    navigate("/browse")
  }
},[])

  return (
    <>
      <Header/>    
      <img className='h-[100vh] w-[100vw] '  src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
  
      <div className='-mt-[33.5rem]'>  
  
        
   
      <div className='flex justify-center  '>

          <div className='flex flex-col  w-3/12 text-center bg-black p-8 opacity-90 rounded-md text-white gap-6'>
              <p className='text-2xl font-semibold'>{isLogin ? "Login" : "Signup"} </p>
           {!isLogin  && <input type="text" className='bg-black p-2 border border-white rounded-sm' placeholder='Enter Full Name' value={fullName} onChange={(e)=>setFullName(e.target.value)} />} 
            <input type="text" className='bg-black p-2 border border-white rounded-sm' placeholder='Enter Email Id' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" className='bg-black p-2 border border-white rounded-sm'  placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>


                <button onClick={handelSubmit} className='bg-red-600 mt-4  text-center rounded-sm p-2'>{isLoading ? <p className='text-center ml-32'> <Loader/> </p> : <p>{isLogin ? "Login" : "Signup"}</p>}</button>
                <p>{isLogin ? "You Do Not Have an Account ?" : "New To Netflix ?"}  <span onClick={handleIsLogin} className='cursor-pointer text-blue-500 underline ml-3'>{isLogin ? "SignUp" : "Login"}</span></p>
           

          </div>
      </div>    

    </div> 
    </>

  )
}

export default Login