import axios from "axios";

export const getShop = async (input:any,page, pageSize) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASEURL_ZALON_DEV}/user-service/api/v1/shop/get-shop?page=${page}&pageSize=${pageSize}`, {
      _id: "",
      merchantId: "",
      location: "",
      businessType: "",
      searchTerm: input || "",
      approvalStatus: "",
      city: "",
    }, {
      headers: {
        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDAzNGVhYWZmZTBmMGY4OTY0ZmQyZCIsIm1vYmlsZSI6Ijg4NjExNzAxMDUiLCJpYXQiOjE2ODA3NDg5MTd9.Qhe1OnleqFSDYSXen31OPrbqCAn2n-m3r8zBOTybXsw"

      }
    });
  
    return response;
  } catch (error) {
    return { error: { message: "Network Fail" } };
  }
};

export const getShopById = async (id: any) => {
  try {
    // const response = await axios.get(`http://15.206.88.40/zalon/pos/user-service/api/v1/shop/fetch-shop/646f3905e904ed6141516219`);
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL_ZALON_DEV}/user-service/api/v1/shop/fetch-shop/${id}`, {
      headers: {
        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDAzNGVhYWZmZTBmMGY4OTY0ZmQyZCIsIm1vYmlsZSI6Ijg4NjExNzAxMDUiLCJpYXQiOjE2ODA3NDg5MTd9.Qhe1OnleqFSDYSXen31OPrbqCAn2n-m3r8zBOTybXsw"

      }
    });
    return {
      response: response.data.result,
    };
  } catch (error) {
    return { error: { message: "Network Fail" } };
  }
};

export const getTeamMembers = async (id?: any, page = 1, pageSize = 100) => {
  try {
    const shop = await getShopById(id);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/user-service/api/v1/team/get?page=${page}&pageSize=${pageSize}`, {
      shop_id: shop && id, //replace with id in
    },
    {  headers: {
      "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDAzNGVhYWZmZTBmMGY4OTY0ZmQyZCIsIm1vYmlsZSI6Ijg4NjExNzAxMDUiLCJpYXQiOjE2ODA3NDg5MTd9.Qhe1OnleqFSDYSXen31OPrbqCAn2n-m3r8zBOTybXsw"

    }});
    return {
      response: response?.data.data,
    };
  } catch (error) {
    return { error: { message: "Network Fail" } };
  }
};
