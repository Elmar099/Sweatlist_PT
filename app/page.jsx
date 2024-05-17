import Feed from '@components/Feed'


const Home = () => {
  return (
    <section className="w-full flex-center flex-col font-chillax mt-20">
        <h1 className="head_text text-center ">
            Web Personal Trainer
            <br className="max-md:hidden" />
            <span className="text-sky-400 text-center">Discover & Share Workouts </span>
        </h1>
        <p className="desc text-center">Join our vibrant fitness community and discover a world of motivation, 
            support, and collaboration as you create and share workout routines 
            to inspire others on their fitness journey
        </p>
      
    </section>
  )
}

export default Home