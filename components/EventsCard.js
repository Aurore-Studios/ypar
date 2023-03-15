export default function Events() {
    return (
        <>
            {/* Required meta tags */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Tailwind CSS */}
            <link
                href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
                rel="stylesheet"
            />
            <title>Tailwind CSS CDN</title>
            <div className="p-10">
                {/*Card 1*/}
                <div className=" w-full lg:max-w-full lg:flex">
                    <div
                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                        style={{ backgroundImage: 'url("/mountain.jpg")' }}
                        title="Mountain"
                    ></div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg
                                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                WWMS only
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">
                                WWMS Winter Dance
                            </div>
                            <p className="text-gray-700 text-base">
                                The WWMS Winter Dance is soon! Make sure to dress in all white to get in the mood! It will be a glow party! You should...
                            </p>
                        </div>
                        <div className="flex items-center">
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">Student Council</p>
                                <p className="text-gray-600">Feb 20th</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};