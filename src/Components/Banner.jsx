import BannerImage from '../assets/banner1.jpg';

function Banner() {
    return (
        <div className="w-full h-[25rem] relative">
            <img 
                className='w-full h-full'
                src={BannerImage}
            />
            <div className='absolute top-10 left-0 right-0 mx-auto w-[20rem]'>
                <div className='flex flex-col gap-4'>
                    <div id="banner" className='font-semibold text-5xl text-white'>
                        Now Track Crypto Currencies
                    </div>
                    <div id="info">
                    <div id="banner1" className='font-semibold text-sm text-white text-center'>
                        Get all information regarding crypto currencies
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;