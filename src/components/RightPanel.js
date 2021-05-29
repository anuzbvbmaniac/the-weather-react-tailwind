import React from 'react';
import cloudy_sunny from "../assets/img/weather/cloudy_sunny.png";
import sunny from "../assets/img/weather/sunny.png";
import sunny_windy from "../assets/img/weather/sunny_windy.png";
import thunder_night from "../assets/img/weather/thunder_night.png";

const RightPanel = () => {
    return (
        <div>
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

                    <div className="grid grid-cols-4 gap-2">

                        <div className="pt-4">
                            <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                                <p className="text-sm font-medium text-gray-400">Morning</p>
                                <p className="mt-2 text-5xl font-semibold text-gray-600">10º</p>
                                <img src={cloudy_sunny} alt="" className="w-3/5"/>
                            </div>
                        </div>

                        <div className="pt-4">
                            <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                                <p className="text-sm font-medium text-gray-400">Afternoon</p>
                                <p className="mt-2 text-5xl font-semibold text-gray-600">12º</p>
                                <img src={sunny} alt="" className="w-3/5"/>
                            </div>
                        </div>

                        <div className="pt-4">
                            <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                                <p className="text-sm font-medium text-gray-400">Evening</p>
                                <p className="mt-2 text-5xl font-semibold text-gray-600">6º</p>
                                <img src={sunny_windy} alt="" className="w-3/5"/>
                            </div>
                        </div>

                        <div className="pt-4">
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
    );
};

export default RightPanel;
