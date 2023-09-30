import Image from "next/image";

export default function OurStory(){
    return(
        <section className="w-full bg-white">
            <div className="w-full py-20 sm:container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="col-span-1 px-4">
                    <Image src="/our-story.png" alt="our story" width={0} height={0} sizes='100vw' className="w-full max-h-120 object-contain"/>
                </div>
                <div className="col-span-1 px-4 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold text-textColorH">داستان ما</h2>
                </div>
            </div>
        </section>
    );
}