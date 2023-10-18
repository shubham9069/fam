import axios from "axios";
import { getCustomerById } from "./customerService";
import { getShopById } from "./userService";

export const createTable = async (payload:any) => {

  try {
 
    const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/order-service/api/v1/booking`,payload,{
      headers: {
        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmZhMWU1YWZlMzEyOWU5MDExNmI3YiIsIm1vYmlsZSI6Ijg0NDc3NzkzMTEiLCJpYXQiOjE2ODA2OTEyMjN9.32GpyhdLU_UYhWsxs3wazjRImsPEBiLnGzzklJsh8Fc"
  
      }
    });
      return response
      
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};



export const getAllAppointments = async (userId:string,token?:string, empId?: any, page = 1, pageSize = 100) => {
 
  const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/order-service/api/v1/appointment/all?page=${page}&pageSize=${pageSize}`, {
    "status": "",
    "shop_id": "",
    "customer_id": userId,
    "employee_id": "",
    "start_date": "",
    "end_date": ""
  },{
    headers: {
      "x-access-token": token

    }
  });

  if (response) {
    return {
      response: response?.data.result,
    };
  } else {
    return { response: null };
  }
};

export const getAppointmentById = async (id?: any, page = 1, pageSize = 100) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_POS_DEV}/order-service/api/v1/appointment/${id}`);

    if (response) {
      return {
        response: response?.data.appointment,
      };
    } else {
      return { response: null };
    }
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};
