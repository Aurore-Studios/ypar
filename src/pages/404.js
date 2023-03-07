import Layout from "components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket, faCactus, faTree, faMoon, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function fourofour() {
    return <>
        <Layout>
            <div className="lg:px-16 md:px-8 px-4 pt-16">
                <FontAwesomeIcon icon={faTree} className='text-3xl mr-6 -translate-y-5 text-cyan-700' />
                <FontAwesomeIcon icon={faRocket} className='rotate-[70deg] text-6xl text-cyan-600' />
                <span className='ml-4 text-3xl'>
                    <FontAwesomeIcon icon={faTree} className='ml-4 -translate-y-5 text-cyan-700' />
                    <FontAwesomeIcon icon={faTree} className='ml-5 -translate-y-5 text-cyan-700' />
                    <FontAwesomeIcon icon={faMoon} className='ml-7 -translate-y-14 text-amber-700' />
                </span>
                <p className='mt-6 text-4xl font-medium'>You&apos;ve crashed somewhere unknown.</p>
                <p className='mt-3 text-slate-600 mb-6'>We couldn&apos;t find the page you were looking for.</p>
                <Link href='/' className='text-cyan-600 font-medium'>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to homepage
                </Link>
            </div>
        </Layout>
    </>
}