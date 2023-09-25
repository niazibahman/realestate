import Image from "next/image";
import Link from "next/link";

export default function Error404(){
    return(
        <div className="w-screen py-20 px-4">
            <div className="w-full max-w-lg mx-auto flex flex-col">
                <div className="w-full h-104 relative flex flex-col items-center justify-center">
                    <p className="text-gray-700 text-4xl font-black z-10">صفحه مورد نظر یافت نشد</p>
                    <div className="absolute inset-0">
                        <Image src="/404.png" alt="404" width={0} height={0} sizes='100vw' className="w-full h-full"/>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <Link href={"/"} className="w-48 h-12 bg-greenTheme text-white rounded text-center flex flex-col justify-center items-center"><p>بازگشت به صفحه اصلی</p></Link>
                </div>
            </div>
        </div>
    );
}