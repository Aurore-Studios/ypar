import {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {CheckIcon} from "@heroicons/react/solid";

const SurveyModal = ({isOpen, close, question, answers}) => {
    {/* Define the selectedAnswer state variable and the setSelectedAnswer function to update it */}
    const [selectedAnswer, setSelectedAnswer] = useState("");

    {/* Define the handleSubmit function to submit the survey and close the modal */}
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`User selected ${selectedAnswer}`);
        {/*TODO add logic here for storage of user answer to survey(connect to db, etc)*/}

        close();
    };

    {/* Render the survey modal */}
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={close}
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>
                    </Transition.Child>

                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
            &#8203;
          </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div
                            className="inline-block max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                {question}
                            </Dialog.Title>
                            <div className="mt-4 space-y-4">

                                {/* Map answers */}

                                {answers.map((answer, index) => (
                                    <button
                                        key={index}
                                        className={`inline-flex justify-between items-center w-full px-4 py-2 text-base font-medium text-gray-900 bg-${index % 2 === 0 ? "cyan" : "slate"}-100 hover:bg-${index % 2 === 0 ? "cyan" : "slate"}-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${index % 2 === 0 ? "cyan" : "slate"}-500`}
                                        onClick={() => setSelectedAnswer(answer)}
                                    >
                                        {answer}
                                        {selectedAnswer === answer && (
                                            <CheckIcon className="ml-2 h-5 w-5 text-green-500"/>
                                        )}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-4">
                                <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};