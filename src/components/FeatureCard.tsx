import React from 'react'

const FeatureCard = ({ feature, iconMapping }: { feature: any, iconMapping: any }) => {
    return (
        <div key={feature.title} className="z-[1] relative text-center p-2 md:p-6 bg-white rounded-lg shadow">
            <div
                className={`w-8 h-8 md:w-12  md:h-12 flex items-center justify-center bg-gradient-to-b from-white ${feature.color} rounded-full absolute right-1/2 translate-x-1/2 -translate-y-1/2 -top-2 shadow-md`}
            >
                {React.createElement(iconMapping[feature.icon], { className: 'w-4 h-4 md:w-6 md:h-6' })}
            </div>
            <h3 className="text-base md:text-2xl font-bold text-black">{feature.title}</h3>
            <p className="mt-1 md:mt-4 text-gray-600 text-[10px] md:text-base">{feature.description}</p>
        </div>
    )
}

export default FeatureCard