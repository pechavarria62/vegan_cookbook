import {React,Fragment }from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { 
    FaHome,FaBell,FaBars,FaTimes,FaAngleDown,
    FaWpexplorer,FaHandHoldingHeart,FaNewspaper,FaSistrix

} from 'react-icons/fa';

const navigation = [
    { name: 'Home', href: '/home', current: true, icon: <FaHome className=" h-6 w-6"/> },
    { name: 'Explore', href: '/Explore', current: false, icon: <FaWpexplorer className=" h-6 w-6 "/>},
    { name: 'Favorites', href: '/Favorites', current: false, icon: <FaHandHoldingHeart className=" h-6 w-6 "/>},
    { name: 'News', href: '/News', current: false, icon: <FaNewspaper className=" h-6 w-6 "/> },
    { name: 'Registration', href: '/Registration', current: false, icon: <FaWpexplorer className=" h-6 w-6 "/> },
    { name: 'Notification', href: '/Notification', current: false, icon: <FaBell className="h-6 w-6" /> },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <Disclosure as="nav" className="bg-white border-black border-b">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                                    <form
                                        className='
                                            text-gray-600 p-0.5 border border-solid rounded bg-blue-300 hidden h-10 w-auto lg:block space-x-0.5'
                                        >
                                            <button
                                            className='
                                                text-indent: -48rem; overflow: hidden;
                                                w-10 p-0 m-0 rounded-none border-solid border-transparent
                                                bg-transparent cursor-pointer opacity-70 hover:opacity-100; focus:
                                            '
                                        type="submit">
                                            <FaSistrix/>
                                        </button>
                                        <input
                                            className='
                                                rounded-none bg-transparent m-0 py-1.5
                                                px-2 text-sm text-inherit border-none
                                                border-transparent focus:shadow-outline
                                                focus:border-blue-400 focus:outline-none
                                            '
                                            type="search"
                                            placeholder="Search..."
                                        />
                                        
                                    </form>
                                    {/* <input className='hidden h-10 w-auto lg:block bg-blue-300 text-gray-500'/>
                                        <FaSistrix className=" hidden w-auto lg:block h-6"/>  */}
                                    <img
                                        className="block h-10 w-auto lg:hidden"
                                        src={process.env.PUBLIC_URL + "/images/vegan.png"}
                                        alt="Your Company"
                                    />
                                    <FaSistrix className="block h-10 w-auto lg:hidden"/>
                                </div>
                                
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                                <div className="flex flex-shrink-0 items-center">
                                    
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-3">
                                        {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="text-gray-500  hover:text-black px-3 py-2 rounded-md text-sm font-medium flex flex-column items-center"
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            <span>{item.icon}</span>
                                            <span>{item.name}</span>
                                        </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none text-white">
                                            <img
                                                className="h-7 w-7 rounded-full"
                                                src={process.env.PUBLIC_URL + "/images/pedro.jpg"}
                                                alt="me"
                                            />
                                            <hr/>
                                        </Menu.Button>
                                        <div className='flex space-x-2 text-sm text-gray-400'>
                                            Me
                                            <FaAngleDown className='h-4 w-4 mt-1'/>
                                        </div>
                                        
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
                                                        href="/klk"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/klk"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                <a
                                                    href="/klk"
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