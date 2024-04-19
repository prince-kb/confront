import React from 'react'

const Home = () => {
  let date = new Date();  
  
  let d = date.toLocaleTimeString("en-us", {  
    weekday: "long", year: "numeric", month: "short", 
    day: "numeric", hour: "2-digit", minute: "2-digit"  
}).split(','); 

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meetings</h2>
          <div className="flex flex-col gap-2">
            <h1 className='text-4xl font-extrabold lg:text-7xl '>{d[3]}</h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{d[0]},{d[1]},{d[2]}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
