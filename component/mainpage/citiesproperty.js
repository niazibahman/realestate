import Image from "next/image";

export default function CitiesProperty({countAds}){
    return(
    <section className="w-full h-auto bg-grayBackground">
        <div className="w-full h-auto px-6  sm:px-0 sm:container mx-auto flex flex-col items-center py-16">
            <h2 className="text-2xl font-bold text-textColorH">شهرهای پربازدید</h2>
            <p className="text-base md:text-xl mt-1">بهترین املاک در بهترین نقاط در شهرهای مختلف ایران</p>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
                <div className="col-span-1 md:col-span-2 h-96 relative rounded-lg overflow-hidden">
                    <Image src="/tehran.webp" alt="املاک شهر تهران" width={0} height={0} sizes='100vw' className="w-full h-full object-cover"/>
                    <div className="w-full h-2/3 absolute right-0 left-0 bottom-0 bg-gradient-to-b from-transparent to-searchbox_bg opacity-70"></div>
                    <div className="absolute bottom-0 right-0 left-0 w-full h-1/2 bg-transparent flex flex-col justify-end pb-10 px-10 text-white">
                        <p className="font-semibold mb-4 text-xl">تهران</p>
                        <p>{countAds[0]} آگهی</p>
                    </div>
                </div>
                <div className="col-span-1 h-96 relative rounded-lg overflow-hidden">
                    <Image src="/tabriz.webp" alt="املاک شهر تبریز" width={0} height={0} sizes='100vw' className="w-full h-full object-cover"/>
                    <div className="w-full h-2/3 absolute right-0 left-0 bottom-0 bg-gradient-to-b from-transparent to-searchbox_bg opacity-70"></div>
                    <div className="absolute bottom-0 right-0 left-0 w-full h-1/2 bg-transparent flex flex-col justify-end pb-10 px-10 text-white">
                        <p className="font-semibold mb-4 text-xl">تبریز</p>
                        <p>{countAds[1]} آگهی</p>
                    </div>
                </div>
                <div className="col-span-1 h-96 relative rounded-lg overflow-hidden">
                    <Image src="/ahvaz.webp" alt="املاک شهر اهواز" width={0} height={0} sizes='100vw' className="w-full h-full object-cover"/>
                    <div className="w-full h-2/3 absolute right-0 left-0 bottom-0 bg-gradient-to-b from-transparent to-searchbox_bg opacity-70"></div>
                    <div className="absolute bottom-0 right-0 left-0 w-full h-1/2 bg-transparent flex flex-col justify-end pb-10 px-10 text-white">
                        <p className="font-semibold mb-4 text-xl">اهواز</p>
                        <p>{countAds[2]} آگهی</p>
                    </div>
                </div>
                <div className="col-span-1 h-96 relative rounded-lg overflow-hidden">
                    <Image src="/shiraz.webp" alt="املاک شهر شیراز" width={0} height={0} sizes='100vw' className="w-full h-full object-cover"/>
                    <div className="w-full h-2/3 absolute right-0 left-0 bottom-0 bg-gradient-to-b from-transparent to-searchbox_bg opacity-70"></div>
                    <div className="absolute bottom-0 right-0 left-0 w-full h-1/2 bg-transparent flex flex-col justify-end pb-10 px-10 text-white">
                        <p className="font-semibold mb-4 text-xl">شیراز</p>
                        <p>{countAds[3]} آگهی</p>
                    </div>
                </div>
                <div className="col-span-1 h-96 relative rounded-lg overflow-hidden">
                    <Image src="/hamedan.webp" alt="املاک شهر همدان" width={0} height={0} sizes='100vw' className="w-full h-full object-cover"/>
                    <div className="w-full h-2/3 absolute right-0 left-0 bottom-0 bg-gradient-to-b from-transparent to-searchbox_bg opacity-70"></div>
                    <div className="absolute bottom-0 right-0 left-0 w-full h-1/2 bg-transparent flex flex-col justify-end pb-10 px-10 text-white">
                        <p className="font-semibold mb-4 text-xl">همدان</p>
                        <p>{countAds[4]} آگهی</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}