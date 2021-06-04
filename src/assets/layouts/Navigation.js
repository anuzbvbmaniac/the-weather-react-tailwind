import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { SearchIcon } from "@heroicons/react/solid";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import logoDark from "../img/logos/logo-black-512.png";
import logoDarkSmall from "../img/logos/logo-black-128.png";

import { getWeatherFromLocation, setDarkMode } from "../../actions/weatherActions";

const Navigation = ({ weather, setDarkMode, getWeatherFromLocation }) => {

    const [keyword, setKeyword] = useState('');

    const onChange = (event) => {
        setKeyword(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (keyword === '') {
            console.log('Please enter something');
        } else {
            getWeatherFromLocation(keyword);
            setKeyword('');
        }
    }

    const toggleDarkMode = (event) => {
        event.preventDefault();
        const body = document.querySelector('body');

        body.classList.toggle('dark');

        if (document.body.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'true');
            setDarkMode(true);
        } else {
            localStorage.removeItem('darkMode');
            setDarkMode(false);
        }
    };

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="max-w-8xl mx-auto lg:px-10 md:px-8 px-4">
                        <div className="flex justify-between h-20 border-b-2 border-gray-200 dark:border-white">
                            <div className="flex lg:px-0">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-14 w-auto"
                                        src={logoDarkSmall}
                                        alt="The Weather App"
                                    />
                                    <img
                                        className="hidden lg:block h-14 w-auto"
                                        src={logoDark}
                                        alt="The Weather App"
                                    />
                                </div>
                                <div className="hidden lg:ml-12 lg:flex lg:space-x-8">
                                    <NavLink
                                        to={'/'}
                                        activeClassName="text-gray-900"
                                        className="border-transparent text-gray-500 dark:text-gray-200 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
                                    >
                                        Today
                                    </NavLink>
                                    <NavLink
                                        to={'/hourly'}
                                        activeClassName="text-gray-900"
                                        className="border-transparent text-gray-500 dark:text-gray-200 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
                                    >
                                        Hourly
                                    </NavLink>
                                    <NavLink
                                        to={'/days'}
                                        activeClassName="text-gray-900"
                                        className="border-transparent text-gray-500 dark:text-gray-200 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
                                    >
                                        7 Days
                                    </NavLink>
                                    <NavLink
                                        to="/monthly"
                                        activeClassName="text-gray-900"
                                        className="border-transparent text-gray-500 dark:text-gray-200 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
                                    >
                                        Monthly
                                    </NavLink>
                                    <NavLink
                                        to={'/about'}
                                        activeClassName="text-gray-900"
                                        className="border-transparent text-gray-500 dark:text-gray-200 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
                                    >
                                        About
                                    </NavLink>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                                <div className="max-w-lg w-full lg:max-w-xs">
                                    <form onSubmit={onSubmit}>
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
                                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-50 rounded-md leading-5 bg-transparent placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                                placeholder="Search"
                                                type="search"
                                                value={keyword}
                                                onChange={onChange}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center lg:p-2 md:px-0 md:py-2 sm:px-0 sm:py-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
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
                                                <Menu.Button className="bg-white dark:bg-dark rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 dark:bg-dark"
                                                >
                                                    <Menu.Item>

                                                        <button
                                                            onClick={toggleDarkMode}
                                                            className={'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-transparent'}
                                                        >
                                                            {weather.dark ? '☀️ Enable Light Mode' : '🌛 Enable Dark Mode'}
                                                        </button>

                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <a
                                                            href="/"
                                                            className={'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-transparent'}
                                                        >
                                                            Github
                                                        </a>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <a
                                                            href="/"
                                                            className={'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-transparent'}
                                                        >
                                                            Website
                                                        </a>
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
                            <NavLink
                                to="/"
                                className="border-yellow-500 text-dark dark:text-gray-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Today
                            </NavLink>
                            <NavLink
                                to="/hourly"
                                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Hourly
                            </NavLink>
                            <NavLink
                                to="/days"
                                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                7 Days
                            </NavLink>
                            <NavLink
                                to="/monthly"
                                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Monthly
                            </NavLink>
                            <NavLink
                                to="/about"
                                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                About
                            </NavLink>
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
                                    <div className="text-base font-medium text-gray-800">Anuz Pandey</div>
                                    <div className="text-sm font-medium text-gray-500">anuzbvbmaniac123@gmail.com</div>
                                </div>
                            </div>
                            <div className="mt-3 space-y-1">
                                <a
                                    href="!#"
                                    onClick={toggleDarkMode}
                                    className="border-yellow-500 text-dark dark:text-gray-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                >
                                    🌛 Enable Dark Mode
                                </a>
                                <a
                                    href="/"
                                    className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                >
                                    Github
                                </a>
                                <a
                                    href="/"
                                    className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                >
                                    Website
                                </a>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

Navigation.propTypes = {
    weather: PropTypes.object.isRequired,
    setDarkMode: PropTypes.func.isRequired,
    getWeatherFromLocation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    weather: state.weather,
});

export default connect(
    mapStateToProps,
    { setDarkMode, getWeatherFromLocation }
)(Navigation);
