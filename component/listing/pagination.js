import { useRouter } from 'next/router';
import {IoArrowBack,IoArrowForward} from 'react-icons/io5';

export default function Pagination({ currentPage, numPages , basePath }){
    const router = useRouter();

    const changePageNumberHandler=(nextPage)=>{
        const sitePath = router.query.slug;
        let nextPageURL=basePath;
        sitePath.map(x=>{
            nextPageURL += "/" + x;
        });
        let key=Object.keys(router.query);
        key=key.slice(0,key.length-1);
        let values=Object.values(router.query);
        values=values.slice(0,values.length-1);
        if(nextPage !== currentPage && nextPage <= numPages && nextPage >= 1){
          if((key.length > 0) && (nextPage !== 1) ){
              nextPageURL=nextPageURL+"?";
              if(key.some(item=>item=="page")){
                  key.map((item,index)=>{
                      if(item === "page"){
                          if(nextPage !== 1){
                              nextPageURL=nextPageURL+item+"="+nextPage.toString()+(index==(key.length-1)?"":"&");
                          }
                      }else{
                          nextPageURL=nextPageURL+item+"="+values[index]+(index==(key.length-1)?"":"&");
                      }
                  });
              }else{
                  nextPageURL=nextPageURL+"page="+nextPage.toString()+"&"
                  key.map((item,index)=>{
                          nextPageURL=nextPageURL+item+"="+values[index]+(index==(key.length-1)?"":"&");
                  });
              }
          }else if(key.length ===0 && nextPage > 1){
              nextPageURL = nextPageURL+ "?" + "page=" + nextPage.toString();
          }else if(key.length > 0 && nextPage === 1){
              if(!(key.length === 1 && (key.some(item=>item=="page")))){
                  nextPageURL=nextPageURL+"?";
              }
              const findPageIndex=key.indexOf("page");
              key.splice(findPageIndex,1);
              values.splice(findPageIndex,1);
              if (key.length>0){
                  key.map((item,index)=>{
                          nextPageURL = nextPageURL + item + "=" + values[index] + (index==(key.length-1)?"":"&");
                  });
              }
          }
          router.push(nextPageURL);
        }
    }

    if(numPages <= 6)
    {
        return(<div className="w-full flex flex-row justify-center items-center my-5">
            <button onClick={()=>changePageNumberHandler(currentPage-1)} disabled={currentPage===1 ?true:false} className='border border-paginationBorder shadow-paginationShadow rounded-sm bg-greenTheme w-8 h-8 mx-2 focus:outline-none flex items-center justify-center'><IoArrowForward color="#fff" fontSize={20}/></button>
        {
            Array.from({length:numPages},(_,index)=><button onClick={()=>changePageNumberHandler(index+1)} className={`border border-paginationBorder shadow-paginationShadow rounded-sm w-8 h-8 hover:bg-greenTheme hover:text-white focus:bg-greenTheme focus:outline-none focus:text-white flex items-center justify-center mx-2 ${currentPage === (index+1)?"text-white bg-greenTheme":"text-paginationBlackText"}`}>{index+1}</button>)
        }
            <button onClick={()=>changePageNumberHandler(currentPage+1)} disabled={currentPage===numPages ?true:false} className={`border border-paginationBorder rounded-sm shadow-paginationShadow bg-paginationForward w-8 h-8 mx-2 focus:outline-none flex items-center justify-center ${currentPage===numPages?"":"hover:bg-greenTheme focus:bg-greenTheme active:bg-greenTheme"}`}><IoArrowBack color="#fff" fontSize={20}/></button>
        </div>);
    }else
    {
        return(<div className="w-full flex flex-row justify-center items-center my-5">
            <button onClick={()=>changePageNumberHandler(currentPage-1)} disabled={currentPage===1 ?true:false} className='border border-paginationBorder shadow-paginationShadow rounded-sm bg-greenTheme w-8 h-8 mx-2 focus:outline-none flex items-center justify-center'><IoArrowForward color="#fff" fontSize={20}/></button>
            {
                currentPage > 3?<button onClick={()=>changePageNumberHandler(1)} className={`border border-paginationBorder shadow-paginationShadow rounded-sm w-8 h-8 mx-2 hover:bg-greenTheme hover:text-white focus:bg-greenTheme focus:outline-none flex items-center justify-center ${currentPage ===1 ?"bg-greenTheme text-white":"text-paginationBlackText"}`}>1</button>:null
            }
            {
                currentPage > 3?<div className='border border-paginationBorder shadow-paginationShadow rounded-sm bg-white text-paginationBlackText hover:bg-greenTheme hover:text-white w-8 h-8 mx-2 focus:outline-none flex items-center justify-center'>...</div>:null
            }
            {
                currentPage <= 3?
                Array.from({length:3},(_,index)=><button onClick={()=>changePageNumberHandler(index+1)} className={`border border-paginationBorder shadow-paginationShadow rounded-sm w-8 h-8 hover:bg-greenTheme hover:text-white focus:bg-greenTheme focus:outline-none focus:text-white flex items-center justify-center mx-2 ${currentPage === (index+1)?"text-white bg-greenTheme":"text-paginationBlackText"}`}>{index+1}</button>)
                :null
            }
            {
                currentPage >3 && (numPages - currentPage) > 2?
                Array.from({length:3},(_,index)=><button onClick={()=>changePageNumberHandler(index+(currentPage-1))} className={`border border-paginationBorder shadow-paginationShadow rounded-sm w-8 h-8 hover:bg-greenTheme hover:text-white focus:bg-greenTheme focus:outline-none focus:text-white flex items-center justify-center mx-2 ${currentPage === (index+(currentPage-1))?"text-white bg-greenTheme":"text-paginationBlackText"}`}>{index+(currentPage-1)}</button>):null
            }
            {
                (numPages - currentPage) <= 2?
                Array.from({length:3},(_,index)=><button onClick={()=>changePageNumberHandler(numPages-(2-index))} className={`border border-paginationBorder shadow-paginationShadow rounded-sm w-8 h-8 hover:bg-greenTheme hover:text-white focus:bg-greenTheme focus:outline-none focus:text-white flex items-center justify-center mx-2 ${currentPage === (numPages-(2-index))?"text-white bg-greenTheme":"text-paginationBlackText"}`}>{numPages-(2-index)}</button>)
                :null
            }
            {
                (numPages - currentPage) > 2? <div className='border border-paginationBorder shadow-paginationShadow rounded-sm bg-white text-paginationBlackText hover:bg-greenTheme hover:text-white w-8 h-8 mx-2 focus:outline-none flex items-center justify-center'>...</div>:null
            }
            {
                (numPages - currentPage) > 2?<button onClick={()=>changePageNumberHandler(numPages)} className={`border border-paginationBorder shadow-paginationShadow rounded-sm w-8 h-8 mx-2 hover:bg-greenTheme hover:text-white focus:bg-greenTheme focus:outline-none flex items-center justify-center ${currentPage===numPages?"bg-greenTheme text-white":"text-paginationBlackText"}`}>{numPages}</button>:null
            }
            <button onClick={()=>changePageNumberHandler(currentPage+1)} disabled={currentPage===numPages ?true:false} className={`border border-paginationBorder rounded-sm shadow-paginationShadow bg-paginationForward w-8 h-8 mx-2 focus:outline-none flex items-center justify-center ${currentPage===numPages?"":"hover:bg-greenTheme focus:bg-greenTheme active:bg-greenTheme"}`}><IoArrowBack color="#fff" fontSize={20}/></button>
        </div>);
    }
}