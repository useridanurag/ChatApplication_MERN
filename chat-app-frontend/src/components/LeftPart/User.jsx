import React from 'react'

const User = () => {
    return (
        <div className="avatar flex p-4 gap-x-5 hover:cursor-pointer hover:bg-slate-600 ">
            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2 overflow-hidden ">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            <div>
                <p className='font-semibold'>Anurag</p>
                <p className='text-xs'>forconnectanurag@gmail.com</p>
            </div>
        </div>
    )
}

export default User