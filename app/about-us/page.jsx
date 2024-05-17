import React from 'react'
import Feed from '@components/Feed'

const About = () => {
  return (
    <section className='w-full flex-center flex-col font-general-sans'>
      <h2 className='text-white head_text text-left'>DISCOVER <span className='text-sky-500'>SWEAT</span>LIST</h2>
      <p className='text-white mt-10 text-2xl'>Create and discover amazing workout routines tailored for your body's needs!</p>
      <Feed />
    </section>
  )
}

export default About