import React from 'react'
import styles from './ShopListing.module.scss'
import ShopCard from '@/component/Common/ShopCard/ShopCard'

const ShopListing = () => {
  return (
    <div className={`${styles["wrapper"]} padding-2rem`}>

    <div className={styles["tag-container"]}>
        <span className={styles['span-active']}>Near Buy </span>
        <span className={styles['span-inactive']}>Trending 🔥</span>
    </div>

<div className={styles["shoplisting-container"]}>


{[...Array(5)]?.map((elem)=>{


return <ShopCard key={elem} />
})}
   
</div>


    </div>
  )
}

export default ShopListing