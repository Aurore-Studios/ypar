import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faExclamationCircle,
  faGripLines,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-toward-subtle.css";
import Collapsible from "./Collapsible";

export default function Layout({ children, home }) {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("light");
  const { data: session, status } = useSession();

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    console.log(session);
  }, [session]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const links = {
    Sports: "/sports",
    Events: "/events",
    FAQ: "/faq",
    Bookings: "/bookings",
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
        <title>WWMS Now ∙ The place for everything WWMS</title>
      </Head>
      <div className={`w-full min-h-screen`}>
        <div className="z-[1000] bg-white sticky top-0 flex items-center hover:cursor-default w-full py-3 lg:px-16 md:px-8 px-4 border-b border-slate-300 shadow-lg shadow-slate-500/10">
          <Link href="/">
            <img
              src="/logo.png"
              alt="logo"
              width="140"
              className="mr-1 rounded hover:scale-[1.05] transition hover:cursor-pointer hover:shadow-lg hover:shadow-cyan-200/20 select-none"
            />
          </Link>
          <div className="lg:flex md:flex hidden items-center">
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
          </div>
          <div className="ml-auto flex items-center">
            {session ? (
              <div className="flex items-center">
                <Tippy
                  content={
                    <div className="min-w-[200px]">
                      {session && !session.user.edisonaccount && (
                        <div className="border rounded-t border-red-500 bg-red-50 p-2">
                          <p className="text-xs text-red-500">
                            <FontAwesomeIcon
                              icon={faExclamationCircle}
                              className="text-red-500"
                            />{" "}
                            This account isn&apos;t an Edison account. Some
                            features will be disabled for students&apos; safety.
                          </p>
                        </div>
                      )}
                      <div className="p-2">
                        <p className="text-lg font-medium underline decoration-[1.75px] underline-offset-4 decoration-cyan-500">
                          {session.user.name}
                        </p>
                        <p className="text-slate-500 mt-1">
                          {session.user.email}
                        </p>
                      </div>
                      <div className="border-t border-slate-300 bg-slate-100">
                        <div
                          className="p-2 font-medium hover:cursor-pointer hover:bg-slate-200 transition rounded-b"
                          onClick={() => signOut()}
                        >
                          <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="w-4 text-red-500"
                          />{" "}
                          Log out
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
                  <div className="flex items-center hover:cursor-pointer">
                    <img
                      src={session.user.image}
                      width="35"
                      className="border border-slate-300 rounded-full"
                    />
                    {session && !session.user.edisonaccount && (
                      <FontAwesomeIcon
                        icon={faExclamationCircle}
                        className="-translate-y-3 -translate-x-2 text-red-500 rounded-full border-2 border-white"
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
                <div
                  className="hover:cursor-pointer font-medium text-xl hover:text-slate-500 transition underline underline-offset-2 decoration-[1.75px] decoration-cyan-600"
                  onClick={() => signIn("google")}
                >
                  Sign up
                </div>
              </div>
            )}
          </div>

          <div className="lg:hidden md:hidden">
            <Tippy
              content={
                <div className="p-2 px-4 min-w-[200px] flex flex-col">
                  {Object.keys(links).map((x) => {
                    return (
                      <Link
                        href={links[x]}
                        key={x}
                        className="active:text-sky-500 group w-full flex items-center font-medium my-3 text-xl hover:text-slate-500 transition"
                      >
                        {x}{" "}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="transition ml-auto text-slate-400 group-active:text-sky-300"
                        />
                      </Link>
                    );
                  })}
                </div>
              }
              className="shadow-lg shadow-slate-500/10 bg-white border border-slate-300 mt-4 mr-1 rounded focus:outline-none"
              animation="shift-toward-subtle"
              interactive
              delay={[0, 0]}
              trigger="click"
              placement="bottom-start"
            >
              <FontAwesomeIcon
                icon={faGripLines}
                className="mt-1 hover:cursor-pointer ml-4 bg-slate-100 border border-slate-300 rounded-lg p-2"
              />
            </Tippy>
          </div>
        </div>

        {children}

        <div className="shadow-inner shadow-slate-200/50 py-8 lg:px-16 md:px-8 px-4 w-full border-t border-slate-300 mt-16">
          <div className="flex">
            <div className="font-medium">
              <img
                src="/logo.png"
                className="saturate-0 opacity-50"
                width={190}
              />
              <p className="mt-4 text-zinc-600">WWMS Now</p>
              <p className="mt-1 text-zinc-600">
                Developed for the YPAR project
              </p>
              <p className="mt-1 text-zinc-600">
                By Ekya Rai Dogra, Pranav Thota,
                <br />
                Aditya Arcot-Vantel, Kushagra Dixit, and Dillon Petagna
              </p>
            </div>
            <div className="lg:flex md:flex hidden flex-wrap">
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
                  <p className="text-zinc-600 font-medium">
                    Official WWMS Links
                  </p>
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

          <div className="lg:hidden md:hidden block">
            <Collapsible
              text="Links"
              content={Object.keys(links).map((x) => {
                return (
                  <Link href={links[x]} key={x}>
                    <p className="hover:underline mt-4">{x}</p>
                  </Link>
                );
              })}
            />
            <Collapsible
              text="Official WWMS Links"
              content={<>
                <Link href={"https://wwms.edison.k12.nj.us"}>
                    <p className="hover:underline">WWMS Website</p>
                  </Link>
                  <Link
                    href={
                      "https://www.youtube.com/@woodrowwilsonmiddleschool5029"
                    }
                  >
                    <p className="hover:underline mt-4">WWMS YouTube</p>
                  </Link>
              </>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
