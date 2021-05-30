import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { SearchIcon } from "@heroicons/react/solid";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

import logo from "../img/logos/logo-black-512.png";

const Navigation = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-0 border-b-2 border-gray-200">
                        <div className="flex justify-between h-20">
                            <div className="flex px-2 lg:px-0">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-14 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-14 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden lg:ml-12 lg:flex lg:space-x-8">
                                    <Link
                                        to={'/'}
                                        className="border-transparent text-gray-500  hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
                                    >
                                        Today
                                    </Link>
                                    <Link
                                        to={'/hourly'}
                                        className="border-transparent text-gray-500  hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
                                    >
                                        Hourly
                                    </Link>
                                    <a
                                        href="/"
                                        className="border-transparent text-gray-500  hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
                                    >
                                        10 Days
                                    </a>
                                    <a
                                        href="/"
                                        className="border-transparent text-gray-500  hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
                                    >
                                        Weekends
                                    </a>
                                    <a
                                        href="/"
                                        className="border-transparent text-gray-500  hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
                                    >
                                        Monthly
                                    </a>
                                    <a
                                        href="/"
                                        className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
                                    >
                                        Radar
                                    </a>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                                <div className="max-w-lg w-full lg:max-w-xs">
                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                        </div>
                                        <input
                                            id="search"
                                            name="search"
                                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-transparent placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden lg:ml-4 lg:flex lg:items-center">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative flex-shrink-0">
                                    {({ open }) => (
                                        <>
                                            <div>
                                                <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src="https://raw.githubusercontent.com/anuzbvbmaniac/dummyimage/main/anuz.png"
                                                        alt=""
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items
                                                    static
                                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                >
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="/"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                )}
                                                            >
                                                                Your Profile
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="/"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                )}
                                                            >
                                                                Settings
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="/"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                )}
                                                            >
                                                                Sign out
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </>
                                    )}
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                            <a
                                href="/"
                                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Dashboard
                            </a>
                            <a
                                href="/"
                                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Team
                            </a>
                            <a
                                href="/"
                                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Projects
                            </a>
                            <a
                                href="/"
                                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Calendar
                            </a>
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="flex items-center px-4">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://raw.githubusercontent.com/anuzbvbmaniac/dummyimage/main/anuz.png"
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">Tom Cook</div>
                                    <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                                </div>
                                <button className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true"/>
                                </button>
                            </div>
                            <div className="mt-3 space-y-1">
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                >
                                    Your Profile
                                </a>
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                >
                                    Settings
                                </a>
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                >
                                    Sign out
                                </a>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navigation;
