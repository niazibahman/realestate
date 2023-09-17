import Image from "next/image";

export default function Facility({title}){
    return(
        <div className="w-full flex flex-row items-center ">
            <div className="flex flex-col justify-center items-center rounded-full bg-greenTheme bg-opacity-10 p-0.5"><Image src="/svg/check.svg" alt="check" width={15} height={15}/></div>
            <span className="mr-2">{title}</span>
        </div>
    );
}