import React ,{useContext, useState,useMemo,useEffect} from "react";
import styles from "./ShopDetails.module.scss";
import Image from "next/image";
import Modal from '@/component/Common/Modal/Modal'
import Link from "next/link";
import { getShopById } from "@/services/userService";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/router";
import { getAllTagById } from "@/services/productService";

const ShopDetails = ({reviewList={data:[]},ShopData}:any) => {
  const {user,setBookingPayLoad,setBookingDetails}:any = useContext(UserContext)
  const router = useRouter()
    const [showReview, setShowReview]: any = useState(false);
    const [tabs,setTab]=useState(1)
    const [show,setShow] = useState(false)
    const [tag,setTag] = useState([])
    const [shopBooking,setShopBooking] = useState({
      bookDate:new Date(),
      bookTime:new Date(),
      totalSeat:1
    })

    const ButtonFuc = ()=>{
      let payload ={
        "customer": {
            "id": user?._id,
            "name": user?.firstName,
            "mobile": user?.mobile?.number
        },
        "booking_date": shopBooking?.bookDate,
        "booking_time": shopBooking?.bookTime,
        "total_seats": shopBooking?.totalSeat,
        "tables": [
            {
                "id": "5f84d1cc14b12b3020284e1a",
                "name": "",
                "table_no": 1,
                "seats_occupied": 4,
                "start_time": "3600"
            },
            {
                "id": "5f84d1cc14b12b3020284e1b",
                "name": "",
                "table_no": 2,
                "seats_occupied": 4,
                "start_time": "3600"
            }
        ],
        "note": "Window-side table with a view",
        "status": "NEW",
        //status can be - NEW, CANCELLED, COMPLETED, RESCHEDULED, NO-SHOW
        "shop_id": "652d31286731fb324143cd41",
        "payment": {
            "amount": 0.00,
            "mode": "",
            "status": "PAID"
        }
    }
    setBookingDetails({...ShopData,type:"shop"})
    setBookingPayLoad(payload)
    router.push('/checkout')

    }

 
    const week =['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', ]
    const month =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec' ]

    function randomColor(){
        const colorPlatte=[   'red', 'blue', 'purple', 'pink', 'yellow',
        'green', 'orange', 'brown', '#8E603B', '#D18B47'];

        return colorPlatte[Math.round(Math.random()*10)]
    }


    const getDay = useMemo(() => {
      const todayDate = new Date()
    
      var array:any= [new Date()]
      for(var i=0;i<6;i++){
array.push(todayDate.setDate(todayDate.getDate()+1))

      }

return array

    }, [])
    
    const getTime = useMemo(() => {
      const todayDate = new Date()
    const currentDate = new Date()

      var array:any= []
      for(var i=0;i<24-currentDate.getHours();i++){
array.push(todayDate.setHours(todayDate.getHours()+1))

      }

      

return array

    }, [])


    useEffect(()=>{

      (async()=>{
        const GetTag:any = await getAllTagById("652d31286731fb324143cd41")
      
        if(GetTag?.data){
          setTag(GetTag?.data?.result)
        }

      })()

    },[ShopData?._id])
   
  return (
//     <div className={`${styles["event-details"]} padding-2rem`}>
//       <div className={styles["top-section"]}>
//         {/* left  */}
//         <div className={styles["left"]}>
//           <img src={ShopData?.bannerURL} />

//           <div className={styles['tabs']}>
//             <div className={styles['tabs-name']}>
//               <h3 style={{borderBottom : tabs==1 ? `2px solid #EB5757`:"" }} onClick={()=>setTab(1)}>Description</h3>
//               <h3 style={{borderBottom : tabs==2 ? `2px solid #EB5757`:"" }} onClick={()=>setTab(2)}>Terms & Condition</h3>
//               <h3 style={{borderBottom : tabs==3 ? `2px solid #EB5757`:"" }} onClick={()=>setTab(3)}>Photo</h3>
//               <h3 style={{borderBottom : tabs==4 ? `2px solid #EB5757`:"" }} onClick={()=>setTab(4)}>Review</h3>
//             </div>
//             <div  className={styles["tab-content"]}>
//               {tabs==1 && (
//  <p>     What do you get when you put scrumptious food and jaw-dropping
//  entertainment together? India’s grandest carnival! Zomaland by
//  Zomato is back - BIGGER, BETTER, and GRANDER! Get ready to step
//  into the grandest foodie’s paradise, filled with the best of food
//  &amp; drinks. Munch on delectable culinary delights and celebrate
//  with the most exciting musical acts & comedians from across the
//  country. Enter an ‘Instagrammable’ dream studded with experiential
//  wonders across every corner and get ready to indulge in a weekend
//  spectacle headlined by the best of food, entertainment, games and
//  a whole lot more!</p>
//               )}
//               {tabs==2 && (

//   <p>Whether you call it a terms of use, terms of service, or terms and conditions, this powerhouse document helps maintain control over your site as long as your guidelines fall within applicable laws.

//   Here are a few examples of what you can include in yours:
//   <br/>
//   1. Establish and clarify your intellectual property rights<br/>
//   2. Limit your liabilities<br/>
//   3. Outline your dispute resolution options<br/>
//   4. Disclose your governing laws<br/>
//   5. Establish payment terms<br/>
//   6. Include shipping policy and return and refund details<br/>
//   7. Inform users about your privacy policy<br/>
//   8.Outline acceptable uses, prohibited behaviors, and their consequences<br/>
//   It answers several common customer service questions and provides clear protocols if users try to take advantage of your operations.</p>
//               )}
//               {tabs==3 && (
//  <div className={styles["image-section"]}>
          
//     {ShopData?.images.map((item: any) => (
      
//      <img src={item}/>
//     ))}
 
// </div>
//               )}
//               {tabs==4 && (
     
//       <div className={styles["ratings-wrapper"]}>
//         <h4>Customer reviews</h4>

//         <div className={styles["ratings-container"]}>
//           <div className={styles["avg-ratings"]}>
//             <div className={styles["ratings-number-wrapper"]}>
//               <p className={styles["ratings-number"]}>0</p>
//               <p className={styles["total-rating"]}> 0 Verified Buyers</p>
//             </div>
//           </div>
//           <div className={styles["ratings-right-container"]}>
//             <div className={styles["ratings-list"]}>
//               {[1,2,]?.map((item: any, index: any) => (
//                 <div className={styles["rating-card"]} key={`review-card-${index}`}>
//                   <p className={styles["user-profile"]}>
//                     <div className={styles["user-profile-image"]}>
//                       <img src={"http://shubham-store-.metcloud.shop/_next/image?url=https%3A%2F%2Fzalon-staging-file-bkt.s3.ap-south-1.amazonaws.com%2FFILE%2F047a9937-bad9-4cb5-821d-d6982648c25d.png&w=256&q=75"} height={20} width={20} alt="user" />
//                     </div>
//                     <div className={styles["user-info"]}>
//                       <span className={styles["user-name"]}>shubham kaushik </span>{" "}
//                       <div className={styles["user-ratings"]}>
//                         {item.rating >= 1 && <Image src={"/star.svg"} alt="icon" width={16} height={16} />}
//                         {item.rating >= 2 && <Image src={"/star.svg"} alt="icon" width={16} height={16} />}
//                         {item.rating >= 3 && <Image src={"/star.svg"} alt="icon" width={16} height={16} />}
//                         {item.rating >= 4 && <Image src={"/star.svg"} alt="icon" width={16} height={16} />}
//                         {item.rating >= 5 && <Image src={"/star.svg"} alt="icon" width={16} height={16} />}
//                       </div>
//                     </div>
//                   </p>
//                   <div className={styles["review-content"]}>
//                     <span className={styles["review-title"]}>good product </span>
//                     <p className={styles["review-description"]}>cbchdvdhcvcc cc agcucga cacgucg caucgackagckag qjcgcqgcc qc</p>
//                     <p className={styles["review-date"]}>12-may-2001</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
      
//               )}
           
//             </div>




//           </div>
    
//         </div>

//         {/* rigth  */}
//         <div className={styles["right"]}>
//           {/* first div  */}
//           <div>
//             <h1>{ShopData?.businessName}</h1>
//             <p className={styles["shop-type-text"]}>{ShopData?.businessType}</p>
//             <span className="grey-text">
//               {ShopData?.address?.business_address?.address_line_1}&nbsp;
//               {ShopData?.address?.business_address?.address_line_2}&nbsp;
//               {ShopData?.address?.business_address?.city} &nbsp;
//               {ShopData?.address?.business_address?.state}&nbsp;
//               {ShopData?.address?.business_address?.pincode}&nbsp;
//               </span>
//             <div className={styles["icon-section"]} style={{flexWrap:'wrap'}}>
//               {tag?.map((tag:any)=>{

//                 return  <span className="grey-tag">{tag?.tag}</span>
//               })}
             
             
//             </div> 
//             <div className={` ${styles["shop-status"]}`} >
//               <p
//                 className={styles["getdirection"]}
                
//               >
//                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
// <circle opacity="0.25" cx="12" cy="12" r="10" fill="#EB5757"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12.5523 6 13 6.44772 13 7V11.5858L15.2071 13.7929C15.5976 14.1834 15.5976 14.8166 15.2071 15.2071C14.8166 15.5976 14.1834 15.5976 13.7929 15.2071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V7C11 6.44772 11.4477 6 12 6Z" fill="#EB5757"/>
// </svg>
//                 Closed
//               </p>
//               <hr className="seprater"/>
//               <p className={styles["getdirection"]} style={{ color: "black" }}>
//                 Open at 12 noon
//               </p>
//             </div>
            

//             <div  className={` ${styles["shop-status"]}`}>
//               <p className={styles["getdirection"]} onClick={()=>setShow(true)}   >
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
// <circle opacity="0.25" cx="12" cy="12" r="10" fill="#EB5757"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12.5523 6 13 6.44772 13 7V11.5858L15.2071 13.7929C15.5976 14.1834 15.5976 14.8166 15.2071 15.2071C14.8166 15.5976 14.1834 15.5976 13.7929 15.2071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V7C11 6.44772 11.4477 6 12 6Z" fill="#EB5757"/>
// </svg>
//                 Book a seat
//               </p>
//               <hr className="seprater"/>

//               <p className={styles["getdirection"]} >
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M17 21.7148L19.4243 21.3685C20.9022 21.1573 22 19.8916 22 18.3986V6.45955C22 4.6339 20.383 3.23151 18.5757 3.4897L17 3.7148V21.7148Z" fill="#EB5757"/>
// <path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M15 22L9 20V2L15 4V22Z" fill="#EB5757"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M4.57573 2.63148L7 2.28516V20.2852L5.42426 20.5103C3.61696 20.7684 2 19.3661 2 17.5404V5.60133C2 4.10838 3.09779 2.84262 4.57573 2.63148Z" fill="#EB5757"/>
// </svg>
//               </p>

//               <hr className="seprater"/>

//               <p className={styles["getdirection"]}>
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
// <g clip-path="url(#clip0_5424_66158)">
// <path opacity="0.25" d="M21.3876 19.5809L19.4827 21.4858C19.4827 21.4858 14.5329 23.6071 7.46184 16.5361C0.390776 9.46499 2.5121 4.51525 2.5121 4.51525L4.41703 2.61032C5.27765 1.7497 6.70098 1.85085 7.43124 2.82453L9.24952 5.24889C9.8467 6.04514 9.76751 7.15932 9.06373 7.86311L7.46184 9.46499C7.46184 9.46499 7.46184 10.8792 10.2903 13.7076C13.1187 16.5361 14.5329 16.5361 14.5329 16.5361L16.1348 14.9342C16.8386 14.2304 17.9528 14.1512 18.749 14.7484L21.1734 16.5667C22.1471 17.2969 22.2482 18.7203 21.3876 19.5809Z" fill="#EB5757"/>
// <path d="M4.41995 2.61024L3.92923 3.10096L8.17188 8.75781L9.06665 7.86303C9.77044 7.15925 9.84962 6.04506 9.25244 5.24882L7.43417 2.82445C6.70391 1.85077 5.28057 1.74962 4.41995 2.61024Z" fill="#EB5757"/>
// <path d="M21.3898 19.58L20.899 20.0708L15.2422 15.8281L16.137 14.9333C16.8408 14.2296 17.9549 14.1504 18.7512 14.7476L21.1755 16.5658C22.1492 17.2961 22.2504 18.7194 21.3898 19.58Z" fill="#EB5757"/>
// </g>
// <defs>
// <clipPath id="clip0_5424_66158">
// <rect width="24" height="24" fill="white"/>
// </clipPath>
// </defs>
// </svg>
//               </p>
//             </div>
            
//           </div>
//           {/* secound div  */}
//           <div className={styles["secound-div"]}>
//             <h3>Pricing & Offer </h3>
        
//             <div className={styles["icon-section"]} style={{ justifyContent: "space-between" }}>

//               <p>
//                 Single entry <br />
//                 <span style={{ color: "#1f8deb" }}>Valid 1 person</span> <br />
//                 <span>only one girl and boy allowed !</span>
//               </p>

//               <p style={{ fontWeight: 800 }}>₹199/-</p>
//             </div>
           
//             <div
//               className={styles["icon-section"]}
//               style={{ alignItems: "center" }}
//             >
//               <img
//                 src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fres.cloudinary.com%2Fdwzmsvp7f%2Fimage%2Fupload%2Fv1593509931%2Fsalient-features%2Ficon-features-age-family.png"
//                 width={26}
//                 height={26}
//               />
//               <p>
//                 <span>for Age </span> <br /> family friend{" "}
//               </p>
//             </div>

//             {/* offer  */}
//             <div className={styles["icon-section"]} style={{gap:20}}>
//                 <div className={styles["coupon-section"]}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
//   <path opacity="0.25" d="M21 5C22.1046 5 23 5.89543 23 7L23 7.76392C23 8.52147 22.5511 9.20363 22.0131 9.73696C21.5088 10.2369 21 10.9913 21 12C21 13.0087 21.5088 13.7631 22.0131 14.263C22.5511 14.7964 23 15.4785 23 16.2361L23 17C23 18.1046 22.1046 19 21 19L3 19C1.89543 19 0.999999 18.1046 0.999999 17L1 16.2361C1 15.4785 1.44892 14.7964 1.98692 14.263C2.49124 13.7631 3 13.0087 3 12C3 10.9913 2.49124 10.2369 1.98692 9.73696C1.44892 9.20362 1 8.52147 1 7.76392L1 7.00002C1 5.89545 1.89543 5.00002 3 5.00002L21 5Z" fill={randomColor()}/>
//   <path d="M14.7071 10.7071L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071C8.90237 14.3166 8.90237 13.6834 9.29289 13.2929L13.2929 9.29289C13.6834 8.90237 14.3166 8.90237 14.7071 9.29289C15.0976 9.68342 15.0976 10.3166 14.7071 10.7071Z" fill="#12131A"/>
//   <path d="M11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z" fill="#12131A"/>
//   <path d="M13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14Z" fill="#12131A"/>
// </svg>
//   <p>
//     upto 10% off  <br />
//     <span >Valid for one time table book  hixsahu gcusagudd dgasiusdgsuada  </span> 
    
//   </p>
//                  </div>
//                 <div className={styles["coupon-section"]}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
//   <path opacity="0.25" d="M21 5C22.1046 5 23 5.89543 23 7L23 7.76392C23 8.52147 22.5511 9.20363 22.0131 9.73696C21.5088 10.2369 21 10.9913 21 12C21 13.0087 21.5088 13.7631 22.0131 14.263C22.5511 14.7964 23 15.4785 23 16.2361L23 17C23 18.1046 22.1046 19 21 19L3 19C1.89543 19 0.999999 18.1046 0.999999 17L1 16.2361C1 15.4785 1.44892 14.7964 1.98692 14.263C2.49124 13.7631 3 13.0087 3 12C3 10.9913 2.49124 10.2369 1.98692 9.73696C1.44892 9.20362 1 8.52147 1 7.76392L1 7.00002C1 5.89545 1.89543 5.00002 3 5.00002L21 5Z" fill={randomColor()}/>
//   <path d="M14.7071 10.7071L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071C8.90237 14.3166 8.90237 13.6834 9.29289 13.2929L13.2929 9.29289C13.6834 8.90237 14.3166 8.90237 14.7071 9.29289C15.0976 9.68342 15.0976 10.3166 14.7071 10.7071Z" fill="#12131A"/>
//   <path d="M11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z" fill="#12131A"/>
//   <path d="M13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14Z" fill="#12131A"/>
// </svg>
//   <p>
//     upto 10% off  <br />
//     <span >Valid for one time table book </span> 
    
//   </p>
//                  </div>
//                 <div className={styles["coupon-section"]}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
//   <path opacity="0.25" d="M21 5C22.1046 5 23 5.89543 23 7L23 7.76392C23 8.52147 22.5511 9.20363 22.0131 9.73696C21.5088 10.2369 21 10.9913 21 12C21 13.0087 21.5088 13.7631 22.0131 14.263C22.5511 14.7964 23 15.4785 23 16.2361L23 17C23 18.1046 22.1046 19 21 19L3 19C1.89543 19 0.999999 18.1046 0.999999 17L1 16.2361C1 15.4785 1.44892 14.7964 1.98692 14.263C2.49124 13.7631 3 13.0087 3 12C3 10.9913 2.49124 10.2369 1.98692 9.73696C1.44892 9.20362 1 8.52147 1 7.76392L1 7.00002C1 5.89545 1.89543 5.00002 3 5.00002L21 5Z" fill={randomColor()}/>
//   <path d="M14.7071 10.7071L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071C8.90237 14.3166 8.90237 13.6834 9.29289 13.2929L13.2929 9.29289C13.6834 8.90237 14.3166 8.90237 14.7071 9.29289C15.0976 9.68342 15.0976 10.3166 14.7071 10.7071Z" fill="#12131A"/>
//   <path d="M11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z" fill="#12131A"/>
//   <path d="M13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14Z" fill="#12131A"/>
// </svg>
//   <p>
//     upto 10% off  <br />
//     <span >Valid for one time table book </span> 
    
//   </p>
//                  </div>

// </div>
            
//           </div>
//         </div>
//       </div>

      
//      {show && (
//       <Modal headerTitle="Book New Table" onClick={()=>setShow(false)} footer={true} buttonDetails={{"title":"Booking Now" }} ButtonFuc={ButtonFuc}>

// <div className={styles["booking-wrapper"]}>

// <div className={styles["days"]}>
//   <h4> what day ? </h4>
 
//  <div className={styles["container"]} >
//   {getDay?.map((elem:any)=>{
   
// return   <div className={styles[ shopBooking?.bookDate.getDate() ==new Date(elem).getDate() ? "days-box-active":"days-box"]} onClick={()=>setShopBooking({...shopBooking,bookDate:new Date(elem)})}>
// <h5>{week[new Date(elem)?.getDay()]}</h5>
// <span className="grey-text">{new Date(elem).getDate()} {month[new Date(elem).getMonth()]} </span>
// </div>
//   })}
  
//     </div>
//     <div>
//   </div>
// </div>

// <div className={styles["days"]}>
//   <h4> how many people ? </h4>
 
//  <div className={styles["container"]} >
//   {[1,2,3,4,5,6,7,8]?.map((elem)=>{
// return   <div className={styles[ shopBooking.totalSeat==elem ? "days-box-active":"days-box"]} onClick={()=>{setShopBooking({...shopBooking,totalSeat:elem})}}>
// <h5>{elem}</h5>

// </div>
//   })}
  
//     </div>
//     <div>
//   </div>
// </div>
// <div className={styles["days"]}>
//   <h4> what time  ? </h4>
 
//  <div className={styles["container"]} >
//   {getTime?.map((elem:any)=>{
// return   <div className={styles[ shopBooking.bookTime.getHours()==new Date(elem).getHours() ? "days-box-active":"days-box"]}  onClick={()=>{setShopBooking({...shopBooking,bookTime:new Date(elem)})}}>
// <h5>{`${new Date(elem).getHours()}:00`}</h5>

// </div>
//   })}
  
//     </div>
//     <div>
//   </div>
// </div>
// <div className={styles["days"]}>
//   <h4> Available Offer </h4>
 
//  <div className={styles["container"]} >
//  {[...Array(7)]?.map((i)=>{

// return    <div className={`center-div ${styles["coupon-section"]}`} style={{gap:15}}>
// <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
// <path opacity="0.25" d="M21 5C22.1046 5 23 5.89543 23 7L23 7.76392C23 8.52147 22.5511 9.20363 22.0131 9.73696C21.5088 10.2369 21 10.9913 21 12C21 13.0087 21.5088 13.7631 22.0131 14.263C22.5511 14.7964 23 15.4785 23 16.2361L23 17C23 18.1046 22.1046 19 21 19L3 19C1.89543 19 0.999999 18.1046 0.999999 17L1 16.2361C1 15.4785 1.44892 14.7964 1.98692 14.263C2.49124 13.7631 3 13.0087 3 12C3 10.9913 2.49124 10.2369 1.98692 9.73696C1.44892 9.20362 1 8.52147 1 7.76392L1 7.00002C1 5.89545 1.89543 5.00002 3 5.00002L21 5Z" fill={randomColor()}/>
// <path d="M14.7071 10.7071L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071C8.90237 14.3166 8.90237 13.6834 9.29289 13.2929L13.2929 9.29289C13.6834 8.90237 14.3166 8.90237 14.7071 9.29289C15.0976 9.68342 15.0976 10.3166 14.7071 10.7071Z" fill="#12131A"/>
// <path d="M11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z" fill="#12131A"/>
// <path d="M13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14Z" fill="#12131A"/>
// </svg>
// <h5 style={{whiteSpace:'nowrap'}}>
// upto 10% off  <br />
// <span className="grey-text">Valid for  </span> 

// </h5>
//  </div>
// })}
  
//     </div>
//     <div>
//   </div>
// </div>



// </div>
//       </Modal>
//      )} 
//     </div>

<div className={`${styles["event-details"]} padding-2rem`}>

<div className={styles["event-info"]}>
      <h1>{ShopData?.businessName}</h1>
      <p className={styles["shop-type-text"]}>{ShopData?.businessType}</p>
      <span className="grey-text">
        {ShopData?.address?.business_address?.address_line_1}&nbsp;
        {ShopData?.address?.business_address?.address_line_2}&nbsp;
        {ShopData?.address?.business_address?.city} &nbsp;
        {ShopData?.address?.business_address?.state}&nbsp;
        {ShopData?.address?.business_address?.pincode}&nbsp;
        </span>
      <div className={styles["icon-section"]} style={{flexWrap:'wrap'}}>
        {tag?.map((tag:any)=>{

          return  <span className="grey-tag">{tag?.tag}</span>
        })}
       
       
      </div> 
      <div className={` ${styles["shop-status"]}`} >
        <p
          className={styles["getdirection"]}
          
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
<circle opacity="0.25" cx="12" cy="12" r="10" fill="#EB5757"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12.5523 6 13 6.44772 13 7V11.5858L15.2071 13.7929C15.5976 14.1834 15.5976 14.8166 15.2071 15.2071C14.8166 15.5976 14.1834 15.5976 13.7929 15.2071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V7C11 6.44772 11.4477 6 12 6Z" fill="#EB5757"/>
</svg>
          Closed
        </p>
        <hr className="seprater"/>
        <p className={styles["getdirection"]} style={{ color: "black" }}>
          Open at 12 noon
        </p>
      </div>
      

      <div  className={` ${styles["shop-status"]}`}>
        <p className={styles["getdirection"]} onClick={()=>setShow(true)}   >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
<circle opacity="0.25" cx="12" cy="12" r="10" fill="#EB5757"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12.5523 6 13 6.44772 13 7V11.5858L15.2071 13.7929C15.5976 14.1834 15.5976 14.8166 15.2071 15.2071C14.8166 15.5976 14.1834 15.5976 13.7929 15.2071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V7C11 6.44772 11.4477 6 12 6Z" fill="#EB5757"/>
</svg>
          Book a seat
        </p>
        <hr className="seprater"/>

        <p className={styles["getdirection"]} >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 21.7148L19.4243 21.3685C20.9022 21.1573 22 19.8916 22 18.3986V6.45955C22 4.6339 20.383 3.23151 18.5757 3.4897L17 3.7148V21.7148Z" fill="#EB5757"/>
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M15 22L9 20V2L15 4V22Z" fill="#EB5757"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.57573 2.63148L7 2.28516V20.2852L5.42426 20.5103C3.61696 20.7684 2 19.3661 2 17.5404V5.60133C2 4.10838 3.09779 2.84262 4.57573 2.63148Z" fill="#EB5757"/>
</svg>
        </p>

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
        </p>
      </div>
      
    </div>
<div className={styles["top-section"]}>
  {/* left  */}
  <div className={styles["left"]}>
   

    <div className={styles['tabs']}>
      <div className={styles['tabs-name']}>
        <h3 style={{borderBottom : tabs==1 ? `2px solid #EB5757`:"" }} onClick={()=>setTab(1)}>Description</h3>
        <h3 style={{borderBottom : tabs==2 ? `2px solid #EB5757`:"" }} onClick={()=>setTab(2)}>Terms & Condition</h3>
        <h3 style={{borderBottom : tabs==3 ? `2px solid #EB5757`:"" }} onClick={()=>setTab(3)}>Photo</h3>
        <h3 style={{borderBottom : tabs==4 ? `2px solid #EB5757`:"" }} onClick={()=>setTab(4)}>Review</h3>
      </div>
      <div  className={styles["tab-content"]}>
        {tabs==1 && (
<p>     What do you get when you put scrumptious food and jaw-dropping
entertainment together? India’s grandest carnival! Zomaland by
Zomato is back - BIGGER, BETTER, and GRANDER! Get ready to step
into the grandest foodie’s paradise, filled with the best of food
&amp; drinks. Munch on delectable culinary delights and celebrate
with the most exciting musical acts & comedians from across the
country. Enter an ‘Instagrammable’ dream studded with experiential
wonders across every corner and get ready to indulge in a weekend
spectacle headlined by the best of food, entertainment, games and
a whole lot more!</p>
        )}
        {tabs==2 && (

<p>Whether you call it a terms of use, terms of service, or terms and conditions, this powerhouse document helps maintain control over your site as long as your guidelines fall within applicable laws.

Here are a few examples of what you can include in yours:
<br/>
1. Establish and clarify your intellectual property rights<br/>
2. Limit your liabilities<br/>
3. Outline your dispute resolution options<br/>
4. Disclose your governing laws<br/>
5. Establish payment terms<br/>
6. Include shipping policy and return and refund details<br/>
7. Inform users about your privacy policy<br/>
8.Outline acceptable uses, prohibited behaviors, and their consequences<br/>
It answers several common customer service questions and provides clear protocols if users try to take advantage of your operations.</p>
        )}
        {tabs==3 && (
<div className={styles["image-section"]}>
    
{ShopData?.images.map((item: any) => (

<img src={item}/>
))}

</div>
        )}
        {tabs==4 && (

<div className={styles["ratings-wrapper"]}>
  <h4>Customer reviews</h4>

  <div className={styles["ratings-container"]}>
    <div className={styles["avg-ratings"]}>
      <div className={styles["ratings-number-wrapper"]}>
        <p className={styles["ratings-number"]}>0</p>
        <p className={styles["total-rating"]}> 0 Verified Buyers</p>
      </div>
    </div>
    <div className={styles["ratings-right-container"]}>
      <div className={styles["ratings-list"]}>
        {[1,2,]?.map((item: any, index: any) => (
          <div className={styles["rating-card"]} key={`review-card-${index}`}>
            <p className={styles["user-profile"]}>
              <div className={styles["user-profile-image"]}>
                <img src={"http://shubham-store-.metcloud.shop/_next/image?url=https%3A%2F%2Fzalon-staging-file-bkt.s3.ap-south-1.amazonaws.com%2FFILE%2F047a9937-bad9-4cb5-821d-d6982648c25d.png&w=256&q=75"} height={20} width={20} alt="user" />
              </div>
              <div className={styles["user-info"]}>
                <span className={styles["user-name"]}>shubham kaushik </span>{" "}
                <div className={styles["user-ratings"]}>
                  {item.rating >= 1 && <Image src={"/star.svg"} alt="icon" width={16} height={16} />}
                  {item.rating >= 2 && <Image src={"/star.svg"} alt="icon" width={16} height={16} />}
                  {item.rating >= 3 && <Image src={"/star.svg"} alt="icon" width={16} height={16} />}
                  {item.rating >= 4 && <Image src={"/star.svg"} alt="icon" width={16} height={16} />}
                  {item.rating >= 5 && <Image src={"/star.svg"} alt="icon" width={16} height={16} />}
                </div>
              </div>
            </p>
            <div className={styles["review-content"]}>
              <span className={styles["review-title"]}>good product </span>
              <p className={styles["review-description"]}>cbchdvdhcvcc cc agcucga cacgucg caucgackagckag qjcgcqgcc qc</p>
              <p className={styles["review-date"]}>12-may-2001</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        )}
     
      </div>




    </div>

  </div>

  {/* rigth  */}
  <div className={styles["right"]}>
    {/* first div  */}
  
    {/* secound div  */}
    <div className={styles["secound-div"]}>
      <h3>Pricing & Offer </h3>
  
      <div className={styles["icon-section"]} style={{ justifyContent: "space-between" }}>

        <p>
         Rs 500 /-<br/>
          <span style={{ color: "#1f8deb" }}>For Two People</span> <br />
          
        </p>

        
      </div>
     
      <div
        className={styles["icon-section"]}
        style={{ alignItems: "center" }}
      >
        <img
          src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fres.cloudinary.com%2Fdwzmsvp7f%2Fimage%2Fupload%2Fv1593509931%2Fsalient-features%2Ficon-features-age-family.png"
          width={26}
          height={26}
        />
        <p>
          <span>for Age </span> <br /> family friend{" "}
        </p>
      </div>

      {/* offer  */}
      <div className={styles["icon-section"]} style={{gap:20}}>
          <div className={styles["coupon-section"]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
<path opacity="0.25" d="M21 5C22.1046 5 23 5.89543 23 7L23 7.76392C23 8.52147 22.5511 9.20363 22.0131 9.73696C21.5088 10.2369 21 10.9913 21 12C21 13.0087 21.5088 13.7631 22.0131 14.263C22.5511 14.7964 23 15.4785 23 16.2361L23 17C23 18.1046 22.1046 19 21 19L3 19C1.89543 19 0.999999 18.1046 0.999999 17L1 16.2361C1 15.4785 1.44892 14.7964 1.98692 14.263C2.49124 13.7631 3 13.0087 3 12C3 10.9913 2.49124 10.2369 1.98692 9.73696C1.44892 9.20362 1 8.52147 1 7.76392L1 7.00002C1 5.89545 1.89543 5.00002 3 5.00002L21 5Z" fill={randomColor()}/>
<path d="M14.7071 10.7071L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071C8.90237 14.3166 8.90237 13.6834 9.29289 13.2929L13.2929 9.29289C13.6834 8.90237 14.3166 8.90237 14.7071 9.29289C15.0976 9.68342 15.0976 10.3166 14.7071 10.7071Z" fill="#12131A"/>
<path d="M11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z" fill="#12131A"/>
<path d="M13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14Z" fill="#12131A"/>
</svg>
<p>
upto 10% off  <br />
<span >Valid for one time table book  hixsahu gcusagudd dgasiusdgsuada  </span> 

</p>
           </div>
          <div className={styles["coupon-section"]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
<path opacity="0.25" d="M21 5C22.1046 5 23 5.89543 23 7L23 7.76392C23 8.52147 22.5511 9.20363 22.0131 9.73696C21.5088 10.2369 21 10.9913 21 12C21 13.0087 21.5088 13.7631 22.0131 14.263C22.5511 14.7964 23 15.4785 23 16.2361L23 17C23 18.1046 22.1046 19 21 19L3 19C1.89543 19 0.999999 18.1046 0.999999 17L1 16.2361C1 15.4785 1.44892 14.7964 1.98692 14.263C2.49124 13.7631 3 13.0087 3 12C3 10.9913 2.49124 10.2369 1.98692 9.73696C1.44892 9.20362 1 8.52147 1 7.76392L1 7.00002C1 5.89545 1.89543 5.00002 3 5.00002L21 5Z" fill={randomColor()}/>
<path d="M14.7071 10.7071L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071C8.90237 14.3166 8.90237 13.6834 9.29289 13.2929L13.2929 9.29289C13.6834 8.90237 14.3166 8.90237 14.7071 9.29289C15.0976 9.68342 15.0976 10.3166 14.7071 10.7071Z" fill="#12131A"/>
<path d="M11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z" fill="#12131A"/>
<path d="M13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14Z" fill="#12131A"/>
</svg>
<p>
upto 10% off  <br />
<span >Valid for one time table book </span> 

</p>
           </div>
          <div className={styles["coupon-section"]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
<path opacity="0.25" d="M21 5C22.1046 5 23 5.89543 23 7L23 7.76392C23 8.52147 22.5511 9.20363 22.0131 9.73696C21.5088 10.2369 21 10.9913 21 12C21 13.0087 21.5088 13.7631 22.0131 14.263C22.5511 14.7964 23 15.4785 23 16.2361L23 17C23 18.1046 22.1046 19 21 19L3 19C1.89543 19 0.999999 18.1046 0.999999 17L1 16.2361C1 15.4785 1.44892 14.7964 1.98692 14.263C2.49124 13.7631 3 13.0087 3 12C3 10.9913 2.49124 10.2369 1.98692 9.73696C1.44892 9.20362 1 8.52147 1 7.76392L1 7.00002C1 5.89545 1.89543 5.00002 3 5.00002L21 5Z" fill={randomColor()}/>
<path d="M14.7071 10.7071L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071C8.90237 14.3166 8.90237 13.6834 9.29289 13.2929L13.2929 9.29289C13.6834 8.90237 14.3166 8.90237 14.7071 9.29289C15.0976 9.68342 15.0976 10.3166 14.7071 10.7071Z" fill="#12131A"/>
<path d="M11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z" fill="#12131A"/>
<path d="M13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14Z" fill="#12131A"/>
</svg>
<p>
upto 10% off  <br />
<span >Valid for one time table book </span> 

</p>
           </div>

</div>
      
    </div>
  </div>
</div>


{show && (
<Modal headerTitle="Book New Table" onClick={()=>setShow(false)} footer={true} buttonDetails={{"title":"Booking Now" }} ButtonFuc={ButtonFuc}>

<div className={styles["booking-wrapper"]}>

<div className={styles["days"]}>
<h4> what day ? </h4>

<div className={styles["container"]} >
{getDay?.map((elem:any)=>{

return   <div className={styles[ shopBooking?.bookDate.getDate() ==new Date(elem).getDate() ? "days-box-active":"days-box"]} onClick={()=>setShopBooking({...shopBooking,bookDate:new Date(elem)})}>
<h5>{week[new Date(elem)?.getDay()]}</h5>
<span className="grey-text">{new Date(elem).getDate()} {month[new Date(elem).getMonth()]} </span>
</div>
})}

</div>
<div>
</div>
</div>

<div className={styles["days"]}>
<h4> how many people ? </h4>

<div className={styles["container"]} >
{[1,2,3,4,5,6,7,8]?.map((elem)=>{
return   <div className={styles[ shopBooking.totalSeat==elem ? "days-box-active":"days-box"]} onClick={()=>{setShopBooking({...shopBooking,totalSeat:elem})}}>
<h5>{elem}</h5>

</div>
})}

</div>
<div>
</div>
</div>
<div className={styles["days"]}>
<h4> what time  ? </h4>

<div className={styles["container"]} >
{getTime?.map((elem:any)=>{
return   <div className={styles[ shopBooking.bookTime.getHours()==new Date(elem).getHours() ? "days-box-active":"days-box"]}  onClick={()=>{setShopBooking({...shopBooking,bookTime:new Date(elem)})}}>
<h5>{`${new Date(elem).getHours()}:00`}</h5>

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

return    <div className={`center-div ${styles["coupon-section"]}`} style={{gap:15}}>
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
  );
};

export default ShopDetails;

// rendering using SSR for faster loading

