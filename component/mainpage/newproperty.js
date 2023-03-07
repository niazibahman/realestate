import 'react-slideshow-image/dist/styles.css'
import NewPropertyCard from './newpropertycard/newpropertycard'

export default function NewProperty(){
    const image=["/p-1.webp","/p-2.webp","/p-4.webp"]
    
    return(
    <section className="w-full h-auto overflow-hidden bg-white">
        <div className="w-full h-auto px-6  sm:px-0 sm:container mx-auto flex flex-col items-center py-8">
            <h2 className="text-2xl font-bold text-textColorH">آگهی های جدید و ویژه</h2>
            <p className="text-base md:text-xl mt-1">ملک مورد نظر خود را در منطقه دلخواه خود پیدا کنید</p>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                <div className="col-span-1 h-auto rounded-lg bg-white shadow-radika flex flex-col items-center">
                    <NewPropertyCard title={'آپارتمان 60 متری در ونک'} price={"1,800,000,000"} image={["/p-1.webp","/p-2.webp","/p-4.webp"]}/>
                </div>
                <div className="col-span-1 h-auto rounded-lg bg-white shadow-radika flex flex-col items-center">
                    <NewPropertyCard title={'آپارتمان 120 متری در پردیس'} price={"1,450,000,000"} image={["/p-5.webp","/p-6.webp","/p-7.webp"]}/> 
                </div>
                <div className="col-span-1 h-auto rounded-lg bg-white shadow-radika flex flex-col items-center">
                    <NewPropertyCard title={'دفتر کار لوکس در زعفرانیه'} price={"3,600,000,000"} image={["/p-18.webp","/p-9.webp","/p-12.webp"]}/> 
                </div>
                <div className="col-span-1 h-auto rounded-lg bg-white shadow-radika flex flex-col items-center">
                    <NewPropertyCard title={'خانه دو طبقه دوبلکس'} price={"750,000,000"} image={["/p-16.webp","/p-13.webp","/p-11.webp"]}/> 
                </div>
                <div className="col-span-1 h-auto rounded-lg bg-white shadow-radika flex flex-col items-center">
                    <NewPropertyCard title={'آپارتمان لاکچری در جردن'} price={"900,000,000"} image={["/p-15.webp","/p-17.webp","/p-14.webp"]}/> 
                </div>
                <div className="col-span-1 h-auto rounded-lg bg-white shadow-radika flex flex-col items-center">
                    <NewPropertyCard title={'ویلا 300 متری نیاوران'} price={"4,000,000,000"} image={["/p-8.webp","/p-9.webp","/p-10.webp"]}/> 
                </div>
            </div>
        </div>
    </section>
    );
}
