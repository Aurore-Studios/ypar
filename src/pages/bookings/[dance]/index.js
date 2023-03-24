import { faAngleLeft, faAngleRight, faArrowRight, faMusic, faSpinner, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "components/Layout";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { faPaypal, faApple } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

export default function Bookings() {
    const { data: session } = useSession();
    const [countdown, setBeginCountdown] = useState(false);
    const [movetocheckout, setMovetocheckout] = useState(2);
    const router = useRouter();

    useEffect(() => {
        if (countdown === true) {
            setMovetocheckout(1);
            setTimeout(() => {
                setMovetocheckout(2);
            }, 5000)
        }
    }, [countdown])

    return <>
        <Layout>
            <div className='lg:px-16 md:px-8 px-4 py-16'>
                <div className='flex flex-col'>
                    <p className='text-xl mb-4 text-center'>Booking tickets for</p>
                    <p className='text-3xl text-center font-semibold'>
                        <FontAwesomeIcon icon={faMusic} className='mr-2 text-cyan-600' /> Glow in the dark dance <FontAwesomeIcon icon={faMusic} className='ml-2 text-cyan-600' />
                    </p>
                    <div className='mx-auto flex flex-col lg:w-1/2 md:w-[80%] w-full mt-8'>
                        <div className='text-slate-500 border border-slate-300 rounded-xl p-4 text-lg shadow shadow-slate-200'>
                            <p className='text-2xl text-black font-medium'>About this dance</p>
                            <div className='mt-2'>
                                {['Glow in the dark! Wear all white', 'Starts at 6:00 PM', 'Ends at 8:00 PM', 'Snacks and drinks will be served for a dollar each', 'Music recommendations are done via form requests'].map(x => {
                                    return <p key={x} className='text-black mt-0.5'><FontAwesomeIcon icon={faAngleRight} className='mr-1.5 text-cyan-600' /> {x}</p>
                                })}
                            </div>
                        </div>
                        <hr className='my-8' />
                        <p className='text-2xl mb-6 font-medium'>Ready to book your ticket?</p>
                        <div className='text-slate-500 border border-slate-300 rounded-xl p-4 text-lg shadow shadow-slate-200'>
                            {session ? <div>
                                {movetocheckout === 0 ?
                                <div className='flex items-start'>
                                    <img src={session.user.image} className='rounded-full w-[60px] border border-slate-300' />
                                    <div className='text-left ml-4'>
                                        <p className='text-2xl text-black'>Confirm you&apos;re going to this dance as <span className='font-semibold underline underline-offset-[3px] decoration-cyan-600'>{session.user.name}</span></p>
                                        <p className='text-lg mt-2'>
                                            We cannot refund tickets, so please make sure you are signed into the right account!<br />If you need to switch accounts, select "sign me out."
                                        </p>
                                        <div className='flex items-center mt-6'>
                                            <div className='mr-1.5 w-1/2 text-center font-medium text-cyan-600 rounded-full py-1.5 px-3 border border-cyan-600 hover:cursor-pointer hover:bg-cyan-50' onClick={() => setBeginCountdown(true)}>
                                                Yes, continue as {session.user.name}
                                            </div>
                                            <div className='ml-1.5 w-1/2 text-center font-medium text-slate-500 rounded-full py-1.5 px-3 border border-slate-400 hover:cursor-pointer hover:bg-slate-100' onClick={() => signOut()}>
                                                Sign me out
                                            </div>
                                        </div>
                                    </div>
                                </div> : movetocheckout === 1 ? <div>
                                    <FontAwesomeIcon icon={faSpinner} className='text-4xl animate-spin' />
                                    <p className='text-xl mt-2'>Please give us a few seconds to move you to checkout...</p>
                                </div> : <div className='text-black'>
                                    <img src={session.user.image} className='rounded-full border border-slate-300' width={50} />
                                    <p className='font-medium text-xl mt-2'>
                                        Checkout and purchase your ticket
                                    </p>
                                    <p className='mt-1'>
                                        One ticket for {session.user.name}, at $5.
                                        <br />
                                        After purchasing, we will redirect you to your digital ticket, which will be used for entry at the dance.
                                    </p>
                                    <div className='flex items-center'>
                                        <div className='mt-4 mr-1.5 w-1/2 text-center font-medium rounded-full py-1.5 px-3 border border-blue-600 hover:cursor-pointer hover:bg-blue-50' onClick={() => router.replace('/bookings/glow-in-the-dark/ba8d5e31-006e-47a8-ba93-9a62a354b111')}>
                                            <FontAwesomeIcon icon={faPaypal} className='text-blue-600 mr-1' /> Pay with <span className='text-blue-600'>PayPal</span>
                                        </div>
                                        <div className='mt-3 ml-1.5 w-1/2 text-center font-medium rounded-full py-1.5 px-3 border border-slate-500 hover:cursor-pointer hover:bg-slate-100' onClick={() => router.replace('/bookings/glow-in-the-dark/ba8d5e31-006e-47a8-ba93-9a62a354b111')}>
                                            <FontAwesomeIcon icon={faApple} className='text-slate-500 mr-1' /> Pay with <span className='text-slate-500'>Apple</span>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div> : <div>
                                Loading your profile...
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>
}