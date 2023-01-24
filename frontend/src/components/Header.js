import {React,Fragment }from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { 
    FaHome,FaBell,FaBars,FaTimes,FaAngleDown,
    FaWpexplorer,FaHandHoldingHeart,FaNewspaper,

} from 'react-icons/fa';
// import vegan from 'frontend/public/images/vegan.png';

const navigation = [
    { name: 'Home', href: '/home', current: true, icon: <FaHome className=" h-8 w-8"/> },
    { name: 'Explore', href: '/Explore', current: false, icon: <FaWpexplorer className=" h-8 w-8 "/>},
    { name: 'Favorites', href: '/Favorites', current: false, icon: <FaHandHoldingHeart className=" h-8 w-8 "/>},
    { name: 'News', href: '/News', current: false, icon: <FaNewspaper className=" h-8 w-8 "/> },
    { name: 'Registration', href: '/Registration', current: false, icon: <FaWpexplorer className=" h-8 w-8 "/> },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    
    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <FaTimes className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                                )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className=" flex flix-shrink-0 ">
                                    <img
                                        className="hidden h-10 w-auto lg:block"
                                        src={process.env.PUBLIC_URL + "/images/vegan.png"}
                                        alt="Your Company"
                                    />
                                    <img
                                        className="block h-10 w-auto lg:hidden"
                                        src={process.env.PUBLIC_URL + "/images/vegan.png"}
                                        alt="Your Company"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                                <div className="flex flex-shrink-0 items-center">
                                    
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                            item.current ? ' text-gray-500 hover:text-black' : 'text-gray-500  hover:text-black',
                                            'px-3 py-2 rounded-md text-sm font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.icon}
                                            {item.name}
                                        </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                type="button"
                                className="rounded-full p-1 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                                >
                                <span className="sr-only">View notifications</span>
                                <FaBell className="h-6 w-6" aria-hidden="true" />
                                </button>
                
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none ">
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="me"
                                    />
                                    </Menu.Button>
                                    <span className='flex  flex-1 items-center justify-center text-gray-500'>
                                        Me 
                                        <FaAngleDown/>
                                    </span>
                                    
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Your Profile
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Settings
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Sign out
                                            </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
            
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                    >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
};