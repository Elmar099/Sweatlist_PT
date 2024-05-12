import Link from 'next/link';

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span></h1>
        <p className='desc text-left max-w-md'>
          {type} and share incredible workout routines with the world, 
          inspiring others to reach new heights of health and strength. 
          Join our vibrant community and ignite the fitness passion within!  
        </p>

        <form
        onSubmit={handleSubmit}
        className='mt-10  w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-500'>
              Your Personal Routine
            </span>
            <textarea 
              value={post.prompt}
              onChange={(e) => setPost({ ...post,
                prompt: e.target.value })}
                placeholder='Write your routine here...'
                required
                className='form_textarea'             
            />
          </label>
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-500'>
              Group {` `}
              <span className='font-normal'>(#arms, #legs, #shoulders)</span>
            </span>
            <input 
              value={post.tag}
              onChange={(e) => setPost({ ...post,
                tag: e.target.value })}
                placeholder='#tag'
                required
                className='form_input'             
            />
          </label>
        {/* add hover effects to this button*/}
                <div className='flex-end mx-3 mb-5 gap-4'>
                  <Link href='/' className='text-white text-sm py-3 px-7 rounded-full bg-blue-600'>Cancel</Link>
                
                <button 
                type='submit'
                disabled={submitting}
                className='px-7 py-3 text-sm bg-primary-orange rounded-full text-white'>
                  {submitting ? `${type}...` : type}
                </button>
                </div>

        </form>

    </section>
  )
}

export default Form