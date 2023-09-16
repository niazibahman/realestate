export default function Description({description}){
    return(
        <div className="w-full bg-white rounded border border-detailBorder px-10 pb-10 pt-4">
            <h4 className="font-semibold">توضیحات</h4>
            <hr className="my-2"/>
            <p className="whitespace-pre-line leading-7">{description}</p>
        </div>
    );
}