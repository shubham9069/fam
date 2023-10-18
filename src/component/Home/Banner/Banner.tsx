import React from 'react'
import styles from './Banner.module.scss'

const Banner = ({ShopData}:any) => {
  return (
    <div className={`${styles["images"]} padding-2rem `}>

<img id={styles["img1"]} src={ShopData?.bannerURL} />
{ShopData?.images?.map((img:any,i:any)=>{

  return <img id={styles[`img${2+i}`]} src={img} />
})}




    </div>
//     <div className={`${styles["banner-wrapper"]} padding-2rem `} style={{background:`url(https://moaapi.net/sites/default/files/2023-02/priness-and-diva-spa-web-size-hero.jpg) no-repeat center `}}>
//         {/* <div className='move-animation'>

//     {[...Array(4)]?.map((item,index)=>{

//         return  <div className="golden-dot" style={{animationDelay: `${index+1}s`}}></div>
//     })}
       
//         </div> */}
//         <div className='center-div'>
//       <h1>Get GOLD at a </h1>
//         <span> Full </span>
//         <h1>Discount Price </h1>
//         </div>

//         <p className={styles["sub-heading"]}>Pay your <strong>next</strong> Dining Bill and Get Gold <strong>At Just  ₹ 99</strong> Check out the list of all the best dining restaurant</p>
          
//             <button className={styles["banner-button"]}>Book Event 
//             <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
// <path opacity="0.3" d="M10.2013 7.79199H2.1263C1.7013 7.79199 1.41797 8.07533 1.41797 8.50033C1.41797 8.92533 1.7013 9.20866 2.1263 9.20866H10.2013V7.79199Z" fill="white"/>
// <path d="M10.1992 14.1663V2.83301L15.37 8.00383C15.6534 8.28717 15.6534 8.71218 15.37 8.99552L10.1992 14.1663Z" fill="white"/>
// </svg>
//             </button>

//     </div>
  )
}

export default Banner