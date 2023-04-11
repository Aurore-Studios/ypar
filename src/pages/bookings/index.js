import { faArrowRight, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "components/Layout";
import Link from "next/link";

export default function Bookings() {
    return <>
        <Layout>
            <div className='lg:px-16 md:px-8 px-4 py-16'>
                <p className='text-4xl font-bold'>
                    <FontAwesomeIcon icon={faTicket} className='rotate-45 mr-2 text-cyan-600' /> Book tickets for events
                </p>
                <p className='text-2xl mt-8'>Upcoming events</p>
                <div className='flex flex-wrap mt-4'>
                    <Link href='/bookings/glow-in-the-dark'>
                        <div className='text-slate-500 border border-slate-300 rounded p-4 text-lg shadow shadow-slate-200 hover:bg-cyan-50 hover:border-cyan-600 transition hover:cursor-pointer'>
                            <p className='text-black font-medium'>Glow in the Dark Dance</p>
                            <p>February 9th, 2023</p>
                            <p>6-8 PM</p>
                            <p className='mt-1 text-cyan-600 font-medium'>
                                Book a ticket <FontAwesomeIcon icon={faArrowRight} />
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    </>
}