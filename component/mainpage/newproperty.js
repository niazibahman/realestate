import 'react-slideshow-image/dist/styles.css'
import NewPropertyCard from './newpropertycard/newpropertycard'

export default function NewProperty({properties}){
    const image=["/p-1.webp","/p-2.webp","/p-4.webp"]
    
    return(
    <section className="w-full h-auto overflow-hidden bg-white">
        <div className="w-full h-auto px-6  sm:px-0 sm:container mx-auto flex flex-col items-center py-8">
            <h2 className="text-2xl font-bold text-textColorH">آگهی های جدید و ویژه</h2>
            <p className="text-base md:text-xl mt-1">ملک مورد نظر خود را در منطقه دلخواه خود پیدا کنید</p>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {
                    properties.map((x)=><div className="col-span-1 h-auto rounded-lg bg-white shadow-radika flex flex-col items-center">
                    <NewPropertyCard property={x}/>
                </div>)
                }
            </div>
        </div>
    </section>
    );
}
