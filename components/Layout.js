import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-toward-subtle.css";

export default function Layout({ children, home }) {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("light");
  const { data: session, status } = useSession();

  const toggleTheme = () => {
    console.log("triggered");
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

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
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const links = {
    Events: "/events",
    Teams: "/teams", // sport teams e.g. boys basketball team, track
    FAQ: "/faq",
  };

  if (session) {
    if (status === "loading") {
      return (
        <div className="w-screen h-screen flex">
          <div className="mx-auto my-auto lg:w-1/3">
            <img src="/logo.png" width="150" />
            <p className="leading-[50px] mt-2 font-medium text-4xl">
              We&apos;re verifying that you&apos;re signed into an Edison
              account. Hold tight!
            </p>
            <p className="mt-10 text-xl text-slate-500">
              © {new Date().getFullYear()} WWMS Now
            </p>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <Head>
        <meta name="og:title" content="WWMS Now" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>WWMS Now</title>
      </Head>
      <div className={`w-full min-h-screen`}>
        <div className="bg-white sticky top-0 flex items-center hover:cursor-default w-full py-3 lg:px-16 md:px-8 px-4 border-b border-slate-300 shadow-lg shadow-slate-500/10">
          <Link href="/">
            <img
              src="/logo.png"
              alt="logo"
              width="140"
              className="mr-1 rounded hover:scale-[1.05] transition hover:cursor-pointer hover:shadow-lg hover:shadow-cyan-200/20 select-none"
            />
          </Link>
          {Object.keys(links).map((x) => {
            return (
              <Link
                href={links[x]}
                key={x}
                className="font-medium ml-4 text-xl hover:text-slate-500 transition"
              >
                {x}
              </Link>
            );
          })}
          <div className="ml-auto">
            {session ? (
              <div className="flex items-center">
                <Tippy
                  content={
                    <div className='w-[200px]'>
                        {session &&
                        !session.user.email.includes("edison.k12.nj.us") && (
                            <div className='border rounded-t border-red-500 bg-red-50 p-2'>
                                <p className='text-xs text-red-500'>This account isn&apos;t an Edison account. Some features will be disabled for students&apos; safety.</p>
                            </div>
                        )}
                        <div className='p-2'>
                            <p className='text-lg font-medium underline decoration-[1.75px] underline-offset-4 decoration-cyan-500'>{session.user.name}</p>
                            <p className='text-slate-500 mt-1'>Logged in with Google</p>
                        </div>
                        <div className='border-t border-slate-300 bg-slate-100'>
                            <div className='p-2 font-medium hover:cursor-pointer hover:bg-slate-200 transition rounded-b'>
                                <FontAwesomeIcon icon={faArrowLeft} className='w-4 text-red-500' /> Log out
                            </div>
                        </div>
                    </div>
                  }
                  className="shadow-lg shadow-slate-500/10 bg-white border border-slate-300 mt-4 mr-1 rounded focus:outline-none"
                  animation="shift-toward-subtle"
                  interactive
                  delay={[0, 0]}
                  trigger="click"
                  placement="bottom-start"
                >
                  <div className='flex items-center hover:cursor-pointer'>
                    <img
                      src={session.user.image}
                      width="35"
                      className="border border-slate-300 rounded-full"
                    />
                    {session &&
                      !session.user.email.includes("edison.k12.nj.us") && (
                        <FontAwesomeIcon
                          icon={faExclamationCircle}
                          className="-translate-y-3 -translate-x-2 text-red-500"
                        />
                      )}
                  </div>
                </Tippy>
              </div>
            ) : status === "loading" ? (
              <div className="animate-pulse bg-slate-200 p-4 border border-slate-300 rounded-full" />
            ) : (
              <div className="flex items-center">
                <div
                  className="hover:cursor-pointer font-medium text-xl hover:text-slate-500 transition underline underline-offset-2 decoration-[1.75px] decoration-cyan-600"
                  onClick={() => signIn("google")}
                >
                  Login
                </div>
                <span className="mx-2 text-slate-400">|</span>
                <Link
                  href="/signup"
                  className="font-medium text-xl hover:text-slate-500 underline underline-offset-2 decoration-[1.75px] decoration-cyan-600 transition"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>

        {children}

        <div className="shadow-inner shadow-slate-200/50 py-8 lg:px-16 md:px-8 px-4 w-full border-t border-slate-300 mt-16">
          <div className="flex flex-wrap">
            <div className="font-medium">
              <img
                src="/logo.png"
                className="saturate-0 opacity-50"
                width={190}
              />
              <p className="w-[400px] text-zinc-600">
                WWMS Now
                <br />
                Developed for the YPAR project
                <br />
                By Pranav Thota, Ekya Dogra, Aditya Arcot-Vantel, Kushagra
                Dixit, and Dillon Petagna
              </p>
            </div>
            <div className="ml-8 flex flex-wrap">
              <div className="text-zinc-400">
                <p className="text-zinc-600 font-medium">Links</p>
                {Object.keys(links).map((x) => {
                  return (
                    <Link href={links[x]} key={x}>
                      <p className="hover:underline">{x}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="ml-8 flex flex-wrap">
              <div className="text-zinc-400">
                <p className="text-zinc-600 font-medium">Official WWMS Links</p>
                <Link href={"https://wwms.edison.k12.nj.us"}>
                  <p className="hover:underline">WWMS Website</p>
                </Link>
                <Link
                  href={
                    "https://www.youtube.com/@woodrowwilsonmiddleschool5029"
                  }
                >
                  <p className="hover:underline">WWMS YouTube</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
