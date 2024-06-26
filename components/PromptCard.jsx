"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  return (
    <div className='prompt_card hover:scale-105 transition-transform duration-300 ease-in-out'>
      <div className='flex justify-between items-start gap-5'>
        <div
          className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
          onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />

          <div className='flex flex-col'>
            <h3 className='font-chillax font-semibold text-slate-600'>
              {post.creator.username}
            </h3>
            <p className='font-inter text-sm text-gray-600'>
              {post.creator.email}
            </p>
          </div>
        </div>
      </div>

      <p className='my-4 font-chillax text-sm text-black'>{post.prompt}</p>
      <p
        className='font-inter text-sm text-black cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-200 pt-3'>
          <p
            className='font-inter text-sm text-white bg-black  px-5 py-2 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm text-white bg-black px-5 py-2 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;