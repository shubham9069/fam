import axios from "axios";

export const login = async (email: any) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/customer-service/api/v1/customer/login`, {
      email: email,
    });
    return {
      response,
    };
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};

export const getCustomerById = async (id: any,token:string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_POS_DEV}/customer-service/api/v1/customer/${id}`, {  headers: {
      "x-access-token": token

    }});
    return {
      response: response?.data,
    };
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};

export const updateCustomerById = async (id: any, user: any,token:string) => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_POS_DEV}/customer-service/api/v1/customer/${id}`, user,{ headers: {
      "x-access-token": token

    }});
    return {
      response,
    };
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};
