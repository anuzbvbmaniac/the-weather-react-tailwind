import React from 'react';
import Navigation from "./assets/layouts/Navigation";
import SecondaryNav from "./assets/layouts/SecondaryNav";
import { DownloadIcon, UploadIcon } from "@heroicons/react/solid";


import sunUpAndDown from './assets/img/sun-up-n-down.png';
import temperature from './assets/img/extras/temperature.svg';
import humidity from './assets/img/extras/humidity.svg';
import pressure from './assets/img/extras/pressure.svg';
import visibility from './assets/img/extras/visibility.svg';
import wind from './assets/img/extras/wind.svg';
import dew_point from './assets/img/extras/dew_point.svg';
import uv_index from './assets/img/extras/uv_index.svg';
import moonphase from './assets/img/extras/moonphase.svg';

import cloudy_sunny from './assets/img/weather/cloudy_sunny.png';
import sunny from './assets/img/weather/sunny.png';
import sunny_windy from './assets/img/weather/sunny_windy.png';
import thunder_night from './assets/img/weather/thunder_night.png';

const extraInfo = [
    {
        icon: temperature,
        title: 'Temperature',
        value: '--/3º'
    },
    {
        icon: wind,
        title: 'Wind',
        value: '24km/h'
    },
    {
        icon: humidity,
        title: 'Humidity',
        value: '61%'
    },
    {
        icon: dew_point,
        title: 'Dew Point',
        value: '0º'
    },
    {
        icon: pressure,
        title: 'Pressure',
        value: '51%'
    },
    {
        icon: uv_index,
        title: 'UV Index',
        value: '0 of 10'
    },
    {
        icon: visibility,
        title: 'Visibility',
        value: 'Unlimited'
    },
    {
        icon: moonphase,
        title: 'Moon Phase',
        value: 'Waxing Gibbous'
    },
];

function App() {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <>
            {/*  Navigation  */}
            <Navigation/>

            {/*  Secondary Nav info bar  */}
            <SecondaryNav/>

            {/*  Main Body Section  */}

            <main className="mt-4 pb-0">
                <div className="max-w-3xl mx-auto lg:max-w-7xl">
                    <h1 className="sr-only">Profile</h1>
                    {/* Main 3 column grid */}
                    <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-5 lg:gap-8">

                        {/* Left column */}
                        <div className="grid grid-cols-1 gap-4 lg:col-span-3">

                            {/* Current information panel */}
                            <section aria-labelledby="profile-overview-title">
                                <div className="rounded-lg bg-white overflow-hidden shadow w-4/5">
                                    <h2 className="sr-only" id="profile-overview-title">
                                        Weather Overview
                                    </h2>
                                    <div className="bg-purple-50 px-6 py-3">
                                        <div className="sm:flex sm:items-center sm:justify-between border-b-2 border-gray-200 pb-2 w-4/5">
                                            <div className="sm:flex sm:space-x-5">
                                                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                                    <p className="text-lg font-semibold text-gray-600">Kathmandu, Nepal Weather</p>
                                                    <p className="text-sm font-medium text-gray-400 mt-2">As of 12:00 am CEST</p>
                                                    <p className="mt-2 text-4xl font-semibold text-yellow-400">7º</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:flex sm:items-center sm:justify-between mt-2">
                                            <div className="sm:flex sm:space-x-5">
                                                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                                    <p className="text-md font-semibold text-gray-600">Partly Cloudy</p>
                                                    <p className="text-sm font-medium text-gray-400">1% chance of rain throughout 2 am</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/*  Extra Information panel  */}
                            <section aria-labelledby="profile-overview-title">
                                <div className="rounded-lg overflow-hidden w-4/5">
                                    <h2 className="sr-only" id="profile-overview-title">
                                        Extra Information
                                    </h2>
                                    <div className="px-6">
                                        <div className="sm:flex sm:items-center sm:justify-between">
                                            <div className="mt-0 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                                <p className="text-sm font-semibold text-gray-600 mt-0">Weather today in Kathmandu, Nepal</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between">

                                            <div className="sm:flex sm:items-center sm:justify-between pt-2">
                                                <div className="sm:flex sm:space-x-5">
                                                    <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                                                        <p className="mt-0 text-5xl font-semibold text-gray-600">3º</p>
                                                        <p className="text-sm font-medium text-gray-400 mt-2">Feels like</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sm:flex sm:items-center sm:justify-between pt-2 justify-end">
                                                <div className="sm:flex sm:space-x-5">
                                                    <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left flex flex-col items-center">
                                                        <img src={sunUpAndDown} alt="" className="w-24"/>
                                                        <p className="text-sm font-medium text-gray-400 mt-2 text-right inline-flex items-center">
                                                            <UploadIcon className="w-5 h-5 text-yellow-400 mr-3"/>
                                                            6:00 am
                                                            <DownloadIcon className="w-5 h-5 text-yellow-400 mx-3"/>
                                                            7:15 pm
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="mt-6">
                                            <ul className="grid grid-cols-2 gap-4">
                                                {extraInfo.map((item, index) => (
                                                    <li
                                                        className={index !== extraInfo.length - 1 && index !==  extraInfo.length - 2 ? 'py-1 border-b-2 border-gray-300' : 'py-1 '}
                                                        key={item.icon}
                                                    >
                                                        <div className="flex items-center space-x-4">
                                                            <div className="flex-shrink-0">
                                                                <img className="h-8 w-8 rounded-full" src={item.icon} alt=""/>
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-xs font-semibold text-gray-900 truncate">{item.title}</p>
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-semibold text-gray-900 truncate">
                                                                    {item.value}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right column */}
                        <div className="grid lg:col-span-2 flex">
                            <img src={cloudy_sunny} alt="" className="w-3/4"/>

                            {/*  Today's Forecast  */}
                            <div className="rounded-lg overflow-hidden w-full">
                                <h2 className="sr-only" id="profile-overview-title">
                                    Extra Information
                                </h2>
                                <div className="px-6">
                                    <div className="sm:flex sm:items-center sm:justify-between">
                                        <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                                            <p className="text-md font-semibold text-gray-600">Today’s Forecast for Kathmandu, Nepal</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-4 gap-2 justify-between">

                                        <div className="sm:flex sm:items-center sm:justify-between pt-4">
                                            <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                                                <p className="text-sm font-medium text-gray-400">Morning</p>
                                                <p className="mt-2 text-5xl font-semibold text-gray-600">10º</p>
                                                <img src={cloudy_sunny} alt="" className="w-3/5"/>
                                            </div>
                                        </div>

                                        <div className="sm:flex sm:items-center sm:justify-between pt-4">
                                            <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                                                <p className="text-sm font-medium text-gray-400">Afternoon</p>
                                                <p className="mt-2 text-5xl font-semibold text-gray-600">12º</p>
                                                <img src={sunny} alt="" className="w-3/5"/>
                                            </div>
                                        </div>

                                        <div className="sm:flex sm:items-center sm:justify-between pt-4">
                                            <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                                                <p className="text-sm font-medium text-gray-400">Evening</p>
                                                <p className="mt-2 text-5xl font-semibold text-gray-600">6º</p>
                                                <img src={sunny_windy} alt="" className="w-3/5"/>
                                            </div>
                                        </div>

                                        <div className="sm:flex sm:items-center sm:justify-between pt-4">
                                            <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                                                <p className="text-sm font-medium text-gray-400">Night</p>
                                                <p className="mt-2 text-5xl font-semibold text-gray-600">3º</p>
                                                <img src={thunder_night} alt="" className="w-3/5"/>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
