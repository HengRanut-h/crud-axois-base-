import axios from "axios";

const Request = async (url,method,header,data) => {
   try {
       const res = await axios({
           url:url,
           method:method,
           headers:header,
           data:data
           
       })
       return res.data;
   } catch (e) {
       console.log("API Error:",e);
       throw e;
   }

}
export default Request;
