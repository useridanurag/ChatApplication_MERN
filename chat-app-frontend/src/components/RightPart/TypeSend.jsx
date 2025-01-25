import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";

const TypeSend = () => {
    return <>
        <form className="flex items-center w-[70%] mx-auto">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full flex mt-2">
                <input type="text" id="simple-search" className="border text-white text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700 border-white placeholder-gray-400  focus:border-white outline-none" placeholder="Search" required />

                <button className='hover:bg-gray-600 mx-2 px-2 ml-4 rounded-lg border py-1'><RiSendPlaneFill className='text-2xl' /></button>


            </div>

        </form>
    </>
}

export default TypeSend