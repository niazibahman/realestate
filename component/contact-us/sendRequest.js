export default function SendRequest(){
    return(
        <div className="col-span-1 md:col-span-7 px-4 flex flex-col">
            <div className="w-full grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1 flex flex-col mb-4">
                    <label htmlFor="" className="text-textColorBase mb-2">نام</label>
                    <input type="text" className="w-full h-14 px-3 py-2 rounded bg-contactUSInput border border-contactUSInput outline-none"/>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col mb-4">
                    <label htmlFor="" className="text-textColorBase mb-2">ایمیل</label>
                    <input type="text" className="w-full h-14 px-3 py-2 rounded bg-contactUSInput border border-contactUSInput outline-none"/>
                </div>
            </div>
            <div className="w-full flex flex-col mb-4">
                <label htmlFor="" className="text-textColorBase mb-2">موضوع</label>
                <input type="text" className="w-full h-14 px-3 py-2 rounded bg-contactUSInput border border-contactUSInput outline-none"/>
            </div>
            <div className="w-full flex flex-col mb-4">
                <label htmlFor="" className="text-textColorBase mb-2">پیام</label>
                <textarea name="" id="" rows="8" className="w-full h-48 px-3 py-2 rounded bg-contactUSInput border border-contactUSInput outline-none"/>
            </div>
            <div className="w-full mb-4">
                <button className="w-40 h-12 px-6 py-3 bg-greenTheme rounded outline-none text-white mb-1">ارسال</button>
            </div>
        </div>
    );
}