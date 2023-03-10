import Layout from "../../components/Layout";

export default function FAQ() {
    return (
        <>
            {/* TODO replace placeholders with actual information */}

            <Layout>
                <div className="max-w-screen-xl p-8 mx-auto">
                    <h2 className="pb-4 mb-12 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100">
                        FAQs
                    </h2>
                    <ul className="flex flex-wrap items-start gap-8">
                        <li className="w-2/5">
                            <p className="text-lg font-medium leading-6 text-gray-900">
                                What is WWMS NOW?
                            </p>
                            <p className="mt-2"></p>
                            <p className="text-base leading-6 text-gray-600">
                                WWMS NOW is an online platform that provides students, teachers, and more with the
                                latest information on Woodrow Wilson Middle School sports activities,
                                including news, game schedules, surveys, and MVPs of the last game.
                            </p>
                            <p/>
                        </li>
                        <li className="w-2/5">
                            <p className="text-lg font-medium leading-6 text-gray-900">
                                Who can access WWMS NOW?
                            </p>
                            <p className="mt-2"></p>
                            <p className="text-base leading-6 text-gray-600">
                                Only members of Woodrow Wilson Middle School, including students and teachers, can
                                access WWMS NOW. To log in, you need to use your Edison account.
                            </p>
                            <p/>
                        </li>
                        <li className="w-2/5">
                            <p className="text-lg font-medium leading-6 text-gray-900">
                                How do I log in to WWMS NOW?
                            </p>
                            <p className="mt-2"></p>
                            <p className="text-base leading-6 text-gray-600">
                                To log in to WWMS NOW, go to the login page and log in with your Edison account. If you
                                are a new user, you will need to register for an account first.
                            </p>
                            <p/>
                        </li>
                        <li className="w-2/5">
                            <p className="text-lg font-medium leading-6 text-gray-900">
                                Is WWMS NOW safe?
                            </p>
                            <p className="mt-2  "></p>
                            <p className="text-base leading-6 text-gray-600">
                                The website is made solely by students, and we have taken a variety of measures to make
                                sure the website is as safe as possible.
                            </p>
                            <p/>
                        </li>
                        <li className="w-2/5">
                            <p className="text-lg font-medium leading-6 text-gray-900">
                                How can I contact WWMS NOW?
                            </p>
                            <p className="mt-2"></p>
                            <p className="text-base leading-6 text-gray-600">
                                If you have any questions, comments, or concerns regarding WWMS NOW, you
                                can contact our support team by sending an email to 3017632@edison.k12.nj.us
                                or 3013982@edison.k12.nj.us.
                            </p>
                            <p/>
                        </li>
                        <li className="w-2/5">
                            <p className="text-lg font-medium leading-6 text-gray-900">
                                Can I contribute to the development of WWMS NOW?
                            </p>
                            <p className="mt-2"></p>
                            <p className="text-base leading-6 text-gray-600">
                                If you are interested in contributing to the development of WWMS NOW, we would love to
                                hear from you. Please contact us at
                                3017632@edison.k12.nj.us or 3013982@edison.k12.nj.us for more information on how to get
                                involved.
                            </p>
                            <p/>
                        </li>
                    </ul>
                </div>
            </Layout>
        </>
    );
}
