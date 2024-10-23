import React from 'react'

const SearchBar = () => {
  return (
    <div className=' w-screen flex justify-center pt-52'>
        <div className='shadow-2xl p-3 w-[60rem]  flex justify-center'>

        <input className='w-full px-2 text-lg  border border-black rounded-l-lg focus:outline-none' type="text" name="" id="" placeholder='Search Movie  .  .  .  .  .  .  .' /> 
        <button className='bg-red-500 px-5 py-2 rounded-r-lg'>Search</button>
        </div>

    </div>
  )
}

export default SearchBar