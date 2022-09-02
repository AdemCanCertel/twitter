import { Reply, Retweet, Like, Share, VerifiedBadge } from '../Sidebar/İcons';

export default function Tweets(){
    return(
        <>
        <div className="flex space-x-3 px-4 py-3 border-b border-primary-container_border_color">
            <img src="https://pbs.twimg.com/profile_images/1559300390977507330/Bq5EzTJv_400x400.jpg" className="w-11 h-11 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center text-sm space-x-2">
                <span className="ml-1 font-bold text-white">AdemCan Certel <VerifiedBadge/></span>
                <span className="ml-2 text-primary-gray_colors">@CertelAdemcan</span>
                <div className="mx-2 text-primary-gray_colors">·</div>
                <span className="text-primary-gray_colors">49m</span>
                </div>
                <div className="ml-1">
                    <p className="items-center text-white overflow-hidden">
                        Details are important; they are worth waiting for to be true.
                        <img className="mt-3 rounded-xl" src="https://i2.milimaj.com/i/milliyet/75/0x410/5d6576d6554281214c076887.jpg"/>
                    </p>
                    <ul className="flex justify-between mt-2">
                        <li className="flex items-center text-sm space-x-0 text-primary-gray_colors hover:text-primary-reply group cursor-pointer">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-reply_hover">
                                <Reply/>
                            </div>
                            <span>59</span>
                        </li>

                        <li className="flex items-center text-sm space-x-0 text-primary-gray_colors hover:text-primary-retweet group cursor-pointer">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primay-retweet_hover cursor-pointer">
                                <Retweet/>
                            </div>
                            <span>158</span>
                        </li>

                        <li className="flex items-center text-sm space-x-0 text-primary-gray_colors hover:text-primary-like group cursor-pointer">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-like_hover cursor-pointer">
                                <Like/>
                            </div>
                            <span>176</span>
                        </li>

                        <li className="flex items-center text-sm space-x-0 text-primary-gray_colors group cursor-pointer">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Share/>
                            </div>
                            <span></span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}