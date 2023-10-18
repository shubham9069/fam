
import { getCustomerById } from "@/services/customerService";
import { createTable } from "@/services/orderService";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const UserContext: any = createContext(null);

export const UserProvider = ({ children }: any): any => {
 const router =useRouter()
  const [userId, setUserId]: any = useState(null);
  const [user, setUser]: any = useState(null);
  const [token, setToken]: any = useState(null);
  const [loading, setLoading] = useState(false)
  const [BookingPayLoad,setBookingPayLoad] = useState({})
  const [BookingDetails,setBookingDetails] = useState({})


useEffect(()=>{
const userid = localStorage.getItem('userId');
const token = localStorage.getItem('token');


if(userid){
  setUserId(userid)
  setToken(token);
  
  const user =async()=>{
    
const userData = await getCustomerById(userid,token!)

setUser(userData?.response)

  }
  user()
}

},[])

const createBooking=async()=>{
  
  const toastId = toast.loading("Hold On ...");
 const res:any = await createTable(BookingPayLoad)
 if(res?.status==201){
  toast.success("Booked Successfully!", {
    id: toastId,
  });
  setBookingDetails({})
  setBookingPayLoad({})
  router.push('/')
};
}
const createEventBooking=async()=>{
console.log(BookingPayLoad)
}
 


  return <UserContext.Provider value={{ userId, setUserId, user, setUser, loading,setToken,token,setBookingPayLoad,BookingPayLoad,createBooking,setBookingDetails,BookingDetails,createEventBooking }}>{children}</UserContext.Provider>;
};

export default UserContext;
