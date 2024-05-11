"use client";

import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);


 { /* useEffect(() => {
    const setProviders = async () => {
        const ress = await getProviders();

        setProviders(ress);
    }
    setProviders();
  }, []) */}
 
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src="assets/assets/images/bus_logo_new.svg"
            alt='Sweatlist logo' width={77}
            height={77} className='object-contain' />
        <p className='logo_text'>Sweatlist</p>
        </Link>
        {/* Desktop Nav*/}
        <div className='sm:flex hidden'>
            {isUserLoggedIn ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/create-prompt"
                    className='black_btn'>
                        Create Sweatlist
                    </Link>
                    <button type='button' onClick={signOut} 
                    className='outline_btn'>
                        Log out
                    </button>

                    <Link href="/profile">
                        <Image
                            src="/assets/assets/images/bus_logo_new.svg"
                            width={57}
                            height={57}
                            
                            alt='Profile'
                        />
                    </Link>
                </div>
            ): (
                <>
                    {/*{providers && 
                    Object.values(providers).map((provider)  => (
                        <button 
                        type='button'
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        className='black_btn'
                        >
                            Sign in
                        </button>
                    ))} */}
                </>
            )}
        </div>
        {/* Mobile Nav*/}
        <div className='sm:hidden flex relative'>
            {isUserLoggedIn ? (
                <div className='flex'>
                    <Image 
                    src="/assets/assets/images/sl_logo.svg"
                    width={37}
                    height={37}
                    className='rounded-full'
                    alt='profile'
                    onClick={() => setToggleDropdown((prev) => !prev)}
                    />

                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link href="/profile"
                            className='dropdown_link'
                            onClick={() => setToggleDropdown(false)}>
                                My Profile
                            </Link>
                            <Link href="/create-sweatlist"
                            className='dropdown_link'
                            onClick={() => setToggleDropdown(false)}>
                                Create Sweatlist
                            </Link>
                            <button
                            type='button'
                            onClick={() => {
                                setToggleDropdown(false);
                                signOut();
                            }}
                            className='mt-5 w-full black_btn'
                            >
                                Sign Out

                            </button>
                        </div>
                    )}
                </div>
            ): (
                <>
                    {/*{providers && 
                    Object.values(providers).map((provider)  => (
                        <button 
                        type='button'
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        className='black_btn'
                        >
                            Sign in
                        </button>
                    ))} */}
                </>
            )}

        </div>
    </nav>
  )
}

export default Nav