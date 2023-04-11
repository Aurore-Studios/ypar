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

    const { id } = router.query;

    return <>
        <Layout>
            <div className='lg:px-16 md:px-8 px-4 py-16'>
                <div className='flex flex-col'>
                    <p className='text-2xl mb-4 text-center'>Your ticket for the Glow in the dark dance</p>
                    {session && <div className='mx-auto lg:w-1/2 md:w-3/4 w-full'>
                        <div className='border-2 p-4 rounded-t-lg border-cyan-600 bg-cyan-50'>
                            <p className='text-slate-800 text-3xl font-bold flex items-start'>
                                Glow in the dark dance
                                <FontAwesomeIcon icon={faTicket} className='ml-auto -rotate-45' />
                            </p>
                            <p className='text-cyan-600 text-3xl font-bold'>This is {session.user.name}&apos;s ticket.</p>
                            <p className='mt-2 text-cyan-600 text-xl font-medium'>TID: {id}</p>
                            <p className='mt-2 text-cyan-600 text-xl font-medium'>TID: {id}</p>
                        </div>
                        <div className='border-2 p-4 rounded-b-lg border-slate-400 border-t-0'>
                            <p className='font-medium text-2xl'>Make sure to bring your ID to the dance as well!</p>
                            <hr className='my-4 border-slate-400' />
                            <p className='font-medium text-xl'>Additional info</p>
                            <p className='mt-1'>Purchased on February 7th, 2023</p>

                            <p className='mt-4 text-xs text-slate-500'>Your ticket&apos;s TID (Ticket Identifier) is simply the identifier WWMS NOW uses to find your ticket out of hundreds of others.</p>
                        </div>
                    </div>}
                </div>
            </div>
        </Layout>
    </>
}
