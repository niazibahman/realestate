import Image from "next/image";

export default function Review(){
    return(
        <div className="w-full bg-white rounded border border-detailBorder px-10 pb-10 pt-4">
            <h2 className="font-semibold text-textColorH">دیدگاه ها</h2>
            <hr className="my-4"/>
            <div className="flex flex-row">
                <div>
                    <Image src="/user-1.jpg" alt="user 1" width={110} height={110} className="rounded-full"/>
                </div>
                <div className="w-full flex flex-col mr-4">
                    <h3 className="font-semibold text-textColorH text-lg">علی اکبر مدیری</h3>
                    <span className="font-medium text-xs text-greenTheme mt-2">2 اردیبهشت 1401</span>
                    <p className="mr-4 text-textColorBase mt-5">ملک خوبیه و همسایه های خوبی هم داره </p>
                </div>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-row">
                <div>
                    <Image src="/user-2.jpg" alt="user 1" width={110} height={110} className="rounded-full"/>
                </div>
                <div className="w-full flex flex-col mr-4">
                    <h3 className="font-semibold text-textColorH text-lg">علی اکبر مدیری</h3>
                    <span className="font-medium text-xs text-greenTheme mt-2">2 اردیبهشت 1401</span>
                    <p className="mr-4 text-textColorBase mt-5">ملک خوبیه و همسایه های خوبی هم داره </p>
                </div>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-row">
                <div>
                    <Image src="/user-3.jpg" alt="user 1" width={110} height={110} className="rounded-full"/>
                </div>
                <div className="w-full flex flex-col mr-4">
                    <h3 className="font-semibold text-textColorH text-lg">علی اکبر مدیری</h3>
                    <span className="font-medium text-xs text-greenTheme mt-2">2 اردیبهشت 1401</span>
                    <p className="mr-4 text-textColorBase mt-5">ملک خوبیه و همسایه های خوبی هم داره </p>
                </div>
            </div>
        </div>
    );
}