"use client";

import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);


  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders();
  }, []);
 
  return (
    <nav className='flex-between w-10/12 mb-16 mt-5 pt-3'>
        <div className='flex gap-2 flex-center'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src="assets/assets/images/bus_logo_new.svg"
            alt='Sweatlist logo' width={77}
            height={77} className='object-contain bg-white rounded-full hover:scale-110 transition-transform duration-300 ease-in-out' />
            <p className='logo_text'><span className='text-sky-400'>SWEAT</span>LIST</p>
        </Link>
        </div>

        {/* Desktop Nav*/}
        <div className='sm:flex hidden gap-10'>
            <Link href="/about-us" className='text-white text-2xl hover:text-sky-400 duration-200 ease-in-out'>
                Discover
            </Link>
            <Link href="/pricing" className='text-white text-2xl hover:text-sky-400 duration-200 ease-in-out'>
                Pricing
            </Link>
            {session?.user ? (
                <div className='flex gap-2 md:gap-10'>
                    <Link href="/create-routine"
                    className='text-white text-2xl hover:text-sky-400 duration-200 ease-in-out'>
                        Create Sweatlist
                    </Link>
                    <Link href="/" onClick={signOut} 
                    className='text-white text-2xl hover:text-sky-400 duration-200 ease-in-out'>
                        Log out
                    </Link>
                    <Link href="/profile">
                        <Image
                            src={session?.user.image} 
                            className='rounded-full border-2 border-sky-400'
                            width={50}
                            height={52}
                            alt='Profile' />
                    </Link>
                </div>
            ):(
                <>
                    {providers && 
                    Object.values(providers).map((provider)  => (
                        <Link href="/"
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        className='text-white text-2xl hover:text-sky-400 duration-200 ease-in-out'
                        >
                            Log in
                        </Link>
                    ))} 
                </>
            )}
        </div>
        {/* Mobile Nav*/}
        <div className='sm:hidden flex relative'>
            {session?.user ? (
                <div className='flex'>
                    <Image 
                    src="assets/assets/images/menu.svg"
                    width={37}
                    height={37}
                    className='rounded-full cursor-pointer hover:scale-110 duration-200 ease-in'
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
                            <Link href="/create-routine"
                            className='dropdown_link'
                            onClick={() => setToggleDropdown(false)}>
                                Create Sweatlist
                            </Link>
                            <Link href="/about-us" className='dropdown_link'>
                                About us
                            </Link>
                            <Link href="/pricing" className='dropdown_link'>
                                Pricing
                            </Link>
                            <Link href="/"
                            
                            onClick={() => {
                                setToggleDropdown(false);
                                signOut();
                            }}
                            className='mt-5 w-full black_btn'
                            >
                                Log Out

                            </Link>
                        </div>
                    )}
                </div>
            ): (
                <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='text-white text-2xl hover:text-sky-400 duration-200 ease-in-out'
                >
                  Log in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav