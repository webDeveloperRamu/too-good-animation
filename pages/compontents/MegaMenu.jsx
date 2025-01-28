import Link from 'next/link'
import React from 'react'

const MegaMenu = ({ children }) => {
  return (
    <div className='absolute top-[100%] pt-3 left-0 w-full min-h-screen invisible opacity-0 group-hover:visible group-hover:opacity-100 z-50 duration-500'>
      <div className="grid grid-cols-5 bg-white p-5">
        {children?.map((_, index) => (
          <Link href={_.href} key={index} className='font-semibold hover:text-[#FF0000] hover:underline hover:underline-offset-[6px] hover:decoration-4 hover:decoration-[#FF0000] space-y-3'>
            {_.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MegaMenu

