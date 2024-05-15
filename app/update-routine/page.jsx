"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Form from '@components/Form'

//Change this page later
const EditRoutine = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id')
    const [submitting, setSubmitting] = useState(false);
    //this is the prompt stuff change this later to full routine like back 
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`)
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
            })
        }
        if(prompt) getPromptDetails();
    }, [promptId])
  
const updateRoutine = async (e) => {
    e.preventDefault();
    setSubmitting(true);


    if(!promptId) return alert('Routine id not found')
    //this is the post request need to change this to add more options later
    try {
        const response = await fetch(`/api/prompt/${promptId}`, 
            {
                //CHANGE LATER IMPORTANTTT
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
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
    type="Edit"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={updateRoutine}
    />
  )
}

export default EditRoutine