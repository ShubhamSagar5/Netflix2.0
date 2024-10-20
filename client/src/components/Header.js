
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { setUser } from '../redux/UserSlice';


const Header = () => {
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((Store)=>Store.app.user)
  
    const handleLogOut = async() => {
        try {
            
            const response = await axios.get("http://localhost:4000/api/v1/logout") 
            if(response.data.success){
                toast.success(response.data.message)
                dispatch(setUser(null))
                navigate("/")
            }

        } catch (error) {
            toast.success(error.response.data.message)
        }
    }

  
    return (
    <div className='bg-gradient-to-b from-black flex justify-between items-center w-full absolute z-30'>
        <div>
            <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="NetflixLogo" />
        </div>
        {
            user && <div className='flex items-center gap-12'>
            <div className='flex items-center gap-2 text-white bg-gray-800 px-3 py-1 rounded-sm'>
                <IoIosArrowDropdown size={25}/> 
                <p className='font-semibold '>{user?.fullName}</p>
            </div>
            <div className='gap-6 flex'>
                <button className='px-4 py-1 bg-red-700 text-white rounded-sm'>Search</button>
                <button className='px-4 mr-2 py-1 bg-red-700 text-white rounded-sm' onClick={handleLogOut} >Logout</button>
            </div>
        </div>
        }
        
    </div>
  )
}

export default Header