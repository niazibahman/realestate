export default function Description({description}){
    return(
        <div className="w-full bg-white rounded border border-detailBorder px-10 pb-10 pt-4">
            <h2 className="font-semibold text-textColorH">توضیحات</h2>
            <hr className="my-4"/>
            <p className="whitespace-pre-line leading-7 text-textColorBase">{description}</p>
        </div>
    );
}