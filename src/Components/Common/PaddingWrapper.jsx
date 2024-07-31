import React from 'react'

const PaddingWrapper = ({ children }) => {
  return (
    <div className='w-full flex justify-center'>
          <div className='w-[90%] 2xl:w-[80%] 3xl:w-[70%]'>
              {children}
          </div>
    </div>
  )
}

export default PaddingWrapper
