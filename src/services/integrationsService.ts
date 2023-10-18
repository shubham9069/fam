import axios from "axios";
export const getOtp = async (email: any) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/integrations-service/api/v1/otp/send-otp`, {
      entity: email,
    });
    return response;
  } catch (error) {
    return { error: { message: "Network Fail" } };
  }
};

export const verifyOtp = async (email: any, OTP: any) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/customer-service/api/v1/customer/verify-otp`, {
      email: email,
      otp: OTP,
    });
    return {
      response: response?.data,
    };
  } catch (error) {
    return { error: { message: "Network Fail" } };
  }
};
