import React from 'react'

const MiniAbout = () => {
  const dummyData=[
    {
      number: 100,
      what:'Users'
    },
    {
      number:350,
      what:'Posts Shared'
    },
    {
      number:4.7,
      what:'Ratings'
    }
  ]
  return (
    <div className='bg-[#1E2B4C] grid grid-cols-3 font-bold items-center  w-full h-60'> 
            {
              dummyData.map((data, index)=>(
                 <div key={index} className='w-full h-full flex flex-col items-center justify-center text-white text-5xl '>
                   <span>
                    {data.number===100 || data.number=== 350?data.number + '+': data.number===4.7?data.number+'⭐': data.number}
                  </span>
                  <span className='text-4xl'>
                    {data.what}
                  </span>
                  </div>
              ))
            }
    </div>
  )
}

export default MiniAbout
