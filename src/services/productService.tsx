import axios from "axios";
import { getShopById } from "./userService";

export const getAllServices = async (shopId?: any, categoryId?: any, page = 1, pageSize = 100) => {
  try {
    const shop = await getShopById(shopId);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/product-service/api/v1/service/get?page=${page}&pageSize=${pageSize}`, {
      shop_id: shop?.response && shopId,
      collections: categoryId ? [categoryId] : [],
    },{
     
    }
    );
    if (response?.data?.data) {
      return {
        response: response?.data.data,
      };
    } else {
      return { response: null };
    }
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};

export const getServiceById = async (serviceId: any,token:string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_POS_DEV}/product-service/api/v1/service/get/${serviceId}`,{  headers: {
      "x-access-token": token

    }});
    return {
      response: response?.data,
    };
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};

export const getCollection = async (id: any, page = 1, pageSize = 100) => {
  try {
    const shop = await getShopById(id);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/product-service/api/v1/collection/fetch-collection?page=${page}&pageSize=${pageSize}`, {
      // shopId: id,
      shopId: shop?.response && id,
    },{
   
    }
   );

  
    if (response?.data) {
   
      return {
        response: response?.data.result,
      };
    } else {
      return { response: null };
    }
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};

export const createReview = async (obj: any,token:string, page = 1, pageSize = 100) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/review-service/api/v1/review`, {
      obj,
      // shopId: shop?.response && id,
      // product_id: "6428140f3734ef1960fbb8fc",
      // customer_id: "63eb63d13149c174533337f1",
      // customer_name: "shruti",
      // review: {
      //   title: "test",
      //   description: "Very good",
      //   attachment: [],
      // },
      // review_type: "PRODUCT",
      // rating: 5,
      // status: "ACTIVE",
    },{
      headers: {
        "x-access-token": token
  
      }
    });
    if (response?.data) {
      return {
        response: response?.data,
      };
    } else {
      return { response: null };
    }
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};

export const getAvgShopRating = async (shopId: any) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_POS_DEV}/review-service/api/v1/review/shop-avg/${shopId}`, { });
    if (res) {
      return {
        response: res?.data,
      };
    } else {
      return {
        res: null,
      };
    }
  } catch (err) {
    return {
      err: { message: "Network Fail" },
    };
  }
};

// export const getRatingList = async (shopId: any, page = 1, pageSize = 100) => {
//   try {
//     const shop = await getShopById(shopId);
//     const res = await axios.post(`http://15.206.88.40/review-service/api/v1/review/rating-list?page=${page}&pageSize=${pageSize}`, {
//       shop_id: shop?.response && shopId,
//       search_text: "",
//       sort: {
//         total_rating_count: "",
//         avg_rating: "",
//       },
//     });
//     if (res?.data) {
//       return {
//         response: res?.data,
//       };
//     } else {
//       return {
//         response: null,
//       };
//     }
//   } catch (err) {
//     return { err: { message: "Network Fail" } };
//   }
// };

export const getAllReviewsById = async (shopId: any, page = 1, pageSize = 100) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/review-service/api/v1/review/get?page=${page}&pageSize=${pageSize}`, {
      customer_id: "",
      shop_id: "648f4f927d872fc097393a45",
      product_id: "",
      start_date: "2023-05-25",
      end_date: "2023-05-27",
    },{
      
    }
    );
    if (res?.data) {
      return {
        response: res?.data?.data,
      };
    } else {
      return {
        response: null,
      };
    }
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};
export const getAllTagById = async (shopId: any, page = 1, pageSize = 100) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/product-service/api/v1/tag/get-tag?page=${page}&pageSize=${pageSize}`, {
      
      shopId: shopId,
   
    },{
      headers: {
        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmZhMWU1YWZlMzEyOWU5MDExNmI3YiIsIm1vYmlsZSI6Ijg0NDc3NzkzMTEiLCJpYXQiOjE2ODA2OTEyMjN9.32GpyhdLU_UYhWsxs3wazjRImsPEBiLnGzzklJsh8Fc"

      }
    }
    );
   return res
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
};
