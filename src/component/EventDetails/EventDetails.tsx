import React,{useState,useContext} from 'react'
import styles from './EventDetails.module.scss'
import Modal from '../Common/Modal/Modal'
import UserContext from '@/context/UserContext';
import { useRouter } from 'next/router';

const EventDetails = ({eventData}:any) => {
  const router = useRouter()
  const [show,setShow] = useState(false);
  const {user,setBookingPayLoad,setBookingDetails}:any = useContext(UserContext)
  const [EventBooking,setEventBooking] = useState<any>({
    selectedTicket:{},
    totalSeat:1
  })


  const ButtonFuc = ()=>{
    let payload ={
      "customer": {
          "id": user?._id,
          "name": user?.firstName,
          "mobile": user?.mobile?.number,
          "type":"ONLINE"
      },
      "status": "COMPLETED",
      "shop_id": "652d31286731fb324143cd41",
      "original_sale": null,
      "line_items": [
       eventData ,EventBooking?.selectedTicket
            ],
      "payment_details": {
          "extra_charges": 0,
          "tip_amount": 0,
          "total_subtotal": 0,
          "total_amount": 299,
          "total_change": 0,
          "total_tax": null,
          "balance": 0,
          "total_discount": 0,
          "total_taxable_amount": null,
          "transactions": [
              {
                  "payment_mode": "CASH",
                  "amount": 299,
                  "resource_id": "-"
              }
          ]
      },
      "created_by": "649ac222f2da1320faac7742",
      "created_by_user": "Mrunal Tupe"
  }

  setBookingDetails({...eventData,type:"event"})
  setBookingPayLoad(payload)
  router.push('/checkout')
}


function selectTicket(ticket:any){
  setEventBooking({["selectedTicket"]:ticket})
  setShow(true)

}

  function randomColor(){
    const colorPlatte=[   'red', 'blue', 'purple', 'pink', 'yellow',
    'green', 'orange', 'brown', '#8E603B', '#D18B47'];

    return colorPlatte[Math.round(Math.random()*10)]
}
  return (
    <div className={`${styles['event-details']} padding-2rem`}>

      <div className={styles["top-section"]}>
    

    {/* left  */}
      <div className={styles['left']}>

      <img src={eventData?.images[0]} />
      {/* about section  */}
      <div className={styles["about"]}>
        <h2>Abouts </h2>
        <p>{eventData?.description}</p>
      </div>

      {/* terms & condition  */}
      <div className={styles["about"]}>
        <h2>Terms & Condition</h2>
        <p>What do you get when you put scrumptious food and jaw-dropping entertainment together? India’s grandest carnival!

Zomaland by Zomato is back - BIGGER, BETTER, and GRANDER! Get ready to step into the grandest foodie’s paradise, filled with the best of food &amp; drinks. Munch on delectable culinary delights and celebrate with the most exciting musical acts & comedians from across the country. Enter an ‘Instagrammable’ dream studded with experiential wonders across every corner and get ready to indulge in a weekend spectacle headlined by the best of food, entertainment, games and a whole lot more!</p>
      </div>

      </div>

      {/* rigth  */}
      <div className={styles['right']}>
        {/* first div  */}
        <div > 
        <h1>{eventData?.name} </h1>
    <div className={styles["icon-section"]}>
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.86772 1.09399H12.1773C13.1793 1.09399 14 1.8863 14 2.84628V14.7306C14 15.5316 13.4747 16.094 12.7593 16.094C12.4131 16.094 12.0908 15.9579 11.7975 15.7158L8.09161 12.6643C8.08867 12.6619 8.06217 12.6531 8.02796 12.6531C8.0165 12.6531 8.00588 12.6541 7.99667 12.6555L7.96295 12.6651L4.24659 15.7157C3.95542 15.9562 3.61666 16.094 3.27026 16.094C2.87019 16.094 2.49709 15.9072 2.26744 15.5886C2.09267 15.346 2 15.051 2 14.7305V2.84628C2 1.88762 2.86383 1.09399 3.86772 1.09399ZM12.1792 2.2478H3.86955C3.51157 2.2478 3.19531 2.53836 3.19531 2.84624V14.7305C3.19531 14.8188 3.21555 14.8832 3.2485 14.9289C3.25409 14.9367 3.26093 14.9401 3.27209 14.9401C3.31322 14.9401 3.38574 14.9106 3.47462 14.8372L7.19099 11.7866C7.41788 11.5993 7.7208 11.4992 8.0298 11.4992C8.33882 11.4992 8.64138 11.5993 8.86789 11.7864L12.5737 14.8378C12.6668 14.9146 12.7272 14.9401 12.7612 14.9401C12.7887 14.9401 12.8084 14.9191 12.8084 14.7305V2.84624C12.8084 2.5239 12.5224 2.2478 12.1792 2.2478Z" fill="#0C172F"></path><path d="M3.64453 5.59389H13.3588" stroke="#0C172F" stroke-linecap="square"></path></svg>
    <p>{eventData?.categories}</p>

    </div>
    <div className={styles["icon-section"]}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.6 2.35278H13.6C14.4837 2.35278 15.2 3.02699 15.2 3.85867V14.2116C15.2 15.0433 14.4837 15.7175 13.6 15.7175H2.6C1.71634 15.7175 1 15.0433 1 14.2116V3.85867C1 3.02699 1.71634 2.35278 2.6 2.35278ZM13.6 3.4822H2.6C2.37909 3.4822 2.2 3.65075 2.2 3.85867V14.2116C2.2 14.4195 2.37909 14.5881 2.6 14.5881H13.6C13.8209 14.5881 14 14.4195 14 14.2116V3.85867C14 3.65075 13.8209 3.4822 13.6 3.4822Z" fill="#0C172F"></path><rect x="4" y="1.41162" width="1" height="2.82353" rx="0.5" fill="#0C172F"></rect><rect x="11" y="1.41162" width="1" height="2.82353" rx="0.5" fill="#0C172F"></rect><path d="M15.0984 6.02344V7.15285H1.89844V6.02344H15.0984Z" fill="#0C172F"></path></svg>
    <p>{eventData?.event_date}</p>

    </div>
    <div className={styles["icon-section"]}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><circle cx="8" cy="6" r="2.4" stroke="#0C172F" stroke-width="1.2"></circle><path d="M10.3321 1.50978C11.6159 2.15878 12.3811 2.91313 12.7821 3.72799C13.1818 4.54032 13.2556 5.48641 13.0179 6.59004C12.5337 8.83735 10.7951 11.5732 8.29618 14.6878C8.14421 14.8773 7.85561 14.8773 7.70364 14.6878C5.20507 11.5733 3.46656 8.83741 2.98235 6.5901C2.74455 5.48646 2.81836 4.54036 3.21795 3.72804C3.61878 2.91319 4.38385 2.15886 5.66738 1.50987C7.11906 0.775855 8.88039 0.77585 10.3321 1.50978Z" stroke="#0C172F" stroke-width="1.2"></path></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
    <p>gurgaon haryana 
      <br/> <span>cyber hub dlf phase 4 near ambiance mall</span> </p>

    </div>
    <div  className={` ${styles["shop-status"]}`}>
          

              <p className={styles["getdirection"]} >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 21.7148L19.4243 21.3685C20.9022 21.1573 22 19.8916 22 18.3986V6.45955C22 4.6339 20.383 3.23151 18.5757 3.4897L17 3.7148V21.7148Z" fill="#EB5757"/>
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M15 22L9 20V2L15 4V22Z" fill="#EB5757"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.57573 2.63148L7 2.28516V20.2852L5.42426 20.5103C3.61696 20.7684 2 19.3661 2 17.5404V5.60133C2 4.10838 3.09779 2.84262 4.57573 2.63148Z" fill="#EB5757"/>
</svg>
              Location </p>

              <hr className="seprater"/>

              <p className={styles["getdirection"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
<g clip-path="url(#clip0_5424_66158)">
<path opacity="0.25" d="M21.3876 19.5809L19.4827 21.4858C19.4827 21.4858 14.5329 23.6071 7.46184 16.5361C0.390776 9.46499 2.5121 4.51525 2.5121 4.51525L4.41703 2.61032C5.27765 1.7497 6.70098 1.85085 7.43124 2.82453L9.24952 5.24889C9.8467 6.04514 9.76751 7.15932 9.06373 7.86311L7.46184 9.46499C7.46184 9.46499 7.46184 10.8792 10.2903 13.7076C13.1187 16.5361 14.5329 16.5361 14.5329 16.5361L16.1348 14.9342C16.8386 14.2304 17.9528 14.1512 18.749 14.7484L21.1734 16.5667C22.1471 17.2969 22.2482 18.7203 21.3876 19.5809Z" fill="#EB5757"/>
<path d="M4.41995 2.61024L3.92923 3.10096L8.17188 8.75781L9.06665 7.86303C9.77044 7.15925 9.84962 6.04506 9.25244 5.24882L7.43417 2.82445C6.70391 1.85077 5.28057 1.74962 4.41995 2.61024Z" fill="#EB5757"/>
<path d="M21.3898 19.58L20.899 20.0708L15.2422 15.8281L16.137 14.9333C16.8408 14.2296 17.9549 14.1504 18.7512 14.7476L21.1755 16.5658C22.1492 17.2961 22.2504 18.7194 21.3898 19.58Z" fill="#EB5757"/>
</g>
<defs>
<clipPath id="clip0_5424_66158">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
            Contact Us  </p>
            </div>
    </div>
    {/* secound div  */}
        <div  className={styles["secound-div"]}> 
        <h3>Event Details </h3>

        {eventData?.ticket?.map((ticket:any)=>{

          return    <div className={styles["icon-section"]} style={{justifyContent:'space-between',cursor:'pointer'}} onClick={()=>selectTicket(ticket)}>
          <p>{ticket?.name} <br/> 
          <span style={{color:'#1f8deb'}}>Only {ticket?.remaining} Seat Left</span>  <br/>
           <span>{ticket?.description}</span> 
           </p>
         
          <p style={{fontWeight:800}}>₹{ticket?.price}/-</p>
          </div>
        })}
     
       
      
    <div className={styles["icon-section"]} style={{alignItems:"center"}}>
   <img src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fres.cloudinary.com%2Fdwzmsvp7f%2Fimage%2Fupload%2Fv1593509931%2Fsalient-features%2Ficon-features-age-family.png" width={26} height={26} />
    <p><span>for Age </span> <br/> family friend  </p>

    </div>
    <div className={styles["icon-section"]}>

      {eventData?.tags?.map((tag:any)=>{

        return     <span className="normal-tag">{tag}</span>
      })}
            

    </div>
 
    </div>
      </div>
   
      </div>
      {show && (
      <Modal 
      headerTitle="Book New Table"
       onClick={()=>setShow(false)} 
       footer={true} 
       ButtonFuc={ButtonFuc}
       buttonDetails={{"title":"Booking Now" }}
       >

<div className={styles["booking-wrapper"]}>

<div className={styles["days"]}>
  <h4> how many people ? </h4>
 
 <div className={styles["container"]} >
  {[...Array(EventBooking?.selectedTicket?.remaining)]?.map((elem,i)=>{
return   <div className={ styles[ EventBooking?.totalSeat == (i+1) ? "days-box-active":"days-box"]} onClick={()=>setEventBooking({...EventBooking,["totalSeat"]:i+1})}>
<h5>{i+1}</h5>

</div>
  })}

  
    </div>
    <div>
  </div>
</div>

<div className={styles["days"]}>
  <h4> Available Offer </h4>
 
 <div className={styles["container"]} >
 {[...Array(7)]?.map((i)=>{

return    <div className={`center-div coupon-section`} style={{gap:15}}>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
<path opacity="0.25" d="M21 5C22.1046 5 23 5.89543 23 7L23 7.76392C23 8.52147 22.5511 9.20363 22.0131 9.73696C21.5088 10.2369 21 10.9913 21 12C21 13.0087 21.5088 13.7631 22.0131 14.263C22.5511 14.7964 23 15.4785 23 16.2361L23 17C23 18.1046 22.1046 19 21 19L3 19C1.89543 19 0.999999 18.1046 0.999999 17L1 16.2361C1 15.4785 1.44892 14.7964 1.98692 14.263C2.49124 13.7631 3 13.0087 3 12C3 10.9913 2.49124 10.2369 1.98692 9.73696C1.44892 9.20362 1 8.52147 1 7.76392L1 7.00002C1 5.89545 1.89543 5.00002 3 5.00002L21 5Z" fill={randomColor()}/>
<path d="M14.7071 10.7071L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071C8.90237 14.3166 8.90237 13.6834 9.29289 13.2929L13.2929 9.29289C13.6834 8.90237 14.3166 8.90237 14.7071 9.29289C15.0976 9.68342 15.0976 10.3166 14.7071 10.7071Z" fill="#12131A"/>
<path d="M11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z" fill="#12131A"/>
<path d="M13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14Z" fill="#12131A"/>
</svg>
<h5 style={{whiteSpace:'nowrap'}}>
upto 10% off  <br />
<span className="grey-text">Valid for  </span> 

</h5>
 </div>
})}
  
    </div>
    <div>
  </div>
</div>



</div>
      </Modal>
     )} 
    </div>
  )
}

export default EventDetails