"use client";

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form'

const CreateRoutine = () => {
    const router = useRouter();
    const { data: session} = useSession()
    const [submitting, setSubmitting] = useState(false);
    //this is the prompt stuff change this later to full routine like back 
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });
  
const createRoutine = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    //this is the post request need to change this to add more options later
    try {
        const response = await fetch('/api/prompt/new', 
            {
                //CHANGE LATER
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })
            if (response.ok) {
                router.push("/");
            }
        }catch(error){
        console.log('Error: ', error);
        } finally {
            setSubmitting(false);
        }
}

return (
    <Form 
    type="Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createRoutine}
    />
  )
}

export default CreateRoutine