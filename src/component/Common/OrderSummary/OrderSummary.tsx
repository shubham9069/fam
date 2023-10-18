import React from 'react'
import styles from './OrderSummary.module.scss'

const OrderSummary = () => {
  return (
    <div className={styles["order-summary-wrapper"]}>

 <div className={`center-div coupon-section`} style={{gap:15,justifyContent:"flex-start"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
<path opacity="0.25" d="M21 5C22.1046 5 23 5.89543 23 7L23 7.76392C23 8.52147 22.5511 9.20363 22.0131 9.73696C21.5088 10.2369 21 10.9913 21 12C21 13.0087 21.5088 13.7631 22.0131 14.263C22.5511 14.7964 23 15.4785 23 16.2361L23 17C23 18.1046 22.1046 19 21 19L3 19C1.89543 19 0.999999 18.1046 0.999999 17L1 16.2361C1 15.4785 1.44892 14.7964 1.98692 14.263C2.49124 13.7631 3 13.0087 3 12C3 10.9913 2.49124 10.2369 1.98692 9.73696C1.44892 9.20362 1 8.52147 1 7.76392L1 7.00002C1 5.89545 1.89543 5.00002 3 5.00002L21 5Z" fill="red"/>
<path d="M14.7071 10.7071L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071C8.90237 14.3166 8.90237 13.6834 9.29289 13.2929L13.2929 9.29289C13.6834 8.90237 14.3166 8.90237 14.7071 9.29289C15.0976 9.68342 15.0976 10.3166 14.7071 10.7071Z" fill="#12131A"/>
<path d="M11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z" fill="#12131A"/>
<path d="M13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14Z" fill="#12131A"/>
</svg>
<h5 style={{whiteSpace:'nowrap'}}>
upto 10% off  <br />
<span className="grey-text" style={{color:"green"}}>Coupon has been applied </span> 

</h5>
 </div>

<h1 >Booking Summary</h1>

<div className={styles["markup-price"]}>
    <h4 >Booking Charge
        <br/>
        <span className='grey-text' style={{color:'#1f8deb'}}> Reedam your final bill from shop </span>
    </h4>
    <h4>₹299/-</h4>
</div>
<div className={styles["markup-price"]}>
    <h4 >Discount</h4>
    <h4>₹99/-</h4>
</div>
<div className={styles["markup-price"]}>
    <h4 >GST 18%</h4>
    <h4>₹26.8/-</h4>
</div>

<div className={styles["total-price"]}>
    <h3 >To Be Paid</h3>
    <h3>₹455.90/-</h3>
</div>
    </div>
  )
}

export default OrderSummary