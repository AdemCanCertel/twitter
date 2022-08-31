import { TopTIcon } from '../Sidebar/İcons';
import TweetBox from '../TweetBox/TweetBox';
import Tweets from '../Tweets/Tweets';

export default function ContainerPage() {
    return(
        <>
            <header className="sticky-top flex justify-between items-center p-4 border-b border-[#2F3336] bg-white">
                <span className="font-bold text-xl text-black">Home</span>
                <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 hover:bg-gray-700 hover:bg-opacity-70 cursor-pointer">
                    <a title="Top Tweets">
                        <TopTIcon/>
                    </a>
                </div>
            </header>
            <div className="flex space-x-4 px-5 py-2 border-b border-[#2F3336]">
                <img className="rounded-full h-11 w-11 mt-1" src="https://avatars.githubusercontent.com/u/110599327?s=48&v=4"/>
                <TweetBox/>
            </div>
            <div>
                <Tweets/>
            </div>
        </>
    )
}