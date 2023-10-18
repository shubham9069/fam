import axios from "axios";
export const getAllEvent = async (id:any,page=1,pageSize=10) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_POS_DEV}/order-service/api/v1/event/get?page=${page}&pageSize=${pageSize}`, {
        
            "shop_id": id,
            "status": "ACTIVE"
            // "name": "India Pakistan WC Match",
            // "categories": [
            //     "Sports"
            // ],
            // "tags": [
            //     "Cricket"
            // ],
            // "search_text": "el",
            // "start_date": "2023-10-13T15:00:00.000Z",
            // "end_date": "2023-10-19T15:00:00.000Z"
        
    },{headers: {
        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDAzNGVhYWZmZTBmMGY4OTY0ZmQyZCIsIm1vYmlsZSI6Ijg4NjExNzAxMDUiLCJpYXQiOjE2ODA3NDg5MTd9.Qhe1OnleqFSDYSXen31OPrbqCAn2n-m3r8zBOTybXsw"

      }});
    return response;
  } catch (error) {
    return { error: { message: "Network Fail" } };
  }
};
export const getEventById = async (id:any) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_POS_DEV}/order-service/api/v1/event/${id}`,{headers: {
        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDAzNGVhYWZmZTBmMGY4OTY0ZmQyZCIsIm1vYmlsZSI6Ijg4NjExNzAxMDUiLCJpYXQiOjE2ODA3NDg5MTd9.Qhe1OnleqFSDYSXen31OPrbqCAn2n-m3r8zBOTybXsw"

      }});
    return response;
  } catch (error) {
    return { error: { message: "Network Fail" } };
  }
};


