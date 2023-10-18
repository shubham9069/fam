import axios from "axios";
import { getShopById } from "./userService";
import { getCustomerById } from "./customerService";
import toast, { Toaster } from "react-hot-toast";

export const getVouchers = async (id?: any, page = 1, pageSize = 100) => {
  try {

    const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/offer-service/api/v1/voucher/all?page=${page}&pageSize=${pageSize}`, {
      // service_id: '',
      // available_online: true,
      shop_id:  id,
      search_text: "",
      lookup_service: true,
    },{
      // headers: {
      //   "x-access-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTZhMzFiMTNhOTlhYmE5MTRlMDQ2NyIsIm1vYmlsZSI6IjkwNjkyMzIyMjkiLCJpYXQiOjE2ODkwNjcxNzh9.2ctZJGNKTWf2gyGhy0kMgfIdeQNwUKjRstabwEHQWQI'
      // }
    });
    
    if (response) {
      return {
        response: response?.data.vouchers,
      };
    } else {
      return { response: null };
    }
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};

export const getVoucherById = (id?: any, page = 1, pageSize = 100) => {
  try {
    const response = axios.get(`${process.env.NEXT_PUBLIC_POS_DEV}/offer-service/api/v1/voucher/${id}`,{ });
    if (response) {
      return {
        response: response?.data?.voucher,
      };
    } else {
      return { response: null };
    }
  } catch (err) {}
};
export const getSaleAll = async(id?: any,token:string, page = 1, pageSize = 100) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/order-service/api/v1/sale/all?page=${page}&pageSize=${pageSize}`,{
      "search_text": "",
      "sale_id": "",
      "shop_id": "",
      "status": "",
      "customer_id": id,
      "appointment_id": "",
      "start_date":"",
      "end_date":""
    },
    {
      headers: {
        "x-access-token": token
  
      }
    });
   
    if (response) {
      return {
        response: response?.data?.data,
      };
    } else {
      return { response: null };
    }
  } catch (err) {}
};

export const createSale = async (shop, user, obj,token) => {

  var total_amount =0
  var tax =0
  var taxable_amount =0
  var total_discount=0

  obj.forEach((data:any)=>{

     total_amount =total_amount+data?.total;
   
     tax +=data?.tax_amount;
     taxable_amount +=data?.taxable_amount
     total_discount +=data?.discount_amount
  })

  try {
    

    const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/order-service/api/v1/sale/`, {
      customer: {
        id: user?._id,
        name: user?.firstName,
        mobile: user?.mobile?.number,
        type: "Link",
      },
      status: "COMPLETED",
      appointment_id: null,
      shop_id:shop?._id,
      original_sale: null,
      line_items: obj,
      payment_details: {
        balance: 0,
        extra_charges: 0,
        payment_mode: "CASH",
        tip_amount: 0,
        total_amount: total_amount,
        total_change: 0,
        total_discount:0,
        total_subtotal: 0,
        total_tax:tax ,
        total_taxable_amount: taxable_amount,
        transactions: [
       
        ],
      },
      "shop_info": {
        "name": shop?.businessName,
        "address": shop?.address?.billing_address
      }

    },{
      headers: {
        "x-access-token": token
      }
    });
    if (response) {
      return {
        response: response?.data,
        status:response?.status,
        total:total_amount,
        
      };
    } else {
      return { response: null };
    }
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};
export const updateSale = async (data:any,payment_id:any,payment_mode:any,status:any,token:string) => {


  try {
    

    const response = await axios.put(`${process.env.NEXT_PUBLIC_POS_DEV}/order-service/api/v1/sale/${data?._id}`, {
    ...data,
      payment_details:{...data?.payment_details,transactions:[...data?.payment_details?.transactions,{ 
        payment_mode:payment_mode ,
      amount:data?.payment_details?.total_amount ,
      status:status,
      resource_id: payment_id,}]}
    

    },{
      headers: {
        "x-access-token": token
  
      }
    });
    if (response) {
      toast.success("Sale successful");
      return {
        response: response?.data,
        status:response?.status,
      
        
      };
    } else {
      return { response: null };
    }
  } catch (err) {
    toast.error("Sale  failed")
    return { err: { message: "Network Fail" } };
  }
};

export const getMemberships = async (id?: any, serviceId?: any, page = 1, pageSize = 100) => {
  try {
    const shop = await getShopById(id);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/offer-service/api/v1/membership/all?page=${page}&pageSize=${pageSize}`, {
      shop_id: shop && id,
      search_text: "",
    });
    if (response) {
      return {
        response: response?.data.memberships,
      };
    } else {
      return { response: null };
    }
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};

// export const createVoucher = async () => {
//   try {
//     const response = await axios.post("http://15.206.88.40/offer-service/api/v1/voucher", {
//       title: "Data Test Limit",
//       shop_id: "63eb63d13149c174533337f1",
//       mrp: "1000",
//       sale_price: "999",
//       available_online: true,
//       color: "blue",
//       deleted_at: null,
//       description: "Test",
//       expiration_period: "months_6",
//       max_number_of_sales: 50,
//       notes: "New note has been added",
//       notes_enabled: true,
//       redemption_type: "multiple-use",
//       sales_limit_enabled: true,
//       services_count: 1,
//       sold: 0,
//       services: ["641eed0d36d866c764eaa411"],
//     });
//   } catch (err) {
//     return { err: { message: "Network Fail" } };
//   }
// };
