export default function BackDrop({show , click}){
    return(<div onClick={click} className={` inset-0 z-40 bg-black bg-opacity-50 lg:hidden ${show === true ? "animate-apear fixed" : "animate-fade hidden"}`}/>);
}