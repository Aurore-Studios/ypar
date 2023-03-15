import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Link from 'next/link'
import EventsCard from '../../components/EventsCard'

{/* TODO add event modals*/}
export default function Events() {
    return (
        <>
            <Layout>
                <EventsCard />
            </Layout>
        </>
    )
}