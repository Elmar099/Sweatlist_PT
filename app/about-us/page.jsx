import React from 'react'
import Feed from '@components/Feed'

const About = () => {
  return (
    <section className='w-full flex-center flex-col font-general-sans'>
<h1 className="head_text text-center ">
            Web Personal Trainer
            <br className="max-md:hidden" />
            <span className="text-sky-400 text-center">Discover & Share Workouts </span>
        </h1>      
        <p className='text-white mt-10 text-2xl'>Create and discover amazing workout routines tailored for your body's needs!</p>
      <Feed />
    </section>
  )
}

export default About