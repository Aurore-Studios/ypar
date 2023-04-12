export default function Demo() {
    return <>
        <div className='text-white w-screen h-1/2 gradient'>
            <div className='p-16 text-8xl font-bold text-white'>
                <p className='leading-[110px]'>
                    Revolutionary new way to interact with our community, and a powerful ticket system.
                </p>
                <p className='leading-[110px]'>
                    Welcome to WWMS NOW.
                </p>
            </div>
            <div className='text-black p-16 bg-white h-[30%] mt-[25px]'>
                <div className='flex items-start'>
                    <img src='logo.png' className='w-[32.4%]' />
                    <div className='ml-6 text-4xl font-light uppercase'>
                        <p className='font-semibold'>WWMS NOW</p>
                        <p>2023 | by students, for students.</p>
                        <p>Website demo to the side.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}