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
                    <img src='/logo.png' width="120" className='mr-1 rounded border border-pink-500 hover:scale-[1.05] transition hover:cursor-pointer hover:shadow-lg hover:shadow-pink-200 select-none' />
                </Link>
                {Object.keys(links).map(x => {
                    return <Link href={links[x]} key={x} className='font-medium ml-4 text-xl text-pink-500 hover:text-pink-700 transition'>
                        {x}
                    </Link>
                })}
            </div>
            
            {children}

            { /* footer */ }
        </div>
    </div>
  );
}