import FeatureAdCard from "./featureAdCard";

export default function FeaturedProperty({sellProperty,rentProperty}){
    return(
        <div className="w-full">
            <h4 className="text-xl text-textColorH font-semibold mb-2">املاک ویژه</h4>
            {
                sellProperty.map((x,index)=><FeatureAdCard key={index} property={x}/>)
            }
            {
                rentProperty.map((x,index)=><FeatureAdCard key={index} property={x}/>)
            }
        </div>
    );
}