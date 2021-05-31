import React from 'react';
import InformationPanel from "../components/InformationPanel";
import ExtraInformation from "../components/ExtraInformation";

const Hourly = () => {
    return (
        <div className="mx-auto lg:max-w-7xl">
            <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-6 lg:gap-8">

                {/* Left column */}
                <div className="grid grid-cols-1 gap-4 lg:col-span-3">
                    {/* Current information panel */}
                    <InformationPanel/>
                </div>

                {/* Right column */}
                <div className="grid lg:col-span-3">
                    {/*  Extra Information panel  */}
                    <ExtraInformation/>
                </div>
            </div>
        </div>
    );
};

export default Hourly;
