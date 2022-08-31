import React from 'react';
import { TwitterIcon, HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, BookMarksIcon, ListIcon, ProfileIcon, MoreIcon } from './İcons';

export default function SideBar() {
    return (
        <>

            <div className="flex flex-col w-275 justify-between px-3 bg-white">
                <div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full transform transition-colors duration-2 hover:bg-[#2F3336] hover:bg-opacity-70 mt-1 mb-5 cursor-pointer">
                        <TwitterIcon />
                    </div>
                    <nav className="mb-5">
                        <ul>
                            <a href="">
                                <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                                    <HomeIcon />
                                    <li className="ml-4 sidebar-text-bold font-bold">Home</li>
                                </div>
                            </a>
                            <a href="">
                                <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                                    <ExploreIcon />
                                    <li className="ml-4 sidebar-text font-regular">Explore</li>
                                </div>
                            </a>
                            <a href="">
                                <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                                    <NotificationsIcon />
                                    <li className="ml-4 sidebar-text font-regular">Notification</li>
                                </div>
                            </a>
                            <a href="">
                                <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                                    <MessagesIcon />
                                    <li className="ml-4 sidebar-text font-regular">Messages</li>
                                </div>
                            </a>
                            <a href="">
                                <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                                    <BookMarksIcon />
                                    <li className="ml-4 sidebar-text font-regular">Bookmarks</li>
                                </div>
                            </a>
                            <a href="">
                                <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                                    <ListIcon />
                                    <li className="ml-4 sidebar-text font-regular">Lists</li>
                                </div>
                            </a>
                            <a href="">
                                <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                                    <ProfileIcon />
                                    <li className="ml-4 sidebar-text font-regular">Profile</li>
                                </div>
                            </a>
                            <a href="">
                                <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                                    <MoreIcon />
                                    <li className="ml-4 sidebar-text font-regular">More</li>
                                </div>
                            </a>
                        </ul>
                    </nav>
                    <button className="bg-blue-500 text-black rounded-full shadow-lg py-3 px-8 w-90 transform transition-colors duration-500 font-bold sidebar-text-bold">
                        Tweet
                    </button>
                    <div className="flex justify-between items-center mb-7 mt-6 hover:bg-[#161616] hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                        <div className="h-11 w-11">
                            <img className="rounded-full" src="https://avatars.githubusercontent.com/u/110599327?s=48&v=4" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-md text-black">Adem Can Certel</span>
                            <span className="text-[#697077] text-sm">@ademcancertell</span>
                        </div>

                        <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-white rounded-full" />
                            <div className="w-1 h-1 bg-white rounded-full" />
                            <div className="w-1 h-1 bg-white rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}