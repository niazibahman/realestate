export default function WriteReview(){
    return(
        <div className="w-full bg-white rounded border border-detailBorder px-10 pb-10 pt-4">
            <h2 className="font-semibold text-textColorH">ثبت دیدگاه</h2>
            <hr className="my-4"/>
            <input type="text" placeholder="عنوان" className="w-full h-14 border border-inputBorder focus:border-sky-400 text-inputText px-3 py-2 transition-all duration-150 ease-in-out outline-none"/>
            <div className="w-full grid grid-cols-2 gap-4 my-4">
                <input type="text" placeholder="نام" className="w-full h-14 border border-inputBorder focus:border-sky-400 text-inputText px-3 py-2 transition-all duration-150 ease-in-out outline-none"/>
                <input type="text" placeholder="ایمیل" className="w-full h-14 border border-inputBorder focus:border-sky-400 text-inputText px-3 py-2 transition-all duration-150 ease-in-out outline-none"/>
            </div>
            <textarea name="review" id="review" placeholder="دیدگاه" rows="8" className="w-full border border-inputBorder focus:border-sky-400 text-inputText px-3 py-2 transition-all duration-150 ease-in-out outline-none"/>
            <button className="w-40 h-12 bg-greenTheme rounded text-center text-white mt-2">ثبت</button>
        </div>
    );
}