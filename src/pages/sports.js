import Layout from "../../components/Layout";

export default function sports() {
    return (
        <>
            <Layout>
                <div className="lg:px-16 md:px-8 px-4 pt-16">
                    <div className='flex items-start'>
                        <div>
                            <p className='text-4xl font-bold'>Upcoming</p>
                        </div>
                        <div className='lg:flex md:flex hidden ml-auto border-2 border-cyan-500 rounded p-2 w-[300px] sticky top-[50px]'>
                            filters placeholder
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}