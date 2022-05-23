import {Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'

export default function BaseModal(props) {
    const { isOpen, title, children, setIsOpen } = props
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={() => setIsOpen(false)}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                      </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left
            shadow-xl transform transition-all mt-32 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                            <Dialog.Title
                                as="div"
                                className="px-6 py-3 bg-gray-100 text-lg font-medium text-gray-900 rounded-t-lg"
                            >
                                {title}
                            </Dialog.Title>

                            <div className="bg-white  sm:flex-col">
                                {children}
                            </div>
                        </div>

                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
