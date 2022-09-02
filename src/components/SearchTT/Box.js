import { Search, SettingsIcon, Circle, VerifiedBadge } from '../Sidebar/İcons';
export default function AllBox() {
    return(
    <>
    <div className="flex items-center space-x-5 p-3 m-3 rounded-full bg-primary-search_box text-white focus-within:ring-2 focus-within:ring-primary-search_box_color focus:ring-1">
        <Search />
            <div>
                <input className="bg-primary-searchbox focus:outline-none bg-transparent w-full" type="text" placeholder="Search Twitter"/>
            </div>
    </div>
        <div className="items-center p-3 m-3 mt-4 bg-primary-trends_fy_color rounded-xl">
            <div>
                <div className="tfy flex items-center justify-between text-white">
                    <span className="text-xl font-bold">Trends for you</span>
                    <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 hover:bg-gray-700 hover:bg-opacity-70 cursor-pointer">
                    <SettingsIcon/>
                    </div>
                </div>
                <div className="hover:bg-primary-trends_hover cursor-pointer mb-3">
                <div className="">
                    <div className="flex flex-row items-center category_1">
                        <span className="text-sm text-primary-trends_d_color">Trending in Turkey</span>
                        <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                            <Circle/>
                        </div>
                    </div>
                </div>
                <div className="topic">
                    <div className="text-white font-bold">
                        <span>
                            #Twitter Clone
                        </span>
                    </div>
                </div>
                <div className="TopicCount">
                    <span className="text-primary-trends_d_color">15.8K Tweets</span>
                </div>
            </div>
            <div className="p-4 transform transition-colors duration-2 bg-primary-wigdets_background_color">
            <span className=" text-primary-button">Show more</span>
        </div>
            </div>
        </div>
        </>
    )
}


/**
 * <div className="hover:bg-primary-trends_hover">
            <div className="flex flex-row items-center ">
                <div className="px-4 py-3">
                    <img className="rounded-full h-11 w-11" src="https://avatars.githubusercontent.com/u/50018633?v=4" />
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-white">
                        <span>Eleven <VerifiedBadge/></span>
                    </div>
                    <div className="text-primary-gray_colors">
                        
                    </div>
                </div>
                <div className="flex flex-row ml-auto items-center justify-between rounded-full bg-white px-4 py-1">
                    <span className="font-bold">Follow</span>
                </div>
            </div>
        </div>
 */