import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import Script from 'next/script'

export default function Layout({ children, home }) {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        console.log('triggered')
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else { 
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
     }

    
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark')
        document.documentElement.classList.add('dark');
      } else {
        setTheme('light');
        document.documentElement.classList.remove('dark');
      }
  }, [])

  const links = {
    'Events': '/events',
    'FAQ': '/faq'
  }

  return (
    <div>
      <Head>
        <meta name="og:title" content="WWMS Now" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>WWMS Now</title>
      </Head>
        <div
          className={`w-full sticky top-0 min-h-screen`}
        >
            <div className='flex items-center hover:cursor-default w-full bg-pink-100 py-3 lg:px-16 md:px-8 px-4 border-b-2 border-pink-500'>
                <Link href='/'>
                    <img src='/logo.png' alt="logo" width="120" className='mr-1 rounded border border-pink-500 hover:scale-[1.05] transition hover:cursor-pointer hover:shadow-lg hover:shadow-pink-200 select-none' />
                </Link>
                {Object.keys(links).map(x => {
                    return <Link href={links[x]} key={x} className='font-medium ml-4 text-xl text-pink-500 hover:text-pink-700 transition'>
                        {x}
                    </Link>
                })}
                <div className='ml-auto flex items-center'>
                    <Link href='/login' className='font-medium text-xl text-pink-500 hover:text-pink-700 transition'>
                        Login
                    </Link>
                    <span className='mx-2 text-pink-300'>|</span>
                    <Link href='/signup' className='font-medium text-xl text-pink-500 hover:text-pink-700 transition'>
                        Sign up
                    </Link>
                </div>
            </div>
            
            {children}

            <div className='py-8 lg:px-16 md:px-8 px-4 w-full border-t border-slate-300 mt-16'>
                <div className='flex flex-wrap'>
                    <div className='font-medium'>
                        <img src='/logo.png' className='saturate-0 opacity-50' width={190} />
                        <p className='w-[400px] text-zinc-500'>
                            WWMS Now
                            <br />
                            Developed for the YPAR project
                            <br />
                            By Pranav Thota, Ekya Dogra, Aditya Arcot-Vantel, Kushagra Dixit, and Dillon Petagna
                        </p>
                    </div>
                    <div className='ml-8 flex flex-wrap'>
                        <div className='text-zinc-400'>
                            <p className='text-zinc-500 font-medium'>
                                Links
                            </p>
                            {Object.keys(links).map(x => {
                                return <Link href={links[x]}>
                                    <p className='hover:underline'>
                                        {x}
                                    </p>
                                </Link>
                            })}
                        </div>
                    </div>
                    <div className='ml-8 flex flex-wrap'>
                        <div className='text-zinc-400'>
                            <p className='text-zinc-500 font-medium'>
                                Miscellaneous
                            </p>
                            <Link href={'https://wwms.edison.k12.nj.us'}>
                                <p className='hover:underline'>
                                    WWMS Website
                                </p>
                            </Link>
                            <Link href={'https://www.youtube.com/@woodrowwilsonmiddleschool5029'}>
                                <p className='hover:underline'>
                                    WWMS YouTube
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}