// get , patch , delete
import { connectDB } from '@utils/database';
import Prompt from '@models/routine'

//GET 
export const GET = async (request, { params }) => {
    try {
        await connectDB();
        
        const prompt = await Prompt.findById(params.id).populate('creator');
        if(!prompt) return new Response("Routine not found", { status: 404 })
        return new Response(JSON.stringify(prompt), {
            status: 200})
    }catch (error){
        return new Response('Failed to get routines', {status:500})
    } 
}

//PATCH
export const PATCH = async (request, { params }) => {
    //CHANGE THIS LATER 
    const {prompt, tag} = await request.json();

    try {
        await connectDB();
        const exisitingPrompt = await Prompt.findById(params.id);

        if (!exisitingPrompt) return new Response("Routine not found", { status: 404 });
        exisitingPrompt.prompt = prompt;
        exisitingPrompt.tag = tag;

        await exisitingPrompt.save();

        return new Response(JSON.stringify(exisitingPrompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to update routine", { status: 500 })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectDB();

        await Prompt.findByIdAndDelete(params.id);
        return new Response("Routine deleted!", { status: 200 })
    } catch (error) {
        return new Response("Failed to delete routine!", { status: 500 })
    }
}