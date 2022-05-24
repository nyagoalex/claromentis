import { Disclosure} from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import {ScaleIcon} from "@heroicons/react/solid";
import { Link } from '@inertiajs/inertia-react'

const navigation = [
    { name: 'Dashboard', href: '/dashboard', current: true  },
    { name: 'Categories', href: '/categories', current: false },
    { name: 'Expenses', href: '/bulk-files', current: false },
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Layout = ({ children }) =>  {
    const pathname = window.location.pathname

    function isActive(url) {
        return pathname.substr(1).startsWith(url.substr(1))
    }

    return (
        <main className="flex  justify-center">
            <div className="min-h-full max-w-7xl w-full">
                <Disclosure as="nav" className="bg-white shadow-sm">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between h-16">
                                    <div className="flex">
                                        <Link className="flex-shrink-0 flex items-center " href="/">
                                            <ScaleIcon className="h-8 w-8 text-gray-400 sm:h-10 text-indigo-600" />
                                            <label className="cursor-pointer text-2xl pl-2 text-gray-700 font-semibold">Claromentis</label>
                                        </Link>
                                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        isActive(item.href)
                                                            ? 'border-indigo-500 text-gray-900'
                                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                        <button
                                            type="button"
                                            className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        {/* Profile dropdown */}
                                        <div className="ml-3 relative">
                                            <div>
                                                <div className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src="/images/user.jpeg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex items-center sm:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden">
                                <div className="pt-2 pb-3 space-y-1">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                                                'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="pt-4 pb-3 border-t border-gray-200">
                                    <div className="flex items-center px-4">
                                        <div className="flex-shrink-0">
                                            <img className="h-8 w-8 rounded-full" src="/images/user.jpeg" alt="" />
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <article className="py-10">{children}</article>
            </div>
        </main>
    )
}

export default Layout;
