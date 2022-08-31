import { Reply, Retweet, Like, Share, VerifiedBadge } from '../Sidebar/İcons';

export default function Tweets(){
    return(
        <>
        <div className="flex space-x-3 px-4 py-3 border-b border-primary-container_border_color">
            <img src="https://avatars.githubusercontent.com/u/110599327?s=48&v=4" className="w-11 h-11 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center text-sm space-x-2">
                <span className="ml-1 font-bold text-black">AdemCan Certel</span>
                </div>
                <div className="ml-1">
                    <p className="items-center text-black overflow-hidden">
                        Details are important; they are worth waiting for to be true.
                        <img className="mt-3 rounded-xl" src="https://images.macrumors.com/article-new/2022/06/M2-MacBook-Air-2022-Feature0012.jpg"/>
                    </p>
                    <ul className="flex justify-between mt-2">
                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Reply/>
                            </div>
                            <span>20</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors2 cursor-pointer">
                                <Retweet/>
                            </div>
                            <span>5</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors3 cursor-pointer">
                                <Like/>
                            </div>
                            <span>9,9K</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Share/>
                            </div>
                            <span>2</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}