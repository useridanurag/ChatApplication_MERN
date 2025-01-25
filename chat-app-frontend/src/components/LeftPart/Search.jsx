import React from 'react'
import { GoSearch } from "react-icons/go";

const Search = () => {
  return <>
  
<form className="flex items-center max-w-sm mx-auto">   
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full flex mt-2"> 
        <input type="text" id="simple-search" className="border text-white text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400  focus:border-white outline-none" placeholder="Search" required />

        <button className='hover:bg-gray-600 m-2 p-2 rounded-full border-2 border-gray-600'><GoSearch className='text-xl'/></button>


    </div>
    
</form>

  </>
}

export default Search