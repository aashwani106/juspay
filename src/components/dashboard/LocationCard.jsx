import WorldMap from './WorldMap';

const LocationItem = ({ city, value, percentage }) => (
    <div className="mb-3 last:mb-0">
        <div className="flex items-center justify-between mb-1 text-sm">
            <span className="text-gray-900 dark:text-white font-medium">{city}</span>
            <span className="text-gray-900 dark:text-white font-medium">{value}K</span>
        </div>
        <div className="w-full h-1 bg-blue-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
                className="h-full bg-blue-400 rounded-full"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);

const LocationCard = () => {
    return (
        <div className="bg-[#F7F9FB] dark:bg-[#262626] p-5 rounded-2xl h-full transition-colors duration-300 flex flex-col">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Revenue by Location</h3>

            <div className="mb-4 relative h-32 w-full flex items-center justify-center">
                <WorldMap className="w-full h-full text-blue-200 dark:text-gray-600" />
                {/* Dots for locations */}
                <div className="absolute top-[28%] left-[22%] w-2 h-2 bg-gray-900 dark:bg-white rounded-full border-2 border-white dark:border-gray-900 shadow-sm"></div> {/* New York approx */}
                <div className="absolute top-[32%] left-[15%] w-2 h-2 bg-gray-900 dark:bg-white rounded-full border-2 border-white dark:border-gray-900 shadow-sm"></div> {/* SF approx */}
                <div className="absolute top-[75%] left-[85%] w-2 h-2 bg-gray-900 dark:bg-white rounded-full border-2 border-white dark:border-gray-900 shadow-sm"></div> {/* Sydney approx */}
                <div className="absolute top-[55%] left-[72%] w-2 h-2 bg-gray-900 dark:bg-white rounded-full border-2 border-white dark:border-gray-900 shadow-sm"></div> {/* Singapore approx */}
            </div>

            <div className="mt-auto flex flex-col justify-between flex-1">
                <LocationItem city="New York" value={72} percentage={72} />
                <LocationItem city="San Francisco" value={39} percentage={39} />
                <LocationItem city="Sydney" value={25} percentage={25} />
                <LocationItem city="Singapore" value={61} percentage={61} />
            </div>
        </div>
    );
};

export default LocationCard;
