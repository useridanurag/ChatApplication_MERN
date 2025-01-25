import React from 'react'

const ChatUser = () => {
  return (
    <div className='flex justify-center hover:cursor-pointer hover:bg-slate-600'>
        <div className="avatar flex py-4 gap-x-5  ">
            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2 overflow-hidden ">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            <div>
                <p className='font-semibold'>Darling</p>
                <p className='text-xs'>Online...</p>
            </div>
        </div>

    </div>

  )
}

export default ChatUser