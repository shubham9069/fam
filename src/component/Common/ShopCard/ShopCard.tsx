import React from 'react'
import styles from './ShopCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const ShopCard = () => {
  return (
    <div  className={styles["shopcard-wrapper"]}>

        <img src="/shopimage.png" width={100} height={100} alt="no" />
        <div className={styles['shopcard-content']}>
            <span>Gurgaon,haryana,sector 24</span>
            <div className={styles["shopcard-name"]}>
                <img src="http://shubham-store-.metcloud.shop/_next/image?url=https%3A%2F%2Fzalon-staging-file-bkt.s3.ap-south-1.amazonaws.com%2FFILE%2F047a9937-bad9-4cb5-821d-d6982648c25d.png&w=256&q=75"/>
                <h4> Play Ground </h4>
            </div>
            <div className={`${styles["box-container"]} spaceBetween-div`}>
                <div>
                    <span>Status</span>
                    <p><span style={{background:'#27AE60' , borderRadius:'50%',width:10,height:10}}></span>open</p>
                </div>
                <div>
                    <span>Timing</span>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
<path d="M10 2C9.4477 2 9 2.448 9 3C9 3.552 9.4477 4 10 4H11V5.188C7.0733 5.697 4 8.934 4 13C4 17.418 7.5817 21 12 21C16.4183 21 20 17.418 20 13C20 8.934 16.9267 5.698 13 5.188V4H14C14.5523 4 15 3.552 15 3C15 2.448 14.5523 2 14 2H10Z" fill="black" fill-opacity="0.4" stroke="black" stroke-width="0.002" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 7C19.5523 7 20 6.55228 20 6C20 5.44772 19.5523 5 19 5C18.4477 5 18 5.44772 18 6C18 6.55228 18.4477 7 19 7ZM13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V12H9C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H12C12.5523 14 13 13.5523 13 13V10Z" fill="black"/>
</svg>
                        10AM - 8PM</p>
                </div>
                <div>
                    <span>Rating</span>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12" fill="none">
<path d="M8.95944 7.16C8.82994 7.2855 8.77044 7.467 8.79994 7.645L9.24444 10.105C9.28194 10.3135 9.19394 10.5245 9.01944 10.645C8.84844 10.77 8.62094 10.785 8.43444 10.685L6.21994 9.53C6.14294 9.489 6.05744 9.467 5.96994 9.4645H5.83444C5.78744 9.4715 5.74144 9.4865 5.69944 9.5095L3.48444 10.67C3.37494 10.725 3.25094 10.7445 3.12944 10.725C2.83344 10.669 2.63594 10.387 2.68444 10.0895L3.12944 7.6295C3.15894 7.45 3.09944 7.2675 2.96994 7.14L1.16444 5.39C1.01344 5.2435 0.960938 5.0235 1.02994 4.825C1.09694 4.627 1.26794 4.4825 1.47444 4.45L3.95944 4.0895C4.14844 4.07 4.31444 3.955 4.39944 3.785L5.49444 1.54C5.52044 1.49 5.55394 1.444 5.59444 1.405L5.63944 1.37C5.66294 1.344 5.68994 1.3225 5.71994 1.305L5.77444 1.285L5.85944 1.25H6.06994C6.25794 1.2695 6.42344 1.382 6.50994 1.55L7.61944 3.785C7.69944 3.9485 7.85494 4.062 8.03444 4.0895L10.5194 4.45C10.7294 4.48 10.9049 4.625 10.9744 4.825C11.0399 5.0255 10.9834 5.2455 10.8294 5.39L8.95944 7.16Z" fill="#F3B21A"/>
</svg>
4.5</p>
                </div>
            </div>
            <Link href="/shop-details/1" className={styles["view-details"]}>
                <p> View Details</p> 
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path opacity="0.3" d="M10.2013 7.79175H2.1263C1.7013 7.79175 1.41797 8.07508 1.41797 8.50008C1.41797 8.92508 1.7013 9.20841 2.1263 9.20841H10.2013V7.79175Z" fill="#EB5757"/>
<path d="M10.1992 14.1666V2.83325L15.37 8.00408C15.6534 8.28741 15.6534 8.71243 15.37 8.99576L10.1992 14.1666Z" fill="#EB5757"/>
</svg>
                </div>
                </Link>
        </div>
    </div>
  )
}

export default ShopCard