export default function NearbyPlace(){
    return(
        <div className="w-full bg-white rounded border border-detailBorder text-nearbyText px-10 pb-10 pt-4">
            <h2 className="font-semibold text-textColorH">اماکن نزدیک</h2>
            <hr className="my-4"/>
            <h3 className="text-lg font-semibold text-textColorH mb-2">مدارس</h3>
            <div className="w-full flex flex-row items-center justify-between">
                <h4>دبیرستان شریعتی</h4>
                <div className="flex flex-row items-center">
                    <span className="p-1 ml-1 rounded text-center text-sm bg-greenTheme text-white w-12">4.2 ✩</span>
                    <span className="text-sm">km 2.5</span>
                </div>
            </div>
            <hr className="my-4"/>
            <div className="w-full flex flex-row items-center justify-between">
                <h4>دبستان هما</h4>
                <div className="flex flex-row items-center">
                    <span className="p-1 ml-1 rounded text-center text-sm bg-amber-500 text-white w-12">4.3 ✩</span>
                    <span className="text-sm">km 2.5</span>
                </div>
            </div>
            <hr className="my-4"/>
            <div className="w-full flex flex-row items-center justify-between">
                <h4>پیش دبستانی آلاله</h4>
                <div className="flex flex-row items-center">
                    <span className="p-1 ml-1 rounded text-center text-sm bg-detail_tag text-white w-12">4.1 ✩</span>
                    <span className="text-sm">km 2.5</span>
                </div>
            </div>
            <h3 className="text-lg font-semibold text-textColorH mb-2 mt-8">هتل و رستوران</h3>
            <div className="w-full flex flex-row items-center justify-between">
                <h4>گراند هتل</h4>
                <div className="flex flex-row items-center">
                    <span className="p-1 ml-1 rounded text-center text-sm bg-rose-500 text-white w-12">3.9 ✩</span>
                    <span className="text-sm">km 2.5</span>
                </div>
            </div>
            <hr className="my-4"/>
            <div className="w-full flex flex-row items-center justify-between">
                <h4>رستوران گلها</h4>
                <div className="flex flex-row items-center">
                    <span className="p-1 ml-1 rounded text-center text-sm bg-detail_tag text-white w-12">4.0 ✩</span>
                    <span className="text-sm">km 2.5</span>
                </div>
            </div>
        </div>
    );
}