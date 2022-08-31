import { Search, SettingsIcon, Circle, VerifiedBadge } from '../Sidebar/İcons';
export default function AllBox() {
    return(
    <>
        <div className="flex items-center space-x-5 p-3 m-3 rounded-full bg-[#202327] text-white focus-within:ring-2 focus-within:ring-primary-search_box_color focus:ring-1">
            <  Search />
            <div>
                <input className="bg-primary-searchbox focus:outline-none bg-transparent w-full" type="text" placeholder="Search Twitter"/>
            </div>
        </div>
        <div className="items-center p-3 m-3 mt-4 bg-[#15181C] rounded-xl">
            <div>
                <div className="tfy flex items-center justify-between text-white">
                    <span className="text-xl text-black font-bold">Trends for you</span>
                    <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 hover:bg-gray-700 hover:bg-opacity-70 cursor-pointer">
                    <SettingsIcon/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}