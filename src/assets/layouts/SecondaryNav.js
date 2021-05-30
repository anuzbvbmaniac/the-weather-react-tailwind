import React, { Fragment } from 'react';
import PropTypes from "prop-types";

import { ChevronDownIcon, GlobeIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";


const SecondaryNav = ({name, country, degreeType}) => {


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-0 pt-2">
            <div className="sm:flex sm:justify-between sm:items-center items-center">
                <div className="sm:w-0 sm:flex-1">
                    <p className="text-xs text-gray-600 overflow-hidden overflow-ellipsis dark:text-gray-200">
                        <span className="font-semibold">{name}, {country} </span>
                        - Based on your internet address - Use precise location - More information.
                    </p>
                </div>

                <div className="mt-0 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
                        <span className="inline-flex items-center px-3 py-0.5 text-sm font-medium">
                            <GlobeIcon className="block h-6 w-6 dark:text-gray-200" aria-hidden="true"/>
                            <p className="ml-2 text-sm font-semibold text-gray-600 overflow-hidden overflow-ellipsis dark:text-gray-200">
                                Metric: {degreeType === 'celsius' ? 'ºC, m/s' : 'ºF, mph'}
                            </p>
                        </span>
                    <Menu as="div" className="relative inline-block text-left">
                        {({ open }) => (
                            <>
                                <div>
                                    <Menu.Button className="-my-2 p-1 rounded-full bg-transparent flex items-center text-gray-600 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:text-gray-200">
                                        <span className="sr-only">Open options</span>
                                        <ChevronDownIcon className="h-6 w-6" aria-hidden="true"/>
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
                                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-black"
                                    >
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'flex justify-between px-4 py-2 text-sm dark:text-gray-200 hover:bg-black'
                                                        )}
                                                    >
                                                        <span>ºF, mph</span>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
};

SecondaryNav.defaultProps = {
    name: 'Kathmandu',
    country: 'Nepal',
    degreeType: 'celsius'
}

SecondaryNav.protoTypes = {
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    degreeType: PropTypes.string.isRequired,
};

export default SecondaryNav;
